(function () {

	'use strict';
	var app = angular.module('blogApp');

//postsData,
	app.controller('PostCtrl', function ($scope, $routeParams, $location, $http){

// $sanitize, SearchService,PostsService , postData

		// initialize model
//		$scope.posts = [];
		$scope.postsQuantity = '';
		$scope.currentPage = 1;
		$scope.labelTxt = '';

console.log($routeParams);
		// $scope.posts = PostsService.posts;


		// $http.get(postData.htmlPath)
  //   		.success(function (data) {
  //       	$scope.postHtml = $sanitize(data);
    	// });


		// postsData
		// 	.success(function(data, status) {
		// 		$scope.postsData = data.posts;

		// 		// &scope.test = data.posts[1].source;
		// 	})
		// 	.error(function (data, status){
		// 		console.error(status, data);
		// 	});

		// $scope.isActive = function (viewLocation) {
		// 	var active = (viewLocation === $location.path());
		// 	return active;
		// };

		$scope.oldestPost = function () {
			$scope.currentPage--;
		};

		$scope.newestPost = function () {
			$scope.currentPage++;
		};



	});



}());
