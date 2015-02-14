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

				return filteredArr;
			};
	});

// make filters file.js
	app.filter('searchBar', ['postsService',function (postsService){
		return function (items) {
			// your code
			var filteredArr = [];


			if(postsService.labelText !== undefined && postsService.labelText !== '') {
				for (var i = 0; i < items.length; i++) {

					if(postsService.typeOfSearch === 'filterByLabel') {
						if(items[i].author === postsService.labelText) {
							filteredArr.push(items[i]);
						}
					}
					else if(postsService.typeOfSearch === 'filterByCategory') {
						for (var j = 0; j < items[j].tags.length; j++) {
							if(items[i].tags[j] === postsService.labelText) {
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


				}
			}
			else {
				filteredArr = items;
			}
			postsService.quantity = filteredArr.length;
			return filteredArr;

		};

	}]);

}());
