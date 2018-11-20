
angular.module("todoApp")
    .controller("loginController", loginController);



function loginController($scope, $http, $window, $log, $timeout, $state){

    $scope.user;


        
        $scope.login = function(){

            if($scope.user.username && $scope.user.password){
            
            var data = $scope.user;

            $http({
                method: "POST",
                url: "http://localhost:3000/api/v1/auth/login",
                data: data
            })
            .then(function(success){
                // $log.log(success.data.token);
                $window.localStorage.setItem("token", success.data.token);
                $log.log("This is the token below");
                $log.log($window.localStorage.getItem("token"));

                $timeout(function(){
                    $state.go("home");
                },3000)
            }, function(error) {
                console.log(error);
            })
        }
    }
}