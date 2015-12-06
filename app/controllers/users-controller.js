var User = require('../models/User');

function userById(request, response, next, id) {
  User.findById(id, function(error, user) {
    if (error) console.error('Could not update user b/c:', error);

    request.user = user; // store user in request
    next(); // callback to move onto next handler
  });
}

function create(request, response) {
  // create a new user based of user data
  var user = new User(request.body);

  // save the user
  user.save(function(error) {
    if (error) console.error('Not able to create user b/c:', error);

    response.json({message: 'User successfully created'});
  });
}

function index(request, response) {
  User.find(function(error, users) {
    if (error) console.error('Could not retrieve users b/c:', error);

    response.json(users);
  });
}

function show(request, response) {
  response.json(request.user);
}

function update(request, response) {
  var data = request.body;
  var user = request.user;

  Object.keys(data).forEach(function(key) {
    user.set(key, data[key]); // set replaces the value of a field with the specified value
  });

  user.save(function(error) {
    if (error) console.error('Could not update user b/c:', error);

    response.json({message: 'User successfully updated'});
  });
}

function destroy(request, response) {
  User.remove({ _id: request.params.user_id }, function(error) {
    if (error) console.error('Could not delete user b/c:', error);

    response.json({message: 'User successfully deleted'});
  });
}

module.exports = {
  userById: userById,
  create: create,
  index: index,
  show: show,
  update: update,
  destroy: destroy
};