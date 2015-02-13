(function () {

	'use strict';
	var app = angular.module('blogApp');

	// //single filter field
	// app.filter('makeUppercase', function(){
	// 		return function (item) {
	// 			return item.toUpperCase();
	// 		};
	// });

	// //multi filter
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

// make filters file.js
	app.filter('searchBar', ['SearchService',function (SearchService){
			return function (items, labelText) {
				// your code
				var filteredArr = [];

			if(SearchService.labelText !== undefined && SearchService.labelText !== '') {
				for (var i = 0; i < items.length; i++) {

					if(SearchService.typeOfSearch === 'filterByLabel') {
						if(items[i].author === SearchService.labelText) {
							filteredArr.push(items[i]);
						}
					}
					else if(SearchService.typeOfSearch === 'filterByCategory') {
						for (var j = 0; j < items[j].tags.length; j++) {
							if(items[i].tags[j] === SearchService.labelText) {
								filteredArr.push(items[i]);
							}
						}

					}
					else if(SearchService.typeOfSearch === 'filterByDate') {
						// if(items[i].category === SearchService.labelText){
						// 	filteredArr.push(items.tags[i]);
						// }
					}
					else if(SearchService.typeOfSearch === 'filterAll'){
						filteredArr.push(items[i]);
					}


				}
			}
			else {
					filteredArr = items;
			}
				return filteredArr;

			};

	}]);





//postsData,
	app.controller('PostsCtrl', function ($scope,  $routeParams, $location, $http, SearchService, PostsService){

		// initialize model
		$scope.posts = [];
		$scope.postsQuantity = '';
		$scope.currentPage = 1;
		$scope.labelTxt = '';

		$scope.posts = PostsService.posts;



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
			$scope.currentPage--;
		};

		$scope.newestPost = function () {
			$scope.currentPage++;
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