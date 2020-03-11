app_vnm.factory('formSaleTransaction', function($http, $translate) {
	return {
		getTransType : function(callback) {
			var url = eim_url + "/epos/sales/formSaleTransaction/getTransType";
			$http.post(url).success(callback).error(function(data, status, headers, config) {
				closeOverLay();
				bootboxAlertFocus(status + " " + $translate.instant('vnm.messages.error.connection'), "", $translate.instant("vnm.lable.vnm.name"), "");
			});
		},
		getListApDomains : function(data, callback) {
			var url = eim_url + "/epos/sales/FormSaleDealer/getListApDomains";
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
		getCurrentGoodsStaff : function(data, callback) {
			var url = eim_url + "/epos/sales/formSaleTransaction/getCurrentGoodsStaff";
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

		getPriceTypeAndBundle : function(callback) {
			var url = eim_url + "/epos/sales/FormSaleDealer/initMapPriceTypeAndBundle";
			$http.post(url).success(callback).error(function(data, status, headers, config) {
				closeOverLay();
				bootboxAlertFocus(status + " " + $translate.instant('vnm.messages.error.connection'), "", $translate.instant("vnm.lable.vnm.name"), "");
			});
		},

		getAttachGoods : function(data, callback) {
			var url = eim_url + "/epos/sales/formSaleTransaction/getAttachGoods";
			$http.post(url, data).success(callback).error(function(data, status, headers, config) {
				closeOverLay();
				bootboxAlertFocus(status + " " + $translate.instant('vnm.messages.error.connection'), "", $translate.instant("vnm.lable.vnm.name"), "");
			});
		},

		getListSerialAttachGoods : function(data, callback) {
			var url = eim_url + "/epos/sales/formSaleTransaction/getSerialAttachGoods";
			$http.post(url, data).success(callback).error(function(data, status, headers, config) {
				closeOverLay();
				bootboxAlertFocus(status + " " + $translate.instant('vnm.messages.error.connection'), "", $translate.instant("vnm.lable.vnm.name"), "");
			});
		},

		calculateDiscount : function(data, callback) {
			var url = eim_url + "/epos/sales/formSaleTransaction/getCalculateDiscount";
			$http.post(url, data).success(callback).error(function(data, status, headers, config) {
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
		addAttachGoodsToForm : function(data, callback) {
			var url = eim_url + "/epos/sales/FormSaleDealer/addAttachGoodsToForm";
			$http.post(url, data).success(callback).error(function(data, status, headers, config) {
				closeOverLay();
				bootboxAlertFocus(status + " " + $translate.instant('vnm.messages.error.connection'), "", $translate.instant("vnm.lable.vnm.name"), "");
			});
		},
		writeInfo : function(data, callback) {
			var url = eim_url + "/epos/sales/formSaleTransaciton/writeInfoTrans";
			$http.post(url, data).success(callback).error(function(data, status, headers, config) {
				closeOverLay();
				bootboxAlertFocus(status + " " + $translate.instant('vnm.messages.error.connection'), "", $translate.instant("vnm.lable.vnm.name"), "");
			});
		},

		getMGMGGoodsSerial : function(data, callback) {
			var url = eim_url + "/epos/sales/formSaleTransaction/getMGMGGoodsSerial";
			$http.post(url, data).success(callback).error(function(data, status, headers, config) {
				closeOverLay();
				bootboxAlertFocus(status + " " + $translate.instant('vnm.messages.error.connection'), "", $translate.instant("vnm.lable.vnm.name"), "");
			});
		},

		searchAllSoldGoods : function(data, callback) {
			var url = eim_url + "/epos/sales/formSaleTransaction/getAllSoldGoods";
			$http.post(url, data).success(callback).error(function(data, status, headers, config) {
				closeOverLay();
				bootboxAlertFocus(status + " " + $translate.instant('vnm.messages.error.connection'), "", $translate.instant("vnm.lable.vnm.name"), "");
			});
		},

		getProfileFromNMS : function(data, callback) {
			var url = eim_url + "/epos/sales/formSaleTransaction/getProfileFromNMS";
			$http.post(url, data).success(callback).error(function(data, status, headers, config) {
				closeOverLay();
				bootboxAlertFocus(status + " " + $translate.instant('vnm.messages.error.connection'), "", $translate.instant("vnm.lable.vnm.name"), "");
			});
		},

		addPromotionSerial : function(data, callback) {
			var url = eim_url + "/epos/sales/formSaleTransaction/addPromotionSerial";
			$http.post(url, data).success(callback).error(function(data, status, headers, config) {
				closeOverLay();
				bootboxAlertFocus(status + " " + $translate.instant('vnm.messages.error.connection'), "", $translate.instant("vnm.lable.vnm.name"), "");
			});
		},

		getMoney : function(data, callback) {
			var url = eim_url + "/epos/sales/formSaleTransaction/getMoney";
			$http.post(url, data).success(callback).error(function(data, status, headers, config) {
				closeOverLay();
				bootboxAlertFocus(status + " " + $translate.instant('vnm.messages.error.connection'), "", $translate.instant("vnm.lable.vnm.name"), "");
			});
		},

		getShopStockID : function(data, callback) {
			var url = eim_url + "/epos/sales/formSaleTransaction/getShopStockID";
			$http.post(url, data).success(callback).error(function(data, status, headers, config) {
				closeOverLay();
				bootboxAlertFocus(status + " " + $translate.instant('vnm.messages.error.connection'), "", $translate.instant("vnm.lable.vnm.name"), "");
			});
		},

		saveTransaction : function(data, callback) {
			var url = eim_url + "/epos/sales/formSaleTransaction/saveSaleTransaction";
			$http.post(url, data).success(callback).error(function(data, status, headers, config) {
				closeOverLay();
				bootboxAlertFocus(status + " " + $translate.instant('vnm.messages.error.connection'), "", $translate.instant("vnm.lable.vnm.name"), "");
			});
		},

		saveMGMPromotion : function(data, callback) {
			var url = eim_url + "/epos/sales/formSaleTransaction/saveMGMPromotion";
			$http.post(url, data).success(callback).error(function(data, status, headers, config) {
				closeOverLay();
				bootboxAlertFocus(status + " " + $translate.instant('vnm.messages.error.connection'), "", $translate.instant("vnm.lable.vnm.name"), "");
			});
		},
	}
});
var FORM_NAME = "FormSaleTransaction";
var ROW_NOT_SELECTED = -1;
app_vnm
		.controller(
				'ctrl-formSaleTransaction',
				function($scope, $rootScope, $translate, $compile, $timeout, $uibModal, $location, $window, FileUploader, $filter, $http, NgTableParams,
						$localStorage, formSaleTransaction) {
					$scope.model = {};

					window.document.title = $translate.instant('vnm.formSaleTransaction.page.title');
					var mblnReturn = true;
					$scope.model.searchCustType = null;
					$scope.model.fCompany = "";
					$scope.lstTransType = []; // Loai GD
					$scope.PaymentMethodSource = []; // HTTT
					// $scope.lstGoods = []; //Danh sach mat hang
					$scope.PriceSource = []; // Don gia
					$scope.PromotionSource = []; // Khuyen mai
					$scope.dcinTypeAction = "";
					$scope.lstTableDICNCardNo = [];
					$scope.dicnCardNoSelected = {};
					$scope.GoodsSourceService = [];
					$scope.mvtMapPriceTypeAndBundle = [];
					var lstNull = [];
					$scope.selectItemDlgListItem = [];
					var dlgRowIndex = 0;
					var dlgRowIndexSelectedListGoods = 0;
					var mstrAgentID = '';
					$scope.lstUnit = [];
					var mlngSUMMoneySumWithPromInForm = 0;
					$scope.loadDefault = function() {
						overLoading();
						$scope.model.fCompay = "";
						$scope.model.fTaxCode = "";
						$scope.model.fCardNo = "";
						$scope.model.fPriceName = "";
						$scope.model.fAccount = "";
						$scope.model.fAddress = "";
						angular.element(document.getElementById('fGoodsCode')).focus();
						var x = new Date();
						$scope.model.checkAll = false;
						$scope.model.fTransDate = $filter('date')(x, 'dd/MM/yyyy');
						$scope.model.fCustomer = 'Giao dịch bán lẻ VN Mobile';
						$scope.model.fGoodsCode = '';
						$scope.model.fGoodsName = '';
						$scope.model.fQuantity = '';
						$scope.model.fPrice = {};
						$scope.model.fPromotion = {}
						$scope.model.fPromotionName = '';
						$scope.model.fDiscount = '';
						$scope.model.fVat = '';
						$scope.itemSelectedListGoods = {};
						$scope.lstTransStaff = [ {
							'staffId' : $localStorage.clientContext.shop.staffId,
							'code' : $localStorage.clientContext.shop.staffCode,
							'name' : $localStorage.clientContext.shop.staffName,
						} ];
						$scope.model.fTransStaff = $scope.lstTransStaff[0];
						formSaleTransaction.getTransType(function(result) {
							if (result != null && result != undefined && result.status === '0') {
								bootboxAlertFocus(result.messages, "", $translate.instant("vnm.lable.vnm.name"), "");
								closeOverLay();
							} else {
								$scope.lstTransType = result;
								$scope.model.fTransType = $scope.lstTransType[0];
								var keySearch = {
									"code" : "12",
								};
								formSaleTransaction.getListApDomains(keySearch, function(result2) {
									if (result2 != null && result2 != undefined && result2.status === '0') {
										bootboxAlertFocus(result2.messages, "", $translate.instant("vnm.lable.vnm.name"), "");
										closeOverLay();
									} else {
										$scope.PaymentMethodSource = result2;
										$scope.model.fPaymentMethod = $scope.PaymentMethodSource[0];
										var keySearch2 = {
											"code" : $scope.model.fPaymentMethod.value,
											"name" : "VND",
										}
										formSaleTransaction.getRate(keySearch2, function(result3) {
											if (result3 == null || result3 == undefined || result3.status == '0') {
												bootboxAlertFocus(result3.messages, "", $translate.instant("vnm.lable.vnm.name"), "");
												closeOverLay();
											} else {
												if (result3 == '') {
													var er = $translate.instant("vnm.error.FSS-30006");
													er = er.replace(/###/, $scope.model.fPaymentMethod.code);
													bootboxAlertFocus(er, "fPaymentMethod", $translate.instant("vnm.lable.vnm.name"), "");
												} else {
													$scope.model.fRate = result3;

												}
												var keySearch3 = {
													'staffId' : $localStorage.clientContext.shop.staffId,
													'shopId' : $localStorage.clientContext.shop.shopId,
												};
												formSaleTransaction.getCurrentGoodsStaff(keySearch3, function(result4) {
													if (result4 == null || result4 == undefined || result4.status == '0') {
														bootboxAlertFocus(result4.messages, "", $translate.instant("vnm.lable.vnm.name"), "");
														closeOverLay();
													} else {
														$scope.GoodsSource = result4;
														formSaleTransaction.getListPromotions(function(result5) {
															if (result5 == null || result5 == undefined || result5.status == '0') {
																bootboxAlertFocus(result5.messages, "", $translate.instant("vnm.lable.vnm.name"), "");
																closeOverLay();
															} else {
																$scope.PromotionSource = result5;
																$scope.model.fStaffCode = $localStorage.clientContext.shop.staffCode;
																$scope.model.fStaffName = $localStorage.clientContext.shop.staffName;
																formSaleTransaction.getPriceTypeAndBundle(function(result6) {
																	if (result6 == null || result6 == undefined || result6.status == '0') {
																		bootboxAlertFocus(result6.messages, "", $translate.instant("vnm.lable.vnm.name"), "");
																		closeOverLay();
																	} else {
																		$scope.mvtMapPriceTypeAndBundle = result6;
																		let keySearchUnit = {
																			"code" : "05",
																		};
																		formSaleTransaction.getListApDomains(keySearchUnit, function(resultUnit) {
																			if (resultUnit == null || resultUnit == undefined || resultUnit.status == '0') {
																				bootboxAlertFocus(resultUnit.messages, "", $translate
																						.instant("vnm.lable.vnm.name"), "");
																				closeOverLay();
																			} else {
																				$scope.lstUnit = resultUnit;
																				closeOverLay();
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
							createTableListGoodsService(lstNull);
							createTableListGoodsSerial(lstNull);
							$scope.model.fMoneyCustomerReturn = '';
							$scope.model.fMoneyChange = '';
							$scope.model.fMoneyNoTax = "0";
							$scope.model.fMoneyProm = "0";
							$scope.model.fMoneyDiscount = "0";
							$scope.model.fMoneyTax = "0";
							$scope.model.fMoneyWithTax = "0";
							$scope.model.fMoneySum = "0";
						});
					}
					$scope.fillUnit = function(data) {
						var vReturn = "";
						for (let iUnit = 0; iUnit < $scope.lstUnit.length; iUnit++) {
							if ($scope.lstUnit[iUnit].code == data) {
								vReturn = $scope.lstUnit[iUnit].name;
								break;
							}
						}
						return vReturn;
					}
					// click change trans type
					$scope.onChangeTransType = function() {
						$scope.model.fCustomer = $scope.model.fTransType.name;
					}
					// click doi HTTT
					$scope.onChangePaymentMethod = function() {
						var keySearch = {
							"code" : $scope.model.fPaymentMethod.value,
							"name" : "VND",
						}
						formSaleTransaction.getRate(keySearch, function(result) {
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

					$scope.getFGoodsName = function() {
						if ($scope.itemSelectedListGoods != null && $scope.itemSelectedListGoods != undefined
								&& $scope.itemSelectedListGoods.goodsCode != undefined) {
							$scope.model.fGoodsName = $scope.itemSelectedListGoods.name;
							// document.getElementById('fGoods').title = $scope.itemSelectedListGoods.goodsCode;
							// document.getElementById('fGoodsName').title = $scope.itemSelectedListGoods.name;

							var keySearch = {
								"code" : $scope.itemSelectedListGoods.goodsId,
								"name" : $localStorage.clientContext.shop.tariffId,
							};
							formSaleTransaction.getListPrices(keySearch, function(result) {
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

					$scope.itemSelectedListGoods = {};
					$("#fGoodsCode").keyup(function(e) {
						var code = (e.keyCode ? e.keyCode : e.which);
						if (code == '120') {
							$scope.showModalFunction("modalListGoods");
							if (Object.keys($scope.itemSelectedListGoods).length == 0) {
								$scope.itemSelectedListGoods = $scope.GoodsSource[0];
							}
							createDataTableListGoods($scope.GoodsSource);
						} else {
							if ($scope.model.fGoodsCode == '')
								$scope.model.fGoodsName = '';
						}
					});
					$scope.checkF9Goods = function() {
						let check = "0";
						let goodsId = "";

						if ($scope.model.fGoodsCode != undefined && $scope.model.fGoodsCode != "") {
							for (var i = 0; i < $scope.GoodsSource.length; i++) {
								if ($scope.model.fGoodsCode.trim().toUpperCase() == $scope.GoodsSource[i].goodsCode.toUpperCase()) {
									$scope.itemSelectedListGoods = $scope.GoodsSource[i];
									$scope.model.fGoodsCode = $scope.GoodsSource[i].goodsCode.trim();
									$scope.model.fGoodsName = $scope.GoodsSource[i].name.trim();
									goodsId = $scope.GoodsSource[i].goodsId.trim();
									check = "1";
									break;
								}
							}
							if ("0" == check) {
								$scope.showModalFunction("modalListGoods");
								createDataTableListGoods($scope.GoodsSource);
							} else {
								overLoading();
								$scope.model.fPrice = "";
								$scope.model.fPriceName = "";
								document.getElementById('fGoodsCode').title = $scope.model.fGoodsCode;
								document.getElementById('fGoodsName').title = $scope.model.fGoodsName;
								$scope.model.fQuantity = '1';
								var keySearch = {
									"code" : goodsId,
									"name" : $localStorage.clientContext.shop.tariffId,
								};
								formSaleTransaction.getListPrices(keySearch, function(result) {
									if (result != null && result != undefined && result.status != '0') {
										$scope.PriceSource = result;
										closeOverLay();
									} else {
										bootboxAlertFocus(result.messages, "", $translate.instant("vnm.lable.vnm.name"), "");
										closeOverLay();
									}
								});
							}
						} else {
							$scope.model.fGoodsCode = "";
							$scope.model.fGoodsName = "";
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
							"oSearch" : {
								"sSearch" : angular.uppercase($('#fGoodsCode').val())
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
							"createdRow" : function(row, data, rowIndex) {
								if (Object.keys($scope.itemSelectedListGoods).length != 0) {
									if (dlgRowIndexSelectedListGoods == rowIndex) {
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
							if (Object.keys($scope.itemSelectedListGoods).length != 0) {
								dlgRowIndexSelectedListGoods = $(this).closest('tr').index();
							}
						});
					}

					$scope.updateFormGoods = function() {
						overLoading();
						$scope.model.fGoodsCode = $scope.itemSelectedListGoods.goodsCode;
						$scope.model.fGoodsName = $scope.itemSelectedListGoods.name;
						$scope.model.fPrice = "";
						$scope.model.fPriceName = "";
						document.getElementById('fGoodsCode').title = $scope.model.fGoodsCode;
						document.getElementById('fGoodsName').title = $scope.model.fGoodsName;
						$scope.hideModalFunction("modalListGoods");
						$scope.model.fQuantity = '1';
						var keySearch = {
							"code" : $scope.itemSelectedListGoods.goodsId,
							"name" : $localStorage.clientContext.shop.tariffId,
						};
						formSaleTransaction.getListPrices(keySearch, function(result) {
							if (result != null && result != undefined && result.status != '0') {
								$scope.PriceSource = result;
								closeOverLay();
							} else {
								bootboxAlertFocus(result.messages, "", $translate.instant("vnm.lable.vnm.name"), "");
								closeOverLay();
							}
						});

					}

					$scope.dialogListGoodsActionBack = function() {
						angular.element(document.getElementById('fGoodsCode')).focus();
						$scope.hideModalFunction("modalListGoods");
					}

					// khoi tao
					var initialize = function() {

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
						var obj = {
							"rowId" : createTimeStamp(),
							"cardNo" : $scope.model.dicnCardNo.toUpperCase(),
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
					$scope.lstGoodsService = [];
					$scope.lstAttachGoods = [];
					$scope.attachGoodSelected = {};
					$scope.lstPriceAttachGoods = [];
					$scope.lstSerialAttachGoods = [];
					$scope.attachGoodSelected = {};
					$scope.attachGoodSelectedBack = {};

					$scope.showDialogAttachGoods = function() {
						if ($scope.asTypeActionSerial == "ADD" && $scope.goodsServiceSelected.attachGoods != null
								&& $scope.goodsServiceSelected.attachGoods != undefined && $scope.goodsServiceSelected.attachGoods.length > 0) {
							$scope.lstAttachGoods = $scope.goodsServiceSelected.attachGoods;
							createTableListAttachGoods($scope.lstAttachGoods);
							createTableListSerialAttachGoods(lstNull);
							$scope.attachGoodSelected = {};
							$scope.isDisableQuantityAttGood = true;
							$scope.lstGoodsService.push($scope.itemSelectedListGoods);
							$scope.clearDetailValue();
							$scope.showModalFunction('modalInputAttachGoods');

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

						$('#tblListAttachGoods tbody').off().on(
								'click',
								'tr',
								function(e, dt, type, indexes) {
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
										formSaleTransaction.getListPrices(keySearch, function(result) {
											if (result != null && result != undefined && result.status != '0') {
												$scope.lstPriceAttachGoods = result;
												$scope.model.fAttPriceDlg = {};

												// fillDetailSerial
												$scope.fillDetailSerial($scope.attachGoodSelected.goodsId, $scope.attachGoodSelected.goodsCode);
											}
										});
									} else {
										bootboxAlertFocus($translate.instant('vnm.dialogInputAttachGoods.message.good.not.exist'), "", $translate
												.instant("vnm.lable.vnm.name"), "");
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
						formSaleTransaction.getListSerialAttachGoods(keySearch,
								function(result) {
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
									if ($scope.attachGoodSelected.goodsSale != null && $scope.attachGoodSelected.goodsSale != undefined
											&& $scope.attachGoodSelected.goodsSale.goodsCode != undefined
											&& $scope.attachGoodSelected.goodsSale.goodsCode != null) {
										var goodsSaleTransaction = $scope.attachGoodSelected.goodsSale;
										$scope.model.fAttPriceDlg = {};
										for (var i = 0; i < $scope.lstPriceAttachGoods.length; i++) {
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
												for (var j = 0; j < $scope.lstSerialAttachGoods.length; j++) {
													var vtRowJ = $scope.lstSerialAttachGoods[j];
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
									if ($scope.attachGoodSelected.goodsSale != null && $scope.attachGoodSelected.goodsSale != undefined
											&& $scope.attachGoodSelected.goodsSale.promotionId != undefined
											&& $scope.attachGoodSelected.goodsSale.promotionId != null) {
										for (var i = 0; i < $scope.PromotionSource.length; i++) {
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
						if ($scope.lstPriceAttachGoods != null && $scope.lstPriceAttachGoods != undefined && $scope.lstPriceAttachGoods.length > 0) {
							$scope.model.fAttPriceDlg = $scope.lstPriceAttachGoods[0];
						}
					}

					$scope.btnUpdateOnclick = function() {
						if ($scope.validateFocusLost()) {
							var goodsSaleTrans = {};
							$scope.goodSaleTransaction = $scope.attachGoodSelected.goodsSale;
							if ($scope.goodSaleTransaction == null || $scope.goodSaleTransaction == undefined
									|| $scope.goodSaleTransaction.goodsCode == undefined) {
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

							goodsSaleTrans.primaryGoodsCode = $scope.itemSelectedListGoods.goodsCode;
							goodsSaleTrans.primaryPriceId = $scope.model.fPrice.priceId;

							var strPromotionID = "";
							var lngTotalPromotion = 0;
							if ($scope.model.fAttPromotionDlg != null && $scope.model.fAttPromotionDlg != undefined
									&& $scope.model.fAttPromotionDlg.promotionId != undefined) {
								strPromotionID = $scope.model.fAttPromotionDlg.promotionId;
								var strPromotionCode = $scope.model.fAttPromotionDlg.promProgramCode;
								var lngPromotionAmount = $scope.model.fAttPromotionDlg.promAmount;
								var strPromotionType = $scope.model.fAttPromotionDlg.promType;
								lngTotalPromotion = $scope.calculatePromotion($scope.model.fAttQuantityDlg, $scope.model.fAttPriceDlg.price,
										lngPromotionAmount, strPromotionType);

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
							for (var i = 0; i < $scope.lstAttachGoods.length; i++) {
								if ($scope.lstAttachGoods[i].bl.toUpperCase() == 'TRUE') {
									$scope.attGoodsSelected.push($scope.lstAttachGoods[i].goodsSale);
									$scope.lstAttachGoodsTemp.push($scope.lstAttachGoods[i]);
								}
							}
							$scope.mblnReturnAtt = true;
							$scope.hideModalFunction('modalInputAttachGoods');
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
							bootboxAlertFocus($translate.instant('vnm.dialogInputAttachGoods.message.error.select.good'), "", $translate
									.instant("vnm.lable.vnm.name"), "");
							return false;
						} else if (pintAttachQuantity != (pdblAttachConstant * Number($scope.model.fQuantity))) {
							bootboxAlertFocus($translate.instant("Tổng số lượng nhóm hàng " + strGroupAttachName + " phải bằng "
									+ (pdblAttachConstant * Number($scope.model.fQuantity))), "", $translate.instant("vnm.lable.vnm.name"), "");
							return false;
						}
						return true;
					}

					$scope.calculatePromotion = function(quantity, price, val, type) {
						var rs = 0;
						if (type == '1') {
							rs = Number(quantity) * Number(price) * Number(val) / 100;
						} else if (type == '2') {
							rs = Number(quantity) * Number(val);
						}
						return rs;
					}

					$scope.getAttPromotionNameDlg = function() {
						if ($scope.model.fAttPromotionDlg != null && $scope.model.fAttPromotionDlg != undefined
								&& $scope.model.fAttPromotionDlg.promProgramCode != undefined) {
							$scope.model.fAttPromotionNameDlg = $scope.model.fAttPromotionDlg.name;
							document.getElementById('fAttPromotionDlg').title = $scope.model.fAttPromotionDlg.promProgramCode;
							document.getElementById('fAttPromotionNameDlg').title = $scope.model.fAttPromotionDlg.name;
						} else {
							$scope.model.fAttPromotionNameDlg = '';
							document.getElementById('fPromotion').title = '';
							document.getElementById('fAttPromotionNameDlg').title = '';
						}
					}

					$scope.getGoodsSelected = function(code) {
						for (var i = 0; i < $scope.GoodsSource.length; i++) {
							if ($scope.GoodsSource[i].goodsCode == code) {
								return $scope.GoodsSource[i];
							}
						}
						return null;
					}

					$scope.getUsageQuantity = function(code) {
						var rs = 0;
						for (var i = 0; i < $scope.lstGoodsService.length; i++) {
							if (code == $scope.lstGoodsService[i].goodsCode) {
								rs += Number($scope.lstGoodsService[i].quantity);
							}
						}
						return rs;
					}

					$scope.validateFocusLost = function() {
						if ($scope.model.fAttGoodDlg == null || $scope.model.fAttGoodDlg == undefined || $scope.model.fAttGoodDlg.trim() == '') {
							bootboxAlertFocus($translate.instant('vnm.dialogInputAttachGoods.message.error.input.good'), "", $translate
									.instant("vnm.lable.vnm.name"), "");
							return;
						}
						if ($scope.model.fAttPriceDlg.price == null || $scope.model.fAttPriceDlg.price == undefined) {
							bootboxAlertFocus($translate.instant('vnm.dialogInputAttachGoods.message.error.select.price'), "", $translate
									.instant("vnm.lable.vnm.name"), "");
							return;
						}
						if ($scope.model.fAttQuantityDlg == null || $scope.model.fAttQuantityDlg == undefined || $scope.model.fAttQuantityDlg.trim() == '') {
							bootboxAlertFocus($translate.instant('vnm.dialogInputAttachGoods.message.error.input.quantity'), "", $translate
									.instant("vnm.lable.vnm.name"), "");
							return;
						}
						/*
						 * if ($scope.model.fAttQuantityDlg != $scope.listSelectItemCheckBoxAttach.length) {
						 * bootboxAlertFocus($translate.instant('vnm.dialogInputAttachGoods.message.error.wrong.input.quantity'), "",
						 * $translate.instant("vnm.lable.vnm.name"), ""); return; }
						 */

						$scope.goodsSelectedTmp = $scope.getGoodsSelected($scope.attachGoodSelected.goodsCode);
						var quantity = Number($scope.goodsSelectedTmp.maxQuantity);
						var usageQuantity = Number($scope.getUsageQuantity($scope.attachGoodSelected.goodsCode));
						if (Number($scope.model.fAttQuantityDlg) > (quantity - usageQuantity)) {
							bootboxAlertFocus("Hàng " + $scope.attachGoodSelected.goodsCode + " không đủ số lượng. Số lượng thực tế : "
									+ $scope.goodsSelectedTmp.maxQuantity, "", $translate.instant("vnm.lable.vnm.name"), "");
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
						$scope.mblnReturnAtt = false;
						$scope.hideModalFunction('modalInputAttachGoods');
						$scope.onCloseInputAttachGoods();
					}

					$scope.btnFBackOnclickConfirmNOK = function() {
					}

					$scope.onCloseInputAttachGoods = function() {
						if (!$scope.mblnReturnAtt) {
							$scope.btnFDeleteOnclickConfirmOK();
							return;
						}

						$scope.goodsFormSelected.lstGoodsSaleTransaction = $scope.lstTableGoods;
						$scope.goodsFormSelected.rate = $scope.model.fRate;
						$scope.goodsFormSelected.lstGoodsSaleAt = $scope.attGoodsSelected;
						$scope.goodsFormSelected.lstAttachGoodsTemp = $scope.lstAttachGoodsTemp;

						overLoading();
						formSaleTransaction.addAttachGoodsToForm($scope.goodsFormSelected, function(result) {
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

									for (var i = 0; i < $scope.attGoodsSelected.length; i++) {
										for (var j = 0; j < $scope.lstTableGoods.length; j++) {
											if ($scope.attGoodsSelected[i].goodsCode == $scope.lstTableGoods[j].goodsCode
													&& $scope.lstTableGoods[j].attachGoods != null && $scope.lstTableGoods[j].attachGoods != undefined
													&& $scope.lstTableGoods[j].attachGoods.length > 0) {
												$scope.goodsServiceSelected = $scope.lstTableGoods[j];
												$scope.lstAttachGoods = $scope.goodsServiceSelected.attachGoods;

												createTableListAttachGoods($scope.lstAttachGoods);
												createTableListSerialAttachGoods(lstNull);

												$scope.attachGoodSelected = {};
												$scope.isDisableQuantityAttGood = true;

												$scope.lstGoodsService = [];
												$scope.lstTableGoods.forEach(function(item) {
													$scope.lstGoodsService.push(Object.assign({}, item))
												});

												$scope.clearDetailValue();
												$scope.showModalFunction('modalInputAttachGoods');

												var desc = $translate.instant("vnm.dialogInputAttachGoods.label.description");
												desc = desc.replace(/###1/, $scope.goodsServiceSelected.goodsCode);
												desc = desc.replace(/###2/, $scope.goodsServiceSelected.goodsPrice);
												desc = desc.replace(/###3/, $scope.goodsServiceSelected.goodsQuantity);
												document.getElementById('attDescription').innerHTML = desc;
											}
										}
									}
								}
							}
							closeOverLay();
						});
					}

					function createTableListSerialAttachGoods(dataItem) {
						oTableItemFSerialAttachGoods = $('#tblSerialAttachGoods')
								.DataTable(
										{
											"columnDefs" : [ {
												'targets' : 0,
												"orderable" : false,
												'checkboxes' : {
													'selectRow' : true
												}
											} ],
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
															return '<input type="checkbox" id="checkAttachx" class="form-control width-50" style="width:17px"  id="first-child" value="'
																	+ x + '" ></input>';
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
						for (var i = 0; i < $scope.lstCheckSerialAt.length; i++) {
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
						$("#checkAllAttach").css('margin-left', '18px');

						$compile(angular.element('#tblSerialAttachGoods'))($scope);
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
					$scope.isHasGoods = function(code) {
						for (var i = 0; i < $scope.GoodsSource.length; i++) {
							if (code == $scope.GoodsSource[i].goodsCode) {
								return true;
							}
						}
						return false;
					}

					$scope.exitDialog = function() {
						$scope.hideModalFunction('modalInputAttachGoods');
					}

					$scope.repaintTableAttachGoods = function() {
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
					}

					$scope.checkAllCheckBoxAttach = function() {
						if ($('#checkAllAttach:checked').length > 0) { // Khi click check all
							$scope.listSelectItemCheckBoxAttach = $scope.lstSerialAttachGoods.slice(0, $scope.lstSerialAttachGoods.length);
						} else { // Khi bo click check all
							$scope.listSelectItemCheckBoxAttach = [];
						}
					}
					// ------------------ End checkbox dialog attach goods ---------------------------------
					// ------------------------------------- End Dialog Input Attach Goods --------------------------------------

					// show popup

					$scope.showModalFunction = function(idModal) {
						overLoading();
						$('#' + idModal).modal('show');
						$('#' + idModal).on('shown.bs.modal', function(e) {
							$.fn.dataTable.tables({
								visible : true,
								api : true
							}).columns.adjust();
							angular.element($("#tblListGoods_filter").find("input")[0]).focus();
							closeOverLay();
						});
						var attr = $('#' + idModal).attr('style="display: none;"');
						if (typeof attr !== typeof undefined && attr !== false) {
							$('#' + idModal).attr('style', 'display: block');
						}
					}

					// hide popup
					$scope.hideModalFunction = function(idModal) {
						$('#' + idModal).modal('hide');
					}

					// ---------------------------------- Them vao danh sach -----------------------------------------
					$scope.goodsFormSelected = {}; // Input truyen xuong bao gom tat ca ca tham so tren form
					$scope.lstTableGoods = []; // Danh sach cac mat hang da them tren bang
					$scope.asTypeActionSerial = "";

					$scope.validHTTT = function() {
						if ($scope.model.fPaymentMethod.code == '2' || $scope.model.fPaymentMethod.code == '3' || $scope.model.fPaymentMethod.code == '4'
								|| $scope.model.fPaymentMethod.code == '5') {
							bootboxAlertFocus($translate.instant('vnm.formSaleTransaction.message.pay.method.not.support'), "fPaymentMethod", $translate
									.instant("vnm.lable.vnm.name"), "");
							return false;
						}
						return true;
					}

					$scope.btnFAddGoods = function() {
						overLoading();
						if (!$scope.validHTTT()) {
							closeOverLay();
							return;
						}
						if (!$scope.fValidateAddGoods()) {
							closeOverLay();
							return;
						}
						$scope.goodsFormSelected.transType = $scope.model.fTransType;
						$scope.goodsFormSelected.agent = $scope.model.fAgent;
						$scope.goodsFormSelected.receiptCode = $scope.model.fReceiptCode;
						$scope.goodsFormSelected.paymentMethod = $scope.model.fPaymentMethod;
						$scope.goodsFormSelected.rate = $scope.model.fRate;
						$scope.goodsFormSelected.cardNo = $scope.model.fCardNo;
						$scope.goodsFormSelected.staffCode = $scope.model.fStaffCode;
						$scope.goodsFormSelected.staffName = $scope.model.fStaffName;
						$scope.goodsFormSelected.transDate = $scope.model.fTransDate;
						$scope.goodsFormSelected.goods = $scope.itemSelectedListGoods;
						$scope.goodsFormSelected.quantity = $scope.model.fQuantity;
						$scope.goodsFormSelected.price = $scope.model.fPrice;
						$scope.goodsFormSelected.promotion = $scope.model.fPromotion;
						$scope.goodsFormSelected.discount = $scope.model.fDiscount;
						$scope.goodsFormSelected.vat = $scope.model.fVat.substring(0, $scope.model.fVat.length - 1);
						$scope.goodsFormSelected.lstGoodsSaleTransaction = $scope.lstTableGoods;

						formSaleTransaction.addGoods($scope.goodsFormSelected, function(result) {
							if (result != null && result != undefined) {
								if (result.status == '0') {
									if (result.messages.includes("FSS-30012")) {
										bootboxAlertFocus($translate.instant("vnm.error.FSS-30012"), "", $translate.instant("vnm.lable.vnm.name"), "");
										closeOverLay();
									} else if (result.messages.includes("FSS-30011")) {
										var params = result.messages.split("___");
										var mess = params[1].split(",");
										var er = $translate.instant("vnm.error.FSS-30011");
										er = er.replace(/###1/, mess[0]);
										er = er.replace(/###2/, mess[1]);
										bootboxAlertFocus(er, "", $translate.instant("vnm.lable.vnm.name"), "");
										closeOverLay();
									} else {
										bootboxAlertFocus(result.messages, "", $translate.instant("vnm.lable.vnm.name"), "");
										closeOverLay();
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
									if ($scope.goodsServiceSelected.checkSerial == '1') {
										$scope.showDialogInputSerial(); // Nhap serial cho mat hang;
										closeOverLay();
									}
									closeOverLay();
								}
							}
						});
					}
					function formatNumber(num) {
						return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
					}
					$scope.setMoney = function(goodsSale) {
						mlngSUMMoneySumWithPromInForm = goodsSale.mlngSUMMoneySumWithProm;
						$scope.model.fMoneyTax = goodsSale.mlngSUMMoneyTaxSum;
						$scope.model.fMoneyTaxSum = goodsSale.mlngSUMMoneyTax;
						$scope.model.fMoneyDiscount = goodsSale.mlngSUMMoneyDiscount;
						$scope.model.fMoneyProm = goodsSale.mlngSUMMoneyProm;
						$scope.model.fMoneySum = goodsSale.mlngSUMMoneySumWithProm;
						$scope.model.fMoneyNoTax = goodsSale.mlngSUMMoneyNoTax;
						$scope.model.fMoneyWithTax = goodsSale.mlngSUMMoneyTax;
					}

					$scope.fValidateAddGoods = function() {
						if ($scope.itemSelectedListGoods == null || $scope.itemSelectedListGoods == undefined
								|| $scope.itemSelectedListGoods.goodsId == undefined) {
							bootboxAlertFocus($translate.instant("vnm.form_sale_dealer.error.form.empty.goods"), "fGoodsCode", $translate
									.instant("vnm.lable.vnm.name"), "");
							return false;
						}
						if ($scope.model.fQuantity == null || $scope.model.fQuantity == undefined) {
							bootboxAlertFocus($translate.instant("vnm.form_sale_dealer.error.form.empty.quantity"), "fQuantity", $translate
									.instant("vnm.lable.vnm.name"), "");
							return false;
						}
						if ($scope.model.fPrice == null || $scope.model.fPrice == undefined || $scope.model.fPrice.priceId == undefined) {
							bootboxAlertFocus($translate.instant("vnm.form_sale_dealer.error.form.empty.price"), "fPrice", $translate
									.instant("vnm.lable.vnm.name"), "");
							return false;
						}
						if ($scope.model.fRate == null || $scope.model.fRate == undefined) {
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
						overLoading();
						if ($scope.mGoodsSale.goodsId == null || $scope.mGoodsSale.goodsId == undefined) {
							$scope.mGoodsSale.goodsId = $scope.itemSelectedListGoods.goodsId;
							$scope.mGoodsSale.goodsCode = $scope.itemSelectedListGoods.goodsCode;
							$scope.mGoodsSale.goodsQuantity = $scope.model.fQuantity;
						}
						var initInput = {
							"transType" : $scope.model.fTransType.code,
							"goodsId" : $scope.mGoodsSale.goodsId,
							"stockId" : $localStorage.clientContext.sessionStaffStockID,
							"mvctUsageSerial" : $scope.mvctUsageSerial,
							"flag" : $scope.asTypeActionSerial,
							"formName" : "FormSaleDealer",
							"lstTableGoods" : $scope.lstTableGoods,
							"goodsCode" : $scope.mGoodsSale.goodsCode,
						};
						formSaleTransaction.initASData(initInput, function(result) {
							if (result != null && result != undefined) {
								if (result.status == '0') {
									closeOverLay();
									bootboxAlertFocus(result.messages, "", $translate.instant("vnm.lable.vnm.name"), "");
								} else {
									$scope.ASSerialSource = result;
									$scope.disableASToSerial = true;
									$scope.model.asSerialTypeSearch = "single";
									$scope.model.asQuantity = $scope.model.fQuantity;
									$scope.model.asGoodsCode = $scope.itemSelectedListGoods.goodsCode;
									$scope.model.asGoodsName = $scope.itemSelectedListGoods.name;
									document.getElementById('asGoodsCode').title = $scope.itemSelectedListGoods.goodsCode;
									document.getElementById('asGoodsName').title = $scope.itemSelectedListGoods.name;
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
						$scope.model.aslGoodsCode = $scope.itemSelectedListGoods.goodsCode;
						$scope.model.aslGoodsName = $scope.itemSelectedListGoods.name;
						document.getElementById('aslGoodsCode').title = $scope.itemSelectedListGoods.goodsCode;
						document.getElementById('aslGoodsName').title = $scope.itemSelectedListGoods.name;
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
									$scope.itemASFromSerialSelected = $scope.ASSerialSource[i];
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
							if ($scope.lstTableASSerial.length != $scope.goodsServiceSelected.goodsQuantity) {
								var er = $translate.instant("vnm.error.FSS-30002");
								er = er.replace(/###/, $scope.goodsServiceSelected.goodsQuantity);
								bootboxAlertFocus(er, "", $translate.instant("vnm.lable.vnm.name"), "");
								return;
							}
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
						if ($scope.asTypeActionSerial == "MODIFY") {
							$scope.hideModalFunction("modalAddSerialSaleTrans");
						} else {
							$scope.goodsServiceSelected.vectorSerial = [];
							createTableListGoodsSerial($scope.goodsServiceSelected.vectorSerial);
							$scope.hideModalFunction("modalAddSerialSaleTrans");
							$scope.showDialogAttachGoods();
						}
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
						oTableItemASInputSerialList = $('#tableASInputSerialList').DataTable(
								{
									'columnDefs' : [ {
										'targets' : 0,
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
									"scrollX" : true,
									"scrollY" : 200,
									"columnDefs" : [ {
										"targets" : [ 2 ],
										"orderable" : false,
										className : 'dt-body-center'
									} ],
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
													return '<input type="checkbox" class="ng-pristine ng-untouched ng-valid ng-empty" id="first-child" value="'
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
						$("#checkAlls").removeClass("sorting");
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
					$scope.btnFDeleteOnclick = function() {
						if ($scope.goodsServiceSelected != null && $scope.goodsServiceSelected != undefined
								&& $scope.goodsServiceSelected.goodsCode != undefined) {
							var vstrPrimaryGoodsCode = StringUtilNVL($scope.goodsServiceSelected.primaryGoodsCode);
							var vtAttachGoods = $scope.goodsServiceSelected.attachGoods;
							if (vstrPrimaryGoodsCode != "" || (vtAttachGoods != null && vtAttachGoods != undefined && vtAttachGoods.length > 0)) {
								bootboxConfirm($translate.instant("vnm.lable.vnm.name"),
										$translate.instant("vnm.form_sale_dealer.confirm.delete.attach.goods"), $scope.btnFDeleteOnclickConfirmOK,
										$scope.btnFDeleteOnclickConfirmNOK);
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

						formSaleTransaction.deleteGoods(objDelete, function(result) {
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
						});
					}
					// ---------------------------------- End Xoa mat hang tren form -------------------------------------------------

					// ---------------------------------- Sửa serial của mặt hàng ----------------------------------------
					$scope.btnFEditOnclick = function() {
						if (Object.keys($scope.goodsServiceSelected).length != 0) {
							if ($scope.goodsServiceSelected.checkSerial == '0') {
								return;
							}

							$scope.asTypeActionSerial = 'MODIFY';
							$scope.mGoodsSale = {};
							$scope.mGoodsSale.goodsQuantity = $scope.goodsServiceSelected.goodsQuantity;
							$scope.mGoodsSale.goodsCode = $scope.goodsServiceSelected.goodsCode;
							var strGoodsID = $scope.goodsServiceSelected.vectorId.mstrGoodID;
							$scope.mGoodsSale.goodsId = strGoodsID;

							$scope.mvctUsageSerial = $scope.getUsageVectorSerial();

							$scope.showDialogInputSerial();
						}
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

					// ---------------------------------- Ghi thông tin giao dịch ---------------------------------------------
					$scope.mvctMGMGoodsSerialList = [];
					$scope.fValidInputWriteInfo = function() {
						if ($scope.model.fTaxCode != null && $scope.model.fTaxCode != undefined && $scope.model.fTaxCode.trim != ''
								&& $scope.model.fTaxCode.length > 0 && $scope.model.fTaxCode.length < 10) {
							bootboxAlertFocus($translate.instant("vnm.formSaleTransaction.message.error.tax.code.length"), "fTaxCode", $translate
									.instant("vnm.lable.vnm.name"), "");
							return false;
						}
						if ($scope.model.fTransType.code == '3') {
							bootboxAlertFocus($translate.instant("vnm.formSaleTransaction.message.error.tax.code.length"), "fTransType", $translate
									.instant("vnm.lable.vnm.name"), "");
							return false;
						}
						if ($scope.model.fTransDate == null || $scope.model.fTransDate == undefined || $scope.model.fTransDate.trim == '') {
							bootboxAlertFocus($translate.instant("vnm.formSaleTransaction.message.error.fTransDate.empty"), "fTransDate", $translate
									.instant("vnm.lable.vnm.name"), "");
							return false;
						}
						if (moment($('#fTransDate').val(), "DD/MM/YYYY") > new Date()) {
							bootboxAlertFocus($translate.instant("vnm.formSaleTransaction.message.error.fTransDate"), "fTransDate", $translate
									.instant("vnm.lable.vnm.name"), "");
							return false;
						}
						if ($scope.lstTableGoods.length <= 0) {
							bootboxAlertFocus($translate.instant("vnm.formSaleTransaction.message.error.empty.list.goods.sale"), "", $translate
									.instant("vnm.lable.vnm.name"), "");
							return false;
						}
						return true;
					}

					$scope.writeInfor = function() {
						$scope.validInputWriteInfo();
					}
					$scope.validInputWriteInfo = function() {
						if (!$scope.fValidInputWriteInfo()) {
							return;
						}
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

						formSaleTransaction.writeInfo(objWriteInfo, function(result) {
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
										closeOverLay();
										return false;
									} else {
										bootboxAlertFocus(result.messages, "", $translate.instant("vnm.lable.vnm.name"), "");
										closeOverLay();
										return false;
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
										$scope.bootboxAlertFocusS(er, "", $translate.instant("vnm.lable.vnm.name"), "");
										closeOverLay();
										return false;
									} else {
										bootboxAlertFocus(er, "", $translate.instant("vnm.lable.vnm.name"), "");
										closeOverLay();
										return false;
									}
								} else {
									bootboxAlertFocus(result.messages, "", $translate.instant("vnm.lable.vnm.name"), "");
									closeOverLay();
									return false;
								}
							} else {
								if ($scope.lstTableGoods == null || $scope.lstTableGoods == undefined || $scope.lstTableGoods.length == 0) {
									closeOverLay();
									return;
								} else {
									if ($scope.lstTableGoods.length > 0) {
										var obj = {
											'lstGoodsSaleTransaction' : $scope.lstTableGoods,
											'mgmgGoodsSerialOld' : $scope.mvctMGMGoodsSerialList,
										};
										formSaleTransaction.getMGMGGoodsSerial(obj, function(result2) {
											if (result2 != null && result2 != undefined && result2.status != '0') {
												$scope.mvctMGMGoodsSerialList = result2;
												createTableStaffInfoMGM($scope.mvctMGMGoodsSerialList);
												$scope.clearDetailValueDialog();
												if ($scope.mvctMGMGoodsSerialList.length > 0) {
													$scope.fillDetailValueDialog($scope.mvctMGMGoodsSerialList[0]);
												}
												$scope.onChangeAction("ACTION_NONE");
												$scope.showModalFunction("modalStaffInfoMGM");
											}
										});

									}
								}
							}
							closeOverLay();
						});

					}

					$scope.btnInputOnClik = function() {
						if ($scope.mvctMGMGoodsSerialList.length > 0) {
							$scope.onChangeAction("ACTION_MODIFY");
							$('#pnlButtonActionMGM').css('display', 'none');
							$('#pnlButtonOKMGM').css('display', 'block');
						}
					}
					$scope.destroy = function() {
						$scope.onChangeAction("ACTION_CANCEL");
						$('#pnlButtonActionMGM').css('display', 'block');
						$('#pnlButtonOKMGM').css('display', 'none');
					}
					$scope.accept = function() {
						if ($scope.model.staffCodeInfo == null || $scope.model.staffCodeInfo == undefined || "" == $scope.model.staffCodeInfo.trim()) {
							bootboxAlertFocus(($translate.instant("vnm.FormBankTransactionApprove.FSS-00002")).replace('%FIELD%', $translate
									.instant("vnm.dialogStaffInfoMGM.label.staff.code")), "fStaffCodeInfo", $translate.instant("vnm.lable.vnm.name"), "")
							return;
						} else if ($scope.model.staffNameInfo == null || $scope.model.staffNameInfo == undefined || "" == $scope.model.staffNameInfo.trim()) {
							bootboxAlertFocus(($translate.instant("vnm.FormBankTransactionApprove.FSS-00002")).replace('%FIELD%', $translate
									.instant("vnm.dialogStaffInfoMGM.label.staff.name")), "fStaffNameInfo", $translate.instant("vnm.lable.vnm.name"), "")
							return;
						} else if ($scope.model.cmtStaffInfo == null || $scope.model.cmtStaffInfo == undefined || "" == $scope.model.cmtStaffInfo.trim()) {
							bootboxAlertFocus(($translate.instant("vnm.FormBankTransactionApprove.FSS-00002")).replace('%FIELD%', $translate
									.instant("vnm.dialogStaffInfoMGM.label.cmt")), "fCMTStaffInfo", $translate.instant("vnm.lable.vnm.name"), "")
							return;
						} else if ($scope.model.addressStaffInfo == null || $scope.model.addressStaffInfo == undefined
								|| "" == $scope.model.addressStaffInfo.trim()) {
							bootboxAlertFocus(($translate.instant("vnm.FormBankTransactionApprove.FSS-00002")).replace('%FIELD%', $translate
									.instant("vnm.dialogStaffInfoMGM.label.address")), "fAddressStaffInfo", $translate.instant("vnm.lable.vnm.name"), "")
							return;
						} else if ($scope.model.companyInfo == null || $scope.model.companyInfo == undefined || "" == $scope.model.companyInfo.trim()) {
							bootboxAlertFocus(($translate.instant("vnm.FormBankTransactionApprove.FSS-00002")).replace('%FIELD%', $translate
									.instant("vnm.dialogStaffInfoMGM.label.company")), "fCompanyInfo", $translate.instant("vnm.lable.vnm.name"), "")
							return;
						} else if ($scope.model.cusCodeInfo == null || $scope.model.cusCodeInfo == undefined || "" == $scope.model.cusCodeInfo.trim()) {
							bootboxAlertFocus(($translate.instant("vnm.FormBankTransactionApprove.FSS-00002")).replace('%FIELD%', $translate
									.instant("vnm.dialogStaffInfoMGM.label.customer.code")), "fCusCodeInfo", $translate.instant("vnm.lable.vnm.name"), "")
							return;
						} else if ($scope.model.cusNameInfo == null || $scope.model.cusNameInfo == undefined || "" == $scope.model.cusNameInfo.trim()) {
							bootboxAlertFocus(($translate.instant("vnm.FormBankTransactionApprove.FSS-00002")).replace('%FIELD%', $translate
									.instant("vnm.dialogStaffInfoMGM.label.customer.name")), "fCusNameInfo", $translate.instant("vnm.lable.vnm.name"), "")
							return;
						} else if ($scope.model.cmtCusInfo == null || $scope.model.cmtCusInfo == undefined || "" == $scope.model.cmtCusInfo.trim()) {
							bootboxAlertFocus(($translate.instant("vnm.FormBankTransactionApprove.FSS-00002")).replace('%FIELD%', $translate
									.instant("vnm.dialogStaffInfoMGM.label.cmt")), "fCMTCusInfo", $translate.instant("vnm.lable.vnm.name"), "")
							return;
						} else if ($scope.model.addressCusInfo == null || $scope.model.addressCusInfo == undefined || "" == $scope.model.addressCusInfo.trim()) {
							bootboxAlertFocus(($translate.instant("vnm.FormBankTransactionApprove.FSS-00002")).replace('%FIELD%', $translate
									.instant("vnm.dialogStaffInfoMGM.label.address")), "fAddressCusInfo", $translate.instant("vnm.lable.vnm.name"), "")
							return;
						} else if ($scope.model.phoneInfo == null || $scope.model.phoneInfo == undefined || "" == $scope.model.phoneInfo.trim()) {
							bootboxAlertFocus(($translate.instant("vnm.FormBankTransactionApprove.FSS-00002")).replace('%FIELD%', $translate
									.instant("vnm.dialogStaffInfoMGM.label.phone")), "fPhoneInfo", $translate.instant("vnm.lable.vnm.name"), "")
							return;
						} else if ($scope.model.packDataInfo == null || $scope.model.packDataInfo == undefined || "" == $scope.model.packDataInfo.trim()) {
							bootboxAlertFocus(($translate.instant("vnm.FormBankTransactionApprove.FSS-00002")).replace('%FIELD%', $translate
									.instant("vnm.dialogStaffInfoMGM.label.pack.data")), "fPackDataInfo", $translate.instant("vnm.lable.vnm.name"), "")
							return;
						} else {
							$scope.mvctMGMGoodsSerialList[dlgRowIndex].staffCode = $scope.model.staffCodeInfo;
							$scope.mvctMGMGoodsSerialList[dlgRowIndex].staffName = $scope.model.staffNameInfo;
							$scope.mvctMGMGoodsSerialList[dlgRowIndex].staffIDCard = $scope.model.cmtStaffInfo;
							$scope.mvctMGMGoodsSerialList[dlgRowIndex].staffAddress = $scope.model.addressStaffInfo;
							$scope.mvctMGMGoodsSerialList[dlgRowIndex].custCode = $scope.model.cusCodeInfo;
							$scope.mvctMGMGoodsSerialList[dlgRowIndex].custName = $scope.model.cusNameInfo;
							$scope.mvctMGMGoodsSerialList[dlgRowIndex].custIDCard = $scope.model.cmtCusInfo;
							$scope.mvctMGMGoodsSerialList[dlgRowIndex].custAddress = $scope.model.addressCusInfo;
							$scope.mvctMGMGoodsSerialList[dlgRowIndex].mdnNum = $scope.model.phoneInfo;
							$scope.mvctMGMGoodsSerialList[dlgRowIndex].mdnProfile = $scope.model.packDataInfo;
							$scope.mvctMGMGoodsSerialList[dlgRowIndex].company = $scope.model.companyInfo;
							createTableStaffInfoMGM($scope.mvctMGMGoodsSerialList);
							$scope.onChangeAction("ACTION_SAVE");
							$('#pnlButtonActionMGM').css('display', 'block');
							$('#pnlButtonOKMGM').css('display', 'none');
						}
					}
					$scope.setStatus = function(value) {
						$scope.dStaffCodeInfo = value;
						$scope.dStaffNameInfo = value;
						$scope.dCMTStaffInfo = value;
						$scope.dAddressStaffInfo = value;
						$scope.dCompanyInfo = value;
						$scope.dCusCodeInfo = value;
						$scope.dCusNameInfo = value;
						$scope.dCMTCusInfo = value;
						$scope.dStaffCodeInfo = value;
						$scope.dAddressCusInfo = value;
						$scope.dPhoneInfo = value;
						$scope.dPackDataInfo = value;
					}
					$scope.fillDetailValueDialog = function(data) {
						if (Object.keys(data).length != 0) {
							$scope.model.staffCodeInfo = data.staffCode;
							$scope.model.staffNameInfo = data.staffName;
							$scope.model.cmtStaffInfo = data.staffIDCard;
							$scope.model.addressStaffInfo = data.staffAddress;
							$scope.model.cusCodeInfo = data.custCode;
							$scope.model.cusNameInfo = data.custName;
							$scope.model.cmtCusInfo = data.custIDCard;
							$scope.model.addressCusInfo = data.custAddress;
						}
					}
					$scope.clearDetailValueDialog = function() {
						$scope.model.staffCodeInfo = "";
						$scope.model.staffNameInfo = "";
						$scope.model.cmtStaffInfo = "";
						$scope.model.addressStaffInfo = "";
						$scope.model.cusCodeInfo = "";
						$scope.model.cusNameInfo = "";
						$scope.model.cmtCusInfo = "";
						$scope.model.addressCusInfo = "";

					}
					$scope.onChangeAction = function(iNewAction) {
						if (iNewAction == "ACTION_NONE") {
							$scope.setStatus(true);
							$('#pnlButtonActionMGM').css('display', 'block');
							$('#pnlButtonOKMGM').css('display', 'none');
						}
						if (iNewAction == "ACTION_MODIFY") {
							$scope.setStatus(false);
						} else if (iNewAction == "ACTION_CANCEL" || iNewAction == "ACTION_SAVE") {
							$scope.setStatus(true);
							$scope.fillDetailValueDialog($scope.mvctMGMGoodsSerialList[dlgRowIndex]);
						}
					}
					var indexFor = 0;
					var showDialog = false;
					$scope.btnBackOnClick = function() {
						$scope.hideModalFunction('modalStaffInfoMGM');
						var obj = {
							'lstGoodsSaleTransaction' : $scope.lstTableGoods,
						};
						/*
						 * formSaleTransaction.getMGMGGoodsSerial(obj, function(result2) { if (result2 != null && result2 != undefined && result2.status != '0') {
						 * $scope.mvctMGMGoodsSerialList = result2;
						 */
						for (var i = 0; i < $scope.mvctMGMGoodsSerialList.length; i++) {
							if ($scope.mvctMGMGoodsSerialList[i].staffIDCard == "" || $scope.mvctMGMGoodsSerialList[i].custCode == "") {
								bootboxAlertFocus($translate.instant("vnm.formSaleTransaction.message.error.input.sale.handset"), "", $translate
										.instant("vnm.lable.vnm.name"), "");
								return;
							}
						}
						for (var i = 0; i < $scope.mvtMapPriceTypeAndBundle.length; i++) {
							strPriceType = $scope.mvtMapPriceTypeAndBundle[i].code;
							indexFor = i;
							var intHandsetCount = 0;
							for (var j = 0; j < $scope.lstTableGoods.length; j++) {
								if (strPriceType == $scope.lstTableGoods[j].priceTypeId) {
									var intQuantity = Number($scope.lstTableGoods[j].goodsQuantity);
									intHandsetCount += intQuantity;
									$scope.getHandsetPromotionSerial($scope.lstTableGoods[j], Number($scope.mvtMapPriceTypeAndBundle[i].name));
								}
							}
							if ((Number(intHandsetCount) * Number($scope.mvtMapPriceTypeAndBundle[i].name)) > 0) {
								for (var k = 0; k < $scope.lstTableGoods.length; k++) {
									if ($scope.lstTableGoods[k].goodsType == '6') {
										$scope.vctSerialTmp = $scope.lstTableGoods[k].vectorSerial;
										for (var t = 0; t < $scope.vctSerialTmp.length; j++) {
											var serial = $scope.vctSerialTmp[t].serial;
											$scope.itemSerialTmp = {};
											$scope.itemSerialTmp.serial = serial;
											$scope.lstSerialPromotion.push($scope.itemSerialTmp);
										}
									}
								}

								$scope.showDialogInputSerialPromotion(Number(intHandsetCount) * Number($scope.mvtMapPriceTypeAndBundle[i].name), strPriceType);
								break;
							} else {
								$scope.addToHansetICCIDList($scope.mvtMapPriceTypeAndBundle[i].code);
								intHandsetCount = 0;
							}
						}
						if (Number(intHandsetCount) == 0) {
							bootboxConfirm($translate.instant("vnm.lable.vnm.name"), $translate
									.instant("vnm.dialogInputSerialPromotion.message.confirm.write.info"), $scope.writeInfoOK, $scope.writeInfoNOK);
						}

						/*
						 * } });
						 */
					}

					$scope.establishInvoice = function() {
						// $localStorage.clientContext.transfer = mstrTransactionID;
						bootboxConfirm($translate.instant("vnm.lable.vnm.name"), $translate
								.instant("vnm.formSaleTransaction.message.confirm.establish.invoice"), $scope.confirmEstablishOK, $scope.confirmEstablishOKNOK);

					};
					$scope.confirmEstablishOK = function() {
						$localStorage.clientContext.transIdCenter = mstrTransactionID;
						var url = window.location.href;
						url = url.substring(0, url.lastIndexOf("/"));
						$window.open(url + '/FormInvoiceEstablish', '_blank');
					}
					$scope.confirmEstablishOKNOK = function() {
					}

					var mstrTransactionID = '';
					$scope.writeInfoOK = function() {
						overLoading();
						var obj = {
							'lstGoodsSaleTransaction' : $scope.lstTableGoods,
						};
						$scope.objecReturn = {};
						formSaleTransaction.getMoney(obj, function(result) {
							if (result != null && result != undefined && result.status != '0') {
								$scope.objectReturn = result;
								var tmp = 0;
								for (var i = 0; i < $scope.lstTableGoods.length; i++) {
									if (Number($scope.lstTableGoods[i].vat) > tmp) {
										tmp = Number($scope.lstTableGoods[i].vat);
									}
								}
								/*
								 * var shopID = $localStorage.clientContext.shop.shopId; if($scope.model.fTransType.code == '1' || $scope.model.fTransType.code ==
								 * '2' || $scope.model.fTransType.code == '6' || $scope.model.fTransType.code == '7' || $scope.model.fTransType.code == '8' ||
								 * $scope.model.fTransType.code == '9'){ shopID == $localStorage.clientContext.shop.shopId; }
								 */

								var objSave = {
									'vctGood' : $scope.lstTableGoods,
									'vtCreditNo' : $scope.lstTableDICNCardNo,
									'vtHandsetICCIDList' : $scope.lstHandsetICCID,
									'strStockID' : $localStorage.clientContext.sessionStaffStockID,
									'strStaffID' : $localStorage.clientContext.shop.staffId,
									'strShopID' : $localStorage.clientContext.shop.shopId,
									'strPayMethod' : $scope.model.fPaymentMethod.code,
									'strAmount' : $scope.objectReturn.amount,
									'strAmountTax' : $scope.objectReturn.amountTax,
									'strTax' : $scope.objectReturn.tax,
									'strOrgTotal' : $scope.objectReturn.orgTotal,
									'strGrandTotal' : $scope.objectReturn.grandTotal,
									'strDiscount' : $scope.objectReturn.discountAmount,
									'strPromotion' : $scope.objectReturn.promotionAmount,
									'strCreateDateTime' : $('#fTransDate').val(),
									'strStatus' : '2',
									'strUserName' : StringUtilNVL($localStorage.clientContext.shop.staffCode),
									'strCustName' : StringUtilNVL($scope.model.fCustomer),
									'strTaxRate' : tmp,
									'strCustType' : StringUtilNVL($scope.model.fTransType.code),
									'strCustId' : '',
									'strCustAddress' : StringUtilNVL($scope.model.fAddress),
									'strTaxCode' : StringUtilNVL($scope.model.fTaxCode),
									'strBillAccount' : StringUtilNVL($scope.model.fAccount),
									'strCompnay' : StringUtilNVL($scope.model.fCompay),
									'strProcessStatus' : '',
									'sessionClientIp' : '',
									'strExchange' : '',
									'strWarrantyTransLogID' : '',
								};
								formSaleTransaction.saveTransaction(objSave, function(result3) {
									if (result3 != null && result3 != undefined && result3.status != '0' && result3 != 0) {
										mstrTransactionID = result3;
										$scope.objEstablishInvoice = {};
										$scope.objEstablishInvoice.strName = StringUtilNVL($scope.model.fCustomer);
										$scope.objEstablishInvoice.strCompany = StringUtilNVL($scope.model.fCompany);
										$scope.objEstablishInvoice.strTax = StringUtilNVL($scope.model.fTaxCode);
										$scope.objEstablishInvoice.strAccount = StringUtilNVL($scope.model.fAccount);
										$scope.objEstablishInvoice.strAddress = StringUtilNVL($scope.model.fAddress);
										$scope.objEstablishInvoice.strPayMethod = StringUtilNVL($scope.model.fPaymentMethod.code);
										$scope.lstTableGoods = [];
										$scope.lstSoldSerialTmp = [];
										$scope.lstSerialPromotion = [];
										let transTemp = $scope.model.fTransType;
										$scope.loadDefault();
										$scope.establishInvoice();
										$scope.model.fTransType = transTemp;
										if ($scope.mvctMGMGoodsSerialList.length > 0) {
											var objMGMPromotion = {
												'transactionId' : mstrTransactionID,
												'lstGoodsMGMGModel' : $scope.mvctMGMGoodsSerialList,
											};
											formSaleTransaction.saveMGMPromotion(objMGMPromotion, function(result4) {
												if (result4 != null && result4 != undefined && result4.status != '0') {
													$scope.mvctMGMGoodsSerialList = [];
													$scope.lstSerialPromotion = [];
													closeOverLay();
												} else {
													bootboxAlertFocus(result4.messages, "", $translate.instant("vnm.lable.vnm.name"), "");
													closeOverLay();
													return;
												}
											});
										} else {
											
											closeOverLay();
										}
									} else {
										let msgError = result3.messages;
										if (msgError.includes("PCK-A000")) {
											msgError = msgError.substring(msgError.indexOf("PCK-A000"), msgError.indexOf("PCK-A000") + 9);
											bootboxAlertFocus($translate.instant("vnm.error." + msgError), "", $translate.instant("vnm.lable.vnm.name"), "");
											closeOverLay();
											return;
										} else {
											bootboxAlertFocus(msgError, "", $translate.instant("vnm.lable.vnm.name"), "");
											closeOverLay();
											return;
										}
									}
								});

							} else {
								bootboxAlertFocus(result.messages, "", $translate.instant("vnm.lable.vnm.name"), "");
								closeOverLay();
								return;
							}
						});
					}
					$scope.writeInfoNOK = function() {
					}
					$scope.refresh = function() {
						getCustomer().setText("");
						getCustomerLOV().setCode("");
						getCompany().setText("");
						getTaxNo().setText("");
						getAccount().setText("");
						getAddress().setText("");
						refreshTransactionDetail();
						getPanelGoodsInfoEntry().getPanelGoods().txtCode.requestFocus();
						getCreditNumber().setText("");
						frmData.vtData.removeAllElements();
						getTotalPaidNumber().setText("");
					}
					$scope.lstHandsetICCID = [];

					$scope.addToHansetICCIDList = function(strPriceType) {
						if ($scope.mvtHandsetPromotionSerial == null && $scope.mvtHandsetPromotionSerial.length > 0 && $scope.lstSerialPromotion != null
								&& $scope.lstSerialPromotion.length > 0) {
							$scope.handsetICCID = {}
							$scope.handsetICCID.strPriceType = strPriceType;
							$scope.handsetICCID.lstPromotionSerialDlg = $scope.lstSerialPromotion;
							$scope.handsetICCID.lstPromotionSerial = $scope.mvtHandsetPromotionSerial;
							$scope.lstHandsetICCID.push($scope.handsetICCID);
						}
					}

					$scope.checkPromotionBundle = function(index, strPriceType, dblRatio) {
						var intHandsetCount = 0;
						for (var i = 0; i < $scope.lstTableGoods.length; i++) {
							if (strPriceType == $scope.lstTableGoods[i].priceTypeId) {
								var intQuantity = Number($scope.lstTableGoods[i].goodsQuantity);
								intHandsetCount += intQuantity;
								$scope.getHandsetPromotionSerial($scope.lstTableGoods[i], dblRatio);
							}
						}
						if (Number(intHandsetCount) * Number(dblRatio) > 0) {
							for (var i = 0; i < $scope.lstTableGoods.length; i++) {
								if ($scope.lstTableGoods[i].goodsType == '6') {
									$scope.vctSerialTmp = $scope.lstTableGoods[i].vectorSerial;
									for (var j = 0; j < $scope.vctSerialTmp.length; j++) {
										var serial = $scope.vctSerialTmp[i].serial;
										$scope.itemSerialTmp.serial = serial;
										$scope.lstSoldSerialTmp.push($scope.itemSerialTmp);
									}
								}
							}
							indexFor = index;
							$scope.showDialogInputSerialPromotion(Number(intHandsetCount) * Number(dblRatio), strPriceType);
						}

						return blReturn;
					}
					$scope.mvtHandsetPromotionSerial = [];
					$scope.getHandsetPromotionSerial = function(goodSale, dblRatio) {
						$scope.vctSerial = goodSale.vectorSerial;
						for (var i = 0; i < $scope.vctSerial.length; i++) {
							$scope.mvtHandsetPromotionSerial.push($scope.vctSerial[i].serial);
						}
						if (dblRatio != 1) {
							var strPrimaryGoodsCode = goodSale.primaryGoodsCode;
							$scope.vctId = goodSale.vectorId;
							var strPrimaryPriceId = $scope.vctId.mstrPriceID;
							for (var i = 0; i < $scope.lstTableGoods.length; i++) {
								if ($scope.lstTableGoods[i].primaryGoodsCode == strPrimaryGoodsCode
										&& $scope.lstTableGoods[i].primaryPriceId == strPrimaryPriceId && $scope.lstTableGoods[i].goodsType == '5') {
									$scope.getHandsetPromotionSerial($scope.lstTableGoods[i], dblRatio);
								}
							}
						}

					}

					// -----------------------------------Dialog Input Serial Promotion ----------------------------------------
					var action = '';
					$scope.lstSoldSerial = [];
					$scope.lstSerialPromotion = [];
					$scope.itemSerialSoldSelected = {};
					$scope.lstSerialSelectedTmp = [];
					$scope.serialPromotion = {};
					$scope.itemSerialPromotionSelected = {};
					$scope.itemSerialSoldSelected = {};
					$scope.showBtn = true;
					var blReturn = true;
					var strPriceType = '';
					var mintHandsetCount = 0;
					$scope.showDialogInputSerialPromotion = function(intHandsetCount, strPriceType) {
						$scope.lstSoldSerial = [];
						$scope.lstSoldSerialTmp = [];
						$scope.lstSerialPromotion = [];
						$scope.itemSerialSoldSelected = {};
						$scope.lstSerialSelectedTmp = [];
						$scope.serialPromotion = {};
						$scope.itemSerialPromotionSelected = {};
						$scope.itemSerialSoldSelected = {};
						$scope.model.fromSerial = '';
						$scope.model.toSerial = '';
						$scope.model.number = '';
						$scope.model.serial = '';
						$scope.isNotSearch = false;
						mintHandsetCount = intHandsetCount;
						if (Number(intHandsetCount) > 0) {
							for (var i = 0; i < $scope.lstTableGoods.length; i++) {
								$scope.goodSaleTmp = $scope.lstTableGoods[i];
								if ('6' == $scope.goodSaleTmp.goodsType) {
									$scope.vctSerial = $scope.goodSaleTmp.vectorSerial;
									for (var j = 0; j < $scope.vctSerial.length; j++) {
										$scope.itemSerialPromotion = {};
										$scope.itemSerialPromotion.serial = $scope.vctSerial[j].serial;
										$scope.lstSerialPromotion.push($scope.itemSerialPromotion);
									}
								}
							}
							$scope.showModalFunction("modalInputSerialPromotion");
							var desc = $translate.instant("vnm.dialogInputSerialPromotion.label.note" + strPriceType);
							if (desc.indexOf('vnm.dialogInputSerialPromotion.label.note') != -1) {
								desc = '' + strPriceType;
							} else {
								desc = desc + strPriceType;
							}
							$('#lbNote').text(desc);
							$scope.itemSerialPromotionSelected = $scope.lstSerialPromotion[0];
							createTableSerialDeal($scope.lstSoldSerialTmp);
							createTableSerialPromotion($scope.lstSerialPromotion);
						}
					}

					$scope.btnSearchSerialPromotion = function() {
						if ($scope.model.fromSerial == null || $scope.model.fromSerial == undefined || $scope.model.fromSerial.trim() == '') {
							bootboxAlertFocus($translate.instant("vnm.dialogInputSerialPromotion.message.empty.from.serial"), "", $translate
									.instant("vnm.lable.vnm.name"), "");
							return;
						}
						if ($scope.model.toSerial == null || $scope.model.toSerial == undefined || $scope.model.toSerial.trim() == '') {
							bootboxAlertFocus($translate.instant("vnm.dialogInputSerialPromotion.message.empty.to.serial"), "", $translate
									.instant("vnm.lable.vnm.name"), "");
							return;
						}
						var mstrFromSerial = $scope.model.fromSerial;
						var mstrToSerial = $scope.model.toSerial;
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
							bootboxAlertFocus($translate.instant("vnm.dialogInputSerialPromotion.message.serial.must.greater"), "", $translate
									.instant("vnm.lable.vnm.name"), "");
							return;
						}
						var keySearch = {
							'mstrQuantity' : $scope.model.number,
							'mstrFromSerial' : $scope.model.fromSerial.trim(),
							'mstrToSerial' : $scope.model.toSerial.trim(),
						};
						overLoading();
						formSaleTransaction.searchAllSoldGoods(keySearch, function(result) {
							if (result != null || result != undefined) {
								if (result.status == '0') {
									bootboxAlertFocus(result.messages, "", $translate.instant("vnm.lable.vnm.name"), "");
									closeOverLay();
									return;
								} else if (result.length > 0) {
									$scope.lstSoldSerial = result;
									$scope.lstSoldSerialTmp = [];
									angular.forEach($scope.lstSoldSerial, function(item) {
										$scope.lstSoldSerialTmp.push(item);
									})
									$scope.itemSerialSoldSelected = $scope.lstSoldSerialTmp[0];
									createTableSerialDeal($scope.lstSoldSerialTmp);
									closeOverLay();
								} else {
									bootboxAlertFocus($translate.instant("vnm.dialogInputSerialPromotion.message.nodata.found"), "", $translate
											.instant("vnm.lable.vnm.name"), "");
									closeOverLay();
									return;
								}
							}
							closeOverLay();
						});

					}

					$scope.validateTransfer = function(serial) {
						for (var i = 0; i < $scope.lstSerialPromotion.length; i++) {
							if (serial == $scope.lstSerialPromotion[i].serial) {
								var desc = $translate.instant("vnm.dialogInputSerialPromotion.message.serial.exist");
								desc.replace(/###/, serial);
								bootboxAlertFocus(desc, "", $translate.instant("vnm.lable.vnm.name"), "");
								return false;
							}
						}
						return true;
					}

					$scope.addSerial = function() {
						$scope.lstSerialSelectedTmp = [];
						var table = $('#tblSerialDeal').DataTable();
						for (var i = 0; i < $scope.lstSoldSerialTmp.length; i++) {
							var row = table.row(i);
							var className = row.node().className;
							if (className.includes("selected")) {
								$scope.lstSerialSelectedTmp.push($scope.lstSoldSerialTmp[i]);
							}
						}
						if ($scope.lstSerialSelectedTmp.length == 0 && $scope.lstSoldSerialTmp.length > 0) {
							$scope.lstSerialSelectedTmp.push($scope.lstSoldSerialTmp[0]);
						}
						var input = {
							'strPriceType' : strPriceType,
							'type' : '',
							'mintHandsetCount' : mintHandsetCount,
							'lstSoldSerial' : $scope.lstSerialSelectedTmp,
							'lstSerialPromotion' : $scope.lstSerialPromotion,
						};
						formSaleTransaction.addPromotionSerial(input, function(result) {
							if (result != null || result != undefined) {
								if (result.status == '0') {
									bootboxAlertFocus($translate.instant("vnm.dialogInputSerialPromotion." + result.messages), "", $translate
											.instant("vnm.lable.vnm.name"), "");
									closeOverLay();
									return;
								} else {
									$scope.objectReturn = result;
									$scope.lstSoldSerialResult = result.lstSoldSerial;
									$scope.lstSerialPromotion = result.lstSerialPromotion;
									$scope.model.serial = $scope.lstSerialSelectedTmp[0].serial;
									$scope.itemSerialPromotionSelected = $scope.lstSerialPromotion[0];
									for (var i = 0; i < $scope.lstSoldSerialResult.length; i++) {
										for (var j = 0; j < $scope.lstSoldSerialTmp.length; j++) {
											if ($scope.lstSoldSerialResult[i].serial == $scope.lstSoldSerialTmp[j].serial) {
												$scope.lstSoldSerialTmp.splice(j, 1);
											}
										}
									}
									$scope.itemSerialSoldSelected = $scope.lstSoldSerialTmp[0];
									createTableSerialDeal($scope.lstSoldSerialTmp);
									createTableSerialPromotion($scope.lstSerialPromotion);
									if ($scope.objectReturn.message != null) {
										bootboxAlertFocus($translate.instant($scope.objectReturn.message), "", $translate.instant("vnm.lable.vnm.name"), "");
									}
								}
							}
						});
						/*
						 * for(var i = 0; i < $scope.lstSerialSelectedTmp.length; i++){ if(i > 0){
						 * $scope.addPromotionSerial($scope.lstSerialSelectedTmp[i].serial, i - 1); }
						 * $scope.addPromotionSerial($scope.lstSerialSelectedTmp[i].serial, i); }
						 */
					}

					$scope.addAllSerial = function() {
						var input = {
							'strPriceType' : strPriceType,
							'type' : '',
							'mintHandsetCount' : mintHandsetCount,
							'lstSoldSerial' : $scope.lstSoldSerialTmp,
							'lstSerialPromotion' : $scope.lstSerialPromotion,
						};
						formSaleTransaction.addPromotionSerial(input, function(result) {
							if (result != null || result != undefined) {
								if (result.status == '0') {
									bootboxAlertFocus($translate.instant("vnm.dialogInputSerialPromotion." + result.messages), "", $translate
											.instant("vnm.lable.vnm.name"), "");
									closeOverLay();
									return;
								} else {
									$scope.objectReturn = result;
									$scope.lstSoldSerialResult = result.lstSoldSerial;
									$scope.lstSerialPromotion = result.lstSerialPromotion;
									$scope.model.serial = $scope.lstSoldSerialResult[$scope.lstSoldSerialResult.length - 1].serial;
									$scope.itemSerialPromotionSelected = $scope.lstSerialPromotion[0];
									for (var i = 0; i < $scope.lstSoldSerialResult.length; i++) {
										for (var j = 0; j < $scope.lstSoldSerialTmp.length; j++) {
											if ($scope.lstSoldSerialResult[i].serial == $scope.lstSoldSerialTmp[j].serial) {
												$scope.lstSoldSerialTmp.splice(j, 1);
											}
										}
									}
									$scope.itemSerialSoldSelected = $scope.lstSoldSerialTmp[0];
									createTableSerialDeal($scope.lstSoldSerialTmp);
									createTableSerialPromotion($scope.lstSerialPromotion);
									if ($scope.objectReturn.message != null) {
										bootboxAlertFocus($translate.instant($scope.objectReturn.message), "", $translate.instant("vnm.lable.vnm.name"), "");
									}
								}
							}
							closeOverLay();
						});
					}

					$scope.removeSerial = function() {
						$scope.lstSerialSelectedTmp = [];
						var table = $('#tblSerialPromotion').DataTable();
						for (var i = 0; i < $scope.lstSerialPromotion.length; i++) {
							var row = table.row(i);
							var className = row.node().className;
							if (className.includes("selected")) {
								$scope.lstSerialSelectedTmp.push($scope.lstSerialPromotion[i]);
							}
						}
						for (var i = 0; i < $scope.lstSerialSelectedTmp.length; i++) {
							for (var j = 0; j < $scope.lstSoldSerial.length; j++) {
								if ($scope.lstSerialSelectedTmp[i].serial == $scope.lstSoldSerial[j].serial) {
									$scope.lstSoldSerialTmp.push($scope.lstSoldSerial[j]);
									$scope.lstSerialPromotion.splice(i, 1);
									break;
								} else {
									$scope.soldSerial = {};
									$scope.spolSerial.serial = $scope.lstSerialSelectedTmp[i].serial;
									$scope.lstSoldSerialTmp.push($scope.soldSerial);
									$scope.lstSerialPromotion.splice(i, 1);
									break;
								}
							}
						}
						$scope.itemSerialPromotionSelected = $scope.lstSerialPromotion[0];
						$scope.itemSerialSoldSelected = $scope.lstSoldSerialTmp[0];
						createTableSerialDeal($scope.lstSoldSerialTmp);
						createTableSerialPromotion($scope.lstSerialPromotion);
						$scope.lstSerialSelectedTmp = [];
					}

					$scope.removeAll = function() {
						$scope.lstSerialPromotion = [];
						$scope.lstSoldSerialTmp = [];
						angular.forEach($scope.lstSoldSerial, function(item) {
							$scope.lstSoldSerialTmp.push(item);
						});
						$scope.model.serial = '';
						$scope.itemSerialSoldSelected = $scope.lstSoldSerialTmp[0];
						createTableSerialDeal($scope.lstSoldSerialTmp);
						createTableSerialPromotion($scope.lstSerialPromotion);
					}

					$scope.btnAddSerialPromotion = function() {
						$scope.model.showAddSerial = true;
						$scope.model.showRemoveSerial = true;
						$scope.showBtn = false;
						$scope.isNotSearch = true;
						$scope.model.serial = '';
						action = 'ADD';
					}

					$scope.btnBack2Promotion = function() {
						$scope.showBtn = true;
						$scope.isNotSearch = false;
						$scope.model.showAddSerial = false;
						$scope.model.showRemoveSerial = false;
						action = '';
					}

					$scope.btnApprovePromotion = function() {
						if ($scope.model.serial == null || $scope.model.serial == undefined || $scope.model.serial.trim() == '') {
							bootboxAlertFocus($translate.instant("vnm.dialogInputSerialPromotion.message.empty.serial"), "", $translate
									.instant("vnm.lable.vnm.name"), "");
							return;
						}
						if (action == 'ADD') {
							$scope.onAdd();
						} else if (action == 'EDIT') {
							$scope.onEdit();
						}
					}

					$scope.onAdd = function() {
						if ($scope.model.serial == null || $scope.model.serial == undefined || $scope.model.serial.trim() == '') {
							bootboxAlertFocus($translate.instant("vnm.dialogInputSerialPromotion.message.empty.serial"), "", $translate
									.instant("vnm.lable.vnm.name"), "");
							return;
						}
						$scope.itemSerialAdd = {};
						$scope.itemSerialAdd.serial = $scope.model.serial.trim();
						$scope.lstSerialSoldAdd = [];
						$scope.lstSerialSoldAdd.push($scope.itemSerialAdd);
						var input = {
							'strPriceType' : strPriceType,
							'type' : 'ADD',
							'mintHandsetCount' : mintHandsetCount,
							'lstSoldSerial' : $scope.lstSerialSoldAdd,
							'lstSerialPromotion' : $scope.lstSerialPromotion,
						};
						formSaleTransaction.addPromotionSerial(input, function(result) {
							if (result != null || result != undefined) {
								if (result.status == '0') {
									bootboxAlertFocus($translate.instant("vnm.dialogInputSerialPromotion." + result.messages), "", $translate
											.instant("vnm.lable.vnm.name"), "");
									closeOverLay();
									return;
								} else {
									$scope.objectReturn = result;
									$scope.lstSerialPromotion = result.lstSerialPromotion;
									$scope.itemSerialPromotionSelected = $scope.lstSerialPromotion[0];
									createTableSerialPromotion($scope.lstSerialPromotion);
								}
							} else {
								bootboxAlertFocus($translate.instant(result.message), "", $translate.instant("vnm.lable.vnm.name"), "");
								closeOverLay();
								return;
							}
						});
						/* $scope.addPromotionSerial($scope.model.serial.trim(), ''); */
						/*
						 * if(!$scope.addPromotionSerial($scope.model.serial.trim())){ $scope.btnBack2Promotion(); }else{ $scope.btnAddSerialPromotion(); }
						 */
					}

					var indexEdit = 0;
					$scope.btnEditSerialPromotion = function() {

						if ($scope.itemSerialPromotionSelected.serial == null || $scope.itemSerialPromotionSelected.serial == undefined
								|| $scope.itemSerialPromotionSelected.serial.trim() == '') {
							return;
						}
						$scope.model.serial = $scope.itemSerialPromotionSelected.serial;
						$scope.model.showAddSerial = true;
						$scope.model.showRemoveSerial = true;
						$scope.showBtn = false;
						$scope.isNotSearch = true;
						action = 'EDIT';
					}

					$scope.onEdit = function() {
						if ($scope.model.serial == null || $scope.model.serial == undefined || $scope.model.serial.trim() == '') {
							bootboxAlertFocus($translate.instant("vnm.dialogInputSerialPromotion.message.empty.serial"), "", $translate
									.instant("vnm.lable.vnm.name"), "");
							return;
						}
						if (!$scope.validateTransfer($scope.model.serial.trim())) {
							return;
						}
						if ($scope.model.serial == null || $scope.model.serial == undefined || $scope.model.serial.trim() == '') {
							bootboxAlertFocus($translate.instant("vnm.dialogInputSerialPromotion.message.empty.serial"), "", $translate
									.instant("vnm.lable.vnm.name"), "");
							return;
						}
						if (!$scope.validateTransfer($scope.model.serial.trim())) {
							return;
						}
						overLoading();
						var keySearch = {
							'code' : $scope.model.serial.trim(),
							'name' : strPriceType,
						};
						formSaleTransaction.getProfileFromNMS(keySearch, function(result) {
							if (result != null || result != undefined) {
								if (result.status == '0') {
									bootboxAlertFocus($translate.instant("vnm.dialogInputSerialPromotion.message.not.found.info"), "", $translate
											.instant("vnm.lable.vnm.name"), "");
									closeOverLay();
									return;
								} else {
									$scope.serialPromotion = result;
									if ($scope.serialPromotion.strError != '') {
										closeOverLay();
										return;
									}
									if ($scope.serialPromotion.bl == '1') {
										var desc = $translate.instant("vnm.dialogInputSerialPromotion.message.serial.exist");
										desc.replace(/###/, $scope.model.serial.trim());
										bootboxAlertFocus(desc, "", $translate.instant("vnm.lable.vnm.name"), "");
										closeOverLay();
										return;

									}
									for (var i = 0; i < $scope.lstSerialPromotion.length; i++) {
										if ($scope.itemSerialPromotionSelected.serial == $scope.lstSerialPromotion[i].serial) {
											$scope.lstSerialPromotion[i].serial = $scope.serialPromotion.serial;
											$scope.lstSerialPromotion[i].strMDN = $scope.serialPromotion.strMDN;
											$scope.lstSerialPromotion[i].strProfile = $scope.serialPromotion.strProfile;
											$scope.lstSerialPromotion[i].strOpenPool = $scope.serialPromotion.strOpenPool;
											$scope.lstSerialPromotion[i].strStatus = $scope.serialPromotion.strStatus;
											$scope.lstSerialPromotion[i].strError = $scope.serialPromotion.strError;
											$scope.lstSerialPromotion[i].bl = $scope.serialPromotion.bl;
											break;
										}
									}
									createTableSerialPromotion($scope.lstSerialPromotion);
								}
							}
							closeOverLay();
						});
					}

					$scope.btnDeletePromotion = function() {
						$scope.lstSerialSelectedTmp = [];
						var table = $('#tblSerialPromotion').DataTable();
						for (var i = 0; i < $scope.lstSerialPromotion.length; i++) {
							var row = table.row(i);
							var className = row.node().className;
							if (className.includes("selected")) {
								$scope.lstSerialSelectedTmp.push($scope.lstSerialPromotion[i]);
							}
						}
						if ($scope.lstSerialSelectedTmp.length <= 0) {
							return;
						} else {
							bootboxConfirm($translate.instant("vnm.lable.vnm.name"), $translate
									.instant("vnm.dialogInputSerialPromotion.message.confirm.delete.serial"), $scope.btnDeleteSerialPromotionConfirmOK,
									$scope.btnDeleteSerialPromotionConfirmNOK);
						}

					}

					$scope.btnDeleteSerialPromotionConfirmOK = function() {
						for (var i = 0; i < $scope.lstSerialSelectedTmp.length; i++) {
							for (var j = 0; j < $scope.lstSerialPromotion.length; j++) {
								if ($scope.lstSerialPromotion[j].serial == $scope.lstSerialSelectedTmp[i].serial) {
									$scope.lstSerialPromotion.splice(j, 1);
									break;
								}
							}
						}
						$scope.itemSerialPromotionSelected = $scope.lstSerialPromotion[0];
						$scope.lstSerialSelectedTmp = [];
						createTableSerialPromotion($scope.lstSerialPromotion);
					}

					$scope.btnDeleteSerialPromotionConfirmNOK = function() {
					}

					$scope.btnWriteInfoPromotion = function() {
						if ($scope.lstSerialPromotion.length != mintHandsetCount) {
							bootboxAlertFocus($translate.instant("vnm.dialogInputSerialPromotion.message.not.enought.serial"), "", $translate
									.instant("vnm.lable.vnm.name"), "");
							return;
						}

						indexFor++;
						if (indexFor >= $scope.mvtMapPriceTypeAndBundle.length) {
							$("#modalInputSerialPromotion").modal('hide');
							closeOverLay();
							bootboxConfirm($translate.instant("vnm.lable.vnm.name"), $translate
									.instant("vnm.dialogInputSerialPromotion.message.confirm.write.info"), $scope.writeInfoOK, $scope.writeInfoNOK);
							return;
						} else {
							for (var i = indexFor; i < $scope.mvtMapPriceTypeAndBundle.length; i++) {
								$scope.lstSoldSerialTmp = [];
								strPriceType = $scope.mvtMapPriceTypeAndBundle[i].code;
								var intHandsetCount = 0;
								for (var j = 0; j < $scope.lstTableGoods.length; j++) {
									if (strPriceType == $scope.lstTableGoods[j].priceTypeId) {
										var intQuantity = Number($scope.lstTableGoods[j].goodsQuantity);
										intHandsetCount += intQuantity;
										$scope.getHandsetPromotionSerial($scope.lstTableGoods[j], Number($scope.mvtMapPriceTypeAndBundle[i].name));
									}
								}
								if ((Number(intHandsetCount) * Number($scope.mvtMapPriceTypeAndBundle[i].name)) > 0) {
									for (var k = 0; k < $scope.lstTableGoods.length; k++) {
										if ($scope.lstTableGoods[k].goodsType == '6') {
											$scope.vctSerialTmp = $scope.lstTableGoods[k].vectorSerial;
											for (var t = 0; t < $scope.vctSerialTmp.length; j++) {
												var serial = $scope.vctSerialTmp[t].serial;
												$scope.itemSerialTmp = {};
												$scope.itemSerialTmp.serial = serial;
												$scope.lstSoldSerialTmp.push($scope.itemSerialTmp);
											}
										}
									}
									mintHandsetCount = Number(intHandsetCount) * Number($scope.mvtMapPriceTypeAndBundle[i].name);
									var desc = $translate.instant("vnm.dialogInputSerialPromotion.label.note" + strPriceType);
									if (desc.indexOf('vnm.dialogInputSerialPromotion.label.note') != -1) {
										desc = '' + strPriceType;
									} else {
										desc = desc + strPriceType;
									}
									$('#lbNote').text(desc);
									$scope.model.fromSerial = '';
									$scope.model.toSerial = '';
									$scope.model.toSerial = '';
									$scope.model.number = '';
									$scope.model.serial = '';
									$scope.lstSerialPromotion = [];
									createTableSerialDeal($scope.lstSoldSerialTmp);
									createTableSerialPromotion($scope.lstSerialPromotion);
									// $scope.showDialogInputSerialPromotion(Number(intHandsetCount) * Number($scope.mvtMapPriceTypeAndBundle[i].name),
									// strPriceType);

									break;
								} else {
									$scope.addToHansetICCIDList($scope.mvtMapPriceTypeAndBundle[i].code);
									intHandsetCount = 0;
								}
							}
						}
					}

					$scope.btnBackSerialPromotion = function() {
						$("#modalInputSerialPromotion").modal('hide');
						closeOverLay();
					}

					function createTableSerialDeal(dataItem) {
						oTableItemFSerialDeal = $('#tblSerialDeal').DataTable({
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
							"scrollX" : false,
							"scrollY" : 200,
							"columns" : [ {
								"mData" : "serial",
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
								if ($scope.itemSerialSoldSelected != ROW_NOT_SELECTED) {
									if ($scope.itemSerialSoldSelected.serial == data.serial) {
										$(row).addClass('selected');
									}
								} else {
									if (rowIndex == 0 || rowIndex == '0') {
										$(row).addClass('selected');
									}
								}
							}
						});

						$('#tblSerialDeal tbody').off().on('click', 'tr', function(e, dt, type, indexes) {
							$(this).removeClass('selected');
							var rowData = oTableItemFSerialDeal.row(this).data();
							oTableItemFSerialDeal.$('tr.selected').removeClass('selected');
							$(this).addClass('selected');
							// $scope.itemSerialSoldSelected = rowData;
							// createTableListGoodsSerial();
						});
					}

					function createTableSerialPromotion(dataItem) {
						oTableItemFSerialPromotion = $('#tblSerialPromotion').DataTable({
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
							"scrollX" : false,
							"scrollY" : 200,
							"columns" : [ {
								"mData" : "serial",
								"render" : function(data, type, row) {
									x = data == null ? '' : data;
									return "<div data-toggle='tooltip' class='text-wrap width-200' title='" + x + "'>" + x + "</div>";
								}
							}, {
								"mData" : "strMDN",
								"render" : function(data, type, row) {
									x = data == null ? '' : data;
									return "<div data-toggle='tooltip' class='text-wrap width-200' title='" + x + "'>" + x + "</div>";
								}
							}, {
								"mData" : "strProfile",
								"render" : function(data, type, row) {
									x = data == null ? '' : data;
									return "<div data-toggle='tooltip' class='text-wrap width-200' title='" + x + "'>" + x + "</div>";
								}
							}, {
								"mData" : "strOpenPool",
								"render" : function(data, type, row) {
									x = data == null ? '' : data;
									return "<div data-toggle='tooltip' class='text-wrap width-200' title='" + x + "'>" + x + "</div>";
								}
							}, {
								"mData" : "strStatus",
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
								if ($scope.itemSerialPromotionSelected != ROW_NOT_SELECTED) {
									if ($scope.itemSerialPromotionSelected.serial == data.serial) {
										$(row).addClass('selected');
									}
								} else {
									if (rowIndex == 0 || rowIndex == '0') {
										$(row).addClass('selected');
									}
								}
							}
						});

						$('#tblSerialPromotion tbody').off().on('click', 'tr', function(e, dt, type, indexes) {
							$(this).removeClass('selected');
							var rowData = oTableItemFSerialPromotion.row(this).data();
							oTableItemFSerialPromotion.$('tr.selected').removeClass('selected');
							$(this).addClass('selected');
							$scope.itemSerialPromotionSelected = rowData;
							indexEdit = indexes;
							if ($scope.itemSerialPromotionSelected == null || $scope.itemSerialPromotionSelected == undefined) {
								$scope.model.serial = '';
							} else {
								$scope.model.serial = $scope.itemSerialPromotionSelected.serial;
							}
							// $scope.goodsServiceSelected = rowData;
							// createTableListGoodsSerial();
						});
					}
					// -----------------------------------End Dialog Input Serial Promotion ------------------------------------
					$scope.lstMGMGoodsSerial = [];
					function createTableStaffInfoMGM(dataItem) {
						oTableItemFStaffInfoMGM = $('#tblStaffInfoMGM').DataTable({
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
							"scrollX" : false,
							"scrollY" : 200,
							"columns" : [ {
								"mData" : "strGoodsCode",
								"render" : function(data, type, row) {
									x = data == null ? '' : data;
									return "<div data-toggle='tooltip' class='text-wrap width-200' title='" + x + "'>" + x + "</div>";
								}
							}, {
								"mData" : "strSerial",
								"render" : function(data, type, row) {
									x = data == null ? '' : data;
									return "<div data-toggle='tooltip' class='text-wrap width-200' title='" + x + "'>" + x + "</div>";
								}
							}, {
								"mData" : "staffCode",
								"render" : function(data, type, row) {
									x = data == null ? '' : data;
									return "<div data-toggle='tooltip' class='text-wrap width-200' title='" + x + "'>" + x + "</div>";
								}
							}, {
								"mData" : "staffName",
								"render" : function(data, type, row) {
									x = data == null ? '' : data;
									return "<div data-toggle='tooltip' class='text-wrap width-200' title='" + x + "'>" + x + "</div>";
								}
							}, {
								"mData" : "custCode",
								"render" : function(data, type, row) {
									x = data == null ? '' : data;
									return "<div data-toggle='tooltip' class='text-wrap width-200' title='" + x + "'>" + x + "</div>";
								}
							}, {
								"mData" : "custName",
								"render" : function(data, type, row) {
									x = data == null ? '' : data;
									return "<div data-toggle='tooltip' class='text-wrap width-150' title='" + x + "'>" + x + "</div>";
								}
							}, {
								"mData" : "mdnNum",
								"render" : function(data, type, row) {
									x = data == null ? '' : data;
									return "<div data-toggle='tooltip' class='text-wrap width-150' title='" + x + "'>" + x + "</div>";
								}
							}, {
								"mData" : "mdnProfile",
								"render" : function(data, type, row) {
									x = data == null ? '' : data;
									return "<div data-toggle='tooltip' class='text-wrap width-150' title='" + x + "'>" + x + "</div>";
								}
							}, {
								"mData" : "company",
								"render" : function(data, type, row) {
									x = data == null ? '' : data;
									return "<div data-toggle='tooltip' class='text-wrap width-150' title='" + x + "'>" + x + "</div>";
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
								if (dlgRowIndex == rowIndex) {
									$(row).addClass('selected');
								}
							}
						});

						$('#tblStaffInfoMGM tbody').off().on('click', 'tr', function(e, dt, type, indexes) {
							$(this).removeClass('selected');
							rowData = oTableItemFStaffInfoMGM.row(this).data();
							$scope.selectItem = rowData;
							oTableItemFStaffInfoMGM.$('tr.selected').removeClass('selected');
							$(this).addClass('selected');
							$scope.selectItemDlgListItem = rowData;
							if (Object.keys($scope.selectItemDlgListItem).length != 0) {
								$scope.fillDetailValueDialog(rowData);
								dlgRowIndex = $(this).closest('tr').index();
							}
						});
						$('.dataTables_scrollBody thead tr').css({
							visibility : 'collapse'
						});

						$compile(angular.element('#tblStaffInfoMGM'))($scope);
					}

					// ---------------------------------- End Ghi thông tin giao dịch -----------------------------------------

					// create table danh sach hang hoa dich vu
					$scope.goodsServiceSelected = {};
					function createTableListGoodsService(dataItem) {
						oTableItemFGoodsService = $('#tableFGoodsService').DataTable(
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
									"order" : [],
									"select" : {
										style : 'single',
										info : false
									},
									"scrollX" : true,
									"scrollY" : 200,
									"columns" : [
											{
												"mData" : "goodsCode",
												"render" : function(data, type, row) {
													x = data == null ? '' : data;
													return "<div data-toggle='tooltip' style='text-align: center;' class='text-wrap width-200' title='" + x
															+ "'>" + x + "</div>";
												}
											},
											{
												"mData" : "goodsQuantity",
												"render" : function(data, type, row) {
													x = formatNumber(data) == null ? '' : formatNumber(data);
													return "<div data-toggle='tooltip'  style='text-align: right;' class='text-wrap width-150' title='" + x
															+ "'>" + x + "</div>";
												}
											},
											{
												"mData" : "goodsPrice",
												"render" : function(data, type, row) {
													x = formatNumber(data) == null ? '' : formatNumber(data);
													return "<div data-toggle='tooltip' style='text-align: right;' class='text-wrap width-150' title='" + x
															+ "'>" + x + "</div>";
												}
											},
											{
												"mData" : "goodsDiscount",
												"render" : function(data, type, row) {
													x = formatNumber(data) == null ? '' : formatNumber(data);
													return "<div data-toggle='tooltip' style='text-align: right;' class='text-wrap width-150' title='" + x
															+ "'>" + x + "</div>";
												}
											},
											{
												"mData" : "goodsPromotion",
												"render" : function(data, type, row) {
													x = formatNumber(data) == null ? '' : formatNumber(data);
													return "<div data-toggle='tooltip' style='text-align: right;' class='text-wrap width-150' title='" + x
															+ "'>" + x + "</div>";
												}
											},
											{
												"mData" : "goodsUnit",
												"render" : function(data, type, row) {
													x = $scope.fillUnit(data) == null ? '' : $scope.fillUnit(data);
													return "<div data-toggle='tooltip' class='text-wrap width-150' title='" + x + "'>" + x + "</div>";
												}
											},
											{
												"mData" : "moneySum1",
												"render" : function(data, type, row) {
													x = formatNumber(data) == null ? '' : formatNumber(data);
													return "<div data-toggle='tooltip' style='text-align: right;' class='text-wrap width-200' title='" + x
															+ "'>" + x + "</div>";
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
											if ($scope.goodsServiceSelected.goodsCode == data.goodsCode && rowIndex == $scope.lstTableGoods.length - 1) {
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
							// createTableListGoodsSerial();
							createTableListGoodsSerial($scope.goodsServiceSelected.vectorSerial);
							$scope.fillDataFromTable($scope.goodsServiceSelected);
						});
					}
					$scope.checkPayment = function() {
						if ($scope.model.fMoneyCustomerReturn != undefined && $scope.model.fMoneyCustomerReturn != null
								&& "" != $scope.model.fMoneyCustomerReturn) {
							$scope.model.fMoneyCustomerReturn = $scope.model.fMoneyCustomerReturn.replace(/,/g, "");
							let mlngTotalPaid = $scope.model.fMoneyCustomerReturn;
							if (Number(mlngSUMMoneySumWithPromInForm) > Number(mlngTotalPaid)) {
								bootboxAlertFocus($translate.instant('vnm.form_sale_dealer.messValidMoney'), 'fMoneyCustomerReturn', $translate
										.instant("vnm.lable.vnm.name"), "");
								$scope.model.fMoneyCustomerReturn = "";
								$scope.model.fMoneyChange = "";
							} else {
								$scope.model.fMoneyChange = Number(mlngTotalPaid) - Number(mlngSUMMoneySumWithPromInForm);
							}
						} else {
							$scope.model.fMoneyCustomerReturn = "";
							$scope.model.fMoneyChange = "";
						}
					}
					$scope.eventEnter = function(event) {
						if (event.keyCode == 13) {
							angular.element(document.activeElement).blur();
						}
					}

					$scope.fillDataFromTable = function(item) {
						$scope.model.itemSelectedListGoods = $scope.getGoodsObjByCode(item.goodsCode);
						$scope.model.fGoodsCode = $scope.model.itemSelectedListGoods.goodsCode;
						$scope.getFGoodsName()
						$scope.model.fQuantity = item.goodsQuantity;
						var keySearch = {
							"code" : item.vectorId.mstrGoodID,
							"name" : $localStorage.clientContext.shop.tariffId,
						};
						formSaleTransaction.getListPrices(keySearch, function(result) {
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
						oTableItemFGoodsSerial = $('#tableFGoodsSerial').DataTable(
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
													return "<div data-toggle='tooltip' style='text-align: center;' class='text-wrap width-200' title='" + x
															+ "'>" + x + "</div>";
												}
											},
											{
												"mData" : "inputDate",
												"render" : function(data, type, row) {
													x = data == null ? '' : data;
													return "<div data-toggle='tooltip' style='text-align: center;' class='text-wrap width-200' title='" + x
															+ "'>" + x + "</div>";
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
				});

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

function isNumberKey(evt) {
	var textInput = document.getElementById("dicnPrice").value;
	var charCode = (evt.which) ? evt.which : evt.keyCode
	if (charCode == 45 && textInput.indexOf('-') == '-1') {
		document.getElementById("dicnPrice").value = '-' + textInput;
		return false;
	}
	if (charCode != 46 && charCode > 31 && (charCode < 48 || charCode > 57))
		return false;
	return true;
}

function ValidateAlpha(evt) {
	var keyCode = (evt.which) ? evt.which : evt.keyCode
	if ((keyCode < 65 || keyCode > 90) && (keyCode < 97 || keyCode > 123) && keyCode != 32)
		return false;
	return true;
}

app_vnm.directive('format', [ '$filter', function($filter) {
	return {
		require : '?ngModel',
		link : function(scope, elem, attrs, ctrl) {
			if (!ctrl)
				return;

			ctrl.$formatters.unshift(function(a) {
				if (a != undefined && a != "") {
					return $filter("number")(ctrl.$modelValue)
				}
			});

			elem.bind('blur', function(event) {
				var plainNumber = elem.val().replace(/[^\d|\-+|\.+]/g, '');
				if (plainNumber != undefined && plainNumber != "") {
					elem.val($filter("number")(plainNumber));
				}
			});

			elem.bind('keydown keyup keypress', function(event) {
				if (elem.val().length > 3) {
					var plainNumber = elem.val().replace(/[^\d|\-+|\.+]/g, '');
					if (plainNumber != undefined && plainNumber != "") {
						elem.val($filter("number")(plainNumber));
					}
				}
			});
		}
	};
} ]);