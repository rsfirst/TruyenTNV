app_vnm.factory('trbill', function($http, $translate) {
	return {
		searchtraccount : function( data,callback) {
			var url = eim_url + "/bs/FormTrBill/search";
			
			$http.post(url,data).success(callback).error(function(data, status, headers, config) {
//				closeOverLay();
				bootbox.alert(status + " " + $translate.instant('vnm.messages.error.connection'));
				App.unblockUI("#contentMain");
			});
		},
		payment : function( data,callback) {
			var url = eim_url + "/bs/FormTrBill/payment";
			
			$http.post(url,data).success(callback).error(function(data, status, headers, config) {
//				closeOverLay();
				bootbox.alert(status + " " + $translate.instant('vnm.messages.error.connection'));
				App.unblockUI("#contentMain");
			});
		},
		payment1 : function( data,callback) {
			var url = eim_url + "/bs/FormTrBill/payment1";
			
			$http.post(url,data).success(callback).error(function(data, status, headers, config) {
//				closeOverLay();
				bootbox.alert(status + " " + $translate.instant('vnm.messages.error.connection'));
				App.unblockUI("#contentMain");
			});
		},
		deposit : function( data,callback) {
			var url = eim_url + "/bs/FormTrBill/deposit";
			
			$http.post(url,data).success(callback).error(function(data, status, headers, config) {
				bootbox.alert(status + " " + $translate.instant('vnm.messages.error.connection'));
				App.unblockUI("#contentMain");
			});
		},
		depositprint : function( data,callback) {
			var url = eim_url + "/bs/FormTrBill/printDepositInvoice";
			var cfg = { responseType: 'blob' };
			$http.post(url,data,cfg).success(callback).error(function(data, status, headers, config) {
				bootbox.alert(status + " " + $translate.instant('vnm.messages.error.connection'));
				App.unblockUI("#contentMain");
			});
		},
		createcinvoice : function( data,callback) {
			var url = eim_url + "/bs/FormTrBill/createCinvoice";
			
			$http.post(url,data).success(callback).error(function(data, status, headers, config) {
//				closeOverLay();
				bootbox.alert(status + " " + $translate.instant('vnm.messages.error.connection'));
				App.unblockUI("#contentMain");
			});
		},
		printcinvoice : function( data,callback) {
			var url = eim_url + "/bs/FormTrBill/print";
			
			$http.post(url,data).success(callback).error(function(data, status, headers, config) {
//				closeOverLay();
				bootbox.alert(status + " " + $translate.instant('vnm.messages.error.connection'));
				App.unblockUI("#contentMain");
			});
		},
		refundCheckBalance : function( data,callback) {
			var url = eim_url + "/bs/FormTrBill/refundCheckBalance";
			
			$http.post(url,data).success(callback).error(function(data, status, headers, config) {
				bootbox.alert(status + " " + $translate.instant('vnm.messages.error.connection'));
				App.unblockUI("#contentMain");
			});
		},
		checkExistInvoie : function( data,callback) {
			var url = eim_url + "/bs/FormTrBill/checkExistInvoie";		
			$http.post(url,data).success(callback).error(function(data, status, headers, config) {
				bootbox.alert(status + " " + $translate.instant('vnm.messages.error.connection'));
				App.unblockUI("#contentMain");
			});
		},
		getDealerCredit : function(strTransType, strDelivererShopID, callback) {
            var url = eim_url + "/bs/FormTrBill/checkDealerCredit?transType="+ strTransType + "&delivererShopID=" + strDelivererShopID;
            $http.get(url).success(callback).error(function (callback)
            {
                bootbox.alert($translate.instant('vnm.messages.error.connection'));
                App.unblockUI("#contentMain");
            });
        },
        updatePayment : function( data,callback) {
			var url = eim_url + "/bs/FormTrBill/updatePatment";
			
			$http.post(url,data).success(callback).error(function(data, status, headers, config) {
				bootbox.alert(status + " " + $translate.instant('vnm.messages.error.connection'));
				App.unblockUI("#contentMain");
			});
		},
		getPaymentMethod : function(callback) {
            var url = eim_url + "/bs/FormTrBill/getPaymentMethod";
            $http.get(url).success(callback).error(function (callback)
            {
                bootbox.alert($translate.instant('vnm.messages.error.connection'));
                App.unblockUI("#contentMain");
            });
        },	
	}
});

var MODAL_DETAIL_PAYMENT = "modalDetailPayment";
var MODAL_CONFIRM_PAYMENT="confirmDialog";
var MODAL_CREATE_CINVOICE_PRINT="printCinvoiceConfirm";
var MODAL_CREATE_CINVOICE_CONFIRM="createCinvoiceDialog";
var MODAL_DEPOSIT_REFUND = "modalDepositRefundDialog";
var MODAL_CONFIRM_DEPOSIT = "confirmDepositDialog";
var MODAL_DEPOSIT_PRINT="createDepositReceiptDialog";


