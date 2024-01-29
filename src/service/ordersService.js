import supabase from "../database/connection";
import userService from "../service/userService";
require('dotenv').config();

const createId = () => {
    let value = 0;
    do {
        value = Math.floor(Math.random() * 2147483648)
    } while (value > 2147483647);
    return value;
}

// add order
const addOrder = async (orderData) => {
    const orderId = createId()
    const orderDate = new Date().toISOString();
    const status = "open"
    const {userId,total,address,cartItems} = orderData
    const {error} = await supabase
        .from('orders')
        .insert([
            {id: orderId,userId,total,address,orderDate,status}
        ])

    if (error) {
        console.error(error);
    } else {
        cartItems.forEach(async item => {
            const productId = item.id
            const total = item.price * item.quantity
            const amount = item.quantity
            const {error} = await supabase
                .from('orders_products')
                .insert([
                    {orderId,productId,total,amount}
                ])
            
            if (error) {
                console.log(error);
            }
        });
    }
}
const getOrderById = async (orderId) => {
    const { data, error } = await supabase
        .from('orders')
        .select(`
        *,
        orders_products: id (
            total,
            amount,
            product: productId (
                name
            )
        )`)
        .eq('id', orderId)

    if (error) {
        console.error(error);
    } else {
        const newData = await Promise.all(data.map(async (order) => {
            const user = await userService.getUserById(order.userId)
            return { ...order, name: user.name, email: user.email, phone: user.phone };
        }));

        return newData
    }
}
// get order by user id
const getOrderByUserId = async (userId) => {
    const { data, error } = await supabase
        .from('orders')
        .select()
        .eq('userId', userId)
        .order('orderDate', { ascending: false })
    if (error) {
        console.error(error);
    } else {
        return data
    }
}
// get all orders
const getAllOrder = async () => {
    const { data, error } = await supabase
        .from('orders')
        .select()
        .order('orderDate', { ascending: false })
    if (error) {
        console.error(error);
    } else {
        const newData = await Promise.all(data.map(async (order) => {
            const user = await userService.getUserById(order.userId)
            return { ...order, name: user.name };
        }));

        return newData
    }
}

// delete order by user id
const deleteOrderByUserId = async (userId) => {
    const { error } = await supabase
        .from('orders')
        .delete()
        .eq('userId', userId)

    if (error) {
        console.error(error);
    }
}
// update order
const updateOrder = async (orderId,_address,_status) => {
    const {error} = await supabase
        .from('orders')
        .update({address: _address,status: _status})
        .eq('id', orderId)

    if (error) {
        console.log(error);
    }
}

module.exports = {
    getOrderById,
    getAllOrder,
    getOrderByUserId,
    deleteOrderByUserId,
    addOrder,
    updateOrder
}