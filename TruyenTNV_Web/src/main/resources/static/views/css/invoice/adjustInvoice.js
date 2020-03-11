app_vnm.factory('adjustInvoiceFac', function($http, $translate) {
	return {
		searchTransactionAdjustMent : function(data, callback) {
			var url = eim_url + "/bs/CInvoiceAdustment/search";
			$http.post(url, data).success(callback).error(function(data, status, headers, config) {
				App.unblockUI("#contentMain");
				bootbox.alert(status + " " + $translate.instant('vnm.messages.error.connection'));
			});
		},
		actionUpdate : function(data, callback) {
			var url = eim_url + "/bs/CInvoiceAdustment/updateBillAdjust";
			$http.post(url, data).success(callback).error(function(data, status, headers, config) {
				App.unblockUI("#contentMain");
				bootbox.alert(status + " " + $translate.instant('vnm.messages.error.connection'));
			});
		},
		listSourceInitData : function(data, callback) {
			var url = eim_url + "/bs/CInvoiceAdustment/initData?shopId="+data;
			$http.post(url).success(callback).error(function(data, status, headers, config) {
				App.unblockUI("#contentMain");
				bootbox.alert(status + " " + $translate.instant('vnm.messages.error.connection'));
			});
		},
		listStaff : function(data, callback) {
			var url = eim_url + "/bs/CInvoice/actionGetListStaff";
			$http.post(url,data).success(callback).error(function(data, status, headers, config) {
				App.unblockUI("#contentMain");
				bootbox.alert(status + " " + $translate.instant('vnm.messages.error.connection'));
			});
		},
	}
});

