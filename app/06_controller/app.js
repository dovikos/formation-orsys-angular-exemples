(function() {
	'use strict';

	var someone = {
		lastname: 'DUPOND',
		firstname: 'Marcel',
		age: 35
	};

	var app = angular.module('myApp', []);

	app.controller('MyController', function MyController() {
		this.person = someone;
	});
})();
