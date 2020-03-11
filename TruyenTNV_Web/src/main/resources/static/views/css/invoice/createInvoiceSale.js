app_vnm.factory('createInvoiceSale', function($http, $translate) {
	return {
		searchTransactionById : function(data, callback) {
			var url = eim_url + "/bs/CInvoice/actionCInvoiceSearchTransactionById";
			$http.post(url, data).success(callback).error(function(data, status, headers, config) {
				App.unblockUI("#contentMain");
				bootbox.alert(status + " " + $translate.instant('vnm.messages.error.connection'));
			});
		},
		searchTransaction : function(data, callback) {
			var url = eim_url + "/bs/CInvoice/actionCInvoiceSearchTransaction";
			$http.post(url, data).success(callback).error(function(data, status, headers, config) {
				App.unblockUI("#contentMain");
				bootbox.alert(status + " " + $translate.instant('vnm.messages.error.connection'));
			});
		},
		actionOnCreateCInvoice : function(data, callback) {
			var url = eim_url + "/bs/CInvoice/actionCreateCInvoice";
			$http.post(url, data).success(callback).error(function(data, status, headers, config) {
				App.unblockUI("#contentMain");
				bootbox.alert(status + " " + $translate.instant('vnm.messages.error.connection'));
			});
		},
		listShop : function(data, callback) {
			var url = eim_url + "/bs/CInvoice/actionGetListShop";
			$http.post(url,data).success(callback).error(function(data, status, headers, config) {
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
		listPayMethod : function( callback) {
			var url = eim_url + "/bs/CInvoice/actionGetListPayMethod";
			$http.post(url).success(callback).error(function(data, status, headers, config) {
				App.unblockUI("#contentMain");
				bootbox.alert(status + " " + $translate.instant('vnm.messages.error.connection'));
			});
		},
		listInvoiceStatus : function( callback) {
			var url = eim_url + "/bs/CInvoice/actionGetListInvoiceStatus";
			$http.post(url).success(callback).error(function(data, status, headers, config) {
				App.unblockUI("#contentMain");
				bootbox.alert(status + " " + $translate.instant('vnm.messages.error.connection'));
			});
		},
		listTyGia : function( callback) {
			var url = eim_url + "/bs/CInvoice/actionGetTyGia";
			$http.post(url).success(callback).error(function(data, status, headers, config) {
				App.unblockUI("#contentMain");
				bootbox.alert(status + " " + $translate.instant('vnm.messages.error.connection'));
			});
		},
		listTransaction : function( callback) {
			var url = eim_url + "/bs/CInvoice/actionGetListTransaction";
			$http.post(url).success(callback).error(function(data, status, headers, config) {
				App.unblockUI("#contentMain");
				bootbox.alert(status + " " + $translate.instant('vnm.messages.error.connection'));
			});
		},
		getListGoods : function( data,callback) {
			var url = eim_url + "/bs/CInvoice/actionGetListGoods?transId=" + data;
			$http.post(url,data).success(callback).error(function(data, status, headers, config) {
				App.unblockUI("#contentMain");
				bootbox.alert(status + " " + $translate.instant('vnm.messages.error.connection'));
			});
		},
		getListGoodDetail : function( data,callback) {
			var url = eim_url + "/bs/CInvoice/actionGetListGoodDetail?transDetailID=" + data;
			$http.post(url,data).success(callback).error(function(data, status, headers, config) {
				App.unblockUI("#contentMain");
				bootbox.alert(status + " " + $translate.instant('vnm.messages.error.connection'));
			});
		},
		actionPrintInvoice : function( data,callback) {
			var url = eim_url + "/bs/CInvoice/actionPrintInvoice";
			$http.post(url,data).success(callback).error(function(data, status, headers, config) {
				App.unblockUI("#contentMain");
				bootbox.alert(status + " " + $translate.instant('vnm.messages.error.connection'));
			});
		},
		actionPrintInvoiceCD : function( data,callback) {
			var url = eim_url + "/bs/CInvoice/actionPrintInvoiceCD";
			$http.post(url,data).success(callback).error(function(data, status, headers, config) {
				App.unblockUI("#contentMain");
				bootbox.alert(status + " " + $translate.instant('vnm.messages.error.connection'));
			});
		},
	}
});

app_vnm.controller('ctrl-createBillSale', function($scope, $rootScope, $translate, $compile, $timeout, $uibModal, $location, $window, FileUploader, $filter, $http,
		NgTableParams, $localStorage,createInvoiceSale) {
	
	$scope.model = {};
	$scope.SHOP_ID = $localStorage.clientContext.shopId;
	var SHOPCODE = $localStorage.clientContext.shop.shopCode;
	$scope.USERNAME = $localStorage.clientContext.username;
	$scope.OB_TRANSACTION = {} ;
	var C_INVOICE_OB = {};
	
	$scope.isDisabledBtnPrintInvoiceChange = false;
	$scope.isDisabledBtnPrintElectronic = true;
	$scope.isDisabledBtnPrintConversion = true;
	
	$scope.listDataTransaction = [];
	$scope.tableParams = new NgTableParams({}, {
		dataset : $scope.listDataTransaction
	});
	
	$scope.listDataGoods = [];
	$scope.tableGoodsParams = new NgTableParams({}, {
		dataset : $scope.listDataGoods
	});
	
	$scope.listDataGoodDetail = [];
	$scope.tableGoodDetailParams = new NgTableParams({}, {
		dataset : $scope.listDataGoodDetail
	});
	
	$scope.model.fromDate =  moment(new Date()).format("DD/MM/YYYY");
	$scope.model.toDate = moment(new Date()).format("DD/MM/YYYY");
	
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
	 
	$scope.initListShop = function() {
		
		var dataSearch = {
				"shopId":$scope.SHOP_ID
		}
		  App.blockUI({
	            target : "#contentMain",
	            boxed : true,
	            message : 'Loading...'
	        });
		createInvoiceSale.listShop(dataSearch, function(result) {
			App.unblockUI("#contentMain");
			if(result.status == '0' && result.status != 'undefined'){
				App.unblockUI("#contentMain");
				bootbox.alert($translate.instant('vnm.messages.validate.prepaid.server.' + result.messages));
			}else {
				$scope.listShop = result;
				for(var i =0 ; i < $scope.listShop.length;i++){
					if($scope.listShop[i].shopId == $scope.SHOP_ID){
						$scope.model.objectShopCode = $scope.listShop[i]; 
						
						break;
					}
				}
				
				if ($localStorage.clientContext.transfer != '') {
					$scope.searchTransactionById($localStorage.clientContext.transfer);
					$localStorage.clientContext.transfer = '';
				}
				
				var dataSearch1 = {
						"shopId":$scope.SHOP_ID
				}
				
				$scope.initListStaff(dataSearch1);
				
			}
			
		});
	}
	$scope.initListStaff = function(dataSearch) {
		
		$scope.model.objectStaff = null;
		  App.blockUI({
	            target : "#contentMain",
	            boxed : true,
	            message : 'Loading...'
	        });
		createInvoiceSale.listStaff(dataSearch, function(result) {
			App.unblockUI("#contentMain");

			if(result.status == '0' && result.status != 'undefined'){
				bootbox.alert($translate.instant('vnm.messages.validate.prepaid.server.' + result.messages));
			}else {
				$scope.listStaff = result;
				for(var i =0 ; i<$scope.listStaff.length; i++){
					if($scope.listStaff[i].code == $scope.USERNAME){
						$scope.model.objectStaff = $scope.listStaff[i]; 
						
						break;
					}
				}
				$scope.initListPaymethod();
			}
		});
	}
	
	$scope.initListPaymethod = function() {
		 App.blockUI({
	            target : "#contentMain",
	            boxed : true,
	            message : 'Loading...'
	        });
		createInvoiceSale.listPayMethod( function(result) {
			App.unblockUI("#contentMain");

			if(result.status == '0' && result.status != 'undefined'){
				App.unblockUI("#contentMain");
				bootbox.alert($translate.instant('vnm.messages.validate.prepaid.server.' + result.messages));
			}else {
				$scope.listPayMethod = result;
				$scope.model.objectPayMethod = $scope.listPayMethod[0];
				$scope.initListTransaction();
				
			}
		});
	}
	
	$scope.initInvoiceStatus = function() {
		 App.blockUI({
	            target : "#contentMain",
	            boxed : true,
	            message : 'Loading...'
	        });			
		createInvoiceSale.listInvoiceStatus( function(result) {
			App.unblockUI("#contentMain");

			if(result.status == '0' && result.status != 'undefined'){
				App.unblockUI("#contentMain");
				bootbox.alert($translate.instant('vnm.messages.validate.prepaid.server.' + result.messages));
			}else {
				$scope.listInvoiceStatus = result;	
				$scope.initListTyGia();
			}
		});
	}
	
	$scope.initListTransaction = function() {
		 App.blockUI({
	            target : "#contentMain",
	            boxed : true,
	            message : 'Loading...'
	        });
		createInvoiceSale.listTransaction( function(result) {
			App.unblockUI("#contentMain");
			if(result.status == '0' && result.status != 'undefined'){
				App.unblockUI("#contentMain");
				bootbox.alert($translate.instant('vnm.messages.validate.prepaid.server.' + result.messages));
			}else {
				$scope.listTransaction = result;
				$scope.model.objectTransaction = $scope.listTransaction[0];
				$scope.initInvoiceStatus();
				
			}
		
		});
	}
	
	
	$scope.initListTyGia = function() {
		 App.blockUI({
	            target : "#contentMain",
	            boxed : true,
	            message : 'Loading...'
	        });		
		createInvoiceSale.listTyGia( function(result) {
			App.unblockUI("#contentMain");

			if(result.status == '0' && result.status != 'undefined'){
				App.unblockUI("#contentMain");
				bootbox.alert($translate.instant('vnm.messages.validate.prepaid.server.' + result.messages));
			}else {
				$scope.listTyGia = result;
			}
		});
	}
	
	$scope.searchTransactionById = function(transId) {
		var ob={};
		ob.shop_id = transId;

		App.blockUI({
			target : "#contentMain",
			boxed : true,
			message : 'processing...'
		});
		
		$scope.itemTransSelected = null;
		$scope.listDataTransaction = [];
		$scope.listDataGoods = [];
		$scope.listDataGoodDetail = [];
		
		createInvoiceSale.searchTransactionById(ob, function(result) {
			if (result.status == '0' && result.status != 'undefined') {
				App.unblockUI("#contentMain");
				bootbox.alert($translate.instant('vnm.create_bill_sale.'+result.messages));
			} else {
				
				$scope.listDataTransaction = result;
				if($scope.listDataTransaction.length > 0){														
					$scope.listDataTransaction = result;
					$scope.getListGoods(result[0]);
					$scope.tableParams = new NgTableParams({}, {
						dataset : $scope.listDataTransaction
					});
					
					$scope.getListGoods($scope.listDataTransaction[0]);
				}else{
					$scope.clearDataForm();
					$scope.model.moneyPaidType = $scope.model.objectPayMethod.name;
					
					$scope.listDataTransaction = [];
					$scope.tableParams = new NgTableParams({}, {
						dataset : $scope.listDataTransaction
					});
					bootbox.alert($translate.instant('vnm.create_bill_sale.mess.transaction.not.found'));
				}
			}
			App.unblockUI("#contentMain");
		});
	}
	
	var initialize = function () {
		$scope.initListShop();
		
	/*	var dataSearch = {
				"shopId":$scope.SHOP_ID
		}
		
		$scope.initListStaff(dataSearch);*/
		
		//$scope.initListPaymethod();
		//$scope.initListTransaction();
		
		//$scope.initInvoiceStatus();
		//$scope.initListTyGia();
	}

	initialize();
	
	$scope.searchTransaction = function() {
				
		if($scope.model.objectStaff == undefined && $scope.model.objectStaff == null){
    		bootbox.alert($translate.instant('vnm.create_bill_sale.mess.staff.required'));
    		return 0;
    	}else{
      		if($scope.model.objectStaff.staffId == ''){
      			bootbox.alert($translate.instant('vnm.create_bill_sale.mess.staff.required'));
    			return 0;
    		}
    	}
		
		if($scope.model.objectShopCode == undefined && $scope.model.objectShopCode == null){
    		bootbox.alert($translate.instant('vnm.create_bill_sale.mess.shop.required'));
    		return 0;
    	}else{
      		if($scope.model.objectShopCode.shopId == ''){
      			bootbox.alert($translate.instant('vnm.create_bill_sale.mess.shop.required'));
    			return 0;
    		}
    	}
		
		var cuaHang = $scope.model.objectShopCode.shopId;
		var staff_id = $scope.model.objectStaff.staffId;
		var kieuGD = $scope.model.objectTransaction.code;
		var htTT = $scope.model.objectPayMethod.code;
		
		var tuNgay = $("#fromDate").val();
		var denNgay = $("#toDate").val();
		
		if(tuNgay != undefined && tuNgay!=null && tuNgay != EMPTY_VALUE){
			if(StringUtilNVL($scope.model.fromDate) == null || StringUtilNVL($scope.model.fromDate) == EMPTY_VALUE){
				bootbox.alert($translate.instant('vnm.create_bill_sale.mess.from.date.type.error'));
				return false
			}
		}
		
		if(denNgay != undefined && denNgay!=null && denNgay != EMPTY_VALUE){
			if(StringUtilNVL($scope.model.toDate) == null || StringUtilNVL($scope.model.toDate) == EMPTY_VALUE){
				bootbox.alert($translate.instant('vnm.create_bill_sale.mess.to.date.type.error'));
				return false
			}
		}

		$scope.isDisabledBtnPrintElectronic = true;
		$scope.isDisabledBtnPrintConversion = true;
		
		var ob={};
		ob.shop_id = cuaHang;
		ob.staff_id = staff_id;
		ob.pay_method = htTT;
		ob.cus_type = kieuGD;
		ob.fromDate = tuNgay;
		ob.toDate = denNgay;
		
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
		
		
		
		$scope.itemTransSelected = null;
		$scope.listDataTransaction = [];
		$scope.tableParams = new NgTableParams({}, {
			dataset : $scope.listDataTransaction
		});
		
		$scope.listDataGoods = [];
		$scope.tableGoodsParams = new NgTableParams({}, {
			dataset : $scope.listDataGoods
		});
		
		$scope.listDataGoodDetail = [];
		$scope.tableGoodDetailParams = new NgTableParams({}, {
			dataset : $scope.listDataGoodDetail
		});
		
		App.blockUI({
			target : "#contentMain",
			boxed : true,
			message : 'processing...'
		});
		createInvoiceSale.searchTransaction(ob, function(result) {
			App.unblockUI("#contentMain");
			if(result.status == '0' && result.status != 'undefined'){
				bootbox.alert($translate.instant('vnm.create_bill_sale.'+result.messages));
			}else {				
				$scope.listDataTransaction = result;
				if($scope.listDataTransaction.length > 0){														
					$scope.listDataTransaction = result;
					$scope.tableParams = new NgTableParams({}, {
						dataset : $scope.listDataTransaction
					});
					
					$scope.getListGoods($scope.listDataTransaction[0]);
				}else{
					$scope.clearDataForm();
					$scope.model.moneyPaidType = $scope.model.objectPayMethod.name;
					
					$scope.listDataTransaction = [];
					$scope.tableParams = new NgTableParams({}, {
						dataset : $scope.listDataTransaction
					});
					bootbox.alert($translate.instant('vnm.create_bill_sale.mess.transaction.not.found'));
				}
			}
			
		});
	
	}
	$scope.onChangeShopCodeList = function(){
		var dataSearch = {
				"shopId":$scope.model.objectShopCode.shopId
		}
		
		$scope.initListStaff(dataSearch);
	}
	
	$scope.itemTransSelected = null;
	$scope.getListGoods = function(itemTransaction) {
		$scope.itemTransSelected = itemTransaction;
		$scope.listDataGoods = [];
		$scope.tableGoodsParams = new NgTableParams({}, {
			dataset : $scope.listDataGoods
		});
		
		$scope.listDataGoodDetail = [];
		$scope.tableGoodDetailParams = new NgTableParams({}, {
			dataset : $scope.listDataGoodDetail
		});
		App.blockUI({
			target : "#contentMain",
			boxed : true,
			message : 'processing...'
		});
		var transId=itemTransaction.trans_id;
		createInvoiceSale.getListGoods(transId, function(result) {
			App.unblockUI("#contentMain");
			
			if(result.status == '0' && result.status != 'undefined'){
				bootbox.alert($translate.instant('vnm.messages.validate.prepaid.server.' + result.messages));
			}else {
				$scope.listDataGoods = result;
				if($scope.listDataGoods.length > 0){														
					$scope.listDataGoods = result;
					$scope.tableGoodsParams = new NgTableParams({}, {
						dataset : $scope.listDataGoods
					});
					$scope.getListGoodDetail($scope.listDataGoods[0]);
				}
			}
		
		});
		$scope.showDataForm(itemTransaction);
	
	}
	$scope.getListGoodDetail = function(itemGood) {
		App.blockUI({
			target : "#contentMain",
			boxed : true,
			message : 'processing...'
		});
		var transDetailID = itemGood.trans_detail_id;
		
		createInvoiceSale.getListGoodDetail(transDetailID, function(result) {
			App.unblockUI("#contentMain");
			
			if(result.status == '0' && result.status != 'undefined'){
				bootbox.alert($translate.instant('vnm.messages.validate.prepaid.server.' + result.messages));
			}else {
				$scope.listDataGoodDetail = result;
				if($scope.listDataGoodDetail.length > 0){									
					$scope.listDataGoodDetail = result;
					$scope.tableGoodDetailParams = new NgTableParams({}, {
						dataset : $scope.listDataGoodDetail
					});
					
				}
			}
			
		});
		
	}
	
	var oldTyGiaTemp = "";
	var oldPayMethodTemp = "";
	
$scope.showDataForm = function(itemTransaction) {
		
		$scope.OB_TRANSACTION = itemTransaction;
		$scope.model.customerName = itemTransaction.cust_name;
		$scope.model.address = itemTransaction.cust_address;
		$scope.model.taxCode = itemTransaction.tax_code;
		$scope.model.accountNumber = itemTransaction.bill_account;
		$scope.model.companyName = itemTransaction.company;
		
		$scope.model.createDate = currentDateString();
		
		var vdblAmount  =  parseFloat(itemTransaction.amount);
		var vdblTax = parseFloat(itemTransaction.tax);
		var vdblAmountTax = parseFloat(itemTransaction.amount_tax);
		var vdblOrgAmount =  parseFloat(itemTransaction.org_total);
		var vdblDiscount =  parseFloat(itemTransaction.discount);
		var vdblPromotion =  parseFloat(itemTransaction.promotion);
		var vdblGrantAmount =  parseFloat(itemTransaction.org_total);
		
		$scope.model.moneyNoTax = formatNumber(vdblAmount);
		$scope.model.promotion = formatNumber(vdblPromotion);
		$scope.model.discount = formatNumber(vdblDiscount);
		$scope.model.moneyTax = formatNumber(vdblTax);
		$scope.model.moneyWithTax = formatNumber(vdblAmountTax);
		$scope.model.naturalCurrency = formatNumber(vdblOrgAmount);
		$scope.model.moneyPaid = formatNumber(vdblGrantAmount);
		
		$scope.model.moneyNoTaxNoFormat = vdblAmount;
		$scope.model.promotionNoFormat = vdblPromotion;
		$scope.model.discountNoFormat = vdblDiscount;
		$scope.model.moneyTaxNoFormat = vdblTax;
		$scope.model.moneyWithTaxNoFormat = vdblAmountTax;
		$scope.model.naturalCurrencyNoFormat = vdblOrgAmount;
		$scope.model.moneyPaidNoFormat = vdblGrantAmount;
		
		for(var i =0 ; i < $scope.listShop.length;i++){
			if($scope.listShop[i].shopCode == itemTransaction.shopCode){
				$scope.model.objectShopFormView = $scope.listShop[i]; 				
				break;
			}
		}
		for(var i =0 ; i< $scope.listStaff.length;i++){
			if($scope.listStaff[i].code == itemTransaction.staffCode){
				$scope.model.objectStaffFormView = $scope.listStaff[i]; 				
				break;
			}
		}
		for(var i =0 ; i < $scope.listTransaction.length;i++){
			if($scope.listTransaction[i].code == itemTransaction.cus_type){
				$scope.model.objectTransactionFormView = $scope.listTransaction[i]; 				
				break;
			}
		}
		
		if($scope.listInvoiceStatus != null && $scope.listInvoiceStatus != undefined && $scope.listInvoiceStatus.length > 0){
			$scope.model.invoiceStatus = $scope.listInvoiceStatus[0].name;
			$scope.model.invoiceStatusObject = $scope.listInvoiceStatus[0];
		}
		
		if(itemTransaction.pay_method != oldPayMethodTemp){
			for(var i = 0; $scope.listPayMethod.length ; i++){
				if($scope.listPayMethod[i].code == itemTransaction.pay_method){
					$scope.model.objectPayMethodFormView = $scope.listPayMethod[i]; 	
					$scope.model.paymentMethod = $scope.model.objectPayMethodFormView.name;
					$scope.model.moneyPaidType = $scope.model.objectPayMethodFormView.name;
					
					if($scope.model.objectPayMethodFormView.value != oldTyGiaTemp){
						for( j = 0; $scope.listTyGia.length ; j++){
							if($scope.listTyGia[j].fir_currency == $scope.model.objectPayMethodFormView.value){
								$scope.model.objectTyGiaFormView = $scope.listTyGia[j]; 	
								$scope.model.exchangeRate = $scope.model.objectTyGiaFormView.rate;
								
								break;
							}
						}
						oldTyGiaTemp = $scope.model.objectPayMethodFormView.value;
					}
					
					break;
				}
			}
			
			oldPayMethodTemp = itemTransaction.pay_method;
		}		
		
	}

	$scope.clearDataForm = function() {
		
		$scope.model.createDate = "";
		$scope.model.invoiceStatus = "";
		$scope.model.objectShopFormView = "";
		$scope.model.objectTransactionFormView = "";
		$scope.model.customerName = "";
		$scope.model.companyName = "";
		$scope.model.address = "";
		$scope.model.accountNumber = "";
		$scope.model.taxCode = "";
		$scope.model.paymentMethod = "";
		$scope.model.exchangeRate = "";
		$scope.model.discount = "";
		$scope.model.moneyTax = "";
		$scope.model.moneyWithTax = "";
		$scope.model.naturalCurrency = "";
		$scope.model.moneyPaid = "";
		$scope.model.note = "";
		$scope.model.email = "";
		$scope.model.moneyNoTax = "";
		$scope.model.promotion = "";
		$scope.model.objectStaffFormView = null;
		$scope.itemTransSelected = null;
		
		$scope.listDataGoods = [];
		$scope.tableGoodsParams = new NgTableParams({}, {
			dataset : $scope.listDataGoods
		});
		
		$scope.listDataGoodDetail = [];
		$scope.tableGoodDetailParams = new NgTableParams({}, {
			dataset : $scope.listDataGoodDetail
		});
	}
	
	
	
	$scope.onCreateCInvoice = function (){
		App.blockUI({
			target : "#contentMain",
			boxed : true,
			message : 'processing...'
		});
		
		if($scope.itemTransSelected == null ){
			bootbox.alert($translate.instant('vnm.create_bill_sale.mess.transaction.required'));
			App.unblockUI("#contentMain");
			return;
		}
		
		if(validBeforeCreateForCInvoice() == false){
			App.unblockUI("#contentMain");
			return;
		}
		
		var invoiceHeaderOb = {};
		invoiceHeaderOb.shopID = $scope.model.objectShopFormView.shopId;
		invoiceHeaderOb.shopCode = $scope.model.objectShopFormView.shopCode;
		invoiceHeaderOb.staffID = $scope.model.objectStaffFormView.staffId;
		invoiceHeaderOb.name = $scope.model.customerName;
		invoiceHeaderOb.company = $scope.model.companyName;
		invoiceHeaderOb.address = $scope.model.address;
		invoiceHeaderOb.account = $scope.model.accountNumber;
		invoiceHeaderOb.tin = $scope.model.taxCode;
		invoiceHeaderOb.note = $scope.model.note;
		invoiceHeaderOb.email = $scope.model.email;
		invoiceHeaderOb.payMethod = $scope.OB_TRANSACTION.pay_method;
		
		invoiceHeaderOb.amount = $scope.model.moneyNoTaxNoFormat;
		invoiceHeaderOb.tax = $scope.model.moneyTaxNoFormat;
		invoiceHeaderOb.orgTotal = $scope.model.naturalCurrencyNoFormat;
		invoiceHeaderOb.amountTax = $scope.model.moneyWithTaxNoFormat;
		invoiceHeaderOb.discount = $scope.model.discountNoFormat;
		invoiceHeaderOb.promotion = $scope.model.promotionNoFormat;
		invoiceHeaderOb.grandTotal = $scope.model.moneyPaidNoFormat;
		
		invoiceHeaderOb.createDate = $scope.model.createDate;
		invoiceHeaderOb.userName = $scope.USERNAME;
		invoiceHeaderOb.status = $scope.model.invoiceStatusObject.code;
		
		if( $scope.listDataGoods != null && $scope.listDataGoods != undefined && $scope.listDataGoods.length > 0 ){
			var obGood = $scope.listDataGoods[0];
			invoiceHeaderOb.taxRate = obGood.tax_rate;
		}
		invoiceHeaderOb.invoiceType = "";
		invoiceHeaderOb.transId = $scope.OB_TRANSACTION.trans_id;
		invoiceHeaderOb.shopCodeLogin = SHOPCODE;
		
		$scope.isDisabledBtnPrintElectronic = true;
		$scope.isDisabledBtnPrintConversion = true;
		createInvoiceSale.actionOnCreateCInvoice(invoiceHeaderOb, function(result) {
			if(result.status == '0' && result.status != 'undefined'){
				App.unblockUI("#contentMain");
				bootbox.alert($translate.instant('vnm.create_bill_sale.mess.create.electronic.invoice.fail') + result.messages);
			}else {
				
				for(i = 0; $scope.listDataTransaction.length; i++){
					
					if($scope.listDataTransaction[i].trans_id == $scope.OB_TRANSACTION.trans_id){
						
						$scope.listDataTransaction.splice(i, 1);
						
						$scope.tableParams = new NgTableParams({}, {
							dataset : $scope.listDataTransaction
						});
						
						/*if($scope.listDataTransaction.length > 0){
							$scope.getListGoods($scope.listDataTransaction[0]);
						}*/
						
						break;
					}
				}
				
				C_INVOICE_OB = result;
				let soHoaDon = C_INVOICE_OB.invoiceFull;
				bootbox.alert($translate.instant('vnm.create_bill_sale.mess.oncreate.invoice.success') +' '+ soHoaDon);
				$scope.isDisabledBtnPrintElectronic = false;
				$scope.isDisabledBtnPrintConversion = false;
				
				$scope.clearDataForm();
			}
			App.unblockUI("#contentMain");
		});
	}
	
	downloadFileCInvoice = function(data){
    	dowloadFileFromURL(data);
    }
	
	 validBeforeCreateForCInvoice = function()
	 {
		var createDateTemp = $scope.model.createDate;
		if(createDateTemp == null || createDateTemp == undefined || createDateTemp == '' )
		{
			bootbox.alert($translate.instant('vnm.create_bill_sale.mess.create.date.required'));
			return false;
		}

		var shopObTemp = $scope.model.objectShopFormView;
		var shopCode = shopObTemp.shopCode;
		if(shopCode == null || shopCode == undefined || shopCode == '')
		{
			bootbox.alert($translate.instant('vnm.create_bill_sale.mess.shop.required'));
			return false;
		}
		
		var staffObTemp = $scope.model.objectStaffFormView;
		var staffCode = staffObTemp.code;
		if(staffCode == null || staffCode == undefined || staffCode == '')
		{
			bootbox.alert($translate.instant('vnm.create_bill_sale.mess.staff.required'));
			return false;
		}

		var transactionType = $scope.model.objectTransactionFormView.code;
		if(transactionType == null || transactionType == undefined || transactionType == '')
		{
			bootbox.alert($translate.instant('vnm.create_bill_sale.mess.transaction.type.required'));
			return false;
		}

		var nameTemp = $scope.model.customerName;
		if(nameTemp == null || nameTemp == undefined || nameTemp == '')
		{
			bootbox.alert($translate.instant('vnm.create_bill_sale.mess.customer.type.required'));
			return false;
		}

		return true;
	}
	 
	$scope.onPrintElectronicInvoice = function (){
		if(C_INVOICE_OB == null || C_INVOICE_OB == undefined || C_INVOICE_OB.invoiceFull == ''){
			bootbox.alert($translate.instant('vnm.create_bill_sale.mess.invoice.number.required'));
		}
		
		App.blockUI({
			target : "#contentMain",
			boxed : true,
			message : 'processing...'
		});
		
		let CInvoiceObInput = {};
		CInvoiceObInput.invoiceFull  = C_INVOICE_OB.invoiceFull;
		CInvoiceObInput.shopCode =  SHOPCODE;
		
		createInvoiceSale.actionPrintInvoice(CInvoiceObInput, function(result) {
			if(result.status == '0' && result.status != 'undefined'){
				bootbox.alert($translate.instant('vnm.messages.validate.prepaid.server.' + result.messages));
			}else {
				
				var output = result;
				let soHoaDon = output.linkPrint;
				var dataDownload = {};
				dataDownload.folder = soHoaDon;
				downloadFileCInvoice(dataDownload);
				
				bootbox.alert($translate.instant('vnm.create_bill_sale.mess.print.electronic.invoice.success')+ '\n' +soHoaDon);
				
			}
			App.unblockUI("#contentMain");
		})
		
	}
	
	$scope.onPrintConversionInvoice = function (){
		if(C_INVOICE_OB == null || C_INVOICE_OB == undefined || C_INVOICE_OB.invoiceFull == ''){
			bootbox.alert($translate.instant('vnm.create_bill_sale.mess.invoice.number.required'));
		}
		
		App.blockUI({
			target : "#contentMain",
			boxed : true,
			message : 'processing...'
		});
		
		let CInvoiceObInput = {};
		CInvoiceObInput.invoiceFull  = C_INVOICE_OB.invoiceFull;
		CInvoiceObInput.shopCode =  SHOPCODE;
		
		createInvoiceSale.actionPrintInvoiceCD(CInvoiceObInput, function(result) {
			if(result.status == '0' && result.status != 'undefined'){
				App.unblockUI("#contentMain");
				bootbox.alert($translate.instant('vnm.messages.validate.prepaid.server.' + result.messages));
			}else {
				
				var output = result;
				let soHoaDon = output.linkPrint;
				var dataDownload = {};
				dataDownload.folder = soHoaDon;
				downloadFileCInvoice(dataDownload);
				
				bootbox.alert($translate.instant('vnm.create_bill_sale.mess.print.electronic.invoice.success')+ '\n' +soHoaDon);
			}
			App.unblockUI("#contentMain");
		})
	}
			
			
		
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

function currentDateString(){
	var today = new Date();
	var dd = today.getDate();
	var mm = today.getMonth()+1; //January is 0!
	var yyyy = today.getFullYear();

	if(dd<10) {
	    dd = '0'+dd
	} 

	if(mm<10) {
	    mm = '0'+mm
	} 

	today = dd + '/' + mm + '/' + yyyy;
	return today;
}

function formatNumber(amount) {
    decimalCount = 0, decimal = ".", thousands = ",";
    try {
       decimalCount = Math.abs(decimalCount);
       decimalCount = isNaN(decimalCount) ? 2 : decimalCount;

       const negativeSign = amount < 0 ? "-" : "";

       let i = parseInt(amount = Math.abs(Number(amount) || 0).toFixed(decimalCount)).toString();
       let j = (i.length > 3) ? i.length % 3 : 0;

       return negativeSign + (j ? i.substr(0, j) + thousands : '') + i.substr(j).replace(/(\d{3})(?=\d)/g, "" + thousands) + (decimalCount ? decimal + Math.abs(amount - i).toFixed(decimalCount).slice(2) : "");
    } catch (e) {
    	
    }
}
