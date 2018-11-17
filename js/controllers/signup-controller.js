


angular.module("todoApp")
    .controller("signupController", signupController);




function signupController($scope,$http, $log){



    $scope.user;


   $scope.signup = function(){
       $log.log("You loggd this function");

     


       if($scope.user.username && $scope.user.password){
            var data = $scope.user;

            $http({
                method: "POST",
                url: "http://localhost:3000/api/v1/auth/signup",
                data: data
            })
            .then(function success() {
                console.log("You successfully signed up")
            }, function error(){
                console.log("error");
            })
       }
   }






}