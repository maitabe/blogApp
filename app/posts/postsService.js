(function (){
	'use strict';

	var app = angular.module('blogApp');
	//get data from json
	app.factory('postsService', function ($http){

		var promise = $http.get('data/posts.json')
			.error(function (data, status) {
				console.error(status, data);
			});

		return {
			get: function () {
				return promise;
			},
			labelText: '',
			typeOfSearch: '',
			quantity: 0
		};

		//return $http.get('data/posts.json');

	});



}());