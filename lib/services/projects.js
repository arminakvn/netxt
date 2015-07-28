angular
	.module('app')
	.factory('Project', ['$resource', function($resource) {
		return $resource('api/:projectId.json', {}, {
	      query: {method:'GET', params:{projectId:'projects'}, isArray:true}
	    });

	}])