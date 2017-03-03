angular.module('Controller',[])
.controller('control',['$scope',function($scope){
	$scope.point="";
	$scope.subNav="";
	$scope.isShow=false;
	$scope.ifShow=false;
	$scope.tabCar=['学生档案','申请管理','工作文件','佣金管理','发起通知'];
	$scope.hide =function(){
		$scope.isShow=false;
		$scope.ifShow=false;
	}
	$scope.changePoint =function(){
		$scope.isShow=true;
		$scope.point =$scope.tabCar[0];
	}
	$scope.onTheWay =function(){
		$scope.ifShow=true;
		$scope.subNav ="在途学生";
	}
	$scope.leave =function(){
		$scope.ifShow=true;
		$scope.subNav ="离境学生";
	}
	
}])
.controller('leaveCtrl',['$scope','getData','$rootScope',function($scope,getData,$rootScope){
	$scope.addShow=false;
	$scope.addSchool =function(){
		$scope.addShow=true;
	}
	//弹框数据
	$scope.listData ="";
	$scope.selected =[];
	$scope.selectedData ={};
	$scope.sumData="";
	$scope.confirmData="";
	
	//搜索数据
 	$scope.searchData=[];
 	$scope.hidden=true;//选择框是否隐藏  
    $scope.searchField="";//文本框数据
    $scope.tempdatas = $scope.searchData;
 	
 	//--------
	getData.getMenu();
	//接受广播
	$scope.$on('myData',function(event,data){
		$scope.listData =data;
		angular.forEach(data,function(data,index,array){
			$scope.searchData.push(data.Chinese,data.English)
		})
	})
	$scope.isChecked = function(id){  
        return
        	$scope.selected.indexOf(id) >= 0

    }; 
    $scope.updateSelection = function($event,id,eng,Web,Private,Type,Style,Chinese){
    	console.log(event);
        var checkbox = $event.target ;  
        var checked = checkbox.checked ;  
        if(checked){  
            $scope.selected
            .push({"aid":id,"english":eng,"web":Web,"private":Private,"type":Type,"style":Style,"china":Chinese});
           	console.log($scope.selected)
           	$scope.sumData= $scope.selected;

        }else{  
            var idx = $scope.selected.indexOf(id) ;
            var edx = $scope.selected.indexOf(eng) ;
            $scope.selected.splice(idx,1) ;
            $scope.selected.splice(edx,0) ;
        }  
    } ; 
    $scope.confirm =function(){
    	$scope.confirmData = $scope.sumData;
    	$scope.addShow=false;
    	console.log($scope.confirmData)
    }
    　$scope.deleteSchool=function(index){   //删除选中的一行
		$scope.confirmData.splice(index,1);
   };
   
   //搜索
   $scope.change=function(x){  
        $scope.searchField=x;  
        $scope.hidden=true;  
   }
   //获取的数据值与下拉选逐个比较，如果包含则放在临时变量副本，并用临时变量副本替换下拉选原先的数值，如果数据为空或找不到，就用初始下拉选项副本替换  
    $scope.changeKeyValue=function(v){  
          
        var newDate=[];  //临时下拉选副本  
        //如果包含就添加  
        angular.forEach($scope.searchData,function(data,index,array){  
            if(data.indexOf(v)>=0){  
                newDate.unshift(data);  
            }  
        });  
        //用下拉选副本替换原来的数据  
        $scope.searchData=newDate;  
        //下拉选展示  
        $scope.hidden=false;  
        //如果不包含或者输入的是空字符串则用初始变量副本做替换  
        if($scope.searchData.length==0 || ''==v){  
            $scope.searchData=$scope.tempdatas;  
        }  
        console.log($scope.datas);  
    }  
   console.log($scope.searchData);
}])
