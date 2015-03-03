(function () {

	'use strict';
	var app = angular.module('blogApp');

//postsData,
	app.controller('PostCtrl', function ($scope, postsService, $routeParams, $location, $http, $sanitize ){
		debugger;
		$scope.postTitle = $routeParams.title;


		postsService.getByTitle($scope.postTitle).then(function(data) {
			$scope.post = data;


			console.log(data);

			$http.get(postsService.htmlPath)
				.success(function (data) {
					debugger;
					$scope.postHtml = $sanitize(data);
				});
		})

	});



}());


//$scope.posts = postsService.get().then(function (data){
//	$scope.posts = data.data.posts;
//
//});