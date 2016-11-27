/*
 * @Author: Ngo Hung Phuc
 * @Date:   2016-11-27 15:36:00
 * @Last Modified by:   Ngo Hung Phuc
 * @Last Modified time: 2016-11-27 16:35:27
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
        scope: {
            user: '='
        },
        controller: function ($scope) {
            $scope.collapsed = false;
            $scope.knightMe = function (user) {
                user.rank = "knight";
            };
            $scope.collapse = function () {
                //set to it's opposite value of currently is
                $scope.collapsed = !$scope.collapsed;
            };
        }
    };
});

angular.module('app').directive('address', function () {
    return {
        restrict: 'E',
        templateUrl: 'address.html',
        scope:true,
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

