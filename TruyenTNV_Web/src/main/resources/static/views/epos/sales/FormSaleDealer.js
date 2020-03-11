app_vnm.factory('fctFormSaleDealer', function($http, $translate) {
	return {
		getListApDomains : function(data, callback) {
			var url = eim_url + "/epos/sales/FormSaleDealer/getListApDomains";
			$http.post(url, data).success(callback).error(function(data, status, headers, config) {
				closeOverLay();
				bootboxAlertFocus(status + " " + $translate.instant('vnm.messages.error.connection'), "", $translate.instant("vnm.lable.vnm.name"), "");
			});
		},
		getListAgents : function(data, callback) {
			var url = eim_url + "/epos/sales/FormSaleDealer/getListAgents";
			$http.post(url, data).success(callback).error(function(data, status, headers, config) {
				closeOverLay();
				bootboxAlertFocus(status + " " + $translate.instant('vnm.messages.error.connection'), "", $translate.instant("vnm.lable.vnm.name"), "");
			});
		},
		getRate : function(data, callback) {
			var url = eim_url + "/epos/sales/FormSaleDealer/getRate";
			$http.post(url, data).success(callback).error(function(data, status, headers, config) {
				closeOverLay();
				bootboxAlertFocus(status + " " + $translate.instant('vnm.messages.error.connection'), "", $translate.instant("vnm.lable.vnm.name"), "");
			});
		},
		getListGoods : function(data, callback) {
			var url = eim_url + "/epos/sales/FormSaleDealer/getListGoods";
			$http.post(url, data).success(callback).error(function(data, status, headers, config) {
				closeOverLay();
				bootboxAlertFocus(status + " " + $translate.instant('vnm.messages.error.connection'), "", $translate.instant("vnm.lable.vnm.name"), "");
			});
		},
		getListPrices : function(data, callback) {
			var url = eim_url + "/epos/sales/FormSaleDealer/getListPrices";
			$http.post(url, data).success(callback).error(function(data, status, headers, config) {
				closeOverLay();
				bootboxAlertFocus(status + " " + $translate.instant('vnm.messages.error.connection'), "", $translate.instant("vnm.lable.vnm.name"), "");
			});
		},
		getListPromotions : function(callback) {
			var url = eim_url + "/epos/sales/FormSaleDealer/getListPromotions";
			$http.post(url).success(callback).error(function(data, status, headers, config) {
				closeOverLay();
				bootboxAlertFocus(status + " " + $translate.instant('vnm.messages.error.connection'), "", $translate.instant("vnm.lable.vnm.name"), "");
			});
		},
		initMapPriceTypeAndBundle : function(callback) {
			var url = eim_url + "/epos/sales/FormSaleDealer/initMapPriceTypeAndBundle";
			$http.post(url).success(callback).error(function(data, status, headers, config) {
				closeOverLay();
				bootboxAlertFocus(status + " " + $translate.instant('vnm.messages.error.connection'), "", $translate.instant("vnm.lable.vnm.name"), "");
			});
		},
		addGoods : function(data, callback) {
			var url = eim_url + "/epos/sales/FormSaleDealer/addGoods";
			$http.post(url, data).success(callback).error(function(data, status, headers, config) {
				closeOverLay();
				bootboxAlertFocus(status + " " + $translate.instant('vnm.messages.error.connection'), "", $translate.instant("vnm.lable.vnm.name"), "");
			});
		},
		initASData : function(data, callback) {
			var url = eim_url + "/epos/sales/FormSaleDealer/initASData";
			$http.post(url, data).success(callback).error(function(data, status, headers, config) {
				closeOverLay();
				bootboxAlertFocus(status + " " + $translate.instant('vnm.messages.error.connection'), "", $translate.instant("vnm.lable.vnm.name"), "");
			});
		},
		deleteGoods : function(data, callback) {
			var url = eim_url + "/epos/sales/FormSaleDealer/deleteGoods";
			$http.post(url, data).success(callback).error(function(data, status, headers, config) {
				closeOverLay();
				bootboxAlertFocus(status + " " + $translate.instant('vnm.messages.error.connection'), "", $translate.instant("vnm.lable.vnm.name"), "");
			});
		},
		writeInfo : function(data, callback) {
			var url = eim_url + "/epos/sales/FormSaleDealer/writeInfo";
			$http.post(url, data).success(callback).error(function(data, status, headers, config) {
				closeOverLay();
				bootboxAlertFocus(status + " " + $translate.instant('vnm.messages.error.connection'), "", $translate.instant("vnm.lable.vnm.name"), "");
			});
		},
		saveTransaction : function(data, callback) {
			var url = eim_url + "/epos/sales/FormSaleDealer/saveTransaction";
			$http.post(url, data).success(callback).error(function(data, status, headers, config) {
				closeOverLay();
				bootboxAlertFocus(status + " " + $translate.instant('vnm.messages.error.connection'), "", $translate.instant("vnm.lable.vnm.name"), "");
			});
		},
		getSOCode : function(data, callback) {
			var url = eim_url + "/epos/sales/FormSaleDealer/getSOCode";
			$http.post(url, data).success(callback).error(function(data, status, headers, config) {
				closeOverLay();
				bootboxAlertFocus(status + " " + $translate.instant('vnm.messages.error.connection'), "", $translate.instant("vnm.lable.vnm.name"), "");
			});
		},
		getListSerialAttachGoods : function(data, callback) {
			var url = eim_url + "/epos/sales/FormSaleDealer/getListSerialAttachGoods";
			$http.post(url, data).success(callback).error(function(data, status, headers, config) {
				closeOverLay();
				bootboxAlertFocus(status + " " + $translate.instant('vnm.messages.error.connection'), "", $translate.instant("vnm.lable.vnm.name"), "");
			});
		},
		addAttachGoodsToForm : function(data, callback) {
			var url = eim_url + "/epos/sales/FormSaleDealer/addAttachGoodsToForm";
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
		exportFile : function(data, callback) {
			var url = eim_url + "/epos/sales/FormSaleDealer/exportFile";
			$http.post(url, data, {
				responseType : 'arraybuffer'
			}).success(callback).error(function(data, status, headers, config) {
				closeOverLay();
				bootboxAlertFocus(status + " " + $translate.instant('vnm.messages.error.connection'), "", $translate.instant("vnm.lable.vnm.name"), "");
			});
		},
	}
})

var FORM_NAME = "FormSaleDealer";
var ROW_NOT_SELECTED = -1;
var mstrAlertRows = 14;
app_vnm
		.controller(
				'ctrl-FormSaleDealer',
				function($scope, $rootScope, $translate, $compile, $timeout, $uibModal, $location, $window, FileUploader, $filter, $http, NgTableParams,
						$localStorage, fctFormSaleDealer) {

					window.document.title = $translate.instant('vnm.form_sale_dealer.page.title');
					$scope.model = {};
					$scope.limitCbb = 100;
					var lstNull = [];
					$scope.disablePayMethod = false;

					$scope.TransTypeSource = []; // Loai GD
					$scope.AgentSource = []; // Danh sach dai ly
					$scope.PaymentMethodSource = []; // HTTT
					$scope.GoodsSource = []; // Mat hang
					$scope.PriceSource = []; // Don gia
					$scope.PromotionSource = []; // Khuyen mai

					$scope.UnitSource = []; // map DVT
					$scope.MapPriceTypeAndBundle = []; // MapPriceTypeAndBundle

					$scope.getFAgentName = function() {
						if ($scope.model.fAgent == undefined || $scope.model.fAgent.name == $scope.model.fAgentName)
							return;
						if ($scope.model.fAgent != null && $scope.model.fAgent != undefined && $scope.model.fAgent.code != undefined) {
							$scope.model.fAgentName = $scope.model.fAgent.name;
							document.getElementById('fAgent').title = $scope.model.fAgent.code;
							document.getElementById('fAgentName').title = $scope.model.fAgentName;

							var keySearch = {
								"code" : $scope.model.fAgent.code,
							}
							fctFormSaleDealer.getSOCode(keySearch, function(result) {
								if (result == null || result == undefined || result.status == '0') {
									bootboxAlertFocus(result.messages, "", $translate.instant("vnm.lable.vnm.name"), "");
								} else {
									$scope.model.fReceiptCode = result;
								}
							});
						} else {
							$scope.model.fAgentName = '';
							document.getElementById('fAgent').title = '';
							document.getElementById('fAgentName').title = '';
							$scope.model.fReceiptCode = '';
						}
					}

					$scope.clearLstTableGoods = function() {
						$scope.goodsFormSelected.lstGoodsSaleTransaction = [];
						$scope.lstTableGoods = []
						goodsServiceSelected = {};
						createTableListGoodsService(lstNull);
						createTableListGoodsSerial(lstNull);
						$scope.mvctUsageSerial = [];
					}

					$scope.getFGoodsName = function() {
						if ($scope.model.fGoods != null && $scope.model.fGoods != undefined && $scope.model.fGoods.goodsCode != undefined) {
							$scope.model.fGoodsName = $scope.model.fGoods.name;
							document.getElementById('fGoods').title = $scope.model.fGoods.goodsCode;
							document.getElementById('fGoodsName').title = $scope.model.fGoods.name;

							var keySearch = {
								"code" : $scope.model.fGoods.goodsId,
								"name" : $localStorage.clientContext.shop.tariffId,
							};
							fctFormSaleDealer.getListPrices(keySearch, function(result) {
								if (result != null && result != undefined && result.status != '0') {
									$scope.PriceSource = result;
								}
							});
							$scope.model.fQuantity = '1';
						} else {
							$scope.model.fGoodsName = '';
							document.getElementById('fGoods').title = '';
							document.getElementById('fGoodsName').title = '';
						}

						$scope.model.fPrice = {};
						$scope.getFPriceName();
						$scope.model.fDiscount = "";
						$scope.model.fPromotion = {};
						$scope.getFPromotionName();
						$scope.model.fVat = "";
					}

					$scope.getFPromotionName = function() {
						if ($scope.model.fPromotion != null && $scope.model.fPromotion != undefined && $scope.model.fPromotion.promProgramCode != undefined) {
							$scope.model.fPromotionName = $scope.model.fPromotion.name;
							document.getElementById('fPromotion').title = $scope.model.fPromotion.promProgramCode;
							document.getElementById('fPromotionName').title = $scope.model.fPromotion.name;
						} else {
							$scope.model.fPromotionName = '';
							document.getElementById('fPromotion').title = '';
							document.getElementById('fPromotionName').title = '';
						}
					}

					$scope.getFPriceName = function() {
						if ($scope.model.fPrice != null && $scope.model.fPrice != undefined && $scope.model.fPrice.price != undefined) {
							$scope.model.fPriceName = $scope.model.fPrice.name;
							document.getElementById('fPrice').title = $scope.model.fPrice.price;
							document.getElementById('fPriceName').title = $scope.model.fPrice.name;
							$scope.model.fVat = $scope.model.fPrice.vat + "%";
						} else {
							$scope.model.fPriceName = '';
							document.getElementById('fPrice').title = '';
							document.getElementById('fPriceName').title = '';
						}
					}

					$scope.getUnitName = function(unitId) {
						if ($scope.UnitSource != null && $scope.UnitSource != undefined && $scope.UnitSource.length > 0) {
							for (var i = 0; i < $scope.UnitSource.length; i++) {
								if ($scope.UnitSource[i].code == unitId) {
									return $scope.UnitSource[i].name;
								}
							}
						}
						return unitId;
					}

					// click doi HTTT
					$scope.onChangePaymentMethod = function() {
						var keySearch = {
							"code" : $scope.model.fPaymentMethod.value,
							"name" : "VND",
						}
						fctFormSaleDealer.getRate(keySearch, function(result) {
							if (result == null || result == undefined || result.status == '0') {
								bootboxAlertFocus(result.messages, "", $translate.instant("vnm.lable.vnm.name"), "");
							} else {
								if (result == '') {
									var er = $translate.instant("vnm.error.FSS-30006");
									er = er.replace(/###/, $scope.model.fPaymentMethod.code);
									bootboxAlertFocus(er, "fPaymentMethod", $translate.instant("vnm.lable.vnm.name"), "");
								} else {
									$scope.model.fRate = result;
								}
							}
						});
					}

					// khoi tao
					$scope.loadDefault = function() {
						var keySearch = {
							"formName" : FORM_NAME,
							"name" : "2,7",
							"code" : "15",
						}
						fctFormSaleDealer
								.getListApDomains(
										keySearch,
										function(result) {
											if (result.status == '0') {
												bootboxAlertFocus(result.messages, "", $translate.instant("vnm.lable.vnm.name"), "");
											} else if (result.length <= 0) {
												bootboxAlertFocus($translate.instant("vnm.form_sale_dealer.error.can.not.get.list.trans.type"), "", $translate
														.instant("vnm.lable.vnm.name"), "");
											} else if (result.length > 0) {
												$scope.TransTypeSource = result;
												$scope.model.fTransType = $scope.TransTypeSource[0];
												var keySearch = {
													"code" : $localStorage.clientContext.sessionStockID,
												}
												fctFormSaleDealer
														.getListAgents(
																keySearch,
																function(result) {
																	if (result.status == '0') {
																		bootboxAlertFocus(result.messages, "", $translate.instant("vnm.lable.vnm.name"), "");
																	} else if (result.length <= 0) {
																		bootboxAlertFocus($translate
																				.instant("vnm.form_sale_dealer.error.can.not.get.list.agents"), "", $translate
																				.instant("vnm.lable.vnm.name"), "");
																	} else if (result.length > 0) {
																		$scope.AgentSource = result;
																		var keySearch = {
																			"code" : "12",
																		}
																		fctFormSaleDealer
																				.getListApDomains(
																						keySearch,
																						function(result) {
																							if (result.status == '0') {
																								bootboxAlertFocus(result.messages, "", $translate
																										.instant("vnm.lable.vnm.name"), "");
																							} else if (result.length <= 0) {
																								bootboxAlertFocus(
																										$translate
																												.instant("vnm.form_sale_dealer.error.can.not.get.list.pay.method"),
																										"", $translate.instant("vnm.lable.vnm.name"), "");
																							} else if (result.length > 0) {
																								$scope.PaymentMethodSource = result;
																								$scope.model.fPaymentMethod = $scope.PaymentMethodSource[0];

																								var keySearch = {
																									"code" : $localStorage.clientContext.shop.shopId,
																								}
																								fctFormSaleDealer
																										.getListGoods(
																												keySearch,
																												function(result) {
																													if (result.status == '0') {
																														bootboxAlertFocus(
																																result.messages,
																																"",
																																$translate
																																		.instant("vnm.lable.vnm.name"),
																																"");
																													} else if (result.length <= 0) {
																														bootboxAlertFocus(
																																$translate
																																		.instant("vnm.form_sale_dealer.error.can.not.get.list.goods"),
																																"",
																																$translate
																																		.instant("vnm.lable.vnm.name"),
																																"");
																													} else if (result.length > 0) {
																														$scope.GoodsSource = result;

																														fctFormSaleDealer
																																.getListPromotions(function(
																																		result) {
																																	if (result.status == '0') {
																																		bootboxAlertFocus(
																																				result.messages,
																																				"",
																																				$translate
																																						.instant("vnm.lable.vnm.name"),
																																				"");
																																	} else {
																																		$scope.PromotionSource = result;

																																		var keySearch = {
																																			"code" : $scope.model.fPaymentMethod.value,
																																			"name" : "VND",
																																		}
																																		fctFormSaleDealer
																																				.getRate(
																																						keySearch,
																																						function(
																																								result) {
																																							if (result.status == '0') {
																																								bootboxAlertFocus(
																																										result.messages,
																																										"",
																																										$translate
																																												.instant("vnm.lable.vnm.name"),
																																										"");
																																							} else {
																																								if (result == '') {
																																									var er = $translate
																																											.instant("vnm.form_sale_agent.FSS-30006");
																																									er = er
																																											.replace(
																																													/###/,
																																													$scope.model.fPaymentMethod.code);
																																									bootboxAlertFocus(
																																											er,
																																											"fPaymentMethod",
																																											$translate
																																													.instant("vnm.lable.vnm.name"),
																																											"");
																																								} else {
																																									$scope.model.fRate = result;

																																									var keySearch = {
																																										"code" : "05",
																																									}
																																									fctFormSaleDealer
																																											.getListApDomains(
																																													keySearch,
																																													function(
																																															result) {
																																														if (result.status == '0') {
																																															bootboxAlertFocus(
																																																	result.messages,
																																																	"",
																																																	$translate
																																																			.instant("vnm.lable.vnm.name"),
																																																	"");
																																														} else {
																																															$scope.UnitSource = result;

																																															fctFormSaleDealer
																																																	.initMapPriceTypeAndBundle(function(
																																																			result) {
																																																		if (result.status == '0') {
																																																			bootboxAlertFocus(
																																																					result.messages,
																																																					"",
																																																					$translate
																																																							.instant("vnm.lable.vnm.name"),
																																																					"");
																																																		} else {
																																																			$scope.MapPriceTypeAndBundle = result;

																																																			$scope.model.fStaffCode = $localStorage.clientContext.shop.staffCode;
																																																			$scope.model.fStaffName = $localStorage.clientContext.shop.staffName;
																																																			$scope.model.fTransDate = $filter(
																																																					'date')
																																																					(
																																																							new Date(),
																																																							"dd/MM/yyyy");
																																																			createTableListGoodsService(lstNull);
																																																			createTableListGoodsSerial(lstNull);
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

																													}
																												});
																							}
																						});
																	}
																});
											}
										});
					}

					// create table danh sach hang hoa dich vu
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
								"mData" : "goodsCode",
								"render" : function(data, type, row) {
									x = data == null ? '' : data;
									return "<div class='text-center'>" + x + "</div>";
								}
							}, {
								"mData" : "goodsQuantity",
								"render" : function(data, type, row) {
									x = data == null ? '' : data;
									return "<div class='text-right' title='" + x + "'>" + x + "</div>";
								}
							}, {
								"mData" : "goodsPrice",
								"render" : function(data, type, row) {
									x = data == null ? '' : formatNumber(data);
									return "<div class='text-right' title='" + x + "'>" + x + "</div>";
								}
							}, {
								"mData" : "goodsDiscount",
								"render" : function(data, type, row) {
									x = data == null ? '' : data;
									return "<div class='text-right' title='" + x + "'>" + x + "</div>";
								}
							}, {
								"mData" : "goodsPromotion",
								"render" : function(data, type, row) {
									x = data == null ? '' : data;
									return "<div class='text-right' title='" + x + "'>" + x + "</div>";
								}
							}, {
								"mData" : "goodsUnit",
								"render" : function(data, type, row) {
									x = data == null ? '' : $scope.getUnitName(data);
									return "<div>" + x + "</div>";
								}
							}, {
								"mData" : "moneySum1",
								"render" : function(data, type, row) {
									x = data == null ? '' : formatNumber(data);
									return "<div class='text-right' title='" + x + "'>" + x + "</div>";
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
								if ($scope.goodsServiceSelected != ROW_NOT_SELECTED) {
									if ($scope.goodsServiceSelected.rowId == data.rowId) {
										$(row).addClass('selected');
									}
								} else {
									if (rowIndex == 0 || rowIndex == '0') {
										$(row).addClass('selected');
									}
								}
							}
						});

						$('#tableFGoodsService tbody').off().on('click', 'tr', function(e, dt, type, indexes) {
							$(this).removeClass('selected');
							var rowData = oTableItemFGoodsService.row(this).data();
							oTableItemFGoodsService.$('tr.selected').removeClass('selected');
							$(this).addClass('selected');
							$scope.goodsServiceSelected = rowData;
							createTableListGoodsSerial($scope.goodsServiceSelected.vectorSerial);
							$scope.fillDataFromTable($scope.goodsServiceSelected);
						});
					}

					$scope.fillDataFromTable = function(item) {
						$scope.model.fGoods = $scope.getGoodsObjByCode(item.goodsCode);
						$scope.model.fGoodsCode = $scope.model.fGoods.goodsCode;
						$scope.getFGoodsName()
						$scope.model.fQuantity = item.goodsQuantity;
						var keySearch = {
							"code" : item.vectorId.mstrGoodID,
							"name" : $localStorage.clientContext.shop.tariffId,
						};
						fctFormSaleDealer.getListPrices(keySearch, function(result) {
							if (result != null && result != undefined && result.status != '0') {
								$scope.PriceSource = result;
								$scope.model.fPrice = $scope.getPriceObjById(item.vectorId.mstrPriceID);
								$scope.getFPriceName();
							}
						});
						$scope.model.fPromotion = $scope.getPromotionObjById(item.vectorId.mstrPromID)
						$scope.getFPromotionName();
						$scope.model.fDiscount = item.goodsDiscount;
						$scope.model.fVat = item.vat + "%";
					}

					$scope.getGoodsObjByCode = function(goodsCode) {
						for (var i = 0; i < $scope.GoodsSource.length; i++) {
							if ($scope.GoodsSource[i].goodsCode == goodsCode) {
								return $scope.GoodsSource[i];
							}
						}
						return null;
					}

					$scope.getPriceObjById = function(priceId) {
						for (var i = 0; i < $scope.PriceSource.length; i++) {
							if ($scope.PriceSource[i].priceId == priceId) {
								return $scope.PriceSource[i];
							}
						}
						return null;
					}

					$scope.getPromotionObjById = function(promotionId) {
						for (var i = 0; i < $scope.PromotionSource.length; i++) {
							if ($scope.PromotionSource[i].promotionId == promotionId) {
								return $scope.PromotionSource[i];
							}
						}
						return null;
					}

					// create table thong tin chi tiet hang hoa
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
								"mData" : "inputDate",
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

						$('#tableFGoodsSerial tbody').off().on('click', 'tr', function(e, dt, type, indexes) {
							$(this).removeClass('selected');
							var rowData = oTableItemFGoodsSerial.row(this).data();
							oTableItemFGoodsSerial.$('tr.selected').removeClass('selected');
							$(this).addClass('selected');
						});
					}

					// khoi tao
					var initialize = function() {
						overLoading();
						$scope.loadDefault();
					}

					initialize();

					// ------------------------------------- Dialog nhap so the ------------------------------------------
					$scope.disableAction = true;
					$scope.fViewCardNo = function() {
						$scope.disableAction = true;
						if ($scope.lstTableDICNCardNo != null && $scope.lstTableDICNCardNo != undefined && $scope.lstTableDICNCardNo.length > 0) {
							$scope.dicnCardNoSelected = $scope.lstTableDICNCardNo[0];
							$scope.model.dicnCardNo = $scope.dicnCardNoSelected.cardNo;
							$scope.model.dicnPrice = $scope.dicnCardNoSelected.price;
							createTableDICNCardNo($scope.lstTableDICNCardNo);
						} else {
							createTableDICNCardNo($scope.lstNull);
						}
						$('#pnlDICNButtonAction').css('display', 'block');
						$('#pnlDICNButtonOK').css('display', 'none');
						$scope.showModalFunction("modalInputCardNo");
					}

					// create table thong tin chi tiet hang hoa
					function createTableDICNCardNo(dataItem) {
						oTableItemDICNCardNo = $('#tableDICNCardNo').DataTable({
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
							"order" : [],
							"select" : {
								style : 'single',
								info : false
							},
							"scrollX" : true,
							"scrollY" : 200,
							"columns" : [ {
								"mData" : "cardNo",
								"render" : function(data, type, row) {
									x = data == null ? '' : data;
									return "<div data-toggle='tooltip' class='text-wrap width-200' title='" + x + "'>" + x + "</div>";
								}
							}, {
								"mData" : "price",
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
								if ($scope.dicnCardNoSelected != ROW_NOT_SELECTED) {
									if ($scope.dicnCardNoSelected.rowId == data.rowId) {
										$(row).addClass('selected');
									}
								} else {
									if (rowIndex == 0 || rowIndex == '0') {
										$(row).addClass('selected');
									}
								}
							}
						});

						$('#tableDICNCardNo tbody').off().on('click', 'tr', function(e, dt, type, indexes) {
							$(this).removeClass('selected');
							var rowData = oTableItemDICNCardNo.row(this).data();
							oTableItemDICNCardNo.$('tr.selected').removeClass('selected');
							$(this).addClass('selected');
							$scope.dicnCardNoSelected = rowData;
							$scope.model.dicnCardNo = $scope.dicnCardNoSelected.cardNo;
							$scope.model.dicnPrice = $scope.dicnCardNoSelected.price;
						});
					}

					$scope.dcinTypeAction = "";
					$scope.lstTableDICNCardNo = [];
					$scope.dicnCardNoSelected = {};
					$scope.btnDICNAddOnclick = function() {
						$scope.dcinTypeAction = "ADD";
						$scope.disableAction = false;
						$scope.model.dicnCardNo = "";
						$scope.model.dicnPrice = "";
						$('#pnlDICNButtonAction').css('display', 'none');
						$('#pnlDICNButtonOK').css('display', 'block');
					}

					$scope.btnDICNEditOnclick = function() {
						if ($scope.lstTableDICNCardNo == null || $scope.lstTableDICNCardNo == undefined || $scope.lstTableDICNCardNo.length > 0) {
							$scope.dcinTypeAction = "EDIT";
							$scope.disableAction = false;
							$('#pnlDICNButtonAction').css('display', 'none');
							$('#pnlDICNButtonOK').css('display', 'block');
						} else {
							bootboxAlertFocus($translate.instant('vnm.form_sale_dealer.error.dicn.no.edit'), "", $translate.instant("vnm.lable.vnm.name"), "");
						}
					}

					$scope.btnDICNDeleteOnclick = function() {
						if ($scope.lstTableDICNCardNo == null || $scope.lstTableDICNCardNo == undefined || $scope.lstTableDICNCardNo.length > 0) {
							if ($scope.dicnCardNoSelected != null && $scope.dicnCardNoSelected != undefined) {
								bootboxConfirm($translate.instant("vnm.lable.vnm.name"), $translate.instant("vnm.messages.confirm.delete"),
										$scope.btnDICNDeleteOnclickConfirmOK, $scope.btnDICNDeleteOnclickConfirmNOK);
							}
						} else {
							bootboxAlertFocus($translate.instant('vnm.form_sale_dealer.error.dicn.no.delete'), "", $translate.instant("vnm.lable.vnm.name"), "");
						}
					}

					$scope.btnDICNDeleteOnclickConfirmOK = function() {
						angular.forEach($scope.lstTableDICNCardNo, function(objectCard, index) {
							if (objectCard.rowId == $scope.dicnCardNoSelected.rowId) {
								$scope.lstTableDICNCardNo.splice(index, 1);
								$scope.dicnCardNoSelected = $scope.lstTableDICNCardNo[0];
								createTableDICNCardNo($scope.lstTableDICNCardNo);
							}
						});
					}

					$scope.btnDICNDeleteOnclickConfirmNOK = function() {

					}

					$scope.btnDICNOkOnclick = function() {
						if (!$scope.validateDICN())
							return false;
						;
						var obj = {
							"rowId" : createTimeStamp(),
							"cardNo" : $scope.model.dicnCardNo,
							"price" : $scope.model.dicnPrice,
						}
						if ($scope.dcinTypeAction == 'ADD') {
							$scope.lstTableDICNCardNo.push(obj);
							$scope.dicnCardNoSelected = obj;
							$scope.model.dicnCardNo = "";
							$scope.model.dicnPrice = "";
						} else if ($scope.dcinTypeAction == 'EDIT') {
							for (var i = 0; i < $scope.lstTableDICNCardNo.length; i++) {
								if ($scope.dicnCardNoSelected.rowId == $scope.lstTableDICNCardNo[i].rowId) {
									$scope.lstTableDICNCardNo[i].cardNo = $scope.model.dicnCardNo;
									$scope.lstTableDICNCardNo[i].price = $scope.model.dicnPrice;
									break;
								}
							}
							$scope.dicnCardNoSelected = $scope.lstTableDICNCardNo[0];
							$scope.model.dicnCardNo = $scope.dicnCardNoSelected.cardNo;
							$scope.model.dicnPrice = $scope.dicnCardNoSelected.price;
						}

						createTableDICNCardNo($scope.lstTableDICNCardNo);
						return true;
					}

					$scope.btnDICNCancelOnclick = function() {
						if (($scope.model.dicnCardNo != null && $scope.model.dicnCardNo != undefined && $scope.model.dicnCardNo != '')
								|| ($scope.model.dicnPrice != null && $scope.model.dicnPrice != undefined && $scope.model.dicnPrice != '')) {
							bootboxConfirm3($translate.instant("vnm.lable.vnm.name"), $translate.instant("vnm.form_sale_dealer.dicn.confirm.save.database"),
									$scope.btnDICNCancelOnclickConfirmOK, $scope.btnDICNCancelOnclickConfirmCancel, $scope.btnDICNCancelOnclickConfirmNOK);
						} else {
							$scope.disableAction = true;
							$scope.model.dicnCardNo = $scope.dicnCardNoSelected.cardNo;
							$scope.model.dicnPrice = $scope.dicnCardNoSelected.price;
							$('#pnlDICNButtonAction').css('display', 'block');
							$('#pnlDICNButtonOK').css('display', 'none');
						}
					}

					$scope.btnDICNCancelOnclickConfirmOK = function() {
						if ($scope.btnDICNOkOnclick()) {
							$scope.disableAction = true;
							$scope.model.dicnCardNo = $scope.dicnCardNoSelected.cardNo;
							$scope.model.dicnPrice = $scope.dicnCardNoSelected.price;
							$('#pnlDICNButtonAction').css('display', 'block');
							$('#pnlDICNButtonOK').css('display', 'none');
						}
					}

					$scope.btnDICNCancelOnclickConfirmNOK = function() {
						$scope.disableAction = true;
						$scope.model.dicnCardNo = $scope.dicnCardNoSelected.cardNo;
						$scope.model.dicnPrice = $scope.dicnCardNoSelected.price;
						$('#pnlDICNButtonAction').css('display', 'block');
						$('#pnlDICNButtonOK').css('display', 'none');
					}

					$scope.btnDICNCancelOnclickConfirmCancel = function() {

					}

					$scope.validateDICN = function() {
						if ($scope.model.dicnCardNo == null || $scope.model.dicnCardNo == undefined || $scope.model.dicnCardNo == '') {
							bootboxAlertFocus($translate.instant('vnm.form_sale_dealer.error.dicn.empty.card.no'), "dicnCardNo", $translate
									.instant("vnm.lable.vnm.name"), "");
							return false;
						}
						if ($scope.model.dicnPrice == null || $scope.model.dicnPrice == undefined || $scope.model.dicnPrice == '') {
							bootboxAlertFocus($translate.instant('vnm.form_sale_dealer.error.dicn.empty.price'), "dicnPrice", $translate
									.instant("vnm.lable.vnm.name"), "");
							return false;
						}
						return true;
					}

					$scope.exitDICNCardNo = function() {
						var fCardNo = '';
						angular.forEach($scope.lstTableDICNCardNo, function(objectCard, index) {
							fCardNo += (objectCard.cardNo + ", ");
						});
						$scope.model.fCardNo = fCardNo.substring(0, fCardNo.length - 2);
						$scope.hideModalFunction("modalInputCardNo");
					}

					// ---------------------------------- End dialog nhap so the ---------------------------------------

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

					// ---------------------------------- Them vao danh sach -----------------------------------------
					$scope.goodsFormSelected = {}; // Input truyen xuong bao gom tat ca ca tham so tren form
					$scope.lstTableGoods = []; // Danh sach cac mat hang da them tren bang
					$scope.asTypeActionSerial = "";
					$scope.btnFAddGoods = function() {
						if (!$scope.fValidateAddGoods())
							return;
						$scope.goodsFormSelected.transType = $scope.model.fTransType;
						$scope.goodsFormSelected.agent = $scope.model.fAgent;
						$scope.goodsFormSelected.receiptCode = $scope.model.fReceiptCode;
						$scope.goodsFormSelected.paymentMethod = $scope.model.fPaymentMethod;
						$scope.goodsFormSelected.rate = $scope.model.fRate;
						$scope.goodsFormSelected.cardNo = $scope.model.fCardNo;
						$scope.goodsFormSelected.staffCode = $scope.model.fStaffCode;
						$scope.goodsFormSelected.staffName = $scope.model.fStaffName;
						$scope.goodsFormSelected.transDate = $scope.model.fTransDate;
						$scope.goodsFormSelected.goods = $scope.model.fGoods;
						$scope.goodsFormSelected.quantity = $scope.model.fQuantity;
						$scope.goodsFormSelected.price = $scope.model.fPrice;
						$scope.goodsFormSelected.promotion = $scope.model.fPromotion;
						$scope.goodsFormSelected.discount = $scope.model.fDiscount;
						$scope.goodsFormSelected.vat = $scope.model.fVat.substring(0, $scope.model.fVat.length - 1);
						$scope.goodsFormSelected.lstGoodsSaleTransaction = $scope.lstTableGoods;
						$scope.goodsFormSelected.mstrStockID = $localStorage.clientContext.sessionStockID;

						overLoading();
						fctFormSaleDealer.addGoods($scope.goodsFormSelected, function(result) {
							if (result != null && result != undefined) {
								if (result.status == '0') {
									if (result.messages.includes("FSS-30012")) {
										bootboxAlertFocus($translate.instant("vnm.error.FSS-30012"), "", $translate.instant("vnm.lable.vnm.name"), "");
									} else if (result.messages.includes("FSS-30011")) {
										var params = result.messages.split("___");
										var mess = params[1].split(",");
										var er = $translate.instant("vnm.error.FSS-30011");
										er = er.replace(/###1/, mess[0]);
										er = er.replace(/###2/, mess[1]);
										bootboxAlertFocus(er, "", $translate.instant("vnm.lable.vnm.name"), "");
									} else {
										bootboxAlertFocus(result.messages, "", $translate.instant("vnm.lable.vnm.name"), "");
									}
								} else {
									// tao lai bang sau khi them
									$scope.lstTableGoods = [];
									$scope.goodsFormSelected = result[0];
									$scope.goodsFormSelected.lstGoodsSaleTransaction.forEach(function(item) {
										$scope.lstTableGoods.push(Object.assign({}, item))
									});
									$scope.goodsServiceSelected = $scope.lstTableGoods[$scope.lstTableGoods.length - 1]
									createTableListGoodsService($scope.lstTableGoods);

									$scope.setMoney($scope.goodsFormSelected); // set thong tin tien
									$scope.model.fDiscount = $scope.goodsServiceSelected.goodsDiscount; // set discount cua mat hang sau khi tinh
									$scope.disablePayMethod = true; // disable khong cho chon lai HTTT

									$scope.asTypeActionSerial = "ADD";
									$scope.mvctUsageSerial = [];
									$scope.mGoodsSale = {};
									if($scope.goodsServiceSelected.checkSerial == '1'){
										$scope.showDialogInputSerial(); // Nhap serial cho mat hang;
									} else {
										closeOverLay();
									}
								}
							}
						});
					}

					$scope.setMoney = function(goodsSale) {
						$scope.model.fMoneyTax = goodsSale.mlngSUMMoneyTaxSum;
						$scope.model.fMoneyTaxSum = goodsSale.mlngSUMMoneyTax;
						$scope.model.fMoneyDiscount = goodsSale.mlngSUMMoneyDiscount;
						$scope.model.fMoneyProm = goodsSale.mlngSUMMoneyProm;
						$scope.model.fMoneySum = goodsSale.mlngSUMMoneySumWithProm;
						$scope.model.fMoneyNoTax = goodsSale.mlngSUMMoneyNoTax;
						$scope.model.fMoneySumNoProm = goodsSale.mlngSUMMoneySum;
					}
					
					$scope.onChangeMoneyInput = function() {
						if ($scope.model.fTotalPaid != null && $scope.model.fTotalPaid != undefined && $scope.model.fTotalPaid != '' && 
								$scope.model.fMoneySum != null && $scope.model.fMoneySum != undefined && $scope.model.fMoneySum != '') {
							if ((Math.round(parseFloat($scope.model.fTotalPaid)*10000)/10000) < (Math.round(parseFloat($scope.model.fMoneySum)*10000)/10000)) {
								bootboxAlertFocus($translate.instant("vnm.form_sale_dealer.messValidMoney"), "fTotalPaid", $translate.instant("vnm.lable.vnm.name"), "");
								$scope.model.fTotalPaid = '';
								$scope.model.fMoneyChange = '';
							} else {
								$scope.model.fMoneyChange = $scope.model.fTotalPaid - $scope.model.fMoneySum;
							}
						} else {
							$scope.model.fTotalPaid = '';
							$scope.model.fMoneyChange = '';
						}
					}

					$scope.fValidateAddGoods = function() {
						if ($scope.model.fGoods == null || $scope.model.fGoods == undefined || $scope.model.fGoods.goodsId == undefined) {
							bootboxAlertFocus($translate.instant("vnm.form_sale_dealer.error.form.empty.goods"), "fGoods", $translate
									.instant("vnm.lable.vnm.name"), "");
							return false;
						}
						if ($scope.model.fQuantity == null || $scope.model.fQuantity == undefined || $scope.model.fQuantity == '') {
							bootboxAlertFocus($translate.instant("vnm.form_sale_dealer.error.form.empty.quantity"), "fQuantity", $translate
									.instant("vnm.lable.vnm.name"), "");
							return false;
						}
						if ($scope.model.fPrice == null || $scope.model.fPrice == undefined || $scope.model.fPrice.priceId == undefined) {
							bootboxAlertFocus($translate.instant("vnm.form_sale_dealer.error.form.empty.price"), "fPrice", $translate
									.instant("vnm.lable.vnm.name"), "");
							return false;
						}
						if ($scope.model.fRate == null || $scope.model.fRate == undefined || $scope.model.fRate == '') {
							bootboxAlertFocus($translate.instant("vnm.form_sale_dealer.error.form.empty.rate"), "fRate", $translate
									.instant("vnm.lable.vnm.name"), "");
							return false;
						}
						return true;
					}
					// ---------------------------------- End Them vao danh sach -------------------------------------

					// ---------------------------------- Dialog nhap serial cho hang hoa them vao danh sach -----------------------------------------
					$scope.mvctUsageSerial = [];
					$scope.mGoodsSale = {};
					$scope.ASSerialSource = [];
					$scope.showDialogInputSerial = function() {
						if ($scope.mGoodsSale.goodsId == null || $scope.mGoodsSale.goodsId == undefined) {
							$scope.mGoodsSale.goodsId = $scope.model.fGoods.goodsId;
							$scope.mGoodsSale.goodsCode = $scope.model.fGoods.goodsCode;
							$scope.mGoodsSale.goodsQuantity = $scope.model.fQuantity;
						}

						var initInput = {
							"transType" : $scope.model.fTransType.code,
							"goodsId" : $scope.mGoodsSale.goodsId,
							"stockId" : $localStorage.clientContext.sessionStockID,
							"mvctUsageSerial" : $scope.mvctUsageSerial,
							"flag" : $scope.asTypeActionSerial,
							"formName" : "FormSaleDealer",
							"lstTableGoods" : $scope.lstTableGoods,
							"goodsCode" : $scope.mGoodsSale.goodsCode,
						};
						fctFormSaleDealer.initASData(initInput, function(result) {
							if (result != null && result != undefined) {
								if (result.status == '0') {
									bootboxAlertFocus(result.messages, "", $translate.instant("vnm.lable.vnm.name"), "");
								} else {
									$scope.ASSerialSource = result;
									$scope.disableASToSerial = true;
									$scope.model.asSerialTypeSearch = "single";
									$scope.model.asQuantity = $scope.model.fQuantity;
									$scope.model.asGoodsCode = $scope.model.fGoods.goodsCode;
									$scope.model.asGoodsName = $scope.model.fGoods.name;
									document.getElementById('asGoodsCode').title = $scope.model.fGoods.goodsCode;
									document.getElementById('asGoodsName').title = $scope.model.fGoods.name;
									$scope.model.asFromSerial = {};
									$scope.model.asToSerial = {};
									if ($scope.asTypeActionSerial == "ADD") {
										$scope.lstTableASSerial = []
										createASTableInputSerial(lstNull);
									} else if ($scope.asTypeActionSerial == "MODIFY") {
										$scope.lstTableASSerial = $scope.goodsServiceSelected.vectorSerial;
										createASTableInputSerial($scope.lstTableASSerial);
									}
									$scope.showModalFunction("modalAddSerialSaleTrans");
									closeOverLay();
								}
							}
						});
					}

					$scope.serialTypeChangeFn = function(type) {
						if (type == "single") {
							$scope.disableASToSerial = true;
							$scope.model.asToSerial = {};
						} else if (type == "strip") {
							$scope.disableASToSerial = false;
						} else if (type == "list") {
							$scope.hideModalFunction("modalAddSerialSaleTrans");
							$scope.showDialogInputSerialList();
						}
					}

					$scope.showDialogInputSerialList = function() {
						$scope.model.aslQuantity = $scope.model.fQuantity;
						$scope.model.aslGoodsCode = $scope.model.fGoods.goodsCode;
						$scope.model.aslGoodsName = $scope.model.fGoods.name;
						document.getElementById('aslGoodsCode').title = $scope.model.fGoods.goodsCode;
						document.getElementById('aslGoodsName').title = $scope.model.fGoods.name;
						$scope.model.aslStock = $scope.model.fStaffCode;
						$scope.model.aslStockName = $scope.model.fStaffName;
						$scope.listSelectItemCheckBox = [];
						createASTableInputSerialList($scope.ASSerialSource);
						$scope.showModalFunction("modalAddSerialListSaleTrans");
					}

					$scope.btnASAddOnclick = function() {
						if (!$scope.asValidInput())
							return;
						createASTableInputSerial($scope.lstTableASSerial);
					}

					$scope.asValidInput = function() {
						if ($scope.model.asFromSerial == null || $scope.model.asFromSerial == undefined || $scope.model.asFromSerial.serial == undefined) {
							bootboxAlertFocus($translate.instant("vnm.dialog_input_serial.error.from.serial.empty"), "", $translate
									.instant("vnm.lable.vnm.name"), "");
							return false;
						}
						$scope.itemASFromSerialSelected = {};
						if ($scope.ASSerialSource != null && $scope.ASSerialSource != undefined && $scope.ASSerialSource.length > 0) {
							var isExist = false;
							for (var i = 0; i < $scope.ASSerialSource.length; i++) {
								if ($scope.model.asFromSerial.serial == $scope.ASSerialSource[i].serial) {
									isExist = true;
									$scope.itemASFromSerialSelected = $scope.ASSerialSource[i]
									break;
								}
							}
							if (!isExist) {
								bootboxAlertFocus($translate.instant("vnm.dialog_input_serial.error.from.serial.not.exists"), "", $translate
										.instant("vnm.lable.vnm.name"), "");
								return false;
							}
						} else {
							bootboxAlertFocus($translate.instant("vnm.dialog_input_serial.error.from.serial.not.exists"), "", $translate
									.instant("vnm.lable.vnm.name"), "");
							return false;
						}

						if ($scope.model.asSerialTypeSearch == 'single') {
							if (!$scope.checkExistSerial($scope.itemASFromSerialSelected, "single"))
								return false;
						} else if ($scope.model.asSerialTypeSearch == 'strip') {
							if ($scope.model.asToSerial == null || $scope.model.asToSerial == undefined || $scope.model.asToSerial.serial == undefined) {
								bootboxAlertFocus($translate.instant("vnm.dialog_input_serial.error.to.serial.empty"), "", $translate
										.instant("vnm.lable.vnm.name"), "");
								return false;
							}
							if ($scope.ASSerialSource != null && $scope.ASSerialSource != undefined && $scope.ASSerialSource.length > 0) {
								var isExist = false;
								for (var i = 0; i < $scope.ASSerialSource.length; i++) {
									if ($scope.model.asToSerial.serial == $scope.ASSerialSource[i].serial) {
										isExist = true;
										break;
									}
								}
								if (!isExist) {
									bootboxAlertFocus($translate.instant("vnm.dialog_input_serial.error.to.serial.not.exists"), "", $translate
											.instant("vnm.lable.vnm.name"), "");
									return false;
								}
							} else {
								bootboxAlertFocus($translate.instant("vnm.dialog_input_serial.error.to.serial.not.exists"), "", $translate
										.instant("vnm.lable.vnm.name"), "");
								return false;
							}
							var mstrFromSerial = $scope.model.asFromSerial.serial;
							var mstrToSerial = $scope.model.asToSerial.serial;
							var length = 0;
							for (var i = 0; i < mstrFromSerial.length; i++) {
								if (mstrFromSerial.charAt(i) != mstrToSerial.charAt(i)) {
									length = i;
									break;
								}
							}

							var subA = mstrFromSerial.substring(length, mstrFromSerial.length);
							var subB = mstrToSerial.substring(length, mstrToSerial.length);

							if (subA.localeCompare(subB) > 0) {
								bootboxAlertFocus($translate.instant("vnm.dialog_input_serial.error.from.must.less.to.serial"), "", $translate
										.instant("vnm.lable.vnm.name"), "");
								return false;
							}

							$scope.checkSerialTrip($scope.model.asFromSerial, $scope.model.asToSerial);
						}
						return true;
					}

					$scope.checkExistSerial = function(fromSerial, type) {
						if ($scope.lstTableASSerial != null && $scope.lstTableASSerial != undefined && $scope.lstTableASSerial.length > 0) {
							for (var i = 0; i < $scope.lstTableASSerial.length; i++) {
								if ($scope.lstTableASSerial[i].serial == fromSerial.serial) {
									var er = $translate.instant("vnm.error.FSS-30003");
									er = er.replace(/###/, fromSerial.serial);
									if (type == "single") {
										bootboxAlertFocus(er, "", $translate.instant("vnm.lable.vnm.name"), "");
									}
									return false;
								}
							}
						}
						if (type == "single") {
							$scope.lstTableASSerial.push(fromSerial);
						}
						return true;
					}

					$scope.checkSerialTrip = function(fromSerial, toSerial) {
						for (var i = 0; i < $scope.ASSerialSource.length; i++) {
							var vstrSerial = $scope.ASSerialSource[i].serial;
							if (!$scope.checkExistSerial($scope.ASSerialSource[i], "strip"))
								continue;

							if ((vstrSerial.localeCompare(fromSerial.serial)) >= 0 && (vstrSerial.localeCompare(toSerial.serial)) <= 0) {
								$scope.lstTableASSerial.push($scope.ASSerialSource[i]);
							}
						}
					}

					$scope.btnASDeleteOnclick = function() {
						var lstTableASSerialTemp = [];
						var table = $('#tableASInputSerial').DataTable();
						angular.forEach($scope.lstTableASSerial, function(objSerial, index) {
							var row = table.row(index);
							var className = row.node().className;
							if (!className.includes("selected")) {
								lstTableASSerialTemp.push(objSerial);
							}
						});
						$scope.lstTableASSerial = [];
						lstTableASSerialTemp.forEach(function(item) {
							$scope.lstTableASSerial.push(Object.assign({}, item))
						});
						createASTableInputSerial($scope.lstTableASSerial);
					}

					$scope.btnASApproveOnclick = function() {
						if ($scope.asTypeActionSerial == "ADD") {
							if ($scope.lstTableASSerial.length != $scope.goodsServiceSelected.goodsQuantity) {
								var er = $translate.instant("vnm.error.FSS-30002");
								er = er.replace(/###/, $scope.goodsServiceSelected.goodsQuantity);
								bootboxAlertFocus(er, "", $translate.instant("vnm.lable.vnm.name"), "");
								return;
							}
						} else if ($scope.asTypeActionSerial == "MODIFY") {
							if ($scope.lstTableASSerial.length != $scope.model.asQuantity) {
								var er = $translate.instant("vnm.error.FSS-30002");
								er = er.replace(/###/, $scope.model.asQuantity);
								bootboxAlertFocus(er, "", $translate.instant("vnm.lable.vnm.name"), "");
								return;
							}
							$scope.goodsServiceSelected.goodsQuantity = $scope.model.asQuantity;
						}

						$scope.goodsServiceSelected.vectorSerial = [];
						$scope.lstTableASSerial.forEach(function(item) {
							$scope.goodsServiceSelected.vectorSerial.push(Object.assign({}, item))
						});
						createTableListGoodsSerial($scope.goodsServiceSelected.vectorSerial);
						$scope.hideModalFunction("modalAddSerialSaleTrans");
						$scope.showDialogAttachGoods();
					}

					$scope.btnASCancelOnclick = function() {
						$scope.goodsServiceSelected.vectorSerial = [];
						createTableListGoodsSerial($scope.goodsServiceSelected.vectorSerial);
						$scope.hideModalFunction("modalAddSerialSaleTrans");
						$scope.showDialogAttachGoods();
					}

					$scope.lstTableASSerial = [];
					function createASTableInputSerial(dataItem) {
						oTableItemASInputSerial = $('#tableASInputSerial').DataTable({
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
							"order" : [],
							"select" : {
								style : 'os',
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
								"mData" : "inputDate",
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

						$('#tableASInputSerial tbody').off().on('click', 'tr', function(e, dt, type, indexes) {
							if (!e.ctrlKey) {
								oTableItemASInputSerial.$('tr.selected').removeClass('selected');
							}
							$(this).addClass('selected');
						});
					}

					// F9 Danh sach tu so serial
					$scope.onF9ASFromSerial = function(e) {
						var code = (e.keyCode ? e.keyCode : e.which);
						if (code == '120') {
							$scope.showModalFunction("modalListASFromSerial");
							createDataTableListSerial($scope.ASSerialSource);
						}
					}

					function createDataTableListSerial(dataItem) {
						oTableFListSerial = $('#tblListSerial').DataTable({
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
								"mData" : "serial",
								"render" : function(data, type, row) {
									return "<div data-toggle='tooltip' class='text-wrap width-200' title='" + data + "'>" + data + "</div>";
								}
							}, {
								"mData" : "inputDate",
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
								if (rowIndex == 0 || rowIndex == '0') {
									$(row).addClass('selected');
									$scope.itemASFromSerialSelected = data;
								}
							}
						});

						$('#tblListSerial tbody').off().on('click', 'tr', function(e, dt, type, indexes) {
							$(this).removeClass('selected');
							var rowData = oTableFListSerial.row(this).data();
							oTableFListSerial.$('tr.selected').removeClass('selected');
							$(this).addClass('selected');
							$scope.itemASFromSerialSelected = rowData;
						});
					}

					$scope.updateASFromSerial = function() {
						$scope.model.asFromSerial = $scope.itemASFromSerialSelected;
						$scope.hideModalFunction("modalListASFromSerial");
					}

					$scope.dialogListSerialActionBack = function() {
						$scope.hideModalFunction("modalListASFromSerial");
						$scope.hideModalFunction("modalListASToSerial");
					}

					// F9 Danh sach den so serial
					$scope.onF9ASToSerial = function(e) {
						var code = (e.keyCode ? e.keyCode : e.which);
						if (code == '120') {
							$scope.showModalFunction("modalListASToSerial");
							createDataTableListASToSerial($scope.ASSerialSource);
						}
					}

					function createDataTableListASToSerial(dataItem) {
						oTableFListASToSerial = $('#tblListASToSerial').DataTable({
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
								"mData" : "serial",
								"render" : function(data, type, row) {
									return "<div data-toggle='tooltip' class='text-wrap width-200' title='" + data + "'>" + data + "</div>";
								}
							}, {
								"mData" : "inputDate",
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
								if (rowIndex == 0 || rowIndex == '0') {
									$(row).addClass('selected');
									$scope.itemASToSerialSelected = data;
								}
							}
						});

						$('#tblListASToSerial tbody').off().on('click', 'tr', function(e, dt, type, indexes) {
							$(this).removeClass('selected');
							var rowData = oTableFListASToSerial.row(this).data();
							oTableFListASToSerial.$('tr.selected').removeClass('selected');
							$(this).addClass('selected');
							$scope.itemASToSerialSelected = rowData;
						});
					}

					$scope.updateASToSerial = function() {
						$scope.model.asToSerial = $scope.itemASToSerialSelected;
						$scope.hideModalFunction("modalListASToSerial");
					}

					// Dialog nhap serial theo danh sach
					function createASTableInputSerialList(dataItem) {
						oTableItemASInputSerialList = $('#tableASInputSerialList')
								.DataTable(
										{
											'columnDefs' : [ {
												'targets' : 0,
												"orderable" : false,
												'checkboxes' : {
													'selectRow' : true
												}
											} ],
											'select' : {
												'style' : 'multi'
											},
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
											"order" : [],
											"select" : {
												style : 'single',
												info : false
											},
											"scrollX" : true,
											"scrollY" : 200,
											"columns" : [
													{
														"mData" : "serial",
														"render" : function(data, type, row) {
															x = data == null ? '' : data;
															return "<div data-toggle='tooltip' class='text-wrap width-200' title='" + x + "'>" + x + "</div>";
														}
													},
													{
														"mData" : "inputDate",
														"render" : function(data, type, row) {
															x = data == null ? '' : data;
															return "<div data-toggle='tooltip' class='text-wrap width-200' title='" + x + "'>" + x + "</div>";
														}
													},
													{
														"mData" : "checkBoxId",
														"render" : function(data, type, row) {
															x = data == null ? '' : data;
															return '<input type="checkbox" class="form-control" style="width:17px; margin-left: 22px" id="first-child" value="'
																	+ x + '"></input>';
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

						// check box all
						$('#checkAll').on('click', function() {
							var rows = oTableItemASInputSerialList.rows({
								'search' : 'applied'
							}).nodes();

							$('input[type="checkbox"]', rows).prop('checked', this.checked);
							$scope.checkAllCheckBox();
						});

						// check box row
						$('#tableASInputSerialList').off().on('click', 'input[type="checkbox"]', function(e, dt, type, indexes) {
							$scope.onCheckedClick(this.value);
						});

						$('.dataTables_scrollBody thead tr').css({
							visibility : 'collapse'
						});

						$("#checkAlls").removeClass("sorting");
						$("#checkAll").css('width', '17px');
						$("#checkAll").css('margin-left', '18px');

						$compile(angular.element('#tableASInputSerialList'))($scope);
					}

					$scope.listSelectItemCheckBox = [];
					$scope.findRow = function(checkBoxId) {
						var row = {};
						for (var i = 0; i < $scope.ASSerialSource.length; i++) {
							if ($scope.ASSerialSource[i].checkBoxId == checkBoxId) {
								row = $scope.ASSerialSource[i];
								break;
							}
						}
						return row;
					}

					$scope.checkListSelectItemCheckBox = function(row) {
						var check = 0;
						if ($scope.listSelectItemCheckBox.length == 0) {
							return 0;
						}
						for (var i = 0; i < $scope.listSelectItemCheckBox.length; i++) {
							if ($scope.listSelectItemCheckBox[i].checkBoxId == row.checkBoxId) {
								check = check + 1;
							}
						}
						if (check == 0)
							return 0;
						else
							return 1;
					}

					$scope.onCheckedClick = function(item) {
						var row = $scope.findRow(item);
						if ($scope.checkListSelectItemCheckBox(row) == 0) {
							$scope.listSelectItemCheckBox.push(row);
						} else {
							for (var i = 0; i < $scope.listSelectItemCheckBox.length; i++) {
								while ($scope.listSelectItemCheckBox[i].checkBoxId == row.checkBoxId) {
									$scope.listSelectItemCheckBox.splice(i, 1);
									break;
								}
							}
						}
						if ($scope.listSelectItemCheckBox.length == $scope.ASSerialSource.length) {
							$scope.model.checkAll = true;
						} else {
							$scope.model.checkAll = false;
						}
					}

					$scope.checkAllCheckBox = function() {
						if ($('#checkAll:checked').length > 0) { // Khi click check all
							$scope.listSelectItemCheckBox = $scope.ASSerialSource.slice(0, $scope.ASSerialSource.length);
						} else { // Khi bo click check all
							$scope.listSelectItemCheckBox = [];
						}
					}

					$scope.btnASLApproveOnclick = function() {
						if ($scope.listSelectItemCheckBox.length != $scope.goodsServiceSelected.goodsQuantity) {
							var er = $translate.instant("vnm.error.FSS-30002");
							er = er.replace(/###/, $scope.goodsServiceSelected.goodsQuantity);
							bootboxAlertFocus(er, "", $translate.instant("vnm.lable.vnm.name"), "");
							return;
						}

						$scope.goodsServiceSelected.vectorSerial = [];
						$scope.listSelectItemCheckBox.forEach(function(item) {
							$scope.goodsServiceSelected.vectorSerial.push(Object.assign({}, item))
						});
						createTableListGoodsSerial($scope.goodsServiceSelected.vectorSerial);
						$scope.hideModalFunction("modalAddSerialListSaleTrans");
						$scope.showDialogAttachGoods();
					}

					$scope.btnASLCancelOnclick = function() {
						if ($scope.asTypeActionSerial == "MODIFY") {

						}
						$scope.goodsServiceSelected.vectorSerial = [];
						createTableListGoodsSerial($scope.goodsServiceSelected.vectorSerial);
						$scope.hideModalFunction("modalAddSerialListSaleTrans");
						$scope.showDialogAttachGoods();
					}

					// ---------------------------------- End Dialog nhap serial cho hang hoa them vao danh sach -------------------------------------

					// ---------------------------------- Xoa mat hang tren form -------------------------------------------------
					$scope.openAttach = false;
					$scope.btnFDeleteOnclick = function() {
						if ($scope.goodsServiceSelected != null && $scope.goodsServiceSelected != undefined
								&& $scope.goodsServiceSelected.goodsCode != undefined) {
							var vstrPrimaryGoodsCode = StringUtilNVL($scope.goodsServiceSelected.primaryGoodsCode);
							var vtAttachGoods = $scope.goodsServiceSelected.attachGoods;
							if (vstrPrimaryGoodsCode != "" || (vtAttachGoods != null && vtAttachGoods != undefined && vtAttachGoods.length > 0)) {
								$scope.openAttach = false;
								bootboxConfirm($translate.instant("vnm.lable.vnm.name"), $translate.instant("vnm.form_sale_dealer.confirm.delete.attach.goods"),
										$scope.btnFDeleteOnclickConfirmOK, $scope.btnFDeleteOnclickConfirmNOK);
							} else {
								$scope.deleteGoods();
								if ($scope.lstTableGoods.length <= 0) {
									$scope.disablePayMethod = false;
								}
							}
						}
					}

					$scope.btnFDeleteOnclickConfirmOK = function() {
						$scope.deleteGoods();
						if ($scope.lstTableGoods.length <= 0) {
							$scope.disablePayMethod = false;
						}
					}

					$scope.btnFDeleteOnclickConfirmNOK = function() {

					}

					$scope.deleteGoods = function() {
						var objDelete = {
							"rate" : $scope.model.fRate,
							"lstGoodsSaleTransaction" : $scope.lstTableGoods,
							"goodsSaleSelected" : $scope.goodsServiceSelected,
						};

						fctFormSaleDealer.deleteGoods(objDelete, function(result) {
							if (result != null && result != undefined) {
								if (result.status == '0') {
									bootboxAlertFocus(result.messages, "", $translate.instant("vnm.lable.vnm.name"), "");
								} else {
									$scope.lstTableGoods = [];
									$scope.goodsFormSelected = result[0];
									$scope.goodsFormSelected.lstGoodsSaleTransaction.forEach(function(item) {
										$scope.lstTableGoods.push(Object.assign({}, item))
									});
									if ($scope.lstTableGoods.length > 0) {
										$scope.goodsServiceSelected = $scope.lstTableGoods[$scope.lstTableGoods.length - 1];
										$scope.model.fDiscount = $scope.goodsServiceSelected.goodsDiscount; // set discount cua mat hang sau khi tinh
										$scope.disablePayMethod = true; // disable khong cho chon lai HTTT
										createTableListGoodsService($scope.lstTableGoods);
										createTableListGoodsSerial($scope.goodsServiceSelected.vectorSerial);
										$scope.fillDataFromTable($scope.goodsServiceSelected);
									} else {
										$scope.goodsServiceSelected = {};
										$scope.model.fDiscount = '';
										$scope.disablePayMethod = false;
										createTableListGoodsService(lstNull);
										createTableListGoodsSerial(lstNull);
										$scope.mvctUsageSerial = [];
									}

									$scope.setMoney($scope.goodsFormSelected); // set thong tin tien
								}
							}
							
							if ($scope.lstTableGoods.length <= 0) {
								$scope.listCheckAttachGoods = [];
							} else {
								if ($scope.openAttach && $scope.listCheckAttachGoods.length > 0) {
									$scope.goodsServiceSelected = $scope.listCheckAttachGoods[0];
									$scope.openDialogAttach($scope.goodsServiceSelected);
								}
							}
						});
					}
					// ---------------------------------- End Xoa mat hang tren form -------------------------------------------------

					// ---------------------------------- Sửa serial của mặt hàng ----------------------------------------
					$scope.btnFEditOnclick = function() {
						if ($scope.goodsServiceSelected.checkSerial == '0') {
							return;
						}

						overLoading();
						$scope.asTypeActionSerial = 'MODIFY';
						$scope.mGoodsSale = {};
						$scope.mGoodsSale.goodsQuantity = $scope.goodsServiceSelected.goodsQuantity;
						$scope.mGoodsSale.goodsCode = $scope.goodsServiceSelected.goodsCode;
						var strGoodsID = $scope.goodsServiceSelected.vectorId.mstrGoodID;
						$scope.mGoodsSale.goodsId = strGoodsID;

						$scope.mvctUsageSerial = $scope.getUsageVectorSerial();

						$scope.showDialogInputSerial();
					}

					$scope.getUsageVectorSerial = function() {
						var vtReturn = [];
						var strGoodsCode = $scope.goodsServiceSelected.goodsCode;
						for (var i = 0; i < $scope.lstTableGoods.length; i++) {
							if ($scope.lstTableGoods[i].rowId == $scope.goodsServiceSelected.rowId) {
								continue;
							}

							var rowListGoods = $scope.lstTableGoods[i];
							var strSameGoodsCode = rowListGoods.goodsCode;

							if (strGoodsCode == strSameGoodsCode) {
								var vtSerialList = rowListGoods.vectorSerial;
								for (var m = 0; m < rowListGoods.vectorSerial.length; m++) {
									var vtRow = rowListGoods.vectorSerial[m];
									vtReturn.push(vtRow);
								}
							}
						}
						return vtReturn;
					}
					// ---------------------------------- End Sửa serial của mặt hàng ----------------------------------------

					// ---------------------------------- Ghi thong tin giao dich --------------------------------------------
					$scope.checkPayment = function() {
						if ($scope.model.fTotalPaid != undefined && $scope.model.fTotalPaid != '') {
							var mlngTotalPaid = $scope.model.fTotalPaid; // Tien KH tra
							var mnlgMoneySumWithProm = $scope.model.fMoneySum; // Tong tien phai tra, da tru KM
							if (mnlgMoneySumWithProm > mlngTotalPaid) {
								bootboxAlertFocus($translate.instant("vnm.form_sale_dealer.messValidMoney"), "", $translate.instant("vnm.lable.vnm.name"), "");
								$scope.model.fTotalPaid = '';
								$scope.model.fMoneyChange = '';
								return false;
							} else {
								$scope.model.fMoneyChange = mlngTotalPaid - mnlgMoneySumWithProm;
								return true;
							}
						} else {
							return true;
						}
					}

					var mstrAccountType = '';
					$scope.btnFSaveOnclick = function() {
						if (!$scope.checkPayment())
							return;
						if (!$scope.fValidInputWriteInfo())
							return;

						overLoading();
						var objWriteInfo = {
							"transType" : $scope.model.fTransType,
							"agent" : $scope.model.fAgent,
							"receiptCode" : $scope.model.fReceiptCode,
							"paymentMethod" : $scope.model.fPaymentMethod,
							"rate" : $scope.model.fRate,
							"cardNo" : $scope.model.fCardNo,
							"staffCode" : $scope.model.fStaffCode,
							"staffName" : $scope.model.fStaffName,
							"transDate" : $scope.model.fTransDate,
							"lstGoodsSaleTransaction" : $scope.lstTableGoods,
							"mlngSUMMoneySum" : $scope.model.fMoneySumNoProm,
						}

						fctFormSaleDealer.writeInfo(objWriteInfo, function(result) {
							if (result.status == '0') {
								if (result.messages.includes("OOM-10005") || result.messages.includes("FSS-30014") || result.messages.includes("FSS-30019")
										|| result.messages.includes("FSS-30001") || result.messages.includes("FSS-30000")
										|| result.messages.includes("FSS-30017") || result.messages.includes("OOM-10001")
										|| result.messages.includes("OOM-10014")) {
									var lstEr = result.messages.split("___");
									if (lstEr.length == 2) {
										var er = $translate.instant("vnm.error." + lstEr[0]);
										var lstParams = lstEr[1].split("#");
										if (lstParams.length >= 0) {
											er = er.replace(/###1/, lstParams[0]);
											if (lstParams.length >= 1) {
												er = er.replace(/###2/, lstParams[1]);
												if (lstParams.length >= 2) {
													er = er.replace(/###3/, lstParams[2]);
												}
											}
										}
										bootboxAlertFocus(er, "", $translate.instant("vnm.lable.vnm.name"), "");
									} else {
										bootboxAlertFocus(result.messages, "", $translate.instant("vnm.lable.vnm.name"), "");
									}
								} else if (result.messages.includes("DebtInfo")) {
									var lstEr = result.messages.split("___");
									var lstParams = lstEr[1].split("#");
									if (result.messages.includes("LimitedReached")) {
										er = $translate.instant("vnm.form_sale_dealer.LimitedReached");
										er = er.replace(/###5/, lstParams[4]);
										mstrAccountType = '';
									} else if (result.messages.includes("AlertReached")) {
										er = $translate.instant("vnm.form_sale_dealer.AlertReached");
										er = er.replace(/###5/, lstParams[4]);
										mstrAccountType = lstParams[0];
									} else {
										er = $translate.instant("vnm.form_sale_dealer.DebtInfo");
										mstrAccountType = lstParams[0];
									}
									er = er.replace(/###1/, lstParams[0]);
									er = er.replace(/###2/, lstParams[1]);
									er = er.replace(/###3/, lstParams[2]);
									er = er.replace(/###4/, lstParams[3]);

									if (mstrAccountType != '') {
										$scope.bootboxAlertFocusS(er, "", $translate.instant("vnm.lable.vnm.name"), result.messages.includes("AlertReached") ? "AlertReached" : "");
									} else {
										bootboxAlertFocus(er, "", $translate.instant("vnm.lable.vnm.name"), "LimitedReached");
									}
								} else {
									bootboxAlertFocus(result.messages, "", $translate.instant("vnm.lable.vnm.name"), "");
								}
							} else {
								mstrAccountType = result;
								bootboxConfirm($translate.instant("vnm.lable.vnm.name"), $translate.instant("vnm.form_sale_dealer.confirm.save.transaction"),
										$scope.onSaveTransactionConfirmOK, $scope.onSaveTransactionConfirmNOK);
							}
							closeOverLay();
						});
					}

					$scope.mstrTransactionID = '';
					$scope.onSaveTransactionConfirmOK = function() {
						$scope.goodsFormSelected = {};
						$scope.goodsFormSelected.transType = $scope.model.fTransType;
						$scope.goodsFormSelected.agent = $scope.model.fAgent;
						$scope.goodsFormSelected.receiptCode = $scope.model.fReceiptCode;
						$scope.goodsFormSelected.paymentMethod = $scope.model.fPaymentMethod;
						$scope.goodsFormSelected.rate = $scope.model.fRate;
						$scope.goodsFormSelected.cardNo = $scope.model.fCardNo;
						$scope.goodsFormSelected.staffCode = $scope.model.fStaffCode;
						$scope.goodsFormSelected.staffName = $scope.model.fStaffName;
						$scope.goodsFormSelected.transDate = $scope.model.fTransDate;
						$scope.goodsFormSelected.goods = $scope.model.fGoods;
						$scope.goodsFormSelected.quantity = $scope.model.fQuantity;
						$scope.goodsFormSelected.price = $scope.model.fPrice;
						$scope.goodsFormSelected.promotion = $scope.model.fPromotion;
						$scope.goodsFormSelected.discount = $scope.model.fDiscount;
						$scope.goodsFormSelected.vat = $scope.model.fVat.substring(0, $scope.model.fVat.length - 1);
						$scope.goodsFormSelected.lstGoodsSaleTransaction = $scope.lstTableGoods;
						$scope.goodsFormSelected.mstrStockStaffID = $localStorage.clientContext.sessionStaffStockID,
								$scope.goodsFormSelected.mstrShopID = $localStorage.clientContext.shop.shopId,
								$scope.goodsFormSelected.mstrStaffID = $localStorage.clientContext.shop.staffId,
								$scope.goodsFormSelected.mstrStockID = $localStorage.clientContext.sessionStockID,
								$scope.goodsFormSelected.lstCardNo = $scope.lstTableDICNCardNo;
						$scope.goodsFormSelected.reasonId = 'XDL';
						$scope.goodsFormSelected.mstrAccountType = mstrAccountType;

						fctFormSaleDealer.saveTransaction($scope.goodsFormSelected, function(result) {
							if (result.status == '0') {
								bootboxAlertFocus(result.messages, "", $translate.instant("vnm.lable.vnm.name"), "");
							} else {
								$scope.mstrTransactionID = result;
								bootboxAlertFocus($translate.instant("vnm.form_sale_dealer.MSG2"), "", $translate.instant("vnm.lable.vnm.name"), "success");
								$scope.loadDataAfterUpdate();
								$scope.refresh();
								$scope.disablePrint = false;
							}
						});
					}

					$scope.onSaveTransactionConfirmNOK = function() {

					}

					// Lay lai danh sach mat hang de lay so luong hang con duoc them
					$scope.loadDataAfterUpdate = function() {
						var keySearch = {
							"code" : $localStorage.clientContext.shop.shopId,
						}
						fctFormSaleDealer.getListGoods(keySearch, function(result) {
							if (result.status == '0') {
								bootboxAlertFocus(result.messages, "", $translate.instant("vnm.lable.vnm.name"), "");
							} else if (result.length <= 0) {
								bootboxAlertFocus($translate.instant("vnm.form_sale_dealer.error.can.not.get.list.goods"), "", $translate
										.instant("vnm.lable.vnm.name"), "");
							} else if (result.length > 0) {
								$scope.GoodsSource = result;
								var keySearchX = {
									"code" : $scope.model.fAgent.code,
								}
								fctFormSaleDealer.getSOCode(keySearchX, function(result2) {
									if (result2 == null || result2 == undefined || result2.status == '0') {
										bootboxAlertFocus(result2.messages, "", $translate.instant("vnm.lable.vnm.name"), "");
									} else {
										$scope.model.fReceiptCode = result2;
									}
								});
							}
						});
					}

					$scope.refresh = function() {
						$scope.disablePayMethod = false;

						// reset panel chon thong tin hang hoa
						$scope.model.fGoods = {};
						$scope.model.fGoodsCode = '';
						$scope.getFGoodsName();
						$scope.model.fQuantity = '';
						$scope.model.fPrice = {};
						$scope.getFPriceName();
						$scope.model.fPromotion = {};
						$scope.getFPromotionName();
						$scope.model.fDiscount = '';
						$scope.model.fVat = '';

						// reset 2 bang mat hang, serial
						$scope.clearLstTableGoods()

						// reset panel tong tien
						$scope.model.fMoneyNoTax = '0';
						$scope.model.fMoneyProm = '0';
						$scope.model.fMoneyDiscount = '0';
						$scope.model.fMoneyTax = '0';
						$scope.model.fMoneyTaxSum = '0';
						$scope.model.fMoneySum = '0';
						$scope.model.fTotalPaid = '';
						$scope.onChangeMoneyInput();

						// reset thong tin the
						$scope.model.fCardNo = '';
						$scope.dcinTypeAction = "";
						$scope.lstTableDICNCardNo = [];
						$scope.dicnCardNoSelected = {};
					}

					$scope.bootboxAlertFocusS = function(message, focusId, title, icon) {
						var mesIcon = 'fa fa-exclamation-circle';
						var color = 'orange';
						if (icon != null && icon != undefined && icon != '') {
							if (icon == 'AlertReached') {
								color = 'red';
							}
						}
						bootbox.alert({
							size : "medium",
							message : "<i class='" + mesIcon + "' style='font-size:20px; color:" +color+ "; margin-right:20px;'></i>" + message,
							title : title,
						}).on(
								'hidden.bs.modal',
								function(event) {
									bootboxConfirm($translate.instant("vnm.lable.vnm.name"), $translate
											.instant("vnm.form_sale_dealer.confirm.save.transaction"), $scope.onSaveTransactionConfirmOK,
											$scope.onSaveTransactionConfirmNOK);
								}).find(".modal-dialog").css({
							'width' : '450px',
							'margin-top' : function() {
								var w = $(window).height();
								var h = w / 5;
								return h + "px";
							}
						});
					}

					$scope.fValidInputWriteInfo = function() {
						if ($scope.model.fAgent == null || $scope.model.fAgent == undefined || $scope.model.fAgent.stockId == undefined) {
							bootboxAlertFocus($translate.instant("vnm.form_sale_dealer.error.form.empty.agent"), "fAgent", $translate
									.instant("vnm.lable.vnm.name"), "");
							return false;
						}
						if ($scope.model.fTransDate == null || $scope.model.fTransDate == undefined) {
							bootboxAlertFocus($translate.instant("vnm.form_sale_dealer.error.form.empty.trans.date"), "fTransDate", $translate
									.instant("vnm.lable.vnm.name"), "");
							return false;
						}
						if (moment($scope.model.fTransDate, "DD/MM/YYYY") > new Date()) {
							bootboxAlertFocus($translate.instant("vnm.form_sale_dealer.error.form.trans.date.larger"), "fTransDate", $translate
									.instant("vnm.lable.vnm.name"), "");
							return false;
						}
						if ($scope.lstTableGoods == null || $scope.lstTableGoods == undefined || $scope.lstTableGoods.length <= 0) {
							bootboxAlertFocus($translate.instant("vnm.form_sale_dealer.error.form.empty.list.goods.sale"), "", $translate
									.instant("vnm.lable.vnm.name"), "");
							return false;
						}
						if ($scope.lstTableGoods.length > mstrAlertRows) {
							var er = $translate.instant("vnm.form_sale_dealer.error.form.list.goods.sale.larger");
							er = er.replace(/###/, mstrAlertRows);
							bootboxAlertFocus(er, "", $translate.instant("vnm.lable.vnm.name"), "");
							return false;
						}
						return true;
					}
					// ---------------------------------- End Ghi thong tin giao dich --------------------------------------------
					
					
					// ------------------------------------- Dialog Input Attach Goods ------------------------------------------
					$scope.lstGoodsService = [];
					$scope.lstAttachGoods = [];
					$scope.attachGoodSelected = {};
					$scope.lstPriceAttachGoods = [];
					$scope.lstSerialAttachGoods = [];
					$scope.attachGoodSelected = {};
					$scope.attachGoodSelectedBack = {};
					
					$scope.showDialogAttachGoods = function() {
						if ($scope.asTypeActionSerial == "ADD" && $scope.goodsServiceSelected.attachGoods != null && $scope.goodsServiceSelected.attachGoods != undefined &&
								$scope.goodsServiceSelected.attachGoods.length > 0) {
							$scope.lstAttachGoods = $scope.goodsServiceSelected.attachGoods;
							createTableListAttachGoods($scope.lstAttachGoods);
							createTableListSerialAttachGoods(lstNull);
							$scope.attachGoodSelected = {};
							$scope.isDisableQuantityAttGood = true;
							$scope.lstGoodsService.push($scope.model.fGoods);
							$scope.clearDetailValue();
							$scope.showModalFunction('modalInputAttachGoodsForDealer');
							
							var desc = $translate.instant("vnm.dialogInputAttachGoods.label.description");
							desc = desc.replace(/###1/, $scope.goodsServiceSelected.goodsCode);
							desc = desc.replace(/###2/, $scope.goodsServiceSelected.goodsPrice);
							desc = desc.replace(/###3/, $scope.goodsServiceSelected.goodsQuantity);
							document.getElementById('attDescription').innerHTML = desc;
						}
					}

					$scope.rowAtIndex = 0;
					function createTableListAttachGoods(dataItem) {
						oTableItemFAttachGood = $('#tblListAttachGoods').DataTable({
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
							"scrollY" : 200,
							"columns" : [ {
								"mData" : "goodsCode",
								"render" : function(data, type, row) {
									x = data == null ? '' : (data.includes('Nhóm hàng') ? data : "&nbsp; &nbsp; &nbsp;" + data);
									return "<div data-toggle='tooltip' class='text-wrap width-200' title='" + x + "'>" + x + "</div>";
								}
							}, {
								"mData" : "quantityAffect",
								"render" : function(data, type, row) {
									x = data == null ? '' : data;
									return "<div class='text-right'>" + x + "</div>";
								}
							}, {
								"mData" : "price",
								"render" : function(data, type, row) {
									x = data == null ? '' : data;
									return "<div class='text-right'>" + x + "</div>";
								}
							}, {
								"mData" : "promotionTotal",
								"render" : function(data, type, row) {
									x = data == null ? '' : data;
									return "<div class='text-right'>" + x + "</div>";
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
								if ($scope.attachGoodSelected != ROW_NOT_SELECTED) {
									if ($scope.attachGoodSelected.goodsCode == data.goodsCode) {
										$(row).addClass('selected');
									}
								} else {
									if (rowIndex == 0 || rowIndex == '0') {
										$(row).addClass('selected');
									}
								}
							}
						});
						
						$('#tblListAttachGoods tbody').off().on('click', 'tr', function(e, dt, type, indexes) {
							$(this).removeClass('selected');
							$scope.rowAtIndex = indexes;
							var rowData = oTableItemFAttachGood.row(this).data();
							oTableItemFAttachGood.$('tr.selected').removeClass('selected');
							$(this).addClass('selected');
							$scope.attachGoodSelected = rowData;
							$scope.attachGoodSelectedBack = Object.assign({}, $scope.attachGoodSelected);
							
							if (StringUtilNVL($scope.attachGoodSelected.goodsId) == "") {
								$scope.clearDetailValue();
								return;
							}
							
							if ($scope.isHasGoods($scope.attachGoodSelected.goodsCode)) {
								// fillGoodsPrice
								var keySearch = {
									"code" : $scope.attachGoodSelected.goodsId,
									"name" : $localStorage.clientContext.shop.tariffId,
								};
								fctFormSaleDealer.getListPrices(keySearch, function(result) {
									if (result != null && result != undefined && result.status != '0') {
										$scope.lstPriceAttachGoods = result;
										$scope.model.fAttPriceDlg = {};
										
										// fillDetailSerial
										$scope.fillDetailSerial($scope.attachGoodSelected.goodsId, $scope.attachGoodSelected.goodsCode);
									}
								});
							} else {
								bootboxAlertFocus($translate.instant('vnm.dialogInputAttachGoods.message.good.not.exist'), "", $translate.instant("vnm.lable.vnm.name"), "");
								$scope.clearDetailValue();
							}
						});
					}
					
					$scope.lstCheckSerialAt = [];
					$scope.fillDetailSerial = function(strGoodsID, strGoodsCode) {
						$scope.lstSerialAttachGoods = [];
						$scope.listSelectItemCheckBoxAttach = [];
						$scope.lstCheckSerialAt = [];
						var keySearch = {
							"lstTableGoods" : $scope.lstTableGoods,
							"goodsId" : strGoodsID,
							"goodsCode" : strGoodsCode,
							"stockId" : $localStorage.clientContext.sessionStockID,
						}
						fctFormSaleDealer.getListSerialAttachGoods(keySearch, function(result) {
							if (result != null && result != undefined && result.status != '0') {
								if (result.length > 0) {
									$scope.lstSerialAttachGoods = result
									createTableListSerialAttachGoods($scope.lstSerialAttachGoods);
								} else {
									createTableListSerialAttachGoods(lstNull);
								}
							} else {
								createTableListSerialAttachGoods(lstNull);
							}
							
							// fillGoods
							$scope.model.fAttGoodDlg = $scope.attachGoodSelected.goodsCode;
							$scope.attGoodsSelectedTmp = $scope.getGoodsSelected($scope.attachGoodSelected.goodsCode);
							$scope.model.fAttGoodNameDlg = $scope.attGoodsSelectedTmp.name;
							
							// fillSelectedSerial
							if ($scope.attachGoodSelected.goodsSale != null && $scope.attachGoodSelected.goodsSale != undefined && 
									$scope.attachGoodSelected.goodsSale.goodsCode != undefined && $scope.attachGoodSelected.goodsSale.goodsCode != null) {
								var goodsSaleTransaction = $scope.attachGoodSelected.goodsSale;
								$scope.model.fAttPriceDlg = {};
								for (var i=0; i<$scope.lstPriceAttachGoods.length; i++) {
									if ($scope.lstPriceAttachGoods[i].priceId == goodsSaleTransaction.priceId) {
										$scope.model.fAttPriceDlg = $scope.lstPriceAttachGoods[i];
										break;
									}
								}
								$scope.model.fAttQuantityDlg = goodsSaleTransaction.goodsQuantity;

								$scope.listSelectItemCheckBoxAttach = [];
								var vtSelectedSerial = goodsSaleTransaction.vectorSerial;
								if (vtSelectedSerial != null && vtSelectedSerial != undefined && vtSelectedSerial.length > 0) {
									for (var i = 0; i < vtSelectedSerial.length; i++) {
										var vtRowI = vtSelectedSerial[i];
										var strSerialI = vtRowI.serial;
										for (var j = 0;j < $scope.lstSerialAttachGoods.length; j++) {
											var vtRowJ =  $scope.lstSerialAttachGoods[j];
											var strSerialJ = vtRowJ.serial;
											if (strSerialI == strSerialJ) {
												$scope.listSelectItemCheckBoxAttach.push(vtRowI);
												$scope.lstCheckSerialAt.push(j);
											}
										}
									}
									
									createTableListSerialAttachGoods($scope.lstSerialAttachGoods);
								}
							} else {
								$scope.model.fAttQuantityDlg = '0';
							}
							
							if ($scope.attachGoodSelected.checkSerial == '1') {
								$scope.isDisableQuantityAttGood = true;
							} else {
								$scope.isDisableQuantityAttGood = false;
							}
							
							// setPromotion
							$scope.model.fAttPromotionDlg = {};
							$scope.model.fAttPromotionNameDlg = '';
							if ($scope.attachGoodSelected.goodsSale != null && $scope.attachGoodSelected.goodsSale != undefined &&
									$scope.attachGoodSelected.goodsSale.promotionId != undefined && $scope.attachGoodSelected.goodsSale.promotionId != null) {
								for (var i=0; i<$scope.PromotionSource.length; i++) {
									if ($scope.PromotionSource[i].promotionId == $scope.attachGoodSelected.goodsSale.promotionId) {
										$scope.model.fAttPromotionDlg = $scope.PromotionSource[i];
										$scope.model.fAttPromotionNameDlg = $scope.PromotionSource[i].name;
										break;
									}
								}
							} 
						});
					}
					
					$scope.clearDetailValue = function() {
						$scope.model.fAttGoodDlg = '';
						$scope.model.fAttGoodNameDlg = '';
						$scope.lstPriceAttachGoods = [];
						$scope.model.fAttPriceDlg = {};
						$scope.model.fAttQuantityDlg = '0';
						$scope.model.fAttPromotionDlg = {};
						$scope.model.fAttPromotionNameDlg = '';
						
						$scope.lstSerialAttachGoods = [];
						$scope.listSelectItemCheckBoxAttach = [];
						createTableListSerialAttachGoods(lstNull);
					}
					
					$scope.btnDeleteOnclick = function() {
						$scope.attachGoodSelected.bl = 'FALSE';
						$scope.attachGoodSelected.quantityAffect = '';
						$scope.attachGoodSelected.price = '';
						$scope.attachGoodSelected.priceId = '';
						$scope.attachGoodSelected.promotionId = '';
						$scope.attachGoodSelected.promotionTotal = '';
						$scope.attachGoodSelected.goodsSale = null;
						
						$scope.lstAttachGoods[$scope.rowAtIndex] = $scope.attachGoodSelected;
						createTableListAttachGoods($scope.lstAttachGoods);

						$scope.listSelectItemCheckBoxAttach = [];
						$scope.lstCheckSerialAt = [];
						createTableListSerialAttachGoods($scope.lstSerialAttachGoods);

						$scope.model.fAttQuantityDlg = '0';
						if ($scope.lstPriceAttachGoods != null && $scope.lstPriceAttachGoods != undefined && 
								$scope.lstPriceAttachGoods.length > 0) {
							$scope.model.fAttPriceDlg = $scope.lstPriceAttachGoods[0];
						}
					}
					
					$scope.btnUpdateOnclick = function() {
						if ($scope.validateFocusLost()) {
							var goodsSaleTrans = {};
							$scope.goodSaleTransaction = $scope.attachGoodSelected.goodsSale;
							if ($scope.goodSaleTransaction == null || $scope.goodSaleTransaction == undefined ||
									$scope.goodSaleTransaction.goodsCode == undefined) {
								goodsSaleTrans.goodsCode = $scope.attachGoodSelected.goodsCode;
								$scope.attachGoodSelected.goodsSale = goodsSaleTrans;
							} else {
								goodsSaleTrans = $scope.attachGoodSelected.goodsSale;
							}
							
							var vtSelectedSerial = [];
							angular.forEach($scope.listSelectItemCheckBoxAttach, function(item) {
								vtSelectedSerial.push(Object.assign({}, item));
							});
							
							goodsSaleTrans.vectorSerial = vtSelectedSerial;
							goodsSaleTrans.goodsQuantity = $scope.model.fAttQuantityDlg;
							goodsSaleTrans.priceId = $scope.model.fAttPriceDlg.price;
							
							$scope.goodsSelectedTmp = $scope.getGoodsSelected($scope.attachGoodSelected.goodsCode);
							goodsSaleTrans.goodsId = $scope.goodsSelectedTmp.goodsId;
							goodsSaleTrans.checkQuantity = $scope.goodsSelectedTmp.checkQuantity;
							goodsSaleTrans.maxQuantity = $scope.goodsSelectedTmp.maxQuantity;
							goodsSaleTrans.resourceCode = $scope.goodsSelectedTmp.resourceCode;
							goodsSaleTrans.goodsUnit = $scope.goodsSelectedTmp.unit;
							goodsSaleTrans.unit = $scope.goodsSelectedTmp.unit;
							goodsSaleTrans.checkSerial = $scope.goodsSelectedTmp.checkSerial;
							goodsSaleTrans.goodsType = $scope.goodsSelectedTmp.type;
							
							goodsSaleTrans.priceId = $scope.model.fAttPriceDlg.priceId;
							goodsSaleTrans.vat = $scope.model.fAttPriceDlg.vat;
							goodsSaleTrans.goodsPrice = $scope.model.fAttPriceDlg.price;
							goodsSaleTrans.priceType = $scope.model.fAttPriceDlg.type;
							
							goodsSaleTrans.primaryGoodsCode = $scope.goodsServiceSelected.goodsCode;
							goodsSaleTrans.primaryPriceId = $scope.goodsServiceSelected.vectorId.mstrPriceID;
//							goodsSaleTrans.primaryPromotionId = $scope.goodsServiceSelected.vectorId.mstrPromID;
							
							var strPromotionID = "";
							var lngTotalPromotion = 0;
							if ($scope.model.fAttPromotionDlg != null && $scope.model.fAttPromotionDlg != undefined &&
									$scope.model.fAttPromotionDlg.promotionId != undefined) {
								strPromotionID = $scope.model.fAttPromotionDlg.promotionId;
								var strPromotionCode = $scope.model.fAttPromotionDlg.promProgramCode;
								var lngPromotionAmount = $scope.model.fAttPromotionDlg.promAmount;
								var strPromotionType = $scope.model.fAttPromotionDlg.promType;
								lngTotalPromotion = $scope.calculatePromotion($scope.model.fAttQuantityDlg, $scope.model.fAttPriceDlg.price, lngPromotionAmount, strPromotionType);

								goodsSaleTrans.promotionId = strPromotionID;
								goodsSaleTrans.goodsPromotion = lngTotalPromotion;
								goodsSaleTrans.totalPromotion = lngTotalPromotion;
								goodsSaleTrans.promotionCode = strPromotionCode;
							} else {
								goodsSaleTrans.promotionId = '';
								goodsSaleTrans.goodsPromotion = '0';
								goodsSaleTrans.totalPromotion = '0';
								goodsSaleTrans.promotionCode = '';
							}

							$scope.attachGoodSelected.quantityAffect = $scope.model.fAttQuantityDlg;
							$scope.attachGoodSelected.price = $scope.model.fAttPriceDlg.price;
							$scope.attachGoodSelected.priceId = $scope.model.fAttPriceDlg.priceId;
							$scope.attachGoodSelected.promotionId = strPromotionID;
							$scope.attachGoodSelected.promotionTotal = lngTotalPromotion;
							
							if ($scope.model.fAttQuantityDlg > 0) {
								$scope.attachGoodSelected.bl = "TRUE";
							} else {
								$scope.attachGoodSelected.bl = "FALSE";
								$scope.attachGoodSelected.quantityAffect = '';
								$scope.attachGoodSelected.price = '';
								$scope.attachGoodSelected.priceId = '';
								$scope.attachGoodSelected.promotionId = '';
								$scope.attachGoodSelected.promotionTotal = '';
							}
						} else {
							$scope.attachGoodSelected.bl = "FALSE";
						}
						
						$scope.lstAttachGoods[$scope.rowAtIndex] = $scope.attachGoodSelected;
						createTableListAttachGoods($scope.lstAttachGoods);
					}
					
					$scope.attGoodsSelected = [];
					$scope.lstAttachGoodsTemp = [];
					$scope.btnAcceptAttachGoodsClick = function() {
						$scope.lstAttachGoodsTemp = [];
						if ($scope.validateAccept()) {
							$scope.attGoodsSelected = [];
							for(var i = 0; i < $scope.lstAttachGoods.length; i++){
								if($scope.lstAttachGoods[i].bl.toUpperCase() == 'TRUE') {
									$scope.attGoodsSelected.push($scope.lstAttachGoods[i].goodsSale);
									$scope.lstAttachGoodsTemp.push($scope.lstAttachGoods[i]);
								}
							}
							$scope.mblnReturnAtt = true;
							$scope.hideModalFunction('modalInputAttachGoodsForDealer');
							$scope.onCloseInputAttachGoods();
						}
					}
					
					$scope.validateAccept = function() {
						var blnCheck = true;
						var intAttachQuantity = 0;
						var dblAttachConstant = 0.0;
						var strAttachGroupName = '';
						var strAttachGroupNameBak = '';
						for (var i = 0; i < $scope.lstAttachGoods.length; i++) {
							if (StringUtilNVL($scope.lstAttachGoods[i].groupAttach, "") == "") {
								strAttachGroupName = StringUtilNVL($scope.lstAttachGoods[i].goodsCode, "");
								if (!$scope.checkAttachGoods(blnCheck, dblAttachConstant, intAttachQuantity, strAttachGroupNameBak)) {
									return false;
								}
								blnCheck = false;
								dblAttachConstant = 0.0;
								intAttachQuantity = 0;
							} else {
								strAttachGroupNameBak = strAttachGroupName;
								if ($scope.lstAttachGoods[i].bl.toUpperCase() == 'TRUE') {
									dblAttachConstant = $scope.lstAttachGoods[i].quantity;
									intAttachQuantity += Number($scope.lstAttachGoods[i].quantityAffect);
									blnCheck = true;
								}
							}
						}
						
						if (!$scope.checkAttachGoods(blnCheck, dblAttachConstant, intAttachQuantity, strAttachGroupName)) {
							return false;
						}
						
						return blnCheck;
					}
					
					$scope.checkAttachGoods = function(check, pdblAttachConstant, pintAttachQuantity, strGroupAttachName) {
						if (!check) {
							bootboxAlertFocus($translate.instant('vnm.dialogInputAttachGoods.message.error.select.good'), "", $translate.instant("vnm.lable.vnm.name"), "");
							return false;
						} else if (pintAttachQuantity != (pdblAttachConstant * Number($scope.goodsServiceSelected.goodsQuantity))) {
							bootboxAlertFocus($translate.instant("Tổng số lượng nhóm hàng " + strGroupAttachName + " phải bằng " + (pdblAttachConstant * Number($scope.goodsServiceSelected.goodsQuantity))) , "", $translate.instant("vnm.lable.vnm.name"), "");
							return false;
						}
						return true;
					}
					
					$scope.calculatePromotion = function(quantity, price, val, type) {
						var rs = 0;
						if(type == '1'){
							rs = Number(quantity) * Number(price) * Number(val) / 100;
						}else if(type == '2') {
							rs = Number(quantity) * Number(val);
						}
						return rs;
					}
					
					$scope.getAttPromotionNameDlg = function() {
						if ($scope.model.fAttPromotionDlg != null && $scope.model.fAttPromotionDlg != undefined && $scope.model.fAttPromotionDlg.promProgramCode != undefined) {
							$scope.model.fAttPromotionNameDlg = $scope.model.fAttPromotionDlg.name;
							document.getElementById('fAttPromotionDlg').title = $scope.model.fAttPromotionDlg.promProgramCode;
							document.getElementById('fAttPromotionNameDlg').title = $scope.model.fAttPromotionDlg.name;
						} else {
							$scope.model.fAttPromotionNameDlg = '';
							document.getElementById('fPromotion').title = '';
							document.getElementById('fAttPromotionNameDlg').title = '';
						}
					}
					
					$scope.getGoodsSelected = function(code){
						for(var i = 0; i < $scope.GoodsSource.length; i++){
							if($scope.GoodsSource[i].goodsCode == code){
								return $scope.GoodsSource[i];
							}
						}
						return null;
					}
					
					$scope.getUsageQuantity = function(code) {
						var rs = 0;
						for(var i = 0; i < $scope.lstGoodsService.length; i++){
							if(code == $scope.lstGoodsService[i].goodsCode){
								rs += Number($scope.lstGoodsService[i].quantity);
							}
						}
						return rs;
					}
					
					$scope.validateFocusLost = function() {
						if ($scope.model.fAttGoodDlg == null || $scope.model.fAttGoodDlg == undefined || $scope.model.fAttGoodDlg.trim() == '') {
							bootboxAlertFocus($translate.instant('vnm.dialogInputAttachGoods.message.error.input.good'), "", $translate.instant("vnm.lable.vnm.name"), "");
							return;
						}
						if ($scope.model.fAttPriceDlg.price == null || $scope.model.fAttPriceDlg.price == undefined) {
							bootboxAlertFocus($translate.instant('vnm.dialogInputAttachGoods.message.error.select.price'), "", $translate.instant("vnm.lable.vnm.name"), "");
							return;
						}
						if ($scope.model.fAttQuantityDlg == null || $scope.model.fAttQuantityDlg == undefined || $scope.model.fAttQuantityDlg == '') {
							bootboxAlertFocus($translate.instant('vnm.dialogInputAttachGoods.message.error.input.quantity'), "", $translate.instant("vnm.lable.vnm.name"), "");
							return;
						}
						if ($scope.model.fAttQuantityDlg != $scope.listSelectItemCheckBoxAttach.length) {
							bootboxAlertFocus($translate.instant('vnm.dialogInputAttachGoods.message.error.wrong.input.quantity'), "", $translate.instant("vnm.lable.vnm.name"), "");
							return;
						}
						
						$scope.goodsSelectedTmp = $scope.getGoodsSelected($scope.attachGoodSelected.goodsCode);
						var quantity = Number($scope.goodsSelectedTmp.maxQuantity);
						var usageQuantity = Number($scope.getUsageQuantity($scope.attachGoodSelected.goodsCode));
						if(Number($scope.model.fAttQuantityDlg) > (quantity - usageQuantity)){
							bootboxAlertFocus("Hàng " + $scope.attachGoodSelected.goodsCode + " không đủ số lượng. Số lượng thực tế : " + $scope.goodsSelectedTmp.maxQuantity, "", $translate.instant("vnm.lable.vnm.name"), "");
							return;
						}
						return true;
					}
					
					$scope.mblnReturnAtt = true;
					$scope.btnBackAttachGoods = function() {
						bootboxConfirm($translate.instant("vnm.lable.vnm.name"), $translate.instant("vnm.dialogInputAttachGoods.message.back.attach.good"),
								$scope.btnFBackOnclickConfirmOK, $scope.btnFBackOnclickConfirmNOK);
					}
					
					$scope.btnFBackOnclickConfirmOK = function() {
						$scope.attGoodsSelected = [];
						$scope.lstAttachGoodsTemp = [];
						$scope.mblnReturnAtt = false;
						$scope.hideModalFunction('modalInputAttachGoodsForDealer');
						$scope.onCloseInputAttachGoods();
					}
					
					$scope.btnFBackOnclickConfirmNOK = function() {
						
					}
					
					$scope.listCheckAttachGoods = [];
					$scope.onCloseInputAttachGoods = function() {
						if (!$scope.mblnReturnAtt) {
							$scope.openAttach = true;
							$scope.btnFDeleteOnclickConfirmOK();
							return;
						}
						
						$scope.goodsFormSelected.lstGoodsSaleTransaction = $scope.lstTableGoods;
						$scope.goodsFormSelected.rate = $scope.model.fRate;
						$scope.goodsFormSelected.lstGoodsSaleAt = $scope.attGoodsSelected;
						$scope.goodsFormSelected.lstAttachGoodsTemp = $scope.lstAttachGoodsTemp;
						
						overLoading();
						fctFormSaleDealer.addAttachGoodsToForm($scope.goodsFormSelected, function(result) {
							var isOpen = true;
							if (result != null && result != undefined) {
								if (result.status == '0') {
									if (result.messages.includes("FSS-30012")) {
										bootboxAlertFocus($translate.instant("vnm.error.FSS-30012"), "", $translate.instant("vnm.lable.vnm.name"), "");
									} else if (result.messages.includes("FSS-30011")) {
										var params = result.messages.split("___");
										var mess = params[1].split(",");
										var er = $translate.instant("vnm.error.FSS-30011");
										er = er.replace(/###1/, mess[0]);
										er = er.replace(/###2/, mess[1]);
										bootboxAlertFocus(er, "", $translate.instant("vnm.lable.vnm.name"), "");
									} else {
										bootboxAlertFocus(result.messages, "", $translate.instant("vnm.lable.vnm.name"), "");
									}
								} else {
									// tao lai bang sau khi them
									$scope.lstTableGoods = [];
									$scope.goodsFormSelected = result[0];
									$scope.goodsFormSelected.lstGoodsSaleTransaction.forEach(function(item) {
										$scope.lstTableGoods.push(Object.assign({}, item))
									});
									$scope.goodsServiceSelected = $scope.lstTableGoods[$scope.lstTableGoods.length - 1]
									createTableListGoodsService($scope.lstTableGoods);
									createTableListGoodsSerial($scope.goodsServiceSelected.vectorSerial);
									$scope.fillDataFromTable($scope.goodsServiceSelected);

									$scope.setMoney($scope.goodsFormSelected); // set thong tin tien
									$scope.model.fDiscount = $scope.goodsServiceSelected.goodsDiscount; // set discount cua mat hang sau khi tinh
									$scope.disablePayMethod = true; // disable khong cho chon lai HTTT

									for (var i=0; i<$scope.attGoodsSelected.length; i++) {
										for (var j=0; j<$scope.lstTableGoods.length; j++) {
											if ($scope.attGoodsSelected[i].goodsCode == $scope.lstTableGoods[j].goodsCode &&
													$scope.lstTableGoods[j].attachGoods != null && $scope.lstTableGoods[j].attachGoods != undefined &&
													$scope.lstTableGoods[j].attachGoods.length > 0) {
												$scope.listCheckAttachGoods.push($scope.lstTableGoods[j]);
												if (isOpen) {
													$scope.goodsServiceSelected = $scope.lstTableGoods[j];
													$scope.openDialogAttach($scope.goodsServiceSelected);
													isOpen = false;
												}
											}
										}
									}
								}
							}
							if (isOpen) {
								if ($scope.listCheckAttachGoods.length > 0) {
									$scope.goodsServiceSelected = $scope.listCheckAttachGoods[0];
									$scope.openDialogAttach($scope.goodsServiceSelected);
								}
							}
							closeOverLay();
						});
					}
					
					$scope.openDialogAttach = function(goodsSale) {
						angular.forEach($scope.listCheckAttachGoods, function(object, index) {
							if (object.goodsCode == goodsSale.goodsCode) {
								$scope.listCheckAttachGoods.splice(index, 1);
							}
						});
						
						$scope.lstAttachGoods = goodsSale.attachGoods;
						
						createTableListAttachGoods($scope.lstAttachGoods);
						createTableListSerialAttachGoods(lstNull);
						
						$scope.attachGoodSelected = {};
						$scope.isDisableQuantityAttGood = true;
						
						$scope.lstGoodsService = [];
						$scope.lstTableGoods.forEach(function(item) {
							$scope.lstGoodsService.push(Object.assign({}, item))
						});
						
						$scope.model.checkAllAttach = false;
						$scope.clearDetailValue();
						$scope.showModalFunction('modalInputAttachGoodsForDealer');
						
						var desc = $translate.instant("vnm.dialogInputAttachGoods.label.description");
						desc = desc.replace(/###1/, $scope.goodsServiceSelected.goodsCode);
						desc = desc.replace(/###2/, $scope.goodsServiceSelected.goodsPrice);
						desc = desc.replace(/###3/, $scope.goodsServiceSelected.goodsQuantity);
						document.getElementById('attDescription').innerHTML = desc;
					}
					
					function createTableListSerialAttachGoods(dataItem) {
						oTableItemFSerialAttachGoods = $('#tblSerialAttachGoods').DataTable({
							"columnDefs" : [ {
								'targets' : 0,
								"orderable" : false,
								'checkboxes' : {
									'selectRow' : true
								}
							}],
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
							"scrollY" : 200,
							"columns" : [ {
								"mData" : "serial",
								"render" : function(data, type, row) {
									x = data == null ? '' : data;
									return "<div data-toggle='tooltip' class='text-wrap width-200' title='" + x + "'>" + x + "</div>";
								}
							}, {
								"mData" : "inputDate",
								"render" : function(data, type, row) {
									x = data == null ? '' : data;
									return "<div data-toggle='tooltip' class='text-wrap width-200' title='" + x + "'>" + x + "</div>";
								}
							}, {
								"mData" : "checkBoxId",
								"render" : function(data, type, row) {
									x = data == null ? '' : data;
									return '<input type="checkbox" id="checkAttachx" class="form-control width-50" style="width:17px; margin-left: 40%"  id="first-child" value="' + x + '" ></input>';
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

						// check box all
						$('#checkAllAttach').on('click', function() {
							var rows = oTableItemFSerialAttachGoods.rows({
								'search' : 'applied'
							}).nodes();

							$('input[type="checkbox"]', rows).prop('checked', this.checked);
							$scope.checkAllCheckBoxAttach();
						});
						
						var rows = oTableItemFSerialAttachGoods.rows({
							'search' : 'applied'
						}).nodes();
						for (var i=0; i<$scope.lstCheckSerialAt.length; i++) {
							$('input[type="checkbox"]', rows[$scope.lstCheckSerialAt[i]])[0].checked = true;
						}

						// check box row
						$('#tblSerialAttachGoods').off().on('click', 'input[type="checkbox"]', function(e, dt, type, indexes) {
							$scope.onCheckedClickAttach(this.value);
						});

						$('.dataTables_scrollBody thead tr').css({
							visibility : 'collapse'
						});

						$("#checkAllAttachs").removeClass("sorting");
						$("#checkAllAttach").css('width', '17px');
						$("#checkAllAttach").css('margin-left', '40%');

						$compile(angular.element('#tblSerialAttachGoods'))($scope);
					}
					
					$scope.isHasGoods = function(code) {
						for(var i = 0; i < $scope.GoodsSource.length; i++){
							if(code == $scope.GoodsSource[i].goodsCode){
								return true;
							}
						}
						return false;
					}
					
					$scope.exitDialog = function() {
						$scope.hideModalFunction('modalInputAttachGoodsForDealer');
					}
					
					$scope.repaintTableAttachGoods = function(){
						
					}
					
					// ------------------ checkbox dialog attach goods ---------------------------------
					$scope.listSelectItemCheckBoxAttach = [];
					$scope.findRowAttach = function(checkBoxId) {
						var row = {};
						for (var i = 0; i < $scope.lstSerialAttachGoods.length; i++) {
							if ($scope.lstSerialAttachGoods[i].checkBoxId == checkBoxId) {
								row = $scope.lstSerialAttachGoods[i];
								break;
							}
						}
						return row;
					}

					$scope.checkListSelectItemCheckBoxAttach = function(row) {
						var check = 0;
						if ($scope.listSelectItemCheckBoxAttach.length == 0) {
							return 0;
						}
						for (var i = 0; i < $scope.listSelectItemCheckBoxAttach.length; i++) {
							if ($scope.listSelectItemCheckBoxAttach[i].checkBoxId == row.checkBoxId) {
								check = check + 1;
							}
						}
						if (check == 0)
							return 0;
						else
							return 1;
					}

					$scope.onCheckedClickAttach = function(item) {
						var row = $scope.findRowAttach(item);
						if ($scope.checkListSelectItemCheckBoxAttach(row) == 0) {
							$scope.listSelectItemCheckBoxAttach.push(row);
						} else {
							for (var i = 0; i < $scope.listSelectItemCheckBoxAttach.length; i++) {
								while ($scope.listSelectItemCheckBoxAttach[i].checkBoxId == row.checkBoxId) {
									$scope.listSelectItemCheckBoxAttach.splice(i, 1);
									break;
								}
							}
						}
						if ($scope.listSelectItemCheckBoxAttach.length == $scope.lstSerialAttachGoods.length) {
							$scope.model.checkAllAttach = true;
						} else {
							$scope.model.checkAllAttach = false;
						}
						$scope.model.fAttQuantityDlg = $scope.listSelectItemCheckBoxAttach.length;
					}

					$scope.checkAllCheckBoxAttach = function() {
						if ($('#checkAllAttach:checked').length > 0) { // Khi click check all
							$scope.listSelectItemCheckBoxAttach = $scope.lstSerialAttachGoods.slice(0, $scope.lstSerialAttachGoods.length);
						} else { // Khi bo click check all
							$scope.listSelectItemCheckBoxAttach = [];
						}
						$scope.model.fAttQuantityDlg = $scope.listSelectItemCheckBoxAttach.length;
					}
					// ------------------ End checkbox dialog attach goods ---------------------------------
					
					
					// ------------------------------------- End Dialog Input Attach Goods --------------------------------------
					
					// ------------------------------------- In ----------------------------------------
					$scope.disablePrint = true;
					$scope.btnFPrintOnclick = function() {
						overLoading();

						var keySearch = {
							"code" : $scope.mstrTransactionID,
						}
						fctFormSaleDealer.getParamsPrint(keySearch, function(result) {
							if (result.status == '0') {
								bootboxAlertFocus(result.messages, "", $translate.instant("vnm.lable.vnm.name"), "");
							} else if (result.length > 0) {
								var reportInput = {
									"lstDetailTrans" : result,
									"fileTempName" : 'FormSaleDealer',
									"fileType" : '.xlsx'
								};

								fctFormSaleDealer.exportFile(reportInput, function(result, status, header, config) {
									if (result.status == '0' && result.status != 'undefined') {
										bootboxAlertFocus($translate.instant('vnm.messages.validate.prepaid.server.' + result.messages), "", $translate
												.instant("vnm.lable.vnm.name"), "");
									} else {
										download(new Blob([ result ]), header('MyDownloadFile') + header('FileType'), header('Content-Type'));
									}
								});
							}
							closeOverLay();
						});
					}
					// ------------------------------------- End In ----------------------------------------
					
					// ------------------------------------- F9 ----------------------------------------------
					$scope.onF9FAgent = function(e) {
						var code = (e.keyCode ? e.keyCode : e.which);
						if (code == '120') {
							$scope.model.fAgent = $scope.AgentSource[0];
							$scope.initSearchShop = $scope.model.fAgentCode;
							for (var i=0; i<$scope.AgentSource.length; i++) {
								if ($scope.model.fAgentCode != null && $scope.model.fAgentCode != undefined &&
										($scope.AgentSource[i].code.toUpperCase().includes($scope.model.fAgentCode.trim().toUpperCase()) ||
											$scope.AgentSource[i].name.toUpperCase().includes($scope.model.fAgentCode.trim().toUpperCase()))) {
									$scope.model.fAgent = $scope.AgentSource[i];
									break;
								}
							}
							$scope.showModalFunction("modalListShop");
							createDataTableListShop($scope.AgentSource);
						} else if (code == '13') {
							$scope.onblurShopCode();
						} else {
							if ($scope.model.fAgentCode == '') {
								$scope.model.fAgent = {};
								$scope.model.fAgentName = '';
								document.getElementById('fAgent').title = '';
								document.getElementById('fAgentName').title = '';
								$scope.model.fReceiptCode = '';
							}
						}
					};
					
					$scope.initSearchShop = "";
					$scope.onblurShopCode = function() {
						if ($scope.model.fAgentCode != undefined && $scope.model.fAgentCode != '') {
							var isSearch = false;
							var isFirst = true;
							for (var i=0; i<$scope.AgentSource.length; i++) {
								if ($scope.AgentSource[i].code.toUpperCase() == $scope.model.fAgentCode.trim().toUpperCase()) {
									$scope.model.fAgent = $scope.AgentSource[i];
									$scope.model.fAgentCode = $scope.model.fAgent.code;
									$scope.getFAgentName();
									isSearch = true;
									break;
								} else if (isFirst && ($scope.AgentSource[i].code.toUpperCase().includes($scope.model.fAgentCode.trim().toUpperCase())
										|| $scope.AgentSource[i].name.toUpperCase().includes($scope.model.fAgentCode.trim().toUpperCase()))) {
									$scope.model.fAgent = $scope.AgentSource[i];
									isFirst = false;
								}
							}
							if (!isSearch) {
								$scope.model.fAgentName = '';
								$scope.initSearchShop = $scope.model.fAgentCode;
								$scope.showModalFunction("modalListShop");
								createDataTableListShop($scope.AgentSource);
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
								if ($scope.model.fAgent != undefined && $scope.model.fAgent != null) {
									if ($scope.model.fAgent.code == data.code) {
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
							$scope.model.fAgent = rowData;
						});
					}

					$scope.updateFormShop = function() {
						$scope.model.fAgentCode = $scope.model.fAgent.code;
						$scope.getFAgentName();
						$scope.hideModalFunction("modalListShop");
					}

					$scope.dialogListShopActionBack = function() {
						$scope.hideModalFunction("modalListShop");
						if ($scope.model.fAgentName != undefined && $scope.model.fAgentName.trim() == '') {
							angular.element(document.getElementById("fAgent")).focus();
						}
					}
					// ------------------------------------- End F9 ------------------------------------------
					// ------------------------------------- F9 mat hang ------------------------------------------
					$scope.onF9FGoods = function(e) {
						var code = (e.keyCode ? e.keyCode : e.which);
						if (code == '120') {
							$scope.model.fGoods = $scope.GoodsSource[0];
							$scope.initSearchGoods = $scope.model.fGoodsCode;
							for (var i=0; i<$scope.GoodsSource.length; i++) {
								if ($scope.model.fGoodsCode != null && $scope.model.fGoodsCode != undefined &&
										($scope.GoodsSource[i].goodsCode.toUpperCase().includes($scope.model.fGoodsCode.trim().toUpperCase()) ||
											 $scope.GoodsSource[i].name.toUpperCase().includes($scope.model.fGoodsCode.trim().toUpperCase()))) {
									$scope.model.fGoods = $scope.GoodsSource[i];
									break;
								}
							}
							$scope.showModalFunction("modalListGoods");
							createDataTableListGoods($scope.GoodsSource);
						} else if (code == '13') {
							$scope.onblurGoodsCode();
						} else {
							if ($scope.model.fGoodsCode == '') {
								$scope.model.fGoods = {};
								$scope.model.fGoodsName = '';
								document.getElementById('fGoods').title = '';
								document.getElementById('fGoodsName').title = '';
								$scope.PriceSource = [];
							}
						}
					};
					
					$scope.initSearchGoods = "";
					$scope.onblurGoodsCode = function() {
						if ($scope.model.fGoodsCode != undefined && $scope.model.fGoodsCode != '') {
							var isSearch = false;
							var isFirst = true;
							for (var i=0; i<$scope.GoodsSource.length; i++) {
								if ($scope.GoodsSource[i].goodsCode.toUpperCase() == $scope.model.fGoodsCode.trim().toUpperCase()) {
									$scope.model.fGoods = $scope.GoodsSource[i];
									$scope.model.fGoodsCode = $scope.model.fGoods.goodsCode;
									$scope.getFGoodsName();
									isSearch = true;
									break;
								} else if (isFirst && ($scope.GoodsSource[i].goodsCode.toUpperCase().includes($scope.model.fGoodsCode.trim().toUpperCase())
										|| $scope.GoodsSource[i].name.toUpperCase().includes($scope.model.fGoodsCode.trim().toUpperCase()))) {
									$scope.model.fGoods = $scope.GoodsSource[i];
									isFirst = false;
								}
							}
							if (!isSearch) {
								$scope.model.fGoodsName = '';
								$scope.initSearchGoods = $scope.model.fGoodsCode;
								$scope.showModalFunction("modalListGoods");
								createDataTableListGoods($scope.GoodsSource);
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
								if ($scope.model.fGoods != undefined && $scope.model.fGoods != null) {
									if ($scope.model.fGoods.goodsId == data.goodsId) {
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
							$scope.model.fGoods = rowData;
						});
					}

					$scope.updateFormGoods = function() {
						$scope.model.fGoodsCode = $scope.model.fGoods.goodsCode;
						$scope.getFGoodsName();
						$scope.hideModalFunction("modalListGoods");
					}

					$scope.dialogListGoodsActionBack = function() {
						$scope.hideModalFunction("modalListGoods");
						if ($scope.model.fGoodsName != undefined && $scope.model.fGoodsName.trim() == '') {
							angular.element(document.getElementById("fGoods")).focus();
						}
					}
					// ------------------------------------- End F9 mat hang --------------------------------------
					
				});

function createTimeStamp() {
	var theMoment = moment();
	var millisTimeStamp = theMoment.valueOf();
	return millisTimeStamp;
}

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

function formatNumber(num) {
	return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
};