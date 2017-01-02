var universityApp = angular.module('universityApp', ["ngRoute", 'ui.bootstrap']);
universityApp.config(function($routeProvider) {
    $routeProvider
        .when("/", {
            templateUrl: "modules/home/home.html",
            controller: 'HomeController'
        })
        .when("/students", {
            templateUrl: "modules/students/student.html",
            controller: 'StudentController'
        })
        .when("/subjects", {
            templateUrl: "modules/subjects/subject.html",
            controller: 'SubjectController'
        })
        .when("/departments", {
            templateUrl: "modules/departments/department.html",
            controller: 'DepartmentController'
        })
        .otherwise({
            redirectTo: "/"
        });
});
