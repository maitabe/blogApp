(function () {

	'use strict';
	var app = angular.module('blogApp');

//postsData,
	app.controller('PostCtrl', function ($scope, postsService, $routeParams, $location, $http, $sanitize ){
		debugger;
		$scope.postTitle = $routeParams.title;


		postsService.getByTitle($scope.postTitle).then(function(post) {
			debugger;
			$scope.post = post;


			//console.log(data);

			$http.get(post.htmlPath)
				.success(function (data) {
					debugger;
					$scope.postHtml = $sanitize(data);
				});
		})

	});



}());

//$http.get('http://localhost:63342/blogApp/' + post.htmlPath)
