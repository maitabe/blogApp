(function () {

	'use strict';
	var app = angular.module('blogApp');

	// app.controller('PostsCtrl', function ($scope, $routeParams) {

	// 	$scope.model = {
	// 		message: $routeParams.message
	// 	};
	// });

//postsData,
	app.controller('PostsCtrl', function ($scope,  $routeParams, $location, $http){
		//whats the dependency of location?
		console.log($routeParams);
		console.log($location.search); //give me ?category


		//http call
		$http.get('data/posts.json')
					.success(function (data, status)
					{
						$scope.posts = data.posts;
						$scope.postsQuantity = $scope.posts.length;
						$scope.categories = [
							{
								'text': 'angular',
								'num': 1
							},
							{
								'text': 'jquery',
								'num': 2
							},
							{
								'text': 'grunt',
								'num': 3
							},
							{
								'text': 'github',
								'num': 4
							}
						];

						$scope.authors = [
							{
								'text': 'shai',
								'num': 1
							},
							{
								'text': 'martha',
								'num': 2
							},
							{
								'text': 'bu',
								'num': 99
							}
						];
					})
					.error(function (err, status)
					{
						console.error(status, err);
					});
		// postsData
		// 	.success(function(data, status) {
		// 		$scope.postsData = data.posts;

		// 		// &scope.test = data.posts[1].source;
		// 	})
		// 	.error(function (data, status){
		// 		console.error(status, data);
		// 	});

		$scope.isActive = function (viewLocation) {
			var active = (viewLocation === $location.path());
			return active;
		};

		$scope.oldestPost = function () {
			alert('Now, make me work!, but i need help, im old');
		};

		$scope.newestPost = function () {
			alert('Now, make me work, im newer!');
		};

	});

}());
// 	app.controller('MainCtrl', function($http){
// 		//console.log('postsData', 'postsData');

// 		//like ajax,
// 		$http.get('data/posts.json')
// 			.success(function(data, status) {
// 				$scope.postsData = data.posts;
// 			})
// 			.error(function (err, status){
// 				console.error(status, err);
// 			});
// 			return postsData;

// 	});



// postsData
// 	.success(function(data, status) {
// 				$scope.postsData = data.posts;
// 			})
// 			.error(function (err, status){
// 				console.error(status, err);
// 			});
