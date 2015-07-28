angular
	.module('app.directives.projectCard', [])
	.directive('projectCard', function() {
		return {
			restrict: 'E',
			scope: {
				project: '='
			},
			replace: true,
			templateUrl: 'templates/directives/projectCard.html',
			// console.log(attr.id);
			// link: function(scope, element, attr) {
			// 	element.click(function() {
			// 		console.log('click');
			// 	});
			// },
			controller: function ($scope) {
				console.log("cntroller", $scope.project);

			}
		};

	});