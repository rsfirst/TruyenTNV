var rootPath = '/bs/cinvoice/printByBatch';
var lastStatus = '';

app_vnm.factory('printInvoiceByBatchAfter', function($http, $translate) {
	return {
		search : function(billInvoiceObject, callback) {
			var url = eim_url + rootPath + '/search';
			$http.post(url, billInvoiceObject).success(callback).error(
					function(callback) {
						bootbox.alert($translate
								.instant('vnm.messages.error.connection'));
						App.unblockUI("#printInvoiceByBatchAfter");
					});
		},
		getListStaff : function(shopId, callback) {
			var url = eim_url + "/bs/invoice/getPanelStaffList?shopId=" + shopId;
			$http.get(url).success(callback).error(
					function(callback) {
						bootbox.alert($translate
								.instant('vnm.messages.error.connection'));
						App.unblockUI("#printInvoiceByBatchAfter");
					});
		},
		print : function(cInvoiceObject, callback) {
			var url = eim_url + rootPath + '/print';
			$http.post(url, cInvoiceObject).success(callback).error(
					function(callback) {
						bootbox.alert($translate
								.instant('vnm.messages.error.connection'));
						App.unblockUI("#printInvoiceByBatchAfter");
					});
		},
		create : function(billInvoice, callback) {
			var url = eim_url + rootPath + '/create';
			$http.post(url, billInvoice).success(callback).error(
					function(callback) {
						bootbox.alert($translate
								.instant('vnm.messages.error.connection'));
						App.unblockUI("#printInvoiceByBatchAfter");
					});
		}
	}
});

