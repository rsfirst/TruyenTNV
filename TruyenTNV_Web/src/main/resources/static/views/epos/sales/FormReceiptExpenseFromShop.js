app_vnm.factory('formReceiptExpenseShop', function($http, $translate) {
	return {
		getListApdomainByType: function(data, callback) {
			var url = eim_url + "/epos/getValueDomainByType";
			$http.post(url, data).success(callback).error(function(data, status, headers, config) {
				App.unblockUI("#contentMain");
				closeOverLay();
				bootboxAlertFocus(status + " " + $translate.instant('vnm.messages.error.connection'), "", $translate.instant("vnm.lable.vnm.name"), "");
			});
		},
		getListAccountType : function(callback) {
			var url = eim_url + "/epos/sales/formBankTransactionApprove/getListAccountType";
			$http.post(url).success(callback).error(function(data, status, headers, config) {
				closeOverLay();
				bootboxAlertFocus(status + " " + $translate.instant('vnm.messages.error.connection'), "", $translate.instant("vnm.lable.vnm.name"), "");
			});
		},
		getListReasonSource: function(data, callback) {
			var url = eim_url + "/epos/getListReason";
			$http.post(url, data).success(callback).error(function(data, status, headers, config) {
				App.unblockUI("#contentMain");
				closeOverLay();
				bootboxAlertFocus(status + " " + $translate.instant('vnm.messages.error.connection'), "", $translate.instant("vnm.lable.vnm.name"), "");
			});
		},
		getShopListFromRoot : function(data, callback) {
			var url = eim_url + "/epos/sales/formBankTransactionApprove/getShopListFromRoot";
			$http.post(url, data).success(callback).error(function(data, status, headers, config) {
				closeOverLay();
				bootboxAlertFocus(status + " " + $translate.instant('vnm.messages.error.connection'), "", $translate.instant("vnm.lable.vnm.name"), "");
			});
		},
		//danh sach nhan vien
		getListStaffSource: function(data, callback) {
			var url = eim_url + "/epos/getListStaffStatus";
			$http.post(url, data).success(callback).error(function(data, status, headers, config) {
				App.unblockUI("#contentMain");
				closeOverLay();
				bootboxAlertFocus(status + " " + $translate.instant('vnm.messages.error.connection'), "", $translate.instant("vnm.lable.vnm.name"), "");
			});
		},
		//danh sach chung tu
		getListReceiptDB: function(data, callback) {
			var url = eim_url + "/epos/sales/FormReceiptExpenseFromShop/listReceipt";
			$http.post(url, data).success(callback).error(function(data, status, headers, config) {
				App.unblockUI("#contentMain");
				closeOverLay();
				bootboxAlertFocus(status + " " + $translate.instant('vnm.messages.error.connection'), "", $translate.instant("vnm.lable.vnm.name"), "");
			});
		},
		
		//update phieu thu
		updateReceiptInfo: function(data, callback) {
			var url = eim_url + "/epos/sales/FormReceiptExpenseFromShop/updateReceiptInfo";
			$http.post(url, data).success(callback).error(function(data, status, headers, config) {
				App.unblockUI("#contentMain");
				closeOverLay();
				bootboxAlertFocus(status + " " + $translate.instant('vnm.messages.error.connection'), "", $translate.instant("vnm.lable.vnm.name"), "");
			});
		},
		//tao moi phieu thu
		createReceiptInfo: function(data, callback) {
			var url = eim_url + "/epos/sales/FormReceiptExpenseFromShop/createReceiptInfo";
			$http.post(url, data).success(callback).error(function(data, status, headers, config) {
				App.unblockUI("#contentMain");
				closeOverLay();
				bootboxAlertFocus(status + " " + $translate.instant('vnm.messages.error.connection'), "", $translate.instant("vnm.lable.vnm.name"), "");
			});
		},
		//lay so phieu thu
		getReceiptNo: function(data, callback) {
			var url = eim_url + "/epos/sales/FormReceiptExpenseFromShop/getReceiptNo";
			$http.post(url, data).success(callback).error(function(data, status, headers, config) {
				App.unblockUI("#contentMain");
				closeOverLay();
				bootboxAlertFocus(status + " " + $translate.instant('vnm.messages.error.connection'), "", $translate.instant("vnm.lable.vnm.name"), "");
			});
		},
		//duyet phieu thu
		approveReceiptInfo: function(data, callback) {
			var url = eim_url + "/epos/sales/FormReceiptExpenseFromShop/approveReceipt";
			$http.post(url, data).success(callback).error(function(data, status, headers, config) {
				App.unblockUI("#contentMain");
				closeOverLay();
				bootboxAlertFocus(status + " " + $translate.instant('vnm.messages.error.connection'), "", $translate.instant("vnm.lable.vnm.name"), "");
			});
		},
		//huy phieu thu
		destroyReceiptInfo: function(data, callback) {
			var url = eim_url + "/epos/sales/FormReceiptExpenseFromShop/destroyReceipt";
			$http.post(url, data).success(callback).error(function(data, status, headers, config) {
				App.unblockUI("#contentMain");
				closeOverLay();
				bootboxAlertFocus(status + " " + $translate.instant('vnm.messages.error.connection'), "", $translate.instant("vnm.lable.vnm.name"), "");
			});
		},
		//get payment info
		getpaymentInfo :function(data,callback){
			var url = eim_url + "/epos/sales/FormReceiptExpenseFromShop/getPaymentInfo";
			$http.post(url,data).success(callback).error(function(data, status, headers, config) {
						closeOverLay();
						bootboxAlertFocus(status + " " + $translate.instant('vnm.messages.error.connection'),"",$translate.instant("vnm.lable.vnm.name"),"");
			});
		},
		exportFile : function(data, callback) {
			var url = eim_url + "/epos/report/exportMultiFile?reportInput=" + data;
			$http.get(url, {
				responseType : 'arraybuffer'
			}).success(callback).error(function(data, status, headers, config) {
				App.unblockUI("#contentMain");
				bootboxAlertFocus(status + " " + $translate.instant('vnm.messages.error.connection'), "", $translate.instant("vnm.lable.vnm.name"), "");
			});
		},
	}
})


