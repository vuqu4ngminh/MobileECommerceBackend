"use strict";

var _express = _interopRequireDefault(require("express"));
var _bodyParser = _interopRequireDefault(require("body-parser"));
var _mongoose = _interopRequireDefault(require("mongoose"));
var _productApi = _interopRequireDefault(require("./apis/productApi"));
var _ordersApi = _interopRequireDefault(require("./apis/ordersApi"));
var _usersApi = _interopRequireDefault(require("./apis/usersApi"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
require('dotenv').config();
var app = (0, _express["default"])();
var PORT = process.env.PORT || 6868;
app.use(_bodyParser["default"].urlencoded({
  extended: true
}));
app.use(_bodyParser["default"].json());
_mongoose["default"].connect(process.env.MONGODB_URL).then(function () {
  app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
  });
  (0, _usersApi["default"])(app);
  (0, _productApi["default"])(app);
  (0, _ordersApi["default"])(app);
  app.listen(PORT, function () {
    console.log("Live at http://localhost:".concat(PORT));
  });
})["catch"](function (error) {
  console.log(error);
});