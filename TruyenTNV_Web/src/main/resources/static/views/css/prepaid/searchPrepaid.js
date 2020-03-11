app_vnm.factory('searchHist', function($http, $translate) {
	return {
		search : function(data, callback) {
			var url = eim_url + "/bs/Custome/searchHist";
			$http.post(url, data).success(callback).error(function(data, status, headers, config) {
				App.unblockUI("#contentMain");
				if("403" == status){
					bootbox.alert(status + " : " + data.message);
				} else {
					bootbox.alert($translate.instant('vnm.messages.error.connection'));
				}
			});
		},
		customer : function(callback) {
			var url = eim_url + "/bs/Custome/listCustomerType";
			$http.post(url).success(callback).error(function(data, status, headers, config) {
				App.unblockUI("#contentMain");
				bootbox.alert(status + " " + $translate.instant('vnm.messages.error.connection'));
			});
		}
	}
});

app_vnm.controller('ctrl-searchPrepaid', function($scope, $rootScope, $translate, $compile, $timeout, $uibModal, $location, $window, FileUploader, $filter,
		$http, NgTableParams, $localStorage, searchHist) {
	
	$scope.model = {};
	$scope.model.Type = '0';
	$scope.searchResult = [];
	$scope.listMdnRes = [];
	$scope.disableTaxCode = true;
	
	$scope.updateCustomerType = function(id) {
		if (id == '2') {
			$scope.disableTaxCode = false;
		} else {
			$scope.disableTaxCode = true;
		}
	}
	
	//DatBD2
	$scope.listCustomerType=[{'customerId' : '1', 'customer': 'Cá nhân'},
		{'customerId' : '2', 'customer': 'Tổ chức'}]
	

/*	searchHist.customer(function(result) {
		if (result.status == '0' && result.status != 'undefined') {
			App.unblockUI("#contentMain");
			bootbox.alert($translate.instant('vnm.messages.validate.prepaid.server.' + result.messages));
		} else {
			App.unblockUI("#contentMain");
			$scope.listCustomerType = result;
//			$scope.model.customerType = $scope.listCustomerType[0].customerId;
		}
	});*/
	//DatBD2
	 $scope.loadCustomerName=function(id){
    	var name='';
    	if (id=='1'||id=='2')
    		{
    			name="Cá nhân";
    		}
    	else if(id=='3'|| id=='4'){
    		name="Tổ chức";
    	}
    	
    	return name;
    }
    
    $scope.loadNameSubUseType=function (id){
    	var name='';
    	if(id=='CN01'){
    		name='Cho bản thân';
    	}
    	else if(id=='CN02'){
    		name="Cho người được giám hộ";
    	}
    	else if(id=='CN03'){
    		name="Cho thiết bị";
    	}
    	else if(id=='TC01'){
    		name="Cho các cá nhân thuộc tổ chức";
    	}
    	else if(id=='TC02'){
    		name="Cho thiết bị";
    	}
    	
    	return name;
    }
    
    $scope.loadNameSubPaymentType= function (id){
    	var name='';
    	if (id=='TT'){
    		name="Trả trước";
    	}
    	else if(id=='TS'){
    		name="Trả sau";
    	}
    	
    	return name;
    }
    $scope.loadTypeCardCompanyName= function (id){
    	var name='';
    	if(id=='1'){
    		name='Quyết định thành lập';
    	}
    	else if(id=='2'){
    		name='Giấy chứng nhận đăng ký kinh doanh và đăng ký thuế';
    	}
    	else if (id=='3'){
    		name='Giấy phép đầu tư';
    	}
    	else if (id=='4'){
    		name='Giấy chứng nhận đăng ký doanh nghiệp';
    	}
    	return name;
    }
    $scope.loadTypeCardName=function(id){
    	var name='';
    	if(id=='01'){
    		name='Chứng minh thư';
    	}
    	else if (id=='02'){
    		name='Hộ chiếu';
    	}
    	else if( id=='03'){
    		name='Thẻ căn cước';
    	}
    	return name;
    }
    
    $scope.loadGender=function(id){
    	var name='';
    	if(id=='0'){
    		name='Nữ';
    			
    	}
    	else if(id=='1'){
    		name='Nam';
    	}
    }
    //end
	$scope.search = function() {
		if ($scope.frm_searchPrepaid.validate()) {
			if ($scope.checkNumber()) {
				if ($("#toDate").val() != '' && $("#fromDate").val() != '') {
					if (moment($("#fromDate").val(), "DD/MM/YYYY") > moment($("#toDate").val(), "DD/MM/YYYY")) {
						bootbox.alert("Ngày bắt đầu không được lớn hơn ngày kết thúc!");
						return;
					}
				}

				$scope.tableParams = new NgTableParams({}, {});
				$scope.tableParamsPhone = new NgTableParams({}, {});
				$scope.tableParamsDiff = new NgTableParams({}, {});
				$scope.model.mdnRes = [];
				$scope.model.nameReturn = "";
				$scope.model.dobReturn = "";
				$scope.model.cardIdReturn = "";
				$scope.model.taxCodeReturn = "";

				var searchInput = {
					"mdn" : $scope.model.mdn,
					"taxCode" : $scope.model.taxCode,
					"cardId" : $scope.model.cardId,
					"serial" : $scope.model.serial,
					"fromDate" : $("#fromDate").val(),
					"toDate" : $("#toDate").val(),
					"customerType" : $scope.model.customerType,
					"shopId" : $localStorage.clientContext.shopId
				};

				App.blockUI({
					target : "#contentMain",
					boxed : true,
					message : 'loading...'
				});
				searchHist.search(searchInput, function(result) {
					if (result.status == '0' && result.status != 'undefined') {
						App.unblockUI("#contentMain");
						bootbox.alert($translate.instant('vnm.messages.validate.prepaid.server.' + result.messages));
					} else {
						$scope.tableParams = new NgTableParams({}, {});
						$scope.tableParamsPhone = new NgTableParams({}, {});
						$scope.tableParamsDiff = new NgTableParams({}, {});

						$scope.searchResult = result;
						$scope.model.nameReturn = result.name;
						$scope.model.dobReturn = result.dob.substring(0, 10);
						$scope.model.cardIdReturn = result.idCard;
						$scope.model.taxCodeReturn = result.taxCode;
						//DatBD2 insert
						
						$scope.model.typeCard=$scope.loadTypeCardName(result.mcCustomer.type_card);
						$scope.model.placeIssue=result.mcCustomer.placeOfIssue;
						$scope.model.dateIssue=result.mcCustomer.dateOfIssue;
						$scope.model.typeCardCompany= $scope.loadTypeCardCompanyName(result.mcCustomer.type_card_company);
						$scope.model.country=result.mcCustomer.country;
						$scope.model.province=result.mcCustomer.province;
						$scope.model.district=result.mcCustomer.district;
						$scope.model.address=result.mcCustomer.address;
						$scope.model.gender= $scope.loadGender(result.mcCustomer.gender);
						$scope.model.companyName=result.mcCustomer.companyName;

						$scope.tableParams = new NgTableParams({}, {
							dataset : result.cusHist
						});
						$scope.cusHistSelected = result.cusHist[0];

						if (result.subHist.length > 0) {
							for (var i = 0; i < result.subHist.length; i++) {
								$scope.listMdnRes.push({
									"id" : result.subHist[i].id,
									"mdn" : result.subHist[i].mdn
								});
							}
							$scope.model.mdnRes = $scope.listMdnRes[0];

							$scope.tableParamsPhone = new NgTableParams({}, {
								dataset : result.subHist[0].subHist
							});
							
							//DatBD2
							/*
							$scope.tableParamsDiff = new NgTableParams({}, {
								dataset : result.cusHist[0].diff
							});*/
						}
						App.unblockUI("#contentMain");
					}
				});
			} else {
				bootbox.alert("Bạn phải nhập ít nhất 1 trường!");
			}
		}
	}

	$scope.getCusHist = function(item) {
		$scope.subHistSelected = -1;
		$scope.cusHistSelected = item;
		$scope.tableParamsDiff = new NgTableParams({}, {
			dataset : $scope.searchResult.cusHist[item.rownum - 1].diff
		});
	}

	$scope.getSubHist = function(item) {
		$scope.cusHistSelected = -1;
		$scope.subHistSelected = item;

		$scope.tableParamsDiff = new NgTableParams({}, {
			dataset : $scope.searchResult.subHist[$scope.model.mdnRes.id].subHist[item.rownum - 1].diff
		});
	}

	$scope.loadSub = function(id) {
		$scope.tableParamsPhone = new NgTableParams({}, {
			dataset : $scope.searchResult.subHist[id].subHist
		});

		$scope.cusHistSelected = -1;
		$scope.subHistSelected = $scope.searchResult.subHist[id].subHist[0];
		$scope.tableParamsDiff = new NgTableParams({}, {
			dataset : $scope.searchResult.subHist[id].subHist[0].diff
		});
	}

	$scope.checkNumber = function() {
		var tmp = true;
		if (!angular.isDefined($scope.model.mdn)) {
			if (!angular.isDefined($scope.model.taxCode)) {
				if (!angular.isDefined($scope.model.cardId)) {
					if (!angular.isDefined($scope.model.serial)) {
						if (!angular.isDefined($scope.model.fromDate)) {
							if (!angular.isDefined($scope.model.toDate)) {
								tmp = false;
							}
						}
					}
				}
			}
		}
		return tmp;
	}

	$scope.validationOptions = {
		debounce : 1500,
		preValidateFormElements : true,
		rules : {
			mdn : {
				maxlength : 11,
				minlength : 10
			},
			cardId : {
				maxlength : 15,
				minlength : 8
			},
			serial : {
				maxlength : 20
			}
		},
		messages : {
			searchMdn : {
				minlength : "Số điện thoại không ít hơn 10 số.",
				maxlength : "Số điện thoại không nhiều hơn 11 số."
			},
			searchCardId : {
				minlength : "Chứng minh thư không ít hơn 8 ký tự.",
				maxlength : "Chứng minh thư không nhiều hơn 15 ký tự."
			},
			searchSimNumber : {
				maxlength : "Số SIM không nhiều hơn 20 số."
			}
		}
	}
});
