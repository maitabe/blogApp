(function (){
	'use strict';

	var app = angular.module('blogApp');

	app.controller('sideBarCtrl', ['$rootScope', '$scope', '$http', 'PostsService','SearchService',
		function ($rootScope, $scope, $http, PostsService, SearchService) {
			//promissies tip#6



		// initialize model
		$scope.blogSearch = 'search ME';
		$scope.authors = [];
		$scope.categories = [];
		$scope.date = [];
		$scope.postsQuantity = '';

		$rootScope.$on('$routeChangeSuccess', function (e, curr, prev) {
		    console.log(curr.params);

		    if (curr.params.category) {
		    	SearchService.labelText = curr.params.category;
		    	SearchService.typeOfSearch = 'filterByCategory';
		    }
		});

		//ajax http call
		$http.get('data/posts.json')
			.success(function (data, status) {
				PostsService.posts = data.posts;
				$scope.postsQuantity = PostsService.posts.length;

					PostsService.posts.forEach(function (item){

					//building authors array
					// check if author exist in categories
					var placeInArr = indexInAuthor($scope.authors, item.author);
					if( placeInArr !== -1 ) {
						// if exist - add +1 to his num property
						$scope.authors[placeInArr].num = $scope.authors[placeInArr].num + 1;
					}
					else {
						// placeInArr == -1
						// if not exist - add new category
						$scope.authors.push({text:item.author, num:1});
					}

					//building date array
					// check if date exist in categories
					var dateInArr = indexInDate($scope.date, item.date);
					if( dateInArr !== -1 )
					{
						// if exist - add +1 to his num property
						$scope.date[dateInArr].num = $scope.date[dateInArr].num + 1;
					}
					else {
						// placeInArr == -1
						// if not exist - add new category
						$scope.date.push({text:item.date, num:1});
					}


					//building category array
					// check if tags exist in categories
					 // indexInCategory($scope.categories, item.tags);

					item.tags.forEach(function (tag)
					{
						var placeOfTag = indexInCategory($scope.categories, tag);
						//check if exsit +1 else add new tag
						if( placeOfTag !== -1 )
						{
							// if exist - add +1 to his num property
							$scope.categories[placeOfTag].num = $scope.categories[placeOfTag].num + 1;
						}
						else {
							// placeInArr == -1
							// if not exist - add new category
							$scope.categories.push({text:tag, num:1});
						}
					});

				});
			})
			.error(function (err, status) {
				console.error(status, err);
			});

		$scope.filterAll = function (){
			SearchService.labelText = "allPosts";
			SearchService.typeOfSearch = 'filterAll';
		};

		$scope.filterByLabel = function (items) {
			SearchService.labelText = items;
			SearchService.typeOfSearch = 'filterByLabel';
			// this is new !! what is it? and how its helping us?
			// $scope.$apply();
		};

		$scope.filterByCategory = function (tag) {
			SearchService.labelText = tag;
			SearchService.typeOfSearch = 'filterByCategory';
			// $scope.$apply();

		};

		// Todo: make those to each type of search (3) ex: filterByCategory, filterByDate . .


		function indexInAuthor(arr, str){
				var valueToReturn = -1;

						arr.forEach(function (node, index ) {
								if(node.text === str){
									valueToReturn = index;
								}
							});

							return valueToReturn;

						}

						function indexInCategory(arr, str) {
							var valueToReturn = -1;

							arr.forEach(function (node, index ) {
								if(node.text === str){
									valueToReturn = index;
								}
							});

							return valueToReturn;

						}

						function indexInDate(arr, str){
							var valueToReturn = -1;

							arr.forEach(function (node, index ) {
								if(node.text === str){
									valueToReturn = index;
								}
							});

							return valueToReturn;

						}

	}]);

}());






