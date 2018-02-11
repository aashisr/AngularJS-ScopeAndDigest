//Declared app named learndigest
angular.module('learndigest', []);

// Declare controller, inject scope variable in controller
angular.module('learndigest').controller('PlaygroundCtrl', function ($scope) {
    var vm = this;

    //Create new object userProperties to watch this object
    vm.force = 30;

    //Add new attribute on scope
    vm.force = 30;

    //Add function to reset force to 0
    //Now, change whole of user properties object so as to deep watch
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
    var vm = this;

    //Add access to parent controller, playground is a variable
    vm.playground = $scope.$parent.vm;

    //watcher that watches force variable from parent controller
/*    $scope.$watch('vm.playground.force', function () {
        console.log('the force is strong', vm.playground.force);
    });
*/

    //Destroy watcher after 3 watches
    var watchesRemain = 3;

    //To access the playground controller from internal controller as in index.html, we need to go two parents up
    var watchDestroyer = $scope.$parent.$parent.$watch('vm.force', function () {
        console.log('the force is strong', vm.playground.force);
        watchesRemain--;
        if (watchesRemain === 0) {
            watchDestroyer();
        }
    });
});