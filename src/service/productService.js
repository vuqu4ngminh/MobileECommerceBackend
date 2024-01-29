import supabase from "../database/connection";

const createId = () => {
    let value = 0;
    do {
        value = Math.floor(Math.random() * 2147483648)
    } while (value > 2147483647);
    return value;
}
// CREATE
const addProduct = async (name, description, price, imageUrl, status) => {
    let id = createId();
    const { error } = await supabase.from('product').insert([
        {id, name, description, price, imageUrl, status },
    ]);

    if (error) {
        console.error('Error creating record:', error.message);
    }
}

// Get all
const getAllProduct = async () => {
    const { data, error } = await supabase
        .from('product')
        .select()
        .order('status', { ascending: false });
        
    if (error) {
        console.error('Error reading records:', error.message);
    } else {
        return data
    }
}
// Get product by id
const getProductById = async (id) => {
    const { data, error } = await supabase
        .from('product')
        .select('*')
        .eq('id',id);

    if (error) {
        console.error('Error reading records:', error.message);
    } else {
        return data
    }
}
// UPDATE
const updateProduct = async (id, name, description, price, imageUrl, status) => {
    const { error } = await supabase
        .from('product')
        .update({name, description, price, imageUrl, status})
        .eq('id', id);

    if (error) {
        console.error('Error updating record:', error.message);
    }
}

// DELETE
const deleteProduct = async (id) => {
    const { error } = await supabase
        .from('product')
        .delete()
        .eq('id', id);

    if (error) {
        console.error('Error deleting record:', error.message);
    }
}

module.exports = {
    addProduct,
    getAllProduct,
    getProductById,
    updateProduct,
    deleteProduct
}