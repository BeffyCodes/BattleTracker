define(['./services'], function (servicesModule) {
    servicesModule.service("DataAccessService", ['$http', '$q', function($http, $q) {
    	this.get = function (url, id) {
    		var deferred = $q.defer();

    		$http.get('/_api/' + url + (id ? "/" + id : ""))
    		.then(function success(response) {
    			deferred.resolve(response.data);
    		},
				function failure(response) {
					deferred.reject(response.data);
			});

    		return deferred.promise;
    	};

    	this.post = function (url, item) {
    		var deferred = $q.defer();

    		$http.post('/_api/' + url, item)
    		.then(function success(response) {
    			deferred.resolve(response.data);
    		},
    		function failure(response) {
    			deferred.reject(response.data);
    		});

    		return deferred.promise;
    	};

    	this.delete = function(url, id) {
    		var deferred = $q.defer();

    		$http.delete('/_api/' + url + '/' + id)
    		.then(function success(response) {
    			deferred.resolve(response.data);
    		},
    		function failure(response) {
    			deferred.reject(response.data);
    		});

    		return deferred.promise;
    	};
    }]);
});