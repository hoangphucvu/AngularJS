/*
 * @Author: Ngo Hung Phuc
 * @Date:   2016-11-27 15:36:00
 * @Last Modified by:   Ngo Hung Phuc
 * @Last Modified time: 2016-11-27 15:56:23
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

angular.module('app', []).controller('mainCtrl', function($scope) {

});


angular.module('app', []).directive('userInfoCard', function() {
    return {
        template: "User Info Card",
        restrict: "E"
    };
});