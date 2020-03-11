var NEW_WARRANTY_NO = "NewWarrantyNo";

var zIndexmodalStockDetail = 0;
var zIndexDialogModal = 0;

app_vnm.factory('fctFormNewWarrantyNo', function($http, $translate) {
	return {		
		//danh sach kho nhan
		getAllReceiveStock : function(data,callback) {
			var url = eim_url + "/epos/inventory/FormEnquerySerial/getChildsStockTree";
			$http.post(url,data).success(callback).error(function(data, status, headers, config) {
				closeOverLay();
				bootboxAlertFocus(status + " " + $translate.instant('vnm.messages.error.connection'), "", $translate.instant("vnm.lable.vnm.name"), "");
			});
		},

		getVctResourceList : function(data, callback) {
			var url = eim_url + "/epos/inventory/stockViewInfo/getVctResourceList";
			$http.post(url, data).success(callback).error(function(data, status, headers, config) {
				closeOverLay();
				bootboxAlertFocus(status + " " + $translate.instant('vnm.messages.error.connection'), "", $translate.instant("vnm.lable.vnm.name"), "");
			});
		},

		getInternalStock : function(callback) {
			var url = eim_url + "/epos/inventory/stockViewInfo/getInternalStock";
			$http.post(url).success(callback).error(function(data, status, headers, config) {
				closeOverLay();
				bootboxAlertFocus(status + " " + $translate.instant('vnm.messages.error.connection'), "", $translate.instant("vnm.lable.vnm.name"), "");
			});
		},

		getExistedStates : function(callback) {
			var url = eim_url + "/epos/inventory/stockViewInfo/getExistedStates";
			$http.post(url).success(callback).error(function(data, status, headers, config) {
				closeOverLay();
				bootboxAlertFocus(status + " " + $translate.instant('vnm.messages.error.connection'), "", $translate.instant("vnm.lable.vnm.name"), "");
			});
		},

		getExistedGoodsGroups : function(callback) {
			var url = eim_url + "/epos/inventory/stockViewInfo/getExistedGoodsGroups";
			$http.post(url).success(callback).error(function(data, status, headers, config) {
				closeOverLay();
				bootboxAlertFocus(status + " " + $translate.instant('vnm.messages.error.connection'), "", $translate.instant("vnm.lable.vnm.name"), "");
			});
		},

		getExistedGoods : function(data, callback) {
			var url = eim_url + "/epos/inventory/stockViewInfo/getExistedGoods";
			$http.post(url, data).success(callback).error(function(data, status, headers, config) {
				closeOverLay();
				bootboxAlertFocus(status + " " + $translate.instant('vnm.messages.error.connection'), "", $translate.instant("vnm.lable.vnm.name"), "");
			});
		},

		getStocksTree : function(data, callback) {
			var url = eim_url + "/epos/inventory/stockViewInfo/getStocksTree";
			$http.post(url, data).success(callback).error(function(data, status, headers, config) {
				closeOverLay();
				bootboxAlertFocus(status + " " + $translate.instant('vnm.messages.error.connection'), "", $translate.instant("vnm.lable.vnm.name"), "");
			});
		},

		getGoodsListByCondition : function(data, callback) {
			var url = eim_url + "/epos/inventory/stockViewInfo/getGoodsListByCondition";
			$http.post(url, data).success(callback).error(function(data, status, headers, config) {
				closeOverLay();
				bootboxAlertFocus(status + " " + $translate.instant('vnm.messages.error.connection'), "", $translate.instant("vnm.lable.vnm.name"), "");
			});
		},

		getGoodsQuantityByCondition : function(data, callback) {
			var url = eim_url + "/epos/inventory/stockViewInfo/getGoodsQuantityByCondition";
			$http.post(url, data).success(callback).error(function(data, status, headers, config) {
				closeOverLay();
				bootboxAlertFocus(status + " " + $translate.instant('vnm.messages.error.connection'), "", $translate.instant("vnm.lable.vnm.name"), "");
			});
		},

		getStockSerialByCondition : function(data, callback) {
			var url = eim_url + "/epos/inventory/stockViewInfo/getStockSerialByCondition";
			$http.post(url, data).success(callback).error(function(data, status, headers, config) {
				closeOverLay();
				bootboxAlertFocus(status + " " + $translate.instant('vnm.messages.error.connection'), "", $translate.instant("vnm.lable.vnm.name"), "");
			});
		},

		getStockSerialByForm : function(data, callback) {
			var url = eim_url + "/epos/inventory/stockViewInfoWarranty/getStockSerialByForm";
			$http.post(url, data).success(callback).error(function(data, status, headers, config) {
				closeOverLay();
				bootboxAlertFocus(status + " " + $translate.instant('vnm.messages.error.connection'), "", $translate.instant("vnm.lable.vnm.name"), "");
			});
		},
		
		onOkAction : function(data, callback) {
			var url = eim_url + "/epos/inventory/stockExportToCenter/pnlTransactionGoodsDetail/onAction";
			$http.post(url, data).success(callback).error(function(data, status, headers, config) {
				closeOverLay();
				bootboxAlertFocus(status + " " + $translate.instant('vnm.messages.error.connection'), "", $translate.instant("vnm.lable.vnm.name"), "");
			});
		},

		onFSaveAction : function(data, callback) {
			var url = eim_url + "/epos/inventory/formConvertToDamagedGoods/onSaveToDamagedGoods";
			$http.post(url, data).success(callback).error(function(data, status, headers, config) {
				closeOverLay();
//				bootboxAlertFocus(data, "");
				bootboxAlertFocus(data, "", $translate.instant("vnm.lable.vnm.name"), "");
			});
		},

		validTransActionCode : function(data, callback) {
			var url = eim_url + "/epos/inventory/stockExportToCenter/validTransActionCode";
			$http.post(url, data).success(callback).error(function(data, status, headers, config) {
				closeOverLay();
				bootboxAlertFocus(status + " " + $translate.instant('vnm.messages.error.connection'), "", $translate.instant("vnm.lable.vnm.name"), "");
			});
		},

		exportFile : function(data, callback) {
			var url = eim_url + "/epos/reportSearchInfomationShopAndStaff/exportFile?reportInput=" + data;
			$http.get(url, {
				responseType : 'arraybuffer'
			}).success(callback).error(function(data, status, headers, config) {
				App.unblockUI("#contentMain");
				bootboxAlertFocus(status + " " + $translate.instant('vnm.messages.error.connection'), "", $translate.instant("vnm.lable.vnm.name"), "");
			});
		},

		//get template phieu bao hanh
		getTemplateWarrantyValue : function(data, callback) {
			var url = eim_url + "/epos/inventory/stockExportToInferior/getTeamplateWarantyValue";
			$http.post(url, data).success(callback).error(function(data, status, header, config) {
				closeOverLay();
				bootboxAlertFocus(status + " " + $translate.instant('vnm.messages.error.connection'), "", $translate.instant("vnm.lable.vnm.name"), "");
			});
		},
		getShopNameByStockId : function(data, callback) {
			var url = eim_url + "/epos/getShopNameByStockId";
			$http.post(url, data).success(callback).error(function(data, status, header, config) {
				App.unblockUI("#contentMain");
				bootboxAlertFocus(status + " " + $translate.instant('vnm.messages.error.connection'), "", $translate.instant("vnm.lable.vnm.name"), "");
			});
		},
		
		getSingelSerialInStock : function(data, callback) {
			var url = eim_url + "/epos/inventory/stockViewInfo/getStockSerialInStock";
			$http.post(url, data).success(callback).error(function(data, status, headers, config) {
				closeOverLay();
				bootboxAlertFocus(status + " " + $translate.instant('vnm.messages.error.connection'), "", $translate.instant("vnm.lable.vnm.name"), "");
			});
		},

		getSerialListInStockNewWarranty : function(data, callback) {
			var url = eim_url + "/epos/inventory/getListSerialFileWarrantyNo";
			$http.post(url, data).success(callback).error(function(data, status, headers, config) {
				closeOverLay();
				bootboxAlertFocus(status + " " + $translate.instant('vnm.messages.error.connection'), "", $translate.instant("vnm.lable.vnm.name"), "");
			});
		},
		
		//ly do
		getListReasonSource: function(data, callback) {
			var url = eim_url + "/epos/getListReason";
			$http.post(url, data).success(callback).error(function(data, status, headers, config) {
				App.unblockUI("#contentMain");
				closeOverLay();
				bootboxAlertFocus(status + " " + $translate.instant('vnm.messages.error.connection'), "", $translate.instant("vnm.lable.vnm.name"), "");
			});
		},
		//danh sach nhan vien
		getListStaffSource: function(data, callback) {
			var url = eim_url + "/epos/getListStaff";
			$http.post(url, data).success(callback).error(function(data, status, headers, config) {
				App.unblockUI("#contentMain");
				closeOverLay();
				bootboxAlertFocus(status + " " + $translate.instant('vnm.messages.error.connection'), "", $translate.instant("vnm.lable.vnm.name"), "");
			});
		},
		//tim kiem danh sach cap phei bao hanh
		getListTransactionWarrantyNew: function(data, callback) {
			var url = eim_url + "/epos/inventory/formNewWarrantyNo/listWarrantyNo";
			$http.post(url, data).success(callback).error(function(data, status, headers, config) {
				App.unblockUI("#contentMain");
				closeOverLay();
				bootboxAlertFocus(status + " " + $translate.instant('vnm.messages.error.connection'), "", $translate.instant("vnm.lable.vnm.name"), "");
			});
		},
		//create new warranty no
		createNewWarrantyNo : function(data, callback) {
			var url = eim_url + "/epos/inventory/formNewWarrantyNo/createWarrantyNo";
			$http.post(url, data).success(callback).error(function(data, status, headers, config) {
				closeOverLay();
				bootboxAlertFocus(data, "");
			});
		},
		//Sinh so phieu bao hanh
		generateNewWarrantyNo : function(data, callback) {
			var url = eim_url + "/epos/inventory/formNewWarrantyNo/generateWarrantyNo";
			$http.post(url, data).success(callback).error(function(data, status, headers, config) {
				closeOverLay();
				$("#modalStockDetail").css('zIndex', zIndexmodalStockDetail);
				$("#modalAddSerial").css('zIndex', zIndexDialogModal);
				bootboxAlertFocus(status + " " + $translate.instant('vnm.messages.error.connection'), "", $translate.instant("vnm.lable.vnm.name"), "");
			});
		},
		
		//tim kiem danh so serial da ton tai
		getListWarrantyNoExits: function(data, callback) {
			var url = eim_url + "/epos/inventory/formNewWarrantyNo/listWarrantyNoExits";
			$http.post(url, data).success(callback).error(function(data, status, headers, config) {
				App.unblockUI("#contentMain");
				closeOverLay();
				bootboxAlertFocus(status + " " + $translate.instant('vnm.messages.error.connection'), "", $translate.instant("vnm.lable.vnm.name"), "");
			});
		},

	}
});