app_vnm.controller('ctrl-createBillSale', function($scope, $rootScope, $translate, $compile, $timeout, $uibModal, $location, $window, FileUploader, $filter, $http,
		NgTableParams, $localStorage,adjustInvoiceFac) {
	
	$scope.model = {};

	$scope.SHOP_ID = $localStorage.clientContext.shopId;
	var SHOPCODE = $localStorage.clientContext.shop.shopCode;
	$scope.USERNAME = $localStorage.clientContext.username;
	$scope.isDisabledBtnAdjust = true;
	$scope.isDisabledBtnUpdate = true;
	$scope.isDisabledTextFieldPost = true;
	$scope.isDisabledTextTotalMoney = true;
	$scope.obBillInvoiceSelect = {};
	var TYPE = '';
	
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

    $scope.listSourceInitDataFn = function() {
    	adjustInvoiceFac.listSourceInitData($scope.SHOP_ID, function(result) {
			if(result.status == '0' && result.status != 'undefined'){
				App.unblockUI("#contentMain");
				bootbox.alert($translate.instant('vnm.messages.validate.prepaid.server.' + result.messages));
			}else {
				$scope.listStaff = result.lstStaffObject;
				//set default innit shop
				$scope.ListShopSource = result.lstShopObject;
				if($scope.ListShopSource != undefined && $scope.ListShopSource!=null){
					for(var i =0 ; i < $scope.ListShopSource.length;i++){
						if($scope.ListShopSource[i].shopId == $scope.SHOP_ID){
							$scope.model.objectShopCode = $scope.ListShopSource[i]; 
							break;
						}
					}
				}
				
				//set default innit Staff
				$scope.listStaff = result.lstStaffObject;
				if($scope.listStaff != undefined && $scope.listStaff!=null){
					for(var i =0 ; i < $scope.listStaff.length;i++){
						if($scope.listStaff[i].code == $scope.USERNAME){
							$scope.model.objectStaff = $scope.listStaff[i]; 
							break;
						}
					}
				}
				
				$scope.ListStatusInvoiceSource = result.lstTrangThaiHD;
				$scope.model.statusInvoice = $scope.ListStatusInvoiceSource[0].code
				
			}
			App.unblockUI("#contentMain");
		});
    }
    
    $scope.showDataForm = function(itemSelected) {

    	if(itemSelected != null){
    		$scope.model.mdnNumberDetail = itemSelected.mdn;
        	$scope.model.createDateDetail = itemSelected.createDate;
        	$scope.model.customerNameDetail = itemSelected.customerName;
        	$scope.model.addressDetail = itemSelected.address;
        	
        	if(itemSelected.cInvoice != undefined && itemSelected.cInvoice != null){
        		$scope.model.invoiceNumberDetail = itemSelected.cInvoice.invoiceFull;
        	}
        	
        	$scope.model.taxCodeDetail = itemSelected.taxCode;
        	$scope.model.formFromDate = itemSelected.fromDate;
        	$scope.model.formToDate = itemSelected.toDate;
        	
        	//tien chua thue
        	//String strMoneyTax = String.valueOf(Math.round(Double.parseDouble(txtTotalAmount.getText().trim()) * 100 / (100 + 10)));
        	$scope.model.moneyNoTax = Math.round(itemSelected.amountOrg);
        	$scope.model.moneyNoneTax = itemSelected.amountNoneTax;
        	$scope.model.discount = itemSelected.amountDiscount;
        	$scope.model.promotion = itemSelected.amountPromote;
        	
        	//Tien thue
        	//String strTax = String.valueOf(Integer.parseInt(txtTotalAmount.getText().trim()) - Integer.parseInt(strMoneyTax));
        	$scope.model.moneyTax = Math.round(itemSelected.amountVAT);
        	$scope.model.totalMoney = itemSelected.amountTotal;
        	
        	if($scope.listStaff != null && $scope.listStaff != undefined ){
        		for( var i = 0; i < $scope.listStaff.length ; i++){
            		if($scope.listStaff[i].code == itemSelected.staffCode){
            			
            			$scope.model.obStaffForm = $scope.listStaff[i];
            			break;
            		}
            	}
        	}
        	
    	}

    }
    
    $scope.clickRowInvoiceDetailFn = function(itemSelected) {
		$scope.itemSelected = itemSelected;
		$scope.showDataForm(itemSelected);
		$scope.isDisabledBtnAdjust = false;
		if($scope.model.statusInvoice == '2'){
			$scope.isDisabledBtnAdjust = true;
		}
		$scope.obBillInvoiceSelect = itemSelected;
	}
    
    $scope.searchTransactionFn = function() {
		
		var dataSearch={};
		dataSearch.shopId = StringUtilNVL($scope.model.objectShopCode.shopId);
		dataSearch.staffId = StringUtilNVL($scope.model.objectStaff.staffId);
		dataSearch.customerName = StringUtilNVL($scope.model.customerName);
		dataSearch.invoiceStatus = StringUtilNVL($scope.model.statusInvoice);
		dataSearch.type = StringUtilNVL($scope.model.typeInvoice); 
		dataSearch.fromDate = $("#fromDate").val();
		dataSearch.toDate = $("#toDate").val();
		TYPE = StringUtilNVL($scope.model.typeInvoice); 
		
		var startDateIn = StringUtilNVL($("#fromDate").val());
    	var endDateIn = StringUtilNVL($("#toDate").val());
    	
    	if(startDateIn == EMPTY_VALUE || endDateIn == EMPTY_VALUE  ){
    		bootbox.alert($translate.instant('vnm.create_bill_sale.mess.from.date.and.to.date.required'));
			return false
    	}
    	
		var today = moment();
		if(startDateIn != EMPTY_VALUE){
			var startDateInCompare  = moment(startDateIn, "DD/MM/YYYY");
    		if(startDateInCompare > today){
    			bootbox.alert($translate.instant('vnm.create_bill_sale.mess.from.date.greater.momment'));
				return false
    		}
		}
		
		var isDateAfter = checkDateIsAfterDate($("#fromDate").val(), $("#toDate").val());
		if(!isDateAfter){
			bootbox.alert($translate.instant('vnm.create_bill_sale.mess.from.date.greater.todate'));
			return false
		}
		
		App.blockUI({
			target : "#contentMain",
			boxed : true,
			message : 'processing...'
		});
		
		adjustInvoiceFac.searchTransactionAdjustMent(dataSearch, function(result) {
			if(result.status == '0' && result.status != 'undefined'){
				App.unblockUI("#contentMain");
				bootbox.alert($translate.instant('vnm.messages.validate.prepaid.server.' + result.messages));
			}else {
				$scope.listDataTransaction = result;
				if($scope.listDataTransaction.length > 0){														
					$scope.listDataTransaction = result;
					$scope.tableParams = new NgTableParams({}, {
						dataset : $scope.listDataTransaction
					});
					
					$scope.clickRowInvoiceDetailFn($scope.listDataTransaction[0]);
				}else{
					bootbox.alert($translate.instant('vnm.create_bill_sale.mess.transaction.not.found'));
					$scope.isDisabledBtnAdjust = true;
				}
			}
			App.unblockUI("#contentMain");
		});
		
    }
    
    $scope.totalMoneyChange = function(){
    	//tien chua thue
    	$scope.model.moneyNoTax = Math.round(($scope.model.totalMoney * 100.0) / (100 + 10));
    	//Tien thue
    	$scope.model.moneyTax = $scope.model.totalMoney - $scope.model.moneyNoTax;
    }
    
	var initialize = function () {
		$scope.listSourceInitDataFn();
	}

	initialize();
				
	$scope.btnAdjustOnclick = function() {
		
		var status = $scope.obBillInvoiceSelect.status;
		if( status != null && status != undefined && status == '4'){
			bootbox.alert($translate.instant('vnm.adjust_bill_sale.valid.status.err'));
			return;
		}
		
		$scope.isDisabledBtnAdjust = true;
		$scope.isDisabledBtnUpdate = false;
		$scope.isDisabledTextFieldPost = false;
		
		if(StringUtilNVL(TYPE) == '2'){
			$scope.isDisabledTextTotalMoney = false;
		}
	}
	
	$scope.btnUpdateOnclick = function() {
		
		let totalMoney = $scope.model.totalMoney;
		if(totalMoney != null && totalMoney != undefined && totalMoney == '' )
		{
			bootbox.alert($translate.instant('vnm.adjust_bill_sale.valid.totalMoney.err'));
			return false;
		}
		
		let fromDate = $("#formFromDate").val();
		let toDate = $("#formToDate").val();
		
		if(fromDate == EMPTY_VALUE   ){
			bootbox.alert($translate.instant('vnm.adjust_bill_sale.valid.fromDate'));
			return false;
    	}
		
		if( toDate == EMPTY_VALUE  ){
			bootbox.alert($translate.instant('vnm.adjust_bill_sale.valid.toDate'));
			return false;
		}
		
		var today = moment();
		if(fromDate != EMPTY_VALUE){
			var startDateInCompare  = moment(fromDate, "DD/MM/YYYY");
    		if(startDateInCompare > today){
    			bootbox.alert($translate.instant('vnm.create_bill_sale.mess.from.date.greater.momment'));
				return false;
    		}
		}
		
		var isDateAfter = checkDateIsAfterDate(fromDate, toDate);
		if(!isDateAfter){
			bootbox.alert($translate.instant('vnm.create_bill_sale.mess.from.date.greater.todate'));
			return false;
		}
		
		var billInvoiceOb = $scope.obBillInvoiceSelect;
		billInvoiceOb.customerName = $scope.model.customerNameDetail;
		billInvoiceOb.address = $scope.model.addressDetail;
		billInvoiceOb.taxCode = $scope.model.taxCodeDetail;
		billInvoiceOb.fromDate = $("#formFromDate").val();
    	billInvoiceOb.toDate = $("#formToDate").val();
    	billInvoiceOb.amountOrg = $scope.model.moneyNoTax;
    	billInvoiceOb.amountVAT = $scope.model.moneyTax;
    	billInvoiceOb.amountTotal = $scope.model.totalMoney;  	
    	billInvoiceOb.type = TYPE;
    	
    	App.blockUI({
			target : "#contentMain",
			boxed : true,
			message : 'processing...'
		});
		
		adjustInvoiceFac.actionUpdate(billInvoiceOb, function(result) {
			if(result.status == '0' && result.status != 'undefined'){
				App.unblockUI("#contentMain");
				bootbox.alert($translate.instant('vnm.messages.validate.prepaid.server.' + result.messages));
			}else {
				
				for(i = 0; $scope.listDataTransaction.length; i++){
					
					if($scope.listDataTransaction[i].invoiceId == $scope.obBillInvoiceSelect.invoiceId){
						
						$scope.listDataTransaction.splice(i, 1);
						
						$scope.tableParams = new NgTableParams({}, {
							dataset : $scope.listDataTransaction
						});
						
						break;
					}
				}
				
				$scope.isDisabledBtnAdjust = true;
				$scope.isDisabledBtnUpdate = true;
				$scope.isDisabledTextFieldPost = true;
				$scope.isDisabledTextTotalMoney = true;
				
				$scope.clearDataForm();
				
				bootbox.alert($translate.instant('vnm.adjust_bill_sale.message.success'));
			}
			App.unblockUI("#contentMain");
		});
		
	}
	
	
	

	$scope.shopIp = $localStorage.clientContext.shop.shopCode;
	$scope.model.shopName = $localStorage.clientContext.shop.shopName;
	$scope.model.status = 'Giữ số';

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
	 
	$scope.ListSourceTypeInvoice = [
	    	{ 'Id': '1', 'Title': 'HĐ thu cước sau gạch cước' },
	    	{ 'Id': '2', 'Title': 'HĐ thu cước trước gạch cước' }
	]
	
	
	$scope.clearDataForm = function() {
		$scope.model.mdnNumberDetail = '';
    	$scope.model.createDateDetail = '';
    	$scope.model.customerNameDetail = '';
    	$scope.model.addressDetail = '';
    	$scope.model.invoiceNumberDetail = '';
    	$scope.model.taxCodeDetail = '';
    	$scope.model.formFromDate = '';
    	$scope.model.formToDate = '';
    	$scope.model.moneyNoTax = '';
    	$scope.model.moneyNoneTax = '';
    	$scope.model.discount = '';
    	$scope.model.promotion = '';
    	$scope.model.moneyTax = '';
    	$scope.model.totalMoney = '';
	}
	
	$scope.onChangeShopCodeList = function(){
		var dataSearch = {
				"shopId":$scope.model.objectShopCode.shopId
		}
		
		$scope.initListStaff(dataSearch);
	}
	
	$scope.initListStaff = function(dataSearch) {
		
		$scope.model.objectStaff = null;
		adjustInvoiceFac.listStaff(dataSearch, function(result) {
			
			if(result.status == '0' && result.status != 'undefined'){
				App.unblockUI("#contentMain");
				bootbox.alert($translate.instant('vnm.messages.validate.prepaid.server.' + result.messages));
			}else {
				$scope.listStaff = result;
				for(var i =0 ; i<$scope.listStaff.length; i++){
					if($scope.listStaff[i].code == $scope.USERNAME){
						
						$scope.model.objectStaff = $scope.listStaff[i]; 
						
						break;
					}
				}
			}
			App.unblockUI("#contentMain");
		});
	}
});

function StringUtilNVL(val){
	if(val==undefined || val == null) return "";
	return $.trim(val);
}