app_vnm.controller('ctrl-trbill', function($scope, $rootScope, $translate, $compile, $timeout, $uibModal, $location, $window, FileUploader, $filter, $http,
		NgTableParams, $localStorage,trbill) {
	
	$scope.disableMoneyPay = true;
	$scope.disableshowModalDetailFuncBtn = true;
	$scope.showQuit=false;
	$scope.showDepositBtn=true;
	$scope.disableDepositRefundDialog = true;
	$scope.disableConfirmPaymentDialog= true;
	$scope.disableSaveMoneyPay = true;
	$scope.model = {};
	$scope.selectedTrBillAccount={};
	$scope.selectedTrHistory={};
	$scope.trBillChildAccountLst={};
	$scope.tRBillInvoice = {};
	var lstTRBillInvoice = [];
	$scope.cinvoice = {};
	$scope.lstIndex = [];
	$scope.DepositRefund={};
	$scope.disableCycle=true;
	$scope.disablePaymentMethod=true
	$scope.model.payAll = true;
	$scope.showBillBtn = false;
	
	$scope.disableBtnChargeBill = true;
	$scope.disablePayAll = true;
	$scope.showStartChargeBillBtn = true;
	$scope.lstpaymentMethod=[];
	$scope.searchType=[{"code":"sodienthoai","value":"Số điện thoại"},{"code":"sotaikhoan","value":"Tài khoản"},{"code":"tenkhachhang","value":"Tên khách hàng"}];
	
	$scope.DepositRefund.depositrefund=[{"code":"DCHT","value":"Đặt cọc","label":"Dat Coc"},{"code":"TDHT","value":"Trả đặt cọc","label":"Tra Dat Coc"}];
	$scope.model.searchType=$scope.searchType[0];
	$scope.model.selectedStartCycle={};
	$scope.model.selectedEndCycle={};
	$scope.checkDealerCredit = function (){
		var strAlertAmount='';
		var strLimitAmount='';
		var strBalance='';
		var inputAmount='';
		trbill.getDealerCredit('TK_BILL',$localStorage.clientContext.shop.shopId,function(result){
			if(result.status=='ok'){
				strAlertAmount= parseFloat(result.strAlertAmount);
				strLimitAmount=parseFloat(result.strLimitAmount);
				strBalance=parseFloat(result.strBalance);
				inputAmount=parseFloat($scope.model.intoMoney);
				var strDebtInfo ='Tổng tiền đã thu hiện tại: '+strBalance+'; Số tiền thanh toán: '+inputAmount+'; Mức cảnh báo: '+strAlertAmount+'; Mức giới hạn: '+strLimitAmount;
				if((strBalance + inputAmount) <= strLimitAmount && (strBalance + inputAmount) >= strAlertAmount)
				{
					bootbox.alert(strDebtInfo+'\n' + '  Tiền thu cước của đại lý đã vượt mức cảnh báo !');
					return true;
				}
				else if((strBalance + inputAmount) > strLimitAmount)
				{
					bootbox.alert(strDebtInfo+'\n' + ' Tiền thu cước đại lý đã vượt mức giới hạn ! Thu cước không thành công. !');
					return false;
				}
				else if((strBalance + inputAmount) < strAlertAmount)
				{
					return true;
				}

				return false;
			}else{
				bootbox.alert(result.message);
				App.unblockUI("#contentMain");
				return false;
			}
		});
		
	} 
	var updatelblAccountIf = function (){
		var strAlertAmount='';
		var strLimitAmount='';
		var strBalance='';
		var inputAmount='';
		trbill.getDealerCredit('TK_BILL',$localStorage.clientContext.shop.shopId,function(result){
			if(result.status=='ok'){
				strAlertAmount= parseFloat(result.strAlertAmount);
				strLimitAmount=parseFloat(result.strLimitAmount);
				strBalance=parseFloat(result.strBalance);
				inputAmount=parseFloat($scope.model.intoMoney);
				$scope.model.checkType='Tài khoản có: ' + result.strBalance + '       Mức nợ: ' + result.strAlertAmount +
				 '        Nợ giới hạn: ' + result.strLimitAmount;		
			}else{
				$("#contentMain").html('<div class="portlet light bordered">'+
						'<div class="portlet-title">'+
							'<div class="caption">'+
								'<i class="icon-plus font-orange"></i> <span class="caption-subject font-orange bold uppercase">'+ result.message +'</span>'+
							'</div>'+
						'</div>'+
					'</div>');
				//bootbox.alert(result.message);
				App.unblockUI("#contentMain");					
			}
		});
		
	} 
	$scope.lstChildAccount = {};
	 var checkShopType = function () {
	    	$scope.model.checkType='';
	    	App.blockUI({
				target : "#contentMain",
				boxed : true,
				message : 'Loading...'
			});
	       if('4'==$localStorage.clientContext.shop.shopType)
	    	   {
	    	   	updatelblAccountIf();
	    	   }
 	       else {
					App.unblockUI("#contentMain");
				}
	    }
	checkShopType();
	var getPaymentMethod = function() {
		App.blockUI({
			target : "#contentMain",
			boxed : true,
			message : 'Loading...'
		});
		trbill.getPaymentMethod(function(result) {
	            if (result.status == "0" && result.messages){
	                bootbox.alert("Xảy ra lỗi trong quá trình getPaymentMethod! Lỗi: " + result.messages);
	            } else {
	                if (result.length > 0) {
	                	$scope.lstpaymentMethod= result;
	                	$scope.model.paymentMethod=$scope.lstpaymentMethod[0];
	                } else {
	                	$scope.lstpaymentMethod = [];
	                }
	            }
	            App.unblockUI("#contentMain");
	        });
	    }
	getPaymentMethod();
	var date = new Date();
	$scope.model.dateOfIssue = $filter('date')(date, "dd/MM/yyyy");
	$scope.model.vat = 10;
	$scope.model.transactionDate = $filter('date')(date, "dd/MM/yyyy");
	$scope.model.paymentMethod="VND";
	$scope.searchTrAccount= function(){
		var numbers = new RegExp(/^[0-9]+$/);
		var tempValueDataSearch = $scope.model.valueDataSearch;
		var valid = false;
		$scope.model.noTax='';
		$scope.model.totalVat='';
		$scope.model.intoMoney='';
		if(!$scope.model.valueDataSearch){
			bootbox.alert("Bạn cần nhập giá trị vào ô tìm kiếm!");
		}else if($scope.model.searchType.code==="sodienthoai"){
			if(numbers.test(tempValueDataSearch)===true){
				 if(tempValueDataSearch.length>11){
						bootbox.alert("Số điện thoại không được nhiều hơn 11 ký tự");
					}else{
						valid = true;
					}
				
			}else{
				bootbox.alert("Với điều kiện tìm kiêm số điện thoại, bạn chỉ được nhập số vào ô giá trị tìm kiếm!");
			}
			
		}else{
			valid = true;
		}
		
		if(valid===true){
		$scope.resetformdata();
		App.blockUI({
			target : "#contentMain",
			boxed : true,
			message : 'Loading...'
		});
		
		$scope.disablePayAll = true;
		$scope.showStartChargeBillBtn = true;
		$scope.showBillBtn = false;
		$scope.disableshowModalDetailFuncBtn = true;
		$scope.model.payAll = true;
		
		var seachdata={
				"searchType":	$scope.model.searchType.code,
				"key": $scope.model.valueDataSearch,	
			}
		trbill.searchtraccount(seachdata,function(result){
			if(result.length>0){
				$scope.listTrBill = result;
				$scope.lstChildAccount=result;
				$scope.selectedTrBillAccount=result[0];
				$scope.getInfo($scope.selectedTrBillAccount);
				$scope.disableBtnChargeBill = false;
				$scope.model.noTax = '0'; 
				$scope.model.totalVat = '0';
				$scope.model.intoMoney = '0';
				$scope.showDepositBtn = true;
				App.unblockUI("#contentMain");
			} else{
				App.unblockUI("#contentMain");
				bootbox.alert("Không tìm thấy khách hàng tương ứng!");
			}
		
			
		});
		
	}
	};
	
	
	
	$scope.startChargeBill = function(){
//		$scope.disableshowModalDetailFuncBtn = false
		$scope.disablePayAll = false;
		$scope.disableCycle = false;
		$scope.disablePaymentMethod=false;
		$scope.showStartChargeBillBtn = false;
		$scope.showBillBtn = true;
		$scope.showDepositBtn = false;
		$scope.showQuit=true;
		var vatAmount = (parseFloat( $scope.model.moneyPay)*parseFloat($scope.model.vat)/ (100+parseFloat($scope.model.vat))).toFixed(1);
		var nonVatAmount = (parseFloat( $scope.model.moneyPay)*100/ (100+parseFloat($scope.model.vat))).toFixed(1);
		$scope.model.noTax = nonVatAmount;
		$scope.model.totalVat = vatAmount;
		$scope.model.intoMoney = parseFloat(vatAmount)+parseFloat(nonVatAmount);
		$scope.model.debt = parseFloat($scope.model.totalDebt)-parseFloat($scope.model.intoMoney);
	};
	
	$scope.getInfo = function(selectedTrBillAccount){
	
	App.blockUI({
		target : "#contentMain",
		boxed : true,
		message : 'Loading...'
	});
	$scope.lstStartCycle = [];
	$scope.lstEndCycle = [];
	$scope.StartCycle = {};
	$scope.EndCycle={};
	$scope.model.customerCode=selectedTrBillAccount.account_BILL;
	$scope.model.customerType=selectedTrBillAccount.cust_TYPE ==='Family' ?'Cá nhân':'Tổ chức';
	$scope.model.surname =   selectedTrBillAccount.last_NAME + " "+selectedTrBillAccount.first_ANME;
	$scope.model.accountNumber = selectedTrBillAccount.account_BILL;
	$scope.model.account = selectedTrBillAccount.account_BALANCE;
	$scope.model.accountDeposit= selectedTrBillAccount.deposit_AMOUNT;
	$scope.model.msisdn =selectedTrBillAccount.msisdn;
	$scope.model.address = selectedTrBillAccount.bill_ADDR_LINE1;
	$scope.model.vat=10;
	$scope.model.totalDebt = selectedTrBillAccount.account_BALANCE;
	$scope.model.debt = selectedTrBillAccount.account_BALANCE;

	$scope.selectedTrHistory=selectedTrBillAccount.lstBillHistory;
	if(selectedTrBillAccount.lstBillHistory!=null)
	{
		for(var i=0;i<selectedTrBillAccount.lstBillHistory.length;i++)
		{
			$scope.StartCycle = {'value': selectedTrBillAccount.lstBillHistory[i].bill_Date};
			$scope.lstStartCycle.push($scope.StartCycle);
			$scope.EndCycle = {'value': selectedTrBillAccount.lstBillHistory[i].bill_Due_Date};
			$scope.lstEndCycle.push($scope.EndCycle);
		}
		$scope.model.selectedStartCycle=$scope.lstStartCycle[selectedTrBillAccount.lstBillHistory.length-1];
		$scope.model.selectedEndCycle=$scope.lstEndCycle[0];
	}
	
	$scope.selectedTrPayment=selectedTrBillAccount.lstPayments;
	$scope.selectedTrDeposit=selectedTrBillAccount.lstDeposit;
	
	$scope.trBillChildAccountLst = selectedTrBillAccount.lstChildAccount;
	$scope.model.moneyPay = selectedTrBillAccount.account_BALANCE;
	$scope.model.numberPaid = selectedTrBillAccount.account_BALANCE;
	$scope.model.popupTotalDetb=selectedTrBillAccount.account_BALANCE;
	$scope.model.popupDebt='0';
	if( $scope.trBillChildAccountLst!=null){
		$scope.model.popupDebtPeriod1 = $scope.trBillChildAccountLst[0].no_KY_1;
		$scope.model.popupDebtPeriod2 = $scope.trBillChildAccountLst[0].no_KY_2;
	}
//	$scope.disableshowModalDetailFuncBtn  = false;
	$scope.disableDepositRefundDialog  = false;
	$scope.DepositRefund.accountNo = selectedTrBillAccount.account_BILL;
	
	App.unblockUI("#contentMain");
	};
	
	
	$scope.enablePayall = function(event){
		if(event.target.checked==true){
			$scope.disableshowModalDetailFuncBtn = true;
		}else{
			$scope.disableshowModalDetailFuncBtn = false;
		}				
	}
	
	$scope.quitAction = function(event){
		$scope.disablePayAll = true;
		$scope.disableCycle = true;
		$scope.disablePaymentMethod=true;
		$scope.showStartChargeBillBtn = true;
		$scope.showBillBtn = false;
		$scope.disableshowModalDetailFuncBtn = true;
		$scope.showQuit=false;
		$scope.showDepositBtn=true;
		$scope.model.payAll = true;
		$scope.model.noTax = '0';
		$scope.model.totalVat = '0';
		$scope.model.intoMoney = '0';
		$scope.model.debt = $scope.model.totalDebt;
		
	}
	
	$scope.actionPaymentMethod = function(value){
		if("1"===value || "5"===value)
		{
			$scope.disablePayAll=false;	
			$scope.disableshowModalDetailFuncBtn=true;
		}
		else
		{
			$scope.model.payAll=true;
			$scope.disablePayAll=true;
			$scope.disableshowModalDetailFuncBtn=true;
		}
		
	}
	
	
	
	
	$scope.fillChildAccountInfo = function(item){
		
		$scope.rowHighlightNPR=item;
		$scope.disableMoneyPay = false;
		var moneyPay = $("#moneyPay");	
		moneyPay.select();
	};
	
	$scope.changeMoneyPayData=function(){
		var valuePay = $scope.model.moneyPay;
		$scope.model.numberPaid = valuePay;
		$scope.trBillChildAccountLst[0].tong_TRA = valuePay;
		$scope.disableSaveMoneyPay = false;
		$scope.model.popupDebt = $scope.model.popupTotalDetb - valuePay;
	};
	
	$scope.saveMoneyPayData = function(){
		$("#modalDetailPayment").modal('toggle');
		//var vatAmount = parseFloat( $scope.model.moneyPay)*100/ (100+parseFloat($scope.model.vat));
		var vatAmount = (parseFloat( $scope.model.moneyPay)*parseFloat($scope.model.vat)/ (100+parseFloat($scope.model.vat))).toFixed(1);
		var nonVatAmount = (parseFloat( $scope.model.moneyPay)*100/ (100+parseFloat($scope.model.vat))).toFixed(1);
		$scope.model.noTax = nonVatAmount;
		$scope.model.totalVat = vatAmount;
		$scope.model.intoMoney = parseFloat(vatAmount)+parseFloat(nonVatAmount);
		$scope.model.debt = parseFloat($scope.model.totalDebt)-parseFloat($scope.model.intoMoney);
		$scope.disableConfirmPaymentDialog = false;
		
	}
	$scope.confirmPaymentDialog = function(){
		if($scope.model.intoMoney==0||$scope.model.intoMoney==null)
			{			
			bootbox.alert("Sô tiền thanh toán không thể bằng 0.Mời kiểm tra lại!");
			return;
			}
		if($scope.model.intoMoney> parseFloat($scope.model.totalDebt))
			{
			 bootbox.confirm({
		            message: "Số tiền trả nhiều hơn mức đang nợ.Bạn có muốn thanh toán không?",
		            buttons: {
		                confirm: {
		                    label: 'Đồng ý',
		                    className: 'btn-success'
		                },
		                cancel: {
		                    label: 'Từ chối',
		                    className: 'btn-danger'
		                }
		            },
		            callback: function (result)
		            {
		                if(result)
		                {
		                	if($scope.model.totalDebt=='0')
		                	{
		                		var date = new Date();
		                		var currentDate = $filter('date')(date, "dd/MM/yyyy");

		            			$scope.StartCycle = {'value': currentDate};
		            			$scope.lstStartCycle.push($scope.StartCycle);
		            			$scope.EndCycle = {'value': currentDate};
		            			$scope.lstEndCycle.push($scope.EndCycle);
		            	
		            			$scope.model.selectedStartCycle=$scope.lstStartCycle[0];
		            			$scope.model.selectedEndCycle=$scope.lstEndCycle[0];
		                	}
		                	$scope.showModalDetail(MODAL_CONFIRM_PAYMENT);
		                }
					}
						});
			}
		else
			{
				$scope.showModalDetail(MODAL_CONFIRM_PAYMENT);
			}
		
	};
	
	$scope.deposit_refund_dialog= function(){
		$scope.showModalDetail(MODAL_DEPOSIT_REFUND);
		$scope.DepositRefund.selected=$scope.DepositRefund.depositrefund[0];
		
	};
	
	$scope.sendPaymentInfo = function(){
		$("#confirmDialog").modal('toggle');
		var startCycle= $scope.model.selectedStartCycle.value;
		var endCycle=$scope.model.selectedEndCycle.value;
		if(parseDate(startCycle).getTime()>parseDate(endCycle).getTime())
		{
			 bootbox.alert("Đầu kỳ không được lớn hơn cuối kỳ!");
			 return;
		}
		App.blockUI({
			target : "#contentMain",
			boxed : true,
			message : 'Loading...'
		});
		
		var date = new Date();
		var currentDate = $filter('date')(date, "dd/MM/yyyy");		
		var lstChildAccount=$scope.lstChildAccount;
		$scope.TRBillPaymentUpdate={};
		var paymentUpdateInfo ={
				"lstChildAccount": lstChildAccount,
				"vat":$scope.model.totalVat,
				"postpaidAccountNo":$scope.selectedTrBillAccount.account_BILL,
				"custNodeId":$scope.selectedTrBillAccount.cust_REF_NO,
				"msIsdn":$scope.model.msisdn,//$filter('limitTo')($scope.selectedTrBillAccount.msisdn, 11, 0),
				"staffId":$localStorage.clientContext.shop.staffId,
				"shopId":$localStorage.clientContext.shop.shopId,
				"customerName":$scope.selectedTrBillAccount.last_NAME + " " + $scope.selectedTrBillAccount.bill_ACC_NAME,
				"address":$scope.selectedTrBillAccount.bill_ADDR_LINE1,
				"accountName":$scope.model.customerCode,
				"taxCode":$scope.selectedTrBillAccount.tax_CODE,
				"startCycle":startCycle,
				"endCycle":endCycle,
				"dPaymentAmount":$scope.model.intoMoney,
				"userName":$localStorage.clientContext.shop.staffName,
				"shopCode":$localStorage.clientContext.shop.shopCode,
				"paymentMethod":$scope.model.paymentMethod.code,
				"staffCode":$localStorage.clientContext.shop.staffCode
			} 
			trbill.updatePayment(paymentUpdateInfo,function(result){
				if (result.status == "0" ){
					bootbox.alert("Xảy ra lỗi trong quá trình thu cước!<br/>Lỗi: " + result.messages);
				}else{
					$scope.TRBillPaymentUpdate=result.strReturn;
					$scope.TRBillPaymentUpdate.vtPayment.startCyle=startCycle;
					$scope.TRBillPaymentUpdate.vtPayment.endCycle=endCycle;
					$scope.TRBillPaymentUpdate.vtInvoice[0].fromDate=startCycle;
					$scope.TRBillPaymentUpdate.vtInvoice[0].toDate=endCycle;
					$scope.TRBillPaymentUpdate.vtPaymentDetail[0].startCycle=startCycle;
					$scope.TRBillPaymentUpdate.vtPaymentDetail[0].endCycle=endCycle;
					$scope.TRBillPaymentUpdate.vtPaymentDetail[0].accountId=$scope.selectedTrBillAccount.account_BILL;
					var vtcPaymentInsert = {
							"general7": $localStorage.clientContext.shop.staffName +" - "+$localStorage.clientContext.shop.shopName+" , "+$localStorage.clientContext.shop.address,
							"general8": "",
							"general9": $localStorage.clientContext.shop.staffCode,
							"general10": $localStorage.clientContext.shop.shopCode,
							"postpaidAccountNo": $scope.model.accountNumber,
							"customerNodeId": $scope.selectedTrBillAccount.parent_ACCOUN_NO,
							"toAccountId":$scope.model.accountNumber,
							"paymentTypeId":"500001",
							"currentcyId":"1",
							"paymentLocationCode":"1",
							"autoAllocateIndCode":"1",
							"payementReceivedDate":"0",
							"paymentDate":"0",
					}
					var paymentData ={
							"shopCode": $localStorage.clientContext.shop.shopCode,
							"iAccountNo":$scope.selectedTrBillAccount.account_BILL,
							"vtcPayment":$scope.TRBillPaymentUpdate.vtPayment,
							"vtcPaymentInsert":vtcPaymentInsert,
							"lstVctPaymentDetail":$scope.TRBillPaymentUpdate.vtPaymentDetail,
							"lstVctInvoice":$scope.TRBillPaymentUpdate.vtInvoice,
							"cusType":$scope.model.customerType
						}
					$scope.model.checkCredit=false;
					if($localStorage.clientContext.shop.shopType != '4') //la cua hang
					{

						trbill.checkExistInvoie(paymentData,function(result){
							 if (result.status == "0"){
					                bootbox.alert("Xảy ra lỗi !<br/>Lỗi: " + result.messages);
							 }
							 else{
								 paymentData.checkInvoice=result.strReturn;
									if(result.strReturn=='2')
										{
										 bootbox.confirm({
									            message: "Khách hàng là thu cước tại nhà đã được in hóa đơn rồi.<br/> Bạn có muốn thực hiện tiếp không??",
									            buttons: {
									                confirm: {
									                    label: 'Đồng ý',
									                    className: 'btn-success'
									                },
									                cancel: {
									                    label: 'Từ chối',
									                    className: 'btn-danger'
									                }
									            },
									            callback: function (result)
									            {
									                if(result)
									                {
									                    App.blockUI({
									                        target : "#contentMain",
									                        boxed : true,
															message : 'Loading...'
																			});
									            								trbill.payment(paymentData,function(result){
									            										if (result.status == "0" ){
									            											bootbox.alert("Xảy ra lỗi trong quá trình thu cước!<br/>Lỗi: " + result.messages);
									            										}else{
									            											App.unblockUI("#contentMain");
									            											$scope.showModalDetail(MODAL_CREATE_CINVOICE_CONFIRM);
									            											lstTRBillInvoice=result.lstTrBillInvoice;
									            										}
									            										$scope.searchTrAccount();
									            										});
																		}
																	}
																});
										}
									else
										{
										trbill.payment(paymentData,function(result){
											if (result.status == "0" ){
												bootbox.alert("Xảy ra lỗi trong quá trình thu cước!<br/>Lỗi: " + result.messages);
											}else{
												App.unblockUI("#contentMain");
												$scope.showModalDetail(MODAL_CREATE_CINVOICE_CONFIRM);
												lstTRBillInvoice=result.lstTrBillInvoice;
											}
											$scope.searchTrAccount();
											});
										}
								}});
					}
					else 
					{
						var strAlertAmount='';
						var strLimitAmount='';
						var strBalance='';
						var inputAmount='';
						trbill.getDealerCredit('TK_BILL',$localStorage.clientContext.shop.shopId,function(result){
							if(result.status=='ok'){
								strAlertAmount= parseFloat(result.strAlertAmount);
								strLimitAmount=parseFloat(result.strLimitAmount);
								strBalance=parseFloat(result.strBalance);
								inputAmount=parseFloat($scope.model.intoMoney);
								var strDebtInfo ='Tổng tiền đã thu hiện tại: '+strBalance+'; Số tiền thanh toán: '+inputAmount+'; Mức cảnh báo: '+strAlertAmount+'; Mức giới hạn: '+strLimitAmount;
								if((strBalance + inputAmount) <= strLimitAmount && (strBalance + inputAmount) >= strAlertAmount)
								{
									bootbox.alert(strDebtInfo+'\n' + '  Tiền thu cước của đại lý đã vượt mức cảnh báo !');
									$scope.model.checkCredit=true;
								}
								else if((strBalance + inputAmount) > strLimitAmount)
								{
									bootbox.alert(strDebtInfo+'\n' + ' Tiền thu cước đại lý đã vượt mức giới hạn ! Thu cước không thành công. !');
									$scope.model.checkCredit=false;
								}
								else if((strBalance + inputAmount) < strAlertAmount)
								{
									$scope.model.checkCredit=true;
								}
								if($scope.model.checkCredit)
								{									
									trbill.checkExistInvoie(paymentData,function(result){
										 if (result.status == "0"){
								                bootbox.alert("Xảy ra lỗi !<br/>Lỗi: " + result.messages);
								                App.unblockUI("#contentMain");
										 }
										 else{
											 var check=0;
											 paymentData.checkInvoice=result.strReturn;
												if(result.strReturn=='2')
													{
													 bootbox.confirm({
												            message: "Khách hàng là thu cước tại nhà đã được in hóa đơn rồi.<br/> Bạn có muốn thực hiện tiếp không??",
												            buttons: {
												                confirm: {
												                    label: 'Đồng ý',
												                    className: 'btn-success'
												                },
												                cancel: {
												                    label: 'Từ chối',
												                    className: 'btn-danger'
												                }
												            },
												            callback: function (result)
												            {
												                if(result)
												                {
												                    App.blockUI({
												                        target : "#contentMain",
												                        boxed : true,
																		message : 'Loading...'
																						});
												            								trbill.payment1(paymentData,function(result){
												            										if (result.status == "0" ){
												            											bootbox.alert("Xảy ra lỗi trong quá trình thu cước!<br/>Lỗi: " + result.messages);
												            											App.unblockUI("#contentMain");
												            										}else{
												            											App.unblockUI("#contentMain");
												            											$scope.showModalDetail(MODAL_CREATE_CINVOICE_CONFIRM);
												            											lstTRBillInvoice=result.lstTrBillInvoice;
												            											//check=result.checkR;
												            										}
												            										$scope.searchTrAccount();
												            										});
																					}
												                else
												                	{
												                		App.unblockUI("#contentMain");
												                	}
																				}
																			});
													}
												else
													{
													trbill.payment1(paymentData,function(result){
														if (result.status == "0" ){
															bootbox.alert("Xảy ra lỗi trong quá trình thu cước!<br/>Lỗi: " + result.messages);
															App.unblockUI("#contentMain");
														}else{
															App.unblockUI("#contentMain");
															$scope.showModalDetail(MODAL_CREATE_CINVOICE_CONFIRM);
															lstTRBillInvoice=result.lstTrBillInvoice;
															//check=result.checkR;
														}
														$scope.searchTrAccount();
														});
													}
												updatelblAccountIf();
												/*if(3===check && 4===$localStorage.clientContext.shop.shopType)
												{
													MessageBox.showMessageDialog(this,"Shop chưa có tài khoản nợ",Global.APP_NAME,MessageBox.ERROR_MESSAGE);
													App.unblockUI("#contentMain");
												}*/
											}});
									}
									else
									{
									
									}
							}else{
								bootbox.alert(result.message);
								App.unblockUI("#contentMain");
								$scope.model.checkCredit=false;
								return;
							}
						});
						
						
					}
					
					//$("#confirmDialog").modal('toggle');
				}
			});
		
		
		
	};
	
	
	$scope.createCinvoice = function(){
		$("#"+MODAL_CREATE_CINVOICE_CONFIRM).modal('toggle');
		App.blockUI({
			target : "#contentMain",
			boxed : true,
			message : 'Loading...'
		});
		trbill.createcinvoice(lstTRBillInvoice,function(result){
			App.blockUI({
				target : "#contentMain",
				boxed : true,
				message : 'Loading...'
			});
			if(result.message==='ok'&&result.cinvoice!=null){
				$scope.cinvoice = result.cinvoice;
				angular.forEach($scope.cinvoice, function(value, key) {
					
					$scope.cinvoice.invoiceFull=$scope.cinvoice[key].invoiceFull;	
					if(true)
						{
					 bootbox.confirm({
				            message: "Taọ hóa đơn Cinvoice thành công số hóa đơn "+
				            $scope.cinvoice.invoiceFull+". Bạn có muốn in hóa đơn không?",
				            buttons: {
				                confirm: {
				                    label: 'Đồng ý',
				                    className: 'btn-success'
				                },
				                cancel: {
				                    label: 'Từ chối',
				                    className: 'btn-danger'
				                }
				            },
				            callback: function (result)
				            {
				                if(result)
				                {
				                    App.blockUI({
				                        target : "#contentMain",
				                        boxed : true,
										message : 'Loading...'
														});
				                    var printData={
				            				"lstCIvoiceObj":$scope.cinvoice,
				            				"shopCode":$localStorage.clientContext.shop.shopCode,
				            				"lstTRBillInvoice":lstTRBillInvoice,
				            				"index":key,
				            		}
				            		
				            		trbill.printcinvoice(printData,function(result){
				            			if(result.message==='ok'){
				            					window.open(result.downloadlink,'_blank');				            				
				            					App.unblockUI("#contentMain");
				            			}else{
				            				bootbox.alert(result.error);
				            				App.unblockUI("#contentMain");
				            			}
				            		});
													}
												}
											});
				}
					});
				//for(var j=0;j<$scope.cinvoice.length;j++)
				//{
					
				//}
				App.unblockUI("#contentMain");
			}else{
				bootbox.alert("Đã có lỗi khi Tạo hóa đơn - "+result.cinvoice);
				App.unblockUI("#contentMain");
			}
			

		});
		//$("#"+MODAL_CREATE_CINVOICE_CONFIRM).modal('toggle');
		
		
	}
	
	$scope.printCinvoice= function(){
				
		$("#"+MODAL_CREATE_CINVOICE_PRINT).modal('toggle');
		App.blockUI({
			target : "#contentMain",
			boxed : true,
			message : 'Loading...'
		});
		var printData={
				"lstCIvoiceObj":$scope.cinvoice,
				"shopCode":$localStorage.clientContext.shop.shopCode,
				"lstTRBillInvoice":lstTRBillInvoice,
				"index":$scope.lstIndex,
		}
		
		trbill.printcinvoice(printData,function(result){
			if(result.message==='ok'){
				for(var i=0;i<result.downloadlink.length;i++)
				{
					window.open(result.downloadlink[i],'_blank');
				}
					App.unblockUI("#contentMain");
			}else{
				bootbox.alert(result.error);
				App.unblockUI("#contentMain");
			}
		});
		
		//$("#"+MODAL_CREATE_CINVOICE_PRINT).modal('toggle');
		
	}
	
	$scope.resetformdata = function(){
		$scope.listTrBill = {};
		$scope.selectedTrBillAccount={};
		$scope.model.customerCode="";
		$scope.model.customerType="";
		$scope.model.surname =   "";
		$scope.model.accountNumber = "";
		$scope.model.account = "";
		$scope.model.accountDeposit= "";
		$scope.model.msisdn ="";
		$scope.model.address = "";
		$scope.model.vat="";
		$scope.model.totalDebt = "";
		$scope.model.debt = "";
		$scope.model.selectedStartCycle="";
		$scope.model.selectedEndCycle="";
		
		
		$scope.selectedTrHistory="";
		$scope.selectedTrPayment="";
		$scope.selectedTrDeposit="";
		
		$scope.trBillChildAccountLst = {};
		$scope.model.moneyPay = "";
		$scope.model.numberPaid = "";
		$scope.model.popupTotalDetb="";
		$scope.model.popupDebtPeriod1 = "";
		$scope.model.popupDebtPeriod2 = "";
	}
	

	$scope.validationOptions = {
			debounce : 1500,
			preValidateFormElements : true,
			rules : {},
			messages : {}
	}

	 $.validator.addMethod("EmptyValue", function (value, element) {
	        if (value == undefined || value=="") return false;
	        if($.trim(value)=="") return false;
	        return true;
	 }, "");
	 
	 $.validator.addMethod("maxlengthcustom", function (value, element, options) {
		 var valueLenght = $.trim(value.toString()).length;
		 if(valueLenght >  options) return false;
		 return true;
	 }, "");
	 
	$.validator.addMethod("minlengthcustom", function (value, element, options) {
		 var valueLenght = $.trim(value.toString()).length;
		 if(valueLenght>0){
			 if(valueLenght<options) return false;
		 }
		 return true;
	 }, "");
	
	var idAttachMentVal = null;
    var idAttachMentTypeInput = null;

	var initialize = function () {
	}

	initialize();
				


	$scope.shopIp = $localStorage.clientContext.shop.shopCode;
	$scope.model.shopName = $localStorage.clientContext.shop.shopName;
	

	// BEGIN validate input

	$scope.model.serialNew='';

	// BEGIN LOAD IMAGE table 1
	$scope.model.fileAttachments = [];

	var uploader = $scope.uploader = new FileUploader({
		url: eim_url + "/bs/Custome/uploadImage"
	});

	
	$scope.showModalDetailFunc = function(){
		$scope.disableMoneyPay = true;
		$scope.disableSaveMoneyPay = true;
		$scope.showModalDetail(MODAL_DETAIL_PAYMENT);
	}
	
	$scope.showModalDetail = function(idModal) {
		$('#' + idModal).modal('show');
	}
	
	$scope.submitDepositRefund= function(){
		$("#"+MODAL_DEPOSIT_REFUND).modal('toggle');
		var tempAmount = $scope.DepositRefund.amount;
		var checkBalance = true;
		if($scope.DepositRefund.amount=='undefined'||$scope.DepositRefund.amount=='')
			{
				bootbox.alert("Số tiền không được để trống!");
				$scope.DepositRefund.selected=null;
			}
		else if($scope.DepositRefund.amount=='0')
			{
				bootbox.alert("Số tiền giao dịch phải khác 0!");
				$scope.DepositRefund.selected=null;
			}
		else if($scope.DepositRefund.selected!=='undefined' && $scope.DepositRefund.selected){
			if(!isNaN(tempAmount)  && tempAmount <= 999999999){
				
				// refundCheckBalance
				if($scope.DepositRefund.selected.code==='TDHT'){
					var queryData ={
							"msisdn": $scope.selectedTrBillAccount.msisdn,
							"accountNo":$scope.selectedTrBillAccount.account_BILL,
						}
					trbill.refundCheckBalance(queryData,function(result){
						if(result.accountBalance){
							var depositAmount = parseInt(result.accountBalance.depositAmount, 10);
							var outStandingAmount = parseInt(result.accountBalance.outStandingAmount, 10);
							if(outStandingAmount===0){
								if(tempAmount<= parseInt(depositAmount, 10)){
									$scope.showModalDetail(MODAL_CONFIRM_DEPOSIT);
								}else{
									bootbox.alert("Số tiền hoàn trả cọc không được lớn hơn số tiền đặt cọc!");
								}
							}else{
								bootbox.alert("Bạn cần thanh toán hết nợ cước trước khi trả đặt cọc!");
							}
							
								
						}else{
							bootbox.alert("Lỗi: "+result.error);
						}
					});
				}else{
					$scope.showModalDetail(MODAL_CONFIRM_DEPOSIT);
				}
			}else{
				
				bootbox.alert("Giá trị "+($scope.DepositRefund.selected.code==='DCHT'?'đặt cọc':'trả đặt cọc') +' phải là số và không được lớn hơn 999999999!');
			}
		}else{
			bootbox.alert("Bạn cần chọn 'Đặt cọc' hoặc 'Trả đặt cọc' để tiếp tục!");
		}
		
		
		
		
	}
	$scope.amount = function() {
		$scope.DepositRefund.amount = $scope.DepositRefund.amount
				.replace(/\D/g, '');
	}
	function formatter(value) {
	      value = value ? parseFloat(value.toString().replace(/[^0-9._-]/g, '')) || 0 : 0;
	      var formattedValue = $filter('currency')(value);
	      el.val(formattedValue);
	            
	      ngModelCtrl.$setViewValue(value);
	      scope.$apply();

	      return formattedValue;
	    }
$scope.submitDeposit = function(){
	$("#"+MODAL_CONFIRM_DEPOSIT).modal('toggle');
	var tempAmount = $scope.DepositRefund.amount;
//	if($scope.DepositRefund.selected!=='undefined' && $scope.DepositRefund.selected){
//		if(angular.isNumber(tempAmount) && tempAmount <= 999999999){
			App.blockUI({
				target : "#contentMain",
				boxed : true,
				message : 'Loading...'
			});
			var date = new Date();
			var currentDate = $filter('date')(date, "dd/MM/yyyy");
			var cusAddress ="";
			if($scope.DepositRefund.selected.code==='TDHT'){
				cusAddress= $scope.selectedTrBillAccount.bill_ADDR_LINE1+"," +$scope.selectedTrBillAccount.postal_DISTRICT +","+$scope.selectedTrBillAccount.poatal_PROVINCE;
			}
		
			
			var depositTrans ={
					"depositId":0,
					"transType":$scope.DepositRefund.selected.code,
					"createdDate":currentDate,
					"amount": $scope.DepositRefund.amount,
					"stockId":0,
					"airtimeTransId":0,
					"cbTransId":$scope.model.customerCode,
					"cbAccountId":$scope.model.customerCode,
					"cbCustomerId":$scope.selectedTrBillAccount.cust_REF_NO,
					"custName": $scope.selectedTrBillAccount.last_NAME + " " + $scope.selectedTrBillAccount.bill_ACC_NAME,
					"custAddress":$scope.model.address,
					"createUser":$localStorage.clientContext.shop.staffName +" - "+$localStorage.clientContext.shop.shopName+" , "+$localStorage.clientContext.shop.address,
					"reasonCode": $scope.DepositRefund.selected.code,
					"accountCode":"TK_DC",
			}
			
			var paymentData ={
					"shopCode": $localStorage.clientContext.shop.shopCode,
					"shopId":  $localStorage.clientContext.shop.shopId,
					"staffId": $localStorage.clientContext.shop.staffId,
					"staffCode": $localStorage.clientContext.shop.staffCode,
					"iAccountNo":$scope.selectedTrBillAccount.account_BILL,
					"depositTrans":depositTrans,
					
				}
			
			trbill.deposit(paymentData,function(result){
				if(result.success!= null && result.success!= undefined)
					{
						if(result.success.length > 0){
							$scope.showModalDetail(MODAL_DEPOSIT_PRINT);
							App.unblockUI("#contentMain");
						}else{
							bootbox.alert(result.error);
							App.unblockUI("#contentMain");
						}
					}
				else
					{
						bootbox.alert(result.messages);
						App.unblockUI("#contentMain");
					}
				
				
//				$scope.searchTrAccount();
			});
			
			//$("#"+MODAL_CONFIRM_DEPOSIT).modal('toggle');
//		}else{
//			$("#"+MODAL_CONFIRM_DEPOSIT).modal('toggle');
//			bootbox.alert("Giá trị "+($scope.DepositRefund.selected.code==='DCHT'?'đặt cọc':'trả đặt cọc') +' phải là số và không được lớn hơn 999999999!');
//		}
//	}else{
//		$("#"+MODAL_CONFIRM_DEPOSIT).modal('toggle');
//		bootbox.alert("Bạn cần chọn 'Đặt cọc' hoặc 'Trả đặt cọc' để tiếp tục!");
//	}
	
	
	
		
		
	};
	
$scope.submitDepositPrint = function(){
	$("#"+MODAL_DEPOSIT_PRINT).modal('toggle');	
		App.blockUI({
			target : "#contentMain",
			boxed : true,
			message : 'Loading...'
		});
		var date = new Date();
		var currentDate = $filter('date')(date, "dd/MM/yyyy");
		var depositTrans ={
				"depositId":0,
				"transType":$scope.DepositRefund.selected.code,
				"createdDate":currentDate,
				"amount": $scope.DepositRefund.amount,
				"stockId":0,
				"airtimeTransId":0,
				"cbTransId":$scope.model.customerCode,
				"cbAccountId":$scope.model.customerCode,
				"cbCustomerId":$scope.selectedTrBillAccount.cust_REF_NO,
				"custName": $scope.selectedTrBillAccount.last_NAME + " " + $scope.selectedTrBillAccount.bill_ACC_NAME,
				"custAddress":$scope.model.address,
				
		}
	var paymentData ={
			"shopCode": $localStorage.clientContext.shop.shopCode,
			"shopId": $localStorage.clientContext.shop.shopId,
			"iAccountNo": $scope.selectedTrBillAccount.account_BILL,
			"depositTrans":depositTrans,
			
		}
	var config = { responseType: 'blob' };
		
		trbill.depositprint(paymentData,function(result){
			
			
			
			var file = new Blob([result], {type: 'application/pdf', charset:'utf-8'});
		      var fileURL = URL.createObjectURL(file);
		      if(''!=fileURL&& fileURL!=null)
		    	  {
		    	  	$window.open(fileURL);
		    	  	App.unblockUI("#contentMain");
		    	  }
		      else{
					bootbox.alert("Có lỗi khi in hóa đơn!");
					App.unblockUI("#contentMain");
				}
		     
			
		});
		//$("#"+MODAL_DEPOSIT_PRINT).modal('toggle');	
		$scope.searchTrAccount();
		
};			 
});
app_vnm.directive('format', ['$filter', function ($filter) {
    return {
        require: '?ngModel',
        link: function (scope, elem, attrs, ctrl) {
            if (!ctrl) return;

            ctrl.$formatters.unshift(function (a) {
                return $filter("number")(ctrl.$modelValue)
            });

            elem.bind('blur', function(event) {
                var plainNumber = elem.val().replace(/[^\d|\-+|\.+]/g, '');
                elem.val($filter("number")(plainNumber));
            });
        }
    };
}]);
function StringUtilNVL(val){
	if(val==undefined || val == null) return "";
	return $.trim(val);
}

function createTimeStamp(){
	var theMoment = moment();
	var millisTimeStamp = theMoment.valueOf();
	return millisTimeStamp;
}
function parseDate(str) {
	  var mdy = str.split('/');
	  return new Date(mdy[2], mdy[1], mdy[0]);
}

