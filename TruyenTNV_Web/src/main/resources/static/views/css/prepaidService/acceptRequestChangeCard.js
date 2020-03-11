var EMPTY_VALUE = "";
var MAX_LENGTH_MSISDN = 11;
var MIN_LENGTH_MSISDN = 10;
var SELECT_NONE_INDEX = -1;

var TYPE_SERVICE_CHANGE_SIM = '1';
var TYPE_SERVICE_UPDATE_CUSTOMER_INFO = '3';

var STATUS_APPROVED = '2';

var oldValueTypeOfService = "";

app_vnm.factory('acceptRequestChangeCard', function($http, $translate) {
	return {
		searchRequestChangeCard : function(requestId, requestStatus, stkNumber, phoneNumber, userCreate, createDate, serial, type, callback) {
			var url = eim_url + '/bs/Custome/searchRequestChangeCard?requestId=' + requestId
				+ '&requestStatus=' + requestStatus + '&stkNumber=' + stkNumber + '&phoneNumber=' + phoneNumber + '&userCreate='
				+ userCreate + '&createDate=' + createDate + '&serial=' + serial + '&type=' + type;
			$http.get(url).success(callback).error(function(callback) {
				//						$('#approvePOError').modal('show');	
				App.unblockUI("#acceptRequestChangeCardContent");
				bootbox.alert($translate.instant('vnm.messages.validate.ProductOrder.All.SV-0010'));
			});
		},
		initStaff : function(shopId, callback) {
			var url = eim_url + '/bs/Custome/getStaff?shopId=' + shopId;
			$http.get(url).success(callback).error(function(callback) {
				//						$('#approvePOError').modal('show');	
				App.unblockUI("#acceptRequestChangeCardContent");
				bootbox.alert($translate.instant('vnm.messages.validate.ProductOrder.All.SV-0010'));
			});
		},
		rejectChangeCardAirtime : function(inputDetail, callback) {
			var url = eim_url + "/bs/Custome/rejectChangeCardAirtime";
			$http.post(url, inputDetail).success(callback).error(function(callback) {
				App.unblockUI("#acceptRequestChangeCardContent");
				closeOverLay();
				bootbox.alert(status + " " + $translate.instant('vnm.messages.error.connection'));
			});
		},
		changeChangeCardAirtime : function(inputDetail, callback) {
			var url = eim_url + "/bs/Custome/changeRequestAirtime";
			$http.post(url, inputDetail).success(callback).error(function(callback) {
				App.unblockUI("#acceptRequestChangeCardContent");
				closeOverLay();
				bootbox.alert(status + " " + $translate.instant('vnm.messages.error.connection'));
			});
		},
		destroyChangeCardAirtime : function(inputDetail, callback) {
			var url = eim_url + "/bs/Custome/destroyChangeCardAirtime";
			$http.post(url, inputDetail).success(callback).error(function(callback) {
				App.unblockUI("#acceptRequestChangeCardContent");
				closeOverLay();
				bootbox.alert(status + " " + $translate.instant('vnm.messages.error.connection'));
			});
		},
		openViewIMGChangeService : function(requestId, name, callback) {
			var url = eim_url + "/bs/Custome/getImgChangeCard?requestId=" + requestId + '&name=' + name;
			$http.post(url).success(callback).error(function(requestId, name, status, headers, config) {
				App.unblockUI("#contentMain");
				bootbox.alert(status + " " + $translate.instant('vnm.messages.error.connection'));
			});
		},
		getListApdomainBlock : function(callback) {
			var url = eim_url + "/bs/Custome/getListApDomainBlock";
			$http.get(url).success(callback).error(function(callback) {
				App.unblockUI("#acceptRequestChangeCardContent");
				bootbox.alert($translate.instant('vnm.messages.validate.ProductOrder.All.SV-0010'));
			});
		},
		blockChangeCardAirtime : function(inputDetail, callback) {
			var url = eim_url + "/bs/Custome/lockRequestAirtime";
			$http.post(url, inputDetail).success(callback).error(function(callback) {
				App.unblockUI("#acceptRequestChangeCardContent");
				closeOverLay();
				bootbox.alert(status + " " + $translate.instant('vnm.messages.error.connection'));
			});
		},
		getRequestChangeCardAirtimeDetail : function(requestId, callback) {
			var url = eim_url + '/bs/Custome/getRequestChangeCardAirtimeDetail?requestId=' + requestId;
			$http.get(url).success(callback).error(function(callback) {
				//						$('#approvePOError').modal('show');	
				App.unblockUI("#acceptRequestChangeCardContent");
				bootbox.alert($translate.instant('vnm.messages.validate.ProductOrder.All.SV-0010'));
			});
		},
		getChangeCardPhysicalDetail : function(requestId, callback) {
			var url = eim_url + '/bs/Custome/getChangeCardPhysicalDetail?requestId=' + requestId;
			$http.get(url).success(callback).error(function(callback) {
				//						$('#approvePOError').modal('show');	
				App.unblockUI("#acceptRequestChangeCardContent");
				bootbox.alert($translate.instant('vnm.messages.validate.ProductOrder.All.SV-0010'));
			});
		},
	}
});

