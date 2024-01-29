import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import initProductAPIRoute from "./apis/productApi";
import initOrdersAPIRoute from "./apis/ordersApi";
import initUsersAPIRoute from "./apis/usersApi";

require('dotenv').config()
const app = express();
const PORT = process.env.PORT || 6868;
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

mongoose.connect(process.env.MONGODB_URL).then(() => {
    app.use((req, res, next) => {
        res.setHeader('Access-Control-Allow-Origin', '*');
        res.setHeader('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE');
        res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
        res.setHeader('Access-Control-Allow-Credentials', true);
    
        next();
    })
    
    initUsersAPIRoute(app);
    initProductAPIRoute(app);
    initOrdersAPIRoute(app);
    app.listen(PORT, () => {
        console.log(`Live at http://localhost:${PORT}`);
    });
}).catch((error) => {
    console.log(error);
})