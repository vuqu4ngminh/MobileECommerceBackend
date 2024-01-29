import { User } from "../model/model";

const getUser = async () => {
    try {
        const users = await User.find({})
        return users
    } catch (error) {
        console.log(error);
    }
}
const getUserByEmail = async (_email) => {
    try {
        const users = await User.find({email: _email})
        return users
    } catch (error) {
        console.log(error);
    }
}
const getUserByEmailPassword = async (_email, _password) => {
    try {
        const users = await User.find({email: _email,password: _password}).exec()
        return users
    } catch (error) {
        console.log(error);
    }
}
const addUser = async (_name, _phone, _email, _address, _password, _role) => {
    try {
        const user = {
            name: _name,
            phone: _phone,
            email: _email,
            address: _address,
            password: _password,
            role: _role
        }
        await User.create(user)
    } catch (error) {
        console.log(error);
    }
}
const getUserById = async (_id) => {
    try {
        const currentUser = await User.findById(_id)
        return currentUser
    } catch (error) {
        console.log(error);
    }
}
const updateUser = async (_id, _name, _phone, _email, _address, _password, _role) => {
    try {
        const id = {
            _id: _id
        }
        const newData = {
            name: _name,
            phone: _phone,
            email: _email,
            address: _address,
            password: _password,
            role: _role
        }
        await User.findOneAndUpdate(id, newData)
    } catch (error) {
        console.log(error);
    }
}
const deleteUser = async (_id) => {
    try {
        const id = {
            _id: _id
        }
        await User.deleteOne(id)
    } catch (error) {
        console.log(error);
    }
}

module.exports = {
    getUser,
    getUserByEmailPassword,
    getUserByEmail,
    addUser,
    updateUser,
    getUserById,
    deleteUser
}