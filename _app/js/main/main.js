//This file contains high level library configuration and manages dependencies
var baseUrl = "../js";
requirejs.config({
    "baseUrl": baseUrl,
    "paths": {
        //"text": "lib/requirejs/text",
        //"widgets": "widgets",
        "jquery": "lib/jquery/jquery.min",
        "angular": "lib/angular/angular",
        "scripts": "scripts"
    }
    // shim: {

    //     'angular': { 'exports': 'angular', 'deps': ['jquery'] },
    //     'angular-route': ['angular'],
    //     'angular-resource': ['angular'],
    //     'angular-ui-route': ['angular'],
    //     'angular-foundation': ['angular'],
    //     'angularmultiselect': ['angular'],
    //     'stickem': {'exports': 'stickem'}
    // }
});

require(["scripts/battleTracker"], function (battleTracker) {
    battleTracker.init();
});

