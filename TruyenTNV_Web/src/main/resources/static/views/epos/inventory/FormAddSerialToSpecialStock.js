app_vnm.factory('fctFormAddSerialToSpecialStock', function($http, $translate) {
	return {
		actionAddSerial : function(data, callback) {
			var url = eim_url + "/epos/inventory/formAddSerialToSpecialStock/actionAddSerial";
			$http.post(url, data).success(callback).error(function(data, status, headers, config) {
				App.unblockUI("#contentMain");
				bootboxAlertFocus(status + " " + $translate.instant('vnm.messages.error.connection'), "", $translate.instant("vnm.lable.vnm.name"), "");
			});
		},
	}
});

app_vnm.controller('ctrl-FormAddSerialToSpecialStock', function($scope, $rootScope, $translate, $compile, $timeout, $uibModal, $location, $window, FileUploader, $filter, $http, NgTableParams,
		$localStorage, fctFormAddSerialToSpecialStock) {

	window.document.title = $translate.instant('vnm.FormAddSerialToSpecialStock.page.title');

	$scope.model = {};
	$scope.limitCbb = 20;
	$scope.lstGoods = []; // Cbb mat hang
	$scope.lstShops = []; // Cbb cua hang
	$scope.lstStates = []; // Cbb trang thai
	$scope.lstStatuss = []; // Cbb tinh trang

	$scope.lstAfterChecked = [];
	$scope.lstBeforeChecked = [];
	$scope.lstAfterCheckedObj = {};
	$scope.lstData = [];
	$scope.lstCheckDiffAfterCheckedBox = [];
	$scope.lstFileSucess = [];
	$scope.checkDisabledOnChekBox = true;

	$scope.loadDefault = function() {
		closeOverLay();
	}

	$scope.lstTablesGoods = [];
	$scope.lstTransSerials = [];
	$scope.itemSelected = {};
	var stockId = $localStorage.clientContext.sessionStockID;

	// khoi tao
	var initialize = function() {
		overLoading();
		$scope.loadDefault();
	}

	initialize();

	// create table mat hang
	function createDataTableGoods(dataItem) {
		oTableFListSerial = $('#tableFListSerial').DataTable({

            "responsive": true,
            "destroy": true,
            "paginationType": "full_numbers",
            "data": dataItem,
            "processing": false,
            "serverSide": false,
            "bFilter": true,
            "paging": true,
            "bLengthChange": true,
            "bPaginate": true,
            "className": "text-center",
            "bSort": true,
            "info": true,
			"select" : {
				style : 'single',
				info : false
			},
            "scrollX": true,
			dom: 'Bfrtip',
			 buttons: [
			    {
			    	filename: $translate.instant('vnm.FormAddSerialToSpecialStock.page.title')+' '+getCurrentDate()+createTimeStamp(),
		            extend: 'excelHtml5',
		            text: '<i class="fa fa-file-excel-o" style="margin-right: 5px;"> </i>'+ $translate.instant('vnm.FormAddSerialToSpecialStock.label.button.excel'),
		            exportOptions: {
		                columns: ':visible'
		            },
		            customizeData: function(data) {
		                for(var i = 0; i < data.body.length; i++) {
		                  for(var j = 0; j < data.body[i].length; j++) {
		                    data.body[i][j] = '\u200C' + data.body[i][j];
		                  }
		                }
		              },
		            className: 'btn btn-primary btn-primary-200' ,
		            init: function(api, node, config) {
		                $(node).removeClass('dt-button')
		             },
		             enabled :false,
		        }],
			"scrollY" : 200,
			"columns" : [ {
				"targets" : 0,
				"data" : null,
				"searchable" : false,
				"orderable" : false,
				"className" : "text-center",
				"mData" : "stt",
				render : function(data, type, full, meta) {
					return '<input type="checkbox" id="myCheckBox' + data + '" class="check" name="myCheckbox" ng-click="onCheckedClick()" value="' + data + '">';
				},
			}, {
				"mData" : "serial",
				"render" : function(data, type, row) {
					return "<div data-toggle='tooltip' class='text-wrap width-200' title='" + data + "'>" + StringUtilNVL(data) + "</div>";
				}
			}, {
				"mData" : "status",
				"render" : function(data, type, row) {
					return "<div data-toggle='tooltip' class='text-wrap width-200' title='" + data + "'>" + StringUtilNVL(data) + "</div>";
				}
			}, {
				"mData" : "reason",
				"render" : function(data, type, row) {
					return "<div data-toggle='tooltip' class='text-wrap width-200' title='" + data + "'>" + StringUtilNVL(data) + "</div>";
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

		$(".dt-buttons").css("float", "left");
		$(".dt-buttons").css("margin-top", "0px");
		$(".buttons-excel").css("background-color", "#f38a42");
		$(".buttons-excel").css("border-color", "#f56400");
		$(".buttons-excel").css("color", "#fff");
		$(".buttons-excel").css("height", "30px");
		 
		$('#tableFListSerial tbody').off().on('click', 'tr', function(e, dt, type, indexes) {
			$(this).removeClass('selected');
			var rowData = oTableFListSerial.row(this).data();
			oTableFListSerial.$('tr.selected').removeClass('selected');
			$(this).addClass('selected');
			$scope.itemSelected = rowData;
			$('#myCheckBox' + $scope.itemSelected.stt + '').on('change', function() {
				if ($(this).is(':checked')) {
					if ($scope.lstAfterChecked.length == 0) {
						
						
						if($scope.lstAfterChecked.indexOf($scope.lstAfterChecked) != -1){
							
						}else{
							$scope.lstAfterChecked.push($scope.itemSelected);
							
							
							if ($scope.lstData[0] != stockId) {
								$scope.lstData.push(stockId);
							}
							for (var i = 0; i < $scope.lstAfterChecked.length; i++) {
								$scope.lstData.push($scope.lstAfterChecked[i].serial);
							}
						}
						

					} else {

						for(var i =0;i<$scope.lstAfterChecked.length;i++){
							if($scope.lstAfterChecked[i].serial.indexOf($scope.itemSelected.serial) != -1){
								
							}else{
								$scope.lstAfterChecked.push($scope.itemSelected);
								if ($scope.lstData[0] != stockId) {
									$scope.lstData.push(stockId);
								}

								$scope.lstData.push($scope.itemSelected.serial);
							}
						}
						
						
	
					}
					for (var k = 0; k < $scope.lstAfterChecked.length; k++) {
						if ($scope.lstBeforeChecked.indexOf($scope.lstAfterChecked[k]) != -1) {
							$scope.lstBeforeChecked.splice($scope.lstBeforeChecked.indexOf($scope.lstAfterChecked[k]), 1);

						}

					}
					$scope.lstCheckDiffAfterCheckedBox = $scope.lstBeforeChecked;
				} else {
					var s = $scope.lstAfterChecked.indexOf($scope.itemSelected);
					if (s != -1) {
						$scope.lstAfterChecked.splice(s, 1);
						$scope.lstData.splice(s, 1);
					}
				}
			});
		});
// $compile(angular.element('#tableFListSerial'))($scope);
	}
	$scope.onCheckedClick = function(){
		
	}
	$scope.btnExecuteOnclick = function() {
		if ($scope.validData() == false) {
			return false;
		} else {
			App.blockUI({
				target : "#contentMain",
				boxed : true,
				message : 'loading...'
			});
			fctFormAddSerialToSpecialStock.actionAddSerial($scope.lstData, function(result) {
				if (result.length > 0) {
					$scope.lstData = [];

					var listAfterActionAddSerial = result.concat($scope.lstCheckDiffAfterCheckedBox);
					for (var i = 0; i < $scope.lstBeforeChecked.length; i++) {
						listAfterActionAddSerial[i].stt = i;
					}
					createDataTableGoods(result);
					$scope.resetCheckBoxUnCheck = function() {
						$(':checkbox').each(function() {
							this.checked = false;
						});
						$scope.lstData = [];
					}
					$scope.lstBeforeChecked = listAfterActionAddSerial;
					$scope.lstAfterChecked = [];
					$scope.lstData = [];
					checkDisabledOnChekBox = true;
					var table = $('#tableFListSerial').DataTable();
					 
					table.buttons().enable();
					App.unblockUI("#contentMain");
				} else {
					App.unblockUI("#contentMain");
					bootboxAlertFocus("Không tìm thấy dữ liệu!", "", $translate.instant("vnm.lable.vnm.name"), "");
				}
			});
		}
	}

	$scope.validData = function() {
		if ($scope.lstAfterChecked == null || $scope.lstAfterChecked == undefined || $scope.lstAfterChecked.length <= 0) {
			bootboxAlertFocus($translate.instant('vnm.FormAddSerialToSpecialStock.error.mustSelectCard'), "", $translate.instant("vnm.lable.vnm.name"), "");
			return false;
		}
		return true;
	}

	// Button chi tiet
	$scope.lstViewTransSerial = [];
	$scope.lstStockName = [];

	// create table view serial

	// show popup
	$scope.showModalFunction = function(idModal) {
		$('#' + idModal).modal('show');
		$('#' + idModal).on('shown.bs.modal', function(e) {
			$.fn.dataTable.tables({
				visible : true,
				api : true
			}).columns.adjust();
		});
	}

	// hide popup
	$scope.hideModalFunction = function(idModal) {
		$('#' + idModal).modal('hide');
	}

	// button in

	// Button upload file
	$scope.onClickFLoadFile = function() {
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
				var TEMPLATE_ERROR = $translate.instant('vnm.messages.validate.UPLOAD-0009');
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
				if (item.fromSerial.length < 19) {
					return;
				} else {
					$scope.fileSuccess.push(item);
				}
			});
			if ($scope.fileSuccess.length <= 0) {
				bootboxAlertFocus($translate.instant('vnm.dialogButtonDetail.isEmptyFile'), "", $translate.instant("vnm.lable.vnm.name"), "");
				closeOverLay();
				return;
			}

			// add file
			$scope.addFile();
			$scope.uploadAllFile();
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

	$scope.uploadAllFile = function() {
		overLoading();
		$scope.lstFileSucess = [];
		for (var i = 0; i < $scope.fileSuccess.length; i++) {
			var lstFileSucessObj = {
				stt : i,
				serial : $scope.fileSuccess[i].fromSerial,
				status : '',
				reason : '',
			};
			$scope.lstFileSucess.push(lstFileSucessObj);
		}

		$scope.model.nameFile = $scope.model.linkFile;
		createDataTableGoods($scope.lstFileSucess);
		$scope.lstBeforeChecked = $scope.lstFileSucess;
		$scope.checkDisabledOnChekBox = false;
		$scope.hideModalFunction("modalAddSerial");
		closeOverLay();

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

	$scope.checkAllPreOrders = function() {
		$('#checkAllCheckBox').on('change', function() {
			if ($(this).prop('checked')) {
				$(':checkbox').each(function() {
					this.checked = true;
				});
				$scope.lstData = [];
				$scope.lstAfterChecked = [];
				if ($scope.lstAfterChecked.length == 0) {

					$scope.lstAfterChecked = $scope.lstBeforeChecked;
					if ($scope.lstData[0] != stockId) {
						$scope.lstData.push(stockId);
					}
					for (var i = 0; i < $scope.lstAfterChecked.length; i++) {
						$scope.lstData.push($scope.lstAfterChecked[i].serial);
					}

				} else {
					$scope.lstAfterChecked = [];
					$scope.lstData = [];
					for (var i = 0; i < $scope.lstAfterChecked.length; i++) {
						$scope.lstAfterChecked = $scope.lstBeforeChecked;
						if ($scope.lstData[0] != stockId) {
							$scope.lstData.push(stockId);
						}
						for (var j = 0; j < $scope.lstAfterChecked.length; j++) {
							$scope.lstData.push($scope.lstAfterChecked[j].serial);
						}
					}
				}
			} else {
				$(':checkbox').each(function() {
					this.checked = false;
				});
				$scope.lstAfterChecked = [];
				$scope.lstData = [];

				
			}
		});

	}

	$scope.resetCheckBoxUnCheck = function() {
		$(':checkbox').each(function() {
			this.checked = false;
		});
		$scope.lstAfterChecked = [];
		$scope.lstData = [];
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

function bootboxAlertFocus(message, focusId, title, icon) {
	var mesIcon = 'fa fa-exclamation-circle';
	if (icon != null && icon != undefined && icon != '') {
		if (icon == 'success') {
			mesIcon = 'fa fa-check-circle'
		}
	}
	bootbox.alert({
		size : "medium",
		message : "<i class='" + mesIcon + "' style='font-size:20px; color:orange; margin-right:20px;'></i>" + message,
		title : title,
	}).on('hidden.bs.modal', function(event) {
		var myEl = document.getElementById(focusId);
		var angularEl = angular.element(myEl);
		angularEl.focus();
	}).find(".modal-dialog").css({
		// 'background-color': '#f99',
		// 'font-weight' : 'bold',
		// 'color': '#F00',
		// 'font-size': '2em',
		'width' : '450px',
		'margin-top' : function() {
			var w = $(window).height();
			var h = w/ 5;
			return h + "px";
		}
	});
};
function getCurrentDate() {
	var today = new Date();
	var dd = String(today.getDate()).padStart(2, '0');
	var mm = String(today.getMonth() + 1).padStart(2, '0');
	var yyyy = today.getFullYear();

	return today = dd + '/' + mm + '/' + yyyy;
}

function createTimeStamp() {
	var theMoment = moment();
	var millisTimeStamp = theMoment.valueOf();
	return millisTimeStamp;
}