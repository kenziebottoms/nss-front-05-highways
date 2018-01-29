"use strict";

const angular = require("angular");

angular.module("RouteApp").config($routeProvider => {
    $routeProvider
        .when("/furka-pass", {
            templateUrl: "assets/js/partials/furka-pass.html",
            controller: "FurkaPassCtrl"
        })
        .when("/atlantic-road", {
            templateUrl: "assets/js/partials/atlantic-road.html",
            controller: "AtlanticRdCtrl"
        });
});