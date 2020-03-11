app_vnm.factory('forminvoiceapprove', function($http, $translate) {
	return {
		lsttrangthaihoadon : function( data,callback) {
			var url = eim_url + "/bs/FormInvoiceApprove/initData?shopId="+data;
			
			$http.post(url).success(callback).error(function(data, status, headers, config) {
				closeOverLay();
				bootbox.alert(status + " " + $translate.instant('vnm.messages.error.connection'));
				App.unblockUI("#contentMain");
			});
		},
		searchinvoice : function( data,callback) {
			var url = eim_url + "/bs/FormInvoiceApprove/search";
			
			$http.post(url,data).success(callback).error(function(data, status, headers, config) {
				closeOverLay();
				bootbox.alert(status + " " + $translate.instant('vnm.messages.error.connection'));
				App.unblockUI("#contentMain");
			});
		},
		cancelInvoice : function( data,callback) {
			var url = eim_url + "/bs/FormInvoiceApprove/cancelInvoice";
			
			$http.post(url,data).success(callback).error(function(data, status, headers, config) {
				closeOverLay();
				bootbox.alert(status + " " + $translate.instant('vnm.messages.error.connection'));
				App.unblockUI("#contentMain");
			});
		},
		approveInvoice : function( data,callback) {
			var url = eim_url + "/bs/FormInvoiceApprove/approveInvoice";
			
			$http.post(url,data).success(callback).error(function(data, status, headers, config) {
				closeOverLay();
				bootbox.alert(status + " " + $translate.instant('vnm.messages.error.connection'));
				App.unblockUI("#contentMain");
			});
		},
		printCInvoice : function( data,callback) {
			var url = eim_url + "/bs/FormInvoiceApprove/printCinvoice";
			
			$http.post(url,data).success(callback).error(function(data, status, headers, config) {
				closeOverLay();
				bootbox.alert(status + " " + $translate.instant('vnm.messages.error.connection'));
				App.unblockUI("#contentMain");
			});
		},
		getUserByShop : function( data,callback) {
			var url = eim_url + "/bs/FormInvoiceApprove/getuser";
			$http.post(url,data).success(callback).error(function(data, status, headers, config) {
				closeOverLay();
				bootbox.alert(status + " " + $translate.instant('vnm.messages.error.connection'));
				App.unblockUI("#contentMain");
			});
		},

	}

});

