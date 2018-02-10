//Declared app named learndigest
angular.module('learndigest', []);

// Declare controller, inject scope variable in controller
angular.module('learndigest').controller('PlaygroundCtrl', function ($scope) {
    var vm = this;

    //Create new object userProperties to watch this object
    vm.userProperties = {
        favoriteColor: 'white',
        nickname: 'aashis',
        force: 30
    };

    //Adding new variable to use ng-if statement
    vm.enableForceEdit = true;

    //Add new attribute on scope
    //Update force to use userProperties force
    vm.userProperties.force = 30;

    //Add function to reset force to 0
    //Now, change whole of user properties object so as to deep watch
    vm.resetForce = function () {
        vm.userProperties.force = 0;
    }


    //Deep watch whole vm.userProperties object
    //Third argument 'true'  tells angular that this watch is a deep watch
    //That means if any property on the vm.userProperties is changed, it prints the changed value in console
    $scope.$watch('vm.userProperties', function () {
        console.log('User properties changed:', vm.userProperties)
    }, true);
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