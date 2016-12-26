var universityApp = angular.module('universityApp', ["ngRoute",'ui.bootstrap']);
universityApp.config(function($routeProvider) {
    $routeProvider
    .when("/", {
        templateUrl : "home/home.html",
        controller: 'HomeController'
    })
    .when("/students", {
        templateUrl : "students/student.html",
        controller: 'StudentController'
    })
    .otherwise( {
        redirectTo : "/"
    });
});