app_vnm.controller('ctrl-printInvoiceByBatchAfter',
		function($scope, $rootScope, $translate, $compile, $timeout, $uibModal,
				$location, $window,FileUploader, $filter, $http, NgTableParams,
				$localStorage, printInvoiceByBatchAfter) {
			$scope.CInvoiceSelected = [];
			$scope.dataTable = [];
			$scope.model = {};
			$scope.model.checkAll = {
		        checked: false
		    };
			
			// init load list staff
			$scope.getStaffList = function() {
		        $scope.listStaff = [];
		        App.blockUI({
		            target : "#printInvoiceByBatchAfter",
		            boxed : true,
		            message : 'Loading...'
		        });
		        let staffId = $localStorage.clientContext.shop.staffId;
		        let shopId = $localStorage.clientContext.shop.shopId;
		        printInvoiceByBatchAfter.getListStaff(shopId, function(result) {
		            if (result.length > 0) {
		                $scope.listStaff = result;
		                $scope.model.creater = $scope.listStaff.find(x => x.staffId === staffId);
		                App.unblockUI("#printInvoiceByBatchAfter");
		            } else {
		                $scope.listStaff = [];
		                bootbox.alert("Không tìm thấy dữ liệu khách hàng!");
		                App.unblockUI("#printInvoiceByBatchAfter");
		            }
		        });
		    }
			
			// init all page
			var initialize = function() {
				 $("#create").prop('disabled', true);
				 $("#G").prop('disabled', true);
				 $("#C").prop('disabled', true);
				 $scope.model.checkboxPrintCombine = false;
				$scope.listStatus = [ /*
										 * { 'code' : 'ALL', 'name' :
										 * $translate.instant('vnm.print_invoice_batch_after.status.ALL') },
										 */ {
					'code' : '0',
					'name' : $translate.instant('vnm.print_invoice_batch_after.status.0')
				}, {
					'code' : '1',
					'name' : $translate.instant('vnm.print_invoice_batch_after.status.1')
				}, {
					'code' : '2',
					'name' : $translate.instant('vnm.print_invoice_batch_after.status.2')
				}, {
					'code' : '4',
					'name' : $translate.instant('vnm.print_invoice_batch_after.status.4')
				} ];
				$scope.model.statusSearch = $scope.listStatus[0];
				$scope.model.searchFromDate = $filter('date')(new Date(),
						'dd/MM/yyyy');
				$scope.model.searchToDate = $filter('date')(new Date(),
						'dd/MM/yyyy');
				$scope.getStaffList();
			}
			
			initialize();
			
			// Doc File
			$scope.dataLstAccount = [];
			$scope.model.fileName = "";
			var uploaderFileAcc = $scope.uploaderFileAcc = new FileUploader({
				url: eim_url+'/bs/cinvoice/printByBatch/getListAccountFromFile'
			});
			// Another user-defined filter set max file size
			uploaderFileAcc.filters.push({
				'name' : 'enforceMaxFileSize',
				'fn' : function(item) {
					var fileName = item.name;
					var sizeFile = item.size;
					var fileExtValue = fileName.split(".").pop();

					if (fileExtValue.toUpperCase() != "xlsx".toUpperCase() && fileExtValue.toUpperCase() != "xls".toUpperCase()) {
						var TEMPLATE_ERROR = $translate.instant('vnm.print_invoice_batch_after.error.C00069');
						 bootbox.alert(TEMPLATE_ERROR);
						return false;
					}
					return true;
				}
			});
			uploaderFileAcc.onAfterAddingAll = function(items){
				if(items!=null){
					uploaderFileAcc.uploadAll();	
				}
			}
			$scope.uploadFileAccount = function(uploaderListIn, event){
				$scope.removeAllItemListAccount();
			}
			$scope.removeAllItemListAccount =  function(){
				// xóa danh sách Account
				$scope.dataLstAccount = [];			
				// xóa file name
				$scope.model.fileName = "";
				uploaderFileAcc.clearQueue();
			}
			$scope.removeAllItem =  function(){
				$scope.dataLstAccount = [];
				uploaderFileAcc.clearQueue();
				$scope.model.fileName = "";
			}
			uploaderFileAcc.onBeforeUploadItem  = function(item){
				overLoading();
				$scope.model.fileName = item._file.name;
				
				item.headers = {
						Authorization: 'Bearer '+ $localStorage.clientContext.token
				};
				var form_data = new FormData();
				item.formData.push(form_data);
			}
			uploaderFileAcc.onSuccessItem = function (fileItem, response, status, headers) {			
				$scope.dataLstAccount = response;
				if ($scope.dataLstAccount.length>1000) {
			            $scope.dataLstAccount = [];
			            $scope.removeAllItem();
			            bootbox.alert($translate.instant('vnm.print_invoice_batch_after.error.C00070'));
			      } else if ($scope.dataLstAccount.length<1) {
			        	 $scope.removeAllItem();
			            bootbox.alert($translate.instant('vnm.print_invoice_batch_after.error.C00071'));
			      }
				console.log($scope.dataLstAccount);
				closeOverLay();
			};
			// end
			// Selected row
			$scope.checkAllInvoice = function() {
				$scope.CInvoiceSelected = [];
				angular.forEach($scope.dataTable, function(item) {
					item.checked = $scope.model.checkAll.checked;
				})
				if ($scope.isAllRowChecked($scope.dataTable)) {
					for (var i = 0; i < $scope.dataTable.length; i++) {
						$scope.CInvoiceSelected.push($scope.dataTable[i]);
					}
				} else {
					$scope.CInvoiceSelected = [];
				}
			}
			$scope.isAllRowChecked = function(listDataTable) {
				var resultCheck = false;

				if (listDataTable.length == 0) {
					return false;
				}
				var countRowCheck = 0;
				for (var i = 0; i < listDataTable.length; i++) {
					if (listDataTable[i].checked == true) {
						countRowCheck++;
					}
				}

				if (countRowCheck == listDataTable.length) {
					resultCheck = true;
				}
				return resultCheck;
			}
			
			$scope.selectOrRemoveCInvoiceItem = function(item) {
				var isHeaderGoodItem = $scope.isAllRowChecked($scope.dataTable);
				if (isHeaderGoodItem) {
					$scope.model.checkAll.checked = true;
					$scope.CInvoiceSelected = [];
					for (var i = 0; i < $scope.dataTable.length; i++) {
						$scope.CInvoiceSelected.push($scope.dataTable[i]);
					}
				} else {
					$scope.model.checkAll.checked = false;
					if (item.checked == true) {
						$scope.CInvoiceSelected.push(item);
					} else {
						var indexValue = $scope.CInvoiceSelected.indexOf(item);
						$scope.CInvoiceSelected.splice(indexValue,1);
					}

				}
			}
			// end
			$scope.formatStatus = function(status) {
				var statusValue = null;

				if (undefined == status || "" == $.trim(status)) {
					return statusValue;
				}
				status = $.trim(status);
				statusValue=$translate.instant('vnm.print_invoice_batch_after.status.'+status);
				return statusValue;
			}
			// search data
			$scope.search = function() {
				 App.blockUI({
		            target : "#printInvoiceByBatchAfter",
		            boxed : true,
		            message : 'Loading...'
		        });
				 $scope.CInvoiceSelected = [];
				 $scope.dataTable = [];
				$scope.model.checkboxPrintCombine = false;
				lastStatus = '';
				if ($("#searchFromDate").val() != '' && $("#searchToDate").val() != '') {
		            if (moment($("#searchFromDate").val(), "DD/MM/YYYY") > moment($("#searchToDate").val(), "DD/MM/YYYY")) {
		                bootbox.alert($translate.instant('vnm.print_invoice_batch_after.error.C0003'));
		                App.unblockUI("#printInvoiceByBatchAfter");
		                return;
		            }
		        } else {
		            bootbox.alert($translate.instant('vnm.print_invoice_batch_after.error.C0001'));
		            App.unblockUI("#printInvoiceByBatchAfter");
		            return;
		        }
				$scope.model.accountNumber=StringUtilNVL($scope.model.accountNumber).replace(/,/g, "");
				let lstAccount=$scope.model.accountNumber;
				
				if( $scope.dataLstAccount.length>0)
					{
					$scope.model.accountNumber="";
					$scope.model.staffName="";	
					lstAccount="";
					for(let i=0;i<$scope.dataLstAccount.length;i++)
						{
						lstAccount +=$scope.dataLstAccount[i];
							if(i!=$scope.dataLstAccount.length-1)
								{
								lstAccount +=",";
								}
						}
					}
				
				let billInvoiceObject = {
					status : $scope.model.statusSearch.code,
					mdn : lstAccount,
					customerName : $scope.model.staffName,
					fromDate :$("#searchFromDate").val(),
					toDate : $("#searchToDate").val(),
					staffId : $scope.model.creater.staffId,
					shopId : $localStorage.clientContext.shop.shopId
				};
				printInvoiceByBatchAfter.search(billInvoiceObject, function(
						result) {
					let status = result.code;

					if (status != 'C0000') {
						bootbox.alert($translate.instant('vnm.print_invoice_batch_after.error.' + result.code));
						App.unblockUI("#printInvoiceByBatchAfter");
						return;
					}
					if(result.payload == null || result.payload.length == 0){
						 $("#create").prop('disabled', true);
						 $("#G").prop('disabled', true);
						 $("#C").prop('disabled', true);
						bootbox.alert($translate.instant('vnm.print_invoice_batch_after.error.C0005'));
						App.unblockUI("#printInvoiceByBatchAfter");
						return;
					}
					
					if($scope.model.statusSearch.code == 'ALL') {
						$("#create").prop('disabled', false);
						$("#G").prop('disabled', false);
						$("#C").prop('disabled', false);
					}else if($scope.model.statusSearch.code == '0') {
						$("#create").prop('disabled', false);
						$("#G").prop('disabled', true);
						$("#C").prop('disabled', true);
					}else if($scope.model.statusSearch.code == '1' || $scope.model.statusSearch.code == '2') {
						$("#create").prop('disabled', true);
						$("#G").prop('disabled', false);
						$("#C").prop('disabled', false);
					}else if($scope.model.statusSearch.code == '4') {
						$("#create").prop('disabled', true);
						$("#G").prop('disabled', true);
						$("#C").prop('disabled', true);
					}
					$scope.model.checkAll.checked = false;
					$scope.dataTable = result.payload;
					App.unblockUI("#printInvoiceByBatchAfter");
				});
			}
			
			// search data
			$scope.print = function(name) {
				let arrayData = [];
				let index = 0;
				 App.blockUI({
		            target : "#printInvoiceByBatchAfter",
		            boxed : true,
		            message : 'Loading...'
		        });
					if($scope.CInvoiceSelected.length == 0 ){
						bootbox.alert($translate.instant('vnm.print_invoice_batch_after.error.CP0001'));
						App.unblockUI("#printInvoiceByBatchAfter");
						return;
					}
				for(let i = 0; i < $scope.CInvoiceSelected.length;i ++){
						let cInvoiceObject = {
							cInvoiceId : $scope.CInvoiceSelected[i].invoiceNo,
							shopCode : $localStorage.clientContext.shop.shopCode,
							invoiceType: name,
							invoiceStatus : $scope.CInvoiceSelected[i].status,
							invoiceId : $scope.CInvoiceSelected[i].invoiceId,
						};
						arrayData[index] = cInvoiceObject;
						index++;
					
				}

				printInvoiceByBatchAfter.print(arrayData, function(
						result) {
					let status = result.code;
					
					if(status == 'C9999'){
						bootbox.alert(result.description);
						App.unblockUI("#printInvoiceByBatchAfter");
						return;
					}
					
					let payload = result.payload;
					
					if(payload.length == 0){
						bootbox.alert($translate.instant('vnm.print_invoice_batch_after.error.CP0002'));
						App.unblockUI("#printInvoiceByBatchAfter");
						return;
					}
					for(let i =0;i< $scope.dataTable.length;i ++){
						var row = $scope.dataTable[i];
						var invoiceId = row.invoiceId;
						for (var j = 0; j < result.payload.length; j++) {
							if (invoiceId == result.payload[j].invoiceId) {
								if('C0000' == result.payload[j].result){
									$scope.dataTable[i].cInvoice.linkPrint = result.payload[j].linkPrint;
									$scope.dataTable[i].statusName =  $translate.instant('vnm.print_invoice_batch_before.PRINT.SUCCESS');
									$scope.dataTable[i].note  =	result.payload[j].cInvoiceId;
								}else {
									$scope.dataTable[i].statusName = $translate.instant('vnm.print_invoice_batch_before.PRINT.FAIL');
									$scope.dataTable[i].note = $translate.instant('vnm.print_invoice_batch_after.error.' + result.payload[j].result);
								}
							}
							
						}
						
					}
					App.unblockUI("#printInvoiceByBatchAfter");
				});
			}
			
			// search data
			$scope.printCInvoice = function() {
				let arrayData = [];
				let index = 0;
				 App.blockUI({
		            target : "#printInvoiceByBatchAfter",
		            boxed : true,
		            message : 'Loading...'
		        });
				if($scope.CInvoiceSelected.length == 0  ){
					bootbox.alert($translate.instant('vnm.print_invoice_batch_after.error.CP0001'));
					App.unblockUI("#printInvoiceByBatchAfter");
					return;
				}
				for(let i = 0; i < $scope.CInvoiceSelected.length;i ++){
					if($scope.CInvoiceSelected[i].status == '0' || $scope.CInvoiceSelected[i].status == '4'){
						continue;
					}
						let cInvoiceObject = {
							cInvoiceId : $scope.CInvoiceSelected[i].invoiceNo,
							shopCode : $localStorage.clientContext.shop.shopCode,
							invoiceType: 'G',
							invoiceStatus : $scope.CInvoiceSelected[i].status,
							invoiceId : $scope.CInvoiceSelected[i].invoiceId,
						};
						arrayData[index] = cInvoiceObject;
						index++;				
				}
				printInvoiceByBatchAfter.print(arrayData, function(
						result) {
					let status = result.code;
					
					if(status == 'C9999'){
						bootbox.alert(result.description);
						App.unblockUI("#printInvoiceByBatchAfter");
						return;
					}
					let payload = result.payload;
					
					if(payload.length == 0){
						bootbox.alert($translate.instant('vnm.print_invoice_batch_after.error.CP0002'));
						App.unblockUI("#printInvoiceByBatchAfter");
						return;
					}
					
					for (var i = 0; i < $scope.dataTable.length; i++) {
						var row = $scope.dataTable[i];
						var invoiceId = row.invoiceId;
						for (var j = 0; j < result.payload.length; j++) {
							if (invoiceId == result.payload[j].invoiceId) {
								if ('C0000'==result.payload[j].result) {
									$scope.dataTable[i].cInvoice.linkPrint  =result.payload[j].linkPrint;
									$scope.dataTable[i].statusName=$translate.instant('vnm.print_invoice_batch_before.PRINT.SUCCESS');
									$scope.dataTable[i].note=result.payload[j].cInvoiceId;
								} else {
									$scope.dataTable[i].statusName =$translate.instant('vnm.print_invoice_batch_before.PRINT.FAIL');
									$scope.dataTable[i].note =$translate.instant('vnm.print_invoice_batch_after.error.' + result.payload[j].result);
								}
							}
							
						}
					}
					App.unblockUI("#printInvoiceByBatchAfter");
				});
			}
			
			
			// onCinvoice create
			$scope.create = function(){
				let index = 0;
				 App.blockUI({
		            target : "#printInvoiceByBatchAfter",
		            boxed : true,
		            message : 'Loading...'
		        });
				let isSuccessed = false;
				if($scope.CInvoiceSelected.length == 0 ){
					bootbox.alert($translate.instant('vnm.print_invoice_batch_after.error.CP0005'));
					App.unblockUI("#printInvoiceByBatchAfter");
					return;
				}
				let isChkPrintCombine="";
				if ($scope.model.checkboxPrintCombine) {
					isChkPrintCombine = "COMBINE";
				} else {
					isChkPrintCombine = "NOT_COMBINE";
				}
				for(let i = 0; i < $scope.CInvoiceSelected.length;i ++){
					if($scope.CInvoiceSelected[i].status != '0'){
						bootbox.alert($translate.instant('vnm.print_invoice_batch_after.error.CP0006'));
						App.unblockUI("#printInvoiceByBatchAfter");
						return;
					}
					$scope.CInvoiceSelected[i].chkPrintCombine=isChkPrintCombine;
					$scope.CInvoiceSelected[i].shopCode = $localStorage.clientContext.shop.shopCode;
					$scope.CInvoiceSelected[i].cInvoice = {
						 				userCreate : $localStorage.clientContext.shop.shopCode
								   }
				}
				printInvoiceByBatchAfter.create($scope.CInvoiceSelected, function(result) {
					let status = result.code;
					
					if(status == 'C9999'){
						bootbox.alert(result.description);
						App.unblockUI("#printInvoiceByBatchAfter");
						return;
					}
					
					let payload = result.payload;
					for (var i = 0; i < $scope.dataTable.length; i++) {
						var row = $scope.dataTable[i];
						var invoiceId = row.invoiceId;
						for (var j = 0; j < result.payload.length; j++) {
							if (invoiceId == result.payload[j].invoiceId) {
								if ('C0000'==result.payload[j].statusName) {
									isSuccessed = true;
									$scope.dataTable[i].status = 1;
									$scope.dataTable[i].invoiceNo = result.payload[j].invoiceNo;
									$scope.dataTable[i].statusName = $translate.instant('vnm.print_invoice_batch_after.error.C0000');
								} else {
									$scope.dataTable[i].statusName =$translate.instant('vnm.print_invoice_batch_before.PRINT.FAIL');
									$scope.dataTable[i].note =$translate.instant('vnm.print_invoice_batch_after.error.' + result.payload[j].cInvoice.result);
								}
							}
							
						}
					}
					
					if(isSuccessed) {
						 bootbox.confirm({
		                    message: $translate.instant('vnm.print_invoice_batch_after.dialog.confirm.cinvoice'),
		                    buttons: {
		                        confirm: {
		                        	
		                            label: $translate.instant('vnm.print_invoice_batch_after.dialog.confirm.label.agree'),
		                            className: 'btn-success'
		                        },
		                        cancel: {
		                            label: $translate.instant('vnm.print_invoice_batch_after.dialog.confirm.label.cancle'),
		                            className: 'btn-danger'
		                        }
		                    },
		                    callback: function (result)
		                    {
		                        if(result)
		                        {
		                            $scope.printCInvoice();
		                        }
		                    }
		                });
					}
					App.unblockUI("#printInvoiceByBatchAfter");
				});
		    }
		});

function StringUtilNVL(val) {
	if (val == undefined || val == null)
		return "";
	return $.trim(val);
}
