var app = angular.module('myApp',[]);
app.controller('CarCtrl',function ($scope){
	$scope.items=[
		{
			"title": "哇哈哈",
			"quantity": "10",
			"price": "5.56"
		},{
			"title": "巧克力",
			"quantity": "6",
			"price": "20.86"
		},{
			"title": "巧乐杯",
			"quantity": "10",
			"price": "15.96"
		},{
			"title": "火腿肠",
			"quantity": "8",
			"price": "8.48"
		}
	]
	$scope.remove = function(i){
		$scope.items.splice(i,1);
	}
});