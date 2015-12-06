angular.module('jamedr')

.factory('apiService', ['$http', function($http) {
  return {
    index: function() {
      return $http.get('/api/users')
      .then(function(response) {
        var users = response.data;
        console.log('users:', users);
        return users;
      });
    },
    create: function(user) {
      $http.post('/api/users', user);
    }
  };
}]);