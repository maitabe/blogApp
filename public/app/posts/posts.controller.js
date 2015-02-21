(function () {

	'use strict';
	var app = angular.module('blogApp');

	app.controller('PostsCtrl', function($scope, postsService, $routeParams, $location) {

		// initialize model
		$scope.posts = [];
		$scope.postsQuantity = '';
		$scope.currentPage = 1;
		$scope.quantityPlaceHolder = postsService.quantity;

		$scope.labelTxt = '';

		// $scope.pageNum = $routeParams.page;
		// console.log($scope.pageNum);

		// Get posts data
		$scope.posts = postsService.get().then(function (data){
			$scope.posts = data.data.posts;

		});



		$scope.oldestPost = function () {
			$scope.currentPage++;
		};

		$scope.newestPost = function () {
			$scope.currentPage--;
		};

		var title = 'Grunt - Intro';
        var postObj = {
            description: '*** TESTING ***'
        };

		postsService.save(title, postObj)
            .then(function (post) {
                console.log(post);
            });


	});

}());

	// //single filter field
	// app.filter('makeUppercase', function(){
	// 		return function (item) {
	// 			return item.toUpperCase();
	// 		};
	// });

	// multi filter
	// app.filter('startWithA', function () {
	// 		return function (items) {

	// 			var filteredArr = [];

	// 			items.forEach(function (item){

	// 				if (/a/i.test(item.author.substring(0, 1)))
	// 				{
	// 					filteredArr.push(item);
	// 				}

	// 			});


	// 			return filteredArr;
	// 		};
	// });




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
