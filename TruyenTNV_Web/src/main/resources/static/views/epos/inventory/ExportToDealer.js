// shopType : Loại cửa hàng, Status : Trạng thái , Agent : Kho nhập , Reason: Lý do, ResourceCode: Nguồn hàng

app_vnm.factory('fctExportToDealer', function($http, $translate) {
	return {
		getTransId: function (data,callback){
			var url=eim_url+"/epos/inventory/ExportToDealer/getTransId";
			$http.post(url, data).success(callback).error(function(data, status, headers, config) {
				closeOverLay();
				bootboxAlertFocus(status + " " + $translate.instant('vnm.messages.error.connection'), "", $translate.instant("vnm.lable.vnm.name"), "");
			});
		},
		getShopType : function(callback) {
			var url = eim_url + "/epos/inventory/ExportToDealer/getShopType";
			$http.post(url).success(callback).error(function(data, status, headers, config) {
				closeOverLay();
				bootboxAlertFocus(status + " " + $translate.instant('vnm.messages.error.connection'), "", $translate.instant("vnm.lable.vnm.name"), "");
			});
		},
		getStatus : function(callback) {
			var url = eim_url + "/epos/inventory/ExportToDealer/getStatus";
			$http.post(url).success(callback).error(function(data, status, headers, config) {
				closeOverLay();
				bootboxAlertFocus(status + " " + $translate.instant('vnm.messages.error.connection'), "", $translate.instant("vnm.lable.vnm.name"), "");
			});
		},
		getAgent : function(data, callback) {
			var url = eim_url + "/epos/inventory/ExportToDealer/getAgent";
			$http.post(url, data).success(callback).error(function(data, status, headers, config) {
				closeOverLay();
				bootboxAlertFocus(status + " " + $translate.instant('vnm.messages.error.connection'), "", $translate.instant("vnm.lable.vnm.name"), "");
			});
		},
		getReason : function(callback) {
			var url = eim_url + "/epos/inventory/ExportToDealer/getReason";
			$http.post(url).success(callback).error(function(data, status, headers, config) {
				closeOverLay();
				bootboxAlertFocus(status + " " + $translate.instant('vnm.messages.error.connection'), "", $translate.instant("vnm.lable.vnm.name"), "");
			});

		},
		getResourceCode : function(callback) {
			var url = eim_url + "/epos/inventory/ExportToDealer/getResourceCode";
			$http.post(url).success(callback).error(function(data, status, headers, config) {
				closeOverLay();
				bootboxAlertFocus(status + " " + $translate.instant('vnm.messages.error.connection'), "", $translate.instant("vnm.lable.vnm.name"), "");
			});

		},
		getInternalStock : function(callback) {
			var url = eim_url + "/epos/inventory/ExportToDealer/getInternalStock";
			$http.post(url).success(callback).error(function(data, status, headers, config) {
				closeOverLay();
				bootboxAlertFocus(status + " " + $translate.instant('vnm.messages.error.connection'), "", $translate.instant("vnm.lable.vnm.name"), "");
			});

		},

		onSearch : function(data, callback) {
			var url = eim_url + "/epos/inventory/ExportToDealer/onSearch";
			$http.post(url, data).success(callback).error(function(data, status, headers, config) {
				closeOverLay();
				bootboxAlertFocus(status + " " + $translate.instant('vnm.messages.error.connecttion'));
			});
		},
		getGoodsList : function(data, callback) {
			var url = eim_url + "/epos/inventory/ExportToDealer/getGoodsList";
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

		getTemplateValue : function(data, callback) {
			var url = eim_url + "/epos/inventory/stockExportToCenter/getTemplateValue";
			$http.post(url, data).success(callback).error(function(data, status, headers, config) {
				closeOverLay();
				bootboxAlertFocus(status + " " + $translate.instant('vnm.messages.error.connection'), "", $translate.instant("vnm.lable.vnm.name"), "");
			});
		},

		getTemplateWarrantyValue : function(data, callback) {
			var url = eim_url + "/epos/inventory/ExportToDealer/getTeamplateWarantyValue";
			$http.post(url, data).success(callback).error(function(data, status, header, config) {
				closeOverLay();
				bootboxAlertFocus(status + " " + $translate.instant('vnm.messages.error.connection'), "", $translate.instant("vnm.lable.vnm.name"), "");

			});

		},
		// Duyệt lệnh
		commandSuccess : function(data, callback) {
			var url = eim_url + "/epos/inventory/ExportToDealer/commandSucces";
			$http.post(url, data).success(callback).error(function(data, status, header, config) {
				closeOverLay();
				bootboxAlertFocus(status + " " + $translate.instant('vnm.messages.error.connection'), "", $translate.instant("vnm.lable.vnm.name"), "");
			});

		},

		// Từ chối

		commandRefuse : function(data, callback) {
			var url = eim_url + "/epos/inventory/ExportToDealer/commandRefuse";
			$http.post(url, data).success(callback).error(function(data, status, header, config) {
				closeOverLay();
				bootboxAlertFocus(status + " " + $translate.instant('vnm.messages.error.connection'), "", $translate.instant("vnm.lable.vnm.name"), "");
			});

		},
 
		// Xuất lệnh // Button này đã bỏ rồi. :V Đã tích hợp vào trong business của Duyệt lệnh ( đã đổi tên thành xuất lệnh) 
		exportCommand : function(data, callback) {
			var url = eim_url + "/epos/inventory/ExportToDealer/exportCommand";
			$http.post(url, data).success(callback).error(function(data, status, header, config) {
				closeOverLay();
				bootboxAlertFocus(status + " " + $translate.instant('vnm.messages.error.connection'), "", $translate.instant("vnm.lable.vnm.name"), "");
			});

		},
		valid : function(data, callback) {
			var url = eim_url + "/epos/inventory/ExportToDealer/validFormExportToDealer";
			$http.post(url, data).success(callback).error(function(data, status, headers, config) {
				closeOverLay();
				bootboxAlertFocus($translate.instant('vnm.stock_export_to_center.error.form.' + data), "", $translate.instant("vnm.lable.vnm.name"), "");
			});
		},

		// Vương TN

		getReceiptNoSeq : function(callback) {
			var url = eim_url + '/epos/inventory/formStockImportFromPartner/getReceiptNoSeq';
			$http.post(url).success(callback).error(function(data, status, headers, config) {
				App.unblockUI("#contentMain");
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
		onOkAction : function(data, callback) {
			var url = eim_url + "/epos/inventory/stockExportToCenter/pnlTransactionGoodsDetail/onAction";
			$http.post(url, data).success(callback).error(function(data, status, headers, config) {
				closeOverLay();
				bootboxAlertFocus(status + " " + $translate.instant('vnm.messages.error.connection'), "", $translate.instant("vnm.lable.vnm.name"), "");
			});
		},

		onFSaveAction : function(data, callback) {
			var url = eim_url + "/epos/inventory/fctExportToDealer/onSave";
			$http.post(url, data).success(callback).error(function(data, status, headers, config) {
				closeOverLay();
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
		getSingelSerialInStock : function(data, callback) {
			var url = eim_url + "/epos/inventory/stockViewInfo/getStockSerialInStock";
			$http.post(url, data).success(callback).error(function(data, status, headers, config) {
				closeOverLay();
				bootboxAlertFocus(status + " " + $translate.instant('vnm.messages.error.connection'), "", $translate.instant("vnm.lable.vnm.name"), "");
			});
		},

		getSerialListInStock : function(data, callback) {
			var url = eim_url + "/epos/inventory/checkListSerial";
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
		getParamsPrint : function(data, callback) {
			var url = eim_url + "/epos/sales/FormSaleDealer/getParamsPrint";
			$http.post(url, data).success(callback).error(function(data, status, headers, config) {
				closeOverLay();
				bootboxAlertFocus(status + " " + $translate.instant('vnm.messages.error.connection'), "", $translate.instant("vnm.lable.vnm.name"), "");
			});
		},
		exportFile2 : function(data, callback) {
			var url = eim_url + "/epos/sales/FormSaleDealer/exportFile";
			$http.post(url, data, {
				responseType : 'arraybuffer'
			}).success(callback).error(function(data, status, headers, config) {
				closeOverLay();
				bootboxAlertFocus(status + " " + $translate.instant('vnm.messages.error.connection'), "", $translate.instant("vnm.lable.vnm.name"), "");
			});
		},
		
		// THem moi
		onSearchService : function(data, callback) {
			var url = eim_url + "/epos/inventory/ExportToDealer/onSearchService";
			$http.post(url, data).success(callback).error(function(data, status, headers, config) {
				closeOverLay();
				bootboxAlertFocus(status + " " + $translate.instant('vnm.messages.error.connection'), "", $translate.instant("vnm.lable.vnm.name"), "");
			});
		},
		onSearchSerials : function(data, callback) {
			var url = eim_url + "/epos/inventory/ExportToDealer/onSearchSerials";
			$http.post(url, data).success(callback).error(function(data, status, headers, config) {
				closeOverLay();
				bootboxAlertFocus(status + " " + $translate.instant('vnm.messages.error.connection'), "", $translate.instant("vnm.lable.vnm.name"), "");
			});
		},
		
		

	}

})

var ROW_NOT_SELECTED = -1;
app_vnm.controller('exportToDealerController',
		function($scope, $rootScope, $translate, $compile, $timeout, $uibModal, $location, $window, FileUploader, $filter, $http, NgTableParams, $localStorage,
				fctExportToDealer) {

			// Xử lý form
			$scope.viewdetailDisabled = true;
			$scope.limitCbb = 10;
			$scope.listShopType = [];
			$scope.model = {};
			$scope.itemSelected = {};
			$scope.listStatus = [];
			$scope.listReason = [];
			$scope.listResourceCode = [];
			$scope.listAgent = [];
			$scope.listGoodsList = [];
			$scope.listInternalStock = [];
			$scope.listService=[];
			$scope.listSerials=[];

			$scope.liGoodsListItem = {};
			$scope.txtNote = "";

			$scope.disableDetails = true;
			$scope.ListGoodsIdName = [ {
				goodsCode : '',
				name : '',
				goodsId : ''
			} ];

			var momentObj = moment(new Date());
			var momentString = momentObj.format('DD/MM/YYYY');
			$scope.model.dtFromDate = momentString;

			$scope.disableDuyet = true;
			$scope.disableXuatLenh = true;
			$scope.disablePrint = true;
			$scope.disablePrintPhieu = true;
			$scope.showButton = true;
			$scope.showButtonAccept = false;

			// COMMBOBOX UPDATE
			$("#fShopCode").keyup(function(e) {
				var code = (e.keyCode ? e.keyCode : e.which);
				if (code == '120') {
					$scope.showModalFunction("modalListShop");
					createDataTableListShop($scope.listAgent);
				} else {
					if ($scope.model.agentCode == '') {
						$scope.model.agentName = '';
						$scope.model.agentValue = null;
					}
					if ($scope.model.agentCode!='' || $scope.model.agentCode!=null)
						{
							for(var i=0; i<$scope.listAgent.length; i++)
								{
									if ($scope.model.agentCode.toUpperCase()==$scope.listAgent[i].code.toUpperCase())
										{
										$scope.model.agentCode=$scope.listAgent[i].code;
										$scope.model.agentName = $scope.listAgent[i].name;
										$scope.model.agentValue = $scope.listAgent[i].value;
										break;
										}
								}
						}
				}
			});
			// create table mat hang
			function createDataTableListShop(dataItem) {
				oTableFListSerial = $('#tblListShop').DataTable({
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
							return "<div data-toggle='tooltip' class='text-wrap width-400' title='" + data + "'>" + data + "</div>";
						}
					}, {
						"mData" : "name",
						"render" : function(data, type, row) {
							return "<div data-toggle='tooltip' class='text-wrap width-400' title='" + data + "'>" + data + "</div>";
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

				$('#tblListShop tbody').off().on('click', 'tr', function(e, dt, type, indexes) {
					$(this).removeClass('selected');
					var rowData = oTableFListSerial.row(this).data();
					oTableFListSerial.$('tr.selected').removeClass('selected');
					$(this).addClass('selected');
					$scope.itemSelectedListShop = rowData;
				});
			}

			$scope.updateFormShop = function() {

				$scope.model.agentCode = $scope.itemSelectedListShop.code;
				$scope.model.agentName = $scope.itemSelectedListShop.name;
				$scope.model.agentValue = $scope.itemSelectedListShop.value;
				// $scope.model.agentName = $scope.itemSelectedListShop.name;
				document.getElementById('fShopCode').title = $scope.model.agentCode;
				document.getElementById('fShopName').title = $scope.model.agentName;
				$scope.hideModalFunction("modalListShop");

			}
			$scope.dialogListShopActionBack = function() {
				$scope.hideModalFunction("modalListShop");
			}
			// END COMBOBOX UPDATE

			// Combobox shopType
			$scope.getShopType = function() {
				overLoading();
				fctExportToDealer.getShopType(function(result) {

					if (result != null && result.length > 0) {
						$scope.listShopType = result;
						$scope.listShopType.unshift({
							name : "All"
						});
						$scope.model.shopType = $scope.listShopType[0].code;

					
						$scope.isNull = [];
						closeOverLay();
						createDataTableOnSearch($scope.isNull, 'tableOne');
						closeOverLay();// resul=[]
						createTableListGoodsService($scope.isNull, 'tableFGoodsService');
						closeOverLay();
						createTableListGoodsSerial($scope.isNull, 'tableFGoodsSerial');
						
					}
				});
			}

			// COmbobox status

			$scope.getStatus = function() {
				overLoading();
				fctExportToDealer.getStatus(function(result) {

					if (result != null && result.length > 0) {
						$scope.listStatus = result;
						$scope.listStatus.unshift({
							name : "All"
						});
						$scope.model.status = $scope.listStatus[0].code;
						closeOverLay();

						$scope.getShopType();

					}
				});
			};

			// COmbobox Reason

			$scope.getReason = function() {
				overLoading();
				fctExportToDealer.getReason(function(result) {

					if (result != null && result.length > 0) {
						$scope.listReason = result;
						$scope.model.reason = $scope.listReason[0];
						closeOverLay();
						$scope.getStatus();

					}
				});

			}

			// combobox resource

			$scope.getResourceCode = function() {
				overLoading();
				fctExportToDealer.getResourceCode(function(result) {
					if (result != null && result.length > 0) {
						$scope.listResourceCode = result;

						$scope.model.resourceCodeForm = $scope.listResourceCode[0];
						closeOverLay();
						$scope.getReason();

					}
				});
			}

			// combobox agent

			$scope.getAgent = function() {
				overLoading();
				var data = $localStorage.clientContext.sessionStockID;
				fctExportToDealer.getAgent(data, function(result) {

					if (result != null && result.length > 0) {
						$scope.listAgent = result;
						// $scope.listAgent.unshift({name:"All"});
						// $scope.model.agent=$scope.listAgent[0].value;
						closeOverLay();
						$scope.getResourceCode();

					}

				});
			};

			// combobox internalStock

			$scope.getInternalStock = function() {
				overLoading();
				fctExportToDealer.getInternalStock(function(result) {
					if (result != null && result.length > 0) {
						$scope.listInternalStock = result;
						$scope.model.stockInternalTypeForm = $scope.listInternalStock[0];
						closeOverLay();
						$scope.getAgent();

					}

				});
			};

			$scope.loadDefault = function() {
				overLoading();
				$scope.getInternalStock();
				closeOverLay();

			}
			$scope.loadDefault();

			// button Search

			$scope.listSearchSuccess = [];
			$scope.nameStatus = function(StatusCode) {
				var statusName = '';
				for (var i = 0; i < $scope.listStatus.length; i++) {
					if (StatusCode == $scope.listStatus[i].code) {
						statusName = $scope.listStatus[i].name;
						break;
					}
				}
				return statusName;
			}
			$scope.AgentName = function(AgentCode) {
				var nameAgent = '';
				for (var i = 0; i < $scope.listAgent.length; i++) {
					if (AgentCode == $scope.listAgent[i].value) {
						nameAgent = $scope.listAgent[i].name;
						break;
					}
				}
				return nameAgent;
			}

			$scope.onSearch = function() {

				var shop = $scope.model.shopType;
				var status = $scope.model.status;
				var reason = $scope.model.reason;
				var agentValue = $scope.model.agentValue;
				var resource = $scope.model.resourceCodeForm;

				if (shop == undefined) {
					shop = {
						code : null
					}
				}
				if (agentValue == undefined) {
					agentValue = null;
				}
				if (status == undefined) {
					status = {
						code : null
					}
				}
				if ($scope.model.receiptCode == '') {
					$scope.model.receiptCode = null;
				}
				if ($scope.model.note == '') {
					$scope.model.note = null;
				}

				var data = {
					"shopTypeCode" : shop.code,
					"reasonId" : reason.reasonId,
					"statusCode" : status.code,
					"agentCode" : agentValue,
					"fromDate" : $('#fromDate').val(),
					"resourceCode" : resource.code,
					"note" : $scope.model.note,
					"receipCode" : $scope.model.receiptCode,
					"sessionStockId" : $localStorage.clientContext.sessionStockID
				}
				overLoading();

				fctExportToDealer.onSearch(data, function(result) {
					if (result != null && result.length > 0) {
						$scope.listSearchSuccess = result;
						if (result[0].status == "1") {
							$scope.disablePrint = true;
							$scope.disableDuyet = false;

						}
						$scope.loadDetail($scope.listSearchSuccess[0]);
						$scope.itemSelected = $scope.listSearchSuccess[0];
						createDataTableOnSearch($scope.listSearchSuccess, 'tableOne');
						$scope.GoodsTransaction = $scope.listSearchSuccess[0].liStransactionDetail[0];
						$scope.lstGoodsTransaction = $scope.listSearchSuccess[0].liStransactionDetail;
						$scope.GoodsTransaction = $scope.lstGoodsTransaction[0];
						$scope.loadDetailbyCategoryGoods($scope.listSearchSuccess[0]);
						$scope.stockTransId = $scope.listSearchSuccess[0].stock_trans_id;
						// $scope.loadDetailbyCategoryGoods($scope.listSearchSuccess[0].liStransactionDetail.liStransactionDetail[0]);
						closeOverLay();
						$scope.showButton = true;
						$scope.showButtonAccept = false;
						$scope.viewdetailDisabled = true;
						
					} else {
						createDataTableOnSearch(result, 'tableOne'); // resul=[]
						bootboxAlertFocus("Không tìm thấy dữ liệu thỏa mãn yêu cầu", "", $translate.instant("vnm.lable.vnm.name"), "");
						App.unblockUI("#contentMain");
						$scope.showButton = true;
						$scope.showButtonAccept = false;
						$scope.viewdetailDisabled = true;
						closeOverLay();
						
					}
				});

			}

			// END SEARCH

			// LOAD Danh muc hang va DETAIL

			$scope.listStatusStatedGoods = [ {
				stateId : '',
				name : '',
				status : ''
			} ];
			$scope.loadDetail = function(item) {
				$scope.selectItem='selectRow'
					
					if (item.status=='1')
						{
						$scope.disableDuyet=false;
						$scope.disableXuatLenh=true;
						$scope.disablePrint=false;
						$scope.disablePrintPhieu=true;
						}
					else if (item.status=='2')
						{
						$scope.disableDuyet=true;
						$scope.disableXuatLenh=true;
						$scope.disablePrint=false;
						$scope.disablePrintPhieu=true;
						}
					else if (item.status=='3')
						{
						$scope.disableDuyet=true;
						$scope.disableXuatLenh=true;
						$scope.disablePrint=false;
						$scope.disablePrintPhieu=false;
						}
					else if (item.status=='4')
						{
						$scope.disableDuyet=true;
						$scope.disableXuatLenh=true;
						$scope.disablePrint=true;
						$scope.disablePrintPhieu=true;
						}
					else
						{
						$scope.disableDuyet=true;
						$scope.disableXuatLenh=false;
						$scope.disablePrint=true;
						$scope.disablePrintPhieu=true;
						}
					$scope.txtNote=item.note;
					$scope.model.dtFromDate= item.action_date;
					$scope.model.receiptCode=item.action_code;
					
					
					for (var i=0; i<$scope.listAgent.length; i++)
						{
							if (item.deliverer_stock_id==$scope.listAgent[i].value)
								{
								$scope.model.agentCode=$scope.listAgent[i].code;
								$scope.model.agentName=$scope.listAgent[i].name;
								$scope.model.agentValue=$scope.listAgent[i].value;
								break;
								}
						}
					for(var i=0; i<$scope.listReason.length; i++)
						{
							if (item.reason_id==$scope.listReason[i].reasonId)
								{
									$scope.model.reason=$scope.listReason[i];
									break;
								}
						}
					for (var i=0; i<$scope.listStatus.length; i++)
						{
							if (item.status==$scope.listStatus[i].code)
								{
									$scope.model.status=$scope.listStatus[i];
									break;
								}
						}
					for (var i=0; i<$scope.listShopType.length; i++)
						{
							if (item.type==$scope.listShopType[i].code)
								{
									$scope.model.shopType=$scope.listShopType[i];
									break;
								}
						}
					
					$scope.listStatusStatedGoods[0].stateId=item.liStransactionDetail[0].liStateList[0].stateId;
					$scope.listStatusStatedGoods[0].name=item.liStransactionDetail[0].liStateList[0].name;
					$scope.listStatusStatedGoods[0].status=item.liStransactionDetail[0].liStateList[0].status;
					$scope.model.statesForm=$scope.listStatusStatedGoods[0];
				
			
			};

			$scope.loadDetailbyCategoryGoods = function(item) {

				overLoading();
				var data=item.stock_trans_id;
				fctExportToDealer.onSearchService(data,function(result) {
					if (result != null && result.length > 0) {
						$scope.listService=result;
						closeOverLay();
						createTableListGoodsService($scope.listService,'tableFGoodsService');
						$scope.loadSerialsGoods($scope.listService[0]);

					}
					else
					{
						closeOverLay();
						var isNull=[];
						createTableListGoodsService(isNull,'tableFGoodsService');
						createTableListGoodsSerial(isNull,'tableFGoodsSerial');
						
					}
				});
			}

		
			function createDataTableOnSearch(dataItem) {
				oTableItemXTableOne = $('#tableOne').DataTable(
						{
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
							"scrollY" : 240,
							"order" : [],
							"select" : {
								style : 'single',
								info : false
							},
							"scrollX" : true,
							"columns" : [
									{
										"mData" : "deliverer_stock_id",
										"render" : function(data, type, row) {
											x = $scope.AgentName(data) == null ? '' : $scope.AgentName(data);
											return "<div data-toggle='tooltip' class='text-wrap width-200' title='" + x + "'>" + x + "</div>";
										}
									},
									{
										"mData" : "action_code",
										"render" : function(data, type, row) {
											x = data == null ? '' : data;
											return "<div data-toggle='tooltip' class='text-wrap width-200' title='" + x + "'>" + x + "</div>";
										}
									},
									{
										"mData" : "action_date",
										"render" : function(data, type, row) {
											x = data == null ? '' : data;
											return "<div data-toggle='tooltip' class='text-wrap width-200' title='" + x + "'>" + x + "</div>";
										}
									},
									{
										"mData" : "reason_id",
										"render" : function(data, type, row) {

											return "<div data-toggle='tooltip' class='text-wrap width-200' title='" + $scope.model.reason.name + "'>"
													+ $scope.model.reason.name + "</div>";
										}
									}, {
										"mData" : "status",
										"render" : function(data, type, row) {
											x = $scope.nameStatus(data) == null ? '' : $scope.nameStatus(data);
											return "<div data-toggle='tooltip' class='text-wrap width-200' title='" + x + "'>" + x + "</div>";
										}
									}, {
										"mData" : "note",
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
								}
							},
							"createdRow" : function(row, data, rowIndex) {
								if ($scope.itemSelected != ROW_NOT_SELECTED) {
									if ($scope.itemSelected.stock_trans_id == data.stock_trans_id) {
										$(row).addClass('selected');
									}
								} else {
									if (rowIndex == 0 || rowIndex == '0') {
										$(row).addClass('selected');
									}
								}

							}
						});

				$('#tableOne tbody').off().on('click', 'tr', function(e, dt, type, indexes) {
					$(this).removeClass('selected');
					var rowData = oTableItemXTableOne.row(this).data();

					oTableItemXTableOne.$('tr.selected').removeClass('selected');
					$(this).addClass('selected');
					$scope.itemSelected = rowData;
					$scope.lstGoodsTransaction = rowData.liStransactionDetail;
					$scope.stockTransId = rowData.stock_trans_id;
					$scope.GoodsTransaction = $scope.itemSelected.liStransactionDetail[0];
					$scope.loadDetail(rowData);
					$scope.loadDetailbyCategoryGoods(rowData);
				});
			}
			;

			// Chức năng in đơn lệnh

			$scope.btnInDonLenhOnClick = function() {
				App.blockUI({
					target : "#contentMain",
					boxed : true,
					message : 'loading...'
				});

				var templateValueSearch = {
					"code" : $scope.stockTransId,
					"name" : $localStorage.clientContext.sessionStockID,
				}
				fctExportToDealer.getTemplateValue(templateValueSearch, function(result) {
					if (result != null && result != undefined) {
						if (result.status == '0') {
							bootboxAlertFocus(result.messages, "", $translate.instant("vnm.lable.vnm.name"), "");
						} else if (result.length > 0) {
							var templateValue = result[0];
							var strDeliverStockName = "";
							if (templateValue.deliveyShopCode != null && templateValue.deliveyShopCode != undefined && templateValue.deliveyShopCode != '') {
								strDeliverStockName = templateValue.deliveyShopCode + " - " + templateValue.deliveyShopName;
							}
							var ReportInput = {
								"stockTransId" : $scope.stockTransId,
								"strShopName1" : StringUtilNVL(templateValue.shopName1),
								"strShopCode" : StringUtilNVL(templateValue.shopCode),
								"strShopName" : StringUtilNVL(templateValue.shopName),
								"strShopAddress" : StringUtilNVL(templateValue.shopAddress),
								"strShopTel" : StringUtilNVL(templateValue.shopTel),
								"strShopFax" : StringUtilNVL(templateValue.shopFax),
								"strDeliveyShopCode" : StringUtilNVL(templateValue.deliveyShopCode),
								"strDeliveyShopName" : StringUtilNVL(templateValue.deliveyShopName),
								"strDeliveyShopAddress" : StringUtilNVL(templateValue.deliveyShopAddress),
								"strActionCode" : StringUtilNVL(templateValue.actionCode),
								"strActionDate" : StringUtilNVL(templateValue.actionDate),
								"strReasonName" : StringUtilNVL(templateValue.reasonName),
								"strActionStaff" : StringUtilNVL(templateValue.actionStaff),
								"deliverUserName" : StringUtilNVL(templateValue.deliverUserName),
								"strInternalStockName" : StringUtilNVL(templateValue.internalStockName),
								"strDeliverStockName" : StringUtilNVL(strDeliverStockName),
								"fileTempName" : 'TemplateImportExport',
								"fileType" : '.xlsx'
							};

							fctExportToDealer.exportFile(encodeURI(JSON.stringify(ReportInput)), function(result, status, header, config) {
								if (result.status == '0' && result.status != 'undefined') {
									App.unblockUI("#contentMain");
									bootboxAlertFocus($translate.instant('vnm.messages.validate.prepaid.server.' + result.messages), "", $translate
											.instant("vnm.lable.vnm.name"), "");
								} else {
									App.unblockUI("#contentMain");
									download(new Blob([ result ]), header('MyDownloadFile') + header('FileType'), header('Content-Type'));
								}
							});
						}
					}
				});
			}

			// Chức năng in phiếu

			$scope.btnInPhieuOnClick = function() {
				App.blockUI({
					target : "#contentMain",
					boxed : true,
					message : 'loading...'
				});

				var templateValueSearch = {
					"code" : $scope.stockTransId,
					"name" : $localStorage.clientContext.sessionStockID,
				}
				fctExportToDealer.getTemplateValue(templateValueSearch, function(result) {
					if (result != null && result != undefined) {
						if (result.status == '0') {
							bootboxAlertFocus(result.messages, "", $translate.instant("vnm.lable.vnm.name"), "");
						} else if (result.length > 0) {
							var templateValue = result[0];
							var strDeliverStockName = "";
							if (templateValue.deliveyShopCode != null && templateValue.deliveyShopCode != undefined && templateValue.deliveyShopCode != '') {
								strDeliverStockName = templateValue.deliveyShopCode + " - " + templateValue.deliveyShopName;
							}
							var ReportInput = {
								"stockTransId" : $scope.stockTransId,
								"strShopName1" : StringUtilNVL(templateValue.shopName1),
								"strShopCode" : StringUtilNVL(templateValue.shopCode),
								"strShopName" : StringUtilNVL(templateValue.shopName),
								"strShopAddress" : StringUtilNVL(templateValue.shopAddress),
								"strShopTel" : StringUtilNVL(templateValue.shopTel),
								"strShopFax" : StringUtilNVL(templateValue.shopFax),
								"strDeliveyShopCode" : StringUtilNVL(templateValue.deliveyShopCode),
								"strDeliveyShopName" : StringUtilNVL(templateValue.deliveyShopName),
								"strDeliveyShopAddress" : StringUtilNVL(templateValue.deliveyShopAddress),
								"strActionCode" : StringUtilNVL(templateValue.actionCode),
								"strActionDate" : StringUtilNVL(templateValue.actionDate),
								"strReasonName" : StringUtilNVL(templateValue.reasonName),
								"deliverUserName" : StringUtilNVL(templateValue.deliverUserName),
								"strActionNote" : StringUtilNVL(templateValue.actionNote),
								"strInternalStockName" : StringUtilNVL(templateValue.internalStockName),
								"strDeliverStockName" : StringUtilNVL(strDeliverStockName),
								"fileTempName" : 'TemplateStockExportReceipt',
								"fileType" : '.xlsx'
							};

							fctExportToDealer.exportFile(encodeURI(JSON.stringify(ReportInput)), function(result, status, header, config) {
								if (result.status == '0' && result.status != 'undefined') {
									App.unblockUI("#contentMain");
									bootboxAlertFocus($translate.instant('vnm.messages.validate.prepaid.server.' + result.messages), "", $translate
											.instant("vnm.lable.vnm.name"), "");
								} else {
									App.unblockUI("#contentMain");
									download(new Blob([ result ]), header('MyDownloadFile') + header('FileType'), header('Content-Type'));
								}
							});
						}
					}
				});
			}

			// Chức năng in phiếu hàng bảo hành
			$scope.btnInPhieuBaoHanhOnClick = function() {
				closeOverLay();

				var templateWarrantyValueSearch = {
					"item" : $scope.itemSelected,
					"name" : $localStorage.clientContext.sessionStockID,
				}
				fctExportToDealer.getTemplateWarrantyValue(templateWarrantyValueSearch, function(result) {
					if (result != null && result != undefined) {

						if (result[2] == '-1') {
							closeOverLay();
							bootboxAlertFocus($translate.instant("vnm.ExportToDealer.label.bootbox.alert.error.report"), "", $translate
									.instant("vnm.lable.vnm.name"), "");

							return false;

						} else {
							var date = new Date()
							var datemoment = moment(dateReport);
							var dateReport = momentObj.format('DD/MM/YYYY');

							var ReportWarranty = {
								"strShopName" : result[0],
								"strDeliverShopName" : result[1],
								"strWarrantyActionCode" : result[2],
								"dateReport" : dateReport,
								"fileTempName" : 'WarrantyReceiptReportVN',
								"fileType" : '.xlsx'
							};

							fctExportToDealer.exportFile(encodeURI(JSON.stringify(ReportWarranty)), function(result, status, header, config) {
								if (result.status == '0' && result.status != 'undefined') {
									closeOverLay();
									bootboxAlertFocus($translate.instant('vnm.messages.validate.prepaid.server.' + result.messages), "", $translate
											.instant("vnm.lable.vnm.name"), "");
									closeOverLay();

								} else {
									closeOverLay();
									download(new Blob([ result ]), header('MyDownloadFile') + header('FileType'), header('Content-Type'));
									closeOverLay();

								}
							});
						}
					}
				});

			}

			// Chức năng in đơn hàng
			$scope.transIdPrint="";
			$scope.btnInDonHangOnClick = function() {
				overLoading();
				fctExportToDealer.getTransId($scope.stockTransId,function(result){
					if(result!=null){
						$scope.transIdPrint=result;
						closeOverLay();
						var keySearch = {
								"code" : $scope.transIdPrint,
							}
						overLoading();
							fctExportToDealer.getParamsPrint(keySearch, function(result) {
								if (result.status == '0') {
									bootboxAlertFocus(result.messages, "", $translate.instant("vnm.lable.vnm.name"), "");
								} else if (result.length > 0) {
									var reportInput = {
										"lstDetailTrans" : result,
										"fileTempName" : 'FormSaleDealer',
										"fileType" : '.xlsx'
									};

									fctExportToDealer.exportFile2(reportInput, function(result, status, header, config) {
										if (result.status == '0' && result.status != 'undefined') {
											bootboxAlertFocus($translate.instant('vnm.messages.validate.prepaid.server.' + result.messages), "", $translate
													.instant("vnm.lable.vnm.name"), "");
										} else {
											download(new Blob([ result ]), header('MyDownloadFile') + header('FileType'), header('Content-Type'));
										}
									});
								}

								else if (result.length == 0) {
									bootboxAlertFocus("Không có dữ liệu để in!", "", $translate.instant("vnm.lable.vnm.name"), "");
								}
								closeOverLay();
							});
					}
					else{
						closeOverLay();
					}
				})

				

			}

			// Chức năng Duyệt lệnh
			$scope.btnDuyetLenh = function() {
				bootboxConfirm($translate.instant("vnm.ExportToDealer.label.btn.ok"), $translate.instant("vnm.ExportToDealer.label.bootbox.alert.question.ok"),
						function() {
							$scope.btnDuyetLenhOnclick();
						}, function() {
							return
						});
			}
			$scope.btnDuyetLenhOnclick = function() {

				var note = "";
				if ($scope.itemSelected.note == null) {
					note = "";
				}

				var stockTransaction = {
					"getFromStockTransID" : $scope.itemSelected.stock_trans_id,
					"stockId" : $localStorage.clientContext.sessionStockID,
					"delivererStockID" : $scope.itemSelected.deliverer_stock_id,
					"cmdCode" : $scope.itemSelected.action_code,
					"reasonID" : $scope.itemSelected.reason_id,
					"reasonCode" : $scope.model.reason.code,
					"cmdName" : "",
					"cmdNode" : note,
					"type" : "1",
					"internalStockId" : $scope.model.stockInternalTypeForm.internalStockId,
					"resourceCode" : $scope.model.resourceCodeForm.code,
					"inspectCmdCode" : $scope.itemSelected.action_code,
					"inspectCmdName" : $localStorage.clientContext.shop.staffName,
					"cmdStaffId" : $localStorage.clientContext.shop.staffId,
					"inspectCmdNote" : note,
					"inspectCmdStaffId" : $localStorage.clientContext.shop.staffId
				};
				overLoading();
				fctExportToDealer.commandSuccess(stockTransaction, function(result) {
					if (result[0] == "1") {
						closeOverLay();
						bootboxAlertFocus($translate.instant("vnm.ExportToDealer.label.btn.xuatlenh.success"), "",
								$translate.instant("vnm.lable.vnm.name"), "");

						for (var i = 0; i < $scope.listSearchSuccess.length; i++) {
							if ($scope.listSearchSuccess[i].stock_trans_id == $scope.itemSelected.stock_trans_id) {
								$scope.listSearchSuccess[i].status = "3";
							}
						}
						$scope.itemSelected = $scope.listSearchSuccess[0];
						createDataTableOnSearch($scope.listSearchSuccess, 'tableOne');

						$scope.disableDuyet = true;
						for (var i = 0; i < $scope.listStatus.length; i++) {
							if ($scope.listStatus[i].code == '3')
								$scope.model.status = $scope.listStatus[i];
						}

					}
					else
						{
						closeOverLay();
						bootboxAlertFocus($translate.instant("vnm.ExportToDealer.label.btn.xuatlenh.error") + "Lỗi: " + result[0], "",
								$translate.instant("vnm.lable.vnm.name"), "");
						}
					closeOverLay();
				});

			}

			$scope.btnTuChoi = function() {
				bootboxConfirm($translate.instant("vnm.ExportToDealer.label.title.bootbox.cancel"), $translate
						.instant("vnm.ExportToDealer.label.bootbox.alert.cancel.export.agent"), function() {
					$scope.btnTuChoiOnclick();
				}, function() {
					return
				});
			}
			$scope.btnTuChoiOnclick = function() {
				var note = "";
				if ($scope.itemSelected.note == null) {
					note = "";
				}

				var stockTransaction = {
					"status" : "2",
					"stockTransId" : $scope.itemSelected.stock_trans_id,
					"stockId" : $localStorage.clientContext.sessionStockID,
					"delivererStockId" : $scope.itemSelected.deliverer_stock_id,
					"cmdCode" : $scope.itemSelected.action_code,
					"reasonId" : $scope.itemSelected.reason_id,
					"reasonCode" : $scope.model.reason.code,
					"cmdName" : "",
					"cmdNode" : note,
					"type" : "1",
					"internalStockId" : $scope.model.stockInternalTypeForm.internalStockId,
					"resourceCode" : $scope.model.resourceCodeForm.code,
					"inspectCmdCode" : $scope.itemSelected.action_code,
					"inspectCmdName" : $localStorage.clientContext.shop.staffName,
					"cmdStaffId" : $localStorage.clientContext.shop.staffId,
					"inspectCmdNote" : note,
					"inspectCmdStaffId" : $localStorage.clientContext.shop.staffId,
					"sessionUserName" : $localStorage.clientContext.username
				};
				fctExportToDealer.commandRefuse(stockTransaction, function(result) {
					if (result != null && result[0] == "1") {
						bootboxAlertFocus($translate.instant("vnm.ExportToDealer.label.bootbox.alert.success.command"), "", $translate
								.instant("vnm.lable.vnm.name"), "");
						for (var i = 0; i < $scope.listSearchSuccess.length; i++) {
							if ($scope.listSearchSuccess[i].stock_trans_id == $scope.itemSelected.stock_trans_id) {
								$scope.listSearchSuccess[i].status = "4";
							}
						}
						$scope.itemSelected = $scope.listSearchSuccess[0];
						createDataTableOnSearch($scope.listSearchSuccess, 'tableOne');

						$scope.disableDuyet = true;
						for (var i = 0; i < $scope.listStatus.length; i++) {
							if ($scope.listStatus[i].code == '4')
								$scope.model.status = $scope.listStatus[i];
						}

					} else {
						bootboxAlertFocus($translate.instant("vnm.ExportToDealer.label.bootbox.alert.cancel.command") +" "+ result[0], "", $translate
								.instant("vnm.lable.vnm.name"), "");

					}
				});

			};
			$scope.exportCommand = function() {
				$scope.showButton = false;
				$scope.showButtonAccept = true;
				$scope.viewdetailDisabled = false;

			};

			$scope.btnExportCommandOnClick = function() {

				var x = $scope.model.goodsForm.lstTransactionSerial;
				$scope.GoodsTransaction.lstTransSerial = $scope.model.goodsForm.lstTransactionSerial;
				for (var i = 0; i < $scope.lstGoodsTransaction.length; i++) {
					if ($scope.lstGoodsTransaction[i].goodsId == $scope.GoodsTransaction.goodsId) {
						$scope.lstGoodsTransaction[i] = $scope.GoodsTransaction;
					}
				}
				var StockTranObject = {

					"getFromStockTransID" : $scope.itemSelected.stock_trans_id,
					"stockId" : $localStorage.clientContext.sessionStockID,
					"delivererStockId" : $scope.itemSelected.deliverer_stock_id,
					"cmdCode" : $scope.model.receiptCode,
					"reasonID" : $scope.model.reason.reasonId,
					"reasonCode" : $scope.model.reason.code,
					"cmdName" : "",
					"cmdNode" : $scope.model.note,
					"type" : "1",
					"internalStockId" : $scope.model.stockInternalTypeForm.internalStockId,
					"resourceCode" : $scope.model.resourceCodeForm.code,
					"inspectCmdCode" : $scope.model.receiptCode,
					"inspectCmdName" : $localStorage.clientContext.shop.staffName,
					"cmdStaffId" : $localStorage.clientContext.shop.staffId,
					"inspectCmdNote" : $scope.model.note,
					"inspectCmdStaffId" : $localStorage.clientContext.shop.staffId,
					"sessionUserName" : $localStorage.clientContext.username,
					"sessionStockShopID" : $localStorage.clientContext.shop.shopId,
					"lstGoodsTransactionModel" : $scope.lstGoodsTransaction,

				};

				fctExportToDealer.valid(StockTranObject, function(result) {
					if (result != null && result != undefined) {
						if (result.status == '0') {
							bootboxAlertFocus($translate.instant('vnm.ExportToInferior.error.form.strFromSerial'), "",
									$translate.instant("vnm.lable.vnm.name"), "");
							return false;
						} else {
							bootboxConfirm($translate.instant("vnm.ExportToDealer.label.btn.xuatlenh"), $translate
									.instant("vnm.ExportToDealer.label.bootbox.export.command"), $scope.btnExportCommandOK, function() {

								$scope.showButton = false;
								$scope.showButtonAccept = true;
								$scope.viewdetailDisabled = false;
								return;
							});
						}
					}
				});

			}
			
			// Xuất lệnh // Button này đã bỏ rồi. :V Đã tích hợp vào trong business của Duyệt lệnh ( đã đổi tên thành xuất lệnh)
			$scope.btnExportCommandOK = function() {
				/*
				 * var lstGoodsTransaction=[]; for(var i=0; i<$scope.itemSelected.liStransactionDetail.size(); i++) { x={} }
				 */
				$scope.GoodsTransaction.lstTransSerial = $scope.model.goodsForm.lstTransactionSerial;
				for (var i = 0; i < $scope.lstGoodsTransaction.length; i++) {
					if ($scope.lstGoodsTransaction[i].goodsId == $scope.GoodsTransaction.goodsId) {
						$scope.lstGoodsTransaction[i] = $scope.GoodsTransaction;
					}
				}
				var StockTranObject = {

					"getFromStockTransID" : $scope.itemSelected.stock_trans_id,
					"stockId" : $localStorage.clientContext.sessionStockID,
					"delivererStockId" : $scope.itemSelected.deliverer_stock_id,
					"cmdCode" : $scope.model.receiptCode,
					"reasonID" : $scope.model.reason.reasonId,
					"reasonCode" : $scope.model.reason.code,
					"cmdName" : "",
					"cmdNode" : $scope.model.note,
					"type" : "1",
					"internalStockId" : $scope.model.stockInternalTypeForm.internalStockId,
					"resourceCode" : $scope.model.resourceCodeForm.code,
					"inspectCmdCode" : $scope.model.receiptCode,
					"inspectCmdName" : $localStorage.clientContext.shop.staffName,
					"cmdStaffId" : $localStorage.clientContext.shop.staffId,
					"inspectCmdNote" : $scope.model.note,
					"inspectCmdStaffId" : $localStorage.clientContext.shop.staffId,
					"sessionUserName" : $localStorage.clientContext.username,
					"sessionStockShopID" : $localStorage.clientContext.shop.shopId,
					"lstGoodsTransactionModel" : $scope.lstGoodsTransaction,

				};
				overLoading();
				fctExportToDealer.exportCommand(StockTranObject,
						function(result) {
							if (result != null && result == "1") {
								for (var i = 0; i < $scope.listSearchSuccess.length; i++) {
									if ($scope.listSearchSuccess[i].stock_trans_id == $scope.itemSelected.stock_trans_id) {
										$scope.listSearchSuccess[i].status = "3";
									}
								}
								createDataTableOnSearch($scope.listSearchSuccess, 'tableOne');

								$scope.disableDuyet = true;
								for (var i = 0; i < $scope.listStatus.length; i++) {
									if ($scope.listStatus[i].code == '3')
										$scope.model.status = $scope.listStatus[i];
								}

								bootboxAlertFocus($translate.instant("vnm.ExportToDealer.label.btn.xuatlenh.success"), "", $translate
										.instant("vnm.lable.vnm.name"), "");
								$scope.disableDuyet = true;
								$scope.disableXuatLenh = true;
								$scope.disablePrint = false;
								$scope.disablePrintPhieu = false;
								$scope.showButton = true;
								$scope.showButtonAccept = false;
								$scope.viewdetailDisabled = true;
								closeOverLay();
							} else {
								bootboxAlertFocus($translate.instant("vnm.ExportToDealer.label.btn.xuatlenh.error"), "", $translate
										.instant("vnm.lable.vnm.name"), "");
								closeOverLay();
							}

						});
			};

			$scope.btnCancel = function() {
				$scope.showButton = true;
				$scope.showButtonAccept = false;
				$scope.viewdetailDisabled = true;
			}

			// FIx bug giao diện
			function isDate(txtDate) {
				var currVal = txtDate;
				if (currVal == '')
					return false;

				// Declare Regex
				var rxDatePattern = /^(\d{1,2})(\/|-)(\d{1,2})(\/|-)(\d{4})$/;
				var dtArray = currVal.match(rxDatePattern); // is format OK?

				if (dtArray == null)
					return false;

				// Checks for dd/mm/yyyy format.
				dtDay = dtArray[1];
				dtMonth = dtArray[3];
				dtYear = dtArray[5];

				if (dtMonth < 1 || dtMonth > 12)
					return false;
				else if (dtDay < 1 || dtDay > 31)
					return false;
				else if ((dtMonth == 4 || dtMonth == 6 || dtMonth == 9 || dtMonth == 11) && dtDay == 31)
					return false;
				else if (dtMonth == 2) {
					var isleap = (dtYear % 4 == 0 && (dtYear % 100 != 0 || dtYear % 400 == 0));
					if (dtDay > 29 || (dtDay == 29 && !isleap))
						return false;
				}
				return true;
			}

			$scope.onBlurCheckDate = function(dateString) {
				if ($("#fromDate").val() != null && $("#fromDate").val() != "") {
					if (!isDate($("#fromDate").val())) {
						bootboxAlertFocus($translate.instant('Ngày phải có định dạng DD/MM/YYYY'), "", $translate.instant("vnm.lable.vnm.name"), "");
						$("#fromDate").val("");
						var momentObj = moment(new Date());
						var momentString = momentObj.format('DD/MM/YYYY');
						$scope.model.dtFromDate = momentString;
						return;
					}
				}

			}

			// BND

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
						}
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
						}
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

				fctExportToDealer.getGoodsQuantityByCondition(cond, function(result) {
					if (result != null && result != undefined) {
						if (result.status == '0') {
							bootboxAlertFocus(result.messages, $translate.instant("vnm.lable.vnm.name"), "", $translate.instant("vnm.lable.vnm.name"), "");
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
				fctExportToDealer.getInternalStock(function(result6) {
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
					fctExportToDealer.getVctResourceList(sessionValue, function(result5) {
						if (result5 != null && result5 != undefined && result5.status != '0') {
							$scope.lstGoodsResource = result5;
						} else {
							$scope.lstGoodsResource = [];
						}

						fctExportToDealer.getExistedStates(function(result) {
							if (result != null && result != undefined && result.status != '0') {
								$scope.pStatesList = result;
							} else {
								$scope.pStatesList = [];
							}

							fctExportToDealer.getExistedGoodsGroups(function(result1) {
								if (result1 != null && result1 != undefined && result1.status != '0') {
									$scope.pGoodsGroupsList = result1;
								} else {
									$scope.pGoodsGroupsList = [];
								}

								var resourceCodeForm = {
									"code" : $scope.model.resourceCodeForm.code,
									"name" : "",
								}
								fctExportToDealer.getExistedGoods(resourceCodeForm, function(result2) {
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
									fctExportToDealer.getStocksTree(shopStaff, function(result3) {
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
					angular.element($("#tblListStaff_filter").find("input")[0]).focus();
					angular.element($("#tblListShop_filter").find("input")[0]).focus();
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
					"checkWarranty" : "false",
					"radio" : radio,
					"shopId" : $localStorage.clientContext.shopId,
				};

				fctExportToDealer.getGoodsListByCondition(cond, function(result) {
					if (result != null && result != undefined) {
						if (result.status == '0') {
							bootboxAlertFocus(result.messages, "", $translate.instant("vnm.lable.vnm.name"), "", $translate.instant("vnm.lable.vnm.name"), "");
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
					bootboxAlertFocus($translate.instant('vnm.stock_export_to_center.error.form.choose.right.goods'), "", $translate
							.instant("vnm.lable.vnm.name"), "");
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
						}
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
						}
					}
				});
			}

			// button tim kiem serial
			$scope.onddSearchSerialClick = function() {
				if ($scope.model.ddFromSerial == null || $scope.model.ddFromSerial == undefined || $scope.model.ddFromSerial == '') {
					bootboxAlertFocus($translate.instant('vnm.stock_export_to_center.from.serial.empty'), "", $translate.instant("vnm.lable.vnm.name"), "");
					return;
				}
				if ($scope.model.ddToSerial == null || $scope.model.ddToSerial == undefined || $scope.model.ddToSerial == '') {
					bootboxAlertFocus($translate.instant('vnm.stock_export_to_center.to.serial.empty'), "", $translate.instant("vnm.lable.vnm.name"), "");
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

				fctExportToDealer.getStockSerialByCondition(serialSearch,
						function(result) {
							if (result != null && result != undefined) {
								if (result.status == '0') {
									bootboxAlertFocus(result.messages, "", $translate.instant("vnm.lable.vnm.name"), "");
								} else if (result.length > 0) {
									$scope.lstTableSerials = result;
									$scope.fillDataDDTableSerial($scope.lstTableSerials);
								} else {
									var lstNull = [];
									$scope.fillDataDDTableSerial(lstNull);
									bootboxAlertFocus($translate.instant('vnm.stock_export_to_center.error.no.data'), "", $translate
											.instant("vnm.lable.vnm.name"), "");
								}
							} else {
								var lstNull = [];
								$scope.fillDataDDTableSerial(lstNull);
								bootboxAlertFocus($translate.instant('vnm.stock_export_to_center.error.no.data'), "", $translate.instant("vnm.lable.vnm.name"),
										"");
							}
						});
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
				createTableDDSerialSingleSETC(lstNull);
				if ($scope.typeAction == 'EDIT') {
					if ($scope.itemGoodSelected.lstTransactionSerial != null && $scope.itemGoodSelected.lstTransactionSerial != undefined
							&& $scope.itemGoodSelected.lstTransactionSerial.length > 0) {
						createTableDDSerialSingleSETC2($scope.itemGoodSelected.lstTransactionSerial);
						$scope.model.showRemoveSerial = false;
					} else {
						createTableDDSerialSingleSETC2(lstNull);
						$scope.model.showRemoveSerial = true;
					}
				} else if ($scope.typeAction == 'ADD') {
					if ($scope.model.goodsForm != null && $scope.model.goodsForm != undefined && $scope.model.goodsForm.lstTransactionSerial != null
							&& $scope.model.goodsForm.lstTransactionSerial != undefined && $scope.model.goodsForm.lstTransactionSerial.length > 0) {
						createTableDDSerialSingleSETC2($scope.model.goodsForm.lstTransactionSerial);
						$scope.model.showRemoveSerial = false;
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

			
			// Upload FIle
			var uploaderListDetail = $scope.uploaderListDetail = new FileUploader({
				url : eim_url + '/epos/inventory/getListSerianFromFile'
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
			var zIndexmodalStockDetail = $("#modalStockDetail").css("z-index");
			var zIndexDialogModal = $("#modalAddSerial").css("z-index");
			$scope.uploadAllFile = function(uploaderIn) {
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

							overLoading();

							var serialSearch = {
								"goodsId" : $scope.model.goodsForm.goodsId,
								"stateId" : $scope.model.statesForm.stateId,
								"internalStockId" : $scope.model.stockInternalTypeForm.internalStockId,
								"stockId" : $localStorage.clientContext.sessionStockID,
								"lstTransSerial" : $scope.fileSuccess,
							}
							// check
							fctExportToDealer.getSerialListInStock(serialSearch, function(result) {
								if (result == null || result == undefined || result.status == '0') {
									message = result.messages;
									App.unblockUI("#contentMain");
									bootboxConfirm($translate.instant("vnm.ExportStockToPartner.error.import.serial.title"), $translate
											.instant("vnm.ExportStockToPartner.error.import.serial.message"), $scope.btnFSaveErrorFileConfirmOK,
											$scope.btnFSaveErrorFileConfirmNOK);
								} else {
									$scope.lstTableSerialsSETCTmp = []
									Array.prototype.push.apply($scope.lstTableSerialsSETCTmp, $scope.fileSuccess);
									$scope.fillDataDDTableSerialSETC($scope.lstTableSerialsSETCTmp, 'tblSerialSingle');
									$scope.hideModalFunction("modalAddSerial");
									$scope.disabledUploadAllFile = true;
									bootboxAlertFocus($translate.instant('vnm.dialogButtonDetail.success').replace('%quantity', $scope.fileSuccess.length), "",
											$translate.instant("vnm.lable.vnm.name"), "");
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

			$scope.checkBarCode = function(item) {
				if (item.typeCheckBox == true) {
					$scope.isNotSearch = true;
				} else {
					$scope.isNotSearch = false;
				}
			}

			$scope.addFile = function() {
				if ('' === $scope.model.linkFile || undefined == $scope.model.linkFile) {
					bootboxAlertFocus($translate.instant('vnm.dialogButtonDetail.inputFile'), "", $translate.instant("vnm.lable.vnm.name"), "");
					return;
				} else {
					if ($scope.fileSuccess.length > 0) {
						var maxSerial = $scope.fileSuccess[0].fromSerial;
						var minSerial = $scope.fileSuccess[0].fromSerial;
						for (var i = 0; i < $scope.fileSuccess.length; i++) {
							if (maxSerial.localeCompare($scope.fileSuccess[i].fromSerial) < 0) {
								maxSerial = $scope.fileSuccess[i].fromSerial;
							}
							if (minSerial.localeCompare($scope.fileSuccess[i].fromSerial) > 0) {
								minSerial = $scope.fileSuccess[i].fromSerial;
							}
						}
						$scope.model.fromNumber = minSerial;
						$scope.model.toNumber = maxSerial;
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
				attachFile.fileName = "Template_Upload_Serial.xlsx";
				attachFile.folder = "Template_Upload_Serial.xlsx";
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

			// END UPFILe
			// Button tim kiem
			$scope.btnSearchSerial = function() {
				if ($scope.model.fromSerial == null || $scope.model.fromSerial == undefined || $scope.model.fromSerial == '') {
					bootboxAlertFocus($translate.instant('vnm.stock_export_to_center.from.serial.empty'), "", $translate.instant("vnm.lable.vnm.name"), "");
					return;
				}
				if ($scope.model.toSerial == null || $scope.model.toSerial == undefined || $scope.model.toSerial == '') {
					bootboxAlertFocus($translate.instant('vnm.stock_export_to_center.to.serial.empty'), "", $translate.instant("vnm.lable.vnm.name"), "");
					return;
				}
				var serialSearch = {
					"goodsId" : $scope.model.goodsForm.goodsId,
					"stateId" : $scope.model.statesForm.stateId,
					"internalStockId" : $scope.model.stockInternalTypeForm.internalStockId,
					"fromSerial" : $scope.model.fromSerial,
					"toSerial" : $scope.model.toSerial,
					"quantity" : $scope.model.number,
					"isCheckQtyIssue" : $scope.model.goodQuantity,
					"stockId" : $localStorage.clientContext.sessionStockID,
					"typeSerialSearch" : "single",
				}

				fctExportToDealer.getStockSerialByCondition(serialSearch,
						function(result) {
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
									bootboxAlertFocus($translate.instant('vnm.stock_export_to_center.error.no.data'), "", $translate
											.instant("vnm.lable.vnm.name"), "");
								}
							} else {
								var lstNull = [];
								$scope.fillDataDDTableSerialSETC(lstNull, 'tblSerialSingle');
								bootboxAlertFocus($translate.instant('vnm.stock_export_to_center.error.no.data'), "", $translate.instant("vnm.lable.vnm.name"),
										"");
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
				fctExportToDealer.getSingelSerialInStock(serialSearch,
						function(result) {
							if (result.status == '0' && result.status != 'undefined') {
								App.unblockUI("#contentMain");
								bootboxAlertFocus(status + " " + $translate.instant('vnm.messages.error.connection'), "", $translate
										.instant("vnm.lable.vnm.name"), "");

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
				for (var i = 0; i < $scope.lstSerialSETCTmp.length; i++) {
					for (var j = 0; j < $scope.lstSerialSETC.length; j++) {
						if ($scope.lstSerialSETC[j].fromSerial == $scope.lstSerialSETCTmp[i].fromSerial) {
							bootboxAlertFocus("Số Serial " + $scope.lstSerialSETCTmp[i].fromSerial + " đã có trong danh sách được chuyển", "", $translate
									.instant("vnm.lable.vnm.name"), "");
							return;
						}
					}
				}

				if ($scope.lstSerialSETCTmp.length == 0) {
					bootboxAlertFocus("Chưa chọn Serial", "", $translate.instant("vnm.lable.vnm.name"), "");
					return;
				} else {
					for (var i = 0; i < $scope.lstSerialSETCTmp.length; i++) {
						$scope.lstSerialSETC.push($scope.lstSerialSETCTmp[i]);
						var index = $scope.lstTableSerialsSETCTmp.indexOf($scope.lstSerialSETCTmp[i]);
						$scope.lstTableSerialsSETCTmp.splice(index, 1);
					}
					$scope.lstSerialSETCTmp = [];
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
				for (var i = 0; i < $scope.lstSerialSETCTmp.length; i++) {
					for (var j = 0; j < $scope.lstSerialSETC.length; j++) {
						if ($scope.lstSerialSETC[j].fromSerial == $scope.lstSerialSETCTmp[i].fromSerial) {
							bootboxAlertFocus("Số Serial " + $scope.lstSerialSETCTmp[i].fromSerial + " đã có trong danh sách được chuyển", "", $translate
									.instant("vnm.lable.vnm.name"), "");
							return;
						}
					}
				}
				Array.prototype.push.apply($scope.lstSerialSETC, $scope.lstTableSerialsSETCTmp);
				$scope.lstTableSerialsSETCTmp = [];
				$scope.lstSerialSETCTmp = [];
				$scope.fillDataDDTableSerialSETC($scope.lstTableSerialsSETCTmp);
				$scope.fillDataDDTableSerialSETC2($scope.lstSerialSETC);
				$scope.model.showAddSerial = true;
				$scope.model.showRemoveSerial = false;
			}

			// Xoa serial
			$scope.removeSerial = function() {
				if ($scope.lstSerialSETCTmp.length == 0) {
					bootboxAlertFocus("Chưa chọn Serial", "", $translate.instant("vnm.lable.vnm.name"), "");
					return;
				} else {
					for (var i = 0; i < $scope.lstSerialSETCTmp.length; i++) {
						var index = $scope.lstSerialSETC.indexOf($scope.lstSerialSETCTmp[i]);
						$scope.lstTableSerialsSETCTmp.push($scope.lstSerialSETCTmp[i]);
						$scope.lstSerialSETC.splice(index, 1);
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
				Array.prototype.push.apply($scope.lstTableSerialsSETCTmp, $scope.lstSerialSETC);
				$scope.lstSerialSETC = [];
				$scope.fillDataDDTableSerialSETC($scope.lstTableSerialsSETCTmp);
				$scope.fillDataDDTableSerialSETC2($scope.lstSerialSETC);
				$scope.model.showRemoveSerial = true;
				$scope.model.showAddSerial = false;
			}
			$scope.btnGetOne = function() {

			}

			$scope.btnAcceptClick = function() {
				if ($scope.lstSerialSETC == null || $scope.lstSerialSETC == undefined || $scope.lstSerialSETC.length <= 0) {
					bootboxAlertFocus($translate.instant("vnm.stock_export_to_center.must.choose.serial"), "", $translate.instant("vnm.lable.vnm.name"), "");
					return;
				}
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
				$scope.hideModalFunction("modalStockDetail");
			}

			$scope.btnBackSerial = function() {
				if ($scope.lstSerialSETC.length > 0) {
					bootboxConfirm3($translate.instant("vnm.ExportStockToPartner.confirm.add.serial.title"), $translate
							.instant("vnm.ExportStockToPartner.confirm.add.serial.message"), $scope.btnFBackOnclickConfirmOK,
							$scope.btnFBackOnclickConfirmCancel, $scope.btnFBackOnclickConfirmNOK);
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

			$scope.btnFBackOnclickConfirmOK = function() {
				$scope.model.mdnNumberDetail = $scope.lstSerialSETC.length;
				if ($scope.model.goodsForm != null && $scope.model.goodsForm != undefined && $scope.model.goodsForm.goodsId != '') {
					$scope.model.goodsForm.lstTransactionSerial = $scope.lstSerialSETC;
				} else {
					$scope.model.goodsForm.lstTransactionSerial = [];
				}
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
					"bSort" : true,
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
						}
					}
				});

				oTableDDSerialSingleSETC.on("select", function(e, dt, type, indexes) {
					$scope.lstSerialSETCTmp = [];
					var rowData = oTableDDSerialSingleSETC.rows(indexes).data().toArray();
					for (var i = 0; i < rowData.length; i++) {
						$scope.lstSerialSETCTmp.push(rowData[i]);
					}

				});

			}
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
					"bSort" : true,
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
						}
					}
				});

				oTableDDSerialSingleSETC2.on("select", function(e, dt, type, indexes) {
					$scope.lstSerialSETCTmp = [];
					var rowData = oTableDDSerialSingleSETC2.rows(indexes).data().toArray();
					for (var i = 0; i < rowData.length; i++) {
						$scope.lstSerialSETCTmp.push(rowData[i]);
					}
				});
				$scope.checkBarCode = function(item) {
					if (item.typeCheckBox == true) {
						$scope.isNotSearch = true;
					} else {
						$scope.isNotSearch = false;
					}
				}

			}

			/// THêm mới
			//create table danh sach hang hoa dich vu
			$scope.goodsServiceSelected = {}; // Mat hang chon tren bang
			function createTableListGoodsService(dataItem) {
				oTableItemFGoodsService = $('#tableFGoodsService').DataTable({
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
					"scrollY" : 200,
					"columns" : [ {
						"mData" : "name",
						"render" : function(data, type, row) {
							x = data == null ? '' : data;
							return "<div data-toggle='tooltip' class='text-wrap width-100'title='" + x + "'>" + x + "</div>";
						}
					}, {
						"mData" : "quantity",
						"render" : function(data, type, row) {
							x = data == null ? '' : data;
							return "<div data-toggle='tooltip' class='text-wrap width-100' title='" + x + "'>" + x + "</div>";
						}
					}, {
						"mData" : "price",
						"render" : function(data, type, row) {
							x = FormatNumber(data) == null ? '' : FormatNumber(data);
							return "<div data-toggle='tooltip' class='text-wrap width-100' title='" + x + "'>" + x + "</div>";
						}
					}, {
						"mData" : "discount",
						"render" : function(data, type, row) {
							x = FormatNumber(data) == null ? '' : FormatNumber(data);
							return "<div data-toggle='tooltip' class='text-wrap width-100' title='" + x + "'>" + x + "</div>";
						}
					}, {
						"mData" : "promotion",
						"render" : function(data, type, row) {
							x = FormatNumber(data) == null ? '' : FormatNumber(data);
							return "<div data-toggle='tooltip' class='text-wrap width-100' title='" + x + "'>" + x + "</div>";
						}
					}, {
						"mData" : "unit",
						"render" : function(data, type, row) {
							//x = data == null ? '' : $scope.getUnitName(data);
							x = data == null ? '' : data;
							return "<div data-toggle='tooltip' class='text-wrap width-100' title='"+x+"'>" + x + "</div>";
						}
					}, {
						"mData" : "tato",
						"render" : function(data, type, row) {
							x = FormatNumber(data) == null ? '' : FormatNumber(data);
							return "<div data-toggle='tooltip' class='text-wrap width-100' title='" + x + "'>" + x + "</div>";
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
						}
					}
				});

				$('#tableFGoodsService tbody').off().on('click', 'tr', function(e, dt, type, indexes) {
					$(this).removeClass('selected');
					var rowData = oTableItemFGoodsService.row(this).data();
					$scope.selectedServiceGoods=rowData;
					$scope.loadSerialsGoods($scope.selectedServiceGoods);
					oTableItemFGoodsService.$('tr.selected').removeClass('selected');
					$(this).addClass('selected');

				});
			}
			//create table thong tin chi tiet hang hoa
			function createTableListGoodsSerial(dataItem) {
				oTableItemFGoodsSerial = $('#tableFGoodsSerial').DataTable({
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
					"scrollY" : 240,
					"order" : [],
					"select" : {
						style : 'single',
						info : false
					},
					"scrollX" : true,
					"scrollY" : 200,
					"columns" : [ {
						"mData" : "serial",
						"render" : function(data, type, row) {
							x = data == null ? '' : data;
							return "<div data-toggle='tooltip' class='text-wrap width-200' title='" + x + "'>" + x + "</div>";
						}
					}, {
						"mData" : "create_date",
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
						}
					}
				});

				$('#tableFGoodsSerial tbody').off().on('click', 'tr', function(e, dt, type, indexes) {
					$(this).removeClass('selected');
					var rowData = oTableItemFGoodsSerial.row(this).data();
					$scope.goodsSerialSelected=rowData;
					oTableItemFGoodsSerial.$('tr.selected').removeClass('selected');
					$(this).addClass('selected');
				});
			}
			
			$scope.loadSerialsGoods=function(item)
			{
				overLoading();
				var data=item.trans_detail_id;
				fctExportToDealer.onSearchSerials(data,function(result) {
					if (result != null && result.length > 0) {
						$scope.listSerials=result;
						closeOverLay();
						createTableListGoodsSerial($scope.listSerials,'tableFGoodsSerial');

					}
					else
					{
						closeOverLay();
						var isNull=[];
						createTableListGoodsSerial(isNull,'tableFGoodsSerial');
					}
				});
			};
			
			// format Number
			function FormatNumber(str) {
				var strTemp = str;
					/*return strTemp;*/
				strResult = "";
				for (var i = 0; i < strTemp.length; i++)
					strTemp = strTemp.replace(",", "");
				var m = strTemp.lastIndexOf(".");
				if (-1 == m) {
					for (var i = strTemp.length; i >= 0; i--) {
						if (strResult.length > 0 && (strTemp.length - i - 1) % 3 == 0)
							strResult = "," + strResult;
						strResult = strTemp.substring(i, i + 1) + strResult;
					}
				} else {
					var strphannguyen = strTemp.substring(0, strTemp.lastIndexOf("."));
					var strphanthapphan = strTemp.substring(strTemp.lastIndexOf("."),
							strTemp.length);
					var tam = 0;
					for (var i = strphannguyen.length; i >= 0; i--) {

						if (strResult.length > 0 && tam == 4) {
							strResult = "," + strResult;
							tam = 1;
						}

						strResult = strphannguyen.substring(i, i + 1) + strResult;
						tam = tam + 1;
					}
					strResult = strResult + strphanthapphan;
				}
				return strResult;
			};
			
			
			

		});
