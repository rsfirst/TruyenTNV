app_vnm.factory('fctFormEnqueryWar', function($http, $translate) {
	return {
		onSearch : function(data, callback) {
			var url = eim_url + "/epos/sales/FormEnqueryWar/onSearch";
			$http.post(url, data).success(callback).error(function(data, status, headers, config) {
				closeOverLay();
				bootboxAlertFocus(status + " " + $translate.instant('vnm.messages.error.connection'), "", $translate.instant("vnm.lable.vnm.name"), "");
			});
		},
		getApDomain : function(data, callback) {
			var url = eim_url + "/epos/sales/FormEnqueryWar/getApdomain";
			$http.post(url, data).success(callback).error(function(data, status, headers, config) {
				closeOverLay();
				bootboxAlertFocus(status + " " + $translate.instant('vnm.messages.error.connection'), "", $translate.instant("vnm.lable.vnm.name"), "");
			});
		},
		getEnqueryGoodsList : function(callback) {
			var url = eim_url + "/epos/sales/FormEnqueryWar/getEnqueryGoodsList";
			$http.post(url).success(callback).error(function(data, status, headers, config) {
				closeOverLay();
				bootboxAlertFocus(status + " " + $translate.instant('vnm.messages.error.connection'), "", $translate.instant("vnm.lable.vnm.name"), "");
			});
		},
		//Lấy người xử lý : :v
		getLowProcessor : function(data, callback) {
			var url = eim_url + "/epos/inventory/RenewWarrantyNumber/getLowStaff";
			$http.post(url, data).success(callback).error(function(data, status, header, config) {
				closeOverLay();
				bootboxAlertFocus(status + "" + $translate.instant('vnm.messages.error.connection'), "", $translate.instant("vnm.lable.vnm.name"), "");
			});
		},
		//LOad Detail warranty

		onSearchWarrantyDetail : function(data, callback) {
			var url = eim_url + "/epos/sales/FormEnqueryWar/searchWarrantyDetail";
			$http.post(url, data).success(callback).error(function(data, status, header, config) {
				closeOverLay();
				bootboxAlertFocus(status + "" + $translate.instant('vnm.messages.error.connection'), "", $translate.instant("vnm.lable.vnm.name"), "");
			});
		},
		
		//IN
		exportFile : function(data, callback) {
			var url = eim_url + "/epos/reportSearchInfomationShopAndStaff/exportFile?reportInput=" + data;
			$http.get(url, {
				responseType : 'arraybuffer'
			}).success(callback).error(function(data, status, headers, config) {
				App.unblockUI("#contentMain");
				 bootboxAlertFocus(status + " " + $translate.instant('vnm.messages.error.connection'),"",$translate.instant("vnm.lable.vnm.name"),"");
			});
		},

		getTemplateValue : function(data, callback) {
			var url = eim_url + "/epos/sales/FormEnqueryWar/getTemPlateValue";
			$http.post(url, data).success(callback).error(function(data, status, headers, config) {
				closeOverLay();
				 bootboxAlertFocus(status + " " + $translate.instant('vnm.messages.error.connection'),"",$translate.instant("vnm.lable.vnm.name"),"");
			});
		},
		updatePrintNumber : function(data, callback) {
			var url = eim_url + "/epos/sales/FormEnqueryWar/updatePrintOk";
			$http.post(url, data).success(callback).error(function(data, status, headers, config) {
				closeOverLay();
				 bootboxAlertFocus(status + " " + $translate.instant('vnm.messages.error.connection'),"",$translate.instant("vnm.lable.vnm.name"),"");
			});
		},
	}

})

