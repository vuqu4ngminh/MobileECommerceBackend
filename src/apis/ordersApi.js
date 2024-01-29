import express from "express"
import ordersController from "../controller/ordersController"

const router = express.Router()
const initOrdersAPIRoute = (app) => {
    router.get('/', ordersController.getAllOrder)
    router.get('/:id', ordersController.getOrderById)
    router.post('/', ordersController.getOrderByUserId)
    router.post('/add', ordersController.addOrder)
    router.post('/update', ordersController.updateOrder)
    router.post('/delete/:id', ordersController.deleteOrderByUserId)

    return app.use('/api/v1/orders/', router)
}

export default initOrdersAPIRoute