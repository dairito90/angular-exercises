(function ()
{
    'use strict';
    function BlogPostCtrl()
    {

    }

    var module = angular.module("exerciseApp", []);
module.controller('BlogPostCtrl', ['$scope',function($scope){
	$scope.info = [
	{
		"Id":"1",
		"Author":"George Simenon",
		"Title":"Detectives"
	},
	{
		"Id":"2",
		"Author":"Leo Tolstoy",
		"Title":"War and Peace"
	}
	
	
	
	
	
	
	
	]
	
	
}]);
})();
