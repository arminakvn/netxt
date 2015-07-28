angular
	.module('app')
	.controller('projectListCtrl', ['$scope', 'Project', function ($scope, Project) {
		$scope.title='Project Detail';
		$scope.projects = Project.query();
		$scope.date = new Date();
		
	}]);