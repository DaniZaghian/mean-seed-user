angular.module('jamedr')

.controller('UsersController', ['$scope', 'apiService', function($scope, apiService) {

  apiService.index()
  .then(function(users) {
    $scope.users = users;
  });

}]);