import productService from "../service/productService";

// get all product
const getAllProduct = async (req, res) => {
    const products = await productService.getAllProduct();
    return res.status(200).send(products)
}

// get product by id
const getProductById = async (req, res) => {
    const id = req.params.id
    const product = await productService.getProductById(id)
    return res.status(200).send(product)
}

// create
const addProduct = async (req, res) => {
    const { name, description, price, imageUrl, status } = req.body
    await productService.addProduct(name, description, price, imageUrl, status)
    return res.status(201).json({
        "status": 201,
        "message": "Created"
    })
}

// update
const updateProduct = async (req,res) => {
    const { id, name, description, price, imageUrl, status } = req.body
    await productService.updateProduct(id, name, description, price, imageUrl, status)
    return res.status(200).json({
        "status": 200,
        "message": "Updated"
    })
}

// delete
const deleteProduct = async (req,res) => {
    const id = req.params.id
    await productService.deleteProduct(id)
    return res.status(200).json({
        "status": 200,
        "statusText": "Deleted"
    })
}
module.exports = {
    getAllProduct,
    getProductById,
    addProduct,
    updateProduct,
    deleteProduct
}