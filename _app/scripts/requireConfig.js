//This file contains high level library configuration and manages dependencies
var baseUrl = "./scripts";
requirejs.config({
    "baseUrl": baseUrl,
    "paths": {
        //"text": "lib/requirejs/text",
        "controllers": "controllers",
        "dialogs": "controllers/dialogs",
        "directives": "directives",
        "filters": "filters",
        "services": "services",
        "vendor": "vendor",
        "angular": "vendor/angular/angular",
        "uiRouter": "vendor/angular/angular-ui-router",
        "ngMaterial": "vendor/angular/angular-material/angular-material",
        "ngAria": "vendor/angular/angular-aria/angular-aria",
        "ngAnimate": "vendor/angular/angular-animate/angular-animate"
    },
    shim: {
        'angular': { 'exports': 'angular'},
        'uiRouter':{
            deps: ['angular']
        },
        'ngAnimate': {
            deps: ['angular']
        },
        'ngAria': {
            deps: ['angular']
        },
        'ngMaterial': {
            deps:['angular', 'ngAria', 'ngAnimate']
        }
    },
    deps: [
        './bootstrap'
    ]
});