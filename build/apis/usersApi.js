"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = _interopRequireDefault(require("express"));
var _usersController = _interopRequireDefault(require("../controller/usersController"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var router = _express["default"].Router();
var initUsersAPIRoute = function initUsersAPIRoute(app) {
  router.get('/', _usersController["default"].getUser);
  router.post('/find/email', _usersController["default"].getUserByEmail);
  router.post('/login', _usersController["default"].getUserByEmailPassword);
  router.post('/add', _usersController["default"].addUser);
  router.get('/:id', _usersController["default"].getUserById);
  router.post('/update', _usersController["default"].updateUser);
  router.post('/delete/:id', _usersController["default"].deleteUser);
  return app.use("/api/v1/users/", router);
};
var _default = exports["default"] = initUsersAPIRoute;