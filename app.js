//Declared app named learndigest
angular.module('learndigest', []);

// Declare controller, inject scope variable in controller
angular.module('learndigest').controller('PlaygroundCtrl', function ($scope) {
    //Add new attribute on scope
    $scope.force = 30;

    //Add function to reset force to 0
    $scope.resetForce = function () {
        $scope.force = 0;
    }
});

