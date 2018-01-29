"use strict";

const angular = require("angular");
const ngRoute = require("angular-route");

let myApp = angular.module("RouteApp", [ngRoute]);

require("./router.js");

require("./ctrl/atlanticRoad");
require("./ctrl/furkaPass");