app_vnm.controller('form-invoiceapprove', function($scope, $rootScope, $translate, $compile, $timeout, $uibModal, $location, $window, FileUploader, $filter, $http,
		NgTableParams, $localStorage,forminvoiceapprove) {
	
	var data = $localStorage.clientContext.shop.shopId;
	$scope.shopname = $localStorage.clientContext.shop.shopName;
	$scope.shopcode = $localStorage.clientContext.shop.shopCode;
	//load init data
	forminvoiceapprove.lsttrangthaihoadon(data,function(result) {
		App.blockUI({
			target : "#contentMain",
			boxed : true,
			message : 'Loading...'
		});
		var date = new Date();
		$scope.model.fromDate =$filter('date')(date, "dd/MM/yyyy");
		
		$scope.model.toDate = $filter('date')(date, "dd/MM/yyyy");
		
		if(result.status == '0' && result.status != 'undefined'){
			App.unblockUI("#contentMain");
			bootbox.alert($translate.instant('vnm.messages.validate.prepaid.server.' + result.messages));
		}else {
			$scope.loaigiaodich = result.LoaiGiaoDich;
			$scope.model.selectedloaigiaodich=result.LoaiGiaoDich[0];
			$scope.trangthaihoadon = result.TrangThaiHoaDon;
			$scope.model.selectedtrangthaihoadon = result.TrangThaiHoaDon[0];
			$scope.lstStaffObject = result.lstStaffObject;
			$scope.lstShopObject = result.lstShopObject;
//			$scope.model.creater= result.lstStaffObject[0];
			
			
			$scope.model.selectedShop = result.lstShopObject.find(function(record){return record.shopId === $localStorage.clientContext.shop.shopId});
			
//			$scope.model.selectedShop = result.lstShopObject[0];
			App.unblockUI("#contentMain");
		}
	});
	
	$scope.reloadUserByShop = function(){
		//get user by shop
		
			App.blockUI({
				target : "#contentMain",
				boxed : true,
				message : 'Loading...'
			});
			var searchData={
					"shopId":$scope.model.selectedShop.shopId,
			}
			forminvoiceapprove.getUserByShop(searchData,function(result){
				$scope.lstStaffObject = result.lstStaffObject;
//				$scope.model.creater= result.lstStaffObject[0];
				App.unblockUI("#contentMain");
			});

	}
	
	
	
	//seach invoice
	
	$scope.searchInvoice= function(){
		
		console.log("searchInvoice");
		$scope.disabaleprintbt = false;
		$scope.disabalecanclebtn= false;
		$scope.resetInvoiceInfo();
		$scope.checkedInvoce=[];
		
		//validate ngay thang
		var today = new Date();
		var fromDate= $("#fromDate").val();//!=""? $("#fromDate").val() :$filter('date')(today, "dd/MM/yyyy"); 
		var toDate=$("#toDate").val();// !=""? $("#toDate").val() :$filter('date')(today, "dd/MM/yyyy");
		var valid = false;
		 if(fromDate!="" && toDate !=""){
		    	var from = fromDate.split("/");
				var FDATE= new Date(from[2], from[1]-1, from[0]);
				var to = toDate.split("/");
				var TDATE = new Date(to[2], to[1]-1, to[0]);
				if(FDATE <= TDATE){
					valid = true;
					
				}else{
					bootbox.alert("Từ ngày không thể lớn hơn đến ngày!");
				}
				console.log(FDATE);
				console.log(TDATE);
				console.log('compare '+(FDATE <= TDATE));
		    	
		    }else{
		    	valid = true;
		    }
		
		
		
	    if(valid==true){

	    	App.blockUI({
				target : "#contentMain",
				boxed : true,
				message : 'Loading...'
			});
			
			console.log($scope.model.selectedtrangthaihoadon);
			if(!$scope.model.selectedShop){
				bootbox.alert('Bạn cần chọn shop');
				App.unblockUI("#contentMain");
			} else if(!$scope.model.creater){
				bootbox.alert('Bạn cần chọn người lập');
				App.unblockUI("#contentMain");
			} else if(!$scope.model.selectedtrangthaihoadon){
				bootbox.alert('Bạn cần chọn trạng thái hợp đồng');
				App.unblockUI("#contentMain");
			} else if(!$scope.model.selectedloaigiaodich){
				bootbox.alert('Bạn cần chọn loại giao dịch');
				App.unblockUI("#contentMain");
			} else{
				var seachdata={
						"shopId":	$scope.model.selectedShop.shopId,
						"staffId": $scope.model.creater.staffId,
						"strStatus": $scope.model.selectedtrangthaihoadon.code,
						"fromDate": $("#fromDate").val(),
						"toDate": $("#toDate").val(),
						"cus_type": $scope.model.selectedloaigiaodich.code,
					}
				forminvoiceapprove.searchinvoice(seachdata,function(result){
					console.log("search result")
					console.log(result.length>0 );
					if(result.length>0){
						$scope.invoiceList = result;
						$scope.getInvoiceInfo(result[0]);
					}else{
						$scope.invoiceList = {};
						
					}
					
					App.unblockUI("#contentMain");
				});
				
			}
	    	
	    }

		
		
		
		// validate ngay thang

	};
	// add or remove selected invoice
	$scope.checkedInvoce=[];
	$scope.processSelectedInvoice = function(item,event){
		console.log(event.target.checked);
		if(event.target.checked==true){
			$scope.checkedInvoce.push(item);
		}else{
			$scope.checkedInvoce.splice(item,1);
		}
		console.log('$scope.checkedInvoce.length='+$scope.checkedInvoce.length);
		if($scope.checkedInvoce.length>0 && item.status==='1'){
			$scope.disabalecanclebtn= true;
			
		}else{
			$scope.disabalecanclebtn = false;
		}
		
	}
	
	//cancel invoice
	$scope.cancelInvoiceExecute = function(){
			var cancelData={
					"shopId":	$localStorage.clientContext.shop.shopId,
					"checkedInvoce": $scope.checkedInvoce,
					"shopCode":$localStorage.clientContext.shop.shopCode,
					"cancelUserId":$scope.model.creater.staffId
					
				}
			forminvoiceapprove.cancelInvoice(cancelData,function(result){
				console.log("cancel result="+result);
				bootbox.alert(result.responsemessage);
				$scope.resetInvoiceInfo();
				$scope.searchInvoice();
				
			});
			$scope.checkedInvoce=[];
			
	}
	
	//cancel invoice
	$scope.approveInvoiceExecute = function(){
			var cancelData={
					"shopId":	$localStorage.clientContext.shop.shopId,
					"checkedInvoce": $scope.checkedInvoce,
					"shopCode":$localStorage.clientContext.shop.shopCode,
					"approveUserId":$scope.model.creater.staffId
					
				}
			forminvoiceapprove.approveInvoice(cancelData,function(result){
				console.log("approve result="+result);
				bootbox.alert(result.responsemessage);
				$scope.resetInvoiceInfo();
				$scope.searchInvoice();
				
			});
			$scope.checkedInvoce=[];
	}
	
	$scope.resetInvoiceInfo = function(){
		$scope.model.sohoadon = "";
		$scope.model.ngaytao = "";
		$scope.model.shopcode = "";
		$scope.model.shopname = "";
		$scope.model.staff_code = "";
		$scope.model.staffname = "";
		
		$scope.model.tenkhachhang = "";
		$scope.model.congty = "";
		$scope.model.sotaikhoan = "";
		$scope.model.masothue = "";
		
		$scope.model.amount = "";
		$scope.model.discount = "";
		$scope.model.tax = "";
		$scope.model.amount_tax = "";
		$scope.model.grand_total_none_promotion = "";
		$scope.model.email = "";
		$scope.model.note = "";
		$scope.model.address="";

			$scope.disabaleprintbt = false;

		
		
		$scope.model.invoice_type ="";
		$scope.model.selectedinvoice_transtypename = "";
		
		$scope.model.exchangeRate="";
		$scope.model.promotion="";
		$scope.model.status="";
		$scope.model.naturalCurrency="";
		$scope.model.trans_inv_id = "";
		
		
	}
	
	
	
	
	//get invoiceinfo
	$scope.getInvoiceInfo = function(item){
		
		console.log("selected item=");
		console.log(item);
		
		$scope.model.sohoadon = item.sohoadon;
		$scope.model.ngaytao = item.ngaytao;
		$scope.model.shopcode = item.shopcode;
		$scope.model.shopname = item.shopname;
		$scope.model.staff_code = item.staff_code;
		$scope.model.staffname = item.staffname;
		
		$scope.model.tenkhachhang = item.tenkhachhang;
		$scope.model.congty = item.congty;
		$scope.model.sotaikhoan = item.sotaikhoan;
		$scope.model.masothue = item.masothue;
		
		$scope.model.amount = item.amount;
		$scope.model.discount = item.discount;
		$scope.model.tax = item.tax;
		$scope.model.amount_tax = item.amount_tax;
		$scope.model.grand_total_none_promotion = item.grand_total_none_promotion;
		$scope.model.email = item.email;
		$scope.model.note = item.note;
		$scope.model.address=item.address;
		if(item.trans_inv_id!=null){
			$scope.disabaleprintbt = true;
		}else{
			$scope.disabaleprintbt = false;
		}
		
		console.log("item.type"+item.type)
		var loaigiaodich = $scope.loaigiaodich.find(function(record){return record.code === item.type});
		console.log(loaigiaodich);
		$scope.model.invoice_type = loaigiaodich.code;
		$scope.model.selectedinvoice_transtypename = loaigiaodich.name;
		var trangthai = $scope.trangthaihoadon.find(function(record){return record.code === item.status});
		$scope.model.status=trangthai.name;
		
		$scope.model.paymentMethod ="VND"
		$scope.model.exchangeRate="1";
		$scope.model.promotion=item.promotion;
		$scope.model.naturalCurrency=item.amount;
		
		$scope.model.trans_inv_id = item.trans_inv_id;
	};
	
	//print cinvoice
	$scope.printcInvoice = function(printtype){
		var printData={
				"shopId":	$localStorage.clientContext.shop.shopId,
				"shopCode":$localStorage.clientContext.shop.shopCode,
				"trans_inv_id": $scope.model.trans_inv_id,
				"printtype":printtype
				
			}
		forminvoiceapprove.printCInvoice(printData,function(result){
			console.log("print result="+result.link);
			window.open(result.link,'_blank');
		});
		
	}
	
	

	
	$scope.model = {};

	$scope.validationOptions = {
			debounce : 1500,
			preValidateFormElements : true,
			rules : {},
			messages : {}
	}

	 $.validator.addMethod("EmptyValue", function (value, element) {
	        if (value == undefined || value=="") return false;
	        if($.trim(value)=="") return false;
	        return true;
	 }, "");
	 
	 $.validator.addMethod("maxlengthcustom", function (value, element, options) {
		 var valueLenght = $.trim(value.toString()).length;
		 if(valueLenght >  options) return false;
		 return true;
	 }, "");
	 
	$.validator.addMethod("minlengthcustom", function (value, element, options) {
		 var valueLenght = $.trim(value.toString()).length;
		 if(valueLenght>0){
			 if(valueLenght<options) return false;
		 }
		 return true;
	 }, "");
	
	var idAttachMentVal = null;
    var idAttachMentTypeInput = null;

	var initialize = function () {
	}

	initialize();
				


	$scope.shopIp = $localStorage.clientContext.shop.shopCode;
	$scope.model.shopName = $localStorage.clientContext.shop.shopName;

	// BEGIN validate input

	$scope.model.serialNew='';

	// BEGIN LOAD IMAGE table 1
	$scope.model.fileAttachments = [];

	var uploader = $scope.uploader = new FileUploader({
		url: eim_url + "/bs/Custome/uploadImage"
	});
	// config uploader
	uploader.queueLimit = 12;
	// Another user-defined filter
	uploader.filters.push({
		'name': 'enforceMaxFileSize',
		'fn': function (item,options) { 
			var type = '|' + item.type.slice(item.type.lastIndexOf('/') + 1) + '|';  
			if('|jpg|png|jpeg|bmp|gif|'.indexOf(type) == -1){ 
				var fileName = item.name; 
				$scope.messages = "Tệp tin "+fileName+" không hợp lệ.";
				App.notifyDanger($scope.messages);
				return false;
			}else{
				var sizeFile = item.size;
				if(sizeFile <=10485760){
					return true;
				}else{
					var fileName = item.name;
					// var message = messageSizeErrorClient.replace(/###/,
					// fileName);
					$scope.messages = "Dung lượng tệp "+fileName+" không được vượt quá 10MB";
					App.notifyDanger($scope.messages);
					return false;
				}
			}
		}
	});
	 
});

function StringUtilNVL(val){
	if(val==undefined || val == null) return "";
	return $.trim(val);
}

function createTimeStamp(){
	var theMoment = moment();
	var millisTimeStamp = theMoment.valueOf();
	return millisTimeStamp;
}

