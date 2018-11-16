
angular.module("todoApp", [
    "ui.router"
])
.config(["$stateProvider", "$urlRouterProvider", function($stateProvider, $urlRouterProvider){

    $urlRouterProvider.otherwise("/home");

    $stateProvider
        .state("home", {
            url: "/home",
            templateUrl: "partials/home.html"
        })
        .state("login", {
            url: "/login",
            templateUrl: "partials/login.html"
        })
        .state("signup", {
            url: "/signup",
            templateUrl: "partials/signup.html"
        })

}])
