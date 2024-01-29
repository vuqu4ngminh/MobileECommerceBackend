"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = _interopRequireDefault(require("express"));
var _productController = _interopRequireDefault(require("../controller/productController"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var router = _express["default"].Router();
var initProductAPIRoute = function initProductAPIRoute(app) {
  router.get('/', _productController["default"].getAllProduct);
  router.get('/:id', _productController["default"].getProductById);
  router.post('/add', _productController["default"].addProduct);
  router.post('/update', _productController["default"].updateProduct);
  router.post('/delete/:id', _productController["default"].deleteProduct);
  return app.use('/api/v1/product/', router);
};
var _default = exports["default"] = initProductAPIRoute;