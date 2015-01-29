(function (){
	'use strict';

	var app = angular.module('blogApp');

	app.factory('PostsCtrl', function ($http){
		return $http.get('data/posts.json');

			// //like ajax,
			// 	$http.get('data/posts.json')
			// 		.success(function(data, status) {
			// 			$scope.postsData = data.posts;
			// 		})
			// 		.error(function (err, status){
			// 			console.error(status, err);
			// 		});

			// 		return postsData;

	});

}());


