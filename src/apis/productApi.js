import express from "express"
import productController from "../controller/productController";

const router = express.Router()
const initProductAPIRoute = (app) => {
    router.get('/', productController.getAllProduct)
    router.get('/:id', productController.getProductById)
    router.post('/add', productController.addProduct)
    router.post('/update', productController.updateProduct)
    router.post('/delete/:id', productController.deleteProduct)
    return app.use('/api/v1/product/', router)
}

export default initProductAPIRoute