app_vnm.controller('ctr-acceptRequestChangeCard', function($scope, $rootScope, $translate, $compile, $timeout, $uibModal, $location, $window, FileUploader, $filter, $http,
	NgTableParams, $localStorage, acceptRequestChangeCard) {
	
	var requestDetail = [];
	var requestDetailPhy = [];
	$scope.totalRequest = 0;
	$scope.totalRequestDetail = 0;
	$scope.totalRequestPhyDetail = 0;
	$scope.model = {};
	$scope.model.code = {};
	$scope.listStaff = [];
	$scope.itemSelected = [];
	$scope.itemSelectedDetail = [];
	$scope.stSelected = [];
	$scope.stStockData = [];
	$scope.isBtnReject = true;
	$scope.isBtnDestroy = true;
	$scope.isBtnLock = true;
	$scope.isBtnChange = true;
	$scope.imgBody = [];
	$scope.showDetailAirtimeResquest = false;
	$scope.showDetailPhysicalResquest = false;
	//1190 
	$scope.requestDetailQuery = [];

	App.blockUI({
		target : "#acceptRequestChangeCardContent",
		boxed : true,
		message : 'loading...'
	});
	acceptRequestChangeCard.initStaff($localStorage.clientContext.shop.shopId, function(dataStaff) {
		if (dataStaff.length > 0) {
			$scope.listStaff = dataStaff;
		}
		App.unblockUI("#acceptRequestChangeCardContent");
	});

	$scope.searchRequestChangeCard = function() {
		clearTextBoxDetail();
		$scope.showDetailAirtimeResquest = false;
		$scope.showDetailPhysicalResquest = false;
		$scope.totalRequestDetail = 0;
		$scope.totalRequestPhyDetail = 0;
		lstResult = [];
		requestDetail = [];
		$scope.stSelected = [];

		$scope.detailPurchase = new NgTableParams({}, {
			dataset : requestDetail
		});

		var createDate = StringUtilNVLWithDefault($("#createDate").val(), "");
		if (!checkDate(createDate)) {
			closeOverLay();
			bootbox.alert($translate.instant('vnm.form_pepaid_customers.acceptRequestChangeCard.date.is.number'));
			return;
		}
		var requestId = StringUtilNVLWithDefault($scope.model.requestId);
		if (!isNumbericInteger(requestId) && requestId != undefined) {
			closeOverLay();
			bootbox.alert($translate.instant('vnm.form_pepaid_customers.acceptRequestChangeCard.requestId.is.number'));
			return;
		}
		if (requestId == undefined) {
			requestId = '';
		}
		var requestStatus = StringUtilNVLWithDefault($scope.model.requestStatus, "");
		var stkNumber = StringUtilNVLWithDefault($scope.model.stkNumber);
		if (!isNumbericInteger(stkNumber) && stkNumber != undefined) {
			closeOverLay();
			bootbox.alert($translate.instant('vnm.form_pepaid_customers.acceptRequestChangeCard.stk.is.number'));
			return;
		}
		if (stkNumber == undefined) {
			stkNumber = '';
		}
		var phoneNumber = StringUtilNVLWithDefault($scope.model.phoneNumber);
		if (!isNumbericInteger(phoneNumber) && phoneNumber != undefined) {
			closeOverLay();
			bootbox.alert($translate.instant('vnm.form_pepaid_customers.acceptRequestChangeCard.phone.is.number'));
			return;
		}
		if (phoneNumber == undefined) {
			phoneNumber = '';
		}
		var userCreate = '';
		if ($scope.model.code == undefined) {
			userCreate = '';
		} else {
			userCreate = StringUtilNVLWithDefault($scope.model.code.code, "");
		}
		var serial = StringUtilNVLWithDefault($scope.model.serial);
		if (!isNumbericInteger(serial) && serial != undefined) {
			closeOverLay();
			bootbox.alert($translate.instant('vnm.form_pepaid_customers.acceptRequestChangeCard.serial.is.number'));
			return;
		}
		if (serial == undefined) {
			serial = '';
		}
		var type = StringUtilNVLWithDefault($scope.model.type, "");
		App.blockUI({
			target : "#acceptRequestChangeCardContent",
			boxed : true,
			message : 'loading...'
		});

		acceptRequestChangeCard
			.searchRequestChangeCard(requestId,
				requestStatus,
				stkNumber,
				phoneNumber,
				userCreate,
				createDate,
				serial,
				type,
				function(result) {
					if (result.messages != null) {
						bootbox.alert("Xảy ra lỗi trong quá trình tìm kiếm: " + result.messages);
						App.unblockUI("#acceptRequestChangeCardContent");
					} else {
						lstResult = result;
						$scope.tableParams = new NgTableParams({
							count : 10
						}, {
							dataset : lstResult
						});

						App.unblockUI("#acceptRequestChangeCardContent");
						if (lstResult.length > 0) {
							$scope.totalRequest = lstResult.length;
						}
						else
							$scope.totalRequest = 0;
					}
				});
	}

	$scope.showDetail = function(item, index) {
		$scope.showDetailAirtimeResquest = false;
		$scope.itemSelected = item;
		$scope.isBtnDestroy = true;
		$scope.isBtnChange = true;
		resetImg($scope)
		if (item.status === '1' || item.status === '0') {
			$scope.isBtnDestroy = false;
		}
		if (item.status === '0' || item.status === '1' || item.status === '2') {
			$scope.isBtnChange = false;
		}
		clearTextBoxDetail();
		App.blockUI({
			target : "#acceptRequestChangeCardContent",
			boxed : true,
			message : 'loading...'
		});
		acceptRequestChangeCard
			.getRequestChangeCardAirtimeDetail(item.reqChangeRaggedCardId,
				function(result) {
					if (result.messages != null) {
						bootbox.alert("Xảy ra lỗi trong quá trình tìm kiếm đổi thẻ airtime: " + result.messages);
						App.unblockUI("#acceptRequestChangeCardContent");
						$scope.showDetailAirtimeResquest = false;
					} else {
						if (result.length > 0) {
							requestDetail = result;
							$scope.requestDetailQuery = result;
							$scope.totalRequestDetail = requestDetail.length;
							$scope.detailPurchase = new NgTableParams({}, {
								dataset : requestDetail
							});
							$scope.model.checkboxAdd = {
								checked : false,
								items : {}
							};

							$scope.model.checkboxRemove = {
								checked : false,
								items : {}
							};
							$scope.fillDetail(requestDetail[0], 1);
							acceptRequestChangeCard.openViewIMGChangeService(item.reqChangeRaggedCardId, item.imgsName, function(result) {
								if (result.status == '0' && result.status != undefined) {
									App.unblockUI("#acceptRequestChangeCardContent");
									bootbox.alert($translate.instant('vnm.messages.validate.prepaid.server.' + result.messages));
								} else {
									$scope.imgBody = result;
									App.unblockUI("#acceptRequestChangeCardContent");
								}
							});

						}
					}
					;
				});

		$scope.showDetailAirtimeResquest = true;
	}

	$scope.showDetailPhysical = function(item, index) {
		$scope.showDetailPhysicalResquest = false;
		$scope.itemSelected = item;
		$scope.isBtnDestroy = true;
		$scope.isBtnChange = true;
		resetImg($scope)
		if (item.status === '1' || item.status === '0') {
			$scope.isBtnDestroy = false;
		}
		if (item.status === '0' || item.status === '1') {
			$scope.isBtnChange = false;
		}
		clearTextBoxDetailPhy();
		App.blockUI({
			target : "#acceptRequestChangeCardContent",
			boxed : true,
			message : 'loading...'
		});
		acceptRequestChangeCard
			.getChangeCardPhysicalDetail(item.reqChangeRaggedCardId,
				function(result) {
					if (result.messages != null) {
						bootbox.alert("Xảy ra lỗi trong quá trình tìm kiếm đổi thẻ airtime: " + result.messages);
						App.unblockUI("#acceptRequestChangeCardContent");
						$scope.showDetailPhysicalResquest = false;
					} else {
						if (result.length > 0) {
							requestDetailPhy = result;
							$scope.totalRequestPhyDetail = requestDetailPhy.length;
							$scope.detailPurchasePhy = new NgTableParams({}, {
								dataset : requestDetailPhy
							});
							$scope.fillDetailPhy(requestDetailPhy[0], 1);
							acceptRequestChangeCard.openViewIMGChangeService(item.reqChangeRaggedCardId, item.imgsName, function(result) {
								if (result.status == '0' && result.status != undefined) {
									App.unblockUI("#acceptRequestChangeCardContent");
									bootbox.alert($translate.instant('vnm.messages.validate.prepaid.server.' + result.messages));
								} else {
									$scope.imgBody = result;
									App.unblockUI("#acceptRequestChangeCardContent");
								}
							});

						}
					}
					App.unblockUI("#acceptRequestChangeCardContent");
				});

		$scope.showDetailPhysicalResquest = true;
	}

	$scope.fillDetail = function(item, index) {
		$scope.itemSelectedDetail = item;
		$scope.model.requestIdSelected = item.reqChangeRaggedcardId;
		$scope.model.userRejectSelected = item.userReject;
		$scope.model.stkSelected = item.stk;
		$scope.model.statusOrderSelected = item.statusRequest
		=== "0" ? "Lập" : item.statusRequest === "1" ? "Từ chối" :
			item.statusRequest === "2" ? "Đang thực hiện" : item.statusRequest ===
			"3" ? "Đã thực hiện" : "Hủy";
		$scope.model.cardStatusSelected = item.cardStatus
		=== "0" ? "Lập" : item.cardStatus === "1" ? "Từ chối" :
			item.cardStatus === "2" ? "Đã khóa thẻ" : item.cardStatus ===
			"3" ? "Đã đổi thẻ" : item.cardStatus === "4" ? "Đã cộng HH" : "Hủy";
		$scope.model.phoneNumberSelected = item.phoneNumber;
		$scope.model.dateRejectSelected = $filter('date')(item.dateReject, "dd/MM/yyyy");
		$scope.model.serialSelected = item.serial;
		$scope.model.userDestroySelected = item.userDestroy;
		$scope.model.cardValueSelected = item.cardValue;
		$scope.model.dateDestroySelected = $filter('date')(item.dateDestroy, "dd/MM/yyyy");
		$scope.model.userCreateSelected = item.userCreate;
		$scope.model.userLockSelected = item.userLock;
		$scope.model.dateCreateSelected = $filter('date')(item.dateCreated, "dd/MM/yyyy");
		$scope.model.dateLockSelected = $filter('date')(item.dateLock, "dd/MM/yyyy");
		$scope.model.raggedCardStatus = item.raggedCardStatus;

	}
	
	$scope.fillDetailPhy = function(item, index) {
		$scope.itemSelectedDetail = item;
		$scope.model.requestIdPhySelected = item.requestId;
		$scope.model.stkPhySelected = item.stk;
		$scope.model.statusOrderPhySelected = item.statusRequest
		=== "0" ? "Lập" : item.statusRequest === "1" ? "Từ chối" :
			item.statusRequest === "2" ? "Đang thực hiện" : item.statusRequest ===
			"3" ? "Đã thực hiện" : "Hủy";
		$scope.model.cardStatusPhySelected = item.cardStatus
		=== "0" ? "Lập" : item.cardStatus === "1" ? "Từ chối" :
			item.cardStatus === "2" ? "Đã khóa thẻ" : item.cardStatus ===
			"3" ? "Đã đổi thẻ" : item.cardStatus === "4" ? "Đã cộng HH" : "Hủy";
		$scope.model.serialOldPhySelected = item.serialOld;
		$scope.model.dateChangePhySelected = $filter('date')(item.dateChange, "dd/MM/yyyy");
		$scope.model.serialNewPhySelected = item.serialNew;
		$scope.model.cardValuePhySelected = item.valueNew;
		$scope.model.userChangePhySelected = item.userChange;

	}
	//REJECT
	$scope.destroy = function(item) {
		item = $scope.stSelected ;
		if ($scope.stSelected.length < 1) {
			closeOverLay();
			$scope.model.errorsms = 'Bạn chưa chọn bản ghi nào!'
			bootbox.alert($scope.model.errorsms);
			return;
		}
		var modalInstance = $uibModal.open({
			animation : true,
			templateUrl : '/views/css/inventory-management/destroyDesciption.htm',
			//						templateUrl :'/views/prepaid/popup.htm',
			controller : 'destroy',
			backdrop : true,
			size : '30',
			resolve : {
				para : function() {
					return item;
				}
			}
		});
	}
	$rootScope.$on("readyDestroy", function(event, item) {
		$scope.doDestroy(item);
	});

	$scope.doReject = function(item) {
		if ($scope.stSelected.length < 1) {
			closeOverLay();
			$scope.model.errorsms = 'Bạn chưa chọn bản ghi nào!'
			bootbox.alert($scope.model.errorsms);
			return;
		}
		App.blockUI({
			target : "#acceptRequestChangeCardContent",
			boxed : true,
			message : 'loading...'
		});
		acceptRequestChangeCard.rejectChangeCardAirtime($scope.stSelected, function(result) {
			App.unblockUI("#acceptRequestChangeCardContent");

			if (result.status == '1')
				$scope.model.errorsms = 'Thực hiện từ chối thành công!';
			else
				$scope.model.errorsms = 'Xảy ra lỗi trong quá trình từ chối : ' + result.response_code;
			bootbox.alert($scope.model.errorsms);
			clearTextBoxDetail();
			$scope.searchRequestChangeCard();
		});
	}

	//END REJECT

	//DESTROY

	$scope.doDestroy = function(item) {
		var destroyed = 0;
		var destroying = 0;
		var countSelect = 0;
		$scope.stSelectedDetail = [];
		$scope.isExit = false;
		if ($scope.stSelected.length < 1) {
			closeOverLay();
			$scope.model.errorsms = 'Bạn chưa chọn bản ghi nào!'
			bootbox.alert($scope.model.errorsms);
			return;
		}
		angular.forEach($scope.requestDetailQuery, function(item) {
			if (item.cardStatus === '5') {
				destroyed = destroyed + 1;
			} else {
				destroying = destroying + 1;
			}

		});
		if ($scope.totalRequestDetail === $scope.stSelected.length) {
			angular.forEach($scope.stSelected, function(item) {
				if (item.cardStatus === '5') {
					closeOverLay();
					$scope.model.errorsms = 'Đã có bản ghi có trạng thái thẻ không thể dùng chức năng này.Mời kiểm tra lại!'
					$scope.isExit = true;
					return;
				} else {
					item.checkBoxRequest = '4';
					$scope.stSelectedDetail.push(item);
				}

			});
		} else {
			angular.forEach($scope.stSelected, function(item) {
				if (item.cardStatus === '5') {
					closeOverLay();
					$scope.model.errorsms = 'Đã có bản ghi có trạng thái thẻ không thể dùng chức năng này.Mời kiểm tra lại!'
					$scope.isExit = true;
					return;
				} else {
					countSelect = countSelect + 1;
					if ((countSelect + destroyed) === $scope.totalRequestDetail) {
						item.checkBoxRequest = '4';
					} else {
						item.checkBoxRequest = '0';
					}
					$scope.stSelectedDetail.push(item);
				}
			});
		}

		if ($scope.isExit) {
			bootbox.alert($scope.model.errorsms);
			return;
		}
		App.blockUI({
			target : "#acceptRequestChangeCardContent",
			boxed : true,
			message : 'loading...'
		});
		acceptRequestChangeCard.destroyChangeCardAirtime($scope.stSelected, function(result) {
			App.unblockUI("#acceptRequestChangeCardContent");

			if (result.status == '1')
				$scope.model.errorsms = 'Hủy yêu cầu thành công!';
			else
				$scope.model.errorsms = 'Xảy ra lỗi trong quá trình hủy yêu cầu : ' + result.response_code;
			bootbox.alert($scope.model.errorsms);
			clearTextBoxDetail();
			$scope.searchRequestChangeCard();
		});
	}
	//END DESTROY


	//BLOCK
	$scope.block = function(item) {
		item = $scope.stSelected ;
		App.blockUI({
			target : "#acceptRequestChangeCardContent",
			boxed : true,
			message : 'loading...'
		});

		acceptRequestChangeCard.getListApdomainBlock(function(result) {
			App.unblockUI("#acceptRequestChangeCardContent");

			var modalInstance = $uibModal.open({
				animation : true,
				templateUrl : '/views/inventory-management/ApDomainBlock.htm',
				//						templateUrl :'/views/prepaid/popup.htm',
				controller : 'block',
				backdrop : true,
				size : '30',
				resolve : {
					data : function() {
						return item;
					},
					lstComment : function() {
						return result;
					}
				}
			});
		});
	}

	//CHANGE

	$scope.doChange = function() {
		$scope.stSelectedDetail = [];
		$scope.isExit = false;
		var changed = 0;
		var changing = 0;
		var countSelect = 0;
		if ($scope.stSelected.length < 1) {
			closeOverLay();
			$scope.model.errorsms = 'Bạn chưa chọn bản ghi nào!'
			bootbox.alert($scope.model.errorsms);
			return;
		}
		angular.forEach($scope.requestDetailQuery, function(item) {
			if (item.cardStatus === '2') {
				changed = changed + 1;
			} else {
				changing = changing + 1;
			}

		});
		if ($scope.totalRequestDetail === $scope.stSelected.length) {
			angular.forEach($scope.stSelected, function(item) {
				if (item.cardStatus === '2') {
					closeOverLay();
					$scope.model.errorsms = 'Đã có bản ghi có trạng thái thẻ không thể dùng chức năng này.Mời kiểm tra lại!'
					$scope.isExit = true;
					return;
				} else {
					item.checkBoxRequest = '3';
					$scope.stSelectedDetail.push(item);
				}

			});
		} else {
			angular.forEach($scope.stSelected, function(item) {
				if (item.cardStatus === '2') {
					closeOverLay();
					$scope.model.errorsms = 'Đã có bản ghi có trạng thái thẻ không thể dùng chức năng này.Mời kiểm tra lại!'
					$scope.isExit = true;
					return;
				} else {
					countSelect = countSelect + 1;
					if ((countSelect + changed) === $scope.totalRequestDetail) {
						item.checkBoxRequest = '3';
					} else {
						item.checkBoxRequest = '2';
					}
					$scope.stSelectedDetail.push(item);
				}
			});
		}

		if ($scope.isExit) {
			bootbox.alert($scope.model.errorsms);
			return;
		}
		App.blockUI({
			target : "#acceptRequestChangeCardContent",
			boxed : true,
			message : 'loading...'
		});
		acceptRequestChangeCard.changeChangeCardAirtime($scope.stSelectedDetail, function(result) {
			App.unblockUI("#acceptRequestChangeCardContent");

			if (result.status == '1')
				$scope.model.errorsms = result.messages;
			else
				$scope.model.errorsms = 'Xảy ra lỗi trong quá trình khóa thẻ : ' + result.messages;
			bootbox.alert($scope.model.errorsms);
			clearTextBoxDetail();
			$scope.searchRequestChangeCard();
		});
	}
	//END CHANGE
	$rootScope.$on("readyBlock", function(event, item) {
		$scope.doBlock(item);
	});

	$scope.doBlock = function(item) {
		if ($scope.stSelected.length < 1) {
			closeOverLay();
			$scope.model.errorsms = 'Bạn chưa chọn bản ghi nào!'
			bootbox.alert($scope.model.errorsms);
			return;
		}
		App.blockUI({
			target : "#acceptRequestChangeCardContent",
			boxed : true,
			message : 'loading...'
		});
		acceptRequestChangeCard.blockChangeCardAirtime($scope.stSelected, function(result) {
			App.unblockUI("#acceptRequestChangeCardContent");

			if (result.status == '1')
				$scope.model.errorsms = 'Thực hiện khóa thẻ thành công!';
			else
				$scope.model.errorsms = 'Xảy ra lỗi trong quá trình khóa thẻ : ' + result.messages;
			bootbox.alert($scope.model.errorsms);
			clearTextBoxDetail();
			$scope.searchRequestChangeCard();
		});
	}

	//END BLOCK


	$scope.selectAll = function(collection) {
		// if there are no items in the 'selected' array,
		// push all elements to 'selected'
		if ($scope.stSelected.length === 0) {

			angular.forEach(collection, function(val) {

				$scope.stSelected.push(val);

			});

		// if there are items in the 'selected' array,
		// add only those that ar not
		} else if ($scope.stSelected.length > 0
			&& $scope.stSelected.length != $scope.stStockData.length) {

			angular.forEach(collection, function(val) {

				var found = getPositionOfObject(val,
					$scope.stSelected);

				if (found == -1)
					$scope.stSelected.push(val);

			});

		// Otherwise, remove all items
		} else {

			$scope.stSelected = [];

		}
	}
	$scope.select = function(item) {
		var found = getPositionOfObject(item,
			$scope.stSelected);
		if (found == -1) {
			item.userSession = $localStorage.clientContext.fullName;
			item.ipSession = location.hostname;
			$scope.stSelected.push(item);
		} else
			$scope.stSelected.splice(found, 1);

	}
	$scope.selectNotIn = function(item) {
		var found = getPositionOfObjectBySerial(item, $scope.stSelected);
		if (found == -1) {
			item.userSession = $localStorage.clientContext.fullName;
			item.ipSession = location.hostname;
			$scope.stSelected.push(item);
		} else
			$scope.stSelected.splice(found, 1);

		if ($scope.stSelected.length == requestDetail.length) {
			$scope.model.checkboxAdd.checked = true;
		} else {
			$scope.model.checkboxAdd.checked = false;
		}
	}
	$scope.checkAllAdd = function() {
		$scope.stSelected = [];
		angular.forEach(requestDetail, function(item) {
			$scope.model.checkboxAdd.items[item.raggedCardId] = $scope.model.checkboxAdd.checked;
			if ($scope.model.checkboxAdd.checked) {
				item.userSession = $localStorage.clientContext.fullName;
				item.ipSession = location.hostname;
				$scope.stSelected.push(item);
			}
		})
	}

	$scope.checkAllRemove = function() {
		$scope.stToStockSelected = [];
		angular.forEach(requestDetail, function(item) {
			$scope.model.checkboxRemove.items[item.raggedCardId] = $scope.model.checkboxRemove.checked;
			if ($scope.model.checkboxRemove.checked) {
				$scope.stSelected.push(item)
			}
		})
	}
	$scope.imgZoom = function(event) {
		$('.imagepreview').attr('src', $(event)[0].target.src);
		$('#imagemodal').modal('show');
	}
	function resetImg($scope) {
		$scope.imgBody = [];
	}
	function clearTextBoxDetail() {
		$scope.model.requestIdSelected = '';
		$scope.model.userRejectSelected = '';
		$scope.model.stkSelected = '';
		$scope.model.statusOrderSelected = '';
		$scope.model.phoneNumberSelected = '';
		$scope.model.dateRejectSelected = '';
		$scope.model.serialSelected = '';
		$scope.model.userDestroySelected = '';
		$scope.model.cardValueSelected = '';
		$scope.model.dateDestroySelected = '';
		$scope.model.userCreateSelected = '';
		$scope.model.userLockSelected = '';
		$scope.model.dateCreateSelected = '';
		$scope.model.dateLockSelected = '';
		$scope.model.raggedCardStatus = '';
		$scope.model.cardStatusSelected = '';
		$scope.imgBody = [];
		var requestDetailReset = [];
		$scope.totalRequestDetail = requestDetailReset.length;
		$scope.detailPurchase = new NgTableParams({}, {
			dataset : requestDetailReset
		});
	}
	function clearTextBoxDetailPhy() {
		$scope.model.requestIdPhySelected = '';
		$scope.model.cardStatusPhySelected = '';
		$scope.model.stkPhySelected = '';
		$scope.model.statusOrderPhySelected = '';
		$scope.model.serialOldPhySelected = '';
		$scope.model.serialNewPhySelected = '';
		$scope.model.cardValuePhySelected = '';
		$scope.model.userChangePhySelected = '';
		$scope.model.dateChangePhySelected = '';
		var requestDetailPhyReset = [];
		$scope.totalRequestPhyDetail = requestDetailPhyReset.length;
		$scope.detailPurchasePhy = new NgTableParams({}, {
			dataset : requestDetailPhyReset
		});
		$scope.imgBody = [];
	}
	$scope.RequestStatusSource = [
		{
			'Id' : '',
			'Title' : 'ALL'
		}, {
			'Id' : '0',
			'Title' : 'Lập'
		}, {
			'Id' : '1',
			'Title' : 'Từ chối'
		}, {
			'Id' : '2',
			'Title' : 'Đang thực hiện'
		}, {
			'Id' : '3',
			'Title' : 'Đã thực hiện'
		}, {
			'Id' : '4',
			'Title' : 'Hủy'
		},
	];
	$scope.RequestStatusChangeSource = [
		{
			'Id' : '0',
			'Title' : 'Đổi thẻ bằng Airtime'
		}, {
			'Id' : '1',
			'Title' : 'Đổi thẻ bằng thẻ vật lý'
		},
	];

});
app_vnm.controller('destroy', function($scope, $rootScope, $compile, $uibModal, $confirm, $uibModalInstance, acceptRequestChangeCard, para) {

	$scope.model = {};
	$scope.close = function() {
		$uibModalInstance.dismiss('cancel');
	};
	$scope.submit = function() {
		var finalReason = "";
		finalReason = $scope.model.otherReason;
		if (finalReason == undefined || finalReason == EMPTY_VALUE) {
			closeOverLay();
			$scope.model.errorsms = 'Bạn phải nhập lý do hủy!'
			bootbox.alert($scope.model.errorsms);
			return;
		}
		$uibModalInstance.dismiss('cancel');
		submitReject(para, finalReason);
	};

	$scope.changedReason = function(item) {
		$scope.fuckingReason = item;
		$scope.enableOtherReason = false;
	};
	$scope.enableOther = function() {
		$scope.fuckingReason = "";
		$scope.enableOtherReason = true;
	};

	submitReject = function(requestDetail, reason) {
		angular.forEach(requestDetail, function(item) {
			item.rejectDesciption = reason;
		})
		$rootScope.$emit("readyDestroy", requestDetail);
	}
});
app_vnm.controller('block', function($scope, $rootScope, $compile, $uibModal, $confirm, $uibModalInstance, acceptRequestChangeCard, data, lstComment) {

	$scope.model = {};
	$scope.options = lstComment;
	$scope.close = function() {
		$uibModalInstance.dismiss('cancel');
	};
	$scope.submit = function() {
		var finalReason = "";
		finalReason = $scope.model.fuckingReason;
		$uibModalInstance.dismiss('cancel');
		submitBlock(data, finalReason);
	};

	$scope.changedReason = function(item) {
		$scope.fuckingReason = item;
		$scope.enableOtherReason = false;
	};
	$scope.enableOther = function() {
		$scope.fuckingReason = "";
		$scope.enableOtherReason = true;
	};

	submitBlock = function(requestDetail, reason) {
		angular.forEach(requestDetail, function(item) {
			item.stringComment = reason;
		})
		$rootScope.$emit("readyBlock", requestDetail);
	}
});
app_vnm.directive('csSelect', function() {
	return {
		require : '^stTable',
		template : '<input type="checkbox"/>',
		scope : {
			row : '=csSelect'
		},
		link : function(scope, element, attr, ctrl) {

			element.bind('click', function(evt) {
				scope.$apply(function() {
					ctrl.select(scope.row, 'multiple');
				});
			});

			scope.$watch('row.isSelected', function(newValue, oldValue) {
				if (newValue === true) {
					element.parent().addClass('st-selected');
					element.find('input').prop('checked', true);
				} else {
					element.parent().removeClass('st-selected');
					element.find('input').prop('checked', false);
				}
			});
		}
	};
});
app_vnm.directive('stSelectAll', function() {
	return {
		restrict : 'E',
		template : '<input type="checkbox" ng-model="isAllSelected" />',
		scope : {
			all : '='
		},
		link : function(scope, element, attr) {

			scope.$watch('isAllSelected', function() {
				scope.all.forEach(function(val) {
					val.isSelected = scope.isAllSelected;
				})
			});

			scope.$watch('all', function(newVal, oldVal) {
				if (oldVal) {
					oldVal.forEach(function(val) {
						val.isSelected = false;
					});
				}

				scope.isAllSelected = false;
			});
		}
	}
});
app_vnm.directive('skSelectAll', function() {
	return {
		restrict : 'E',
		template : '<input type="checkbox" ng-model="isAllckSelected" />',
		scope : {
			kall : '='
		},
		link : function(scope, element, attr) {

			scope.$watch('isAllckSelected', function() {
				scope.kall.forEach(function(val) {
					val.isSelected = scope.isAllckSelected;
				})
			});

			scope.$watch('kall', function(newVal, oldVal) {
				if (oldVal) {
					oldVal.forEach(function(val) {
						val.isSelected = false;
					});
				}

				scope.isAllckSelected = false;
			});
		}
	}
});

