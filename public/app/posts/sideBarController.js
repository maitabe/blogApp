(function (){
	'use strict';

	var app = angular.module('blogApp');

	app.controller('sideBarCtrl', ['$rootScope', '$scope', '$http', 'postsService',
		function ($rootScope, $scope, $http, postsService) {
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
		    	postsService.labelText = curr.params.category;
		    	postsService.typeOfSearch = 'filterByCategory';
		    }
		});

		//ajax http call
			$scope.posts = postsService.get().then(function (data){
				console.log(data);
				$scope.posts = data.data.posts;
				$scope.postsQuantity = $scope.posts.length;

				//refactor the code with the following
				//$scope.categories = utils.getTags($scope.posts);
				//$scope.authors = utils.getAuthors($scope.posts);
				//$scope.dates = utils.getDates($scope.posts);

					$scope.posts.forEach(function (item){

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
			// this code was replaced with best practice
			//	postsService
			//	.success(function (data, status) {
			//			$scope.posts = data.posts;
			//.error(function (err, status) {
			//	console.error(status, err);
			//});

		$scope.filterAll = function (){
			postsService.labelText = 'allPosts';
			postsService.typeOfSearch = 'filterAll';
		};

		$scope.filterByLabel = function (items) {
			postsService.labelText = items;
			postsService.typeOfSearch = 'filterByLabel';
			// this is new !! what is it? and how its helping us?
			// $scope.$apply();
		};

		$scope.filterByCategory = function (tag) {
			postsService.labelText = tag;
			postsService.typeOfSearch = 'filterByCategory';
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





