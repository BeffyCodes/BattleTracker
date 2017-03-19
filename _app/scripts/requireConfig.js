//This file contains high level library configuration and manages dependencies
var baseUrl = "./scripts";
requirejs.config({
    "baseUrl": baseUrl,
    "paths": {
        //"text": "lib/requirejs/text",
        "controllers": "controllers",
        "directives": "directives",
        "filters": "filters",
        "services": "services",
        "vendor": "vendor",
        "angular": "vendor/angular/angular",
        "uiRouter": "vendor/angular/angular-ui-router"
    },
    shim: {
        'angular': { 'exports': 'angular'},
        'uiRouter':{
            deps: ['angular']
        }
    },
    deps: [
        './bootstrap'
    ]
});