(function (){

	'use strict';

	var app = angular.module('blogApp');
	//make tab active one is clicked
	app.controller('NavCtrl', function ($scope, $location){
		$scope.isActive = function (route) {
			return route === $location.path();
		};

	});

}());