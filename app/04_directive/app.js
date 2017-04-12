(function() {
	'use strict';

	var app = angular.module('myApp', []);

	app.directive('myFirstDirective', function() {
		return {
			restrict: 'E',
			scope: {
				tutu: 'tata'
			},
			templateUrl: 'my_template.html',
			transclude: true,
			controller: ['$scope', function MyFirstDirectiveCtrl($scope) {
				console.log('MyFirstDirectiveController', this);
				this.x = 3;
			}]
		};
	});
})();
