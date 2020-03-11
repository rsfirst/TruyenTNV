app_vnm.factory('ctk_stockInputFromCenter', function($http, $translate) {
	return {
		create_ticket : function(data, callback) {
			$http.post(eim_url + '/bs/ticket', data).success(callback).error(function(callback) {
				App.unblockUI("#stockInputFromCenter");
				bootbox.alert($translate.instant('vnm.messages.validate.ProductOrder.All.SV-0010'));
			});
		},
		getShipments : function(shopId, staffId, receiptNo, status, fromDate, toDate, listShipments) {
			$http.post(
					eim_url + '/bs/stockInputFromCenter/getShipment?shopId=' + shopId + '&staffId=' + staffId + '&receiptNo=' + receiptNo + '&status=' + status
							+ '&fromDate=' + fromDate + '&toDate=' + toDate).success(listShipments).error(function(callback) {
				App.unblockUI("#stockInputFromCenter");
				bootbox.alert($translate.instant('vnm.messages.validate.ProductOrder.All.SV-0010'));
			});
		},
		getShipmentDetail : function(receiptNo, listOfShipmentDetail) {
			$http.post(eim_url + '/bs/stockInputFromCenter/getShipmentDetail?' + 'receiptNo=' + receiptNo).success(listOfShipmentDetail).error(function(callback) {
				App.unblockUI("#stockInputFromCenter");
				bootbox.alert($translate.instant('vnm.messages.validate.ProductOrder.All.SV-0010'));
			});
		},
		confirmReceivedShipment : function(shopId, selectedShipmentNo, staffId, response) {
			$http.post(
					eim_url + '/bs/stockInputFromCenter/goodReceiptSimple?' + 'shopId=' + shopId + '&selectedShipmentNo=' + selectedShipmentNo + '&staffId='+ staffId).success(response).error(function(callback) {
				App.unblockUI("#stockInputFromCenter");
				bootbox.alert($translate.instant('vnm.messages.validate.ProductOrder.All.SV-0010'));
			});
		},
		createReport : function(m_param1, m_param2, m_param3, m_param4, m_param5, templateFile, fileType, fileName, destinationPath, typeOfReport, result) {
			$http.get(
					eim_url + '/bs/reportEngine/createReport?' + 'm_param1=' + m_param1 + '&m_param2=' + m_param2 + '&m_param3=' + m_param3 + '&m_param4='
							+ m_param4 + '&m_param5=' + m_param5 + '&templateFile=' + templateFile + '&fileType=' + fileType + '&fileName=' + fileName
							+ '&destinationPath=' + destinationPath + '&typeOfReport=' + typeOfReport, {
						responseType : 'arraybuffer'
					}).success(result).error(function(callback) {
				App.unblockUI("#stockInputFromCenter");
				bootbox.alert($translate.instant('vnm.messages.validate.ProductOrder.All.SV-0010'));
			});
		},
		extractReport : function(fileType, fileName, typeOfReport, listParams, result) {
			$http.get(
					eim_url + '/bs/reportEngine/extractReport?' + 'fileType=' + fileType + '&fileName=' + fileName + '&typeOfReport=' + typeOfReport
							+ '&listParams= ' + listParams, {
						responseType : 'arraybuffer'
					}).success(result).error(function(callback) {
				App.unblockUI("#stockInputFromCenter");
				bootbox.alert($translate.instant('vnm.messages.validate.ProductOrder.All.SV-0010'));
			});
		},
		exportFile : function(data, callback) {
			var url = eim_url + "/bs/report/exportFile?reportInput=" + data;
			$http.get(url, {
				responseType : 'arraybuffer'
			}).success(callback).error(function(callback) {
				App.unblockUI("#stockInputFromCenter");
				bootbox.alert($translate.instant('vnm.messages.validate.ProductOrder.All.SV-0010'));
			});
		}
	}
});

