app_vnm
		.factory(
				'createExchangeFac',
				function($http, $translate) {
					return {
						loadPrice : function(data, callback) {
							var url = eim_url + "/bs/createExchange/load_price";
							$http
									.put(url, data)
									.success(callback)
									.error(
											function(data, status, headers,
													config) {
												closeOverLay();
												bootbox
														.alert(status
																+ " "
																+ $translate
																		.instant('vnm.messages.error.connection'));
											});
						},

						loadPromotion : function(callback) {
							var url = eim_url
									+ "/bs/createExchange/load_promotion";
							$http
									.put(url)
									.success(callback)
									.error(
											function(data, status, headers,
													config) {
												closeOverLay();
												bootbox
														.alert(status
																+ " "
																+ $translate
																		.instant('vnm.messages.error.connection'));
											});
						},

						loadGood : function(data, callback) {
							var url = eim_url + "/bs/createExchange/load_good";
							$http
									.put(url, data)
									.success(callback)
									.error(
											function(data, status, headers,
													config) {
												closeOverLay();
												bootbox
														.alert(status
																+ " "
																+ $translate
																		.instant('vnm.messages.error.connection'));
											});
						},
						
						calculateF : function(data, callback) {
							var url = eim_url + "/bs/createExchange/calculate";
							$http
									.put(url, data)
									.success(callback)
									.error(
											function(data, status, headers,
													config) {
												closeOverLay();
												bootbox
														.alert(status
																+ " "
																+ $translate
																		.instant('vnm.messages.error.connection'));
											});
						},
						
						loadSerial : function(data, callback) {
							var url = eim_url + "/bs/createExchange/load_serial";
							$http
									.put(url, data)
									.success(callback)
									.error(
											function(data, status, headers,
													config) {
												closeOverLay();
												bootbox
														.alert(status
																+ " "
																+ $translate
																		.instant('vnm.messages.error.connection'));
											});
						},
						
						loadAttachGoods : function(data, callback) {
							var url = eim_url + "/bs/createExchange/get_attach_goods";
							$http
									.put(url, data)
									.success(callback)
									.error(
											function(data, status, headers,
													config) {
												closeOverLay();
												bootbox
														.alert(status
																+ " "
																+ $translate
																		.instant('vnm.messages.error.connection'));
											});
						},
						
						loadPriceTypeAndBundle : function(callback) {
							var url = eim_url
									+ "/bs/createExchange/load_price_type_and_bundle";
							$http
									.put(url)
									.success(callback)
									.error(
											function(data, status, headers,
													config) {
												closeOverLay();
												bootbox
														.alert(status
																+ " "
																+ $translate
																		.instant('vnm.messages.error.connection'));
											});
						},
						
						saveTransaction : function(data, callback) {
							var url = eim_url
									+ "/bs/createExchange/save_transaction";
							$http
									.put(url, data)
									.success(callback)
									.error(
											function(data, status, headers,
													config) {
												closeOverLay();
												bootbox
														.alert(status
																+ " "
																+ $translate
																		.instant('vnm.messages.error.connection'));
											});
						},
						
						saveMGMPromotion : function(data, callback) {
							var url = eim_url
							+ "/bs/createExchange/save_MGM_Promotion";
							$http
								.put(url, data)
								.success(callback)
								.error(
										function(data, status, headers,
												config) {
												closeOverLay();
												bootbox
													.alert(status
															+ " "
																+ $translate
																		.instant('vnm.messages.error.connection'));
											});
						},
						
						getCurrentInvoiceNo : function(data, callback) {
							var url = eim_url
							+ "/bs/createExchange/get_current_invoice_no";
							$http
								.put(url, data)
								.success(callback)
								.error(
										function(data, status, headers,
												config) {
												closeOverLay();
												bootbox
													.alert(status
															+ " "
																+ $translate
																		.instant('vnm.messages.error.connection'));
											});
						},
						
					}
				});

