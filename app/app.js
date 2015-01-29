(function () {
	// You app starts here
	'use strict';
	//ngRout help me to control the url
	var app = angular.module('blogApp', ['ngRoute']);

	app.config(function($routeProvider) {
		$routeProvider
			.when('/', {
				redirectTo: '/posts'
			})
			//if i dont want a page to be required, i use  '/posts:page?' so it became optional according to the page
			.when('/posts:page?', {
				templateUrl: 'app/posts/posts.view.html',
				controller: 'PostsCtrl'
			})
			.when('/admin', {
				templateUrl: 'app/admin/admin.html',
				controller: 'AdminCtrl'
			})
			.otherwise({
				redirectTo: '/'
			});
	});

	app.filter(function() {

	});


}());