app_vnm.controller('ctrl-stockInputFromCenter', function($scope, $rootScope, $translate, $compile, $timeout, $uibModal, $location, $window, FileUploader,
		$filter, NgTableParams, $localStorage, ctk_stockInputFromCenter) {
	
	$scope.model = {};
	$scope.eposMsg = [ $translate.instant('vnm.messages.validate.inventoryMsg.confirmShipment.unapproved'),
			$translate.instant('vnm.messages.validate.inventoryMsg.confirmShipment.approved') ];
	$scope.listStatus = [ {
		'Id' : '',
		'Title' : 'Tất cả'
	}, {
		'Id' : '0',
		'Title' : 'Chưa nhập'
	}, {
		'Id' : '1',
		'Title' : 'Đã nhập'
	} ];
	$scope.totalItemCount = 0;
	$scope.model.status = $scope.listStatus[0].Id;
	$scope.model.fromDate = '01-JAN-2009';
	$scope.model.toDate = $filter('date')(new Date(), 'dd-MMM-yyyy');
	$scope.validationOptions = {
		debounce : 1500,
		preValidateFormElements : true,
		rules : {
			SubscriberName : {
				required : true,
				maxlength : 255
			},
			NPRegistrationName : {
				required : true,
				maxlength : 255
			},
			DocumentNumber : {
				required : true,
				maxlength : 11
			},
			DocumentIssueDate : {
				required : true,
				maxlength : 11
			},
			DocumentIssuePlace : {
				required : true,
				maxlength : 11
			},
			SubscriberRepresentative : {
				required : true,
				maxlength : 255
			}
		},
		messages : {
			SubscriberName : {
				required : $translate.instant('vnm.messages.validate.subscriberName.required'),
				maxlength : "Tên thuê bao không vượt quá 255 ký tự."
			},
			NPRegistrationName : {
				required : "Yêu cầu nhập tên đăng ký NP",
				maxlength : "Tên đăng ký NP không vượt quá 255 ký tự."
			},
			DocumentNumber : {
				required : "Yêu cầu nhập số định danh",
				maxlength : "Số định danh không vượt quá 11 ký tự."
			},
			DocumentIssueDate : {
				required : "Yêu cầu nhập ngày cấp định danh",
				maxlength : "Ngày cấp định danh không vượt quá 11 ký tự."
			},
			DocumentIssuePlace : {
				required : "Yêu cầu nhập nơi cấp định danh",
				maxlength : "Nơi cấp định danh không vượt quá 11 ký tự."
			},
			SubscriberRepresentative : {
				required : "Yêu cầu nhập tên đại diện thuê bao",
				maxlength : "Tên đại diện thuê bao không vượt quá 255 ký tự."
			}
		}
	}

	$scope.searchShipment = function() {
		App.blockUI({
			target : "#stockInputFromCenter",
			boxed : true,
			message : 'Loading...'
		});
		ctk_stockInputFromCenter.getShipments($localStorage.clientContext.shop.shopId, $localStorage.clientContext.shop.staffId, StringUtilNVLWithDefault(
				$scope.model.numberShip, ""), $scope.model.status, StringUtilNVLWithDefault($("#fromDate").val(), ""), StringUtilNVLWithDefault($("#toDate")
				.val(), ""), function(result) {
			if (StringUtilNVLWithDefault(result.status, '0') != '0') {
				App.unblockUI("#stockInputFromCenter");
				bootbox.alert($translate.instant('vnm.messages.validate.inventoryMsg.confirmShipment.' + result.messages));
			} else {
				$scope.tableShipment = new NgTableParams({}, {
					dataset : result
				});
				$scope.totalItemCount = result.length;
				$scope.tableShipmentDetail = new NgTableParams({}, {
					dataset : []
				});
				$scope.selectedShipment = null;
				$scope.tableShipmentDetail.reload();
				App.unblockUI("#stockInputFromCenter");
			}
		});
	}
	$scope.getDetailInfo = function(item) {
		$scope.selectedShipment = item;
		App.blockUI({
			target : "#stockInputFromCenter",
			boxed : true,
			message : 'Loading...'
		});
		ctk_stockInputFromCenter.getShipmentDetail(item.cmd_code, function(detailList) {
			if (StringUtilNVLWithDefault(detailList.status, '0') != '0') {
				App.unblockUI("#stockInputFromCenter");
				$scope.tableShipmentDetail = new NgTableParams({}, {
					dataset : []
				});
				bootbox.alert($translate.instant('vnm.messages.validate.inventoryMsg.confirmShipment.' + detailList.messages));
			} else {
				$scope.tableShipmentDetail = new NgTableParams({}, {
					dataset : detailList
				});
				App.unblockUI("#stockInputFromCenter");
			}
		});
	}

	$scope.checkStartEndDate = function(startDate, endDate) {
		$scope.errMessage = '';
		var curDate = new Date();

		if (new Date(startDate) > new Date(endDate)) {
			$scope.errMessage = 'End Date should be greater than start date';
			return false;
		}
		if (new Date(startDate) < curDate) {
			$scope.errMessage = 'Start date should not be before today.';
			return false;
		}
	};

	$scope.save = function() {
		App.blockUI({
			target : "#stockInputFromCenter",
			boxed : true,
			message : 'Loading...'
		});
		if ($scope.selectedShipment) {
			if ($scope.selectedShipment.cmd_status == '0') {
				ctk_stockInputFromCenter.confirmReceivedShipment($localStorage.clientContext.shop.shopId, $scope.selectedShipment.cmd_code,
						$localStorage.clientContext.shop.staffId, function(response) {
							$scope.selectedShipment = null;

							if (StringUtilNVLWithDefault(response.status, '0') != '0') {
								App.unblockUI("#stockInputFromCenter");
								var contentMsg = $translate.instant('vnm.messages.validate.inventoryMsg.confirmShipment.' + response.messages);
								if (StringUtilNVLWithDefault(response.guideInfor, '') != '') {
									contentMsg = contentMsg.replace('~description~', response.guideInfor);
								}
								
								bootbox.alert(contentMsg);
							} else {
								App.unblockUI("#stockInputFromCenter");
								bootbox.alert($translate.instant('vnm.messages.validate.inventoryMsg.confirmShipment.SUCCESS'));
							}
						});
			} else {
				App.unblockUI("#stockInputFromCenter");
				bootbox.alert($translate.instant('vnm.messages.validate.inventoryMsg.confirmShipment.PCK-A0009'));
			}
		} else {
			App.unblockUI("#stockInputFromCenter");
			bootbox.alert($translate.instant('vnm.messages.validate.inventoryMsg.confirmShipment.required'));
		}
	}
	$scope.print = function() {
		App.blockUI({
			target : "#stockInputFromCenter",
			boxed : true,
			message : 'Loading...'
		});
		// var listParams = $localStorage.clientContext.shop.shopId + ';' +
		// StringUtilNVLWithDefault($scope.model.numberShip,"AL") + ';' +
		// StringUtilNVLWithDefault($("#fromDate").val(),"") + ';' +
		// StringUtilNVLWithDefault($("#toDate").val(),"");
		var ReportInput = {
			"m_param01" : $localStorage.clientContext.shop.shopId,
			"m_param02" : StringUtilNVLWithDefault($scope.model.numberShip, "AL"),
			"m_param03" : $("#fromDate").val(),
			"m_param04" : $("#toDate").val(),
			"fileTempName" : 'ImportGoodFromCenter_tpl',
			"fileType" : '.xlsx'
		};
		// ctk_stockInputFromCenter.extractReport('.xlsx','reportForShop','InputFromCenterTemplate',listParams,
		// function(result,status,header,config)
		// {
		// App.unblockUI("#stockInputFromCenter");
		// if(StringUtilNVLWithDefault(result.status,'1') != '1')
		// {
		// var contentMsg = $translate.instant('vnm.messages.validate.inventoryMsg.exportForStaff.' + result.messages);
		// if(StringUtilNVLWithDefault(result.guideInfor,'') != '')
		// {
		// contentMsg = contentMsg.replace('~description~',result.guideInfor);
		// }
		// bootbox.alert(contentMsg);
		// }
		// else
		// {
		// var file = new Blob([result], {type: header('Content-Type')});
		// var objectUrl = URL.createObjectURL(file);
		//					
		// var a = document.createElement("a");
		// a.style = "display: none";
		// a.href = objectUrl;
		// a.download = header('MyDownloadFile') + header('FileType');
		// a.click();
		// window.URL.revokeObjectURL(objectUrl);
		// }
		// }
		// );
		App.blockUI({
			target : "#stockInputFromCenter",
			boxed : true,
			message : 'loading...'
		});
		ctk_stockInputFromCenter.exportFile(encodeURI(JSON.stringify(ReportInput)), function(result, status, header, config) {
			if (StringUtilNVLWithDefault(result.status, '1') != '1') {
				App.unblockUI("#stockInputFromCenter");
				bootbox.alert($translate.instant('vnm.messages.validate.report.' + result.messages));
			} else {
				App.unblockUI("#stockInputFromCenter");

				download(new Blob([ result ]), header('MyDownloadFile') + header('FileType'), header["Content-Type"]);

				// var file = new Blob([ result ], {
				// type : header('Content-Type')
				// });
				// var objectUrl = URL.createObjectURL(file);
				//
				// var a = document.createElement("a");
				// a.style = "display: none";
				// a.href = objectUrl;
				// a.download = header('MyDownloadFile') + header('FileType');
				// a.click();
				// window.URL.revokeObjectURL(objectUrl);
			}
		});
	}
});
function StringUtilNVL(val) {
	if (val == undefined || val == null)
		return "";
	return $.trim(val);
}
function StringUtilNVLWithDefault(val, defaultValue) {
	if (val == '' || val == undefined || val == null)
		return defaultValue;
	return $.trim(val);
}
