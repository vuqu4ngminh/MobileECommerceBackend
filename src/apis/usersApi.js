import express from "express";
import usersController from "../controller/usersController";

const router = express.Router()

const initUsersAPIRoute = (app) => {
    router.get('/', usersController.getUser)
    router.post('/find/email', usersController.getUserByEmail)
    router.post('/login', usersController.getUserByEmailPassword)
    router.post('/add', usersController.addUser)
    router.get('/:id', usersController.getUserById)
    router.post('/update', usersController.updateUser)
    router.post('/delete/:id', usersController.deleteUser)
    return app.use("/api/v1/users/", router)
}

export default initUsersAPIRoute;