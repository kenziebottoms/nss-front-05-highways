"use strict";

const angular = require("angular");

angular.module("RouteApp").controller("ListCtrl", function($scope) {
    $scope.highways = [
        {
            name: "Atlantic Road",
            url: "/#!/atlantic-road"
        },
        {
            name: "Furka Pass",
            url: "/#!/furka-pass"
        }
    ];
});