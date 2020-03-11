app_vnm.factory('fctFormEnquerySerial', function($http, $translate) {
	return {
		getEnqueryGoods : function(callback) {
			var url = eim_url + "/epos/inventory/FormEnquerySerial/getEnqueryGoods";
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

		loadStatuss : function(data, callback) {
			var url = eim_url + "/epos/getValueDomainByType";
			$http.post(url, data).success(callback).error(function(data, status, headers, config) {
				closeOverLay();
				bootboxAlertFocus(status + " " + $translate.instant('vnm.messages.error.connection'), "", $translate.instant("vnm.lable.vnm.name"), "");
			});
		},

		getChildsStockTree : function(data, callback) {
			var url = eim_url + "/epos/inventory/FormEnquerySerial/getChildsStockTree";
			$http.post(url, data).success(callback).error(function(data, status, headers, config) {
				closeOverLay();
				bootboxAlertFocus(status + " " + $translate.instant('vnm.messages.error.connection'), "", $translate.instant("vnm.lable.vnm.name"), "");
			});
		},

		enquerySerial : function(data, callback) {
			var url = eim_url + "/epos/inventory/FormEnquerySerial/enquerySerial";
			$http.post(url, data).success(callback).error(function(data, status, headers, config) {
				closeOverLay();
				bootboxAlertFocus(status + " " + $translate.instant('vnm.messages.error.connection'), "", $translate.instant("vnm.lable.vnm.name"), "");
			});
		},

		enqueryTransSerial : function(data, callback) {
			var url = eim_url + "/epos/inventory/FormEnquerySerial/enqueryTransSerial";
			$http.post(url, data).success(callback).error(function(data, status, headers, config) {
				closeOverLay();
				bootboxAlertFocus(status + " " + $translate.instant('vnm.messages.error.connection'), "", $translate.instant("vnm.lable.vnm.name"), "");
			});
		},

		getStockName : function(callback) {
			var url = eim_url + "/epos/inventory/FormEnquerySerial/getStockName";
			$http.post(url).success(callback).error(function(data, status, headers, config) {
				closeOverLay();
				bootboxAlertFocus(status + " " + $translate.instant('vnm.messages.error.connection'), "", $translate.instant("vnm.lable.vnm.name"), "");
			});
		},

		exportFile : function(data, callback) {
			var url = eim_url + "/epos/reportSearchInfomationShopAndStaff/exportFile?reportInput=" + data;
			$http.get(url, {
				responseType : 'arraybuffer'
			}).success(callback).error(function(data, status, headers, config) {
				closeOverLay();
				bootboxAlertFocus(status + " " + $translate.instant('vnm.messages.error.connection'), "", $translate.instant("vnm.lable.vnm.name"), "");
			});
		},

		enquerySerialFile : function(data, callback) {
			var url = eim_url + "/epos/inventory/FormEnquerySerial/enquerySerialFile";
			$http.post(url, data).success(callback).error(function(data, status, headers, config) {
				closeOverLay();
				bootboxAlertFocus(status + " " + $translate.instant('vnm.messages.error.connection'), "", $translate.instant("vnm.lable.vnm.name"), "");
			});
		},

		exportFile2 : function(data, callback) {
			var url = eim_url + "/epos/inventory/FormEnquerySerial/exportFile";
			$http.post(url, data, {
				responseType : 'arraybuffer'
			}).success(callback).error(function(data, status, headers, config) {
				closeOverLay();
				bootboxAlertFocus(status + " " + $translate.instant('vnm.messages.error.connection'), "", $translate.instant("vnm.lable.vnm.name"), "");
			});
		},

	}
});

var ROW_NOT_SELECTED = -1;
app_vnm
		.controller(
				'ctrl-FormEnquerySerial',
				function($scope, $rootScope, $translate, $compile, $timeout, $uibModal, $location, $window, FileUploader, $filter, $http, NgTableParams,
						$localStorage, fctFormEnquerySerial) {

					window.document.title = $translate.instant('vnm.form_enquery_serial.page.title');

					$scope.model = {};
					$scope.limitCbb = 20;
					$scope.lstGoods = []; // Cbb mat hang
					$scope.lstShops = [];
					$scope.lstStates = []; // Cbb trang thai
					$scope.lstStatuss = []; // Cbb tinh trang
					$scope.loadDefault = function() {
						fctFormEnquerySerial.getEnqueryGoods(function(result) {
							if (result != null && result != undefined) {
								if (result.status == '0') {
									bootboxAlertFocus(result.messages, "", $translate.instant("vnm.lable.vnm.name"), "");
								} else if (result.length > 0) {
									Array.prototype.push.apply($scope.lstGoods, result);
									fctFormEnquerySerial.getExistedStates(function(result) {
										if (result != null && result != undefined) {
											if (result.status == '0') {
												bootboxAlertFocus(result.messages, "", $translate.instant("vnm.lable.vnm.name"), "");
											} else {
												var stateAll = {
													"stateId" : "",
													"name" : "Tất cả",
												};
												$scope.lstStates.push(stateAll);
												Array.prototype.push.apply($scope.lstStates, result);
												var ser = {
													"type" : "27",
												};
												fctFormEnquerySerial.loadStatuss(ser, function(result) {
													if (result != null && result != undefined) {
														if (result.status == '0') {
															bootboxAlertFocus(result.messages, "", $translate.instant("vnm.lable.vnm.name"), "");
														} else if (result.length > 0) {
															var statusAll = {
																"code" : "",
																"name" : "Tất cả",
															};
															$scope.lstStatuss.push(statusAll);
															Array.prototype.push.apply($scope.lstStatuss, result);
															fctFormEnquerySerial.getChildsStockTree($localStorage.clientContext.shopId, function(result) {
																if (result != null && result != undefined) {
																	if (result.status == '0') {
																		bootboxAlertFocus(result.messages, "", $translate.instant("vnm.lable.vnm.name"), "");
																	} else {
																		for (var i = 0; i < result.length; i++) {
																			if (result[i].type == $translate.instant("vnm.form_enquery_serial.label.shop")) {
																				$scope.lstShops.push(result[i]);
																			}
																		}
																		$scope.disableActButton = true;
																		var lstNull = [];
																		createDataTableGoods(lstNull);
																		closeOverLay();
																	}
																}
															});
														}
													}
												});
											}
										}
									});
								}
							}
						});
					}

					$("#fShopCode").keyup(function(e) {
						var code = (e.keyCode ? e.keyCode : e.which);
						if (code == '120') {
							$scope.itemSelectedListShop = $scope.lstShops[0];
							$scope.initSearchShop = $scope.model.fShopCode;
							for (var i=0; i<$scope.lstShops.length; i++) {
								if ($scope.model.fShopCode != null && $scope.model.fShopCode != undefined &&
										($scope.lstShops[i].code.toUpperCase().includes($scope.model.fShopCode.trim().toUpperCase()) ||
												$scope.lstShops[i].name.toUpperCase().includes($scope.model.fShopCode.trim().toUpperCase()))) {
									$scope.itemSelectedListShop = $scope.lstShops[i];
									break;
								}
							}
							$scope.showModalFunction("modalListShop");
							createDataTableListShop($scope.lstShops);
						} else if (code == '13') {
							$scope.onblurShopCode();
						} else {
							if ($scope.model.fShopCode == '') {
								$scope.model.fShopName = '';
								$scope.model.fShopStockId = '';
							}
						}
					});
					
					$scope.initSearchShop = "";
					$scope.onblurShopCode = function() {
						if ($scope.model.fShopCode != undefined && $scope.model.fShopCode != '') {
							var isSearch = false;
							var isFirst = true;
							for (var i=0; i<$scope.lstShops.length; i++) {
								if ($scope.lstShops[i].code.toUpperCase() == $scope.model.fShopCode.trim().toUpperCase()) {
									$scope.itemSelectedListShop = $scope.lstShops[i];
									$scope.model.fShopCode = $scope.itemSelectedListShop.code;
									$scope.model.fShopStockId = $scope.itemSelectedListShop.shopStaffId;
									$scope.model.fShopName = $scope.itemSelectedListShop.name;
									document.getElementById('fShopCode').title = $scope.model.fShopCode;
									document.getElementById('fShopName').title = $scope.model.fShopName;
									isSearch = true;
									break;
								} else if (isFirst && ($scope.lstShops[i].code.toUpperCase().includes($scope.model.fShopCode.trim().toUpperCase()) ||
												$scope.lstShops[i].name.toUpperCase().includes($scope.model.fShopCode.trim().toUpperCase()))) {
									$scope.itemSelectedListShop = $scope.lstShops[i];
									isFirst = false;
								}
							}
							if (!isSearch) {
								$scope.model.fShopName = '';
								$scope.model.fShopStockId = '';
								$scope.initSearchShop = $scope.model.fShopCode;
								$scope.showModalFunction("modalListShop");
								createDataTableListShop($scope.lstShops);
							}
						}
					}

					// create table mat hang
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

					$scope.updateFormShop = function() {
						$scope.model.fShopCode = $scope.itemSelectedListShop.code;
						$scope.model.fShopStockId = $scope.itemSelectedListShop.shopStaffId;
						$scope.model.fShopName = $scope.itemSelectedListShop.name;
						document.getElementById('fShopCode').title = $scope.model.fShopCode;
						document.getElementById('fShopName').title = $scope.model.fShopName;
						$scope.hideModalFunction("modalListShop");
					}

					$scope.dialogListShopActionBack = function() {
						$scope.hideModalFunction("modalListShop");
						if ($scope.model.fShopName != undefined && $scope.model.fShopName.trim() == '') {
							angular.element(document.getElementById("fShopCode")).focus();
						}
					}

					$scope.itemSelectedListGoods = {};
					$("#fGoodsCode").keyup(function(e) {
						var code = (e.keyCode ? e.keyCode : e.which);
						if (code == '120') {
							$scope.itemSelectedListGoods = $scope.lstGoods[0];
							$scope.initSearchGoods = $scope.model.fGoodsCode;
							for (var i=0; i<$scope.lstGoods.length; i++) {
								if ($scope.model.fGoodsCode != null && $scope.model.fGoodsCode != undefined &&
										($scope.lstGoods[i].goodsCode.toUpperCase().includes($scope.model.fGoodsCode.trim().toUpperCase()) ||
												$scope.lstGoods[i].name.toUpperCase().includes($scope.model.fGoodsCode.trim().toUpperCase()))) {
									$scope.itemSelectedListGoods = $scope.lstGoods[i];
									break;
								}
							}
							$scope.showModalFunction("modalListGoods");
							createDataTableListGoods($scope.lstGoods);
						} else if (code == '13') {
							$scope.onblurGoodsCode();
						} else {
							if ($scope.model.fGoodsCode == '')
								$scope.model.fGoodsName = '';
						}
					});
					
					$scope.onblurGoodsCode = function() {
						if ($scope.model.fGoodsCode != undefined && $scope.model.fGoodsCode != '') {
							var isSearch = false;
							var isFirst = true;
							for (var i=0; i<$scope.lstGoods.length; i++) {
								if ($scope.lstGoods[i].goodsCode.toUpperCase() == $scope.model.fGoodsCode.trim().toUpperCase()) {
									$scope.itemSelectedListGoods = $scope.lstGoods[i];
									$scope.model.fGoodsCode = $scope.itemSelectedListGoods.goodsCode;
									$scope.model.fGoodsName = $scope.itemSelectedListGoods.name;
									document.getElementById('fGoodsCode').title = $scope.model.fGoodsCode;
									document.getElementById('fGoodsName').title = $scope.model.fGoodsName;
									isSearch = true;
									break;
								} else if (isFirst && ($scope.lstGoods[i].goodsCode.toUpperCase().includes($scope.model.fGoodsCode.trim().toUpperCase()) ||
												$scope.lstGoods[i].name.toUpperCase().includes($scope.model.fGoodsCode.trim().toUpperCase()))) {
									$scope.itemSelectedListGoods = $scope.lstGoods[i];
									isFirst = false;
								}
							}
							if (!isSearch) {
								$scope.model.fGoodsName = '';
								$scope.initSearchGoods = $scope.model.fGoodsCode;
								$scope.showModalFunction("modalListGoods");
								createDataTableListGoods($scope.lstGoods);
							}
						}
					}

					// create table mat hang
					function createDataTableListGoods(dataItem) {
						oTableFListGoods = $('#tblListGoods').DataTable({
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
								"mData" : "goodsCode",
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
							"oSearch": {"sSearch": $scope.initSearchGoods},
							"createdRow" : function(row, data, rowIndex) {
								if ($scope.itemSelectedListGoods != undefined && $scope.itemSelectedListGoods != null) {
									if ($scope.itemSelectedListGoods.goodsId == data.goodsId) {
										$(row).addClass('selected');
									}
								} else {
									if (rowIndex == 0 || rowIndex == '0') {
										$(row).addClass('selected');
									}
								}
							}
						});

						$('#tblListGoods tbody').off().on('click', 'tr', function(e, dt, type, indexes) {
							$(this).removeClass('selected');
							var rowData = oTableFListGoods.row(this).data();
							oTableFListGoods.$('tr.selected').removeClass('selected');
							$(this).addClass('selected');
							$scope.itemSelectedListGoods = rowData;
						});
					}

					$scope.updateFormGoods = function() {
						$scope.model.fGoodsCode = $scope.itemSelectedListGoods.goodsCode;
						$scope.model.fGoodsName = $scope.itemSelectedListGoods.name;
						document.getElementById('fGoodsCode').title = $scope.model.fGoodsCode;
						document.getElementById('fGoodsName').title = $scope.model.fGoodsName;
						$scope.hideModalFunction("modalListGoods");
					}

					$scope.dialogListGoodsActionBack = function() {
						$scope.hideModalFunction("modalListGoods");
						if ($scope.model.fGoodsName != undefined && $scope.model.fGoodsName.trim() == '') {
							angular.element(document.getElementById("fGoodsCode")).focus();
						}
					}

					$scope.lstTablesGoods = [];
					$scope.lstTransSerials = [];
					$scope.itemSelected = {};
					// Tim kiem
					$scope.onFSearch = function() {
						overLoading();
						var objSearch = {
							"mstrFromSerial" : $scope.model.fFromSerial,
							"mstrToSerial" : $scope.model.fToSerial,
							"mstrShopID" : ($scope.model.fShopStockId != null && $scope.model.fShopStockId != undefined) ? $scope.model.fShopStockId : '',
							"mstrGoodsCode" : ($scope.model.fGoodsCode != null && $scope.model.fGoodsCode != undefined) ? $scope.model.fGoodsCode : '',
							"mstrStateID" : ($scope.model.fState != null && $scope.model.fState != undefined) ? $scope.model.fState.stateId : '',
							"mstrStatus" : ($scope.model.fStatus != null && $scope.model.fStatus != undefined) ? $scope.model.fStatus.code : '',
							"SerialList" : $scope.lstTransSerials,
							"sessionShopID" : $localStorage.clientContext.shopId,
						}

						fctFormEnquerySerial.enquerySerial(objSearch, function(result) {
							if (result != null && result != undefined) {
								if (result.status == '0') {
									bootboxAlertFocus(result.messages, "", $translate.instant("vnm.lable.vnm.name"), "");
								} else {
									if (result.length <= 0) {
										bootboxAlertFocus($translate.instant("vnm.form_enquery_serial.error.serialNotFound"), "", $translate
												.instant("vnm.lable.vnm.name"), "");
										$scope.lstTablesGoods = [];
										$scope.itemSelected = {};
										$scope.disableActButton = true;
									} else if (result.length >= 5000) {
										bootboxAlertFocus($translate.instant("vnm.form_enquery_serial.error.dataToMany"), "", $translate
												.instant("vnm.lable.vnm.name"), "");
										$scope.lstTablesGoods = result.slice(0, 5000);
										$scope.itemSelected = $scope.lstTablesGoods[0];
										$scope.disableActButton = false;
									} else {
										$scope.lstTablesGoods = result;
										$scope.itemSelected = $scope.lstTablesGoods[0];
										$scope.disableActButton = false;
									}
									createDataTableGoods($scope.lstTablesGoods);
									$scope.setValuePrint();
								}
							}
							closeOverLay();
						});
					}

					$scope.setValuePrint = function() {
						var shopCond = '';
						var shopSearch = '';
						if ($scope.model.fShopStockId == null || $scope.model.fShopStockId == undefined) {
							shopCond = 'sess';
							shopSearch = $localStorage.clientContext.shopId;
						} else {
							shopCond = 'stock';
							shopSearch = $scope.model.fShopStockId;
						}

						param_shopCondition = shopCond;
						param_shopId = shopSearch;
						param_goodsCode = ($scope.model.fGoodsCode != null && $scope.model.fGoodsCode != undefined) ? $scope.model.fGoodsCode : null;
						param_stateId = ($scope.model.fState != null && $scope.model.fState != undefined) ? $scope.model.fState.stateId : null;
						param_status = ($scope.model.fStatus != null && $scope.model.fStatus != undefined) ? $scope.model.fStatus.code : null;
						param_fromSerial = ($scope.model.fFromSerial != null && $scope.model.fFromSerial != undefined && $scope.model.fFromSerial != '') ? $scope.model.fFromSerial
								: null;
						param_toSerial = ($scope.model.fToSerial != null && $scope.model.fToSerial != undefined && $scope.model.fToSerial != '') ? $scope.model.fToSerial
								: null;
					}

					// khoi tao
					var initialize = function() {
						overLoading();
						$scope.loadDefault();
					}

					initialize();

					// create table mat hang
					function createDataTableGoods(dataItem) {
						oTableFListSerial = $('#tableFListSerial').DataTable({
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
							"scrollY" : "250",
							"columns" : [ {
								"mData" : "shopName",
								"render" : function(data, type, row) {
									return "<div data-toggle='tooltip' class='text-wrap width-200' title='" + data + "'>" + data + "</div>";
								}
							}, {
								"mData" : "stockName",
								"render" : function(data, type, row) {
									return "<div data-toggle='tooltip' class='text-wrap width-200' title='" + data + "'>" + data + "</div>";
								}
							}, {
								"mData" : "serial",
								"render" : function(data, type, row) {
									return "<div data-toggle='tooltip' class='text-wrap width-200' title='" + data + "'>" + data + "</div>";
								}
							}, {
								"mData" : "goodsCode",
								"render" : function(data, type, row) {
									return "<div data-toggle='tooltip' class='text-wrap width-200' title='" + data + "'>" + data + "</div>";
								}
							}, {
								"mData" : "goodsName",
								"render" : function(data, type, row) {
									return "<div data-toggle='tooltip' class='text-wrap width-200' title='" + data + "'>" + data + "</div>";
								}
							}, {
								"mData" : "stateName",
								"render" : function(data, type, row) {
									return "<div data-toggle='tooltip' class='text-wrap width-200' title='" + data + "'>" + data + "</div>";
								}
							}, {
								"mData" : "statusName",
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
							"createdRow" : function(row, data, rowIndex) {
								if ($scope.itemSelected != ROW_NOT_SELECTED) {
									if ($scope.itemSelected.serial == data.serial) {
										$(row).addClass('selected');
									}
								} else {
									if (rowIndex == 0 || rowIndex == '0') {
										$(row).addClass('selected');
									}
								}
							}
						});

						$('#tableFListSerial tbody').off().on('click', 'tr', function(e, dt, type, indexes) {
							$(this).removeClass('selected');
							var rowData = oTableFListSerial.row(this).data();
							oTableFListSerial.$('tr.selected').removeClass('selected');
							$(this).addClass('selected');
							$scope.itemSelected = rowData;
						});
					}

					// Button chi tiet
					$scope.lstViewTransSerial = [];
					$scope.lstStockName = [];
					$scope.btnFDetailOnclick = function() {
						if ($scope.itemSelected != null && $scope.itemSelected != undefined) {
							overLoading();
							var objSearch = {
								"mstrFromSerial" : $scope.itemSelected.serial,
								"mstrGoodsCode" : $scope.itemSelected.goodsCode,
							}
							fctFormEnquerySerial.enqueryTransSerial(objSearch, function(result) {
								if (result != null && result != undefined) {
									if (result.status == '0') {
										bootboxAlertFocus(result.messages, "", $translate.instant("vnm.lable.vnm.name"), "");
									} else {
										$scope.lstViewTransSerial = result;
										fctFormEnquerySerial.getStockName(function(result) {
											$scope.lstStockName = result;
											var ser = {
												"type" : "30",
											};
											fctFormEnquerySerial.loadStatuss(ser, function(result) {
												if (result != null && result != undefined && result.status != '0') {
													if ($scope.lstViewTransSerial.length > 0) {
														for (var i = 0; i < $scope.lstViewTransSerial.length; i++) {
															var stockId = $scope.lstViewTransSerial[i].stockId;
															var delivererStockId = $scope.lstViewTransSerial[i].delivererStockId;
															var status = $scope.lstViewTransSerial[i].status;

															for (var j = 0; j < $scope.lstStockName.length; j++) {
																if (stockId == $scope.lstStockName[j].code) {
																	$scope.lstViewTransSerial[i].stockName = $scope.lstStockName[j].name;
																}
																if (delivererStockId == $scope.lstStockName[j].code) {
																	$scope.lstViewTransSerial[i].delivererStockName = $scope.lstStockName[j].name;
																}
															}

															for (var j = 0; j < result.length; j++) {
																if (status == result[j].code) {
																	$scope.lstViewTransSerial[i].statusName = result[j].name;
																}
															}
														}

														createDataTableViewSerialEnquery($scope.lstViewTransSerial);
														$scope.showModalFunction("viewSerialEnquery");
														closeOverLay();
													}
												}
											});
										});
									}
								}
							});
						}
					}

					// create table view serial
					function createDataTableViewSerialEnquery(dataItem) {
						oTableViewSerialEnquery = $('#tableViewSerialEnquery').DataTable(
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
									"bSort" : false,
									"info" : true,
									"select" : {
										style : 'single',
										info : false
									},
									"scrollX" : true,
									"scrollY" : "250",
									"columns" : [
											{
												"mData" : "stockName",
												"render" : function(data, type, row) {
													return "<div data-toggle='tooltip' class='text-wrap width-150' title='" + StringUtilNVL(data) + "'>"
															+ StringUtilNVL(data) + "</div>";
												}
											},
											{
												"mData" : "reasonName",
												"render" : function(data, type, row) {
													return "<div data-toggle='tooltip' class='text-wrap width-150' title='" + data + "'>" + data + "</div>";
												}
											},
											{
												"mData" : "delivererStockName",
												"render" : function(data, type, row) {
													return "<div data-toggle='tooltip' class='text-wrap width-150' title='" + StringUtilNVL(data) + "'>"
															+ StringUtilNVL(data) + "</div>";
												}
											},
											{
												"mData" : "actionCode",
												"render" : function(data, type, row) {
													return "<div data-toggle='tooltip' class='text-wrap width-150' title='" + data + "'>" + data + "</div>";
												}
											},
											{
												"mData" : "actionDate",
												"render" : function(data, type, row) {
													return "<div data-toggle='tooltip' class='text-wrap width-150' title='" + data + "'>" + data + "</div>";
												}
											},
											{
												"mData" : "statusName",
												"render" : function(data, type, row) {
													return "<div data-toggle='tooltip' class='text-wrap width-150' title='" + StringUtilNVL(data) + "'>"
															+ StringUtilNVL(data) + "</div>";
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
					}

					// show popup
					$scope.showModalFunction = function(idModal) {
						$('#' + idModal).modal('show');
						$('#' + idModal).on('shown.bs.modal', function(e) {
							$.fn.dataTable.tables({
								visible : true,
								api : true
							}).columns.adjust();
							
							angular.element($("#tblListGoods_filter").find("input")[0]).focus();
							angular.element($("#tblListShop_filter").find("input")[0]).focus();
						});
					}

					// hide popup
					$scope.hideModalFunction = function(idModal) {
						$('#' + idModal).modal('hide');
					}

					// button in
					var param_shopCondition, param_shopId, param_goodsCode, param_stateId, param_status, param_fromSerial, param_toSerial;
					$scope.btnFPrintOnclick = function() {
						overLoading();
						var ReportInput = {
							"SessionShopCode" : $localStorage.clientContext.shop.shopCode,
							"SessionShopName" : $localStorage.clientContext.shop.shopName,
							"param_shopCondition" : param_shopCondition,
							"param_shopId" : param_shopId,
							"param_goodsCode" : param_goodsCode,
							"param_stateId" : param_stateId,
							"param_status" : param_status,
							"param_fromSerial" : param_fromSerial,
							"param_toSerial" : param_toSerial,
							"fileTempName" : 'TemplateSerialList_vn',
							"fileType" : '.xlsx'
						};

						fctFormEnquerySerial.exportFile(encodeURI(JSON.stringify(ReportInput)), function(result, status, header, config) {
							if (result.status == '0' && result.status != 'undefined') {
								closeOverLay();
								bootboxAlertFocus($translate.instant('vnm.messages.validate.prepaid.server.' + result.messages), "", $translate
										.instant("vnm.lable.vnm.name"), "");
							} else {
								closeOverLay();
								download(new Blob([ result ]), header('MyDownloadFile') + header('FileType'), header('Content-Type'));
							}
						});
					}

					$scope.btnFPrintOnclick2 = function() {
						overLoading();
						var reportInput = {
							"sessionShopCode" : $localStorage.clientContext.shop.shopCode,
							"sessionShopName" : $localStorage.clientContext.shop.shopName,
							"lstTablesGoods" : $scope.lstTablesGoods,
							"fileTempName" : 'TemplateSerialList',
							"fileType" : '.xlsx'
						};

						fctFormEnquerySerial.exportFile2(reportInput, function(result, status, header, config) {
							if (result.status == '0') {
								closeOverLay();
								bootboxAlertFocus(result.messages, "", $translate.instant("vnm.lable.vnm.name"), "");
							} else {
								closeOverLay();
								download(new Blob([ result ]), header('MyDownloadFile') + header('FileType'), header('Content-Type'));
							}
						});
					}

					// Button upload file
					$scope.onClickFLoadFile = function() {
						$scope.model.linkFile = '';
						$scope.model.fromNumber = '';
						$scope.model.toNumber = '';
						$scope.model.quantity = '';
						$scope.disabledUploadAllFile = true;
						$scope.showModalFunction("modalAddSerial");
					}

					// Upload file
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
					$scope.uploadAllFile = function(uploaderIn) {
						overLoading();
						bootbox
								.confirm(
										{
											title : $translate.instant("vnm.lable.vnm.name"),
											message : "<i class='fa fa-question-circle' style='font-size:20px; color:orange; margin-right:20px;'></i>"
													+ $translate.instant('vnm.FormStockImportFromPartner.messageAccept'),
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
													overLoading();
													var objSearch = {
														"mstrShopID" : ($scope.model.fShopStockId != null && $scope.model.fShopStockId != undefined) ? $scope.model.fShopStockId
																: '',
														"mstrGoodsCode" : ($scope.model.fGoodsCode != null && $scope.model.fGoodsCode != undefined) ? $scope.model.fGoodsCode
																: '',
														"mstrStateID" : ($scope.model.fState != null && $scope.model.fState != undefined) ? $scope.model.fState.stateId
																: '',
														"mstrStatus" : ($scope.model.fStatus != null && $scope.model.fStatus != undefined) ? $scope.model.fStatus.code
																: '',
														"lstSerial" : $scope.fileSuccess,
														"sessionShopID" : $localStorage.clientContext.shopId,
													}

													fctFormEnquerySerial.enquerySerialFile(objSearch, function(result) {
														if (result != null && result != undefined) {
															if (result.status == '0') {
																bootboxAlertFocus(result.messages, "", $translate.instant("vnm.lable.vnm.name"), "");
																var lstNull = [];
																createDataTableGoods(lstNull);
															} else {
																if (result.vtSearchResult == null || result.vtSearchResult == undefined
																		|| result.vtSearchResult.length <= 0) {
																	$scope.lstTablesGoods = [];
																	$scope.itemSelected = {};
																	$scope.disableActButton = true;
																} else if (result.vtSearchResult.length >= 30000) {
																	bootboxAlertFocus($translate.instant("vnm.form_enquery_serial.error.dataToMany"), "",
																			$translate.instant("vnm.lable.vnm.name"), "");
																	$scope.lstTablesGoods = result.vtSearchResult.slice(0, 30000);
																	$scope.itemSelected = $scope.lstTablesGoods[0];
																	$scope.disableActButton = false;
																} else {
																	$scope.lstTablesGoods = result.vtSearchResult;
																	$scope.itemSelected = $scope.lstTablesGoods[0];
																	$scope.disableActButton = false;
																}
																createDataTableGoods($scope.lstTablesGoods);
															}
														}

														if (result.vtSerialnofount != null && result.vtSerialnofount != undefined
																&& result.vtSerialnofount.length > 0) {
															var lstTableNoFound = [];
															var objSerialText = {};
															objSerialText.serial = 'SERIAL';
															lstTableNoFound.push(objSerialText);
															Array.prototype.push.apply(lstTableNoFound, result.vtSerialnofount);
															createTableSerialNoFound(lstTableNoFound);
															$scope.showModalFunction("viewSerialNoFound");
														}

														$scope.hideModalFunction("modalAddSerial");
														closeOverLay();
													});
												} else {
													closeOverLay();
												}
											}
										}).find(".modal-dialog").css({
									'width' : '450px',
									'margin-top' : function() {
										var w = $(window).height();
										// var b = $(".modal-dialog").height();
										var h = w / 5;
										return h + "px";
									}
								});

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

					function createTableSerialNoFound(dataItem) {
						oTableViewSerialNoFound = $('#tableViewSerialNoFound').DataTable(
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
									"bSort" : false,
									"info" : true,
									"select" : {
										style : 'single',
										info : false
									},
									"scrollX" : true,
									"scrollY" : "250",
									"columns" : [ {
										"mData" : "serial",
										"render" : function(data, type, row) {
											return "<div data-toggle='tooltip' class='text-wrap width-150' title='" + StringUtilNVL(data) + "'>"
													+ StringUtilNVL(data) + "</div>";
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
					}

				});

function StringUtilNVL(val) {
	if (val == undefined || val == null)
		return "";
	return $.trim(val);
}

function valid_numbers(e) {
	var key = e.keyCode;
	if (key >= 48 && key <= 57)
		return true;
	else
		return false;
}