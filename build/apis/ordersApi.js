"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = _interopRequireDefault(require("express"));
var _ordersController = _interopRequireDefault(require("../controller/ordersController"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var router = _express["default"].Router();
var initOrdersAPIRoute = function initOrdersAPIRoute(app) {
  router.get('/', _ordersController["default"].getAllOrder);
  router.get('/:id', _ordersController["default"].getOrderById);
  router.post('/', _ordersController["default"].getOrderByUserId);
  router.post('/add', _ordersController["default"].addOrder);
  router.post('/update', _ordersController["default"].updateOrder);
  router.post('/delete/:id', _ordersController["default"].deleteOrderByUserId);
  return app.use('/api/v1/orders/', router);
};
var _default = exports["default"] = initOrdersAPIRoute;