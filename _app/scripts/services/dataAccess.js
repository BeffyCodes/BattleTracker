define(['./services'], function (servicesModule) {
    servicesModule.service("DataAccessService", ['$http', '$q', function($http, $q) {
    	this.get = function (url) {
    		var deferred = $q.defer();

    		$http.get('/_api/' + url)
    		.then(function success(response) {
    			deferred.resolve(response.data);

    		},
				function failure(response) {
					deferred.reject(response.data)

			});

    		return deferred.promise;
    	};

    	this.post = function (url, item) {
    		$http.post('/_api/' + url, item)
    		.then(function success(response) {

    		},
    		function failure(response) {
    			
    		});
    	}
    }]);
});