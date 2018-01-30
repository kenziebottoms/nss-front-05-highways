"use strict";

const angular = require("angular");
angular.module("RouteApp").controller("FurkaPassCtrl", function($scope) {
    $scope.highwayName = "Furka Pass";
    $scope.highwayDescription = "Furka Pass, with an elevation of 7,969 feet, is a high mountain pass in the Swiss Alps connecting Gletsch, Valais with Realp, Uri. The Furka Oberalp Bahn line through the Furka Tunnel bypasses the pass.";
});