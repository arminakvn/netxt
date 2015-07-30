angular
	.module('app', [
		'ui.router',
		'slugifier',
		'app.directives.projectCard',
		'ngResource'
	])
	.config(['$urlRouterProvider', '$stateProvider', function($urlRouterProvider, $stateProvider) {
		$urlRouterProvider.otherwise('/');

		$stateProvider
			.state('home', {
				url: '/',
				templateUrl: 'templates/home.html'
				// controller: 'HomeCtrl'
			})
			// .state('scenario_modeling', {
			// 	url: '/scenario_modeling',
			// 	templateUrl: 'templates/scenario_modeling.html'
			// })
			.state('about', {
				url: '/about',
				templateUrl: 'templates/about.html'
			})
			// .state('web_design', {
			// 	url: '/web_design',
			// 	templateUrl: 'templates/web_design.html'
			// })
			// .state('ux_ui_design', {
			// 	url: '/ux_ui_design',
			// 	templateUrl: 'templates/ux_ui_design.html'
			// })
			.state('information_design', {
				url: '/information_design',
				templateUrl: 'templates/information_design.html',
				controller: 'iDCtrl',
				resolve: {
					projects: ['$http', function($http) {
						return $http.get('/api/projects.json').then(function(response){
							return response.data;
						})
					}
					]
				}
			})
			.state('projects', {
				url: '/projects',
				templateUrl: 'templates/projects.html',
				controller: 'projectListCtrl',
				// resolve: {
				// 	projects: ['$http', function($http) {
				// 		return $http.get('/api/projects.json').then(function(response){
				// 			return response.data;
				// 		})
				// 	}
				// 	]
				// }
			})
			.state('projects.project', {
				url: '/project/:projectId',
				templateUrl: 'templates/projects.project.html',
				controller: 'projectCtrl',

				
			})
	}])	