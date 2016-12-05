/*
 * @Author: Ngo Hung Phuc
 * @Date:   2016-11-27 15:36:00
 * @Last Modified by:   hoangphucvu
 * @Last Modified time: 2016-12-05 10:54:23
 */
/**
 * app Module
 *
 * Description
 * Restrict A stand for Attribute
 * E for element
 * C for class
 * M for comment
 */
angular.module('app', []);

angular.module('app').controller('mainCtrl', function ($scope) {
    $scope.user1 = {
        name: 'Luke Skywalker',
        address: {
            street: 'PO Box 123',
            city: 'Secret Rebel Base',
            planet: 'Yavin 4'
        },
        friends: [
            'Han',
            'Leia',
            'Chewbacca'
        ]
    };

});


angular.module('app').directive('userInfoCard', function () {
    return {
        restrict: 'E',
        templateUrl: 'userInfoCard.html',
        //scope: true,//internal scope
        //@ Attribute string binding
        //= Two-way model binding
        //& Callback method binding
        scope: {
            user: '=person',
            initialCollapsed: '@collapsed'
        },
        controller: function ($scope) {
            $scope.collapsed = ($scope.initialCollapsed === 'true');
            $scope.knightMe = function (user) {
                user.rank = "knight";
            };
            $scope.collapse = function () {
                //set to it's opposite value of currently is
                $scope.collapsed = !$scope.collapsed;
            };
            $scope.removeFriend = function (friend) {
                var index = $scope.user.friends.indexOf(friend);
                if (index > -1) {
                    $scope.user.friends.splice(index, 1);
                }
            };
        }
    };
});
angular.module('app').directive('removeFriend', function () {
    return {
        restrict: 'E',
        templateUrl: 'removeFriend.html',
        //create isolate scope
        scope: {
            notifyParent: '&method'
        },
        controller: function ($scope) {
            $scope.removing = false;
            $scope.startRemove = function () {
                $scope.removing = true;
            };
            $scope.cancelRemove = function () {
                $scope.removing = false;
            };
            $scope.confirmRemove = function () {
                $scope.notifyParent();
            };
        }
    }
});
angular.module('app').directive('address', function () {
    return {
        restrict: 'E',
        templateUrl: 'address.html',
        scope: true,
        controller: function ($scope) {
            $scope.collapsed = false;
            $scope.collapseAddress = function () {
                //set to it's opposite value of currently is
                $scope.collapsed = true;
            };
            $scope.expandAddress = function () {
                //set to it's opposite value of currently is
                $scope.collapsed = false;
            };
        }
    };
});