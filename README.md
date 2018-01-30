# Route Routing

![](https://img.shields.io/badge/data-static_json-lightgrey.svg)
![](https://img.shields.io/badge/template-angular-red.svg)
![](https://img.shields.io/badge/css_framework-bootstrap-5F2C7C.svg)
![](https://img.shields.io/badge/mvp-in_progress-yellow.svg)

## Part One 

For this exercise, you're going to create a basic application, with two views. Each view will provide information about a famous American highway. Each will have a title show the name of the highway, and an element in which the description of the highway will be displayed.

You will need:

- [x] An Angular application module. Inject `ngRoute` into your applcation.
- [x] A `config` section for your application where you set up two routes.
    - [x] Famous highway #1
    - [x] Famous highway #2
- [x] Two controllers defined in your application.
- [x] Two partials - one bound to one of the controllers.
- [x] Each controller will have two scope variables.
    - [x] `$scope.highwayName`
    - [x] `$scope.highwayDescription`
- [x] You provide the name and description for each highway that you find via research.

## Part Two

In this exercise you will add a default view to your Routes of America application.

- [ ] Add an additional route to your application that will load a listing view.
- [ ] The listing view simply shows two hyperlinks that route the user to the two routes you built previously.
- [ ] Add an `otherwise` configuration option to your routing.

This route shows the list: [http://localhost:8080/#/](http://localhost:8080/#/)
