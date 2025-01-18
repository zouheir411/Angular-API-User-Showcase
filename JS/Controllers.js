var app = angular.module('MyModule');

var  PreviousController = function($scope, apiService) {
    $scope.message = "Hello World";
    $scope.ShouldBeVisible = false;
    if($scope.ShouldBeVisible){
    apiService.getFirstUser().then(function(response) {
        $scope.user = response;
    });
}



    $scope.search = function() {
        $scope.IsLoading = true;
        apiService.getUserById($scope.userId).then(function(response) {
            $scope.user = response;
            $scope.IsLoading = false;
        });
    };


    $scope.GetUsers = function() {
        apiService.getAllUsers().then(function(response) {
            $scope.users = response;
        });
    };
};

var MainController = function () {
    alert("Main controller loaded")
}

app.controller('PreviousController', PreviousController);
app.controller('MainController', MainController);
