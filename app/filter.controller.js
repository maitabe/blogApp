(function () {

	'use strict';
	var app = angular.module('blogApp');

		//multi filter
	app.filter('pagination', function () {
			return function (items, cp) {


				// create a new array
				var filteredArr = [];

				var offset = (cp - 1) * 3;

				filteredArr.push(items[offset]);
				filteredArr.push(items[offset + 1]);
				filteredArr.push(items[offset + 2]);

				// Use Array.slice(start, end)

				return filteredArr;
			};
	});



}());
