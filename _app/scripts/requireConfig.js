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
        "angular": "vendor/angular/angular"
    },
    shim: {
        'angular': { 'exports': 'angular'}
    }
});

require(["battleTracker"], function (battleTracker) {
    
});