app_vnm.controller('FormEnqueryWarController', function($scope, $rootScope, $translate, $compile, $timeout, $uibModal, $location, $window, FileUploader,
		$filter, $http, NgTableParams, $localStorage, fctFormEnqueryWar) {

	$scope.model = {};
	$scope.model.txtWarrantyNo = "";
	$scope.model.txtSerial = "";
	$scope.listUnit = [];
	$scope.listStatus = [];
	$scope.listLowProcessor = [];

	$scope.getLowProcessor = function() {
		var data = $localStorage.clientContext.shop.shopId;
		fctFormEnqueryWar.getLowProcessor(data, function(result) {
			if (result != null && result.length > 0) {
				$scope.listLowProcessor = result;
				closeOverLay();
				

			}

		});
	}
	$scope.getCboUnit = function() {
		var data = "05";
		fctFormEnqueryWar.getApDomain(data, function(result) {
			if (result != null && result.length > 0) {
				$scope.listUnit = result;
				closeOverLay();
				$scope.getLowProcessor();
			}

		});
	};
	$scope.getStatus = function() {
		var data = "38";
		fctFormEnqueryWar.getApDomain(data, function(result) {
			if (result != null && result.length > 0) {
				$scope.listStatus = result;
				closeOverLay();
				$scope.getCboUnit();
			}

		});
	};
	$scope.getEnqueryGoodsList = function() {
		overLoading();
		fctFormEnqueryWar.getEnqueryGoodsList(function(result) {
			if (result != null && result.length > 0) {
				$scope.listEnqueryGoodsList = result;
				closeOverLay();
				$scope.getStatus();
			}

		});
	}
	$scope.initData = function() {
		$scope.disabledPrint=true;
		$scope.disabledDetail=true;
		$scope.getEnqueryGoodsList();
	}

	//Load default
	$scope.initData();
	//TÌm kiếm
	
	$scope.resetForm=function()
	{
		$scope.model.txtReceipt='';
		$scope.model.dtProcessDate='';
		$scope.model.result='';
		$scope.model.note='';
		$scope.model.warPeriod = '';
		$scope.model.goodsDescription = '';
		$scope.model.goodsWarranty = '';
		$scope.model.unitName='';
		$scope.model.enqueryGoods='';
		$scope.model.assignStaff={};
		
		$scope.disabledPrint=true;
		var isNull=[];
		
		createTableOnSearch(isNull);
		createTableWarrantyHistory(isNull);
		
	}
	$scope.onSearch = function() {
		if (($scope.model.txtWarrantyNo == "" || $scope.model.txtWarrantyNo == undefined)
				&& ($scope.model.txtSerial == "" || $scope.model.txtSerial == undefined)) {
			bootboxAlertFocus($translate.instant('vnm.FormEnqueryWar.label.alert.request'), "", $translate.instant("vnm.lable.vnm.name"), "");
			return;

		} else {

			var data = {
				"warrantyNo" : $scope.model.txtWarrantyNo,
				"serial" : $scope.model.txtSerial,
				"shopId" : $localStorage.clientContext.shop.shopId,
				"parentSearch" : ""
			}
			overLoading();
			fctFormEnqueryWar.onSearch(data, function(result) {
				if (result != null && result.length > 0) {
					$scope.listWarranty = result;
					$scope.selectRow=$scope.listWarranty[0];
					createTableOnSearch($scope.listWarranty);
					$scope.fillDetailValue($scope.listWarranty[0]);
					closeOverLay();

				}
				else
					{
						closeOverLay();
						bootboxAlertFocus($translate.instant('vnm.FormEnqueryWar.label.alert.errordata'), "", $translate.instant("vnm.lable.vnm.name"), "");	
						$scope.resetForm();
						return;
					}
			});
		}
	};

	$scope.getStatusName = function(statusId) {
		var statusName = "";
		for (var i = 0; i < $scope.listStatus.length; i++) {
			if (statusId == $scope.listStatus[i].code) {
				statusName = $scope.listStatus[i].name;
				break;
			}
		}
		return statusName;

	}
	function createTableOnSearch(dataItem) {

		oTableItemXXX = $('#tableOnSearch').DataTable({
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
			"className" : "text-center",
			"bSort" : true,
			"info" : true,
			"order" : [],
			"scrollX" : true,
			"scrollX" : true,
			"scrollY" : 500,
			"columns" : [ {
				"mData" : "warrantyNo",
				"render" : function(data, type, row) {
					x = data == null ? '' : data;
					return "<div data-toggle='tooltip' class='text-wrap width-150' title='" + x + "'>" + x + "</div>";
				}
			}, {
				"mData" : "goodsEsn",
				"render" : function(data, type, row) {
					x = data == null ? '' : data;
					return "<div data-toggle='tooltip' class='text-wrap width-150' title='" + x + "'>" + x + "</div>";
				}
			}, {
				"mData" : "effectDate",
				"render" : function(data, type, row) {
					x = data == null ? '' : data;
					return "<div data-toggle='tooltip' class='text-wrap width-150' title='" + x + "'>" + x + "</div>";
				}
			}, {
				"mData" : "status",
				"render" : function(data, type, row) {
					x = $scope.getStatusName(data) == null ? '' : $scope.getStatusName(data);
					return "<div data-toggle='tooltip' class='text-wrap width-150' title='" + x + "'>" + x + "</div>";
				}
			}, {
				"mData" : "serial1",
				"render" : function(data, type, row) {
					x = data == null ? '' : data;
					return "<div data-toggle='tooltip' class='text-wrap width-150' title='" + x + "'>" + x + "</div>";
				}
			}, {
				"mData" : "serial2",
				"render" : function(data, type, row) {
					x = data == null ? '' : data;
					return "<div data-toggle='tooltip' class='text-wrap width-150' title='" + x + "'>" + x + "</div>";
				}
			}, {
				"mData" : "serial3",
				"render" : function(data, type, row) {
					x = data == null ? '' : data;
					return "<div data-toggle='tooltip' class='text-wrap width-150' title='" + x + "'>" + x + "</div>";
				}
			}, {
				"mData" : "serial4",
				"render" : function(data, type, row) {
					x = data == null ? '' : data;
					return "<div data-toggle='tooltip' class='text-wrap width-150' title='" + x + "'>" + x + "</div>";
				}
			}, {
				"mData" : "serial5",
				"render" : function(data, type, row) {
					x = data == null ? '' : data;
					return "<div data-toggle='tooltip' class='text-wrap width-150' title='" + x + "'>" + x + "</div>";
				}
			},

			],

			"oLanguage" : {
				"sInfo" : TOTAL_RECORD + "_TOTAL_",
				"sEmptyTable" : "<span id='emptyTableSpan'>" + DATA_TABLE_NOT_FOUND + "</span>",
				"sZeroRecords" : "<span id='emptyTableSpan'>" + DATA_TABLE_NOT_FOUND + "</span>",
				"sInfoEmpty" : "",
				"sInfoFiltered" : "",
				"sLengthMenu" : "_MENU_",
				"sSearch" : LABEL_SEARCH,
				"oPaginate" : {
					"sFirst" : FIRST_PAGE,
					"sLast" : LAST_PAGE,
					"sNext" : NEXT_PAGE,
					"sPrevious" : PREV_PAGE
				}
			},
			"createdRow" : function(row, data, rowIndex) {

				if (rowIndex == 0 || rowIndex == '0') {
					$(row).addClass('selected');
				}
			}
		});

		$('#tableOnSearch tbody').off().on('click', 'tr', function(e, dt, type, indexes) {
			$(this).removeClass('selected');
			var rowData = oTableItemXXX.row(this).data();
			$scope.selectRow=rowData;
			$scope.fillDetailValue($scope.selectRow);
			oTableItemXXX.$('tr.selected').removeClass('selected');
			$(this).addClass('selected');

		});

	}
	;

	//ENd TÌm kiếm

	// Load fill Detail
	$scope.resulDetail = {};
	$scope.fillDetailValue = function(row) {
		
		if(row.status=="0"){
			$scope.disabledPrint=true;
		}
		else{
			$scope.disabledPrint=false;
		}
		var data = {
			"warrantyId" : row.warrantyId,
		}
		overLoading();
		fctFormEnqueryWar.onSearchWarrantyDetail(data, function(result) {
			if (result != null) {
				closeOverLay();
				$scope.resultDetail = result;

				if ($scope.resultDetail.listGoodsInforMation.length > 0) {
					for (var i = 0; i < $scope.listEnqueryGoodsList.length; i++) {
						if ($scope.listEnqueryGoodsList[i].goodsCode == $scope.resultDetail.listGoodsInforMation[0].goodCode) {
							$scope.model.enqueryGoods = $scope.listEnqueryGoodsList[i];
							break;
						}

					}
					for (var i = 0; i < $scope.listUnit.length; i++) {
						if ($scope.listUnit[i].code == $scope.resultDetail.listGoodsInforMation[0].unit) {
							$scope.model.unitName = $scope.listUnit[i].name;
							break;
						}
					}
					$scope.model.warPeriod = $scope.resultDetail.listGoodsInforMation[0].warPeriod;
					$scope.model.goodsDescription = $scope.resultDetail.listGoodsInforMation[0].goodsDescription;
					$scope.model.goodsWarranty = $scope.resultDetail.listGoodsInforMation[0].gooodsWarranty;
					if($scope.resultDetail.listWarrantyHistory.length>0)
						{
						createTableWarrantyHistory($scope.resultDetail.listWarrantyHistory);
						$scope.fillWarrantyHistoryDetail($scope.resultDetail.listWarrantyHistory[0]);
						}
					
					
				} else {
					closeOverLay();
					bootboxAlertFocus($translate.instant('vnm.FormEnqueryWar.label.errordata2'), "", $translate.instant("vnm.lable.vnm.name"),
							"");
				
					

				}
			}
		});
	};

	function createTableWarrantyHistory(dataItem) {

		oTableItemXXXX = $('#tableWarrantyHistory').DataTable({
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
			"className" : "text-center",
			"bSort" : true,
			"info" : true,
			"order" : [],

			"scrollX" : true,
			"scrollY" : 120,
			"columns" : [ {
				"mData" : "receiveDate",
				"render" : function(data, type, row) {
					x = data == null ? '' : data;
					return "<div data-toggle='tooltip' class='text-wrap width-150' title='" + x + "'>" + x + "</div>";
				}
			}, {
				"mData" : "name",
				"render" : function(data, type, row) {
					x = data == null ? '' : data;
					return "<div data-toggle='tooltip' class='text-wrap width-150' title='" + x + "'>" + x + "</div>";
				}
			}, {
				"mData" : "customer",
				"render" : function(data, type, row) {
					x = data == null ? '' : data;
					return "<div data-toggle='tooltip' class='text-wrap width-150' title='" + x + "'>" + x + "</div>";
				}
			}, {
				"mData" : "name1",
				"render" : function(data, type, row) {
					x = data == null ? '' : data;
					return "<div data-toggle='tooltip' class='text-wrap width-150' title='" + x + "'>" + x + "</div>";
				}
			}, {
				"mData" : "estimateDate",
				"render" : function(data, type, row) {
					x = data == null ? '' : data;
					return "<div data-toggle='tooltip' class='text-wrap width-150' title='" + x + "'>" + x + "</div>";
				}
			}, {
				"mData" : "returnDate",
				"render" : function(data, type, row) {
					x = data == null ? '' : data;
					return "<div data-toggle='tooltip' class='text-wrap width-150' title='" + x + "'>" + x + "</div>";
				}
			},

			],

			"oLanguage" : {
				"sInfo" : TOTAL_RECORD + "_TOTAL_",
				"sEmptyTable" : "<span id='emptyTableSpan'>" + DATA_TABLE_NOT_FOUND + "</span>",
				"sZeroRecords" : "<span id='emptyTableSpan'>" + DATA_TABLE_NOT_FOUND + "</span>",
				"sInfoEmpty" : "",
				"sInfoFiltered" : "",
				"sLengthMenu" : "_MENU_",
				"sSearch" : LABEL_SEARCH,
				"oPaginate" : {
					"sFirst" : FIRST_PAGE,
					"sLast" : LAST_PAGE,
					"sNext" : NEXT_PAGE,
					"sPrevious" : PREV_PAGE
				}
			},
			"createdRow" : function(row, data, rowIndex) {

				if (rowIndex == 0 || rowIndex == '0') {
					$(row).addClass('selected');
				}
			}
		});

		$('#tableWarrantyHistory tbody').off().on('click', 'tr', function(e, dt, type, indexes) {
			$(this).removeClass('selected');
			var rowData = oTableItemXXXX.row(this).data();
			$scope.selectedHistory=rowData;
			$scope.fillWarrantyHistoryDetail($scope.selectedHistory);
			oTableItemXXXX.$('tr.selected').removeClass('selected');
			$(this).addClass('selected');

		});

	};
	
	$scope.fillWarrantyHistoryDetail=function(rowHistory)
	{
		$scope.model.txtReceipt=rowHistory.receiverNote;
		$scope.model.dtProcessDate=rowHistory.resultDate;
		$scope.model.result=rowHistory.resultNote;
		$scope.model.note=rowHistory.otherNote;
		for(var i=0; i<$scope.listLowProcessor.length; i++)
			{
				if(rowHistory.assignStaff==$scope.listLowProcessor[i].code)
					{
						$scope.model.assignStaff=$scope.listLowProcessor[i];
						break;
					}
			}
		
	}
	
	//CHức năng in
	$scope.listValue=[];
	$scope.onPrint=function()
	{
		bootboxConfirm($translate.instant("vnm.lable.vnm.name"), $translate.instant('vnm.FormEnqueryWar.label.comfirm.request'), function() {
			$scope.onPrintSuccess()
		}, function() {
			return;
		})
	};
	$scope.onPrintSuccess=function()
	{
		var x=$scope.selectRow;
		var templateValueSearch = {
				"warrantyNo" : 	$scope.selectRow.warrantyNo,
				"serial" : $scope.selectRow.goodsEsn,
				"shopName":$localStorage.clientContext.shop.shopName,
				"address": $localStorage.clientContext.shop.address,
			}
			overLoading();
			fctFormEnqueryWar.getTemplateValue(templateValueSearch, function(result) {
				if (result != null && result != undefined) {
					if (result.status == '0') {
						 bootboxAlertFocus(result.messages,"",$translate.instant("vnm.lable.vnm.name"),"");
						 closeOverLay();
					} else if (result.length > 0) {
						$scope.listValue=result;
						var templateValue = result[0];
						var strDeliverStockName = "";
						if (templateValue.deliveyShopCode != null && templateValue.deliveyShopCode != undefined && templateValue.deliveyShopCode != '') {
							strDeliverStockName = templateValue.deliveyShopCode + " - " + templateValue.deliveyShopName;
						}												
						var dt=moment(templateValue.effectDate1,"DD/MM/YYYY");
						var endDate2= dt.subtract(6, 'months').format('DD/MM/YYYY');												
						var warrantyNumber="VNMOBILE"+templateValue.warrantyNo.substring(8, 16);
						var ReportInput = {
							"warrantyNumber":warrantyNumber,
							"goodsName":templateValue.name,
							"serial":templateValue.goodsEsn,
							"endDateWar":templateValue.effectDate1,
							"endDateWar2":endDate2,
							"importInfor":templateValue.importInfor,							
							"fileTempName" : 'WarrantyReceiptPdf',
							"fileType" : '.pdf'
						};

						fctFormEnqueryWar.exportFile(encodeURI(JSON.stringify(ReportInput)), function(result, status, header, config) {
							if (result.status == '0' && result.status != 'undefined') {
								 closeOverLay();
								 bootboxAlertFocus($translate.instant('vnm.messages.validate.prepaid.server.' + result.messages),"",$translate.instant("vnm.lable.vnm.name"),"");
							} else {
								 closeOverLay();
								download(new Blob([ result ]), header('MyDownloadFile') + header('FileType'), header('Content-Type'));
								var data2=$scope.listValue;
								fctFormEnqueryWar.updatePrintNumber(data2, function(result) {
									if (result =="1") {
										closeOverLay();
									}
									else{
										closeOverLay();
									}

								});
							}
						});
						
						
						
					}
				}
			});
	}

});
