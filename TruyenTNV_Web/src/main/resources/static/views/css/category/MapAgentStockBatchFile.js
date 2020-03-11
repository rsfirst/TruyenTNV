//Bùi Đình Đạt

var FILE_DOWNLOAD = "Có lỗi xảy ra trong quá trình download file !";
app_vnm.directive('fileOnChange', function () {
	 return {
	  restrict: 'A',
	  link: function (scope, element, attrs) {
	   var onChangeHandler = scope.$eval(attrs.fileOnChange);
	   element.bind('change', onChangeHandler);
	  }
	 };
	});
app_vnm.directive("ngUploadChange",function(){
	   return{
	       scope:{
	           ngUploadChange:"&"
	       },
	       link:function($scope, $element, $attrs){
	           $element.on("change",function(event){
	               $scope.$apply(function(){
	                   $scope.ngUploadChange({$event: event})
	               })
	           })
	           $scope.$on("$destroy",function(){
	               $element.off();
	           });
	       }
	   }
	});
   app_vnm.directive('fileModel', ['$parse', function ($parse) {
            return {
               restrict: 'A',
               link: function(scope, element, attrs) {
                  var model = $parse(attrs.fileModel);
                  var modelSetter = model.assign;
                  
                  element.bind('change', function() {
                     scope.$apply(function() {
                        modelSetter(scope, element[0].files[0]);
                     });
                  });
               }
            };
}]);
app_vnm.controller('MapAgentStockBatchFileController',function($scope, $rootScope, $translate, $compile, $timeout, $uibModal, $location, $window, $filter, $http,NgTableParams, $localStorage)
{


	
	// Bùi Đình Đạt
	$scope.showBtn=true;

	$scope.file;
	$scope.fileName;
	$scope.dataTable=[];
	$scope.tableData=[];
	$scope.listSelectedItem=[];

	$scope.dataExcel=[];
	$scope.tableParams = new NgTableParams({count: 15},{
		dataset : $scope.tableData
	});		
	$scope.checkBoxAll=true;
	$scope.model = {};

	
	//Check BOX
	
	
	$scope.listPreOrderToAdd = [];
	$scope.selectOrRemovePreOrderItem = function(item) {
		var isHeaderGoodItem = $scope.isAllRowChecked($scope.tableData);
		if (isHeaderGoodItem) {
			$scope.model.checkboxListPreOrderItem = true;
		} else {
			$scope.model.checkboxListPreOrderItem = false;
		}
	};
	
	$scope.checkAllPreOrders = function(){
		angular.forEach($scope.tableData, function(item) {
			item.typeCheck = $scope.model.checkboxListPreOrderItem;
		})
	};
	
	$scope.isAllRowChecked = function(listDataTable){
		var resultCheck = false;
		
		if(listDataTable.length == 0){
			return false;
		}
		var countRowCheck = 0;
		for(var i =0; i<listDataTable.length; i++){
			if(listDataTable[i].typeCheckBox == true){
				countRowCheck++;
			}
		}
		
		if(countRowCheck == listDataTable.length){
			resultCheck = true;
		}
		return resultCheck;
	};
	//end check box
	
	// Xóa file
	$scope.removeAllItem =  function() {
		$scope.listPreOrderToAdd = [];
		for(var i =0; i<$scope.tableData.length; i++){
			if ($scope.tableData[i].typeCheck == false){
				$scope.listPreOrderToAdd.push($scope.tableData[i]);
			}
		} 
		
		if ($scope.listPreOrderToAdd.length == $scope.tableData.length) {
			bootbox.alert("Bạn phải chọn bản ghi để xóa");
		} else {
			$scope.tableParams = new NgTableParams({}, {
				dataset : $scope.listPreOrderToAdd
			});
			
			if ($scope.listPreOrderToAdd.length == 0) {
				$scope.model.checkboxListPreOrderItem = false;
			}
			
			$scope.tableData = [];
			Array.prototype.push.apply($scope.tableData, $scope.listPreOrderToAdd);
		}
	}
	// end Xóa file
	
	// upload excel file

	$scope.loadDataName= function(event)
	{
		$scope.fileName= event.target.files[0].name;

		$scope.tableData=[];
		 $scope.tableParams = new NgTableParams({
				count: 20
			}, {
				dataset : $scope.tableData
			});
		var x=[];	 
		 $scope.tableSuccess= new NgTableParams({
				count: 20
			},{
				dataset: x
			});
	}

	$scope.upLoadFileExcel= function ()
	{
		
		closeOverLay();
		$scope.tableData=[];

		var file=$scope.file;
		var data= new FormData();
		data.append("file",$scope.file);
		  var config = {
		            transformRequest: angular.identity,
		            transformResponse: angular.identity,
		            headers: {
		                'Content-Type': undefined
		            }
		        }
		 
		var url= eim_url+ '/bs/MapAgentStockBatchFile/getListdata';
		 $http.post(url,data,config).success(function(response)
				 {
			 
			
			 if (response!=null &&response!="")
				 {
				 $scope.dataTable=JSON.parse(response);
				for(var i=0; i<$scope.dataTable.length; i++)
					{
						var item={
								msisdn :$scope.dataTable[i].msisdn,
								shopCode : $scope.dataTable[i].shopCode,
								staffCode :$scope.dataTable[i].staffCode,
								typeCheck : false
						}
						$scope.tableData.push(item);
					}
			 $scope.tableParams = new NgTableParams({
					count: 20
				}, {
					dataset : $scope.tableData
				});
				 }
			 else
				 {
				 bootbox.alert("File không đúng định dạng. Bạn vui lòng chọn dạng file excel .xls hoặc .xlsx!")
				 
				 }
				
		
		
			 
		 }).error(function(response)
				 {
			 
			 bootbox.alert("File không đúng định dạng. Bạn vui lòng chọn dạng file excel .xls hoặc .xlsx!")
				 });
		  
		 $scope.quantity=$scope.tableData.length;

	};
	

	// download template
	$scope.downloadFileTemplateServer = function(){
    	var attachFile = {}; 
    	attachFile.fileName = "Template_Map_Agent_Stock_Batch.xlsx";
    	attachFile.folder = "Template_Map_Agent_Stock_Batch.xlsx";
    	dowloadFile(attachFile);
    }
	
	dowloadFile = function(data) {
		overLoading("Downloading file mẫu...");
		var url = eim_url + '/bs/downLoadFileTemplate';
		$http.post(url, data, {
			responseType : 'arraybuffer'
		}).success(function(response, status, headers, config) {
			overLoading("Downloading file mẫu...");
			download(new Blob([ response ]) , headers('FileNameDownload'), headers["content-type"]);
			closeOverLay();
		}).error(function(data) {
			bootbox.alert(FILE_DOWNLOAD);
			closeOverLay();
		});
	}
	// end Download template
	// xóa item đã chọn
	
	$scope.checkAll= function()
	{
		bootbox.alert("Giá trị : "+	$scope.checkBoxAll);
		var chk= $scope.itemCheckAll;
		for(var i=0; i<$scope.tableData.length; i++)
			{
				$scope.tableData[i].typeCheck=	$scope.checkBoxAll;

			}
	 var g=$scope.tableData;
		 $scope.tableParams = new NgTableParams({
				count: 20
			}, {
				dataset : $scope.tableData
			});
	}

	$scope.removeItem= function ()
	{
		
		var n= $scope.tableData.length;
		var check=0;
		for(var i =0; i<n; i++)
			{
			if ($scope.tableData[i].typeCheck==true)
				{
				check++;
				}
				
			}
		if (check==0)
			{
			bootbox.alert("Bạn phải chọn bản ghi để xóa!")
			
			}
		else
			{
		for(var i =0; i<n; i++)
			{
			 while ($scope.tableData[i].typeCheck==true)
				 {
			
				 	var location= $scope.tableData.indexOf($scope.tableData[i]);
				 	if(location!=-1)
				 		{
				 		$scope.tableData.splice(location,1);
				 		
				 		}
				 
				 }
				$scope.tableParams = new NgTableParams({
					count: 20
				}, {
					dataset : $scope.tableData
				});
				
			 
			 
				
			}
	
			}
		

		
	};
	
	//end xóa item
	
	// Thực hiện mapping 
	$scope.tableSuccess= new NgTableParams({
		count: 20
	},{
		dataset: []
	});
	$scope.AcceptMap = function()
	{
		var data= $scope.tableData;
		var url=eim_url +'/bs/MapAgentStockBatchFile/acceptMap';
		$http.post(url,data).success(function(response){
			$scope.tableSuccess= new NgTableParams({
				count: 20
			},{
				dataset: response
			});
			
		}).error(function(response){
			bootbox.alert("lỗi kết nối tới server!");
		})
	};
	
}
)