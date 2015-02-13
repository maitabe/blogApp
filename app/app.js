
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
<<<<<<< HEAD
			.when('/posts/:page?', {
				templateUrl: 'app/posts/posts.view.html',
				controller: 'PostsCtrl'
			})
			//if i dont want a page to be required, i use  '/posts:page?' so it became optional according to the page
			.when('/post/:title', {
				templateUrl: 'app/posts/post.view.html',
				controller: 'PostCtrl'
			})
=======
			//if i dont want a page to be required, i use  '/posts:page?' so it became optional according to the page
			.when('/posts:page?', {
				templateUrl: 'app/posts/posts.view.html',
				controller: 'PostsCtrl'
			})
>>>>>>> origin/gh-pages
			.when('/admin', {
				templateUrl: 'app/admin/admin.html',
				controller: 'AdminCtrl'
			})
<<<<<<< HEAD
			.when('admin/edit/post/:title', {
				templateUrl: 'app/admin/edit.html',
				controller: 'EditCtrl',
				// resolve:{

				// }
			})
			.when('admin/new/post', {
				templateUrl: 'app/admin/edit.html',
				controller: 'NewCtrl'
			})
=======
>>>>>>> origin/gh-pages
			.otherwise({
				redirectTo: '/'
			});
	});

<<<<<<< HEAD
app.directive('preventDefault', function() {
    return {
        restrict: 'E',
        link: function(scope, elem, attrs) {
            if(attrs.ngClick || attrs.href === '' || attrs.href === '#'){
                elem.on('click', function(e){
                    e.preventDefault();
                });
            }
        }
   };
});
=======
	app.filter(function() {

	});

>>>>>>> origin/gh-pages

}());
