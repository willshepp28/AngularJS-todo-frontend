
angular.module("todoApp", [
    "ui.router",
    "ngStorage"
])
.config(["$stateProvider", "$urlRouterProvider", "$locationProvider", 
function($stateProvider, $urlRouterProvider, $locationProvider){

    $urlRouterProvider.otherwise("/home");

    $stateProvider
        .state("home", {
            url: "/home",
            templateUrl: "partials/home.html"
        })
        .state("login", {
            url: "/login",
            templateUrl: "partials/login.html",
            controller: "loginController",
            params:{obj:null}
        })
        .state("signup", {
            url: "/signup",
            templateUrl: "partials/signup.html",
            controller: "signupController",
            params:{obj:null}
        })

}])
