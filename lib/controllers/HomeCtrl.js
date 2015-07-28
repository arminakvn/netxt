angular
	.module('app', ["slugifier"])
	.controller('HomeCtrl', ['$scope', function ($scope, Slug) {
		  $scope.projects = [
		    {'name': 'Scenario Modeling',
		     'describ': 'attempt to make visual explanation of a complex land use modeling application in a simplest way that yet retains the important components of the complex system. Land use scenario modeling applications usually suffer from the over complication issues due to the complexity of the tasks they perform. Don Norman argues, that "complexity is in the mind of the beholder", meaning in this case, the user, which are not familiar with the processes of land use planning, consider the application "too complicated", while the tasks require this complexity to accomplish what they are designed for. This project explains a land use scenario modeling tool, built using Scenario 360 CommunityViz, a plugin to esri ArcGIS, used for multiple projects done with Metropolitan Area Planning Council for cities and towns across metro Boston region',
		     'files_pdf': '',
		     'files_image': '',
		     'files_video': ''
		  	},
		    {'name': 'Tstation.info website',
		     'describ': '',
		     'files_pdf': '',
		     'files_image': '',
		     'files_video': ''
		 	},
		    {'name': 'Sonification of NEU Energy',
		     'describ': '',
		     'files_pdf': '',
		     'files_image': '',
		     'files_video': ''
		 	},
		    {'name': 'SNAP - Scraping twitter',
		     'describ': '',
		     'files_pdf': '',
		     'files_image': '',
		     'files_video': ''
		 	}
		  ];
		  // $scope.slug = Slug.slugify(title);
		}]);
		// app.directive(
		//             "bnDropdown",
		//             function( $compile ) {
		//             	 function compile( tElement, tAttributes ) {
		//             	 	}
		//             	 }

		//         );