function hello ($scope){//$scope对象是angular的核心  并不需要去创建 只是获取
	$scope.greeting = {//依赖注入 ？？ 控制反转   双向数据绑定
		text: "hello"
	};
}
//脏数据检查： 格式不对 或者数据被修改了  
angular.module('myApp',[]).controller('HelloCtrl',hello);