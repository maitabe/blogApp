(function (){
	'use strict';

	var app = angular.module('blogApp');
	//get data from json
	app.factory('postsService', function ($http, $q){

		var promise = $http.get('/blogApp/data/postsOriginal.json') //('/posts')
			.error(function (data, status) {
				console.error(status, data);
			});

		return {
			save: function (title, postObj) {
		    var defer = $q.defer();

			    $http.post('/posts', {
			        title: title,
			        data: postObj
			    })
			        .success(function (data, status) {
			            defer.resolve(data);
			        });

			    return defer.promise;
			},
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