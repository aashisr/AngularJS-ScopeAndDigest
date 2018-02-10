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


//Declare new controller
//If InternalCtrl div is defined inside PlaygroundCtrl div in index.html,
//Scope of the Playground controller is parent of the scope of Internal controller
//Scope in internal controller has access to variables defined in scope of Playground controller
//Variables in InternalCtrl can not be accessed in PlaygroundCtrl
angular.module('learndigest').controller('InternalCtrl', function ($scope) {
    $scope.secret = "shhhh" + $scope.force;
});