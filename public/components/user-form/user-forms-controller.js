angular.module('jamedr')

.controller('newUsersController', ['$scope', 'apiService', '$state', function($scope, apiService, $state) {

  $scope.createUser = function() {
    apiService.create($scope.user);
    $state.go('users');
  };

}]);