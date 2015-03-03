(function () {

	'use strict';
	var app = angular.module('blogApp');

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
			console.log("pagination=%o", filteredArr);
			return filteredArr;
		};
	});

// make filters file.js
	app.filter('searchBar', ['postsService', '$rootScope', function (postsService, $rootScope){
		return function (items) {
			// your code
			var filteredArr = [];


			if(postsService.labelText !== undefined && postsService.labelText !== '') {
				for (var i = 0; i < items.length; i++) {

					// logic of filter by Author
					if(postsService.typeOfSearch === 'filterByAuthor') {
						if(items[i].author.toLowerCase() === postsService.labelText.replace('-', ' ')) {
							filteredArr.push(items[i]);
						}
					}
					else if(postsService.typeOfSearch === 'filterByCategory') {
						for (var j = 0; j < items[j].tags.length; j++) {
							if(items[i].tags[j].toLowerCase() === postsService.labelText) {
								filteredArr.push(items[i]);
							}
						}

					}
					else if(postsService.typeOfSearch === 'filterByDate') {
						// if(items[i].category === postsService.labelText){
						// 	filteredArr.push(items.tags[i]);
						// }
					}
					else if(postsService.typeOfSearch === 'filterAll'){
						filteredArr.push(items[i]);
					}

					//else if(postsService.labelText === 'filterBySearch') {
					//	var isExist = false;
                    //
					//	if
                    //
                    //
                    //
					//	if(isExist == true) {
					//		filteredArr.push(items[i]);
					//	}
					//}

				}
			}




			postsService.quantity = filteredArr.length;
			$rootScope.$broadcast('changePostsQuantity');
			console.log("searchBar filter posts=%o", filteredArr);
			return filteredArr;

		};

	}]);

}());
