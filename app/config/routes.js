var express = require('express');
var apiRouter = express.Router();
var User = require('../models/User');
var usersController = require('../controllers/users-controller'); // bring in controllers

apiRouter.param('user_id', usersController.userById);

// configure router middleware
apiRouter.route('/users')

  .post(usersController.create)

  .get(usersController.index);

apiRouter.route('/users/:user_id')

  .get(usersController.show)

  .patch(usersController.update)

  .delete(usersController.destroy);

module.exports = apiRouter;