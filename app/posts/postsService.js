(function (){
	'use strict';

	var app = angular.module('blogApp');

<<<<<<< HEAD

	app.service('PostsService', function(){
    this.posts = [];
});

	app.service('SearchService', function(){
    this.labelText = '';
    this.typeOfSearch = '';
});

// todo: need to replace it to a service
	// app.factory('SearchService', function(){

 //    var fac = {};

 //     fac.labelText = '';

 //    return fac;

	// });



}());
=======
	app.factory('PostsCtrl', function ($http){
		return $http.get('data/posts.json');

			// //like ajax,
			// 	$http.get('data/posts.json')
			// 		.success(function(data, status) {
			// 			$scope.postsData = data.posts;
			// 		})
			// 		.error(function (err, status){
			// 			console.error(status, err);
			// 		});

			// 		return postsData;

	});

}());


>>>>>>> origin/gh-pages
