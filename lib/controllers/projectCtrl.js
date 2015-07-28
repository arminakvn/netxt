angular
	.module('app')
	.controller('projectCtrl', ['$scope','$stateParams' , 'Project', function ($scope, $stateParams, Project) {
		console.log("project.project state", $stateParams);
		$scope.Project = Project.get({projectId: $stateParams.projectId}, function(project) {
	  });
		$scope.date = new Date();
		
	}]);