angular
	.module('app')
	.controller('iDCtrl', ['$scope', 'projects', function ($scope, projects) {
		$scope.title='Information Design';
		$scope.projects = projects;
		$scope.date = new Date();
		
	}]);