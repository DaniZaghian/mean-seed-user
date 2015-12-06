angular.module('jamedr')

.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {

  $stateProvider

    .state('users', {
      url: '/',
      templateUrl: '../components/users/users-view.html',
      controller: 'UsersController'
    })

    .state('new', {
      url: '/new',
      templateUrl: '../components/user-form/user-form-view.html',
      controller: 'newUsersController'
    });

    // catchall
   $urlRouterProvider.otherwise('/');

}]);