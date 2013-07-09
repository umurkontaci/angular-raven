angular.module("ravenTest", ["angular-raven"]).controller("TestController", function($scope, Raven) {
    "use strict";
    $scope.user = { name: "Umur", id: 1 };
    $scope.message = "Hello World Error";
    $scope.sendMessageToRaven = function () {
        Raven.captureMessage($scope.message);
    };
    $scope.throwError = function () {
        throw new Error($scope.message);
    };

    $scope.$watch("user", function (user) {
        if (user) Raven.setUser(user);
        else Raven.setUser();
    });

}).value("RavenConfig", {
        ravenUrl: "http://yourravenhash@yourdomain.com/1" // this should be your raven endpoint URL
});