function checkDate(value) {
	if (value == undefined || value == "")
		return true;
	if ($.trim(value) == "")
		return true;
	var valueDate = $.trim(value);
	return moment(valueDate, 'DD/MM/YYYY', true).isValid();
}
function StringUtilNVLWithDefault(val, defaultValue) {
	if (val == '' || val == undefined || val == null)
		return defaultValue;
	return $.trim(val);
}
function StringUtilNVL(val) {
	if (val == undefined || val == null) return "";
	return $.trim(val);
}
function createTimeStamp() {
	var theMoment = moment();
	var millisTimeStamp = theMoment.valueOf();
	return millisTimeStamp;
}
function getPositionOfObject(searchItem, arrDes) {
	var x = 0;
	var found = false;
	for (x = 0; x < arrDes.length; x++) {
		if (searchItem === arrDes[x]) {
			found = true;
			break;
		}
	}
	if (!found) {
		x = -1;
	}
	return x;
}
function getPositionOfObjectBySerial(searchItem, arrDes) {
	var x = 0;
	var found = false;
	for (x = 0; x < arrDes.length; x++) {
		if (searchItem.raggedCardId === arrDes[x].raggedCardId) {
			found = true;
			break;
		}
	}
	if (!found) {
		x = -1;
	}
	return x;
}