app_vnm
		.controller(
				'ctrl-createExchangeForCust',
				function($scope, $rootScope, $translate, $compile, $timeout,
						$uibModal, $location, $window, FileUploader, $filter,
						$http, NgTableParams, $localStorage, createExchangeFac) {

					$scope.model = {};

					$scope.validationOptions = {
						debounce : 1500,
						preValidateFormElements : true,
						rules : {},
						messages : {}
					}

					$.validator.addMethod("EmptyValue",
							function(value, element) {
								if (value == undefined || value == "")
									return false;
								if ($.trim(value) == "")
									return false;
								return true;
							}, "");

					$.validator.addMethod("maxlengthcustom", function(value,
							element, options) {
						var valueLenght = $.trim(value.toString()).length;
						if (valueLenght > options)
							return false;
						return true;
					}, "");

					$.validator.addMethod("minlengthcustom", function(value,
							element, options) {
						var valueLenght = $.trim(value.toString()).length;
						if (valueLenght > 0) {
							if (valueLenght < options)
								return false;
						}
						return true;
					}, "");

					var idAttachMentVal = null;
					var idAttachMentTypeInput = null;

					var initialize = function() {
					}

					initialize();

					$scope.model.userId = $localStorage.clientContext.shop.staffCode;
					$scope.model.userName = $localStorage.clientContext.shop.staffName;
					$scope.model.transDate = $filter('date')(new Date(),
							"dd/MM/yyyy");

					$scope.model.moneyNotax = "0";
					$scope.model.discount = "0";
					$scope.model.promo = "0";
					$scope.model.taxAmount = "0";
					$scope.model.amount = "0";
					$scope.model.total = "0";
					$scope.disablePayMethod = false;
					$scope.disableSoLuong = false;
					$scope.disableMoreInfo = true;

					getListCustInfor = function() {
						overLoading("Loading...");
						var url = eim_url + "/bs/SourceCustInfor";
						$http.get(url).success(function(data) {
							if (data != undefined && data != null) {
								if (data.length != 0) {
									$scope.CustInfoSource = data;
									$scope.model.custInfor = data[0];
									$scope.model.custName = data[0].name;
								}
							}
							closeOverLay();
						}).error(function(response) {
							closeOverLay();
						});
					}
					getListCustInfor();

					$scope.loadName = function() {
						$scope.model.custName = $scope.model.custInfor.name;
					}

					getListExcRate = function() {
						overLoading("Loading...");
						var url = eim_url + "/bs/SourceExcRate";
						$http.get(url).success(function(data) {
							if (data != undefined && data != null) {
								if (data.length != 0) {
									$scope.ExcRateSource = data;
									$scope.loadRate();
								}
							}
							closeOverLay();
						}).error(function(response) {
							closeOverLay();
						});
					}

					$scope.loadRate = function() {
						for (i = 0; i < $scope.ExcRateSource.length; i++) {
							if ($scope.ExcRateSource[i].firCurrency == $scope.model.payMethod.value
									&& $scope.ExcRateSource[i].secCurrency == 'VND') {
								$scope.model.rate = $scope.ExcRateSource[i].rate;
								break;
							}
						}
					}
					
					//
					getListDVT = function() {
						overLoading("Loading...");
						var url = eim_url + "/bs/SourceDVT";
						$http.get(url).success(function(data) {
							if (data != undefined && data != null) {
								if (data.length != 0) {
									$scope.DVTSource = data;
								}
							}
							closeOverLay();
						}).error(function(response) {
							closeOverLay();
						});
					}
					getListDVT();
					
					//
					getListInvoiceType = function() {
						overLoading("Loading...");
						var url = eim_url + "/bs/createExchange/load_type_invoice";
						$http.get(url).success(function(data) {
							if (data != undefined && data != null) {
								if (data.length != 0) {
									$scope.InvoiceTypeSource = data;
								}
							}
							closeOverLay();
						}).error(function(response) {
							closeOverLay();
						});
					}
					getListInvoiceType();

					//
					getListPayMethod = function() {
						overLoading("Loading...");
						var url = eim_url + "/bs/SourcePayMethod";
						$http.get(url).success(function(data) {
							if (data != undefined && data != null) {
								if (data.length != 0) {
									$scope.PayMethodSource = data;
									$scope.model.payMethod = data[0];
									getListExcRate();
								}
							}
							closeOverLay();
						}).error(function(response) {
							closeOverLay();
						});
					}
					getListPayMethod();

					//
					var mapPrice = {};
					$scope.loadlstPrice = function() {
						var goodData = {
							"name" : $localStorage.clientContext.shop.tariffId,
							"description" : StringUtilNVL($scope.model.good.goodsId),
						};

						createExchangeFac.loadPrice(goodData, function(result) {
							if (result != null && result.length > 0) {
								$scope.PriceSource = result;
								if (mapPrice[$scope.model.good.goodsId] == null || mapPrice[$scope.model.good.goodsId] == undefined) {
									mapPrice[$scope.model.good.goodsId] = $scope.PriceSource;
								}
							} else {
								$scope.PriceSource = [];
							}
						});

						$scope.model.soluong = '1';
						$scope.model.price = null
						$scope.model.promotion = null;
						$scope.model.chietkhau = '';
						$scope.disableSoLuong = false;
					}

					//
					$scope.loadVAT = function() {
						$scope.model.thueVAT = $scope.model.price.vat + "%";
						$scope.getAttachGoods();
					}

					//
					createExchangeFac.loadPromotion(function(result) {
						if (result != null && result.length > 0) {
							$scope.PromotionSource = [];
							var obj = {};
							obj.promProgramCode = '';
							obj.name = '';
							obj.promotionId = '';
							obj.promAmount = '';
							obj.promType = '';
							obj.display = '';
							$scope.PromotionSource.push(obj)
						    for (var i=0; i<result.length; i++) {
						    	$scope.PromotionSource.push(result[i]);
						    }
							
							createExchangeFac.loadGood(shopStaff, function(result) {
								if (result != null && result.length > 0) {
									$scope.GoodsSource = result;
									createExchangeFac.loadPriceTypeAndBundle(function(result) {
										if (result != null && result.length > 0) {
											$scope.mvtMapPriceTypeAndBundle = result;
										} else {
											$scope.mvtMapPriceTypeAndBundle = [];
										}
									});

								} else {
									$scope.GoodsSource = [];
								}
							});
						} else {
							$scope.PromotionSource = [];
						}
					});
					
					//
					
					//
					var shopStaff = {
						"name" : $localStorage.clientContext.shop.shopId,
						"description" : $localStorage.clientContext.shop.staffId,
					};

				

					// validate du lieu them vao danh sach
					var mstrGoodCode;
					var mstrQuantity;
					var mstrPrice;
					var mstrPriceID;
					var mstrProm;
					var mstrPromCode;
					var mstrPromID;
					var mstrGoodID;
					var mstrVAT;
					var mstrUnit;
					var mstrCheckSerial;
					var mstrMaxQuantity;
					var mstrGoodsGroupCode;
					var mstrPriceTypeID;
					var mstrResourceCode;
					var mstrGoodsType;
					var mstrDiscount = 0;
					var mstrDiscountID;
					
					var mstrMoneyNoTax = 0;
					var mstrMoneyTax = 0;
					var mstrMoneyTaxSum = 0;
					var mstrMoneyDiscount = 0;
					var mstrMoneyProm = 0;
					var mstrMoney = 0;
					var mstrMoneySum = 0;
					var mlngSUMMoneyNoTax = 0;
					var mlngSUMMoneyTax = 0;
					var mlngSUMMoneyTaxSum = 0;
					var mlngSUMMoneyDiscount = 0;
					var mlngSUMMoneyProm = 0;
					var mlngSUMMoney = 0;
					var mlngSUMMoneySum = 0;
					
					var strFLAG = '';
					
					$scope.insert = function() {
						if (!$scope.validateHTTT())
							return;
						if (!$scope.validInputAdd())
							return;
						$scope.getAttachGoods();
						$scope.calculate(null);
						
						$scope.listSerialAdd = [];
						$scope.tableParamsSerialAdd = new NgTableParams({}, {
							dataset : $scope.listSerialAdd
						});
						$scope.disableSoLuong = true;
						
						$scope.loadlstSerial();
						if ($scope.model.good.checkSerial == '1') {
							$scope.model.inputType = 'single';
							$scope.inputTypeChangeFn('single');
							$('#modalInputSerial').modal('show');
							strFLAG = 'ADD';
							
							$scope.listSerialInsert = [];
							$scope.tableParamsListSerial = new NgTableParams({}, {
								dataset : $scope.listSerialInsert
							});
						}
						mblnIsOpenContinue = true;
					}
					
					//
					$scope.getAttachGoods = function() {
						var attachGood = {
							"name" : $scope.model.good.goodsId,
							"description" : $scope.model.price.priceId,
						};
							
						createExchangeFac.loadAttachGoods(attachGood, function(result) {
							if (result != null && result.length > 0) {
								$scope.AttachGoodSource = result;
							} else {
								$scope.AttachGoodSource = [];
							}
							
							if (mapAttachGood[$scope.model.good.goodsId] == null || mapPrice[$scope.model.good.goodsId] == undefined) {
								mapAttachGood[$scope.model.good.goodsId] = $scope.AttachGoodSource;
							}
						});
					}
					
					$scope.loadAttachOfAttachGood = function(goodIdSearch, priceIdSearch) {
						var attachGood = {
							"name" : goodIdSearch,
							"description" : priceIdSearch,
						};
							
						createExchangeFac.loadAttachGoods(attachGood, function(result) {
							if (result != null && result.length > 0) {
								if (mapAttachGood[goodIdSearch] == null || mapPrice[goodIdSearch] == undefined) {
									mapAttachGood[goodIdSearch] = result;
								}
							}
						});
					}
					
					//
					$scope.vvctRow = [];
					$scope.addRowGood = function(goodsSale) {
						vvctRow = [];
						var obj = {};
						obj.mstrGoodCode = mstrGoodCode;
						obj.mstrQuantity = mstrQuantity; // 1
						obj.mstrPrice = mstrPrice; // 2
						obj.mstrDiscount = mstrDiscount; // 3
						obj.mstrProm = mstrProm; // 4
						obj.mstrUnit = mstrUnit; // 5
						if ($scope.DVTSource != null && $scope.DVTSource.length > 1) {
							for (var i=0; i<$scope.DVTSource.length; i++) {
								if ($scope.DVTSource[i].code == mstrUnit) {
									obj.mstrUnitName = $scope.DVTSource[i].name;
									break;
								}
							}
						} else {
							obj.mstrUnitName = '';
						}
						
						obj.mstrMoneySum = mstrMoneySum; // 6
						obj.mstrMoneyNoTax = mstrMoneyNoTax; // 7
						obj.mstrMoneyTax = mstrMoneyTax; // 8
						obj.mstrMoneyTaxSum = mstrMoneyTaxSum; // 9
						obj.mstrMoneyDiscount = mstrMoneyDiscount; // 10
						obj.mstrMoneyProm = mstrMoneyProm; // 11
						obj.mstrMoney = mstrMoney; // 12
						obj.mstrMoneySum = mstrMoneySum; // 13
						obj.mstrPromCode = mstrPromCode; // 14
						obj.mstrVAT = mstrVAT; // 15
						
						var vvctID = [];
						vvctID.mstrGoodID = mstrGoodID;
						vvctID.mstrPriceID = mstrPriceID;
						vvctID.mstrDiscountID = mstrDiscountID;
						vvctID.mstrPromID = mstrPromID;
						obj.vvctID = vvctID; // 16
						
						obj.IDmstrGoodID = mstrGoodID;
						obj.IDmstrPriceID = mstrPriceID;
						obj.IDmstrDiscountID = mstrDiscountID;
						obj.IDmstrPromID = mstrPromID;
						
						var vSerial = []
						obj.vSerial = vSerial; // 17: Vector Serial
						
						obj.mstrCheckSerial = mstrCheckSerial; // 18
						obj.attachGoodIndex = "0"; // 19
						obj.attachGoodCode = ""; // 20
						
						var vtAttachGoods = [];
						obj.vtAttachGoods = vtAttachGoods; // 21
						obj.mstrGoodsGroupCode = mstrGoodsGroupCode; // 22
						obj.mstrPriceTypeID = mstrPriceTypeID;  // 23
						obj.mstrResourceCode = mstrResourceCode  // 24
						
						obj.primaryGoodsCode = ""; // 25 HoaiPN:
													// PrimaryGoodsCode
						obj.primaryPriceID = ""; // 26 HoaiPN: PrimaryPriceID
						obj.transDetailId = ""; // 27 HoaiPN: Trans_Detail_ID
						obj.mstrGoodsType = mstrGoodsType;  // 28
						obj.primaryPromotionID = ""; // 29 HoaiPN:
														// PrimaryPromotionID

						if (goodsSale != null) {
							obj.vSerial = goodsSale.vectorSerial;
							obj.primaryGoodsCode = goodsSale.primaryGoodsCode;
							obj.primaryPriceID = goodsSale.primaryPriceID;
							obj.primaryPromotionID = goodsSale.promotionID;
						}
						
						obj.rowId = createTimeStamp();
						$scope.vvctRow.push(obj);
						$scope.tableParamsGood = new NgTableParams({}, {
							dataset : $scope.vvctRow
						});
						
						mintRowListGoodIndex = 0;
						$scope.itemGoodSelected = $scope.vvctRow[$scope.vvctRow.length-1];
						
						if (goodsSale != null) {
							if ($scope.listSerialAll != null && $scope.listSerialAll != undefined && $scope.listSerialAll.length > 0) {
								for (var i=0; i<$scope.listSerialAll.length; i++) {
									if ($scope.listSerialAll[i].rowId == $scope.itemGoodSelected.IDmstrGoodID) {
										$scope.listSerialAll[i].rowId = obj.rowId;
									}
								}
							}
						}
						
						$scope.getInfoGood($scope.itemGoodSelected);
						$scope.disablePayMethod = true;
						
						
					}
					
					//
					$scope.validInput = function() {
						if ($scope.model.inputType == 'single') {
							if ($scope.model.dFromSerial == null || $scope.model.dFromSerial == undefined) {
								bootbox
								.alert($translate
										.instant('vnm.create_exchange_for_cust.error.from.serial.not.null'));
								return false;
							}
							
							if (!$scope.checkExistSerial($scope.model.dFromSerial.serial)) return false;
							$scope.listSerialInsert.push($scope.model.dFromSerial);
							
				    	} else if ($scope.model.inputType == 'strip') {
				    		if ($scope.model.dFromSerial == null || $scope.model.dFromSerial == undefined) {
								bootbox
								.alert($translate
										.instant('vnm.create_exchange_for_cust.error.from.serial.not.null'));
								return false;
							}
				    		
				    		if ($scope.model.dToSerial == null || $scope.model.dToSerial == undefined) {
								bootbox
								.alert($translate
										.instant('vnm.create_exchange_for_cust.error.to.serial.not.null'));
								return false;
							}
				    		
							var mstrFromSerial = $scope.model.dFromSerial.serial;
							var mstrToSerial = $scope.model.dToSerial.serial;
							var length = 0;;
							for(var i = 0; i < mstrFromSerial.length; i++) {
								if(mstrFromSerial.charAt(i) != mstrToSerial.charAt(i)) {
									length = i;
									break;
								}
							}
							var subA = mstrFromSerial.substring(length,mstrFromSerial.length);
							var subB = mstrToSerial.substring(length,mstrToSerial.length);
							if(subA.localeCompare(subB) >0) {
								bootbox
								.alert($translate
										.instant('vnm.create_exchange_for_cust.error.to.serial.must.larger.than.from.serial'));
								return false;
							}
							
							if (!$scope.checkSerialTrip(mstrFromSerial,mstrToSerial)) return false;
				    	} else if ($scope.model.inputType == 'list') {
				    		
				    	}
						return true;
					}
					
					$scope.checkSerialTrip = function(pstrFromSerial, pstrToSerial) {
						var vvctRow;
						var vlngFromSerial = pstrFromSerial;
						var vlngToSerial = pstrToSerial;
						var vstrSerial = "";
						var vlngSerial = "";
						for(var i = 0;i < $scope.SerialSource.length;i++) {
							vvctRow = $scope.SerialSource[i];
							vstrSerial = StringUtilNVL(vvctRow.serial,"");
							if (!$scope.checkExistSerial(vstrSerial)) continue;
							
							vlngSerial = vstrSerial;
							if((vlngSerial.localeCompare(vlngFromSerial)) >= 0 && (vlngSerial.localeCompare(vlngToSerial)) <= 0) {
								$scope.listSerialInsert.push(vvctRow);
							}
						}
						return true;
					}
					
					$scope.checkExistSerial = function(serial) {
						if ($scope.listSerialInsert != null && $scope.listSerialInsert.length > 0) {
							for (var i=0; i<$scope.listSerialInsert.length; i++) {
								if ($scope.listSerialInsert[i].serial == serial) {
									if ($scope.model.inputType == 'single') {
										bootbox
										.alert($translate
												.instant('vnm.create_exchange_for_cust.error.from.serial.exist'));
									}
									return false;
								}
							}
						}
						return true;
					}
					
					//
					$scope.itemGoodSelected;
					$scope.lstSerialOfGood = [];
					$scope.getInfoGood = function(item) {
						if (item != null && item != undefined) {
							$scope.itemGoodSelected = item;
							
							$scope.lstSerialOfGood = [];
							if ($scope.listSerialAll != null && $scope.listSerialAll.length > 0) {
								for (var i=0; i<$scope.listSerialAll.length; i++) {
									if ($scope.listSerialAll[i].rowId == item.rowId) {
										$scope.lstSerialOfGood.push($scope.listSerialAll[i]);
									}
								}
								
								$scope.tableParamsSerialAdd = new NgTableParams({}, {
									dataset : $scope.lstSerialOfGood
								});
							}
							
							$scope.getGoodSelect(item.vvctID.mstrGoodID);
							$scope.getPriceSelect(item.vvctID.mstrGoodID, item.vvctID.mstrPriceID);
							$scope.getPromoSelect(item.vvctID.mstrPromID);
							$scope.model.soluong = item.mstrQuantity;
							$scope.model.chietkhau = item.mstrDiscount;
							$scope.model.thueVAT = item.mstrVAT + '%';
							$scope.disableSoLuong = true;
							
							$scope.getAttachGoods();
							
							if ($scope.vvctRow != null && $scope.vvctRow != undefined && $scope.vvctRow.length > 0) {
								for (var i=0; i<$scope.vvctRow.length; i++) {
									if ($scope.vvctRow[i].rowId == $scope.itemGoodSelected.rowId) {
										mintRowListGoodIndex = i;
										break;
									}
								}
							}
						}
					}
					
					$scope.getGoodSelect = function(goodId) {
						if ($scope.GoodsSource != null && $scope.GoodsSource.length>0) {
							for (var i=0; i<$scope.GoodsSource.length; i++) {
								if ($scope.GoodsSource[i].goodsId == goodId) {
									$scope.model.good = $scope.GoodsSource[i];
								}
							}
						}
					}
					
					$scope.getPriceSelect = function(goodId, priceId) {
						$scope.PriceByGood = mapPrice[goodId];
						if ($scope.PriceByGood != null && $scope.PriceByGood.length>0) {
							for (var i=0; i<$scope.PriceByGood.length; i++) {
								if ($scope.PriceByGood[i].priceId == priceId) {
									$scope.model.price = $scope.PriceByGood[i];
								}
							}
						}
					}

					$scope.getPromoSelect = function(promotionId) {
						if ($scope.PromotionSource != null && $scope.PromotionSource.length>0) {
							for (var i=0; i<$scope.PromotionSource.length; i++) {
								if ($scope.PromotionSource[i].promotionId == promotionId) {
									$scope.model.promotion = $scope.PromotionSource[i];
								}
							}
						}
					}
					
					//
					$scope.listSerialInsert = [];
					$scope.itemSerial;
					
					$scope.getItem = function(item) {
						$scope.itemSerial = item;
					}
					
					$scope.insertSerial = function() {
						if (!$scope.validInput()) return;
						$scope.tableParamsListSerial = new NgTableParams({}, {
							dataset : $scope.listSerialInsert
						});
					}
					
					$scope.deleteSerial = function() {
				    	angular.forEach( $scope.listSerialInsert, function(objectSerial, index){
				    	   if(objectSerial.serial == $scope.itemSerial.serial){
				    		   $scope.listSerialInsert.splice(index,1);   
				    	   }
				    	});
				    	
						$scope.tableParamsListSerial = new NgTableParams({}, {
							dataset : $scope.listSerialInsert
						});
					}
					
					$scope.loadlstSerial = function() {
						var stockGood = {
							"shopId" : $localStorage.clientContext.shop.shopId,
							"staffId" : $localStorage.clientContext.shop.staffId,
							"goodsId" : $scope.model.good.goodsId,
						};
						
						createExchangeFac.loadSerial(stockGood, function(result) {
							if (result != null && result.length > 0) {
								if ($scope.listSerialAll != null && $scope.listSerialAll != undefined && $scope.listSerialAll.length > 0) {
									$scope.SerialSource = [];
									for (var i=0; i<result.length; i++) {
										var has = false;
										var serialAdd = result[i].serial;
										for (var j=0; j<$scope.listSerialAll.length; j++) {
											if (serialAdd == $scope.listSerialAll[j].serial) {
												has = true;
												break;
											}
										}
										if (!has) $scope.SerialSource.push(result[i]);
									}
								} else {
									$scope.SerialSource = result;
								}
							} else {
								$scope.SerialSource = [];
							}
						});
					}
					
					//
					$scope.inputTypeChangeFn = function(val) {
				    	if(val == 'single') {
				    		$scope.model.dGood = $scope.model.good.name;
				    		$scope.model.dQuantity = '1';
				    		$scope.dToSerial = true;
				    	} else if(val == 'strip') {
				    		$scope.model.dGood = $scope.model.good.name;
				    		$scope.model.dQuantity = '1';
				    		$scope.dToSerial = false;
				    	} else if(val == 'list') {
				    		$('#modalInputSerial').modal('hide');
				    		$('#modalInputListSerial').modal('show');
				    		
				    		$scope.model.dlGood = $scope.model.good.name;
				    		$scope.model.dlQuantity = $scope.model.soluong;
				    		$scope.model.dlStock = $scope.model.userId + ' - ' + $scope.model.userName;

				    		$scope.dataTableParamsSerialItemForAssignmentToAdd = [];
				    		$scope.dataTableSerialItem = [];
				    		Array.prototype.push.apply($scope.dataTableSerialItem, $scope.SerialSource);

			    			$scope.tableParamsListSerialGoods = new NgTableParams({count: 10}, {
			    				dataset : $scope.dataTableSerialItem
							});
				    	}
				    	$scope.model.dFromSerial = null;
				    	$scope.model.dToSerial = null;
				    }

					//
					$scope.validateHTTT = function() {
						if ($scope.model.payMethod.code == '2'
								|| $scope.model.payMethod.code == '3'
								|| $scope.model.payMethod.code == '4'
								|| $scope.model.payMethod.code == '5') {
							bootbox
									.alert($translate
											.instant('vnm.create_exchange_for_cust.error.paymethod.not.support'));
							return false;
						}
						return true;
					}

					$scope.validInputAdd = function() {
						if (!$scope.requireGood())
							return false;
						mstrGoodCode = $scope.model.good.goodsCode;
						mstrQuantity = $scope.model.soluong;
						mstrPrice = $scope.model.price.price;
						mstrPriceID = $scope.model.price.priceId;

						mstrProm = 0;
						mstrPromCode = "";
						mstrPromID = "";

						if ($scope.PromotionSource != null
								&& $scope.PromotionSource.length > 0 && $scope.model.promotion != null && $scope.model.promotion != undefined) {
							mstrPromID = $scope.model.promotion.promotionId;
							mstrProm = $scope.model.promotion.promAmount;
							var mstrPromotionType = $scope.model.promotion.promType;

							if (mstrProm == '') {
								mstrProm = 0;
							}
							mstrProm = $scope.calculatePromotion(mstrQuantity,
									mstrPrice, mstrProm, mstrPromotionType);
							mstrPromCode = $scope.model.promotion.promProgramCode;
						}

						mstrGoodID = $scope.model.good.goodsId;
						mstrVAT = $scope.model.thueVAT.substring(0,
								$scope.model.thueVAT.length - 1);
						mstrUnit = $scope.model.good.unit;
						mstrCheckSerial = $scope.model.good.checkSerial;
						mstrMaxQuantity = $scope.model.good.quantityEffect;
						mstrGoodsGroupCode = '';
						mstrPriceTypeID = $scope.model.price.type;
						mstrResourceCode = $scope.model.good.resourceCode;
						mstrGoodsType = $scope.model.good.type;

						if (!$scope.checkQuantity())
							return false;
						if (mstrVAT == '') {
							mstrVAT = "0";
						}
						return true;
					}

					$scope.requireGood = function() {
						if ($scope.model.good == null
								|| $scope.model.good == '') {
							bootbox
									.alert($translate
											.instant('vnm.create_exchange_for_cust.error.good.empty'));
							return false;
						}
						if ($scope.model.soluong == null
								|| $scope.model.soluong == '') {
							bootbox
									.alert($translate
											.instant('vnm.create_exchange_for_cust.error.quantity.empty'));
							return false;
						}
						if ($scope.model.price == null
								|| $scope.model.price == '') {
							bootbox
									.alert($translate
											.instant('vnm.create_exchange_for_cust.error.price.empty'));
							return false;
						}
						if ($scope.model.thueVAT == null
								|| $scope.model.thueVAT == '') {
							bootbox
									.alert($translate
											.instant('vnm.create_exchange_for_cust.error.vat.empty'));
							return false;
						}
						return true;
					}

					$scope.calculatePromotion = function(strQuantity, strPrice,
							strValue, strType) {
						var lngReturn = 0;
						if (strType == '1') {
							lngReturn = Math.floor(strQuantity * strPrice * strValue / 100);
						} else if (strType = '2') {
							lngReturn = strQuantity * strValue;
						}
						return lngReturn;
					}

					$scope.checkQuantity = function() {
						if (mstrQuantity <= 0) {
							bootbox
									.alert($translate
											.instant('vnm.create_exchange_for_cust.error.quantity.must.larger.than.0'));
							return false;
						} else if ($scope.model.good.checkQuantity == '1') {
							if (mstrQuantity > mstrMaxQuantity
									- $scope.getUsageQuantity(mstrGoodCode)) {
								bootbox
										.alert($translate
												.instant('vnm.create_exchange_for_cust.error.not.enough.quantity'));
								return false;
							}
						}
						return true;
					}

					$scope.getUsageQuantity = function(pstrGoodsCode) {
						var intUsageQuantity = 0;
						
						for (var i = 0; i < $scope.vvctRow.length; i++) {
							var vtRow = $scope.vvctRow[i];

							var strGoodsCode = vtRow.mstrGoodCode;
							var strQuantity = vtRow.mstrQuantity;

							if (strGoodsCode == pstrGoodsCode) {
								intUsageQuantity += strQuantity;
							}
						}
						
						return intUsageQuantity;
					}
					
					//
					$scope.calculate = function(goodsSale) {
						var params = {
							"goodId" : $scope.model.good.goodsId,
							"quantity" : $scope.model.soluong,
							"price" : $scope.model.price.price,
							"priceTypeId" : $scope.model.price.type,
						};
	
						createExchangeFac.calculateF(params, function(result) {
							if (result != null && result.length > 0) {
								$scope.model.chietkhau = result[0].description;
								mstrDiscount = result[0].description;
								mstrDiscountID = result[0].name;
							}
							$scope.calculateAdd();
							$scope.setMoney();
							$scope.addRowGood(goodsSale);
						});
					}
					
					$scope.calculateAdd = function() {
						var intmstrMoneyTax = mstrPrice *mstrQuantity;
						var intmstrMoneyTaxSum = Math.round((intmstrMoneyTax * mstrVAT / 100) / (mstrVAT / 100 + 1));
						var intmstrMoneyNoTax = intmstrMoneyTax - intmstrMoneyTaxSum;
						var intmstrMoneyDiscount = Math.round(mstrDiscount);
						var intmstrMoneyProm = mstrProm;
						var intmstrMoneySum = intmstrMoneyTax - intmstrMoneyDiscount;
						var intmstrMoney = 0;
						
						var rate = $scope.model.rate;
						if(intmstrMoneySum % rate == 0)
						{
							intmstrMoney = Math.round(intmstrMoneySum / rate);
						}
						else
						{
							intmstrMoney = Math.round(intmstrMoneySum / rate + 1);
						}

						mstrMoneyNoTax = intmstrMoneyNoTax;
						mstrMoneyTax = intmstrMoneyTax;
						mstrMoneyTaxSum = intmstrMoneyTaxSum;
						mstrMoneyDiscount = intmstrMoneyDiscount;
						mstrMoneyProm = intmstrMoneyProm;
						mstrMoney = intmstrMoney;
						mstrMoneySum = intmstrMoneySum;

						mlngSUMMoneyNoTax += intmstrMoneyNoTax;
						mlngSUMMoneyTax += intmstrMoneyTax;
						mlngSUMMoneyTaxSum += intmstrMoneyTaxSum;
						mlngSUMMoneyDiscount += intmstrMoneyDiscount;
						mlngSUMMoneyProm += intmstrMoneyProm;
						mlngSUMMoney += intmstrMoney;
						mlngSUMMoneySum += intmstrMoneySum;
					}
					
					$scope.setMoney = function() {
						$scope.model.taxAmount = formatNumber(mlngSUMMoneyTaxSum);
						$scope.model.amount = formatNumber(mlngSUMMoneyTax);
						$scope.model.discount = formatNumber(mlngSUMMoneyDiscount);
						$scope.model.promo = formatNumber(mlngSUMMoneyProm);
						$scope.model.total = formatNumber(mlngSUMMoneySum - mlngSUMMoneyProm);
						$scope.model.moneyNotax = formatNumber(mlngSUMMoneyNoTax);
						
						if ($scope.model.deposit != null && $scope.model.deposit != undefined
								&& $scope.model.total != null && $scope.model.total != undefined) {
							$scope.model.residual = formatNumber($scope.model.deposit - $scope.model.total);
							$scope.model.deposit = formatNumber($scope.model.deposit);
						}
					}
					
					//
					$scope.listSerialAdd = [];
					$scope.listSerialAll = [];
					mapAttachGood = {};
					$scope.acceptSerial = function() {
						if($scope.listSerialInsert.length != $scope.model.soluong) {
							var message = $translate.instant('vnm.create_exchange_for_cust.error.wrong.quantity'),        		
			        		messageDisplay = message.replace(/###/, setStrongLabel($scope.model.soluong));
			        		bootbox.alert(messageDisplay);
			        		return false;
						}
						
						if (strFLAG == 'MODIFY') {
							$scope.itemGoodSelected.mstrQuantity = $scope.model.soluong;
						} else {
							$scope.lstSerialOfGood = [];
						}
						
						if ($scope.listSerialInsert != null && $scope.listSerialInsert.length > 0) {
							$scope.listSerialAdd = [];
							for (var i=0; i<$scope.listSerialInsert.length; i++) {
								var checkSerialAdd = $scope.listSerialInsert[i].serial;
								if ($scope.listSerialAdd != null && $scope.listSerialAdd.length > 0) {
									var bl = true;
									for (var j=0; j<$scope.listSerialAdd.length; j++) {
										if ($scope.listSerialAdd[j].serial == checkSerialAdd) {
											bl = false;
											break;
										}
									}
									if (bl && !$scope.listSerialAll.includes($scope.listSerialInsert[i])) {
										$scope.listSerialInsert[i].rowId = $scope.itemGoodSelected.rowId;
										$scope.listSerialAdd.push($scope.listSerialInsert[i]);
										$scope.listSerialAll.push($scope.listSerialInsert[i]);
										$scope.lstSerialOfGood.push($scope.listSerialInsert[i]);
									}
								} else {
									if (!$scope.listSerialAll.includes($scope.listSerialInsert[i])) {
										$scope.listSerialInsert[i].rowId = $scope.itemGoodSelected.rowId;
										$scope.listSerialAdd.push($scope.listSerialInsert[i]);
										$scope.listSerialAll.push($scope.listSerialInsert[i]);
										$scope.lstSerialOfGood.push($scope.listSerialInsert[i]);
									}
								}
							}
							
							$scope.tableParamsSerialAdd = new NgTableParams({}, {
								dataset : $scope.lstSerialOfGood
							});
							
							$scope.itemGoodSelected.vSerial  = $scope.lstSerialOfGood;
							$('#modalInputSerial').modal('hide');
							
							if ($scope.model.good.type != '7') {
								var obj = $scope.itemGoodSelected;
								
								obj.vtAttachGoods = $scope.AttachGoodSource; // 21
								obj.attachGoodIndex = "1"; // 19
								obj.attachGoodCode = mstrGoodCode; // 20
								
								 if ($scope.AttachGoodSource != null && $scope.AttachGoodSource != undefined && $scope.AttachGoodSource.length > 0) {
									 mintGoodsListRowBak = mintRowListGoodIndex;
									 $scope.inputAttachGoods($scope.AttachGoodSource, mstrGoodCode, mstrPriceTypeID);
									 mblnIsOpenContinue = true;
								 }
							}
						}
						
						return true;
					}
					
					$scope.modifySerial = function() {
						$scope.model.inputType = 'single';
						$scope.inputTypeChangeFn('single');
						strFLAG = 'MODIFY';
						$scope.loadlstSerial();
						
						$scope.lstSerialOfGood = [];
						$scope.listSerialInsert = [];
						if ($scope.listSerialAll != null && $scope.listSerialAll.length > 0) {
							for (var i=0; i<$scope.listSerialAll.length; i++) {
								if ($scope.listSerialAll[i].rowId == $scope.itemGoodSelected.rowId) {
									$scope.lstSerialOfGood.push($scope.listSerialAll[i]);
									$scope.listSerialInsert.push($scope.listSerialAll[i]);
								}
							}
						}
						
						if ($scope.lstSerialOfGood != null && $scope.lstSerialOfGood.length > 0) {
							$scope.itemSerial = $scope.lstSerialOfGood[0];
							$scope.model.dFromSerial = $scope.itemSerial;
						}
						
						$scope.tableParamsListSerial = new NgTableParams({}, {
							dataset : $scope.lstSerialOfGood
						});
						
						$('#modalInputSerial').modal('show');
					}
					
					$scope.confirmDeleteAttachGoodsOK = function() {
						$scope.deleteGoods($scope.itemGoodSelected);
						if ($scope.vvctRow == null || $scope.vvctRow == undefined || $scope.vvctRow.length <= 0) {
							$scope.disablePayMethod = false;
						} else {
							$scope.itemGoodSelected = $scope.vvctRow[$scope.vvctRow.length-1];
							$scope.getInfoGood($scope.itemGoodSelected);
						}
					}
					
					$scope.confirmDeleteAttachGoodsNOK = function() {
						
					}
					
					$scope.deleteGood = function() {
						if ($scope.itemGoodSelected == null || $scope.itemGoodSelected == undefined) {
							return;
						}

						var vstrPrimaryGoodsCode = $scope.itemGoodSelected.primaryGoodsCode;
						var vtAttachGoods = $scope.itemGoodSelected.vtAttachGoods;
						
						if (vstrPrimaryGoodsCode != '' || (vtAttachGoods != null && vtAttachGoods != undefined && vtAttachGoods[0] != undefined)) {
							bootboxConfirm('Xóa hàng hóa liên quan', 'Xóa hàng này sẽ xóa hàng hóa liên quan\nBạn có muốn thực hiện xóa?', 
									$scope.confirmDeleteAttachGoodsOK, $scope.confirmDeleteAttachGoodsNOK);
						} else {
							$scope.deleteGoods($scope.itemGoodSelected);
							if ($scope.vvctRow == null || $scope.vvctRow.length <= 0) {
								$scope.disablePayMethod = false;
							}
							$scope.itemGoodSelected = $scope.vvctRow[$scope.vvctRow.length-1];
							$scope.getInfoGood($scope.itemGoodSelected);
						}
					}
					
					$scope.deleteGoods = function(goods) {
						var vstrPrimaryGoodsCode = goods.primaryGoodsCode;
						var vstrPrimaryPriceID = goods.primaryPriceID;
						var vstrPrimaryPromotionID = goods.primaryPromotionID;
						var vvctAttachGood = goods.vtAttachGoods;

						$scope.calculateSub(goods);
						$scope.setMoney();
						
						if ($scope.vvctRow == null || $scope.vvctRow.length > 0) {
							angular.forEach($scope.vvctRow, function(objectGood, index){
					    	   if(objectGood.rowId == goods.rowId){
					    		   $scope.vvctRow.splice(index,1);
					    		   
					    		   if ($scope.listSerialAll != null && $scope.listSerialAll.length > 0) {
					    			   angular.forEach($scope.listSerialAll, function(objectSerial, indexS) {
								    	   if (objectSerial.rowId == goods.rowId) {
								    		   $scope.listSerialAll.splice(indexS, 1);
								    	   }
					    			   });
					    			   
					    			   $scope.lstSerialAfterDelete = [];
					    			   $scope.tableParamsSerialAdd = new NgTableParams({}, {
					    				   dataset : $scope.lstSerialAfterDelete
									   });
								   }
					    	   }
					    	});
							$scope.tableParamsGood = new NgTableParams({}, {
								dataset : $scope.vvctRow
							});
						}
						
						$scope.deleteAttachGood(vvctAttachGood);
						$scope.deletePrimaryGood(vstrPrimaryGoodsCode,vstrPrimaryPriceID,vstrPrimaryPromotionID);
						if ($scope.vvctRow == null || $scope.vvctRow.length <= 0) {
							$scope.disablePayMethod = false;
						}
					}
					
					$scope.deletePrimaryGood = function(vstrPrimaryGoodsCode,vstrPrimaryPriceID,vstrPrimaryPromotionID) {
						
					}
					
					$scope.calculateSub = function(goods) {
						var vstrPrice = goods.mstrPrice;
						var vstrQuantity = goods.mstrQuantity;
						var vstrVAT = goods.mstrVAT;
						var vstrDiscount = goods.mstrDiscount;
						var vstrProm = goods.mstrProm;

						var intmstrMoneyTax = vstrPrice * vstrQuantity;
						var intmstrMoneyTaxSum = Math.round(intmstrMoneyTax * (vstrVAT / 100) / (vstrVAT / 100 + 1));
						var intmstrMoneyNoTax = intmstrMoneyTax - intmstrMoneyTaxSum;
						var intmstrMoneyDiscount = vstrDiscount;
						var intmstrMoneyProm = vstrProm;
						var intmstrMoneySum = intmstrMoneyTax - intmstrMoneyDiscount;
						var intmstrMoney = 0;
						
						var rate = $scope.model.rate;
						if(intmstrMoneySum % rate == 0) {
							intmstrMoney = Math.round(intmstrMoneySum / rate);
						} else {
							intmstrMoney = Math.round(intmstrMoneySum / rate + 1);
						}

						mlngSUMMoneyNoTax -= intmstrMoneyNoTax;
						mlngSUMMoneyTax -= intmstrMoneyTax;
						mlngSUMMoneyTaxSum -= intmstrMoneyTaxSum;
						mlngSUMMoneyDiscount -= intmstrMoneyDiscount;
						mlngSUMMoneyProm -= intmstrMoneyProm;
						mlngSUMMoney -= intmstrMoney;
						mlngSUMMoneySum -= intmstrMoneySum;
					}
					
					$scope.deleteAttachGood = function(pvtAttachGoods) {
						if (pvtAttachGoods != null && pvtAttachGoods.length > 0) {
							for(var j = 0; j<pvtAttachGoods.length; j++) {
								var vvctAttachRow = pvtAttachGoods[j];
								if (vvctAttachRow.goodsId == null || vvctAttachRow.goodsId == '') {
									continue;
								}
	
								var vstrGoodsCodeJ = vvctAttachRow.goodsCode;
								var vstrGoodsPrice = vvctAttachRow.price;
	
								for(var i=0; i<$scope.vvctRow.length; i++) {
									var vvctRowx = $scope.vvctRow[i];
									var strGoodsCode = vvctRowx.mstrGoodCode;
									var strGoodsPrice = vvctRowx.mstrPrice;
	
									if (strGoodsCode == vstrGoodsCodeJ && strGoodsPrice == vstrGoodsPrice) {
										$scope.deleteGoods(vvctRowx);
									}
								}
							}
						}
					}
					
					//
					$scope.selectOrRemoveSerialItem = function(item) {
						var isHeaderGoodItem = $scope.isAllRowChecked($scope.dataTableSerialItem);
						if (isHeaderGoodItem) {
							$scope.model.checkboxListSerialItem = true;
						} else {
							$scope.model.checkboxListSerialItem = false;
						}
						
						if (item.typeCheckBox == true) {
							item.rowId = $scope.itemGoodSelected.rowId;
							$scope.dataTableParamsSerialItemForAssignmentToAdd.push(item);
						} else {
							removeListSerialItemByItem($scope.dataTableParamsSerialItemForAssignmentToAdd, item);
						}
					}
					
					$scope.checkAllSerials = function(){
						$scope.dataTableParamsSerialItemForAssignmentToAdd = [];
						angular.forEach($scope.dataTableSerialItem, function(item) {
							item.typeCheckBox = $scope.model.checkboxListSerialItem;
							if ($scope.model.checkboxListSerialItem) {
								item.rowId = $scope.itemGoodSelected.rowId;
								$scope.dataTableParamsSerialItemForAssignmentToAdd.push(item);
							}
						})
					}
					
					function removeListSerialItemByItem(listSerialItem, item) {
						var index = checkItemExistInListSerialItem(listSerialItem, item);
						if(index!= -1){
							listSerialItem.splice(index, 1 );
						}
						return listSerialItem;
					}
					
					function checkItemExistInListSerialItem(listSerialItem, item){
						var index = -1;		
						for( var i = 0; i < listSerialItem.length; i++ ) {
							if( listSerialItem[i].serial == item.serial ) {
								index = i;
								break;
							}
						}
						return index;
					}
					
					$scope.isAllRowChecked = function(listDataTable){
						var resultCheck = false;
						
						if(listDataTable.length == 0){
							return false;
						}
						var countRowCheck = 0;
						for(var i =0; i<listDataTable.length; i++){
							if(listDataTable[i].typeCheckBox == true){
								countRowCheck++;
							}
						}
						
						if(countRowCheck == listDataTable.length){
							resultCheck = true;
						}
						return resultCheck;
					}
					
					//
					$scope.acceptListSerial = function() {
						if ($scope.dataTableParamsSerialItemForAssignmentToAdd == null || 
								$scope.dataTableParamsSerialItemForAssignmentToAdd.length != $scope.model.soluong) {
							var message = $translate.instant('vnm.create_exchange_for_cust.error.wrong.quantity'),        		
			        		messageDisplay = message.replace(/###/, setStrongLabel($scope.model.soluong));
			        		bootbox.alert(messageDisplay);
							return;
						}
						
						$scope.listSerialAdd = [];
						Array.prototype.push.apply($scope.listSerialAdd, $scope.dataTableParamsSerialItemForAssignmentToAdd);
						Array.prototype.push.apply($scope.listSerialAll, $scope.dataTableParamsSerialItemForAssignmentToAdd);
						
						$scope.tableParamsSerialAdd = new NgTableParams({}, {
							dataset : $scope.listSerialAdd
						});
						$('#modalInputListSerial').modal('hide');
						
						if ($scope.model.good.type != '7') {
							var obj = $scope.itemGoodSelected;
							
							obj.vtAttachGoods = $scope.AttachGoodSource; // 21
							obj.attachGoodIndex = "1"; // 19
							obj.attachGoodCode = mstrGoodCode; // 20
							
							 if ($scope.AttachGoodSource != null && $scope.AttachGoodSource != undefined && $scope.AttachGoodSource.length > 0) {
								 mintGoodsListRowBak = mintRowListGoodIndex;
								 $scope.inputAttachGoods($scope.AttachGoodSource, mstrGoodCode, mstrPriceTypeID);
								 mblnIsOpenContinue = true;
							 }
						}
					}
					
					$scope.blurSerial = function() {
						$('#modalInputSerial').modal('hide');
						if ($scope.model.good.type != '7') {
							var obj = $scope.itemGoodSelected;
							
							obj.vtAttachGoods = $scope.AttachGoodSource; // 21
							obj.attachGoodIndex = "1"; // 19
							obj.attachGoodCode = mstrGoodCode; // 20
							
							 if ($scope.AttachGoodSource != null && $scope.AttachGoodSource != undefined && $scope.AttachGoodSource.length > 0) {
								 mintGoodsListRowBak = mintRowListGoodIndex;
								 $scope.inputAttachGoods($scope.AttachGoodSource, mstrGoodCode, mstrPriceTypeID);
								 mblnIsOpenContinue = true;
							 }
						}
					}
					
					//
					$scope.commit = function() {
						if ($scope.checkPayment()) {
							$scope.writeInfo();
						}
					}
					
					var mlngTotalPaid = '';
					$scope.checkPayment = function() {
						if ($scope.model.deposit != '') {
							mlngTotalPaid = $scope.model.deposit;
							if (mlngSUMMoneySum - mlngSUMMoneyProm > mlngTotalPaid) {
								bootbox
								.alert($translate
										.instant('vnm.create_exchange_for_cust.error.owe.money'));
								$scope.model.deposit  = '';
								$scope.model.residual = '';
								return false;
							} else {
								$scope.model.residual = mlngTotalPaid - (mlngSUMMoneySum - mlngSUMMoneyProm);
								return true;
							}
						} else {
							return true;
						}
					}
					
					var mvtHandsetICCIDList = [];
					$scope.lstMoreInfo = [];
					$scope.itemMoreInfo;
					$scope.writeInfo = function() {
						mvtHandsetICCIDList = [];

						if (!$scope.validInputWriteInfo()) return;
						
						if ($scope.checkPromotionMGM()) {
							// SMClient.setInvoiceType("MGMPromotion");
							var vctMGMGoodsSerial = $scope.getMGMGoodsSerial();
							mvtPromotionSerial = vctMGMGoodsSerial;
							Array.prototype.push.apply($scope.lstMoreInfoX, mvtPromotionSerial);
							
							$scope.disableMoreInfo = true;
							$scope.isShowBtnEnter = true;
							$scope.isShowBtnCancel = false;
							
							if (vctMGMGoodsSerial != null && vctMGMGoodsSerial != undefined && vctMGMGoodsSerial.length > 0) {
								$scope.lstMoreInfo = [];
								for (var i=0; i<vctMGMGoodsSerial.length; i++) {
									$scope.lstMoreInfo.push(vctMGMGoodsSerial[i])
								}
								
								$scope.itemMoreInfo = vctMGMGoodsSerial[0];
								$scope.itemMoreInfoBK = vctMGMGoodsSerial[0];
								$scope.tableMoreInfos = new NgTableParams({}, {
									dataset : $scope.lstMoreInfo
								});
							}
							$('#modalMoreInfo').modal('show');
						}

						for (var i = 0;i < $scope.mvtMapPriceTypeAndBundle.length; i++) {
							var vtRow = $scope.mvtMapPriceTypeAndBundle[i];
							if (!$scope.checkPromotionBundle(vtRow.name,vtRow.description)) {
								return;
							} else {
								$scope.addToHansetICCIDList(vtRow.name);
							}
						}
						
					}
					
					//
					$scope.itemMoreInfoBK;
					$scope.getMoreInfo = function(item) {
						$scope.itemMoreInfo = item;
						$scope.itemMoreInfoBK = Object.assign({}, $scope.itemMoreInfo);
						
						$scope.model.mStaffId = $scope.itemMoreInfo.maNV;
						$scope.model.mStaffName = $scope.itemMoreInfo.tenNV;
						$scope.model.mStaffIdNo = $scope.itemMoreInfo.cmtNV;
						$scope.model.mStaffAddress = $scope.itemMoreInfo.diaChiNV;
						$scope.model.mStaffCompany = $scope.itemMoreInfo.congTyNV;
						$scope.model.mCusId = $scope.itemMoreInfo.maKH;
						$scope.model.mCusName = $scope.itemMoreInfo.tenKH;
						$scope.model.mCusNumber = $scope.itemMoreInfo.soThueBao;
						$scope.model.mCusCos = $scope.itemMoreInfo.goiCuoc;
						$scope.model.mCusIdNo = $scope.itemMoreInfo.cmtKH;
						$scope.model.mCusAddress = $scope.itemMoreInfo.diaChiKH;
					}
					
					//
					$scope.isShowBtnCancel = false;
					$scope.isShowBtnEnter = true;
					$scope.enterMoreInfo = function() {
						if ($scope.lstMoreInfoX != null && $scope.lstMoreInfoX != undefined && $scope.lstMoreInfoX.length > 0) {
							$scope.disableMoreInfo = false;
							$scope.isShowBtnCancel = true;
							$scope.isShowBtnEnter = false;
						}
					}
					
					$scope.lstMoreInfoX = [];
					$scope.chapNhan = function() {
						if ($scope.model.mStaffId == undefined || $scope.model.mStaffId == '') {
							bootbox
							.alert($translate
									.instant('vnm.create_exchange_for_cust.error.miss.staff.id'));
							return;
						}
						
						if ($scope.model.mStaffName == undefined || $scope.model.mStaffName == '') {
							bootbox
							.alert($translate
									.instant('vnm.create_exchange_for_cust.error.miss.staff.name'));
							return;
						}
						
						if ($scope.model.mStaffIdNo == undefined || $scope.model.mStaffIdNo == '') {
							bootbox
							.alert($translate
									.instant('vnm.create_exchange_for_cust.error.miss.staff.id.no'));
							return;
						}
						
						if ($scope.model.mCusName == undefined || $scope.model.mCusName == '') {
							bootbox
							.alert($translate
									.instant('vnm.create_exchange_for_cust.error.miss.cus.name'));
							return;
						}
						
						if ($scope.model.mCusNumber == undefined || $scope.model.mCusNumber == '') {
							bootbox
							.alert($translate
									.instant('vnm.create_exchange_for_cust.error.miss.cus.number'));
							return;
						}
						
						if ($scope.model.mCusCos == undefined || $scope.model.mCusCos == '') {
							bootbox
							.alert($translate
									.instant('vnm.create_exchange_for_cust.error.miss.cus.cos'));
							return;
						}
						
						$scope.disableMoreInfo = true;
						$scope.isShowBtnCancel = false;
						$scope.isShowBtnEnter = true;
						
						$scope.itemMoreInfo.maNV = $scope.model.mStaffId;
						$scope.itemMoreInfo.tenNV = $scope.model.mStaffName;
						$scope.itemMoreInfo.cmtNV = $scope.model.mStaffIdNo;
						$scope.itemMoreInfo.diaChiNV = $scope.model.mStaffAddress;
						$scope.itemMoreInfo.congTyNV = $scope.model.mStaffCompany;
						$scope.itemMoreInfo.maKH = $scope.model.mCusId;
						$scope.itemMoreInfo.tenKH = $scope.model.mCusName;
						$scope.itemMoreInfo.soThueBao = $scope.model.mCusNumber;
						$scope.itemMoreInfo.goiCuoc = $scope.model.mCusCos;
						$scope.itemMoreInfo.cmtKH = $scope.model.mCusIdNo;
						$scope.itemMoreInfo.diaChiKH = $scope.model.mCusAddress;
						
						$scope.lstMoreInfoX = [];
						for (var i=0; i<mvtPromotionSerial.length; i++) {
							if (mvtPromotionSerial[i].mstrSerial == $scope.itemMoreInfo.mstrSerial) {
								$scope.lstMoreInfoX.push($scope.itemMoreInfo)
							} else {
								$scope.lstMoreInfoX.push(mvtPromotionSerial[i])
							}
						}
						$scope.tableMoreInfos = new NgTableParams({}, {
							dataset : $scope.lstMoreInfoX
						});
					}
					
					$scope.boQua = function() {
						bootboxConfirm('Thông tin bổ sung', 'Dữ liệu chưa được ghi vào Database. Bạn có muốn lưu trước khi thoát không?', 
								$scope.confirmSaveOK, $scope.confirmSaveNOK);
					}
					
					$scope.confirmSaveOK = function() {
						$scope.disableMoreInfo = true;
						$scope.isShowBtnCancel = false;
						$scope.isShowBtnEnter = true;
						
						$scope.itemMoreInfo.maNV = $scope.model.mStaffId;
						$scope.itemMoreInfo.tenNV = $scope.model.mStaffName;
						$scope.itemMoreInfo.cmtNV = $scope.model.mStaffIdNo;
						$scope.itemMoreInfo.diaChiNV = $scope.model.mStaffAddress;
						$scope.itemMoreInfo.congTyNV = $scope.model.mStaffCompany;
						$scope.itemMoreInfo.maKH = $scope.model.mCusId;
						$scope.itemMoreInfo.tenKH = $scope.model.mCusName;
						$scope.itemMoreInfo.soThueBao = $scope.model.mCusNumber;
						$scope.itemMoreInfo.goiCuoc = $scope.model.mCusCos;
						$scope.itemMoreInfo.cmtKH = $scope.model.mCusIdNo;
						$scope.itemMoreInfo.diaChiKH = $scope.model.mCusAddress;
						
						$scope.lstMoreInfoX = [];
						for (var i=0; i<mvtPromotionSerial.length; i++) {
							if (mvtPromotionSerial[i].mstrSerial == $scope.itemMoreInfo.mstrSerial) {
								$scope.lstMoreInfoX.push($scope.itemMoreInfo)
							} else {
								$scope.lstMoreInfoX.push(mvtPromotionSerial[i])
							}
						}
						$scope.tableMoreInfos = new NgTableParams({}, {
							dataset : $scope.lstMoreInfoX
						});
					}
					
					$scope.confirmSaveNOK = function() {
						$scope.itemMoreInfo.maNV = $scope.itemMoreInfoBK.maNV;
						$scope.itemMoreInfo.tenNV = $scope.itemMoreInfoBK.tenNV;
						$scope.itemMoreInfo.cmtNV = $scope.itemMoreInfoBK.cmtNV;
						$scope.itemMoreInfo.diaChiNV = $scope.itemMoreInfoBK.diaChiNV;
						$scope.itemMoreInfo.congTyNV = $scope.itemMoreInfoBK.congTyNV;
						$scope.itemMoreInfo.maKH = $scope.itemMoreInfoBK.maKH;
						$scope.itemMoreInfo.tenKH = $scope.itemMoreInfoBK.tenKH;
						$scope.itemMoreInfo.soThueBao = $scope.itemMoreInfoBK.soThueBao;
						$scope.itemMoreInfo.goiCuoc = $scope.itemMoreInfoBK.goiCuoc;
						$scope.itemMoreInfo.cmtKH = $scope.itemMoreInfoBK.cmtKH;
						$scope.itemMoreInfo.diaChiKH = $scope.itemMoreInfoBK.diaChiKH;
						
						$scope.model.mStaffId = $scope.itemMoreInfo.maNV;
						$scope.model.mStaffName = $scope.itemMoreInfo.tenNV;
						$scope.model.mStaffIdNo = $scope.itemMoreInfo.cmtNV;
						$scope.model.mStaffAddress = $scope.itemMoreInfo.diaChiNV;
						$scope.model.mStaffCompany = $scope.itemMoreInfo.congTyNV;
						$scope.model.mCusId = $scope.itemMoreInfo.maKH;
						$scope.model.mCusName = $scope.itemMoreInfo.tenKH;
						$scope.model.mCusNumber = $scope.itemMoreInfo.soThueBao;
						$scope.model.mCusCos = $scope.itemMoreInfo.goiCuoc;
						$scope.model.mCusIdNo = $scope.itemMoreInfo.cmtKH;
						$scope.model.mCusAddress = $scope.itemMoreInfo.diaChiKH;
						
						$scope.disableMoreInfo = true;
						$scope.isShowBtnCancel = false;
						$scope.isShowBtnEnter = true;
					}
					
					//
					$scope.returnToWriteInfo = function() {
						$('#modalMoreInfo').modal('hide');
						
						for(var k = 0; k < $scope.lstMoreInfoX.length; k++) {
							var vctCheckRow = $scope.lstMoreInfoX[k];
							if (vctCheckRow.cmtNV == '' || vctCheckRow.maKH == '') {
								bootbox
								.alert($translate
										.instant('vnm.create_exchange_for_cust.error.not.enough.handset.info'));
								return;
							}
						}
						
						bootboxConfirm('Ghi thông tin giao dịch', 'Bạn có muốn ghi thông tin giao dịch không ?', 
								$scope.confirmSaveTransactionOK, $scope.confirmSaveTransactionNOK);
					}
					
					//
					$scope.confirmSaveTransactionOK = function() {
						$scope.saveTransaction()
					}
					
					$scope.confirmSaveTransactionNOK = function() {
						
					}
					
					var mstrTransactionID;
					$scope.saveTransaction = function() {
						if ($scope.model.transDate == null || $scope.model.transDate == undefined || $scope.model.transDate == '') {
							bootbox
							.alert($translate
									.instant('vnm.create_exchange_for_cust.error.miss.transdate'));
							return;
						}
						var request = $scope.initDDTP();

						// Write database
						createExchangeFac.saveTransaction(request, function(result) {
							if (result != null && result.length > 0) {
								mstrTransactionID = result[0];
								
								// Lap hoa don ban hang luon
								$scope.establishInvoice(vvctCustInfo);
								$scope.refresh();
								$scope.saveMGMPromotion();
								
								// Reset bien khuyen mai
								mvtPromotionSerial = [];
								$scope.lstMoreInfoX = [];
								mvtAprilPromotionSerial = null;
							}
						});

						$scope.loadDataAfterUpdate();
						
						var vvctCustInfo = []
						vvctCustInfo.mstrTransType = $scope.model.custInfor.code;
						vvctCustInfo.mstrCustShopCode = '';						
						vvctCustInfo.payMethod = $scope.model.payMethod.code;
						vvctCustInfo.customer = $scope.model.custName;
						vvctCustInfo.address = $scope.model.address;
						vvctCustInfo.taxCode = $scope.model.taxCode;
						vvctCustInfo.account = $scope.model.account;
						vvctCustInfo.company = $scope.model.companyName;
					}
					
					//
					$scope.loadDataAfterUpdate = function() {
						var shopStaffA = {
							"name" : $localStorage.clientContext.shop.shopId,
							"description" : $localStorage.clientContext.shop.staffId,
						};
						
						createExchangeFac.loadGood(shopStaffA, function(result) {
							if (result != null && result.length > 0) {
								$scope.GoodsSource = result;
							} else {
								$scope.GoodsSource = [];
							}
						});
					}
					
					//
					$scope.saveMGMPromotion = function() {
						if ($scope.lstMoreInfoX != null && $scope.lstMoreInfoX != undefined && $scope.lstMoreInfoX.length > 0) {
							var request = {
								"mstrTransactionID" : mstrTransactionID,
								"mvtPromotionSerial" : $scope.lstMoreInfoX,
								"shopId" : $localStorage.clientContext.shop.shopId,
								"staffId" : $localStorage.clientContext.shop.staffId,
							};
							
							createExchangeFac.saveMGMPromotion(request, function(result) {
								if (result != null && result.length > 0) {
									
								}
							});
						}
					}
					
					//
					var vvctCustInfoLocal = {};
					$scope.establishInvoice = function(vvctCustInfo) {
						vvctCustInfoLocal = vvctCustInfo;
						bootboxConfirm('Lập hóa đơn', 'Cập nhật dữ liệu thành công. Bạn có muốn lập hóa đơn cho giao dịch không ?', 
								$scope.confirmCreateBillOK, $scope.confirmCreateBillNOK);
					}
					
					$scope.confirmCreateBillOK = function() {
						var mstrTransType = $scope.model.payMethod.code;
						if (mstrTransType == '6' || mstrTransType == '7' || mstrTransType == '8') {
							for (var i=0; i<$scope.InvoiceTypeSource.length; i++) {
								if ($scope.InvoiceTypeSource[i].code == '2') {
									$scope.model.bType = $scope.InvoiceTypeSource[i];
									break;
								}
							}
						} else {
							$scope.model.bType = $scope.InvoiceTypeSource[0];
						}
						
						var HTM;
						if ($scope.model.bType.code == 1) HTM = 'HT';
							else HTM = 'HM';
							
						var request = {
							"mstrTypeInvoice" : $scope.model.bType.code,
							"mstrResourceCode" : HTM,
							"shopId" : $localStorage.clientContext.shop.shopId,
							"staffId" : $localStorage.clientContext.shop.staffId,
						};
						
						createExchangeFac.getCurrentInvoiceNo(request, function(result) {
							if (result != null && result.length > 0) {
								$scope.model.bTQ = result[0].billTQ;
								$scope.model.bSerial = result[0].billSerial;
								$scope.model.bFrom = result[0].billFrom;
								$scope.model.bTo = result[0].billTo;
								$scope.model.bCurrent = result[0].billCurrent;
							}
						});
						
						$('#modalCreateBill').modal('show');
					}
					
					$scope.confirmCreateBillNOK = function() {
						vvctCustInfoLocal = {};
					}
					
					//
					$scope.refresh = function() {
						$scope.model.custName = '';
						$scope.model.companyName = '';
						$scope.model.taxCode = '';
						$scope.model.account = '';
						$scope.model.address = '';
						$scope.refreshTransactionDetail();
						$scope.model.cardNo = ''
// frmData.vtData.removeAllElements();
						$scope.model.deposit = '';
						$scope.model.residual = '';
					}
					
					$scope.refreshTransactionDetail = function() {
						$scope.model.good = '';
						$scope.model.soluong = '';
						$scope.model.price = '';
						$scope.model.promotion = '';
						$scope.model.chietkhau = '';
						$scope.model.thueVAT = '';
						
						$scope.vvctRow = [];
						$scope.tableParamsGood = new NgTableParams({}, {
							dataset : $scope.vvctRow
						});
						
						$scope.listSerialAdd = [];
						$scope.tableParamsSerialAdd = new NgTableParams({}, {
							dataset : $scope.listSerialAdd
						});
						
						disablePayMethod = false;
						mlngSUMMoneyNoTax = 0;
						mlngSUMMoneyTax = 0;
						mlngSUMMoneyTaxSum = 0;
						mlngSUMMoneyDiscount = 0;
						mlngSUMMoneyProm = 0;
						mlngSUMMoney = 0;
						mlngSUMMoneySum = 0;
						mlngTotalPaid = 0;
						
						$scope.model.moneyNotax = 0;
						$scope.model.discount = 0;
						$scope.model.promo = 0;
						$scope.model.taxAmount = 0;
						$scope.model.amount = 0;
						$scope.model.total = 0;
					}
					
					//
					$scope.initDDTP = function() {
						var temp = [];
						var t = 0;
						for(var i = 0;i < $scope.vvctRow.length;i++) {
							temp = $scope.vvctRow[i];
							if (temp.mstrVAT > t) {
								t = temp.mstrVAT;
							}
						}
						
						var request = {
							"vGood" : $scope.vvctRow,
							"shopId" : $localStorage.clientContext.shop.shopId,
							"staffId" : $localStorage.clientContext.shop.staffId,
							"mstrUserName" : $localStorage.clientContext.username,
							"mlngSUMMoneyNoTax" : mlngSUMMoneyNoTax,
							"mlngSUMMoneyTax" : mlngSUMMoneyTax,
							"mlngSUMMoneyTaxSum" : mlngSUMMoneyTaxSum,
							"mlngSUMMoney" : mlngSUMMoney,
							"mlngSUMMoneySum" : mlngSUMMoneySum,
							"mlngSUMMoneyDiscount" : mlngSUMMoneyDiscount,
							"mlngSUMMoneyProm" : mlngSUMMoneyProm,
							"mstrWorkDate" : $("#transDate").val(),
							"transactionStatus" : '2',
							"payMethod" : $scope.model.payMethod.code,
							"customer" : $scope.model.custName,
							"address" : $scope.model.address,
							"taxCode" : $scope.model.taxCode,
							"account" : $scope.model.account,
							"company" : $scope.model.companyName,
							"mstrTransType" : $scope.model.custInfor.code,
							"taxRate" : t,
							"creditNumber" : $scope.lstCardNos,
							"mvtHandsetICCIDList" : mvtHandsetICCIDList,
						};
						
						return request;
					}
					
					//
					$scope.listCreditNumber = [];
					
					//
					var mvtAprilPromotionSerial = [];
					$scope.addToHansetICCIDList = function(strPriceType) {
						if (mvtAprilPromotionSerial != null && mvtAprilPromotionSerial != undefined && mvtAprilPromotionSerial.length > 0 && 
								mvtHandsetPromotionSerial != null && mvtHandsetPromotionSerial != undefined &&  mvtHandsetPromotionSerial.length > 0) {
							var vtRow = {}
							vtRow.mvtAprilPromotionSerial = mvtAprilPromotionSerial;
							vtRow.mvtHandsetPromotionSerial = mvtHandsetPromotionSerial;
							vtRow.strPriceType = strPriceType
							mvtHandsetICCIDList.push(vtRow);
						}
					}
					
					//
					$scope.checkPromotionBundle = function(strPriceType, dblRatio) {
						var blnReturn = true;
						var intHandsetCount = 0; // So luong serial khuyen
													// mai = So luong ban theo
													// loai gia april
						var vtGoodsData = $scope.vvctRow;

						mvtHandsetPromotionSerial = []
						for(var i = 0;i < vtGoodsData.length;i++)
						{
							var vtGoodsTrans = vtGoodsData.get[i];
							if (vtGoodsTrans.mstrPriceTypeID == strPriceType)
							{
								var intQuantity = vtGoodsTrans.mstrQuantity; // 1:
																				// index:
																				// So
																				// luong
								intHandsetCount += intQuantity;
								$scope.getHandsetPromotionSerial(vtGoodsTrans,dblRatio);
							}
						}

						blnReturn = $scope.showDialogInputSerialPromotion(intHandsetCount * dblRatio, vtGoodsData, strPriceType);
						return blnReturn;
					}
					
					var mvtHandsetPromotionSerial = [];
					$scope.getHandsetPromotionSerial = function(vtRow, dblRatio) {
						var vtSerial = vtRow.vSerial;
						for(var i = 0;i < vtSerial.length;i++)
						{
							var vtSerialRow = vtSerial[i];
							var strSerial = vtSerialRow.serial;
							mvtHandsetPromotionSerial.push(strSerial);
						}

						if(dblRatio != 1)
						{
							var strPrimaryGoodsCode = vtRow.mstrGoodCode;
							var vtID = vtRow.vvctID;
							var strPrimaryPriceID = vtID.mstrPriceID;

							for(var i = 0;i < $scope.vvctRow.length;i++)
							{
								var vtGoodsTrans = $scope.vvctRow[i];
								if (vtGoodsTrans.primaryGoodsCode == strPrimaryGoodsCode &&
								   vtGoodsTrans.primaryPriceID == strPrimaryPriceID &&
								   vtGoodsTrans.mstrGoodsType == '5') // La
																		// handset
								{
									getHandsetPromotionSerial(vtGoodsTrans,dblRatio);
								}
							}
						}
					}
					
					$scope.showDialogInputSerialPromotion = function(intHandsetCount, vtGoodsData, strPriceType) {
						var vtPromotionSerial = [];
						var blnReturn = true;

						if (intHandsetCount > 0) {
							for(var i = 0;i < vtGoodsData.length;i++)
							{
								var vtGoodsTrans = vtGoodsData[i];

								if(vtGoodsTrans.mstrGoodsType = '6') // R-UIM
								{
									var object = vtGoodsTrans.vSerial;
									for(var t = 0;t < object.length;t++)
									{
										var strSerial = object[t].serial;
										var vtRow = [];
										vtRow.push(strSerial);
										vtPromotionSerial.push(vtRow);
									}
								}
							}

							// Dialog nay de nhap cac serial khuyen mai, phục vu
							// cho mot CTKM duy nhat da ket thuc => dua len CSS
							// tam bo qua
							
							// DialogInputSerialPromotion digInputSerial = new
							// DialogInputSerialPromotion(this,vtPromotionSerial,intHandsetCount,strPriceType);
							// WindowManager.centeredWindow(digInputSerial);
							// mvtAprilPromotionSerial =
							// digInputSerial.getPromotionSerial();
							// blnReturn = digInputSerial.blnReturn;
						}
						return blnReturn;
					}
					
					//
					var mvctMGMGoodsSerialList = [];
					$scope.getMGMGoodsSerial = function() {
						if($scope.checkOldGoodsList()) {
							return mvctMGMGoodsSerialList;
						}

						mvctMGMGoodsSerialList = []
						for(var i = 0;i < $scope.vvctRow.length;i++) {
							var vctOneGood = $scope.vvctRow[i];
							if (vctOneGood.mstrPriceTypeID == '7' && vctOneGood.mstrCheckSerial == '1') {
								var strGoodsID = vctOneGood.vvctID.mstrGoodID;
								var strGoodsCode = vctOneGood.mstrGoodCode;
								var vctSerial = vctOneGood.vSerial;
								for(var j = 0;j < vctSerial.length;j++) {
									var vctGoodsMGMRow = {};
									vctGoodsMGMRow.mstrGoodsID = strGoodsID;         // 0
									vctGoodsMGMRow.mstrGoodsCode = strGoodsCode;      // 1
									vctGoodsMGMRow.mstrSerial = vctSerial[j].serial;   // 2
									vctGoodsMGMRow.maNV = '';  // 3
									vctGoodsMGMRow.tenNV = '';  // 4
									vctGoodsMGMRow.cmtNV = '';  // 5
									vctGoodsMGMRow.diaChiNV = ''; // 6
									vctGoodsMGMRow.congTyNV = '';  // 13
									vctGoodsMGMRow.maKH = '';   // 7
									vctGoodsMGMRow.tenKH = '';   // 8
									vctGoodsMGMRow.cmtKH = '';    // 9
									vctGoodsMGMRow.diaChiKH = '';   // 10
									vctGoodsMGMRow.soThueBao = '';  // 11
									vctGoodsMGMRow.goiCuoc = '';   // 12
									mvctMGMGoodsSerialList.push(vctGoodsMGMRow);
								}
							}
						}
						return mvctMGMGoodsSerialList;
					}
					
					//
					$scope.checkOldGoodsList = function() {
						if(mvctMGMGoodsSerialList == null || mvctMGMGoodsSerialList == undefined || mvctMGMGoodsSerialList.length <= 0) {
							return false;
						}

						// Kiem tra so luong
						var intCountPromotion = 0;
						for(var i = 0; i < $scope.vvctRow.length; i++)
						{
							var vctOneGood = $scope.vvctRow[i];
							if(vctOneGood.mstrPriceTypeID == '7' && vctOneGood.mstrCheckSerial == '1')
							{
								var vctSerial = vctOneGood.vSerial;
								for(var j = 0;j < vctSerial.length;j++)
								{
									intCountPromotion++;
								}
							}
						}

						if(mvctMGMGoodsSerialList.length != intCountPromotion)
						{
							return false;
						}

						// Kiem tra chi tiet
						for(var i = 0;i < $scope.vvctRow.length;i++)
						{
							var vctOneGood = $scope.vvctRow[i];
							if(vctOneGood.mstrPriceTypeID == '7' && vctOneGood.mstrCheckSerial == '1')
							{
								var strGoodsID = vctOneGood.vvctID.mstrGoodID;
								var strGoodsCode = vctOneGood.mstrGoodCode;
								var vctSerial = vctOneGood.vSerial;
								for(var j = 0;j < vctSerial.length;j++) {
									var strSerial = vctSerial[j].serial;
									if(!$scope.equalOldList(strGoodsID,strGoodsCode,strSerial)) {
										return false;
									}
								}
							}
						}
						return true;
					}
					
					$scope.equalOldList = function(pstrGoodsID, pstrGoodsCode, pstrSerial) {
						for(var i = 0;i < mvctMGMGoodsSerialList.length;i++) {
							var vtTemp = mvctMGMGoodsSerialList[i];
							var strGoodsID = vtTemp.mstrGoodsID;
							var strGoodsCode = vtTemp.mstrGoodsCode;
							var strSerial = vtTemp.mstrSerial;

							if (pstrGoodsID == strGoodsID && pstrGoodsCode == strGoodsCode && pstrSerial == strSerial) {
								return true;
							}
						}
						return false;
					}
					
					//
					$scope.checkPromotionMGM = function() {
						for (var i = 0; i < $scope.vvctRow.length; i++) {
							var vctRow = $scope.vvctRow[i];
							if (vctRow.mstrPriceTypeID == '7') {
								
							}
							return true;
						}
						return false;
					}
					
					
					//
					var mstrWorkDate;
					$scope.validInputWriteInfo = function() {
						var vstrTaxNo = $scope.model.taxCode;
						if (vstrTaxNo != null && vstrTaxNo != undefined && vstrTaxNo.length > 0 && vstrTaxNo.length < 10) {
							bootbox
							.alert($translate
									.instant('vnm.create_exchange_for_cust.error.wrong.length.tax.code'));
							return false;
						}
						
						mstrWorkDate = $("#transDate").val();
						if (mstrWorkDate = '') {
							bootbox
							.alert($translate
									.instant('vnm.create_exchange_for_cust.error.miss.trans.date'));
							return false;
						}
						
						if (!$scope.checkLarger()) return false;
						
						if ($scope.vvctRow.length <= 0) {
							bootbox
							.alert($translate
									.instant('vnm.create_exchange_for_cust.error.miss.good'));
							return false;
						}

						if (!$scope.checkResourceCode()) return false;
						if (!$scope.checkAttachGood()) return false;
						if (!$scope.checkExistSerial_write()) return false;
						if (!$scope.checkMoney()) return false;
						
						return true;
					}
					
					$scope.checkLarger = function() {
						mstrWorkDate = $("#transDate").val();
						if (!isValidDate(mstrWorkDate)) {
							bootbox
							.alert($translate
									.instant('vnm.create_exchange_for_cust.error.trans.date.must.right.format'));
							return false;
						}
						var isDateAfter = checkDateIsAfterDate(mstrWorkDate, $filter('date')(new Date(), "dd/MM/yyyy"));
						if(!isDateAfter){
							bootbox
							.alert($translate
									.instant('vnm.create_exchange_for_cust.error.trans.date.must.smaller'));
							return false;
						}
						return true;
					}
					
					$scope.checkResourceCode = function() {
						var strCurrentResourceCode = 'HT';
						for(var i=0; i<$scope.vvctRow.length; i++) {
							var vtRow = $scope.vvctRow[i];
							var strResourceCode = vtRow.mstrResourceCode;
							
							if (strCurrentResourceCode != strResourceCode) {
								var strPrice = vtRow.mstrPrice;
								var strGoodsCode = vtRow.mstrGoodCode;

								if(strPrice > 0) {
									var message = $translate.instant('vnm.create_exchange_for_cust.error.diff.trans.type'),        		
									message = message.replace(/<%p1>/, setStrongLabel(strGoodsCode));
									message = message.replace(/<%p2>/, setStrongLabel(strCurrentResourceCode));
					        		bootbox.alert(message);
									return false;
								}
							}
						}
						return true;
					}
					
					$scope.checkAttachGood = function() {
						return true;
					}
					
					$scope.checkExistSerial_write = function() {
						var vvctData = [];
						var vvctRowx = [];
						vvctData = $scope.vvctRow;
						var vvctSerial = []
						
						for(var i = 0; i < $scope.vvctRow.length; i++) {
							vvctRowx = $scope.vvctRow[i];
							if (vvctRowx.mstrCheckSerial == '1') {
								vvctSerial = vvctRowx.vSerial;
								
								if(vvctSerial == null || vvctSerial.length <= 0) {
									var message = $translate.instant('vnm.create_exchange_for_cust.error.miss.serials'),        		
					        		messageDisplay = message.replace(/<%p1>/, setStrongLabel(vvctRowx.mstrGoodCode));
					        		bootbox.alert(messageDisplay);
									return false;
								} else if (vvctSerial.length != vvctRowx.mstrQuantity) {
									var message = $translate.instant('vnm.create_exchange_for_cust.error.wrong.list.serials'),        		
					        		messageDisplay = message.replace(/<%p1>/, setStrongLabel(vvctRowx.mstrQuantity));
					        		bootbox.alert(messageDisplay);
									return false;
								}
							}
						}
						return true;
					}
					
					$scope.checkMoney = function() {
						if ($scope.model.total < 0) {
							bootbox
							.alert($translate
									.instant('vnm.create_exchange_for_cust.error.total.must.larger.than.0'));
							return false;
						}
						return true;
					}
					
					//
					$scope.disableCardNo = true;
					$scope.isShowbtnAction = true;
					$scope.isShowbtnExecute = false;
					$scope.itemCardNo;
					$scope.lstCardNos = [];
					var flagCardNo = '';
					
					$scope.onChooseCard = function() {
						$scope.disableCardNo = true;
						$scope.isShowbtnAction = true;
						$scope.isShowbtnExecute = false;
						$('#modalInputCard').modal('show');
					}
					
					$scope.getCardNo = function(item) {
						$scope.itemCardNo = item;
						$scope.model.dCardNo = $scope.itemCardNo.cardNo;
						$scope.model.dCardPrice = $scope.itemCardNo.cardPrice;
					}
					
					$scope.addCardNo = function() {
						flagCardNo = 'ADD';
						$scope.model.dCardNo = '';
						$scope.model.dCardPrice = '';
						$scope.disableCardNo = false;
						$scope.isShowbtnAction = false;
						$scope.isShowbtnExecute = true;
					}
					
					$scope.editCardNo = function() {
						flagCardNo = 'EDIT';
						if ($scope.itemCardNo != null && $scope.itemCardNo != undefined) {
							$scope.disableCardNo = false;
							$scope.isShowbtnAction = false;
							$scope.isShowbtnExecute = true;
						}
					}
					
					$scope.deleteCardNo = function() {
						if ($scope.itemCardNo != null && $scope.itemCardNo != undefined) {
							bootboxConfirm('Xóa thẻ', 'Bạn có thực sự muốn xóa bản ghi này?', 
									$scope.confirmDeleteCardNoOK, $scope.confirmDeleteCardNoNOK);
						}
					}
					
					$scope.confirmDeleteCardNoOK = function() {
						angular.forEach( $scope.lstCardNos, function(objectCard, index){
				    	   if(objectCard.rowId == $scope.itemCardNo.rowId){
				    		   $scope.lstCardNos.splice(index,1);   
				    	   }
				    	});
							
						$scope.tableCardNos = new NgTableParams({}, {
							dataset : $scope.lstCardNos
						});
					}
					
					$scope.confirmDeleteCardNoNOK = function() {
						
					}
					
					$scope.okCardNo = function() {
						if (flagCardNo == 'ADD') {
							if ($scope.model.dCardNo == null || $scope.model.dCardNo == '' || $scope.model.dCardNo == undefined) {
								bootbox
								.alert($translate
										.instant('vnm.create_exchange_for_cust.error.miss.card.no'));
								return;
							}
							
							if ($scope.model.dCardPrice == null || $scope.model.dCardPrice == '' || $scope.model.dCardPrice == undefined) {
								bootbox
								.alert($translate
										.instant('vnm.create_exchange_for_cust.error.miss.card.price'));
								return;
							}
								
							$scope.itemCardNo = {};
							$scope.itemCardNo.rowId = createTimeStamp();
							$scope.itemCardNo.cardNo = $scope.model.dCardNo;
							$scope.itemCardNo.cardPrice = $scope.model.dCardPrice;
							$scope.lstCardNos.push($scope.itemCardNo);
							
							$scope.tableCardNos = new NgTableParams({}, {
								dataset : $scope.lstCardNos
							});
							
							$scope.disableCardNo = true;
							$scope.isShowbtnAction = true;
							$scope.isShowbtnExecute = false;
						} else if (flagCardNo == 'EDIT') {
							
							if ($scope.model.dCardNo == null || $scope.model.dCardNo == '' || $scope.model.dCardNo == undefined) {
								bootbox
								.alert($translate
										.instant('vnm.create_exchange_for_cust.error.miss.card.no'));
								return;
							}
							
							if ($scope.model.dCardPrice == null || $scope.model.dCardPrice == '' || $scope.model.dCardPrice == undefined) {
								bootbox
								.alert($translate
										.instant('vnm.create_exchange_for_cust.error.miss.card.price'));
								return;
							}
							
							var rowIdEdit = $scope.itemCardNo.rowId;
							angular.forEach( $scope.lstCardNos, function(objectCard, index){
					    	   if(objectCard.rowId == $scope.itemCardNo.rowId){
					    		   $scope.lstCardNos.splice(index,1);   
					    	   }
					    	});
							
							$scope.itemCardNo = {};
							$scope.itemCardNo.rowId = rowIdEdit;
							$scope.itemCardNo.cardNo = $scope.model.dCardNo;
							$scope.itemCardNo.cardPrice = $scope.model.dCardPrice;
							$scope.lstCardNos.push($scope.itemCardNo);
							
							$scope.tableCardNos = new NgTableParams({}, {
								dataset : $scope.lstCardNos
							});
						}
					}
					
					$scope.nokCardNo = function() {
						$scope.disableCardNo = true;
						$scope.isShowbtnAction = true;
						$scope.isShowbtnExecute = false;
					}
					
					$scope.exitCardNo = function() {
						var cards = '';
						if ($scope.lstCardNos != null && $scope.lstCardNos != undefined && $scope.lstCardNos.length > 0) {
							for (var i=0; i<$scope.lstCardNos.length; i++) {
								cards += $scope.lstCardNos[i].cardNo + ', ';
							}
						}
						$scope.model.cardNo = cards.substring(0, cards.length - 2);
						$('#modalInputCard').modal('hide');
					}
					
					//
					var mintGoodsListRowBak = 0;
					var mintRowListGoodIndex = -1;
					var mblnIsOpenContinue = true;
					$scope.itemAttachGood;
					$scope.lstSelectedAttachGoods;
					$scope.model.atQuantity = 0;
					var mstrPrimaryGoodsCode;
					var mstrPrimaryPriceID;
					
					$scope.inputAttachGoods = function(attachGoods, goodsCode, priceTypeId) {
						$scope.vtSelectedAttachGoods = {};
						if (mblnIsOpenContinue) {
							$scope.lstSelectedAttachGoods= [];
							Array.prototype.push.apply($scope.lstSelectedAttachGoods, $scope.AttachGoodSource);
							$scope.tableAttachGoods = new NgTableParams({}, {
								dataset : $scope.AttachGoodSource
							});
							$scope.getSerialOfAttachGood($scope.AttachGoodSource[0]);
							mstrPrimaryGoodsCode = goodsCode;
							mstrPrimaryPriceID = priceTypeId;
							
							$scope.model.atQuantity = 0;
							$scope.dataTableParamsAttachSerialItemForAssignmentToAdd = [];
							$scope.dataTableAttachSerialItem = [];
			    			$scope.tableSerialAttachGoods = new NgTableParams({count: 10}, {
			    				dataset : $scope.dataTableAttachSerialItem
							});
			    			
			    			var message = $translate.instant('vnm.create_exchange_for_cust.label.attach.good'),        		
							message = message.replace(/<%p1>/, $scope.model.good.goodsCode);
			    			message = message.replace(/<%p2>/, $scope.model.price.price);
			    			message = message.replace(/<%p3>/, $scope.model.soluong);
			    			$scope.model.labelAttachGood = message;
			    			
							$('#modalInputAttachGood').modal('show');
						} else {
							return;
						}
					}
					
					$scope.getSerialOfAttachGood = function(item) {
						$scope.itemAttachGood = item;
						
						if ($scope.GoodsSource != null && $scope.GoodsSource != undefined && $scope.GoodsSource.length > 0) {
							var find = false;
							for (var i=0; i<$scope.GoodsSource.length; i++) {
								if ($scope.GoodsSource[i].goodsCode == item.goodsCode) {
									$scope.model.atGood = $scope.GoodsSource[i];
									find = true;
									break;
								}
							}
							if (!find) {
								$scope.model.atGood = {};
								if (item.goodsId != '') {
									bootbox
									.alert($translate
										.instant('vnm.create_exchange_for_cust.error.not.in.stock'));
								}
								
								$scope.PriceAttachGoodSource = [];
								$scope.model.atPrice = {};
								$scope.model.atProm = {}
								$scope.model.atQuantity = 0;
								
								$scope.dataTableAttachSerialItem = [];
				    			$scope.tableSerialAttachGoods = new NgTableParams({count: 10}, {
				    				dataset : $scope.dataTableAttachSerialItem
								});
							} else {
								$scope.loadlstAttachGoodPrice();
								if ($scope.PromotionSource != null && $scope.PromotionSource != undefined && $scope.PromotionSource.length>0) {
									for (var i=0; i<$scope.PromotionSource.length; i++) {
										if ($scope.PromotionSource[i].promotionId == $scope.itemAttachGood.promotionId) {
											$scope.model.atProm = $scope.PromotionSource[i];
											break;
										}
									}
								}
								
								$scope.fillDetailSerial($scope.model.atGood.goodsId, $scope.model.atGood.goodsCode);
								$scope.fillSelectedSerial($scope.itemAttachGood);
							}
						}
						
					}
					
					$scope.disableQuantityAttachGood = true;
					$scope.fillSelectedSerial = function(vtSelectedRow) {
						if (vtSelectedRow.unknow != null && vtSelectedRow.unknow != undefined 
								&& vtSelectedRow.unknow.goodsCode != null && vtSelectedRow.unknow.goodsCode != undefined) {
							var goodsSaleTransaction = vtSelectedRow.unknow;
							
							if ($scope.PriceAttachGoodSource != null && $scope.PriceAttachGoodSource != undefined && $scope.PriceAttachGoodSource.length>0) {
								for (var i=0; i<$scope.PriceAttachGoodSource.length; i++) {
									if ($scope.PriceAttachGoodSource[i].price == goodsSaleTransaction.goodsPrice) {
										$scope.model.atPrice = $scope.PriceAttachGoodSource[i];
										break;
									}
								}
							}
							$scope.model.atQuantity = goodsSaleTransaction.goodsQuantity;

							var vtSelectedSerial = goodsSaleTransaction.vectorSerial;
							if (vtSelectedSerial != null && vtSelectedSerial != undefined && vtSelectedSerial.length > 0
									&& $scope.SerialAttachGoodSource != null && $scope.SerialAttachGoodSource != undefined && $scope.SerialAttachGoodSource.length > 0) {
								for (var i = 0;i < vtSelectedSerial.length; i++) {
									var vtRowI = vtSelectedSerial[i];
									var strSerialI = vtRowI.serial;
									
									for (var j = 0;j < $scope.SerialAttachGoodSource.length; j++) {
										var vtRowJ = $scope.SerialAttachGoodSource[j];
										var strSerialJ = vtRowJ.serial;
										if (strSerialI == strSerialJ) {
											vtRowJ.bl = "TRUE";
										}
									}
								}
							}
						} else {
							$scope.model.atQuantity = 0;
						}

						var vvctRow = $scope.model.atGood;
						var strCheckSerial = vvctRow.checkSerial;
						if (strCheckSerial == '1') {
							$scope.disableQuantityAttachGood = true;
						} else {
							$scope.disableQuantityAttachGood = false;
						}
					}
					
					$scope.PriceAttachGoodSource = [];
					$scope.loadlstAttachGoodPrice = function() {
						var goodData = {
							"name" : $localStorage.clientContext.shop.tariffId,
							"description" : StringUtilNVL($scope.itemAttachGood.goodsId),
						};

						createExchangeFac.loadPrice(goodData, function(result) {
							if (result != null && result.length > 0) {
								$scope.PriceAttachGoodSource = result;
								for (var i=0; i<result.length; i++) {
									if (result[i].price == $scope.itemAttachGood.price) {
										$scope.model.atPrice = result[i];
										break;
									}
								}
								mapPrice[$scope.itemAttachGood.goodsId] = result;
							} else {
								$scope.PriceAttachGoodSource = [];
							}
						});
					}
					
					$scope.SerialAttachGoodSource = [];
					$scope.fillDetailSerial = function(strGoodsID, strGoodsCode) {
						var stockGood = {
							"shopId" : $localStorage.clientContext.shop.shopId,
							"staffId" : $localStorage.clientContext.shop.staffId,
							"goodsId" : strGoodsID,
						};
						
						$scope.SerialGetAttachGoodSource = [];
						createExchangeFac.loadSerial(stockGood, function(result) {
							if (result != null && result.length > 0) {
								$scope.SerialGetAttachGoodSource = result;
								$scope.SerialAttachGoodSource = $scope.getRealSerial($scope.SerialGetAttachGoodSource, $scope.getUsageVectorSerial(strGoodsCode))
							} else {
								$scope.SerialGetAttachGoodSource = [];
								$scope.SerialAttachGoodSource = [];
							}
							
							$scope.dataTableAttachSerialItem = [];
				    		Array.prototype.push.apply($scope.dataTableAttachSerialItem, $scope.SerialAttachGoodSource);
				    		
				    		for (var i=0; i<$scope.dataTableAttachSerialItem.length; i++) {
				    			var serialI = $scope.dataTableAttachSerialItem[i].serial;
				    			for (var j=0; j<$scope.dataTableParamsAttachSerialItemForAssignmentToAdd.length; j++) {
				    				if (serialI == $scope.dataTableParamsAttachSerialItemForAssignmentToAdd[j].serial) {
				    					$scope.dataTableAttachSerialItem[i].typeCheckBox = true;
				    				}
				    			}
				    		}

			    			$scope.tableSerialAttachGoods = new NgTableParams({count: 10}, {
			    				dataset : $scope.dataTableAttachSerialItem
							});
						});
					}
					
					$scope.getRealSerial = function(vtFromSerial, pvctUsageSerial) {
						var vtRealSerial = [];
						if (pvctUsageSerial == null || pvctUsageSerial == undefined || pvctUsageSerial.length <= 0) {
							return vtFromSerial;
						}

						for(var i = 0;i < vtFromSerial.length; i++) {
							var vvctRow = vtFromSerial[i];
							var vstrSerial = vvctRow.serial;
							var blnIsExisting = false;

							for(var j = 0;j < pvctUsageSerial.length; j++) {
								var vvctRowJ = pvctUsageSerial[j];
								var vstrSerialJ = vvctRowJ.serial;

								if (vstrSerial == vstrSerialJ) {
									blnIsExisting = true;
									continue;
								}
							}

							if (!blnIsExisting) {
								vtRealSerial.push(vvctRow);
							}
						}
						return vtRealSerial;
					}
					
					$scope.getUsageVectorSerial = function(pstrGoodsCode) {
						var vtReturn = []
						for(var i = 0; i < $scope.vvctRow.length; i++) {
							var rowListGoods = $scope.vvctRow[i];
							var strSameGoodsCode = rowListGoods.mstrGoodCode;

							if (pstrGoodsCode == strSameGoodsCode) {
								var vtSerialList = rowListGoods.vSerial;
								for(var m = 0; m < vtSerialList.length; m++) {
									var vtRow = vtSerialList[m];
									vtReturn.push(vtRow);
								}
							}
						}
						return vtReturn;
					}
					
					//
					$scope.atInput = function() {
						var vtRow = null;
						if (!$scope.validateFocusLost()) {
							vtRow.bl = 'FALSE';
							return;
						}
						
						vtRow = $scope.itemAttachGood;
						var goodsSaleTrans = null;
						
						if(vtRow.unknow == null || vtRow.unknow == undefined || vtRow.unknow == '') {
							goodsSaleTrans = {};
							goodsSaleTrans.goodsCode = $scope.model.atGood.goodsCode;
							vtRow.unknow = goodsSaleTrans;
						} else {
							goodsSaleTrans = vtRow.unknow;
						}

						var vtSelectedSerial = [];
						$scope.countSelectedSerial(vtSelectedSerial);

						goodsSaleTrans.vectorSerial = vtSelectedSerial;
						goodsSaleTrans.goodsQuantity = $scope.model.atQuantity;
						goodsSaleTrans.goodsPrice = $scope.model.atPrice.price;

						var vvctRow = $scope.model.atGood;
						var strUnit = vvctRow.unit;
						var strCheckSerial = vvctRow.checkSerial;
						var strGoodID = vvctRow.goodsId;
						var strMaxQuantity = vvctRow.quantityEffect;
						var strCheckQuantity = vvctRow.checkQuantity;
						var strResourceCode = vvctRow.resourceCode;
						var strGoodsType = vvctRow.type;

						goodsSaleTrans.goodsID = strGoodID;
						goodsSaleTrans.maxQuantity = strMaxQuantity;
						goodsSaleTrans.resourceCode = strResourceCode;
						goodsSaleTrans.unit = strUnit;
						goodsSaleTrans.checkSerial = strCheckSerial;
						goodsSaleTrans.goodsType = strGoodsType;

						vvctRow = $scope.model.atPrice;
						var strPriceID = vvctRow.priceId;
						var strVAT = vvctRow.vat;

						goodsSaleTrans.priceID = strPriceID;
						goodsSaleTrans.goodsVAT = strVAT;
						goodsSaleTrans.primaryGoodsCode = mstrPrimaryGoodsCode;
						goodsSaleTrans.primaryPriceID = mstrPrimaryPriceID;
						goodsSaleTrans.goodsGroupCode = '';
						
						var strPromotionID = "";
						var lngTotalPromotion = 0;

						// Promotion
						if ($scope.model.atProm != null && $scope.model.atProm != undefined && $scope.model.atProm.promotionId != undefined) {
							strPromotionID = $scope.model.atProm.promotionId;
							var strPromotionCode = $scope.model.atProm.promProgramCode;
							var lngPromotionAmount = $scope.model.atProm.promAmount;
							var strPromotionType = $scope.model.atProm.promType;
							
							lngTotalPromotion = $scope.calculatePromotion($scope.model.atQuantity, $scope.model.atPrice.price,
																			   lngPromotionAmount, strPromotionType);

							goodsSaleTrans.promotionID = strPromotionID;
							goodsSaleTrans.goodsPromotion = lngTotalPromotion;
							goodsSaleTrans.totalPromotion = lngTotalPromotion;
							goodsSaleTrans.promotionCode = strPromotionCode;
						} else {
							goodsSaleTrans.promotionID = '';
							goodsSaleTrans.goodsPromotion = '0';
							goodsSaleTrans.totalPromotion = '0';
							goodsSaleTrans.promotionCode = '';
						}

						vtRow.quantityEffect = $scope.model.atQuantity;
						vtRow.price = $scope.model.atPrice.price;
						vtRow.priceId =  strPriceID;
						vtRow.promotionId = strPromotionID;
						vtRow.promotionTotal = lngTotalPromotion;

						if ($scope.model.atQuantity > 0) {
							vtRow.bl = "TRUE";
							$scope.loadAttachOfAttachGood($scope.model.atGood.goodsId, $scope.model.atPrice.priceId);
						} else {
							vtRow.bl = "FALSE";
							vtRow.quantityEffect = '';
							vtRow.price = '';
							vtRow.priceId =  '';
							vtRow.promotionId = '';
							vtRow.promotionTotal = '';
						}

						$scope.tableAttachGoods = new NgTableParams({}, {
							dataset : $scope.AttachGoodSource
						});
						mapAttachGood[$scope.itemGoodSelected.IDmstrGoodID] = $scope.AttachGoodSource;
					}
					
					$scope.countSelectedSerial = function(vtSelectedRow) {
						if ($scope.dataTableParamsAttachSerialItemForAssignmentToAdd != null && $scope.dataTableParamsAttachSerialItemForAssignmentToAdd != undefined 
								&& $scope.dataTableParamsAttachSerialItemForAssignmentToAdd.length > 0) {
							for(var i = 0; i < $scope.dataTableParamsAttachSerialItemForAssignmentToAdd.length; i++) {
								var vtRow = $scope.dataTableParamsAttachSerialItemForAssignmentToAdd[i];
								if (vtSelectedRow != null && vtSelectedRow != undefined) {
									vtSelectedRow.push(vtRow);
									
									vtRow.rowId = $scope.model.atGood.goodsId;
									if (!$scope.listSerialAll.includes(vtRow)) {
										$scope.listSerialAll.push(vtRow);
									}
								}
							}
						}
						return $scope.dataTableParamsAttachSerialItemForAssignmentToAdd.length;
					}
					
					$scope.validateFocusLost = function() {
						if ($scope.model.atPrice == null || $scope.model.atPrice == undefined || $scope.model.atPrice.price == undefined) {
							bootbox
							.alert($translate
									.instant('vnm.create_exchange_for_cust.error.at.miss.price'));
							return false;
						}

						if ($scope.model.atQuantity == null || $scope.model.atQuantity == undefined || $scope.model.atQuantity == '') {
							bootbox
							.alert($translate
									.instant('vnm.create_exchange_for_cust.error.at.miss.quantity'));
							return false;
						}

						if ($scope.itemAttachGood == null || $scope.itemAttachGood == undefined) {
							bootbox
							.alert($translate
									.instant('vnm.create_exchange_for_cust.error.at.good.not.selected'));
							return false;
						}

						// validate so luong
						var strMaxQuantity = $scope.model.atGood.quantityEffect;
						var strGoodsCode = $scope.model.atGood.goodsCode

						// So luong con lai duoc phep xuat
						var strQuantityBalance = strMaxQuantity - $scope.getUsageQuantity(strGoodsCode);
						if ($scope.model.atQuantity > strQuantityBalance) {
							var message = $translate.instant('vnm.create_exchange_for_cust.error.at.not.enough.quantity'),        		
							message = message.replace(/<%p1>/, setStrongLabel(strGoodsCode));
							message = message.replace(/<%p2>/, setStrongLabel(strQuantityBalance));
			        		bootbox.alert(message);
							return false;
						}

						return true;
					}
					
					$scope.atClear = function() {
						if ($scope.itemAttachGood != null || $scope.itemAttachGood != undefined) {
							var vtRow = $scope.itemAttachGood;
							vtRow.bl = 'FALSE';
							vtRow.quantityEffect = '';
							vtRow.price = '';
							vtRow.priceId = '';
							vtRow.promotionId = '';
							vtRow.promotionTotal = '';

							$scope.tableAttachGoods = new NgTableParams({}, {
								dataset : $scope.AttachGoodSource
							});
							
							$scope.model.checkboxListAttachSerialItem = false;
							$scope.dataTableParamsAttachSerialItemForAssignmentToAdd = [];
							angular.forEach($scope.dataTableAttachSerialItem, function(item) {
								item.typeCheckBox = false;
							})
							
							$scope.model.atQuantity = '0';
							$scope.model.atPrice = null;
						}
					}
					
					//
					var mblnReturn = true;
					$scope.atCancel = function() {
						bootboxConfirm('Xóa hàng hóa', 'Quá trình nhập hàng đi kèm chưa thành công.\nBạn có muốn thoát khỏi chức năng này?', 
								$scope.confirmExitInputAttachGoodOK, $scope.confirmExitInputAttachGoodNOK);
					}
					
					$scope.confirmExitInputAttachGoodOK = function() {
						mblnReturn = false;
						mblnIsOpenContinue = false;
						$('#modalInputAttachGood').modal('hide');
						
						$scope.deleteGoods($scope.vvctRow[mintGoodsListRowBak]); 
					}
					
					$scope.confirmExitInputAttachGoodNOK = function() {
						
					}
					
					//
					$scope.mvtSelectedAttachGoods = null;
					$scope.atAccept = function() {
						if ($scope.validateAccept()) {
							$scope.mvtSelectedAttachGoods = [];
							for(var i = 0;i < $scope.AttachGoodSource.length; i++) {
								var vtRow = $scope.AttachGoodSource[i];
								var strCheck = vtRow.bl.toUpperCase();
								if (strCheck == 'TRUE') {
									var goodsSale = vtRow.unknow;
									$scope.mvtSelectedAttachGoods.push(goodsSale);
									
									$scope.addAttachGoodsToForm(goodsSale);
								}
							}

							mblnReturn = true;
							$('#modalInputAttachGood').modal('hide');
						}
					}
					
					$scope.addAttachGoodsToForm = function(goodsSale) {
						if (!$scope.validAddAttachGoodsToForm(goodsSale)) return;
						$scope.calculate(goodsSale);
						
						if (mapAttachGood[$scope.itemGoodSelected.IDmstrGoodID] != null || mapAttachGood[$scope.itemGoodSelected.IDmstrGoodID] != undefined) {
							$scope.AttachGoodSource = mapAttachGood[$scope.itemGoodSelected.IDmstrGoodID];
						} else {
							$scope.AttachGoodSource = [];
						}

						if (mstrPriceTypeID != '7') {
							$scope.itemGoodSelected.vtAttachGoods = $scope.AttachGoodSource;
							$scope.itemGoodSelected.attachGoodIndex = '1';
							$scope.itemGoodSelected.attachGoodCode = $scope.model.good.goodsCode;

							if (($scope.AttachGoodSource != null) && ($scope.AttachGoodSource != undefined) && ($scope.AttachGoodSource.length > 0)) {
								$scope.inputAttachGoods($scope.AttachGoodSource, goodsSale.goodsCode, goodsSale.priceID);
							}
						}
					}
					
					$scope.validAddAttachGoodsToForm = function(goodsSale) {
						mstrGoodCode = goodsSale.goodsCode;
						mstrQuantity = goodsSale.goodsQuantity;
						mstrPrice = goodsSale.goodsPrice;
						mstrPriceID = goodsSale.priceID;

						mstrGoodID = goodsSale.goodsID;
						mstrVAT = goodsSale.goodsVAT;
						mstrUnit = goodsSale.unit;
						mstrCheckSerial = goodsSale.checkSerial;
						mstrMaxQuantity = goodsSale.maxQuantity;
						mstrGoodsGroupCode = goodsSale.goodsGroupCode;
						mstrPriceTypeID = $scope.model.price.type;
						mstrResourceCode = goodsSale.resourceCode;
						mstrGoodsType = goodsSale.goodsType;

						if (!$scope.checkQuantity()) return false;
						if (mstrVAT == '') {
							mstrVAT = "0";
						}
						mstrProm = goodsSale.goodsPromotion;
						if (mstrProm == '') {
							mstrProm = 0;
						}
						mstrPromCode = goodsSale.promotionCode;
						mstrPromID = goodsSale.promotionID;
						return true;
					}
					
					$scope.validateAccept = function() {
						var blnCheck = true;
						var intAttachQuantity = 0; // Tong so luong hang di kem
													// trong 1 nhom
						var dblAttachConstant = 0.0; // He so di kem
						var strAttachGroupName = ""; // Ten nhom hien tai
						var strAttachGroupNameBak = ""; // Backup ten nhom hien
														// tai

						for (var i = 0; i < $scope.AttachGoodSource.length; i++) {
							var vtRow = $scope.AttachGoodSource[i];

							// Neu la nhom
							if(vtRow.groupAttach == '') {
								strAttachGroupName = vtRow.goodsCode;
								if (!$scope.checkAttachGoods(blnCheck, dblAttachConstant, intAttachQuantity, strAttachGroupNameBak)) {
									return false;
								}

								// reset
								blnCheck = false;
								dblAttachConstant = 0.0;
								intAttachQuantity = 0;
							} else {
								strAttachGroupNameBak = strAttachGroupName;
								var strCheck = vtRow.bl.toUpperCase();

								if (strCheck == 'TRUE') {
									// Get info
									dblAttachConstant = vtRow.quantity; // Attach
																		// constant
									intAttachQuantity += vtRow.quantityEffect; // So
																				// luong

									blnCheck = true;
								}
							}
						}

						if (!$scope.checkAttachGoods(blnCheck,dblAttachConstant,intAttachQuantity,strAttachGroupName)) {
							return false;
						}
						
						return blnCheck;
					}
					
					$scope.checkAttachGoods = function(blnCheck, pdblAttachConstant, pintAttachQuantity, strGroupAttachName) {
						if (!blnCheck) {
							bootbox
							.alert($translate
									.instant('vnm.create_exchange_for_cust.error.at.minimum'));
							return false;
						} else {
							if (pintAttachQuantity != $scope.calculateAtleastQuantity(pdblAttachConstant)) {
								var message = $translate.instant('vnm.create_exchange_for_cust.error.at.total'),        		
								message = message.replace(/<%p1>/, setStrongLabel(strGroupAttachName));
								message = message.replace(/<%p2>/, setStrongLabel(Math.round($scope.calculateAtleastQuantity(pdblAttachConstant))));
				        		bootbox.alert(message);
								return false;
							}
						}

						return true;
					}
					
					$scope.calculateAtleastQuantity = function(pdblConstant) {
						return mstrQuantity * pdblConstant;
					}
					
					
					//
					$scope.dataTableAttachSerialItem = [];
					$scope.dataTableParamsAttachSerialItemForAssignmentToAdd = [];
					$scope.selectOrRemoveAttachSerialItem = function(item) {
						var isHeaderGoodItem = $scope.isAllRowChecked($scope.dataTableAttachSerialItem);
						if (isHeaderGoodItem) {
							$scope.model.checkboxListAttachSerialItem = true;
						} else {
							$scope.model.checkboxListAttachSerialItem = false;
						}
						
						if (item.typeCheckBox == true) {
							item.rowId = $scope.model.atGood.goodsId;
							var has = false;
							for (var i=0; i<$scope.dataTableParamsAttachSerialItemForAssignmentToAdd.length; i++) {
								if ($scope.dataTableParamsAttachSerialItemForAssignmentToAdd[i].serial == item.serial) {
									has = true;
									break;
								}
							}
							if (!has) $scope.dataTableParamsAttachSerialItemForAssignmentToAdd.push(item);
						} else {
							removeListSerialItemByItem($scope.dataTableParamsAttachSerialItemForAssignmentToAdd, item);
						}
						$scope.model.atQuantity = $scope.dataTableParamsAttachSerialItemForAssignmentToAdd.length;
					}
					
					$scope.checkAllAttachSerials = function(){
						$scope.dataTableParamsAttachSerialItemForAssignmentToAdd = [];
						angular.forEach($scope.dataTableAttachSerialItem, function(item) {
							item.typeCheckBox = $scope.model.checkboxListAttachSerialItem;
							if ($scope.model.checkboxListAttachSerialItem) {
								item.rowId = $scope.model.atGood.goodsId;
								
								var has = false;
								for (var i=0; i<$scope.dataTableParamsAttachSerialItemForAssignmentToAdd.length; i++) {
									if ($scope.dataTableParamsAttachSerialItemForAssignmentToAdd[i].serial == item.serial) {
										has = true;
										break;
									}
								}
								if (!has) $scope.dataTableParamsAttachSerialItemForAssignmentToAdd.push(item);
							}
						})
						$scope.model.atQuantity = $scope.dataTableParamsAttachSerialItemForAssignmentToAdd.length;
					}
					
					$scope.calculateTienThua = function() {
						if ($scope.model.deposit != null && $scope.model.deposit != undefined && $scope.model.deposit != '') {
							if ($scope.model.deposit < $scope.model.total) {
								$scope.model.residual = 0;
								bootbox
								.alert($translate
										.instant('vnm.create_exchange_for_cust.error.owe.money'));
							} else {
								var resi = $scope.model.deposit - (mlngSUMMoneySum - mlngSUMMoneyProm);
								$scope.model.residual = formatNumber(resi);
								$scope.model.deposit = formatNumber($scope.model.deposit);
							}
						} else {
							$scope.model.residual = 0;
						}
					}
					
					$scope.redirectToCreateBill = function() {
						$('#modalCreateBill').modal('hide');
						
						$localStorage.clientContext.transfer = mstrTransactionID;
						var url = window.location.href;
						url = url.substring(0, url.lastIndexOf("/"));
			            $window.open(url + '/createInvoiceSale', '_blank');
			        };

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

function valid_numbers(e) {
    var key = e.keyCode;
    if  (key >=48 && key <= 57)
            return true; 
     else return false;
}

function isValidDate(dateString) {
    // First check for the pattern
    if(!/^\d{1,2}\/\d{1,2}\/\d{4}$/.test(dateString))
        return false;

    // Parse the date parts to integers
    var parts = dateString.split("/");
    var day = parseInt(parts[0], 10);
    var month = parseInt(parts[1], 10);
    var year = parseInt(parts[2], 10);

    // Check the ranges of month and year
    if(year < 1000 || year > 3000 || month == 0 || month > 12)
        return false;

    var monthLength = [ 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31 ];

    // Adjust for leap years
    if(year % 400 == 0 || (year % 100 != 0 && year % 4 == 0))
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

       return negativeSign + (j ? i.substr(0, j) + thousands : '') + i.substr(j).replace(/(\d{3})(?=\d)/g, "" + thousands) + (decimalCount ? decimal + Math.abs(amount - i).toFixed(decimalCount).slice(2) : "");
    } catch (e) {
    	
    }
};