app_vnm.controller('ctrl-FormReceiptExpenseFromShop', function($scope, $rootScope, $translate, $compile, $timeout, $uibModal, $location, $window, FileUploader, $filter, $http, NgTableParams,
		$localStorage, formReceiptExpenseShop) {
	$scope.model = {};
	$scope.limitCbb = 20;
	
	$scope.isDisabledBtnUpdateReceipt = true;
	$scope.isDisabledBtnPrint = true;
	$scope.model.searchEndDate = moment().format('DD/MM/YYYY');
	
	$scope.model.searchStartDate = moment().subtract(1, 'months').format('DD/MM/YYYY');
	
	$scope.labelReceiptNo = $translate.instant("vnm.FormReceiptExpenseFromShop.label.number.collection");// don vi thu
	$scope.labelReceipterMoney = $translate.instant("vnm.FormReceiptExpenseFromShop.label.receipter.money");//nguoi thu tien
	$scope.labelUnitReceipt = $translate.instant("vnm.FormReceiptExpenseFromShop.label.receipt.unit");//don vi thu
	$scope.labelReceipterReason = $translate.instant("vnm.FormReceiptExpenseFromShop.label.receipt.reason");//Ly do thu
	$scope.labelPayer = $translate.instant("vnm.FormReceiptExpenseFromShop.label.payer");//nguoi nop
	
	$scope.rowSelected = null;
	$scope.isShowPnlButtonAction = true;
	//show, hide panel accept udpate
	$scope.isShowPnlButtonAcceptUpdate = false;
	
	//show hide panel accept create
	$scope.isShowPnlButtonAcceptCreate = false;
	
	$scope.isDisUpdate = true;
	$scope.isDisCreate = true;
	
	var SHOP_ID_LOGGED = $localStorage.clientContext.shop.shopId;
	var SHOP_CODE_LOGGED = $localStorage.clientContext.shop.shopCode;
	var SHOP_NAME_LOGGED = $localStorage.clientContext.shop.shopName;
	
	var STAFF_ID_LOGGED = $localStorage.clientContext.shop.staffId;
	var STAFF_CODE_LOGGED = $localStorage.clientContext.shop.staffCode;
	var STAFF_NAME_LOGGED = $localStorage.clientContext.shop.staffName;
	
	//danh sach shop
	$scope.ShopSource = [];
	
	$scope.lstReceiveSource = [{
		'code' : '1',
		'name' : 'Phiếu thu'
	}, {
		'code' : '2',
		'name' : 'Phiếu chi'
	} ]
	
	//tim kiem cua hang theo code
	$scope.getShopByCode = function(listShop, shopCodeIn){
		var shopResult = null;
		for(var i =0; i < listShop.length;i++){
			if(listShop[i].shopCode ==shopCodeIn){
				shopResult = listShop[i];
				break;
			}
		}
		return shopResult;
	}
	
	//tim kiem nhan vien theo code
	$scope.getStaffByCode = function(listStaff, codeIn){
		var staffResult = null;
		for(var i =0; i < listStaff.length;i++){
			if(listStaff[i].code == codeIn){
				staffResult = listStaff[i];
				break;
			}
		}
		return staffResult;
	}
	
	$scope.getListAccountTypeFn = function() {
		formReceiptExpenseShop.getListAccountType(function(result) {
			if (result != null && result != undefined && result.status === '0') {
				bootboxAlertFocus(result.messages, "",
						$translate.instant("vnm.lable.vnm.name"), "");
				closeOverLay();
			} else {
				$scope.lstAccountType = result;
				closeOverLay();
			}
		});
	}
	
	$scope.ListReasonSource = [];
	
	$scope.onSearchReceiptFn = function(){
		if($scope.model.searchReceiptType=='1'){
			$scope.ListReasonSource = $scope.ReasonSourceType1;
		}else{
			$scope.ListReasonSource = $scope.ReasonSourceType2;
		}
	}
	
	//load combobox trang thai
	$scope.getListStatusFn = function() {
		overLoading("loading...");
		var dataInput = {};
		dataInput.type = "11";
		
		formReceiptExpenseShop.getListApdomainByType(dataInput, function(result) {
			closeOverLay();
			$scope.ListStatusSource = result;
		});
	}
	
	// show popup
	$scope.showModalFunction = function(idModal) {
		$('#' + idModal).modal('show');
		$('#' + idModal).on('shown.bs.modal', function(e) {
			$.fn.dataTable.tables({
				visible : true,
				api : true
			}).columns.adjust();
			
			$("#tblListShop_filter input").focus();
		});
	}
	
	// hide popup
	$scope.hideModalFunction = function(idModal) {
		$('#' + idModal).modal('hide');
	}
	
	//method exit popup lay ly do lap chung tu
	$scope.exitPopupReason = function(){
		$scope.model.popupReceiptType = "";
		$scope.model.popupTkhtType = "";
		$scope.hideModalFunction('modalReasonReceiptNew');
	}
	
	$scope.setDataTotalMoney = function(){
		$scope.model.detailTotalMney = $scope.model.detailCurrencyMoney; 
	}
	
	//dong y lay ly do lap chung tu
	$scope.onClickGetReason = function(){
		
		//validate loai chung tu
		if($scope.model.popupReceiptType  == undefined && $scope.model.popupReceiptType ==null){
			bootboxAlertFocus($translate.instant("vnm.FormReceiptExpenseFromShop.popup.receipt.type.required"), "",
					$translate.instant("vnm.lable.vnm.name"), "");
			return;
		}
		
		//validate tai khoan hach toan
		if($scope.model.popupTkhtType  == undefined && $scope.model.popupTkhtType ==null){
			bootboxAlertFocus($translate.instant("vnm.FormReceiptExpenseFromShop.popup.account.required"), "",
					$translate.instant("vnm.lable.vnm.name"), "");
			return;
		}
		
		$scope.model.detailReceiptType = $scope.model.popupReceiptType;//loai ct
		$scope.model.detailAccount = $scope.model.popupTkhtType;// tai khoan hac toan
		$scope.model.detailPaymentType = '1';// HTTT phan tu dau tien code
		$scope.hideModalFunction('modalReasonReceiptNew');
		
		$scope.model.detailDateCreate = moment().format('DD/MM/YYYY');
		$scope.model.detailStatus = '1';
		$scope.model.detailExchangeRate = 1;
		$scope.model.detailReceiptUnitCode = SHOP_CODE_LOGGED;//don vi thu code
		$scope.model.detailReceiptUnitName = SHOP_NAME_LOGGED;// don vi thu name
		
		$scope.model.detailReceipterCode = STAFF_CODE_LOGGED;//nguoi thu code
		$scope.model.detailReceipterName = STAFF_NAME_LOGGED;//nguoi thu name
		
		$scope.model.detailPayer = ''; //nguoi nop
		$scope.model.detailAddress = ''; //dia chi
		$scope.model.detailCurrencyMoney = '';//tien nguyen te
		$scope.model.detailComments = '';
		$scope.model.detailReceiptReasonName = '';
		
		//neu la so phieu thu
		if($scope.model.popupReceiptType=='1'){
			$scope.labelReceiptNo = $translate.instant("vnm.FormReceiptExpenseFromShop.label.number.collection");
			$scope.labelUnitReceipt = $translate.instant("vnm.FormReceiptExpenseFromShop.label.receipt.unit");//don vi thu
			$scope.labelReceipterMoney = $translate.instant("vnm.FormReceiptExpenseFromShop.label.receipter.money");//nguoi thu tien
			$scope.labelReceipterReason = $translate.instant("vnm.FormReceiptExpenseFromShop.label.receipt.reason");//Ly do thu
			$scope.labelPayer = $translate.instant("vnm.FormReceiptExpenseFromShop.label.payer");
		}else{
			//neu la phieu chi
			$scope.labelReceiptNo = $translate.instant("vnm.FormReceiptExpenseFromShop.label.number.payment");
			$scope.labelUnitReceipt = $translate.instant("vnm.FormReceiptExpenseFromShop.label.payer.shop");//cửa hàng chi
			$scope.labelReceipterMoney = $translate.instant("vnm.FormReceiptExpenseFromShop.label.payer.money");//nguoi chi tien
			$scope.labelReceipterReason = $translate.instant("vnm.FormReceiptExpenseFromShop.label.payer.reason");//Ly do chi
			$scope.labelPayer = $translate.instant("vnm.FormReceiptExpenseFromShop.label.receipter");//nguoi nhan
		}
		$scope.isDisUpdate = false;
		$scope.isDisCreate = false;
		
		$scope.getReceiptNoDB();
	}
	
	//click buton lap chung tu moi
	$scope.createReasonPopupFn = function(){
		$scope.isShowPnlButtonAcceptCreate = true;
		$scope.isShowPnlButtonAction = false;
		
		$scope.showModalFunction('modalReasonReceiptNew');
	}
	
	//lay du lieu tu form de tao chung tu
	$scope.getDataCreateReceipt = function(){
		var dataReturn = {};
		dataReturn.type = $scope.model.detailReceiptType; //loai ct
		dataReturn.status = $scope.model.detailStatus;// trang thai
		
		dataReturn.receiptNo = $scope.model.detailReceiptCode;// so phieu thu
		dataReturn.createDatetime = StringUtilNVL($("#DetailDateCreate").val());//ngay lap
		dataReturn.shopId = SHOP_ID_LOGGED;//shop id
		dataReturn.staffId = STAFF_ID_LOGGED;//staffId
		dataReturn.userName = $scope.model.detailReceipterName;//
		dataReturn.shopCode = $scope.model.detailReceiptUnitCode;//don vi thu
		
		dataReturn.reasonId = 		$scope.model.detailReceiptReasonId;//ly do thu
		dataReturn.accountCode = 	$scope.model.detailAccount;//tai khoan hach toan
		dataReturn.notes = 		$scope.model.detailComments;//ghi chu
		dataReturn.orgAmount = 	$scope.model.detailCurrencyMoney;//tien nguyen te
		dataReturn.payMethod = 	$scope.model.detailPaymentType;//httt hinh thuc thanh toan
		dataReturn.amount = 	$scope.model.detailTotalMney; //tong tien
		dataReturn.staffCode = $scope.model.detailReceipterCode;//Nguoi nop code
		
		dataReturn.deliverer = $scope.model.detailPayer; //nguoi nop
		dataReturn.address = $scope.model.detailAddress;//dia chi
		
		return dataReturn;
	}
	
	//dong y lap chung tu
	$scope.acceptCreateReceipt = function(){
		// validate input update
		//validate ly do
		if(StringUtilNVL($scope.model.detailReceiptReason)==""){
			bootboxAlertFocus($translate.instant("vnm.FormReceiptExpenseFromShop.reason.receipt.required"), "",
					$translate.instant("vnm.lable.vnm.name"), "");
			return 0;
		}
		
		if(StringUtilNVL($scope.model.detailPayer)  == ""){
			bootboxAlertFocus($translate.instant("vnm.FormReceiptExpenseFromShop.payer.required"), "",
					$translate.instant("vnm.lable.vnm.name"), "");
			return 0;
		}
		
		// tien nguyen te bat buoc nhap
		if(StringUtilNVL($scope.model.detailCurrencyMoney)  == ""){
			bootboxAlertFocus($translate.instant("vnm.FormReceiptExpenseFromShop.detailCurrencyMoney.required"), "",
					$translate.instant("vnm.lable.vnm.name"), "");
			return 0;
		}
	
		// tien nguyen te phai lon hon 0
		if(!($scope.model.detailCurrencyMoney > 0)){
			bootboxAlertFocus($translate.instant("vnm.FormReceiptExpenseFromShop.detailCurrencyMoney.greate.than.zero"), "",
					$translate.instant("vnm.lable.vnm.name"), "");
			return 0;
		}
	
		var dataCreate = $scope.getDataCreateReceipt();
		
		$scope.model.popupTkhtType = null;
		$scope.model.popupReceiptType = null;
		
		$scope.createReceiptInfoFn(dataCreate);
	}
	
	//Bo qua lap chung tu
	$scope.cancelCreateReceipt = function(){
		$scope.model.popupTkhtType = null;
		$scope.model.popupReceiptType = null;
		
		$scope.isShowPnlButtonAction = true;
		$scope.isShowPnlButtonAcceptCreate = false;
		
		$scope.isDisUpdate = true;
		$scope.isDisCreate = true;
		
		if($scope.rowSelected != null && $scope.rowSelected != undefined){
			$scope.setDataDetailReceipt($scope.rowSelected);
		}else{
			$scope.clearDataDetailReceipt();
		}
	}
	
	//load combobox hinh thuc thanh toan
	$scope.getListPaymentMethodFn = function() {
		overLoading("loading...");
		var dataInput = {};
		dataInput.type = "12";
		
		formReceiptExpenseShop.getListApdomainByType(dataInput, function(result) {
			closeOverLay();
			$scope.ListPaymentSource = result;
		});
	}
	
	$scope.ReasonSourceTotal = [];
	$scope.ReasonSourceType1 = [];
	$scope.ReasonSourceType2 = [];
	

/*	$scope.getListShopSourceFn = function(){
		formReceiptExpenseShop.getShopListFromRoot(SHOP_ID_LOGGED, function(result) {
			$scope.ShopSource = result;
		});
	}*/
	
	//danh sach nhan vien
	/*$scope.getListStaffFn = function() {
		overLoading("loading...");
		var dataInput = {};
		dataInput.shopId = SHOP_ID_LOGGED;

		formReceiptExpenseShop.getListStaffSource(dataInput, function(result) {
			closeOverLay();
			$scope.StaffSource = result;
			$scope.model.fromStaff = $scope.StaffSource[0];
		});
	}*/
	
	
	//Danh sach ly do
	/*$scope.getListReasonSourceFn = function() {
		overLoading("loading...");
		var dataInput = {};
		dataInput.status = "1";

		$scope.ReasonSourceType1 = [];
		$scope.ReasonSourceType2 = [];
		
		formReceiptExpenseShop.getListReasonSource(dataInput, function(result) {
			closeOverLay();
			
			for(var i=0; i<result.length; i++){
				if(result[i].type == '1' || result[i].type == '2'
					|| result[i].type == '18' || result[i].type == '19'){
					$scope.ReasonSourceTotal.push(result[i]);
				}
			}
			
			//loc danh sach 
			for(var i=0; i<$scope.ReasonSourceTotal.length; i++){
				if($scope.ReasonSourceTotal[i].type == '1' || $scope.ReasonSourceTotal[i].type == '18'){
					$scope.ReasonSourceType1.push($scope.ReasonSourceTotal[i]);
				}else{
					$scope.ReasonSourceType2.push($scope.ReasonSourceTotal[i]);
				}
			}
			
			//khoi tao laoi phieu thu
			$scope.model.searchReceiptType=='1'
			$scope.onSearchReceiptFn();
		});
	}*/
	
	//load danh sach phieu thu
	$scope.ListReceiptResult = [];
	$scope.searchListReceiptFn = function() {
		overLoading("loading...");
		$scope.rowSelected = null;
		$scope.isDisCreate = true;
		$scope.listSelectItemCheckBox = [];
		//reset panel detail
		$scope.clearDataDetailReceipt();
		
		//validate 
		if(StringUtilNVL($scope.model.searchShopCode)==''){
			closeOverLay();
			var mess = $translate.instant("vnm.common_mess.required.field")+' '
			+ $translate.instant('vnm.FormReceiptExpenseFromShop.label.shop');
			
			bootboxAlertFocus(mess, "",
					$translate.instant("vnm.lable.vnm.name"), "");
			return 0;
		}
		
		//validate 
		if(StringUtilNVL($scope.model.searchStaffCode)==''){
			closeOverLay();
			var mess = $translate.instant("vnm.common_mess.required.field")+' '
			+ $translate.instant('vnm.FormReceiptExpenseFromShop.label.staff');
			
			bootboxAlertFocus(mess, "",
					$translate.instant("vnm.lable.vnm.name"), "");
			return 0;
		}
		
		var dataInput = {};
		if($scope.model.searchShop!=undefined &&  $scope.model.searchShop!=null){
			dataInput.shopId = StringUtilNVL($scope.model.searchShop.shopId);
		}
		
		dataInput.type = StringUtilNVL($scope.model.searchReceiptType);
		dataInput.receiptNo = StringUtilNVL($scope.model.searchReceiptCode);
		dataInput.accountCode = StringUtilNVL($scope.model.searchTkhtType);
		dataInput.payMethod = StringUtilNVL($scope.model.searchPaymentType);
		
		dataInput.status = StringUtilNVL($scope.model.searchStatus);
		
		if($scope.model.searchReason!=undefined &&  $scope.model.searchReason!=null){
			dataInput.reasonId = StringUtilNVL($scope.model.searchReason.reasonId);
		}
		
		if($scope.model.searchStaff!=undefined &&  $scope.model.searchStaff!=null){
			dataInput.staffId = StringUtilNVL($scope.model.searchStaff.staffId);
		}
		
		$scope.isDisabledBtnUpdateReceipt = true;
		$scope.isDisabledBtnPrint = true;
		
		$scope.model.checkAll = false;
		$("#checkAll").prop('checked',false);
		
		dataInput.fromDate = StringUtilNVL($("#searchFromDate").val());
		dataInput.toDate = StringUtilNVL($("#searchEndDate").val());
		
		dataInput.bankDepositId = StringUtilNVL("");
		
		formReceiptExpenseShop.getListReceiptDB(dataInput, function(result) {
			closeOverLay();
			$scope.ListReceiptResult = result;
			createDataTableListReceiptFromShop($scope.ListReceiptResult);
		});
	}
	
	//click bo qua sua thong tin
	$scope.btnCancelUpdateOnclick = function(){
		$scope.isShowPnlButtonAction = true;
		$scope.isShowPnlButtonAcceptUpdate = false;
		
		//disable dia chi , ghi chu
		$scope.isDisUpdate = true;
		
		$scope.setDataDetailReceipt($scope.rowSelected);
		
	}
	
	//click sua thong tin
	$scope.onClickUpdateBtn = function(){
		$scope.isShowPnlButtonAction = false;
		$scope.isShowPnlButtonAcceptUpdate = true;
		//mo truong note va address
		$scope.isDisUpdate = false;
	}
	
	//update phieu thu
	$scope.updateReceiptInfoDB = function() {
		overLoading("loading...");
		var dataUpdate = $scope.rowSelected;
		
		$scope.isShowPnlButtonAction = true;
		$scope.isShowPnlButtonAcceptUpdate = false;
		$scope.isDisUpdate = true;
		
		if($scope.rowSelected == null || $scope.rowSelected == undefined){
			closeOverLay();
			return 0;
		}
		//update dia chi va ghi chu
		dataUpdate.notes = StringUtilNVL($scope.model.detailComments);
		dataUpdate.address= StringUtilNVL($scope.model.detailAddress);
		
		dataUpdate.userName = StringUtilNVL(STAFF_CODE_LOGGED);
		
		formReceiptExpenseShop.updateReceiptInfo(dataUpdate, function(result) {
			closeOverLay();
			bootboxAlertFocus($translate.instant("vnm.FormReceiptExpenseFromShop.update.receipt.success"), "",
					$translate.instant("vnm.lable.vnm.name"), "");
			
		});
	}
	
	//tao moi phieu thu
	$scope.createReceiptInfoFn = function(dataCreate) {
		overLoading("loading...");
		
		formReceiptExpenseShop.createReceiptInfo(dataCreate, function(result) {
			if (result != null && result != undefined && result.status === '0') {
				if(result.code != ''){
					bootboxAlertFocus($translate.instant("vnm.FormReceiptExpenseFromShop.SER_MESS."+result.code), "",
							$translate.instant("vnm.lable.vnm.name"), "");
				}else{
					bootboxAlertFocus($translate.instant("vnm.FormReceiptExpenseFromShop.create.receipt.error")+" "+result.messages, "",
							$translate.instant("vnm.lable.vnm.name"), "");
				}
				
				$scope.isShowPnlButtonAction = false;
				$scope.isShowPnlButtonAcceptCreate = true;
			}else{
				$scope.isShowPnlButtonAction = true;
				$scope.isShowPnlButtonAcceptCreate = false;
				bootboxAlertFocus($translate.instant("vnm.FormReceiptExpenseFromShop.create.receipt.success"), "",
						$translate.instant("vnm.lable.vnm.name"), "");
			}
			closeOverLay();
		});
	}
	$scope.isDisApproveButton = function(){
		if($scope.listSelectItemCheckBox.length >0) return true;
		return false;
	}
	
	// Button Duyet chung tu
	$scope.btnApproveReceiptClick = function() {
		bootboxConfirm($translate.instant("vnm.lable.vnm.name"), $translate.instant("vnm.FormReceiptExpenseFromShop.mess.confirm.approve.receipt"), $scope.approveReceiptInfoFn,
				$scope.callbackKO);
	}
	
	//duyet phieu thu theo danh sach
	$scope.approveReceiptInfoFn = function(){
		overLoading("loading...");
		//filter receipt id
		var listReceiptId = [];
		for(var i =0;i< $scope.listSelectItemCheckBox.length; i++){
			listReceiptId.push($scope.listSelectItemCheckBox[i].receiptId);
		}
		
		var dataCreate = {};
		dataCreate.staffId = STAFF_ID_LOGGED;
		dataCreate.listIdInput = listReceiptId;
		dataCreate.type = StringUtilNVL($scope.model.searchReceiptType);
		dataCreate.shopId = SHOP_ID_LOGGED;
		dataCreate.accountCode = StringUtilNVL($scope.model.searchTkhtType); 
		
		formReceiptExpenseShop.approveReceiptInfo(dataCreate, function(result) {
			if (result != null && result != undefined && result.status === '0') {
				if(result.code =='AMOUNT_GREATER_REZO'){
					bootboxAlertFocus($translate.instant("vnm.FormReceiptExpenseFromShop.amount.greater.of.shop"), "",
							$translate.instant("vnm.lable.vnm.name"), "");
				}else{
					bootboxAlertFocus($translate.instant("vnm.FormReceiptExpenseFromShop.approve.receipt.error")+" "+result.messages, "",
							$translate.instant("vnm.lable.vnm.name"), "");
				}
				
			}else{
				$scope.searchListReceiptFn();
				bootboxAlertFocus($translate.instant("vnm.FormReceiptExpenseFromShop.approve.receipt.success"), "",
						$translate.instant("vnm.lable.vnm.name"), "");
			}
			closeOverLay();
		});
	}
	
	$scope.callbackKO  = function(){
		
	}
	// Button huy chung tu
	$scope.btnDestroyReceiptClick = function() {
		bootboxConfirm($translate.instant("vnm.lable.vnm.name"), $translate.instant("vnm.FormReceiptExpenseFromShop.mess.confirm.destroy.receipt"), $scope.destroyReceiptInfoFn,
				$scope.callbackKO);
	}
	
	//huy phieu thu theo danh sach
	$scope.destroyReceiptInfoFn = function(){
		overLoading("loading...");
		//filter receipt id
		var listReceiptId = [];
		for(var i =0;i< $scope.listSelectItemCheckBox.length; i++){
			listReceiptId.push($scope.listSelectItemCheckBox[i].receiptId);
		}
		
		var dataCreate = {};
		dataCreate.userAction = STAFF_ID_LOGGED;
		dataCreate.staffId = STAFF_ID_LOGGED;
		dataCreate.listIdInput = listReceiptId;
		dataCreate.type = StringUtilNVL($scope.model.searchReceiptType);
		dataCreate.shopId = SHOP_ID_LOGGED;
		dataCreate.accountCode = StringUtilNVL($scope.model.searchTkhtType); 
		dataCreate.staffName = STAFF_NAME_LOGGED;
		
		formReceiptExpenseShop.destroyReceiptInfo(dataCreate, function(result) {
			if (result != null && result != undefined && result.status === '0') {
				if(result.code =='AMOUNT_GREATER_REZO'){
					bootboxAlertFocus($translate.instant("vnm.FormReceiptExpenseFromShop.amount.greater.of.shop"), "",
							$translate.instant("vnm.lable.vnm.name"), "");
				}else{
					bootboxAlertFocus($translate.instant("vnm.FormReceiptExpenseFromShop.destroy.receipt.error")+" "+result.messages, "",
							$translate.instant("vnm.lable.vnm.name"), "");
				}
				
			}else{
				$scope.searchListReceiptFn();
				bootboxAlertFocus($translate.instant("vnm.FormReceiptExpenseFromShop.destroy.receipt.success"), "",
						$translate.instant("vnm.lable.vnm.name"), "");
			}
			closeOverLay();
		});
	}

	//update phieu thu
	$scope.getReceiptNoDB = function() {
		overLoading("loading...");
		
		var searchInput = {};
		searchInput.shopId = SHOP_ID_LOGGED;
		searchInput.shopCode = SHOP_CODE_LOGGED;
		searchInput.type = StringUtilNVL($scope.model.popupReceiptType);
		searchInput.accountCode = StringUtilNVL($scope.model.popupTkhtType);
		
		formReceiptExpenseShop.getReceiptNo(searchInput, function(result) {
			closeOverLay();
			if (result != null && result != undefined && result.status === '0') {
				
			}else{
				var objectReturn = result.objectReturn;
				if(objectReturn!= null){
					if(StringUtilNVL(objectReturn.receiptNo) == ""){
						bootboxAlertFocus($translate.instant("vnm.FormReceiptExpenseFromShop.receipt.no.not.found"), "",
								$translate.instant("vnm.lable.vnm.name"), "");
						$scope.isShowPnlButtonAcceptCreate = false;
						$scope.isShowPnlButtonAction = true;
					}else{
						$scope.model.detailReceiptCode = objectReturn.receiptNo;
						$scope.model.detailCurrencyMoney = objectReturn.orgAmount;
						$scope.model.detailTotalMney = objectReturn.amount;
					}
				}
			}
			
		});
	}
	
	$scope.loadDefault = function() {
		formReceiptExpenseShop.getListAccountType(function(result) {
			createDataTableListReceiptFromShop([]);
			if (result != null && result != undefined && result.status === '0') {
				bootboxAlertFocus(result.messages, "",
						$translate.instant("vnm.lable.vnm.name"), "");
				closeOverLay();
			} else {
				$scope.lstAccountType = result;
				$scope.model.searchTkhtType = $scope.lstAccountType[0].accountCode;
				closeOverLay();
			}
			//load du getListApdomainByType

			overLoading("loading...");
			var dataInput = {};
			dataInput.type = "11";
			
			formReceiptExpenseShop.getListApdomainByType(dataInput, function(result2) {
				closeOverLay();
				$scope.ListStatusSource = result2;
				$scope.model.searchStatus = $scope.ListStatusSource[0].code;
				
				//load du lieu getListApdomainByType
				overLoading("loading...");
				var dataInput1 = {};
				dataInput1.type = "12";
				
				formReceiptExpenseShop.getListApdomainByType(dataInput1, function(result3) {
					closeOverLay();
					$scope.ListPaymentSource = result3;
					
					//ly do
					overLoading("loading...");
					var dataInput2 = {};
					dataInput2.status = "1";

					$scope.ReasonSourceType1 = [];
					$scope.ReasonSourceType2 = [];
					
					formReceiptExpenseShop.getListReasonSource(dataInput2, function(result4) {
						closeOverLay();
						
						for(var i=0; i<result4.length; i++){
							if(result4[i].type == '1' || result4[i].type == '2'
								|| result4[i].type == '18' || result4[i].type == '19'){
								$scope.ReasonSourceTotal.push(result4[i]);
							}
						}
						
						//loc danh sach 
						for(var i=0; i<$scope.ReasonSourceTotal.length; i++){
							if($scope.ReasonSourceTotal[i].type == '1' || $scope.ReasonSourceTotal[i].type == '18'){
								$scope.ReasonSourceType1.push($scope.ReasonSourceTotal[i]);
							}else{
								$scope.ReasonSourceType2.push($scope.ReasonSourceTotal[i]);
							}
						}
						
						//khoi tao laoi phieu thu
						$scope.model.searchReceiptType=='1'
						$scope.onSearchReceiptFn();
						
						//load shop
						formReceiptExpenseShop.getShopListFromRoot($localStorage.clientContext.shop.shopId, function(result5) {
							$scope.ShopSource = result5;
							$scope.model.searchShop = $scope.getShopByCode($scope.ShopSource, SHOP_CODE_LOGGED);
							//Khoi tao du lieu cho cua hang
							if($scope.model.searchShop != null && $scope.model.searchShop != undefined){
								$scope.model.searchShopCode = $scope.model.searchShop.shopCode;
								$scope.model.searchShopName = $scope.model.searchShop.shopName;
							}
							
							overLoading("loading...");
							var dataInput3 = {};
							dataInput3.shopId = $localStorage.clientContext.shop.shopId;

							$scope.ReasonSource = [];
							formReceiptExpenseShop.getListStaffSource(dataInput3, function(result6) {
								closeOverLay();
								$scope.StaffSource = result6;
								$scope.model.searchStaff = $scope.getStaffByCode($scope.StaffSource, STAFF_CODE_LOGGED);
								//Khoi tao du lieu cho cua hang
								if($scope.model.searchShop != null && $scope.model.searchShop != undefined){
									
									$scope.model.searchStaffCode = $scope.model.searchStaff.code;
									$scope.model.searchStaffName = $scope.model.searchStaff.name;
									
								}
								
							});
							
						});
						//End load shop
					});
					//End ly do
					
				});
				
			});
		});
	}
	
	var initialize = function() {
		$scope.loadDefault();		
	}

	initialize();
	function getTextReceiptType(receiptType){
		var result = "";
		if(receiptType == '1'){
			result = 'Phiếu thu';
		}else if(receiptType == '2'){
			result = 'Phiếu chi';
		}else{
			result = '';
		}
		return result;
	}
	
	function getTextStatus(statusCode){
		var result = "";
		for(var i =0; i< $scope.ListStatusSource.length; i++){
			var statusElement = $scope.ListStatusSource[i];
			if(statusElement.code == statusCode){
				result = StringUtilNVL(statusElement.name);
				break;
			}
			
		}
		return result;
	}
	
	$scope.onSelectReasonReceipt= function(){
		
		$scope.model.detailReceiptReasonName = $scope.model.detailReceiptReason.name;
		$scope.model.detailReceiptReasonId = $scope.model.detailReceiptReason.reasonId;
		
	}
	
	//set du lieu form detail theo row duoc select
	$scope.setDataDetailReceipt = function(item){
		$scope.isDisCreate = true;
		
		if(item != null && item != undefined){
			$scope.model.detailReceiptType = item.type;
			$scope.model.detailStatus = item.status;
			$scope.model.detailReceiptCode= item.receiptNo;
			$scope.model.detailDateCreate = item.createDate;
			$scope.model.detailAddress = item.address;
			$scope.model.detailPayer = item.deliverer; //nguoi nop
			$scope.model.detailComments = item.notes;
			$scope.model.detailAccount = item.accountCode;
			
			$scope.model.detailReceiptReasonId = ''; //ly do id
			
			$scope.model.detailReceiptReason = item.reasonCode;//ly do thu
			$scope.model.detailReceiptReasonName = item.reasonName;
			$scope.model.detailReceiptUnitCode = item.shopCode;		//don vi thu
			$scope.model.detailReceiptUnitName = item.shopName;		//don vi thu ten
			$scope.model.detailReceipterCode = item.staffCode;//Nguoi nop code
			$scope.model.detailReceipterName = item.staffName;//Ten nguoi nop
			$scope.model.detailCurrencyMoney = item.orgAmount; //tien nguyen te
			$scope.model.detailTotalMney = item.amount; //tong tien
			$scope.model.detailPaymentType = item.payMethod; //hinh thuc thanh toan
			$scope.model.detailExchangeRate = item.rate;//ty gia
		}
	}
	
	//clear du lieu form detail theo row duoc select
	$scope.clearDataDetailReceipt = function(){
		
		$scope.model.detailReceiptType = '';
		$scope.model.detailStatus = '';
		$scope.model.detailReceiptCode= '';
		$scope.model.detailDateCreate = '';
		$scope.model.detailAddress = '';
		$scope.model.detailPayer = '';
		$scope.model.detailComments = '';
		$scope.model.detailAccount = '';
		
		$scope.model.detailReceiptReasonId = ''; //ly do id
		
		$scope.model.detailReceiptReason = '';
		$scope.model.detailReceiptReasonName = '';
		$scope.model.detailReceiptUnitCode = '';		//don vi thu
		$scope.model.detailReceiptUnitName =  '';		//don vi thu ten
		$scope.model.detailReceipterCode =  '';//Nguoi nop code
		$scope.model.detailReceipterName = '';//Ten nguoi nop
		$scope.model.detailCurrencyMoney = ''; //tien nguyen te
		$scope.model.detailTotalMney = ''; //tong tien
		$scope.model.detailPaymentType = ''; //hinh thuc thanh toan
		$scope.model.detailExchangeRate = '';//ty gia
	}
	
	//chon loai chung tu popup
	$scope.ListReasonSourceDetail = [];
	$scope.onSelectReceiptyPopupFn = function(){
		if($scope.model.popupReceiptType=='1'){
			$scope.ListReasonSourceDetail = $scope.ReasonSourceType1;
		}else{
			$scope.ListReasonSourceDetail = $scope.ReasonSourceType2;
		}
	}
	
	$scope.printReceiptFn = function() {
		overLoading();
		var strTitle = "";
		var strTitleEN = "";
		var strStaffAmountLable = "";
		$scope.lstReport = [];
		if ($scope.rowSelected == null || $scope.rowSelected == undefined) {
			bootboxAlertFocus(($translate.instant("vnm.FormBankTransactionApprove.FSS-00069")).replace('%FIELD%', $translate
					.instant("vnm.FormBankTransactionApprove.label.button.print.transaction")), "", $translate.instant("vnm.lable.vnm.name"), "");
			closeOverLay();
			return;
		}

		var typeSelect = $scope.rowSelected.type;
		var strCollector = "";
		var strCollectorEN = "";
		
		var strPayer = "";
		var strPayerEN = "";
		
		if(typeSelect == '1'){
			strTitle = "PHIẾU THU";
			strTitleEN = "RECEIPT VOUCHER";
			strStaffAmountLable = "Thu từ (Received from):";
			//neu la phieu thu nguoi thu tien -> nguoi tra tien
			strCollector = $translate.instant("vnm.FormBankTransactionApprove.Payer");
			strCollectorEN = $translate.instant("vnm.FormBankTransactionApprove.PayerEN");
			
			strPayer = $translate.instant("vnm.FormBankTransactionApprove.Collector");
			strPayerEN = $translate.instant("vnm.FormBankTransactionApprove.CollectorEN");
			
		}else if(typeSelect == '2'){
			strTitle = "PHIẾU CHI";
			strTitleEN = "PAYMENT VOUCHER";
			strStaffAmountLable = "Người nhận tiền (Name of receiver ): ";
			
			//neu la phieu chi nguoi tra tien -> nguoi thu tien
			strCollector = $translate.instant("vnm.FormBankTransactionApprove.Collector");
			strCollectorEN = $translate.instant("vnm.FormBankTransactionApprove.CollectorEN");
			
			strPayer = $translate.instant("vnm.FormBankTransactionApprove.Payer");
			strPayerEN = $translate.instant("vnm.FormBankTransactionApprove.PayerEN");
		}
		
		var strReasonName = StringUtilNVL($scope.rowSelected.reasonName);
		
		var ReportInput = {
			"strTitle" : strTitle,
			"strTitleEN" : strTitleEN,
			"strVoucherNo" : StringUtilNVL($scope.rowSelected.receiptNo),
			"strCreateDate" : StringUtilNVL($scope.rowSelected.createDate),
			"strBankName" : StringUtilNVL($scope.rowSelected.bankName),
			"strBankNo" : StringUtilNVL($scope.rowSelected.bankAccountNo),
			"strStaffAmountLable" : strStaffAmountLable,
			"strStaffAmount" : StringUtilNVL($scope.rowSelected.deliverer),
			"strReason" : strReasonName,
			"strAmountOriginal" : formatNumber(StringUtilNVL($scope.rowSelected.amount)),
			"strAmountTotal" : formatNumber(StringUtilNVL($scope.rowSelected.amount)),
			"strAmountWord" : numberToWord($scope.rowSelected.amount),
			"strCollector" : strCollector,
			"strCollectorEN" : strCollectorEN,
			"strPayer" : strPayer,
			"strPayerEN" : strPayerEN,
			"fileTempName" : 'TemplateFormReceipExpenseFromShop',
			"fileType" : '.pdf'
		};
		
		$scope.lstReport.push(ReportInput);
		
		var receipId = $scope.rowSelected.receiptId;
		formReceiptExpenseShop.getpaymentInfo(receipId, function(result) {
			if (result.status != '1') {
			}else{
				formReceiptExpenseShop.exportFile(encodeURI(JSON.stringify($scope.lstReport)), function(result, status, header, config) {
					if (result.status == '0' && result.status != 'undefined') {
						bootboxAlertFocus($translate.instant('vnm.messages.validate.prepaid.server.' + result.messages), "", $translate.instant("vnm.lable.vnm.name"),
								"");
						closeOverLay();
					} else {
						download(new Blob([ result ]), header('MyDownloadFile') + header('FileType'), header('Content-Type'));
						closeOverLay();
					}
				});
			}
		});

	}
	
	function createDataTableListReceiptFromShop(dataItem) {
		oTableItem = $('#tableListReceipt').DataTable({
			"responsive" : true,
			"destroy" : true,
			"paginationType" : "full_numbers",
			"data" : dataItem,
			"processing" : false,
			"serverSide" : false,
			"bFilter" : true,
			"paging" : true,
			"bLengthChange" : true,
			"bPaginate" : true,
			"bSort" : true,
			"order": [],
			"info" : true,
			"select" : {
				style : 'single',
				info : false
			},
			"scrollX" : true,
			"scrollY" : "250",
			"columnDefs": [ {
		        "targets": [5], 
		        "orderable": false,
		        className: 'dt-body-center'
		     }],
			"columns" : [ {
				"mData" : "receiptNo",
				"render" : function(data, type, row) {
					x = data == null ? '' : data;
					return "<div data-toggle='tooltip' class='text-wrap width-200' title='" + x + "'>" + x + "</div>";
				}
			}, {
				"mData" : "type",
				"render" : function(data, type, row) {
					x = data == null ? '' : getTextReceiptType(data);
					return "<div data-toggle='tooltip' class='text-wrap width-75' title='" + x + "'>" + x + "</div>";
				}
			}, {
				"mData" : "staffCode",
				"render" : function(data, type, row) {
					x = data == null ? '' : data;
					return "<div data-toggle='tooltip' class='text-wrap width-100' title='" + x + "'>" + x + "</div>";
				}
			}, {
				"mData" : "createDate",
				"render" : function(data, type, row) {
					x = data == null ? '' : data;
					return "<div data-toggle='tooltip' class='text-wrap width-75' title='" + x + "'>" + x + "</div>";
				}
			}, {
				"mData" : "status",
				"render" : function(data, type, row) {
					var name = data == null ? "" : getTextStatus(data);
					return "<div data-toggle='tooltip' class='text-wrap width-75' title='" + name + "'>" + name + "</div>";
				}
			}, {
				"mData" : "receiptId",
				"render" : function(data, type, row) {
					x = data == null ? '' : data;
					return '<input type="checkbox" id="check_'+x+'" value="' + x + '"></input>';
				}
			} ],
			"fnInitComplete" : function(oSettings, json) {
            	var table = $('#tableListReceipt').DataTable();
				table.rows( 0 ).nodes().to$().addClass( 'selected' );
				var dataRowSelected = table.row( 0 ).data();
				$scope.rowSelected = dataRowSelected;
				if(dataRowSelected != undefined && dataRowSelected!= null){
					$scope.setDataDetailReceipt(dataRowSelected);
					
					if($scope.rowSelected.status =='1'){
						$scope.isDisabledBtnUpdateReceipt = false;
					}else{
						$scope.isDisabledBtnUpdateReceipt = true;
					}
					
					if($scope.rowSelected.status =='2'){
						$scope.isDisabledBtnPrint = false;
					}else{
						$scope.isDisabledBtnPrint = true;
					}
					
				}
				var checkBox = false;
				//set disabled checkbox
				table.rows().every( function () {
					var data = this.data(); 
					 //disabled check box theo status
					if(data.status !='1'){
						var id = "#check_"+data.receiptId;
						$(id).attr("disabled", true);
						checkBox = true;
					}
				});
				if(checkBox){
					$scope.model.checkAll = false;
					$("#checkAll").prop('checked',false);
					$("#checkAll").attr("disabled", true)
				}else{
					$scope.model.checkAll = false;
					$("#checkAll").prop('checked',false);
					$("#checkAll").attr("disabled", false)
				}
				
				
			},
			"createdRow": function(row, data, index) {
				
			},
			"oLanguage" : {
				"sInfo" : TOTAL_RECORD + "_TOTAL_",
				"sEmptyTable" : "<span id='emptyTableSpan'>" + DATA_TABLE_NOT_FOUND + "</span>",
				"sZeroRecords" : "<span id='emptyTableSpan'>" + DATA_TABLE_NOT_FOUND + "</span>",
				"sInfoEmpty" : "",
				"sInfoFiltered" : "",
				"sSearch" : LABEL_SEARCH,
				"sLengthMenu" : "_MENU_",
				"oPaginate" : {
					"sFirst" : FIRST_PAGE,
					"sLast" : LAST_PAGE,
					"sNext" : NEXT_PAGE,
					"sPrevious" : PREV_PAGE,
				}
			}
		});

		$('#tableListReceipt tbody').off().on('click', 'tr', function(e, dt, type, indexes) {
			$(this).removeClass('selected');
			var rowData = oTableItem.row(this).data();
			oTableItem.$('tr.selected').removeClass('selected');
			$(this).addClass('selected');
			$scope.rowSelected = rowData;
			
			if($scope.rowSelected.status =='1'){
				$scope.isDisabledBtnUpdateReceipt = false;
			}else{
				$scope.isDisabledBtnUpdateReceipt = true;
			}
			
			if($scope.rowSelected.status =='2'){
				$scope.isDisabledBtnPrint = false;
			}else{
				$scope.isDisabledBtnPrint = true;
			}
			
			$scope.setDataDetailReceipt(rowData);
		});
		
		// check box all
		$('#checkAll').off().on('click', function(){
		   var rows = oTableItem.rows({ 'search': 'applied' }).nodes();
		      $('input[type="checkbox"]', rows).prop('checked', this.checked);
		      $scope.checkAllCheckBox();
		    
		});
		
		//check box row
		$('#tableListReceipt').off().on('click', 'input[type="checkbox"]', function(e,dt,type,indexes) {
			$scope.onCheckedClick(this.value);
		});

	}
	
	//Xử lý các sự kiện checkBox
	$scope.checkAllCheckBox = function() {		 
		if ($('#checkAll:checked').length > 0) { //Khi click check all
			$scope.listSelectItemCheckBox = $scope.ListReceiptResult.slice(0, $scope.ListReceiptResult.length);		
		} else { //Khi bo click check all
			$scope.listSelectItemCheckBox = [];
		}
	}
	
	$scope.findRow = function(receiptId) {
		var row = {};
		for (var i = 0; i < $scope.ListReceiptResult.length; i++) {
			if ($scope.ListReceiptResult[i].receiptId == receiptId) {
				row = $scope.ListReceiptResult[i];
				break;
			}

		}
		return row;
	}
	
	$scope.listSelectItemCheckBox = [];
	$scope.checkListSelectItemCheckBox = function(row) {
		var check = 0;
		if ($scope.listSelectItemCheckBox.length == 0) {
			return 0;
		}
		for (var i = 0; i < $scope.listSelectItemCheckBox.length; i++) {
			if ($scope.listSelectItemCheckBox[i].receiptId == row.receiptId) {
				check = check + 1;
			}

		}
		if (check == 0)
			return 0;
		else
			return 1;
	}
	
	$scope.onCheckedClick = function(receiptId) {

		var row = $scope.findRow(receiptId);
		if ($scope.checkListSelectItemCheckBox(row) == 0) {
			$scope.listSelectItemCheckBox.push(row);

		} else {
			for (var i = 0; i < $scope.listSelectItemCheckBox.length; i++) {
				while ($scope.listSelectItemCheckBox[i].receiptId == row.receiptId) {
					$scope.listSelectItemCheckBox.splice(i, 1);
					break;
				}

			}

		}
		if ($scope.listSelectItemCheckBox.length == $scope.ListReceiptResult.length) {
			$scope.model.checkAll = true;
			$("#checkAll").prop('checked',true);
		} else {
			$scope.model.checkAll = false;
			$("#checkAll").prop('checked',false);
		}

	}
	//end xử lý các sự kiện checkbox
	
	var ChuSo = new Array($translate.instant("vnm.FormBankTransactionApprove.constants.zero"), $translate
			.instant("vnm.FormBankTransactionApprove.constants.one"), $translate.instant("vnm.FormBankTransactionApprove.constants.two"), $translate
			.instant("vnm.FormBankTransactionApprove.constants.three"), $translate.instant("vnm.FormBankTransactionApprove.constants.four"), $translate
			.instant("vnm.FormBankTransactionApprove.constants.five"), $translate.instant("vnm.FormBankTransactionApprove.constants.six"), $translate
			.instant("vnm.FormBankTransactionApprove.constants.seven"), $translate.instant("vnm.FormBankTransactionApprove.constants.eight"), $translate
			.instant("vnm.FormBankTransactionApprove.constants.nine"));
	var Tien = new Array("", $translate.instant("vnm.FormBankTransactionApprove.constants.thousand"), $translate
			.instant("vnm.FormBankTransactionApprove.constants.Million"), $translate.instant("vnm.FormBankTransactionApprove.constants.billions"), $translate
			.instant("vnm.FormBankTransactionApprove.constants.thousands.of.billions"), $translate
			.instant("vnm.FormBankTransactionApprove.constants.million.billion"));
	
	function formatNumber(num) {
		return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
	}
	
	function DocSo3ChuSo(baso) {
		var tram;
		var chuc;
		var donvi;
		var KetQua = "";
		tram = parseInt(baso / 100);
		chuc = parseInt((baso % 100) / 10);
		donvi = baso % 10;
		if (tram == 0 && chuc == 0 && donvi == 0)
			return "";
		if (tram != 0) {
			KetQua += ChuSo[tram] + $translate.instant("vnm.FormBankTransactionApprove.constants.hundred");
			if ((chuc == 0) && (donvi != 0))
				KetQua += $translate.instant("vnm.FormBankTransactionApprove.constants.linh");
		}
		if ((chuc != 0) && (chuc != 1)) {
			KetQua += ChuSo[chuc] + $translate.instant("vnm.FormBankTransactionApprove.constants.muoi");
			if ((chuc == 0) && (donvi != 0))
				KetQua = KetQua + $translate.instant("vnm.FormBankTransactionApprove.constants.linh");
		}
		if (chuc == 1)
			KetQua += $translate.instant("vnm.FormBankTransactionApprove.constants.ten");
		switch (donvi) {
		case 1:
			if ((chuc != 0) && (chuc != 1)) {
				KetQua += $translate.instant("vnm.FormBankTransactionApprove.constants.mot");
			} else {
				KetQua += ChuSo[donvi];
			}
			break;
		case 5:
			if (chuc == 0) {
				KetQua += ChuSo[donvi];
			} else {
				KetQua += $translate.instant("vnm.FormBankTransactionApprove.constants.lam");
			}
			break;
		default:
			if (donvi != 0) {
				KetQua += ChuSo[donvi];
			}
			break;
		}
		return KetQua;
	}

	function numberToWord(SoTien) {
		var lan = 0;
		var i = 0;
		var so = 0;
		var KetQua = "";
		var tmp = "";
		var ViTri = new Array();
		if (SoTien < 0)
			return $translate.instant("vnm.FormBankTransactionApprove.constants.so.tien.am");
		if (SoTien == 0)
			return $translate.instant("vnm.FormBankTransactionApprove.constants.khong.dong");
		if (SoTien > 0) {
			so = SoTien;
		} else {
			so = -SoTien;
		}
		if (SoTien > 8999999999999999) {
			// SoTien = 0;
			return $translate.instant("vnm.FormBankTransactionApprove.constants.so.qua.lon");
		}
		ViTri[5] = Math.floor(so / 1000000000000000);
		if (isNaN(ViTri[5]))
			ViTri[5] = "0";
		so = so - parseFloat(ViTri[5].toString()) * 1000000000000000;
		ViTri[4] = Math.floor(so / 1000000000000);
		if (isNaN(ViTri[4]))
			ViTri[4] = "0";
		so = so - parseFloat(ViTri[4].toString()) * 1000000000000;
		ViTri[3] = Math.floor(so / 1000000000);
		if (isNaN(ViTri[3]))
			ViTri[3] = "0";
		so = so - parseFloat(ViTri[3].toString()) * 1000000000;
		ViTri[2] = parseInt(so / 1000000);
		if (isNaN(ViTri[2]))
			ViTri[2] = "0";
		ViTri[1] = parseInt((so % 1000000) / 1000);
		if (isNaN(ViTri[1]))
			ViTri[1] = "0";
		ViTri[0] = parseInt(so % 1000);
		if (isNaN(ViTri[0]))
			ViTri[0] = "0";
		if (ViTri[5] > 0) {
			lan = 5;
		} else if (ViTri[4] > 0) {
			lan = 4;
		} else if (ViTri[3] > 0) {
			lan = 3;
		} else if (ViTri[2] > 0) {
			lan = 2;
		} else if (ViTri[1] > 0) {
			lan = 1;
		} else {
			lan = 0;
		}
		for (i = lan; i >= 0; i--) {
			tmp = DocSo3ChuSo(ViTri[i]);
			KetQua += tmp;
			if (ViTri[i] > 0)
				KetQua += Tien[i];
		}
		if (KetQua.substring(KetQua.length - 1) == ',') {
			KetQua = KetQua.substring(0, KetQua.length - 1);
		}
		KetQua = KetQua.substring(1, 2).toUpperCase() + KetQua.substring(2) + $translate.instant("vnm.FormBankTransactionApprove.constants.dong");
		return KetQua;
	}
	
	//BEGIN F9 COMBOBOX
	$scope.dialogListShopActionBack = function() {
		$scope.hideModalFunction("modalListShop");
		if ($scope.model.fShopName != undefined && $scope.model.fShopName.trim() == '') {
			angular.element(document.getElementById("fShopCode")).focus();
		}
	}
	
   $scope.updateFormShop = function (){
	    var name = $scope.nameFnOKF9;
        if(angular.isFunction($scope[name]))
           $scope[name]();
    }
   
   $("#fSearchShopCode").keyup(function(e) {
	   
		var code = (e.keyCode ? e.keyCode : e.which);
		if (code == '120') {
	        $(this).blur();
	    }

	    if (e.type == 'blur') {
	        $scope.onblurSearchShopCode();
	    }
	    
		/*var code = (e.keyCode ? e.keyCode : e.which);
		if (code == '120') {
			$("#fSearchShopCode").off('blur');
			 
			$scope.nameFnOKF9 = 'updateFormSearchShopCode';
			$scope.itemSelectedListShop = $scope.ShopSource[0];
			$scope.initSearchShop = $scope.model.searchShopCode;
			for (var i=0; i<$scope.StaffSource.length; i++) {
				if ($scope.model.searchShopCode != null && $scope.model.searchShopCode != undefined &&
						($scope.ShopSource[i].shopCode.toUpperCase().includes($scope.model.searchShopCode.trim().toUpperCase()) ||
								$scope.ShopSource[i].shopName.toUpperCase().includes($scope.model.searchShopCode.trim().toUpperCase()))) {
					$scope.itemSelectedListShop = $scope.ShopSource[i];
					break;
				}
			}
			$scope.showModalFunction("modalListShop");
			createDataTableListShop($scope.ShopSource, 'shopCode', 'shopName');
		} else if (code == '13') {
			$scope.onblurSearchShopCode();
		} else {
			if (StringUtilNVL($scope.model.searchStaffCode) == '') {
				StringUtilNVL($scope.model.searchStaffName) = '';
			}
		}*/
	});
   
	$scope.updateFormSearchShopCode = function() {
		
		$scope.model.searchShop = $scope.itemSelectedListShop;
		$scope.model.searchShopCode = $scope.itemSelectedListShop.shopCode;
		$scope.model.searchShopName = $scope.itemSelectedListShop.shopName;
		
		document.getElementById('fSearchShopCode').title = $scope.model.searchShopCode;
		document.getElementById('fSearchShopName').title = $scope.model.searchShopName;
		$scope.hideModalFunction("modalListShop");
	}
	
	$scope.onblurSearchShopCode = function() {
		$scope.lstStaff = $scope.ShopSource;
		$scope.nameFnOKF9 = 'updateFormSearchShopCode';
		
		if ($scope.model.searchShopCode != undefined && $scope.model.searchShopCode != '') {
			var isSearch = false;
			var isFirst = true;
			for (var i=0; i<$scope.lstStaff.length; i++) {
				if ($scope.lstStaff[i].shopCode.toUpperCase() == $scope.model.searchShopCode.trim().toUpperCase()) {
					$scope.itemSelectedListShop = $scope.lstStaff[i];
					$scope.updateFormShop();
					isSearch = true;
					break;
				} else if (isFirst && ($scope.lstStaff[i].shopCode.toUpperCase().includes($scope.model.searchShopCode.trim().toUpperCase()) ||
								$scope.lstStaff[i].shopName.toUpperCase().includes($scope.model.searchShopCode.trim().toUpperCase()))) {
					$scope.itemSelectedListShop = $scope.lstStaff[i];
					isFirst = false;
				}
			}
			if (!isSearch) {
				$scope.model.searchShop = null;
				$scope.model.searchShopName = '';
				$scope.initSearchShop = $scope.model.searchShopCode;
				createDataTableListShop($scope.lstStaff, 'shopCode', 'shopName');
				$scope.showModalFunction("modalListShop");
			}
		}else{
			$scope.model.searchShopName = '';
			document.getElementById('fSearchShopCode').title = '';
			document.getElementById('fSearchShopName').title = '';
			//
			$scope.itemSelectedListShop = $scope.lstStaff[0];
			$scope.model.searchShop = null;
			$scope.model.searchShopName = '';
			$scope.initSearchShop = $scope.model.searchShopCode;
			$scope.showModalFunction("modalListShop");
			createDataTableListShop($scope.lstStaff, 'shopCode', 'shopName');
		}
	}
	
	// create table danh muc shop
	function createDataTableListShop(dataItem, codeColumn, nameColumn) {
		oTableFListShop = $('#tblListShop').DataTable({
			"responsive" : true,
			"destroy" : true,
			"paginationType" : "full_numbers",
			"data" : dataItem,
			"processing" : false,
			"serverSide" : false,
			"bFilter" : true,
			"paging" : true,
			"bLengthChange" : true,
			"bPaginate" : true,
			"bSort" : true,
			"order" : [],
			"info" : true,
			"select" : {
				style : 'single',
				info : false
			},
			"scrollX" : true,
			"scrollY" : "250",
			"columns" : [ {
				"mData" : ""+codeColumn,
				"render" : function(data, type, row) {
					return "<div data-toggle='tooltip' class='text-wrap width-200' title='" + data + "'>" + data + "</div>";
				}
			}, {
				"mData" : ""+nameColumn,
				"render" : function(data, type, row) {
					return "<div data-toggle='tooltip' class='text-wrap width-200' title='" + data + "'>" + data + "</div>";
				}
			} ],
			"oLanguage" : {
				"sInfo" : TOTAL_RECORD + "_TOTAL_",
				"sEmptyTable" : "<span id='emptyTableSpan'>" + DATA_TABLE_NOT_FOUND + "</span>",
				"sInfoEmpty" : "",
				"sInfoFiltered" : "",
				"sSearch" : LABEL_SEARCH,
				"sLengthMenu" : "_MENU_",
				"oPaginate" : {
					"sFirst" : FIRST_PAGE,
					"sLast" : LAST_PAGE,
					"sNext" : NEXT_PAGE,
					"sPrevious" : PREV_PAGE,
				},
				"sZeroRecords" : "<span id='emptyTableSpan'>" + DATA_TABLE_NOT_FOUND + "</span>"
			},
			"oSearch": {"sSearch": $scope.initSearchShop},
			"createdRow" : function(row, data, rowIndex) {
				if ($scope.itemSelectedListShop != undefined && $scope.itemSelectedListShop != null) {
					if ($scope.itemSelectedListShop[codeColumn] == data[codeColumn]) {
						$(row).addClass('selected');
					}
					
				} else {
					if (rowIndex == 0 || rowIndex == '0') {
						$(row).addClass('selected');
					}
				}
			}
		});

		$('#tblListShop tbody').off().on('click', 'tr', function(e, dt, type, indexes) {
			$(this).removeClass('selected');
			var rowData = oTableFListShop.row(this).data();
			oTableFListShop.$('tr.selected').removeClass('selected');
			$(this).addClass('selected');
			$scope.itemSelectedListShop = rowData;
		});
		
	}
	
	//Begin f9 comboxbox nhân viên
	//f9 staff code
	
	$("#fSearchStaffCode").keyup(function(e) {
		
		var code = (e.keyCode ? e.keyCode : e.which);
		if (code == '120') {
	        $(this).blur();
	    }

	    if (e.type == 'blur') {
	        $scope.onblurSearchStaffCode();
	    }
	});
	
	$scope.updateFormSearchStaffCode = function() {
		$scope.model.searchStaff = $scope.itemSelectedListShop;
		$scope.model.searchStaffCode = $scope.itemSelectedListShop.code;
		$scope.model.fShopStockId = $scope.itemSelectedListShop.stockId;
		$scope.model.searchStaffName = $scope.itemSelectedListShop.name;
		
		document.getElementById('fSearchStaffCode').title = $scope.model.searchStaffCode;
		document.getElementById('fSearchStaffName').title = $scope.model.searchStaffName;
		$scope.hideModalFunction("modalListShop");
	}
	
	$scope.onblurSearchStaffCode = function() {
		$scope.lstStaff = $scope.StaffSource;
		$scope.nameFnOKF9 = 'updateFormSearchStaffCode';
		
		if ($scope.model.searchStaffCode != undefined && $scope.model.searchStaffCode != '') {
			var isSearch = false;
			var isFirst = true;
			for (var i=0; i<$scope.lstStaff.length; i++) {
				if ($scope.lstStaff[i].code.toUpperCase() == $scope.model.searchStaffCode.trim().toUpperCase()) {
					$scope.itemSelectedListShop = $scope.lstStaff[i];
					$scope.updateFormShop();
					isSearch = true;
					break;
				} else if (isFirst && ($scope.lstStaff[i].code.toUpperCase().includes($scope.model.searchStaffCode.trim().toUpperCase()) ||
								$scope.lstStaff[i].name.toUpperCase().includes($scope.model.searchStaffCode.trim().toUpperCase()))) {
					$scope.itemSelectedListShop = $scope.lstStaff[i];
					isFirst = false;
				}
			}
			if (!isSearch) {
				$scope.model.fromStaffName = '';
				$scope.initSearchShop = $scope.model.searchStaffCode;
				$scope.showModalFunction("modalListShop");
				createDataTableListShop($scope.lstStaff, 'code', 'name');
			}
		}else{
			$scope.model.searchStaff = null;
			$scope.model.searchStaffName = '';
			document.getElementById('fSearchStaffCode').title = '';
			document.getElementById('fSearchStaffName').title = '';
			//
			$scope.itemSelectedListShop = $scope.lstStaff[0];
			$scope.model.fromStaffName = '';
			$scope.initSearchShop = $scope.model.searchStaffCode;
			$scope.showModalFunction("modalListShop");
			createDataTableListShop($scope.lstStaff, 'code', 'name');
		}
	}
	//END f9 comboxbox nhân viên
	//END F9 Combobox
})