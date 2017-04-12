(function() {
	'use strict';

	var app = angular.module('myApp', []);

	app.controller('MyFirstController', ['$scope', '$element', '$attrs', function MyFirstController($scope, $element, $attrs) {
		console.log('MyFirstController', arguments);
		this.decrementCount = function() {
			$scope.count.value--;
		};
	}]);

	app.controller('MySecondController', ['$scope', function MySecondController($scope) {
		this.incrementCount = function() {
			$scope.count.value++;
		};

	}]);
})();
