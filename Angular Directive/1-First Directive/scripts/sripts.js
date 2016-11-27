/*
 * @Author: Ngo Hung Phuc
 * @Date:   2016-11-27 15:36:00
 * @Last Modified by:   Ngo Hung Phuc
 * @Last Modified time: 2016-11-27 16:28:59
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

angular.module('app').controller('mainCtrl', function($scope) {
    $scope.user = {
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
    console.log($scope.user.name);
});


angular.module('app').directive('userInfoCard', function() {
    return {
        restrict: 'E',
        template: 'Name: {{ user.name }}'

    };
});