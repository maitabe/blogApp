(function (){
	'use strict';

	var app = angular.module('blogApp');
	//get data from json
	app.factory('postsService', function ($http){
		return $http.get('data/posts.json');

	});

// 	app.service('PostsService', function(){
//     this.posts = [];
// });

// 	app.service('SearchService', function(){
//     this.labelText = '';
//     this.typeOfSearch = '';
// });

// todo: need to replace it to a service
	// app.factory('SearchService', function(){

 //    var fac = {};

 //     fac.labelText = '';

 //    return fac;

	// });



}());