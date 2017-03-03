//给选项卡遍历添加背景图
$(" .tab-car .item").each(function(index, element) {
        $(element).css('background','#3a3f52 url(img/tab-ico'+index+'.png) no-repeat 34px center')
});
//选项卡下拉菜单
$(" .tab-car .item").first().click(function(){
	$(" .tab-car p").slideToggle();
})
$(" .tab-car p").click(function(){
	$(this).css('background-color',"#303548")
})
//angular路由配置
angular.module('myApp',['ngRoute','Controller','Service'])
.config(['$routeProvider',function($routeProvider){
	$routeProvider.when('/home',{
		templateUrl:"template/home.html"
		
	})
	.when('/apply',{
		templateUrl:"template/apply.html"
		
	})
	.when('/workFile',{
		templateUrl:"template/workFile.html"
		
	})
	.when('/commissions',{
		templateUrl:"template/commissions.html"
		
	})
	.when('/notice',{
		templateUrl:"template/notice.html"
		
	})
	.when('/onTheWay',{
		templateUrl:"template/onTheWay.html"
		
	})
	.when('/leave',{
		templateUrl:"template/leave.html"
		
	})
	.otherwise({
        redirectTo: '/home'
    })
	
	
}])