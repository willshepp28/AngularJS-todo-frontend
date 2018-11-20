angular.module("todoApp")
    .factory("AuthenticationService", AuthenticationService);



function AuthenticationService(){

    var self = this;


    // Checks if their is a token in localstorage
    self.getToken = function(){
        return $window.localStorage("token");
    }

    // Logs the current user out by removing the token
    self.logout = function(){
        $window.localStorage.removeItem("token");
    }





}