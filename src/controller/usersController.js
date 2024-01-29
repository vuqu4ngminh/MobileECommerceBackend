import userService from "../service/userService";
import ordersService from "../service/ordersService";
require('dotenv').config();

const getUser = async (req, res) => {
    try {
        const users = await userService.getUser()
        return res.status(200).json(users)
    } catch (error) {
        return res.status(500).json({
            message: error
        })
    }
}
const addUser = async (req, res) => {
    try {
        const { name, phone, email, address, password, role } = req.body
        await userService.addUser(name, phone, email, address, password, role)
        return res.status(201).json({
            message: "OK"
        })
    } catch (error) {
        return res.status(400).json({
            message: error
        })
    }
}
const getUserById = async (req, res) => {
    try {
        const currentUser = await userService.getUserById(req.params.id)
        return res.status(200).json(currentUser)
    } catch (error) {
        return res.status(400).json({
            message: error
        })
    }
}
const getUserByEmail = async (req, res) => {
    try {
        const currentUser = await userService.getUserByEmail(req.body.email)
        return res.status(200).json(currentUser)
    } catch (error) {
        return res.status(400).json({
            message: error
        })
    }
}
const updateUser = async (req, res) => {
    try {
        const { id, name, phone, email, address, password, role } = req.body
        await userService.updateUser(id, name, phone, email, address, password, role)
        return res.status(200).json({
            message: "OK"
        })
    } catch (error) {
        return res.status(400).json({
            message: error
        })
    }
}
const deleteUser = async (req, res) => {
    try {
        const id = req.params.id
        await ordersService.deleteOrderByUserId(id)
        await userService.deleteUser(id)
        return res.status(200).json({
            message: "OK"
        })
    } catch (error) {
        return res.status(400).json({
            message: error
        })
    }
}
// login
const getUserByEmailPassword = async (req,res) => {
    try {
        const {email, password} = req.body
        const user = await userService.getUserByEmailPassword(email,password)
        return res.status(200).json(user)
    } catch (error) {
        return res.status(400).json({
            message: error
        })
    }
}
module.exports = {
    getUser,
    addUser,
    updateUser,
    getUserById,
    getUserByEmail,
    getUserByEmailPassword,
    deleteUser
}