app_vnm.controller('ctrl-formNewWarrantyNo', function($scope, $rootScope, $translate, $compile, $timeout, $uibModal, $location, $window, FileUploader,
		$filter, $http, NgTableParams, $localStorage, fctFormNewWarrantyNo) {

	window.document.title = $translate.instant('vnm.form_new_warranty_no.page.title');

	$scope.model = {};
	$scope.itemGoodSelected = [];
	$scope.validationOptions = {
		debounce : 1500,
		preValidateFormElements : true,
	}

	$scope.checkRowTableIsSearch = true;
	
	$scope.model.fromDate = moment().format('DD/MM/YYYY');
	$scope.checkDisabledPrintBtn = true;
	
	$scope.ReceiveStockSource = [];
	$scope.nameFnOKF9 = "";
	
	// Lay thong tin kho nhan
	$scope.getAllReceiveStock = function() {
		var dataIn = $localStorage.clientContext.shopId;
		fctFormNewWarrantyNo.getAllReceiveStock(dataIn, function(result) {
			if (result != null && result != undefined) {
				if (result.status == '0') {
					bootboxAlertFocus(result.messages, "", $translate.instant("vnm.lable.vnm.name"), "");
				} else if (result.length > 0) {
					for(var i =0; i< result.length; i++){
						if(result[i].type == "Cửa hàng"){
							$scope.ReceiveStockSource.push(result[i]);
						}
					}
					$scope.model.toStock = $scope.ReceiveStockSource[0];
					$scope.model.toStockCode = $scope.model.toStock.code;
					$scope.model.toStockName = $scope.model.toStock.name;
				}
			}
		});
	}

	//danh sach ly do
	$scope.ReasonSource = [];
	$scope.getListReasonSourceFn = function() {
		overLoading("loading...");
		var dataInput = {};
		dataInput.status = "1";

		$scope.ReasonSource = [];
		fctFormNewWarrantyNo.getListReasonSource(dataInput, function(result) {
			closeOverLay();
			
			for(var i=0; i<result.length; i++){
				if(result[i].code == 'CMBH' || result[i].code == 'CLMH'){
					$scope.ReasonSource.push(result[i]);
				}
			}
			$scope.model.reason = $scope.ReasonSource[1];
		});
	}
	
	//set data noi cap
	$scope.FromStockSource = [];
	$scope.setDataFromStock = function() {
		var fromStock = {}; 
		fromStock.code = $localStorage.clientContext.shop.shopCode
		fromStock.id = $localStorage.clientContext.sessionStockID;
		fromStock.name = $localStorage.clientContext.shop.shopName;
		
		$scope.FromStockSource.push(fromStock);
		$scope.model.fromStock = $scope.FromStockSource[0];
	}
	
	//set nguoi cap
	$scope.FromStaffSource = [];
	$scope.setDataFromStaffSource = function() {
		var fromStock = {}; 
		fromStock.code = $localStorage.clientContext.shop.shopCode
		fromStock.id = $localStorage.clientContext.sessionStockID;
		fromStock.name = $localStorage.clientContext.shop.shopName;
		
		$scope.FromStaffSource.push(fromStock);
		$scope.model.fromStaff = $scope.FromStaffSource[0];
		$scope.model.fromStaffCode = $scope.model.fromStaff.code;
		$scope.model.fromStaffName = $scope.model.fromStaff.name;
	}
	
	//danh sach nhan vien
	$scope.StaffSource = [];
	$scope.getListStaffFn = function() {
		overLoading("loading...");
		var dataInput = {};
		dataInput.shopId = $localStorage.clientContext.shop.shopId;

		$scope.ReasonSource = [];
		fctFormNewWarrantyNo.getListStaffSource(dataInput, function(result) {
			closeOverLay();
			$scope.StaffSource = result;
			$scope.model.fromStaff = $scope.StaffSource[0];
		});
	}
	
	// su kien khi chon mat hang tren form
	$scope.onChooseGoodsForm = function() {
		$scope.model.goodsFormName = $scope.model.goodsForm.name;
		$scope.disableAddViewDetail = false;
		$scope.refreshDetailSerialForGoods();
	}

	// lam moi lai cac gia tri trong dialog serial khi chon lai mat hang
	$scope.refreshDetailSerialForGoods = function() {
		$scope.lstSerialSETCTmp = [];
		$scope.lstSerialSETC = [];
		$scope.lstTableSerialsSETC = [];
		$scope.lstTableSerialsSETCTmp = [];
		$scope.fileSuccess = []
		$scope.lstSerialSETCInStock = [];
		$scope.model.fromSerial = '';
		$scope.model.toSerial = '';
		$scope.model.quantity = '';
		$scope.model.goodsForm.lstTransactionSerial = [];
		createTableDDSerialSingleSETC($scope.lstTableSerialsSETC);
		createTableDDSerialSingleSETC2($scope.lstSerialSETC);
	}

	// load lai danh sach hang khi chon nguon hang
	$scope.onChooseResourceCodeForm = function() {
		$scope.loadLstGoodsForm();
	}

	// Lay danh sach hang hoa
	$scope.loadLstGoodsForm = function() {
		var resourceCodeForm = {
			"code" : $scope.model.resourceCodeForm.code,
			"name" : "",
			"formName":"NewWarrantyNo"
		}
		fctFormNewWarrantyNo.getExistedGoods(resourceCodeForm, function(result) {
			if (result != null && result != undefined && result.status != '0' && result.length > 0) {
				$scope.lstGoodsForm = result;
			}
		});
	}

	//set disabled cho button
	$scope.setDisabledButton = function(isDis){
		$scope.isDisabledBtnAdd = isDis;
		$scope.isDisabledBtnEdit = isDis;
		$scope.isDisabledBtnDelete = isDis;
		$scope.isDisabledViewStock = isDis;
		
		// search panel
		$scope.checkDisabledPanelSearchReason = isDis;
		$scope.checkDisabledPanelSearchToStock = isDis;
		$scope.checkDisabledPanelSearchToStaff = isDis;
		
		if(isDis == true){
			//an button chap nhan, bo qua
			$('#pnlButtonOKBeforeCreate').css('display', 'none');
			
			$('#pnlButtonOKBeforeSave').css('display', 'block');
			
			$scope.checkDisableBtnSearch = false;
		}else{
			//hien thi button chap nhan, bo qua
			$('#pnlButtonOKBeforeCreate').css('display', 'block');
			$('#pnlButtonOKBeforeSave').css('display', 'none');
			$scope.checkDisableBtnSearch = true;
		}
	}
	
	// load panel button
	$scope.onLoadPnlButton = function() {
		$scope.isDisabledBtnAdd = false;
		$scope.isDisabledBtnEdit = false;
		$scope.isDisabledBtnDelete = false;

		$('#pnlButtonAction').css('display', 'block');
		$('#pnlButtonOK').css('display', 'none');
	}

	//
	$scope.getFStockName = function() {
		$scope.model.fStockName = $scope.model.stock.name;
	}

	$scope.lstGoodsResourceForm = []; // Nguon hang tren form
	$scope.lstInternalStockForm = []; // Loai hang hoa tren form
	$scope.lstGoodsForm = [] // Danh sach hang hoa tren form
	$scope.lstStatesForm = [] // Danh sach trang thai tren form
	$scope.lstGoodGroupForm = []; //danh sach nhom mat hang form
	
	// Lay gia tri mac dinh khi load form
	$scope.listWarrantyNo = [];
	$scope.loadDefault = function() {
		$scope.disableAdd = true; // disable btn xem kho/ so luong/ trang thai
		$scope.disableAddx = true; // disable nguon hang/loai hang
		$scope.disableAddViewDetail = true; // disable btn xem chi tiet
		$scope.disableAddChooseGoods = true; // disable cbb chon hang
		$scope.model.reasonCode = $translate.instant("vnm.form_new_warranty_no.text.reason.value.code");
		$scope.model.reasonName = $translate.instant("vnm.form_new_warranty_no.text.reason.value.name");

		fctFormNewWarrantyNo.getInternalStock(function(result) {
			createTableListWarrantyNo($scope.listWarrantyNo);
			
			$scope.lstGoodForTransaction = [];
			createTableTransactionDetail($scope.lstGoodForTransaction);
			
			if (result != null && result != undefined && result.status != '0' && result.length > 0) {
				$scope.lstInternalStockForm = result;
				$scope.model.stockInternalTypeForm = $scope.lstInternalStockForm[0];

				var sessionValue = {
					"sessionResourceCode" : $localStorage.clientContext.sessionResourceCode,
					"sessionShopType" : $localStorage.clientContext.shop.shopType,
					"isForm" : "1",
				};

				$scope.isDisabledBtnEdit = true;
				$scope.isDisabledBtnDelete = true;
				$scope.onLoadPnlButton();
				$('#pnlButtonOKAfterSave').css('display', 'none');
				
				$scope.setDisabledButton(true);
				
				fctFormNewWarrantyNo.getVctResourceList(sessionValue, function(result) {
					if (result != null && result != undefined && result.status != '0' && result.length > 0) {
						$scope.lstGoodsResourceForm = result;
						$scope.model.resourceCodeForm = $scope.lstGoodsResourceForm[0];
						$scope.loadLstGoodsForm();

						fctFormNewWarrantyNo.getExistedStates(function(result) {
							if (result != null && result != undefined && result.status != '0' && result.length > 0) {
								$scope.lstStatesForm = result;
								$scope.model.statesForm = $scope.lstStatesForm[0];

							}
						});
					}
					
					fctFormNewWarrantyNo.getExistedGoodsGroups(function(resultListGoodGroup) {
						 $scope.lstGoodGroupForm = resultListGoodGroup;
							var resourceCodeFormFull = {
									"code" : "",
									"name" : "",
								}
							
								//load full danh sach mạt hang
								fctFormNewWarrantyNo.getExistedGoods(resourceCodeFormFull, function(result) {
									if (result != null && result != undefined && result.status != '0' && result.length > 0) {
										$scope.lstGoodsForm = result;
									}
								});
					 });
				});
			}
		});
	}

	$scope.checkDisabledPanelSearch = true;
	$scope.checkDisabledPanelSearchReason = true;
	$scope.checkDisabledPanelSearchToStock = true;
	$scope.checkDisabledPanelSearchToStaff = true;
	
	$scope.checkDisplayBtnSearch = true;
	//btn search on click
	$scope.btnSearchOnclick = function(){
		$scope.checkDisplayBtnSearch = false;
		$scope.checkDisabledPanelSearch = false;
		$scope.checkDisabledPanelSearchReason = false;
		$scope.checkDisabledPanelSearchToStock = false;
		$scope.checkDisabledPanelSearchToStaff = false;
		$scope.checkDisabledBtnCreateNew = true;
	}
	
	// lay noi nhan theo id
	function getStockById(stockIdInput){
		//for theo list stockId
		for(var i=0; i<$scope.ReceiveStockSource.length ;i++){
			if(stockIdInput == $scope.ReceiveStockSource[i].stockId){
				return $scope.ReceiveStockSource[i];
			}
		}
		return null;
	}
	
	// lay nguoi cap  theo id
	function getStaffNameById(staffId){
		//for theo list stockId
		for(var i=0; i<$scope.StaffSource.length ;i++){
			if(staffId == $scope.StaffSource[i].staffId){
				return $scope.StaffSource[i];
			}
		}
		return null;
	}
	
	//lay goodcode va good nam
	function getGoodCodeAndName(goodId){
		for(var i=0; i<$scope.lstGoodsForm.length;i++){
			if($scope.lstGoodsForm[i]!= null){
				if($scope.lstGoodsForm[i].goodsId == goodId){
					return $scope.lstGoodsForm[i];
				}
			}
		}
		return null;
	}
	
	//lay reason obj
	function getReasonObjectById(reasonId){
		//for theo list stockId
		for(var i=0; i<$scope.ReasonSource.length ;i++){
			if(reasonId == $scope.ReasonSource[i].reasonId){
				return $scope.ReasonSource[i];
			}
		}
		return null;
	}
	
	//set output cho table danh sach giao dich
	function setDataOutputListWarranty(listWarranty){
		for(var i=0; i<listWarranty.length; i++){
			var stockElement = getStockById(listWarranty[i].delivererStockId);
			listWarranty[i].delivererStockIdText = stockElement.name; // noi nhan
			listWarranty[i].fromStockIdText = stockElement.name; // noi cap
			
			var staffElement = getStaffNameById(listWarranty[i].fromStaffId);
			listWarranty[i].staffIdText = staffElement.name; // nguoi cap
			
			var reasonElement = getReasonObjectById(listWarranty[i].reasonId);
			listWarranty[i].reasonName = reasonElement.name;
		}
		return listWarranty;
	}
	
	//ham chap nhan tim kiem
	$scope.ReasonSource = [];
	$scope.onApproveSearchFn = function(){
		$scope.checkDisplayBtnSearch = true;
		$scope.checkDisabledPanelSearch = true;
		$scope.checkDisabledPanelSearchReason = true;
		$scope.checkDisabledPanelSearchToStock = true;
		$scope.checkDisabledPanelSearchToStaff = true;
		
		$scope.checkRowTableIsSearch = true;
		$scope.nameFnOKF9 = "";
		var dataInput = {};
		overLoading("loading...");

		dataInput.reasonId = $scope.model.reason.reasonId;
		dataInput.stockId = $localStorage.clientContext.sessionStockID;
		dataInput.delivererStockId = $scope.model.toStock.stockId; //noi nhan
		dataInput.createDatetime = $("#fromDate").val();
		dataInput.fromStaffId = $scope.model.fromStaff.staffId;//nguoi cap
		dataInput.staffName = $scope.model.toStaff; //nguoi nhan

		fctFormNewWarrantyNo.getListTransactionWarrantyNew(dataInput, function(result) {
			$scope.checkDisabledBtnCreateNew = false;
			closeOverLay();
			$scope.listWarrantyNo = setDataOutputListWarranty(result);
			createTableListWarrantyNo($scope.listWarrantyNo);
		});
		
		
	}
	
	//ham chap nhan bo qua tim kiem
	$scope.onCancelSearchFn = function(){
		$scope.checkDisplayBtnSearch = true;
		$scope.checkDisabledPanelSearch = true;
		$scope.checkDisabledPanelSearchReason = true;
		$scope.checkDisabledPanelSearchToStock = true;
		$scope.checkDisabledPanelSearchToStaff = true;
		$scope.checkDisabledBtnCreateNew = false;
	}
	
	
	//create danh sach giao dich
	var oTableDataListWarrantyNo = null;
	function createTableListWarrantyNo(dataItem) {
		oTableDataListWarrantyNo = $('#tableTransactionResult').DataTable({
			"responsive": true,
		    "destroy": true,
		    "paginationType" : "full_numbers",
		    "data": dataItem,
		    "processing" : false,
		    "serverSide" : false,
		    "bFilter": true,
		    "paging" :true,
		    "bLengthChange": true,
		    "bPaginate": true,
		    "bSort" : true,
		    "info":true,
		    "order": [[ 0, "desc" ]],
		    "select": {
		    	style: 'single',
		        info: false
		    },
		    "autoWidth" : true,
			"columns" : [ 
	              {"mData":"fromStockIdText", "render": function(data, type, row){
	            	  if((data == undefined) || (data == null)){
	            		  data = "";
		 	           }
	            	  return "<div data-toggle='tooltip' class='text-wrap width-150' title='"+ data + "'>" + data + "</div>";
	 	          }},
	              {"mData":"delivererStockIdText", "render": function(data, type, row){
	            	  if((data == undefined) || (data == null)){
	            		  data = "";
		 	           }
	            	  return "<div data-toggle='tooltip' class='text-wrap width-200' title='"+ data + "'>" + data + "</div>";
	 	          }},
	              {"mData":"staffIdText", "render": function(data, type, row){
	            	  if((data == undefined) || (data == null)){
	            		  data = "";
		 	           }
	            	  return "<div data-toggle='tooltip' class='text-wrap width-75' title='"+ data + "'>" + data + "</div>";
	 	          }},
	              {"mData":"staffName", "render": function(data, type, row){
	            	  if((data == undefined) || (data == null)){
	            		  data = "";
		 	           }
	            	  return "<div data-toggle='tooltip' class='text-wrap width-200' title='"+ data + "'>" + data + "</div>";
	 	          }},
				  {"mData":"reasonName", "render": function(data, type, row){
					  if((data == undefined) || (data == null)){
	            		  data = "";
		 	           }
					  return "<div data-toggle='tooltip' class='text-wrap width-100' title='"+ data + "'>" + data + "</div>";
	 	          }},
				  {"mData":"createDatetime", "render": function(data, type, row){
					  if((data == undefined) || (data == null)){
	            		  data = "";
		 	           }
					  return "<div data-toggle='tooltip' class='text-wrap width-100' title='"+ data + "'>" + data + "</div>";
	 	          }}
	            ],
	            "createdRow": function (row, data, rowIndex) {
            		
	            },
	            "fnInitComplete" : function(oSettings, json) {
	            	var table = $('#tableTransactionResult').DataTable();
					table.rows( 0 ).nodes().to$().addClass( 'selected' );
					var dataRowSelected = table.row( 0 ).data();
					$scope.itemGoodSelected = dataRowSelected;
					if(dataRowSelected != undefined && dataRowSelected!= null){
						$scope.checkDisabledPrintBtn = false;
						$scope.fillTransactionDetail(dataRowSelected);
					}
				},
	            "oLanguage" : {
	            	"sInfo":TOTAL_RECORD + "_TOTAL_",
	            	"sEmptyTable":"<span id='emptyTableSpan'>"+DATA_TABLE_NOT_FOUND+"</span>",
	            	"sInfoEmpty":"",
					"sInfoFiltered":"",
					"sLengthMenu" : "_MENU_",
					"sSearch" : LABEL_SEARCH,
	            	"oPaginate": {
				        "sFirst": FIRST_PAGE,
				        "sLast": LAST_PAGE,
				        "sNext": NEXT_PAGE,
				        "sPrevious": PREV_PAGE,
				    },
					"sZeroRecords" : "<span id='emptyTableSpan'>" + DATA_TABLE_NOT_FOUND + "</span>"
	            }
		});
				
		$('#tableTransactionResult tbody').off().on( 'click', 'tr', function( e, dt, type, indexes ) {
				$scope.disableBtnDetail = true;
	            $(this).removeClass('selected');
	            var rowData = oTableDataListWarrantyNo.row( this ).data();
	            $scope.itemGoodSelected = rowData;
	            
	        	oTableDataListWarrantyNo.$('tr.selected').removeClass('selected');
	            $(this).addClass('selected');
	            $scope.fillTransactionDetail(rowData);
		 } );
	}
	
	//lay state cua danh muc hang
	function getTextState(stateId){
		for(var i=0; i<$scope.lstStatesForm.length;i++){
			if($scope.lstStatesForm[i]!= null){
				if($scope.lstStatesForm[i].stateId == stateId){
					return $scope.lstStatesForm[i].name;
				}
			}
		}
		return "";
	}
	
	//set du lieu cho bang danh mục hang
	function setDataOutTransactionDetail(listGoodsItem){
		for(var i =0; i< listGoodsItem.length; i++){
			if(listGoodsItem[i] != undefined && listGoodsItem[i] != null){
				var goodModel = getGoodCodeAndName(listGoodsItem[i].goodsId);
				if(goodModel != null){
					listGoodsItem[i].goodsCode = goodModel.goodsCode;
					listGoodsItem[i].name = goodModel.name;
					listGoodsItem[i].unitName = goodModel.unitName;
				}
				
				var stateName = getTextState(listGoodsItem[i].stateId);
				listGoodsItem[i].stateName = stateName;
				listGoodsItem[i].quantity = listGoodsItem[i].quantityEffect;
			}
		}
		return listGoodsItem;
	}

	$scope.listGoodDetail= [];
	$scope.fillTransactionDetail = function(item){
		$scope.lstGoodForTransaction = setDataOutTransactionDetail(item.lstWarrantyDetail)
		createTableTransactionDetail($scope.lstGoodForTransaction);
	}
	// khoi tao
	var initialize = function() {
//		overLoading();
		$scope.loadDefault();
		$scope.getListReasonSourceFn();
		$scope.setDataFromStock();
//		$scope.setDataFromStaffSource();
		$scope.getListStaffFn();
		$scope.getAllReceiveStock();
	}

	initialize();

	$scope.typeAction = '';
	$scope.lstGoodForTransaction = [];
	$scope.goodForTransactionSelected = {};
	// button Them
	$scope.btnAddOnclick = function() {
		$scope.typeAction = 'ADD';
		$scope.resetPanelAddGoods();
		if ($scope.lstGoodForTransaction == null || $scope.lstGoodForTransaction == undefined || $scope.lstGoodForTransaction.length <= 0) {
			$scope.disableAddx = false;
		}
		$scope.disableAddChooseGoods = false;
		if ($scope.model.goodsForm != null && $scope.model.goodsForm != undefined) {
			$scope.disableAddViewDetail = false;
		}

		if ($scope.goodForTransactionSelected != null && $scope.goodForTransactionSelected != undefined
				&& ($scope.goodForTransactionSelected.goodsId != null || $scope.goodForTransactionSelected.goodsId != undefined)) {
			$scope.resetGoodsAdd();
		}
		$('#pnlButtonAction').css('display', 'none');
		$('#pnlButtonOK').css('display', 'block');
	}

	// button Them khi chon xong serial
	$scope.btnAddOnclickClone = function() {
		$scope.typeAction = 'ADD';
		$scope.resetPanelAddGoods();
		if ($scope.lstGoodForTransaction == null || $scope.lstGoodForTransaction == undefined || $scope.lstGoodForTransaction.length <= 0) {
			$scope.disableAddx = false;
		}
		$scope.disableAddChooseGoods = false;
		if ($scope.model.goodsForm != null && $scope.model.goodsForm != undefined) {
			$scope.disableAddViewDetail = false;
		}

		$('#pnlButtonAction').css('display', 'none');
		$('#pnlButtonOK').css('display', 'block');
	}

	// Button Sua
	$scope.btnEditOnclick = function() {
		if ($scope.goodForTransactionSelected != null && $scope.goodForTransactionSelected != undefined) {
			$scope.disableAdd = false;
			$scope.disableAddChooseGoods = true;
			$scope.disableAddViewDetail = false;
			$scope.typeAction = 'EDIT';
			$('#pnlButtonAction').css('display', 'none');
			$('#pnlButtonOK').css('display', 'block');
		}
	}

	// Button Xoa
	$scope.btnDeleteOnclick = function() {
		$scope.typeAction = 'DELETE';
		bootboxConfirm($translate.instant("vnm.common.btn.delete"), $translate.instant("vnm.messages.confirm.delete"), $scope.confirmDeleteGoodsForTransOK,
				$scope.confirmDeleteGoodsForTransNOK);
	}

	// Xac nhan xoa
	$scope.confirmDeleteGoodsForTransOK = function() {
		angular.forEach($scope.lstGoodForTransaction,
				function(objectGoodsTrans, indexS) {
					if (objectGoodsTrans.goodsId == $scope.goodForTransactionSelected.goodsId
							&& objectGoodsTrans.stateId == $scope.goodForTransactionSelected.stateId) {
						$scope.lstGoodForTransaction.splice(indexS, 1);
					}
				});

		createTableTransactionDetail($scope.lstGoodForTransaction);
		if ($scope.lstGoodForTransaction == null || $scope.lstGoodForTransaction == undefined || $scope.lstGoodForTransaction.length <= 0) {
			$scope.isDisabledBtnEdit = true;
			$scope.isDisabledBtnDelete = true;
		}
	}

	// Xac nhan khong xoa
	$scope.confirmDeleteGoodsForTransNOK = function() {

	}

	// Button Chap nhan
	$scope.btnOkOnclick = function() {
		var transGood = {
			"stockId" : $localStorage.clientContext.sessionStockID,
			"goods" : $scope.model.goodsForm,
			"internalStock" : $scope.model.stockInternalTypeForm,
			"state" : $scope.model.statesForm,
			"radio" : "state",
			"typeAction" : $scope.typeAction,
			"goodsQuantity" : $scope.model.goodQuantity,
			"strFromSerialClicked" : NEW_WARRANTY_NO,
			"mblnIsFormStockImport" : false,
			"type" : "0",
			"notes" : $scope.model.goodNote,
			"mblnInputToIssue" : true,
			"lstGoodsTransaction" : $scope.lstGoodForTransaction,
			"resourceSelected" : $scope.model.resourceCodeForm,
			"goodTransSelected" : $scope.goodForTransactionSelected,
		}

		fctFormNewWarrantyNo.onOkAction(transGood, function(result) {
			if (result != null && result != undefined) {
				if (result.status == '0') {
					bootboxAlertFocus($translate.instant('vnm.form_new_warranty_no.error.form.' + result.messages), "goodsQuantity");
				} else if (result.length > 0) {
					$scope.lstGoodForTransaction = result;
					$scope.goodForTransactionSelected = $scope.lstGoodForTransaction[result.length - 1];
					createTableTransactionDetail($scope.lstGoodForTransaction);

					if ($scope.typeAction == 'ADD') {
						$scope.resetPanelAddGoods();
						$scope.resetGoodsAdd();
						$scope.isDisabledBtnEdit = false;
						$scope.isDisabledBtnDelete = false;
					} else if ($scope.typeAction == 'EDIT') {
						$scope.disableAdd = true;
						$scope.disableAddChooseGoods = true;
						$scope.disableAddx = true;
						$scope.disableAddViewDetail = true;

						$('#pnlButtonAction').css('display', 'block');
						$('#pnlButtonOK').css('display', 'none');
					}
				}
			}
		});
	}

	// reset panel button
	$scope.resetPanelAddGoods = function() {
		$scope.disableAdd = false;
		$scope.disableAddChooseGoods = false;
		$scope.disableAddx = true;
		$scope.disableAddViewDetail = true;
	}

	// reset mat hang da chon
	$scope.resetGoodsAdd = function() {
		$scope.model.goodsForm = {};
		$scope.model.goodsFormName = '';
		$scope.model.goodQuantity = '';
		$scope.model.goodNote = '';
	}

	// Button Bo qua
	$scope.btnCancelOnclick = function() {
		$scope.disableAdd = true;
		$scope.disableAddChooseGoods = true;
		$scope.disableAddx = true;
		$scope.disableAddViewDetail = true;
		if ($scope.lstGoodForTransaction != null && $scope.lstGoodForTransaction != undefined & $scope.lstGoodForTransaction.length > 0) {
			$scope.onSelectGoodsForAdd();
		}

		$('#pnlButtonAction').css('display', 'block');
		$('#pnlButtonOK').css('display', 'none');
	}

	// create table mat hang tren form
	var oTableDataTransactionDetail = null;
	
	function createTableTransactionDetail(dataItem) {
		oTableDataTransactionDetail = $('#tableTransactionDetail').DataTable({
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
			"info" : true,
			"select" : {
				style : 'single',
				info : false
			},
			"scrollX" : true,
			"columns" : [ {
				"mData" : "goodsCode",
				"render" : function(data, type, row) {
					x = data == null ? '' : data;
					return "<div data-toggle='tooltip' class='text-wrap width-100' title='" + x + "'>" + x + "</div>";
				}
			}, {
				"mData" : "name",
				"render" : function(data, type, row) {
					x = data == null ? '' : data;
					return "<div data-toggle='tooltip' class='text-wrap width-100' title='" + x + "'>" + x + "</div>";
				}
			}, {
				"mData" : "stateName",
				"render" : function(data, type, row) {
					x = data == null ? '' : data;
					return "<div data-toggle='tooltip' class='text-wrap width-100' title='" + x + "'>" + x + "</div>";
				}
			}, {
				"mData" : "unitName",
				"render" : function(data, type, row) {
					x = data == null ? '' : data;
					return "<div data-toggle='tooltip' class='text-wrap width-100' title='" + x + "'>" + x + "</div>";
				}
			}, {
				"mData" : "quantity",
				"render" : function(data, type, row) {
					x = data == null ? '' : data;
					return "<div data-toggle='tooltip' class='text-wrap width-100' title='" + x + "'>" + x + "</div>";
				}
			}, ],
			"fnInitComplete" : function(oSettings, json) {
				var table = $('#tableTransactionDetail').DataTable();
				var dataRowSelected = table.row( 0 ).data();
        		table.rows( 0 ).nodes().to$().addClass( 'selected' );
        		
        		$scope.goodForTransactionSelected = dataRowSelected;
        		if($scope.goodForTransactionSelected != null){
        			if ($scope.disableAdd && $scope.goodForTransactionSelected.goodsSelected != undefined) {
        				$scope.onSelectGoodsForAdd();
        			}
        			if($scope.checkRowTableIsSearch){
        				$scope.onSelectGoodsForSearch($scope.goodForTransactionSelected);
        			}
        		}
    			
			},
			"oLanguage" : {
				"sInfo" : TOTAL_RECORD + "_TOTAL_",
				"sEmptyTable" : "<span id='emptyTableSpan'>" + DATA_TABLE_NOT_FOUND + "</span>",
				"sInfoEmpty" : "",
				"sInfoFiltered" : "",
				"sLengthMenu" : "_MENU_",
				"sSearch" : LABEL_SEARCH,
				"oPaginate" : {
					"sFirst" : FIRST_PAGE,
					"sLast" : LAST_PAGE,
					"sNext" : NEXT_PAGE,
					"sPrevious" : PREV_PAGE,
				},
				"sZeroRecords" : "<span id='emptyTableSpan'>" + DATA_TABLE_NOT_FOUND + "</span>"
			}
		});

		$('#tableTransactionDetail tbody').off().on('click', 'tr', function(e, dt, type, indexes) {
			$(this).removeClass('selected');
			var rowData = oTableDataTransactionDetail.row(this).data();
			oTableDataTransactionDetail.$('tr.selected').removeClass('selected');
			$(this).addClass('selected');
			$scope.goodForTransactionSelected = rowData;
			if ($scope.disableAdd && $scope.goodForTransactionSelected.goodsSelected != undefined) {
				$scope.onSelectGoodsForAdd();
			}
			if($scope.checkRowTableIsSearch){
				$scope.onSelectGoodsForSearch($scope.goodForTransactionSelected);
			}
		});
	}

	// Chon mat hang va so luong trong dialog xem kho
	$scope.onSelectGoodsForAdd = function() {
		$scope.model.resourceCodeForm = $scope.goodForTransactionSelected.resourceSelected;
		$scope.model.stockInternalTypeForm = $scope.goodForTransactionSelected.internalStockSelected;
		$scope.model.goodsForm = $scope.goodForTransactionSelected.goodsSelected;
		$scope.model.goodsFormName = $scope.goodForTransactionSelected.goodsSelected.name;
		$scope.model.statesForm = $scope.goodForTransactionSelected.stateSelected;
		$scope.model.goodQuantity = $scope.goodForTransactionSelected.quantity;
		$scope.model.goodNote = $scope.goodForTransactionSelected.notes;
	}

	$scope.onSelectGoodsForSearch = function(item){
		var goodSelected = getGoodCodeAndName(item.goodsId);
		if(goodSelected != null){
			$scope.model.goodsForm = goodSelected;
			$scope.model.goodsFormName = goodSelected.name;
		}
		var stateId = item.stateId;
		var stateForm = null;
		
		for(var i=0; i<$scope.lstStatesForm.length;i++){
			if($scope.lstStatesForm[i]!= null){
				if($scope.lstStatesForm[i].stateId == stateId){
					stateForm=  $scope.lstStatesForm[i];
					break;
				}
			}
		}
		
		$scope.model.statesForm = stateForm;
		$scope.model.goodQuantity = item.quantity;
		$scope.model.goodNote = item.note;
	}
	
	//su kien bo qua
	$scope.btnCancelclick = function(){
		//mo disabled cho xem kho, them sua xoa
		$scope.setDisabledButton(true);
		$scope.disableAddx = true;
		$scope.disableAddViewDetail = true;
		$scope.resetGoodsAdd();
		$scope.resetPanelAddGoods();
		
		//check xem co phai du lieu tim kiem khong
		$scope.checkRowTableIsSearch = true;
		
		$scope.disableAddChooseGoods = true;
		$scope.model.goodsForm = "";
		$scope.model.goodQuantity = "";
		$scope.model.goodsFormName = "";
		$scope.model.goodNote = "";
		$scope.model.statesForm = $scope.lstStatesForm[0];
		$scope.disableAdd = true; 
		
		if ($scope.lstGoodForTransaction != null && $scope.lstGoodForTransaction != undefined & $scope.lstGoodForTransaction.length > 0) {
			$scope.onSelectGoodsForAdd();
		}

		$('#pnlButtonAction').css('display', 'block');
		$('#pnlButtonOK').css('display', 'none');
		$("#divContainerTableTransactionResult").removeClass("disabledDiv");
		createTableListWarrantyNo($scope.listWarrantyNo);
	}
	
	// su kien cap moi
	$scope.btnCreateNewclick = function() {
		//mo disabled cho xem kho, them sua xoa
		$scope.setDisabledButton(false);
		
		$scope.disableAddChooseGoods = true;
		$scope.model.goodsForm = "";
		$scope.model.goodQuantity = "";
		$scope.model.goodsFormName = "";
		$scope.model.goodNote = "";
		$scope.model.statesForm = $scope.lstStatesForm[0];
		$scope.disableAdd = true; 
		
		//check xem co phai du lieu tim kiem khong
		$scope.checkRowTableIsSearch = false;
		
		$scope.lstGoodForTransaction = [];
		createTableTransactionDetail($scope.lstGoodForTransaction);
		$("#divContainerTableTransactionResult").addClass("disabledDiv");
	}
	
	
	//chap nhan cap moi bao hanh
	$scope.btnAcceptCreateNewWarrantyNoFn = function() {
		if (!$scope.fValidateValueCreateNew())
			return;

		bootboxConfirm($translate.instant("vnm.common.btn.save"), $translate.instant("vnm.form_new_warranty_no.confirm.messageSave"),
				$scope.btnFSaveOnclickConfirmOK, $scope.btnFSaveOnclickConfirmNOK);
		$scope.btnCancelOnclick();

	}

	$scope.stockTransId = '';
	// Xac nhan luu du lieu
	$scope.btnFSaveOnclickConfirmOK = function() {
		overLoading();
		var mpStockTrans = {
			"stockId" : $localStorage.clientContext.sessionStockID,
			"fromStaffId":$scope.model.fromStaff.staffId,
			"delivererStockId": $scope.model.toStock.stockId,
			"internalStockId" : $scope.model.stockInternalTypeForm.code,
			"reasonId" : $scope.model.reason.reasonId,
			"staffName":$scope.model.toStaff,
			"type" : '1',
			"lstGoodsTransaction" : $scope.lstGoodForTransaction
		}

		fctFormNewWarrantyNo.createNewWarrantyNo(mpStockTrans, function(result) {
			if (result != null && result != undefined) {
				//start reset button
				$scope.disableAdd = true;
				$scope.disableAddChooseGoods = true;
				$scope.disableAddx = true;
				$scope.disableAddViewDetail = true;
				if ($scope.lstGoodForTransaction != null && $scope.lstGoodForTransaction != undefined & $scope.lstGoodForTransaction.length > 0) {
					$scope.onSelectGoodsForAdd();
				}

				$('#pnlButtonAction').css('display', 'block');
				$('#pnlButtonOK').css('display', 'none');
				$scope.isDisabledBtnEdit = true;
				$scope.isDisabledBtnDelete = true;
				$scope.onLoadPnlButton();
				$('#pnlButtonOKAfterSave').css('display', 'none');
				$scope.setDisabledButton(true);
				$("#divContainerTableTransactionResult").removeClass("disabledDiv");
				//end reset button
				
				if (result.status != '1') {
					var errorMsg = $translate.instant('vnm.form_new_warranty_no.RenewError');
					bootboxAlertFocus(errorMsg + result.messages, "", $translate.instant("vnm.lable.vnm.name"), "");
				} else {
					$scope.stockTransId = result.code;
					bootboxAlertFocus($translate.instant('vnm.form_new_warranty_no.RenewSuccess'), "", $translate.instant("vnm.lable.vnm.name"), "");
					
				}
			}
			closeOverLay();
		});
	}

	// Khong luu du lieu
	$scope.btnFSaveOnclickConfirmNOK = function() {

	}

	// Button Nhap lai
	$scope.btnFReInputOnclick = function() {
		$scope.disableAfterSave = false;
		$scope.isDisabledBtnAdd = false;
		$scope.model.receiptCode = '';
		$scope.model.stock = {};
		$scope.model.receivePerson = '';
		$scope.model.note = '';

		$scope.typeAction = '';
		$scope.lstGoodForTransaction = [];
		$scope.goodForTransactionSelected = {};
		createTableTransactionDetail($scope.lstGoodForTransaction);

		$('#pnlButtonOKAfterSave').css('display', 'none');
		$('#pnlButtonOKBeforeSave').css('display', 'block');
	}

	$scope.fValidateValueCreateNew = function() {
		if ($scope.model.reasonCode == null || $scope.model.reasonCode == undefined || $scope.model.reasonCode == '') {
			bootboxAlertFocus($translate.instant('vnm.form_new_warranty_no.error.form.inputReason'), 'fReasonCode');
			return false;
		}
		
		var fromDate = $("#fromDate").val();
		if (fromDate == null || fromDate == undefined || fromDate == '') {
			bootboxAlertFocus($translate.instant('vnm.form_new_warranty_no.error.form.formDate'), 'fReasonCode');
			return false;
		}
		
		/*if ($scope.model.toStock == null || $scope.model.toStock == undefined || $scope.model.toStock == '') {
			bootboxAlertFocus($translate.instant('vnm.form_new_warranty_no.error.form.inputReason'), 'fReasonCode');
			return false;
		}*/
		
		if($scope.lstGoodForTransaction == null ||$scope.lstGoodForTransaction == undefined|| $scope.lstGoodForTransaction.length == 0){
			bootboxAlertFocus($translate.instant('vnm.form_new_warranty_no.error.form.inputProduct'), 'fReasonCode');
			return false;
		}
		
		return true;
		
	}

	var momentObj = moment(new Date());
	
	// Button In
	$scope.btnFPrintOnclick = function() {
		App.blockUI({
			target : "#contentMain",
			boxed : true,
			message : 'loading...'
		});

		var stockId = $scope.itemGoodSelected.stockId;
		//lay shop name kho chuyen	
		fctFormNewWarrantyNo.getShopNameByStockId(stockId, function(result) {
			var shopNameFromStock = result;
			//lay shop name kho nhan
			var delivererStockId = $scope.itemGoodSelected.delivererStockId;
			fctFormNewWarrantyNo.getShopNameByStockId(delivererStockId, function(resultDeliver) {
				var resultDeliverShopName = resultDeliver;
				closeOverLay();
				App.unblockUI("#contentMain");
				if (result != null && result != undefined) {
					var date = new Date()
					var dateReport = momentObj.format('DD/MM/YYYY');

					var ReportWarranty = {
						"strShopName" : shopNameFromStock,
						"strDeliverShopName" : resultDeliverShopName,
						"strWarrantyActionCode" : $scope.itemGoodSelected.warAction,
						"dateReport" : dateReport,
						"fileTempName" : 'TemplateFormNewWarrantyNo',
						"fileType" : '.xlsx'
					};

					fctFormNewWarrantyNo.exportFile(encodeURI(JSON.stringify(ReportWarranty)), function(result, status, header, config) {
						if (result.status == '0' && result.status != 'undefined') {
							App.unblockUI("#contentMain");
							bootboxAlertFocus($translate.instant('vnm.messages.validate.prepaid.server.' + result.messages), "", $translate.instant("vnm.lable.vnm.name"), "");							
						} else {
							App.unblockUI("#contentMain");
							download(new Blob([ result ]), header('MyDownloadFile') + header('FileType'), header('Content-Type'));
						}
					});
				
				}
			});
		});

	}

	// Dialog xem kho
	var x = $localStorage.clientContext.shop.shopCode;
	var y = $localStorage.clientContext.shop.shopName;
	$scope.lstCurrentStock = [ {
		'code' : x,
		'name' : y
	}, ];
	$scope.pStocksTree = [];
	$scope.pGoodsList = []; // Danh sach mat hang trong dialog khi chon Tat ca
	$scope.pGoodsGroupsList = [];
	$scope.pStatesList = [];
	$scope.lstGoodsResource = []; // Nguon hang tren dialog
	$scope.lstInternalStock = []; // Loai hang hoa tren dialog
	$scope.lstTableGoods = []; // Danh sach mat hang hien thi len bang
	$scope.quantities = []; // Danh sach so luong hien thi len bang
	$scope.lstTableGoodsFilter = []; // Danh sach mat hang hien thi len bang

	// create table mat hang
	$scope.itemGoodSelected = {};
	function createDataTableGoods(dataItem) {
		oTableItem = $('#tableItem').DataTable({
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
			"info" : true,
			"select" : {
				style : 'single',
				info : false
			},
			"scrollX" : true,
			"scrollY" : "200",
			"columns" : [ {
				"mData" : "goodsCode",
				"render" : function(data, type, row) {
					x = data == null ? '' : data;
					return "<div data-toggle='tooltip' class='text-wrap width-100' title='" + x + "'>" + x + "</div>";
				}
			}, {
				"mData" : "name",
				"render" : function(data, type, row) {
					x = data == null ? '' : data;
					return "<div data-toggle='tooltip' class='text-wrap width-200' title='" + x + "'>" + x + "</div>";
				}
			}, {
				"mData" : "goodsGroupId",
				"render" : function(data, type, row) {
					var name = (data == null ? "" : $scope.getGoodsGroupName(data));
					return "<div data-toggle='tooltip' class='text-wrap width-200' title='" + name + "'>" + name + "</div>";
				}
			}, {
				"mData" : "unitName",
				"render" : function(data, type, row) {
					x = data == null ? '' : data;
					return "<div data-toggle='tooltip' class='text-wrap width-75' title='" + x + "'>" + x + "</div>";
				}
			}, {
				"mData" : "checkSerial",
				"render" : function(data, type, row) {
					var name = (data == null ? "" : (data == '1' ? "Có" : "Không"));
					return "<div data-toggle='tooltip' class='text-wrap width-75' title='" + name + "'>" + name + "</div>";
				}
			}, {
				"mData" : "checkWarranty",
				"render" : function(data, type, row) {
					var name = (data == null ? "" : (data == '1' ? "Có" : "Không"));
					return "<div data-toggle='tooltip' class='text-wrap width-75' title='" + name + "'>" + name + "</div>";
				}
			}, {
				"mData" : "notes",
				"render" : function(data, type, row) {
					x = data == null ? '' : data;
					return "<div data-toggle='tooltip' class='text-wrap width-200' title='" + x + "'>" + x + "</div>";
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
			}
		});

		$('#tableItem tbody').off().on('click', 'tr', function(e, dt, type, indexes) {
			$(this).removeClass('selected');
			var rowData = oTableItem.row(this).data();
			oTableItem.$('tr.selected').removeClass('selected');
			$(this).addClass('selected');
			$scope.itemGoodSelected = rowData;
			if ($scope.model.currentStock != null && $scope.model.currentStock != undefined) {
				$scope.createDataTableGoodsQuantitiesByGoodsId(rowData.goodsId);
			}
		});
	}

	// Lay ten nhom hang
	$scope.getGoodsGroupName = function(goodsGroupId) {
		var name = '';
		if ($scope.pGoodsGroupsList != null && $scope.pGoodsGroupsList != undefined && $scope.pGoodsGroupsList.length > 0) {
			for (var i = 0; i < $scope.pGoodsGroupsList.length; i++) {
				if (goodsGroupId == $scope.pGoodsGroupsList[i].goodsGroupId) {
					name = $scope.pGoodsGroupsList[i].name;
					break;
				}
			}
		}
		return name;
	}

	// create table so luong
	$scope.itemGoodQuantitySelected = {};
	$scope.disableBtnDetail = true;
	function createDataTableGoodsQuantities(dataItem) {
		oTableItemX = $('#tableQuantity').DataTable({
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
			"bSort" : false,
			"info" : true,
			"select" : {
				style : 'single',
				info : false
			},
			"scrollX" : true,
			"columns" : [ {
				"mData" : "stateName",
				"render" : function(data, type, row) {
					x = data == null ? '' : data;
					return "<div data-toggle='tooltip' class='text-wrap width-200' title='" + x + "'>" + x + "</div>";
				}
			}, {
				"mData" : "quantityIssue",
				"render" : function(data, type, row) {
					x = data == null ? '' : data;
					return "<div data-toggle='tooltip' class='text-wrap width-200' title='" + x + "'>" + x + "</div>";
				}
			}, {
				"mData" : "quantityEffect",
				"render" : function(data, type, row) {
					x = data == null ? '' : data;
					return "<div data-toggle='tooltip' class='text-wrap width-200' title='" + x + "'>" + x + "</div>";
				}
			}, {
				"mData" : "quantityRemain",
				"render" : function(data, type, row) {
					x = data == null ? '' : data;
					return "<div data-toggle='tooltip' class='text-wrap width-200' title='" + x + "'>" + x + "</div>";
				}
			}, ],
			"oLanguage" : {
				"sInfo" : TOTAL_RECORD + "_TOTAL_",
				"sEmptyTable" : "<span id='emptyTableSpan'>" + DATA_TABLE_NOT_FOUND + "</span>",
				"sInfoEmpty" : "",
				"sInfoFiltered" : "",
				"sLengthMenu" : "_MENU_",
				"sSearch" : LABEL_SEARCH,
				"oPaginate" : {
					"sFirst" : FIRST_PAGE,
					"sLast" : LAST_PAGE,
					"sNext" : NEXT_PAGE,
					"sPrevious" : PREV_PAGE,
				},
				"sZeroRecords" : "<span id='emptyTableSpan'>" + DATA_TABLE_NOT_FOUND + "</span>"
			}
		});

		$('#tableQuantity tbody').off().on(
				'click',
				'tr',
				function(e, dt, type, indexes) {
					$(this).removeClass('selected');
					var rowData = oTableItemX.row(this).data();
					oTableItemX.$('tr.selected').removeClass('selected');
					$(this).addClass('selected');
					$scope.itemGoodQuantitySelected = rowData;
					if ($scope.itemGoodSelected != null && $scope.itemGoodSelected != undefined && $scope.itemGoodSelected.checkSerial == '1'
							&& $scope.itemGoodQuantitySelected != null && $scope.itemGoodQuantitySelected != undefined
							&& $scope.itemGoodQuantitySelected.quantityEffect > 0) {
						$scope.disableBtnDetail = false;
					} else {
						$scope.disableBtnDetail = true;
					}
				});
	}

	// create table so luong
	$scope.createDataTableGoodsQuantitiesByGoodsId = function(goodsId) {
		var cond = {
			"stockId" : $localStorage.clientContext.sessionStockID,
			"goodsId" : goodsId,
			"internalStock" : $scope.model.stockInternalType.code,
			"radio" : $scope.model.stockTypeSearch,
		};

		fctFormNewWarrantyNo.getGoodsQuantityByCondition(cond, function(result) {
			if (result != null && result != undefined) {
				if (result.status == '0') {
					bootboxAlertFocus(result.messages, "", $translate.instant("vnm.lable.vnm.name"), "");
					
				} else {
					$scope.quantities = result;
					// Bang so luong ...
					createDataTableGoodsQuantities($scope.quantities);
					$scope.itemGoodQuantitySelected = $scope.quantities[0];

					if ($scope.itemGoodSelected != null && $scope.itemGoodSelected != undefined && $scope.itemGoodSelected.checkSerial == '1'
							&& $scope.itemGoodQuantitySelected != null && $scope.itemGoodQuantitySelected != undefined
							&& $scope.itemGoodQuantitySelected.quantityEffect > 0) {
						$scope.disableBtnDetail = false;
					} else {
						$scope.disableBtnDetail = true;
					}

					// Tinh tong thuc te
					var mintSumEffect = 0;
					for (var i = 0; i < result.length; i++) {
						mintSumEffect += parseInt(result[i].quantityEffect);
					}
					$scope.model.total = mintSumEffect;
				}
			}
		});
	}

	// Button xem kho
	$scope.viewStock = function() {
		overLoading();
		fctFormNewWarrantyNo.getInternalStock(function(result6) {
			if (result6 != null && result6 != undefined && result6.status != '0') {
				$scope.lstInternalStock = result6;
			} else {
				$scope.lstInternalStock = [];
			}

			var sessionValue = {
				"SessionResourceCode" : $localStorage.clientContext.sessionResourceCode,
				"SessionShopType" : $localStorage.clientContext.shop.shopType,
				"isForm" : "0",
			};
			fctFormNewWarrantyNo.getVctResourceList(sessionValue, function(result5) {
				if (result5 != null && result5 != undefined && result5.status != '0') {
					$scope.lstGoodsResource = result5;
				} else {
					$scope.lstGoodsResource = [];
				}

				fctFormNewWarrantyNo.getExistedStates(function(result) {
					if (result != null && result != undefined && result.status != '0') {
						$scope.pStatesList = result;
					} else {
						$scope.pStatesList = [];
					}

					fctFormNewWarrantyNo.getExistedGoodsGroups(function(result1) {
						if (result1 != null && result1 != undefined && result1.status != '0') {
							$scope.pGoodsGroupsList = result1;
						} else {
							$scope.pGoodsGroupsList = [];
						}

						var resourceCodeForm = {
							"code" : $scope.model.resourceCodeForm.code,
							"name" : "",
							"formName":"NewWarrantyNo"
						}
						fctFormNewWarrantyNo.getExistedGoods(resourceCodeForm, function(result2) {
							if (result2 != null && result2 != undefined && result2.status != '0') {
								$scope.pGoodsList = result2;
							} else {
								$scope.pGoodsList = [];
							}

							$scope.lstTableGoodsFilter = $scope.pGoodsList;
							var shopStaff = {
								"code" : $localStorage.clientContext.sessionStockID,
								"name" : "",
							};
							fctFormNewWarrantyNo.getStocksTree(shopStaff, function(result3) {
								if (result3 != null && result3 != undefined & result3.status != '0') {
									$scope.pStocksTree = result3;
								} else {
									$scope.pStocksTree = [];
								}

								$scope.model.stockTypeSearch = 'all';
								$scope.model.currentStock = $scope.lstCurrentStock[0];
								$scope.model.currentStockName = $scope.model.currentStock.name;

								if ($scope.lstGoodsResource != null && $scope.lstGoodsResource != undefined && $scope.lstGoodsResource.length > 0) {
									$scope.model.resourceCode = $scope.lstGoodsResource[0];
								}
								if ($scope.lstInternalStock != null && $scope.lstInternalStock != undefined && $scope.lstInternalStock.length > 0) {
									$scope.model.stockInternalType = $scope.lstInternalStock[0];
								}

								if ($scope.model.goodsForm != null && $scope.model.goodsForm != undefined && $scope.model.goodsForm.goodsId != null
										&& $scope.model.goodsForm.goodsId != undefined && $scope.model.goodsForm.goodsId != '') {
									$scope.lstTableGoods = [];
									for (i = 0; i < $scope.pGoodsList.length; i++) {
										if ($scope.pGoodsList[i].goodsId == $scope.model.goodsForm.goodsId) {
											$scope.lstTableGoods.push($scope.pGoodsList[i]);
											$scope.model.goodCode = $scope.pGoodsList[i].goodsCode;
											$scope.model.goodName = $scope.pGoodsList[i].name;
											break;
										}
									}
								} else {
									$scope.lstTableGoods = $scope.pGoodsList;
								}

								if ($scope.lstTableGoods != null && $scope.lstTableGoods != undefined && $scope.lstTableGoods.length > 0) {
									$scope.itemGoodSelected = $scope.lstTableGoods[0];
									createDataTableGoods($scope.lstTableGoods);
									$scope.createDataTableGoodsQuantitiesByGoodsId($scope.lstTableGoods[0].goodsId);
								} else {
									var lstNull = [];
									createDataTableGoods(lstNull);
									$scope.itemGoodSelected = {};
									createDataTableGoodsQuantities(lstNull);
									$scope.itemGoodQuantitySelected = {};
									$scope.disableBtnDetail = true;
								}

								if ($scope.disableAddChooseGoods && !$scope.disableAdd) {
									$scope.disableBtnInput = true;
								} else {
									$scope.disableBtnInput = false;
								}

								$scope.showModalFunction("modalStockInfo");
								closeOverLay();
							});
						});
					});
				});
			});
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

	// set Ten khi chon mat hang
	$scope.onChooseCurrentStock = function() {
		$scope.model.currentStockName = $scope.model.currentStock.name;
	}

	// su kien khi chon radio
	$scope.stockTypeChangeFn = function(val) {
		if (val == 'all') {
			$scope.lstTableGoods = $scope.lstGoodsForm;
			$scope.lstTableGoodsFilter = $scope.lstTableGoods;
			if ($scope.lstTableGoods != null && $scope.lstTableGoods != undefined && $scope.lstTableGoods.length > 0) {
				createDataTableGoods($scope.lstTableGoods);
				$scope.itemGoodSelected = $scope.lstTableGoods[0];
				$scope.createDataTableGoodsQuantitiesByGoodsId($scope.lstTableGoods[0].goodsId);
			} else {
				var lstNull = [];
				createDataTableGoods(lstNull);
				$scope.itemGoodSelected = {};
				createDataTableGoodsQuantities(lstNull);
				$scope.itemGoodQuantitySelected = {};
				$scope.disableBtnDetail = true;
			}
		} else {
			$scope.getGoodsListByCondition(val)
		}
	}

	// su kien khi cho loai hang hoa
	$scope.onChooseInternalStock = function() {
		if ($scope.model.stockTypeSearch == 'all') {
			$scope.lstTableGoods = $scope.lstGoodsForm;
			$scope.lstTableGoodsFilter = $scope.lstTableGoods;
			if ($scope.lstTableGoods != null && $scope.lstTableGoods != undefined && $scope.lstTableGoods.length > 0) {
				createDataTableGoods($scope.lstTableGoods);
				$scope.itemGoodSelected = $scope.lstTableGoods[0];
				$scope.createDataTableGoodsQuantitiesByGoodsId($scope.lstTableGoods[0].goodsId);
			} else {
				var lstNull = [];
				createDataTableGoods(lstNull);
				$scope.itemGoodSelected = {};
				createDataTableGoodsQuantities(lstNull);
				$scope.itemGoodQuantitySelected = {};
				$scope.disableBtnDetail = true;
			}
		} else {
			$scope.getGoodsListByCondition($scope.model.stockTypeSearch)
		}
	}

	// su kien khi chon nguon hang
	$scope.onChooseResourceCode = function() {
		$scope.getGoodsListByCondition($scope.model.stockTypeSearch)
	}

	// Lay danh sach hang hoa theo dieu kien
	$scope.getGoodsListByCondition = function(radio) {
		var cond = {
			"stockId" : $localStorage.clientContext.sessionStockID,
			"resourceCode" : $scope.model.resourceCode.code,
			"internalStock" : $scope.model.stockInternalType.code,
			"checkWarranty" : "true",
			"radio" : radio,
		};

		fctFormNewWarrantyNo.getGoodsListByCondition(cond, function(result) {
			if (result != null && result != undefined) {
				if (result.status == '0') {
					bootboxAlertFocus(result.messages, "", $translate.instant("vnm.lable.vnm.name"), "");
				} else if (result.length > 0) {
					$scope.lstTableGoods = result;
					$scope.lstTableGoodsFilter = $scope.lstTableGoods;
					createDataTableGoods($scope.lstTableGoods);
					$scope.itemGoodSelected = $scope.lstTableGoods[0];
					$scope.createDataTableGoodsQuantitiesByGoodsId($scope.lstTableGoods[0].goodsId);
				} else {
					var lstNull = [];
					createDataTableGoods(lstNull);
					$scope.itemGoodSelected = {};
					createDataTableGoodsQuantities(lstNull);
					$scope.itemGoodQuantitySelected = {};
					$scope.disableBtnDetail = true;
				}
			} else {
				var lstNull = [];
				createDataTableGoods(lstNull);
				$scope.itemGoodSelected = {};
				createDataTableGoodsQuantities(lstNull);
				$scope.itemGoodQuantitySelected = {};
				$scope.disableBtnDetail = true;
			}
		});
	}

	// filter theo ma MH + ten MH
	$scope.filterGoods = function() {
		if ($scope.lstTableGoodsFilter != null && $scope.lstTableGoodsFilter != undefined && $scope.lstTableGoodsFilter.length > 0) {
			var lstTemp = [];
			if ($scope.model.goodCode != null && $scope.model.goodCode != undefined && $scope.model.goodCode != '') {
				for (var i = 0; i < $scope.lstTableGoodsFilter.length; i++) {
					if ($scope.lstTableGoodsFilter[i].goodsCode.toUpperCase().indexOf($scope.model.goodCode.trim().toUpperCase()) >= 0) {
						if ($scope.model.goodName != null && $scope.model.goodName != undefined && $scope.model.goodName != '') {
							if ($scope.lstTableGoodsFilter[i].name.toUpperCase().indexOf($scope.model.goodName.trim().toUpperCase()) >= 0) {
								lstTemp.push($scope.lstTableGoodsFilter[i]);
							}
						} else {
							lstTemp.push($scope.lstTableGoodsFilter[i]);
						}
					}
				}
			} else {
				for (var i = 0; i < $scope.lstTableGoodsFilter.length; i++) {
					if ($scope.model.goodName != null && $scope.model.goodName != undefined && $scope.model.goodName != '') {
						if ($scope.lstTableGoodsFilter[i].name.toUpperCase().indexOf($scope.model.goodName.trim().toUpperCase()) >= 0) {
							lstTemp.push($scope.lstTableGoodsFilter[i]);
						}
					} else {
						lstTemp.push($scope.lstTableGoodsFilter[i]);
					}
				}
			}
		}

		if (lstTemp.length > 0) {
			createDataTableGoods(lstTemp);
			$scope.itemGoodSelected = lstTemp[0];
			$scope.createDataTableGoodsQuantitiesByGoodsId(lstTemp[0].goodsId)
		} else {
			var lstNull = [];
			createDataTableGoods(lstNull);
			$scope.itemGoodSelected = {};
			createDataTableGoodsQuantities(lstNull);
			$scope.itemGoodQuantitySelected = {};
			$scope.disableBtnDetail = true;
		}
	}

	// Button Nhap trong dialog xem kho
	$scope.btnSaveOnClick = function() {
		var isExist = false
		if ($scope.lstGoodsForm != null && $scope.lstGoodsForm != undefined && $scope.lstGoodsForm.length > 0) {
			for (var i = 0; i < $scope.lstGoodsForm.length; i++) {
				if ($scope.lstGoodsForm[i].goodsId == $scope.itemGoodSelected.goodsId) {
					isExist = true;
					break;
				}
			}
		}
		if (isExist) {
			$scope.model.goodsForm = $scope.itemGoodSelected;
			if ($scope.lstStatesForm != null && $scope.lstStatesForm != undefined && $scope.lstStatesForm.length > 0) {
				for (var i = 0; i < $scope.lstStatesForm.length; i++) {
					if ($scope.lstStatesForm[i].stateId == $scope.itemGoodQuantitySelected.stateId) {
						$scope.model.statesForm = $scope.lstStatesForm[i];
					}
				}
			}
			$scope.onChooseGoodsForm();
			$scope.btnAddOnclickClone();
		} else {
			bootboxAlertFocus($translate.instant('vnm.form_new_warranty_no.error.form.choose.right.goods'), "", $translate.instant("vnm.lable.vnm.name"), "");
			$scope.disableAdd = false;
			$scope.disableAddx = false;
			$scope.disableAddViewDetail = false;
			$scope.disableAddChooseGoods = false;
			$scope.refreshDetailSerialForGoods();

			$('#pnlButtonAction').css('display', 'none');
			$('#pnlButtonOK').css('display', 'block');
		}
		$scope.typeAction = 'ADD';
		$scope.hideModalFunction("modalStockInfo");
	}

	// //// Dialog chi tiet trong dialog xem kho
	$scope.lstTableSerials = [];
	// Button chi tiet
	$scope.btnDetailOnClick = function() {
		$scope.model.ddFromSerial = '';
		$scope.model.ddToSerial = '';
		$scope.model.ddQuantity = $scope.itemGoodQuantitySelected.quantityRemain;
		$('#divTableDDSerialSingle').css('display', 'block');
		$('#divTableDDSerialStrip').css('display', 'none');
		$scope.model.ddSerialTypeSearch = "single";
		$scope.lstTableSerials = [];
		createTableDDSerialSingle($scope.lstTableSerials)
		$scope.showModalFunction("modalSerialList");
	}

	// fill gia tri len table khi chon serial
	$scope.serialTypeChangeFn = function(item) {
		$scope.lstTableSerials = [];
		$scope.fillDataDDTableSerial($scope.lstTableSerials);
	}

	// Tao table serial
	function createTableDDSerialSingle(dataItem) {
		oTableDDSerialSingle = $('#tableDDSerialSingle').DataTable({
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
			"info" : true,
			"select" : {
				style : 'single',
				info : false
			},
			"scrollX" : true,
			"columns" : [ {
				"mData" : "toSerial",
				"render" : function(data, type, row) {
					x = data == null ? '' : data;
					return "<div data-toggle='tooltip' class='text-wrap width-200' title='" + x + "'>" + x + "</div>";
				}
			}, {
				"mData" : "warrantyNo",
				"render" : function(data, type, row) {
					x = data == null ? '' : data;
					return "<div data-toggle='tooltip' class='text-wrap width-200' title='" + x + "'>" + x + "</div>";
				}
			}, ],
			"oLanguage" : {
				"sInfo" : TOTAL_RECORD + "_TOTAL_",
				"sEmptyTable" : "<span id='emptyTableSpan'>" + DATA_TABLE_NOT_FOUND + "</span>",
				"sInfoEmpty" : "",
				"sInfoFiltered" : "",
				"sLengthMenu" : "_MENU_",
				"sSearch" : LABEL_SEARCH,
				"oPaginate" : {
					"sFirst" : FIRST_PAGE,
					"sLast" : LAST_PAGE,
					"sNext" : NEXT_PAGE,
					"sPrevious" : PREV_PAGE,
				},
				"sZeroRecords" : "<span id='emptyTableSpan'>" + DATA_TABLE_NOT_FOUND + "</span>"
			}
		});
	}

	// Tao table serial
	function createTableDDSerialStrip(dataItem) {
		oTableDDSerialStrip = $('#tableDDSerialStrip').DataTable({
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
			"info" : true,
			"select" : {
				style : 'single',
				info : false
			},
			"scrollX" : true,
			"columns" : [ {
				"mData" : "fromSerial",
				"render" : function(data, type, row) {
					x = data == null ? '' : data;
					return "<div data-toggle='tooltip' class='text-wrap width-200' title='" + x + "'>" + x + "</div>";
				}
			}, {
				"mData" : "toSerial",
				"render" : function(data, type, row) {
					x = data == null ? '' : data;
					return "<div data-toggle='tooltip' class='text-wrap width-200' title='" + x + "'>" + x + "</div>";
				}
			}, {
				"mData" : "quantity",
				"render" : function(data, type, row) {
					x = data == null ? '' : data;
					return "<div data-toggle='tooltip' class='text-wrap width-200' title='" + x + "'>" + x + "</div>";
				}
			}, ],
			"oLanguage" : {
				"sInfo" : TOTAL_RECORD + "_TOTAL_",
				"sEmptyTable" : "<span id='emptyTableSpan'>" + DATA_TABLE_NOT_FOUND + "</span>",
				"sInfoEmpty" : "",
				"sInfoFiltered" : "",
				"sLengthMenu" : "_MENU_",
				"sSearch" : LABEL_SEARCH,
				"oPaginate" : {
					"sFirst" : FIRST_PAGE,
					"sLast" : LAST_PAGE,
					"sNext" : NEXT_PAGE,
					"sPrevious" : PREV_PAGE,
				},
				"sZeroRecords" : "<span id='emptyTableSpan'>" + DATA_TABLE_NOT_FOUND + "</span>"
			}
		});
	}

	// button tim kiem serial
	$scope.onddSearchSerialClick = function() {
		if ($scope.model.ddFromSerial == null || $scope.model.ddFromSerial == undefined || $scope.model.ddFromSerial == '') {
			bootboxAlertFocus($translate.instant('vnm.form_new_warranty_no.from.serial.empty'), "", $translate.instant("vnm.lable.vnm.name"), "");
			return;
		}
		if ($scope.model.ddToSerial == null || $scope.model.ddToSerial == undefined || $scope.model.ddToSerial == '') {
			bootboxAlertFocus($translate.instant('vnm.form_new_warranty_no.to.serial.empty'), "", $translate.instant("vnm.lable.vnm.name"), "");
			return;
		}
		var serialSearch = {
			"goodsId" : $scope.itemGoodSelected.goodsId,
			"stateId" : $scope.itemGoodQuantitySelected.stateId,
			"internalStockId" : $scope.model.stockInternalType.code,
			"fromSerial" : $scope.model.ddFromSerial,
			"toSerial" : $scope.model.ddToSerial,
			"quantity" : $scope.model.ddQuantity,
			"isCheckQtyIssue" : "true",
			"stockId" : $localStorage.clientContext.sessionStockID,
			"typeSerialSearch" : $scope.model.ddSerialTypeSearch,
		}

		fctFormNewWarrantyNo.getStockSerialByCondition(serialSearch, function(result) {
			if (result != null && result != undefined) {
				if (result.status == '0') {
					bootboxAlertFocus(result.messages, "", $translate.instant("vnm.lable.vnm.name"), "");
				} else if (result.length > 0) {
					$scope.lstTableSerials = result;
					$scope.fillDataDDTableSerial($scope.lstTableSerials);
				} else {
					var lstNull = [];
					$scope.fillDataDDTableSerial(lstNull);
					bootboxAlertFocus($translate.instant('vnm.form_new_warranty_no.error.no.data'), "", $translate.instant("vnm.lable.vnm.name"), "");
				}
			} else {
				var lstNull = [];
				$scope.fillDataDDTableSerial(lstNull);
				bootboxAlertFocus($translate.instant('vnm.form_new_warranty_no.error.no.data'), "", $translate.instant("vnm.lable.vnm.name"), "");				
			}
		});
	}

	//su kien button cap nhat
	$scope.btnUpdateCreateDateSerial = function(){
		//cap nhat ngay tao serial
		$scope.lstSerialSETC = $scope.updateCreateDateListSerial($scope.lstSerialSETC, $("#createDateSerial").val());
		$scope.fillDataDDTableSerialSETC2($scope.lstSerialSETC);
	}
	
	//cap nhat ngay tao phieu bao hanh
	$scope.updateCreateDateListSerial = function(listTransactionserial, createDate){
		if(listTransactionserial != undefined || listTransactionserial!= null){
			for(var i =0; i < listTransactionserial.length; i++){
				listTransactionserial[i].createDate = createDate;
			}
		}else{
			return [];
		}
		
		return listTransactionserial;
	}
	
	// tao table serial
	$scope.fillDataDDTableSerial = function(dataItem) {
		if ($scope.model.ddSerialTypeSearch == 'single') {
			$('#divTableDDSerialSingle').css('display', 'block');
			$('#divTableDDSerialStrip').css('display', 'none');
			createTableDDSerialSingle(dataItem);
		} else {
			$('#divTableDDSerialSingle').css('display', 'none');
			$('#divTableDDSerialStrip').css('display', 'block');
			createTableDDSerialStrip(dataItem);
		}

		var quantityX = 0;
		if (dataItem != null && dataItem != undefined && dataItem.length > 0) {
			for (var i = 0; i < dataItem.length; i++) {
				var iQuantity = parseInt(dataItem[i].quantity == '' ? '0' : dataItem[i].quantity);
				quantityX += iQuantity;
			}
		}
		$scope.model.ddTotal = quantityX;
	}

	// Button chi tiet
	$scope.viewDetail = function() {
		var lstNull = [];
		$scope.lstSerialSETC = [];
		createTableDDSerialSingleSETC(lstNull);
		
		//ngay cap nhat
		$scope.model.createDateSerial = moment().format('DD/MM/YYYY');
		
		if ($scope.typeAction == 'EDIT') {
			if ($scope.itemGoodSelected.lstTransactionSerial != null && $scope.itemGoodSelected.lstTransactionSerial != undefined
					&& $scope.itemGoodSelected.lstTransactionSerial.length > 0) {
				createTableDDSerialSingleSETC2($scope.itemGoodSelected.lstTransactionSerial);
				$scope.model.showRemoveSerial = false;
				$scope.model.goodsForm.lstTransactionSerial.forEach(function(item) {
					$scope.lstSerialSETC.push(Object.assign({}, item))
				});
			} else {
				createTableDDSerialSingleSETC2(lstNull);
				$scope.model.showRemoveSerial = true;
			}
		} else if ($scope.typeAction == 'ADD') {
			if ($scope.model.goodsForm != null && $scope.model.goodsForm != undefined && $scope.model.goodsForm.lstTransactionSerial != null
					&& $scope.model.goodsForm.lstTransactionSerial != undefined && $scope.model.goodsForm.lstTransactionSerial.length > 0) {
				createTableDDSerialSingleSETC2($scope.model.goodsForm.lstTransactionSerial);
				$scope.model.showRemoveSerial = false;
				$scope.model.goodsForm.lstTransactionSerial.forEach(function(item) {
					$scope.lstSerialSETC.push(Object.assign({}, item))
				});
			} else {
				createTableDDSerialSingleSETC2(lstNull);
				$scope.model.showRemoveSerial = true;
			}
		} else {
			createTableDDSerialSingleSETC2(lstNull);
			$scope.model.showRemoveSerial = true;
		}
		$scope.model.number = $scope.model.goodQuantity;
		$scope.model.showAddSerial = true;
		$scope.showModalFunction("modalStockDetail");
	}

	$scope.lstSerialSETCTmp = [];
	$scope.lstSerialSETC = [];
	$scope.lstTableSerialsSETC = [];
	$scope.lstTableSerialsSETCTmp = [];
	$scope.fileSuccess = []
	$scope.lstSerialSETCInStock = [];

	// Upload file
	var uploaderListDetail = $scope.uploaderListDetail = new FileUploader({
		url : eim_url + '/epos/inventory/getListSerianFromFileWarranty'
	});
	// Another user-defined filter set max file size
	uploaderListDetail.filters.push({
		'name' : 'enforceMaxFileSize',
		'fn' : function(item) {
			var fileName = item.name;
			var sizeFile = item.size;
			var fileExtValue = fileName.split(".").pop();

			if (fileExtValue.toUpperCase() != "xlsx".toUpperCase() && fileExtValue.toUpperCase() != "xls".toUpperCase()) {
				var TEMPLATE_ERROR = $translate.instant('vnm.messages.validate.prepaid.client.UPDATE_PROVINCE-0009');
				bootboxAlertFocus(TEMPLATE_ERROR, "", $translate.instant("vnm.lable.vnm.name"), "");
				return false;
			}
			return true;
		}
	});

	// set data before upload for each item
	uploaderListDetail.onBeforeUploadItem = function(item) {
		overLoading();
		$scope.model.linkFile = item._file.name;

		item.headers = {
			Authorization : 'Bearer ' + $localStorage.clientContext.token
		};
		var form_data = new FormData();
		item.formData.push(form_data);
	}

	// on item upload success
	uploaderListDetail.onSuccessItem = function(fileItem, response, status, headers) {
		if (response.length > 0) {
			$scope.fileSuccess = [];
			angular.forEach(response, function(item) {
				$scope.fileSuccess.push(item);
			})
		} else {
			bootboxAlertFocus($translate.instant('vnm.dialogButtonDetail.isEmptyFile'), "", $translate.instant("vnm.lable.vnm.name"), "");
			$scope.model.linkFile = '';
			$scope.model.fromNumber = '';
			$scope.model.toNumber = '';
			$scope.model.quantity = '';
			uploaderListDetail.clearQueue();
			$scope.disabledUploadAllFile = true;
			$scope.fileSuccess = [];
			closeOverLay();
			return;
		}

		closeOverLay();
	}

	// on item upload error
	uploaderListDetail.onErrorItem = function(fileItem, response, status, headers) {
		closeOverLay();
		bootboxAlertFocus($translate.instant('vnm.dialogButtonDetail.isEmptyFile'), "", $translate.instant("vnm.lable.vnm.name"), "");		
		$scope.model.linkFile = '';
		$scope.model.fromNumber = '';
		$scope.model.toNumber = '';
		$scope.model.quantity = '';
		uploaderListDetail.clearQueue();
		$scope.disabledUploadAllFile = true;
		$scope.fileSuccess = [];
		return;
	}

	uploaderListDetail.onAfterAddingAll = function(items) {
		overLoading("Uploading...");
		if (items != null) {
			uploaderListDetail.uploadAll();
		}
	}
	
	$scope.uploadAllFile = function(uploaderIn) {
		zIndexmodalStockDetail = $("#modalStockDetail").css("z-index");
		zIndexDialogModal = $("#modalAddSerial").css("z-index");
		
		overLoading();
		bootbox.confirm({
			message : $translate.instant('vnm.FormStockImportFromPartner.messageAccept'),
			buttons : {
				confirm : {
					label : $translate.instant('vnm.dialogButtonDetail.label.buttonOk'),
					className : 'btn-success'
				},
				cancel : {
					label : $translate.instant('vnm.dialogButtonDetail.label.buttonRject'),
					className : 'btn-danger'
				}
			},
			callback : function(result) {
				if (result) {
					$("#modalStockDetail").css('zIndex', 50);
					$("#modalAddSerial").css('zIndex', 100);

					App.blockUI({
						target : "#contentMain",
						boxed : true,
						message : 'Loading...'
					});

					var serialSearch = {
						"goodsId" : $scope.model.goodsForm.goodsId,
						"stateId" : $scope.model.statesForm.stateId,
						"internalStockId" : $scope.model.stockInternalTypeForm.code,
						"stockId" : $localStorage.clientContext.sessionStockID,
						"lstTransSerial" : $scope.fileSuccess,
					}
					// check
					fctFormNewWarrantyNo.getSerialListInStockNewWarranty(serialSearch, function(result) {
						if (result == null || result == undefined || result.status == '0') {
							message = result.messages;
							App.unblockUI("#contentMain");
							bootboxConfirm($translate.instant("vnm.ExportStockToPartner.error.import.serial.title"), $translate
									.instant("vnm.ExportStockToPartner.error.import.serial.message"), $scope.btnFSaveErrorFileConfirmOK,
									$scope.btnFSaveErrorFileConfirmNOK);
						} else {
							$scope.lstTableSerialsSETCTmp = []
							//Array.prototype.push.apply($scope.lstTableSerialsSETCTmp, result.listObject);
							Array.prototype.push.apply($scope.lstTableSerialsSETCTmp, $scope.fileSuccess);
							$scope.fillDataDDTableSerialSETC($scope.lstTableSerialsSETCTmp, 'tblSerialSingle');
							$scope.hideModalFunction("modalAddSerial");
							$scope.disabledUploadAllFile = true;
							bootboxAlertFocus($translate.instant('vnm.dialogButtonDetail.success').replace('%quantity', $scope.fileSuccess.length), "", $translate.instant("vnm.lable.vnm.name"), "");							
							$scope.model.showAddSerial = false;
							closeOverLay();
						}
						$("#modalStockDetail").css('zIndex', zIndexmodalStockDetail);
						$("#modalAddSerial").css('zIndex', zIndexDialogModal);
					});

				} else {
					closeOverLay();
				}
			}
		});

	}
	
	$scope.btnFSaveErrorFileConfirmOK = function() {
		$scope.downLoadFileError(message);
		$scope.lstTableSerialsSETCTmp = []
		$scope.fillDataDDTableSerialSETC($scope.lstTableSerialsSETCTmp, 'tblSerialSingle');
	}
	$scope.btnFSaveErrorFileConfirmNOK = function() {
		$scope.hideModalFunction("modalAddSerial");
		$("#modalStockDetail").css('zIndex', zIndexmodalStockDetail);
		$("#modalAddSerial").css('zIndex', zIndexDialogModal);
		$scope.lstTableSerialsSETCTmp = []
		$scope.fillDataDDTableSerialSETC($scope.lstTableSerialsSETCTmp, 'tblSerialSingle');
		closeOverLay();
	}
	
	$scope.downLoadFileError = function(errorMessage) {
		overLoading("Downloading file error...");
		var objError = {
			'formName' : 'StockExportToCenter_',
			'message' : errorMessage,
		};
		var url = eim_url + '/epos/inventory/downLoadFileError';
		$http.post(url, objError, {
			responseType : 'arraybuffer'
		}).success(function(response, status, headers, config) {
			overLoading("Downloading file mẫu...");
			download(new Blob([ response ]), headers('FileNameDownload'), headers["content-type"]);
			closeOverLay();
		}).error(function(data) {
			bootboxAlertFocus($translate.instant('vnm.messages.validate.500'), "", $translate.instant("vnm.lable.vnm.name"), "");
			closeOverLay();
		});
		$scope.hideModalFunction("modalAddSerial");
	}
	
	$scope.addFile = function() {
		if ('' === $scope.model.linkFile || undefined == $scope.model.linkFile) {
			bootboxAlertFocus($translate.instant('vnm.dialogButtonDetail.inputFile'), "", $translate.instant("vnm.lable.vnm.name"), "");
			return;
		} else {
			if ($scope.fileSuccess.length > 0) {
				$scope.model.fromNumber = $scope.fileSuccess[0].fromSerial;
				$scope.model.toNumber = $scope.fileSuccess[$scope.fileSuccess.length - 1].fromSerial;
				$scope.model.quantity = $scope.fileSuccess.length;
				$scope.disabledUploadAllFile = false;
			} else {
				bootboxAlertFocus($translate.instant('vnm.dialogButtonDetail.isEmptyFile'), "", $translate.instant("vnm.lable.vnm.name"), "");
				return;
			}
		}

	}

	$scope.downloadFileTemplateServer = function() {
		var attachFile = {};
		attachFile.fileName = "TemplateUploadSerialNewWarrantyNo.xlsx";
		attachFile.folder = "TemplateUploadSerialNewWarrantyNo.xlsx";
		dowloadFile(attachFile);
	}
	dowloadFile = function(data) {
		overLoading("Downloading file mẫu...");
		var url = eim_url + '/epos/inventory/downLoadFileTemplate';
		$http.post(url, data, {
			responseType : 'arraybuffer'
		}).success(function(response, status, headers, config) {
			overLoading("Downloading file mẫu...");
			download(new Blob([ response ]), headers('FileNameDownload'), headers["content-type"]);
			closeOverLay();
		}).error(function(data) {
			bootboxAlertFocus($translate.instant('vnm.messages.validate.' + data[0]), "", $translate.instant("vnm.lable.vnm.name"), "");
			closeOverLay();
		});
	}

	$scope.dialogActionBack = function() {

		$scope.model.linkFile = '';
		$scope.model.fromNumber = '';
		$scope.model.toNumber = '';
		$scope.model.quantity = '';
		uploaderListDetail.clearQueue();
		closeOverLay();
		$scope.disabledUploadAllFile = true;
		$scope.fileSuccess = [];
		$scope.hideModalFunction("modalAddSerial");
	}

	// Button tim kiem
	$scope.btnSearchSerial = function() {
		if ($scope.model.fromSerial == null || $scope.model.fromSerial == undefined || $scope.model.fromSerial == '') {
			bootboxAlertFocus($translate.instant('vnm.form_new_warranty_no.from.serial.empty'), "", $translate.instant("vnm.lable.vnm.name"), "");
			return;
		}
		if ($scope.model.toSerial == null || $scope.model.toSerial == undefined || $scope.model.toSerial == '') {
			bootboxAlertFocus($translate.instant('vnm.form_new_warranty_no.to.serial.empty'), "", $translate.instant("vnm.lable.vnm.name"), "");
			return;
		}
		var serialSearch = {
			"goodsId" : $scope.model.goodsForm.goodsId,
			"stateId" : $scope.model.statesForm.stateId,
			"internalStockId" : $scope.model.stockInternalTypeForm.code,
			"fromSerial" : $scope.model.fromSerial,
			"toSerial" : $scope.model.toSerial,
			"quantity" : $scope.model.number,
			"isCheckQtyIssue" : $scope.model.goodsForm.checkQuantity,
			"stockId" : $localStorage.clientContext.sessionStockID,
			"typeSerialSearch" : NEW_WARRANTY_NO,
		}

		fctFormNewWarrantyNo.getStockSerialByForm(serialSearch, function(result) {
			$scope.lstTableSerialsSETCTmp = [];
			if (result != null && result != undefined) {
				if (result.status == '0') {
					bootboxAlertFocus(result.messages, "", $translate.instant("vnm.lable.vnm.name"), "");
				} else if (result.length > 0) {
					$scope.lstTableSerialsSETC = result;
					Array.prototype.push.apply($scope.lstTableSerialsSETCTmp, $scope.lstTableSerialsSETC);
					$scope.fillDataDDTableSerialSETC($scope.lstTableSerialsSETCTmp, 'tblSerialSingle');
					$scope.model.showAddSerial = false;
				} else {
					var lstNull = [];
					$scope.fillDataDDTableSerialSETC(lstNull, 'tblSerialSingle');
					bootboxAlertFocus($translate.instant('vnm.form_new_warranty_no.error.no.data'), "", $translate.instant("vnm.lable.vnm.name"), "");
				}
			} else {
				var lstNull = [];
				$scope.fillDataDDTableSerialSETC(lstNull, 'tblSerialSingle');
				bootboxAlertFocus($translate.instant('vnm.form_new_warranty_no.error.no.data'), "", $translate.instant("vnm.lable.vnm.name"), "");
			}
		});
	}

	$scope.searchSingelSerial = function() {
		$scope.lstTableSerialsSETCTmp = [];
		var serialSearch = {
			"goodsId" : $scope.model.goodsForm.goodsId,
			"stateId" : $scope.model.statesForm.stateId,
			"internalStockId" : $scope.model.stockInternalTypeForm.code,
			"fromSerial" : $scope.model.serial,
			"toSerial" : $scope.model.serial,
			"quantity" : $scope.model.number,
			"isCheckQtyIssue" : $scope.model.goodsForm.checkQuantity,
			"stockId" : $localStorage.clientContext.sessionStockID,
		}
		fctFormNewWarrantyNo.getSingelSerialInStock(serialSearch, function(result) {
			if (result.status == '0' && result.status != 'undefined') {
				App.unblockUI("#contentMain");
				bootboxAlertFocus(status + " " + $translate.instant('vnm.messages.error.connection'), "", $translate.instant("vnm.lable.vnm.name"), "");

			} else {
				if (result == "") {
					bootboxAlertFocus($translate.instant('vnm.messages.find.nodata'), "", $translate.instant("vnm.lable.vnm.name"), "");
				} else {
					$scope.lstTableSerialsSETC = [];
					$scope.lstTableSerialsSETC.push(result);
					Array.prototype.push.apply($scope.lstTableSerialsSETCTmp, $scope.lstTableSerialsSETC);
					$scope.fillDataDDTableSerialSETC($scope.lstTableSerialsSETCTmp, 'tblSerialSingle');
					$scope.model.showAddSerial = false;
				}

			}
		});
	}

	// button them serial
	$scope.addSerial = function() {
		//
		$scope.lstSerialSETCTmp = [];
		var table = $('#tblSerialSingle').DataTable();
		for (var i=0; i<$scope.lstTableSerialsSETCTmp.length; i++) {
			var row = table.row(i);
			var className = row.node().className;
			if (className.includes("selected")) {
				$scope.lstSerialSETCTmp.push($scope.lstTableSerialsSETCTmp[i]);
			}
		}
		
		if ($scope.lstSerialSETCTmp.length == 0 && $scope.lstTableSerialsSETCTmp.length > 0) { 
			$scope.lstSerialSETCTmp.push($scope.lstTableSerialsSETCTmp[0]);
		}
		
		for (var i = 0; i < $scope.lstSerialSETCTmp.length; i++) {
			for (var j = 0; j < $scope.lstSerialSETC.length; j++) {
				if ($scope.lstSerialSETC[j].fromSerial == $scope.lstSerialSETCTmp[i].fromSerial) {
					bootboxAlertFocus($translate.instant('vnm.FormExportToSuperior.serialExist').replace('%serial%',
							$scope.lstSerialSETCTmp[i].fromSerial), "", $translate.instant("vnm.lable.vnm.name"), "");
					return;
				}
			}
		}

		if ($scope.lstSerialSETCTmp.length == 0) {
			bootboxAlertFocus($translate.instant('vnm.FormExportToSuperior.notChoose'), "", $translate.instant("vnm.lable.vnm.name"), "");
			return;
		} else {
			for (var i = 0; i < $scope.lstSerialSETCTmp.length; i++) {
				$scope.lstSerialSETC.push($scope.lstSerialSETCTmp[i]);
				var index = $scope.lstTableSerialsSETCTmp.indexOf($scope.lstSerialSETCTmp[i]);
				$scope.lstTableSerialsSETCTmp.splice(index, 1);
			}
			$scope.lstSerialSETCTmp = [];
			
			//cap nhat ngay tao serial
			$scope.lstSerialSETC = $scope.updateCreateDateListSerial($scope.lstSerialSETC, $("#createDateSerial").val());
			
			$scope.fillDataDDTableSerialSETC($scope.lstTableSerialsSETCTmp);
			$scope.fillDataDDTableSerialSETC2($scope.lstSerialSETC);
			if ($scope.lstTableSerialsSETCTmp.length == 0) {
				$scope.model.showAddSerial = true;
			} else {
				$scope.model.showAddSerial = false;
			}
			$scope.model.showRemoveSerial = false;
		}

	}

	// Them tat ca serial
	$scope.addAllSerial = function() {
		for (var i = 0; i < $scope.lstTableSerialsSETCTmp.length; i++) {
			for (var j = 0; j < $scope.lstSerialSETC.length; j++) {
				if ($scope.lstSerialSETC[j].fromSerial == $scope.lstTableSerialsSETCTmp[i].fromSerial) {
					bootboxAlertFocus($translate.instant('vnm.FormExportToSuperior.serialExist').replace('%serial%',
							$scope.lstTableSerialsSETCTmp[i].fromSerial), "", $translate.instant("vnm.lable.vnm.name"), "");
					return;
				}
			}
		}
		
		Array.prototype.push.apply($scope.lstSerialSETC, $scope.lstTableSerialsSETCTmp);
		$scope.lstTableSerialsSETCTmp = [];
		$scope.lstSerialSETCTmp = [];
		//cap nhat ngay
		$scope.lstSerialSETC = $scope.updateCreateDateListSerial($scope.lstSerialSETC, $("#createDateSerial").val());
		
		$scope.fillDataDDTableSerialSETC($scope.lstTableSerialsSETCTmp);
		$scope.fillDataDDTableSerialSETC2($scope.lstSerialSETC);
		$scope.model.showAddSerial = true;
		$scope.model.showRemoveSerial = false;
	}

	// Xoa serial
	$scope.removeSerial = function() {
		$scope.lstSerialSETCTmp = [];
		var table = $('#tblSerialSingle2').DataTable();
		for (var i=0; i<$scope.lstSerialSETC.length; i++) {
			var row = table.row(i);
			var className = row.node().className;
			if (className.includes("selected")) {
				$scope.lstSerialSETCTmp.push($scope.lstSerialSETC[i]);
			}
		}
		
		if ($scope.lstSerialSETCTmp.length == 0 && $scope.lstSerialSETC.length > 0) {
			$scope.lstSerialSETCTmp.push($scope.lstSerialSETC[0]);
		}
		if ($scope.lstSerialSETCTmp.length == 0) {
			bootboxAlertFocus($translate.instant('vnm.FormExportToSuperior.notChoose'), "", $translate.instant("vnm.lable.vnm.name"), "");
			return;
		} else {
			for (var i = 0; i < $scope.lstSerialSETCTmp.length; i++) {
				var index = $scope.lstSerialSETC.indexOf($scope.lstSerialSETCTmp[i]);
				$scope.lstSerialSETC.splice(index, 1);

				var addxx = true;
				for (var j = 0; j < $scope.lstTableSerialsSETCTmp.length; j++) {
					if ($scope.lstSerialSETCTmp[i].fromSerial == $scope.lstTableSerialsSETCTmp[j].fromSerial) {
						addxx = false;
						break;
					}
				}
				if (addxx) {
					$scope.lstTableSerialsSETCTmp.push($scope.lstSerialSETCTmp[i]);
				}
			}
			$scope.lstSerialSETCTmp = [];
			$scope.fillDataDDTableSerialSETC($scope.lstTableSerialsSETCTmp);
			$scope.fillDataDDTableSerialSETC2($scope.lstSerialSETC);
			if ($scope.lstSerialSETC.length == 0) {
				$scope.model.showRemoveSerial = true;
			}
			$scope.model.showAddSerial = false;
		}
}

	// Xoa tat ca serial
	$scope.removeAll = function() {
		for (var i = 0; i < $scope.lstSerialSETC.length; i++) {
			var addx = true;
			for (var j = 0; j < $scope.lstTableSerialsSETCTmp.length; j++) {
				if ($scope.lstTableSerialsSETCTmp[j].fromSerial == $scope.lstSerialSETC[i].fromSerial) {
					addx = false;
					break;
				}
			}
			if (addx) {
				$scope.lstTableSerialsSETCTmp.push($scope.lstSerialSETC[i]);
			}
		}
		$scope.lstSerialSETC = [];
		$scope.fillDataDDTableSerialSETC($scope.lstTableSerialsSETCTmp);
		$scope.fillDataDDTableSerialSETC2($scope.lstSerialSETC);
		$scope.model.showRemoveSerial = true;
		$scope.model.showAddSerial = false;
	}
	$scope.btnGetOne = function() {

	}

	//check so phieu bao hanh trong hay khong
	$scope.checkNumberWarrantyNoNull = function(listSerial){
		var result = false;
		for(var i =0; i < listSerial.length; i++){
			if(StringUtilNVL(listSerial[i].warrantyNo) ==""){
				return true;
			} 
		}
		return result;
	}
	
	$scope.btnAcceptClick = function() {
		if ($scope.lstSerialSETC == null || $scope.lstSerialSETC == undefined || $scope.lstSerialSETC.length <= 0) {
			bootboxAlertFocus($translate.instant('vnm.stock_export_to_center.must.choose.serial'), "", $translate.instant("vnm.lable.vnm.name"), "");
			return;
		}
		
		// neu so phieu bao hanh trong
		if($scope.checkNumberWarrantyNoNull($scope.lstSerialSETC)){
			bootboxAlertFocus($translate.instant("vnm.form_new_warranty_no.warranty.no.required"), "", $translate.instant("vnm.lable.vnm.name"), "");
			return;
		}
		//validate so phieu bao hanh da ton tai
		var listWarrantySerial = $scope.lstSerialSETC;
		fctFormNewWarrantyNo.getListWarrantyNoExits(listWarrantySerial, function(result) {
			if(result != null && result!= undefined && result.length >0){
				//neu co so phieu bao hanh da ton tai
				var messageExist = $translate.instant("vnm.form_new_warranty_no.warranty.no.exist");
				messageExist= messageExist.replace(/###/, result);
				bootboxAlertFocus(messageExist, "", $translate.instant("vnm.lable.vnm.name"), "");
				return;
			}else{
				if ($scope.model.goodsForm != null && $scope.model.goodsForm != undefined && $scope.model.goodsForm.goodsId != '') {
					$scope.model.goodsForm.lstTransactionSerial = [];
					$scope.lstSerialSETC.forEach(function(item) {
						$scope.model.goodsForm.lstTransactionSerial.push(Object.assign({}, item))
					});
					$scope.model.mdnNumberDetail = $scope.model.goodsForm.lstTransactionSerial.length;
					$scope.model.goodQuantity = $scope.model.goodsForm.lstTransactionSerial.length;
					$scope.model.showAddSerial = true;
					$scope.model.showRemoveSerial = true;
				} else {
					$scope.model.goodsForm.lstTransactionSerial = [];
				}
				$scope.lstSerialSETC = [];
				App.unblockUI("#contentMain");
				closeOverLay();
				$scope.hideModalFunction("modalStockDetail");
			}
		});
	}

	$scope.btnBackSerial = function() {
		App.unblockUI("#contentMain");
		closeOverLay();
		
		if ($scope.lstSerialSETC != null && $scope.lstSerialSETC != undefined && $scope.model.goodsForm.lstTransactionSerial != null &&
				$scope.model.goodsForm.lstTransactionSerial != undefined && !arraysEqual($scope.lstSerialSETC, $scope.model.goodsForm.lstTransactionSerial)) {
			bootboxConfirm3($translate.instant("vnm.ExportStockToPartner.confirm.add.serial.title"), $translate
					.instant("vnm.ExportStockToPartner.confirm.add.serial.message"), $scope.btnFBackOnclickConfirmOK, $scope.btnFBackOnclickConfirmCancel,
					$scope.btnFBackOnclickConfirmNOK);
		} else {
			$scope.model.fromSerial = '';
			$scope.model.toSerial = '';
			$scope.model.serial = '';
			$scope.model.number = $scope.model.goodQuantity;
			$scope.model.lstTableSerialsSETCTmp = [];
			$scope.model.showAddSerial = false;
			$scope.model.showRemoveSerial = false;
			$scope.hideModalFunction("modalStockDetail");
		}
	}

	function arraysEqual(a1,a2) {
	    return JSON.stringify(a1)==JSON.stringify(a2);
	}
	
	$scope.btnFBackOnclickConfirmOK = function() {
		if ($scope.model.goodsForm != null && $scope.model.goodsForm != undefined && $scope.model.goodsForm.goodsId != '') {
			$scope.model.goodsForm.lstTransactionSerial = [];
			$scope.lstSerialSETC.forEach(function(item) {
				$scope.model.goodsForm.lstTransactionSerial.push(Object.assign({}, item))
			});
			$scope.model.mdnNumberDetail = $scope.model.goodsForm.lstTransactionSerial.length;
			$scope.model.goodQuantity = $scope.model.goodsForm.lstTransactionSerial.length;
			$scope.model.showAddSerial = true;
			$scope.model.showRemoveSerial = true;
		} else {
			$scope.model.goodsForm.lstTransactionSerial = [];
		}
		$scope.model.goodQuantity = $scope.model.goodsForm.lstTransactionSerial.length;
		$scope.lstSerialSETC = [];
		$scope.hideModalFunction("modalStockDetail");
	}

	$scope.btnFBackOnclickConfirmNOK = function() {
		$scope.model.fromSerial = '';
		$scope.model.toSerial = '';
		$scope.model.serial = '';
		$scope.model.number = $scope.model.goodQuantity;
		$scope.model.lstTableSerialsSETCTmp = [];
		$scope.lstSerialSETC = [];
		$scope.model.showAddSerial = true;
		$scope.model.showRemoveSerial = true;
		$scope.hideModalFunction("modalStockDetail");
	}

	$scope.btnFBackOnclickConfirmCancel = function() {

	}

	$scope.fillDataDDTableSerialSETC = function(dataItem) {
		createTableDDSerialSingleSETC(dataItem);
	}
	$scope.fillDataDDTableSerialSETC2 = function(dataItem) {
		createTableDDSerialSingleSETC2(dataItem);
	}
	$scope.showModalStockDetail = function() {
		$scope.showModalFunction("modalStockDetail");
	}

	$scope.showDialogAddFile = function() {
		$scope.model.linkFile = '';
		$scope.model.fromNumber = '';
		$scope.model.toNumber = '';
		$scope.model.quantity = '';
		uploaderListDetail.clearQueue();
		closeOverLay();
		$scope.disabledUploadAllFile = true;
		$scope.fileSuccess = [];
		$scope.showModalFunction("modalAddSerial");
	}

	$scope.btnAdjustOnclick = function(item) {
		$scope.selectedShipment = item;

	}

	$scope.viewStockSETC = function() {
		$scope.showModalFunction("modalStockInfo");
	}

	$scope.viewStockSETCDetail = function() {
		$scope.lstSerialSETCTmp = [];
		$scope.lstSerialSETC = [];
		$scope.lstTableSerialsSETC = [];
		$scope.lstTableSerialsSETCTmp = [];
		$scope.fileSuccess = []
		$scope.lstSerialSETCInStock = [];
		$scope.fillDataDDTableSerialSETC($scope.lstTableSerialsSETCTmp);
		$scope.fillDataDDTableSerialSETC2($scope.lstSerialSETC);
		$scope.showModalFunction("modalStockDetail");
	}

	// sinh so phieu bao hanh
	$scope.btnGenerateWarrantyNo = function(){
		
		zIndexmodalStockDetail = $("#modalStockDetail").css("z-index");
		zIndexDialogModal = $("#modalAddSerial").css("z-index");
		$("#modalStockDetail").css('zIndex', 50);
		$("#modalAddSerial").css('zIndex', 100);
		
		overLoading("loading...");
		
		var listWarrantySerial = $scope.lstSerialSETC;
		fctFormNewWarrantyNo.generateNewWarrantyNo(listWarrantySerial, function(result) {
			$("#modalStockDetail").css('zIndex', zIndexmodalStockDetail);
			$("#modalAddSerial").css('zIndex', zIndexDialogModal);
			$scope.lstSerialSETC = result;
			createTableDDSerialSingleSETC2($scope.lstSerialSETC);
			closeOverLay();
		});
	}
	
	var serialX1;
	var firstChoose1 = false;
	function createTableDDSerialSingleSETC(dataItem) {
		oTableDDSerialSingleSETC = $('#tblSerialSingle').DataTable({
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
			"bSort" : false,
			"info" : true,
			"select" : {
				style : 'os',
				info : false
			},
			"autoWidth" : true,
			"paginationType" : "full_numbers",
			"scrollX" : true,
			"columns" : [ {
				"mData" : "toSerial",
				"render" : function(data, type, row) {
					x = data == null ? '' : data;
					return "<div data-toggle='tooltip' class='text-wrap width-200' title='" + x + "'>" + x + "</div>";
				}
			}, {
				"mData" : "warrantyNo",
				"render" : function(data, type, row) {
					x = data == null ? '' : data;
					return "<div data-toggle='tooltip' class='text-wrap width-200' title='" + x + "'>" + x + "</div>";
				}
			}, ],
			"oLanguage" : {
				"sInfo" : TOTAL_RECORD + "_TOTAL_",
				"sEmptyTable" : "<span id='emptyTableSpan'>" + DATA_TABLE_NOT_FOUND + "</span>",
				"sInfoEmpty" : "",
				"sInfoFiltered" : "",
				"sLengthMenu" : "_MENU_",
				"sSearch" : LABEL_SEARCH,
				"oPaginate" : {
					"sFirst" : FIRST_PAGE,
					"sLast" : LAST_PAGE,
					"sNext" : NEXT_PAGE,
					"sPrevious" : PREV_PAGE,
				},
				"sZeroRecords" : "<span id='emptyTableSpan'>" + DATA_TABLE_NOT_FOUND + "</span>"
			},
			"createdRow" : function(row, data, rowIndex) {
				if (rowIndex == 0 || rowIndex == '0') {
					$(row).addClass('selected');
					serialX1 = $(row);
					firstChoose1 = true;
				}
			}
		});

		$('#tblSerialSingle tbody').off().on('click', 'tr', function(e, dt, type, indexes) {
			var rowData = oTableDDSerialSingleSETC.row(this).data();
			if (e.ctrlKey) {
				if (firstChoose) {
					serialX0.addClass("selected");
				}
			} else {
				oTableDDSerialSingleSETC.$('tr.selected').removeClass('selected');
			}
			$(this).addClass('selected');
			firstChoose = false;
		});

	}
	
	var serialX1;
	var firstChoose1 = false;
	function createTableDDSerialSingleSETC2(dataItem) {
		oTableDDSerialSingleSETC2 = $('#tblSerialSingle2').DataTable({
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
			"bSort" : false,
			"info" : true,
			"select" : {
				style : 'os',
				info : false
			},
			"scrollX" : true,
			"autoWidth" : true,
			"paginationType" : "full_numbers",
			"columns" : [ {
				"mData" : "toSerial",
				"render" : function(data, type, row) {
					x = data == null ? '' : data;
					return "<div data-toggle='tooltip' class='text-wrap width-150' title='" + x + "'>" + x + "</div>";
				}
			}, {
				"mData" : "warrantyNo",
				"render" : function(data, type, row) {
					x = data == null ? '' : data;
//					return '<input style="width:200px;" type="text" onclick="">';
//					return "<div data-toggle='tooltip' class='text-wrap width-200' title='" + x + "'>" + x + "</div>";
					return '<input class="form-control text-wrap width-200" id="Markup" name="Markup" type="text" onBlur="changeValueWarranty(this)"  value = ' + x + '>';
				}
			}, {
				"mData" : "warrantySerial1",
				"render" : function(data, type, row) {
					x = data == null ? '' : data;
					return "<div data-toggle='tooltip' class='text-wrap width-200' title='" + x + "'>" + x + "</div>";
				}
			},  {
				"mData" : "warrantySerial2",
				"render" : function(data, type, row) {
					x = data == null ? '' : data;
					return "<div data-toggle='tooltip' class='text-wrap width-200' title='" + x + "'>" + x + "</div>";
				}
			},  {
				"mData" : "warrantySerial3",
				"render" : function(data, type, row) {
					x = data == null ? '' : data;
					return "<div data-toggle='tooltip' class='text-wrap width-200' title='" + x + "'>" + x + "</div>";
				}
			},  {
				"mData" : "warrantySerial4",
				"render" : function(data, type, row) {
					x = data == null ? '' : data;
					return "<div data-toggle='tooltip' class='text-wrap width-200' title='" + x + "'>" + x + "</div>";
				}
			},  {
				"mData" : "warrantySerial5",
				"render" : function(data, type, row) {
					x = data == null ? '' : data;
					return "<div data-toggle='tooltip' class='text-wrap width-200' title='" + x + "'>" + x + "</div>";
				}
			},  {
				"mData" : "createDate",
				"render" : function(data, type, row) {
					x = data == null ? '' : data;
					return "<div data-toggle='tooltip' class='text-wrap width-200' title='" + x + "'>" + x + "</div>";
				}
			}  
			],
			 columnDefs: [
			       { "type": "html-input", "targets": [1] }
			    ], 
			"oLanguage" : {
				"sInfo" : TOTAL_RECORD + "_TOTAL_",
				"sEmptyTable" : "<span id='emptyTableSpan'>" + DATA_TABLE_NOT_FOUND + "</span>",
				"sInfoEmpty" : "",
				"sInfoFiltered" : "",
				"sLengthMenu" : "_MENU_",
				"sSearch" : LABEL_SEARCH,
				"oPaginate" : {
					"sFirst" : FIRST_PAGE,
					"sLast" : LAST_PAGE,
					"sNext" : NEXT_PAGE,
					"sPrevious" : PREV_PAGE,
				},
				"sZeroRecords" : "<span id='emptyTableSpan'>" + DATA_TABLE_NOT_FOUND + "</span>"
			},
			"createdRow" : function(row, data, rowIndex) {
				if (rowIndex == 0 || rowIndex == '0') {
					$(row).addClass('selected');
					serialX1 = $(row);
					firstChoose1 = true;
				}
			}
		});

		$('#tblSerialSingle2 tbody').off().on('click', 'tr', function(e, dt, type, indexes) {
			var rowData = oTableDDSerialSingleSETC2.row(this).data();
			if (e.ctrlKey) {
				if (firstChoose1) {
					serialX1.addClass("selected");
				}
			} else {
				oTableDDSerialSingleSETC2.$('tr.selected').removeClass('selected');
			}
			$(this).addClass('selected');
			firstChoose1 = false;
		});
	}

	//f9 staff code
	$("#fStaffCode").keyup(function(e) {
		var code = (e.keyCode ? e.keyCode : e.which);
		
		$scope.nameFnOKF9 = 'updateFormStaff';
		if (code == '120') {
			$(this).blur();
		}
		
	    if (e.type == 'blur') {
	    	$scope.onblurStaffCode();
	    }
	    
		/*if (code == '120') {
			$scope.nameFnOKF9 = 'updateFormStaff';
			$scope.itemSelectedListShop = $scope.StaffSource[0];
			$scope.initSearchShop = $scope.model.fromStaffCode;
			for (var i=0; i<$scope.ReceiveStockSource.length; i++) {
				if ($scope.model.fromStaffCode != null && $scope.model.fromStaffCode != undefined &&
						($scope.StaffSource[i].code.toUpperCase().includes($scope.model.fromStaffCode.trim().toUpperCase()) ||
								$scope.ReceiveStockSource[i].name.toUpperCase().includes($scope.model.fromStaffCode.trim().toUpperCase()))) {
					$scope.itemSelectedListShop = $scope.StaffSource[i];
					break;
				}
			}
			$scope.showModalFunction("modalListShop");
			createDataTableListShop($scope.StaffSource);
		} else if (code == '13') {
			$scope.onblurShopCode();
		} else {
			if (StringUtilNVL($scope.model.fromStaffCode) == '') {
				StringUtilNVL($scope.model.fromStaffName) = '';
			}
		}*/
	});
	
	//f9 stock code
	$("#fShopCode").keyup(function(e) {
		var code = (e.keyCode ? e.keyCode : e.which);
		$scope.nameFnOKF9 = 'updateFormShop1';
		if (code == '120') {
			$(this).blur();
		}
		
	    if (e.type == 'blur') {
	    	$scope.onblurShopCode();
	    }
	    
		/*if (code == '120') {
			$scope.nameFnOKF9 = 'updateFormShop1';
			$scope.itemSelectedListShop = $scope.ReceiveStockSource[0];
			$scope.initSearchShop = $scope.model.toStockCode;
			for (var i=0; i<$scope.ReceiveStockSource.length; i++) {
				if ($scope.model.toStockCode != null && $scope.model.toStockCode != undefined &&
						($scope.ReceiveStockSource[i].code.toUpperCase().includes($scope.model.toStockCode.trim().toUpperCase()) ||
								$scope.ReceiveStockSource[i].name.toUpperCase().includes($scope.model.toStockCode.trim().toUpperCase()))) {
					$scope.itemSelectedListShop = $scope.ReceiveStockSource[i];
					break;
				}
			}
			$scope.showModalFunction("modalListShop");
			createDataTableListShop($scope.ReceiveStockSource);
		} else if (code == '13') {
			$scope.onblurShopCode();
		} else {
			if (StringUtilNVL($scope.model.toStockCode) == '') {
				$scope.model.fShopName = '';
				$scope.model.fShopStockId = '';
			}
		}*/
	});
	
	// create table danh muc shop
	function createDataTableListShop(dataItem) {
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
				"mData" : "code",
				"render" : function(data, type, row) {
					return "<div data-toggle='tooltip' class='text-wrap width-200' title='" + data + "'>" + data + "</div>";
				}
			}, {
				"mData" : "name",
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
					if ($scope.itemSelectedListShop.code == data.code) {
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
	
	    
	$scope.updateFormShop1 = function() {
		$scope.model.toStock = $scope.itemSelectedListShop;
		$scope.model.toStockCode = $scope.itemSelectedListShop.code;
		$scope.model.fShopStockId = $scope.itemSelectedListShop.stockId;
		$scope.model.toStockName = $scope.itemSelectedListShop.name;
		document.getElementById('fShopCode').title = $scope.model.toStockCode;
		document.getElementById('fShopName').title = $scope.model.toStockName;
		$scope.hideModalFunction("modalListShop");
	}
	
	$scope.updateFormStaff = function() {
		$scope.model.fromStaff = $scope.itemSelectedListShop;
		$scope.model.fromStaffCode = $scope.itemSelectedListShop.code;
		$scope.model.fShopStockId = $scope.itemSelectedListShop.stockId;
		$scope.model.fromStaffName = $scope.itemSelectedListShop.name;
		document.getElementById('fStaffCode').title = $scope.model.fromStaffCode;
		document.getElementById('fStaffName').title = $scope.model.fromStaffName;
		$scope.hideModalFunction("modalListShop");
	}
	
	$scope.onblurShopCode = function() {
		$scope.nameFnOKF9 = 'updateFormShop1';
		$scope.lstShops = $scope.ReceiveStockSource;
		if ($scope.model.toStockCode != undefined && $scope.model.toStockCode != '') {
			var isSearch = false;
			var isFirst = true;
			for (var i=0; i<$scope.lstShops.length; i++) {
				if ($scope.lstShops[i].code.toUpperCase() == $scope.model.toStockCode.trim().toUpperCase()) {
					$scope.itemSelectedListShop = $scope.lstShops[i];
					$scope.updateFormShop();
					isSearch = true;
					break;
				} else if (isFirst && ($scope.lstShops[i].code.toUpperCase().includes($scope.model.toStockCode.trim().toUpperCase()) ||
								$scope.lstShops[i].name.toUpperCase().includes($scope.model.toStockCode.trim().toUpperCase()))) {
					$scope.itemSelectedListShop = $scope.lstShops[i];
					isFirst = false;
				}
			}
			if (!isSearch) {
				$scope.model.toStockName = '';
				$scope.model.fShopStockId = '';
				$scope.initSearchShop = $scope.model.toStockCode;
				$scope.showModalFunction("modalListShop");
				createDataTableListShop($scope.lstShops);
			}
		}else{
			$scope.model.toStockName = '';
			$scope.model.fShopStockId = '';
			$scope.itemSelectedListShop = $scope.lstShops[0];
			
			$scope.initSearchShop = $scope.model.toStockCode;
			$scope.showModalFunction("modalListShop");
			createDataTableListShop($scope.lstShops);
		}
	}
	
	$scope.onblurStaffCode = function() {
		$scope.lstStaff = $scope.StaffSource;
		$scope.nameFnOKF9 = 'updateFormStaff';
		
		if ($scope.model.fromStaffCode != undefined && $scope.model.fromStaffCode != '') {
			var isSearch = false;
			var isFirst = true;
			for (var i=0; i<$scope.lstStaff.length; i++) {
				if ($scope.lstStaff[i].code.toUpperCase() == $scope.model.fromStaffCode.trim().toUpperCase()) {
					$scope.itemSelectedListStaff = $scope.lstStaff[i];
					$scope.updateFormShop();
					isSearch = true;
					break;
				} else if (isFirst && ($scope.lstStaff[i].code.toUpperCase().includes($scope.model.fromStaffCode.trim().toUpperCase()) ||
								$scope.lstStaff[i].name.toUpperCase().includes($scope.model.fromStaffCode.trim().toUpperCase()))) {
					$scope.itemSelectedListStaff = $scope.lstStaff[i];
					isFirst = false;
				}
			}
			if (!isSearch) {
				$scope.model.fromStaffName = '';
				$scope.initSearchShop = $scope.model.fromStaffCode;
				$scope.showModalFunction("modalListShop");
				createDataTableListShop($scope.lstStaff);
			}
		}else{
			$scope.model.fromStaffName = '';
			$scope.itemSelectedListShop = $scope.lstStaff[0];
			$scope.initSearchShop = $scope.model.fromStaffCode;
			$scope.showModalFunction("modalListShop");
			createDataTableListShop($scope.lstStaff);
		}
	}
	
});

function changeValueWarranty(objThis){
	var a = objThis.closest('tr');
	var rowData = oTableDDSerialSingleSETC2.row(a).data()
	var indexData = oTableDDSerialSingleSETC2.row( a).index();
	rowData.warrantyNo = objThis.value;
//	update data
	oTableDDSerialSingleSETC2.row( a ).data( rowData ).draw();
}

function StringUtilNVL(val) {
	if (val == undefined || val == null)
		return "";
	return $.trim(val);
}

function createTimeStamp() {
	var theMoment = moment();
	var millisTimeStamp = theMoment.valueOf();
	return millisTimeStamp;
}

function valid_numbers(e) {
	var key = e.keyCode;
	if (key >= 48 && key <= 57)
		return true;
	else
		return false;
}

function isValidDate(dateString) {
	// First check for the pattern
	if (!/^\d{1,2}\/\d{1,2}\/\d{4}$/.test(dateString))
		return false;

	// Parse the date parts to integers
	var parts = dateString.split("/");
	var day = parseInt(parts[0], 10);
	var month = parseInt(parts[1], 10);
	var year = parseInt(parts[2], 10);

	// Check the ranges of month and year
	if (year < 1000 || year > 3000 || month == 0 || month > 12)
		return false;

	var monthLength = [ 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31 ];

	// Adjust for leap years
	if (year % 400 == 0 || (year % 100 != 0 && year % 4 == 0))
		monthLength[1] = 29;

	// Check the range of the day
	return day > 0 && day <= monthLength[month - 1];
};

function formatNumber(amount) {
	decimalCount = 0, decimal = ".", thousands = ",";
	try {
		decimalCount = Math.abs(decimalCount);
		decimalCount = isNaN(decimalCount) ? 2 : decimalCount;

		const negativeSign = amount < 0 ? "-" : "";

		let i = parseInt(amount = Math.abs(Number(amount) || 0).toFixed(decimalCount)).toString();
		let j = (i.length > 3) ? i.length % 3 : 0;

		return negativeSign + (j ? i.substr(0, j) + thousands : '') + i.substr(j).replace(/(\d{3})(?=\d)/g, "" + thousands)
				+ (decimalCount ? decimal + Math.abs(amount - i).toFixed(decimalCount).slice(2) : "");
	} catch (e) {

	}
};