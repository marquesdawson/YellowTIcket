'use strict';


angular.module('core').controller('HomeController', ['$scope', 'Authentication',
	function($scope, Authentication) {
		// This provides Authentication context.
		$scope.authentication = Authentication;

		// This is for all list the data on homepage
		$scope.alerts = [
			{
				icon:'glyphicon-user',
				color:'btn-success',
				total:'20,408',
				description:'TOTAL CUSTOMERS'
			},
			{
				icon:'glyphicon-user',
				color:'btn-primary',
				total:'8,382',
				description:'UPCOMING EVENTS'
			},
			{
				icon:'glyphicon-user',
				color:'btn-success',
				total:'527',
				description:'NEW CUSTOMERS IN 24H'
			},
			{
				icon:'glyphicon-user',
				color:'btn-info',
				total:'85,000',
				description:'EMAIL SENT'
			},
			{
				icon:'glyphicon-user',
				color:'btn-warning',
				total:'268',
				description:'FOLLOW UPS REQUIRED'
			},
			{
				icon:'glyphicon-flag',
				color:'btn-danger',
				total:'348',
				description:'REFFERALS TO MODERATE'
			}
		];
	}
]);