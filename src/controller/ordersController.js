import ordersService from "../service/ordersService"

// get all order
const getAllOrder = async (req, res) => {
    const orders = await ordersService.getAllOrder()
    return res.status(200).send(orders)
}
// get order by id
const getOrderById = async (req,res) => {
    const id = req.params.id
    const order = await ordersService.getOrderById(id)
    return res.status(200).send(order)
}
// get order by user id
const getOrderByUserId = async (req,res) => {
    const id = req.body.userId
    const orders = await ordersService.getOrderByUserId(id)
    return res.status(200).send(orders)
}
// delete order by user id
const deleteOrderByUserId = async (req,res) => {
    const id = req.params.id
    await ordersService.deleteOrderByUserId(id)
    return res.status(200).json({
        "status": 200,
        "statusText": "Deleted"
    })
}
// create order
const addOrder = async (req,res) => {
    const orderData = {
        cartItems: req.body.cartItems,
        total: Number(req.body.total),
        userId: req.body.userId,
        address: req.body.address
    }
    await ordersService.addOrder(orderData)
    return res.status(201).json({
        "status": 201,
        "statusText": "Created"
    })
}
// update order
const updateOrder = async (req, res) => {
    const {orderId,address,status} = req.body
    await ordersService.updateOrder(orderId,address,status)
    return res.status(200).json({
        "status": 200,
        "statusText": "Updated"
    })
}

module.exports = {
    getAllOrder,
    deleteOrderByUserId,
    getOrderById,
    getOrderByUserId,
    addOrder,
    updateOrder
}