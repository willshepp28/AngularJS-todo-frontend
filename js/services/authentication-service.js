angular.module("todoApp")
    .factory("AuthenticationService", AuthenticationService);



function AuthenticationService($http){

    var self = this;


    self.register = function(username, password){

        $scope.data = {
            username: username,
            password: password
        }

        $http({
            method: "POST",
            url: "http://localhost:3000/api/v1/auth/signup",
            data: $scope.data
        })
        .then(function success() {
            console.log("You successfully signed up")
        }, function error(){
            console.log("error");
        })
    }



    self.login = function(username, password) {
        
    }

    // Checks if their is a token in localstorage
    self.getToken = function(){
        return $window.localStorage("token");
    }

    // Logs the current user out by removing the token
    self.logout = function(){
        $window.localStorage.removeItem("token");
    }





}