(function (){
	'use strict';

	var app = angular.module('blogApp');
	//get data from json
	app.factory('postsService', function ($http, $q){

		var defer = $q.defer();
		var postsPromise = defer.promise;

		//var promise = $http.get('/posts')
		//var promise = $http.get('data/posts.json')
		//var promise = $http.get('data/postsOriginal.json')
		var promise = $http.get('../data/posts.json')
			.success(function (data, status){
				//dataCache.posts = data.posts;
				defer.resolve(data);
			})
			.error(function (data, status) {
				console.error(status, data);
			});

		return {
			save: function (title, postObj) {
			    var defer = $q.defer();

			    $http.post('/posts', {
			        title: title,
			        data: postObj
			    }).success(function (data, status) {
		            defer.resolve(data);
		        });

			    return defer.promise;
			},
			get: function () {
				return promise;
			},
			getByTitle: function (title) {
				debugger;
				var defer = $q.defer();
				postsPromise.then(function(data){
					debugger;
					// loop and find in data the right post by title
					data.posts.forEach(function (post){
						if (post.title === title){
							defer.resolve(post);
							return;
						}
					});

				});


				return defer.promise;
			},
			labelText: 'allPosts',
			typeOfSearch: 'filterAll',
			quantity: 0
		};

		//return $http.get('data/posts.json');

	});



}());


function postsService () {

	var posts = [];

	getPosts();

	return {
		getAllPosts: getAllPosts,
		getPostsByAuthor: getPostsByAuthor,
		getPostsByTag: getPostsByTag
	};

	function getAllPosts () {
		return posts;
	}

	function getPostsByAuthor (author) {
		// Filter posts[] by author
		var filtered = [];
		return filtered;
	}

	function getPostsByTag (tag) {
		// Filter posts[] by tag
		var filtered = [];
		return filtered;
	}

	function getPosts () {
		$http.get("/posts").then(havePosts);
	}

	function havePosts (data) {
		posts = data;
	}
}