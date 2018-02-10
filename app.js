//Declared app named learndigest
angular.module('learndigest', []);

// Declare controller, inject scope variable in controller
angular.module('learndigest').controller('PlaygroundCtrl', function ($scope) {
    var vm = this;

    //Adding new variable to use ng-if statement
    vm.enableForceEdit = true;

    //Add new attribute on scope
    vm.force = 30;

    //Add function to reset force to 0
    vm.resetForce = function () {
        vm.force = 0;
    }

    //Add a watch statement
    //First argument is a string which represents an expression expression we want to watch
    //Second argument will be a function that will run whenever the value of first argument changes
    $scope.$watch('vm.force', function (newValue, oldValue) {
        console.log('Force value has changed', vm.force, newValue, oldValue);
    })
});


//Declare new controller
//If InternalCtrl div is defined inside PlaygroundCtrl div in index.html,
//Scope of the Playground controller is parent of the scope of Internal controller
//Scope in internal controller has access to variables defined in scope of Playground controller
//Variables in InternalCtrl can not be accessed in PlaygroundCtrl

//Now, scope in this InternalCtrl have access only to the playground variable
angular.module('learndigest').controller('InternalCtrl', function ($scope) {
    var vm = this;

    //Add access to parent controller, playground is a variable
    vm.playground = $scope.$parent.vm;

    //Access to force variable from playground controller
    vm.secret = "shhhh" + vm.playground.force;
});