//Declared app named learndigest
angular.module('learndigest', []);

// Declare controller, inject scope variable in controller
angular.module('learndigest').controller('PlaygroundCtrl', function ($scope) {
    //Create a new object vm,
    // vm stores all other variables we need in addition to this scope
    var vm = this;

    //Bind vm to scope, playground is a variable
    //This line can be removed and a special syntax can be added in ng-controller (PlaygroundCtrl as playground)
    //$scope.playground = vm;

    //Add new attribute on scope
    //Now, $scope can be changed to vm
    vm.force = 30;

    //Add function to reset force to 0
    vm.resetForce = function () {
        vm.force = 0;
    }
});


//Declare new controller
//If InternalCtrl div is defined inside PlaygroundCtrl div in index.html,
//Scope of the Playground controller is parent of the scope of Internal controller
//Scope in internal controller has access to variables defined in scope of Playground controller
//Variables in InternalCtrl can not be accessed in PlaygroundCtrl

//Now, scope in this InternalCtrl have access only to the playground variable
angular.module('learndigest').controller('InternalCtrl', function ($scope) {
    $scope.secret = "shhhh" + $scope.playground.force;
});