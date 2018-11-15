
angular.module("todoApp", [
    "ngRoutes"
])
.config(["$routeProvider", function($routeProvider) {

    $routeProvider
        .when("/", {
            templateUrl: "",
            controller: "mainController"
        })
}])
