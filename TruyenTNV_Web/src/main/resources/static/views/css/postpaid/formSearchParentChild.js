var treeApp = angular.module('treeApp', ['TreeWidget']);

app_vnm.factory('factoryFormSearchParentChild', function ($http, $translate) {
    return {
        searchParent: function (data, callback) {
            var url = eim_url + "/bs/postpaid/searchParent";

            $http.post(url, data).success(callback).error(function (data, status, headers, config) {
//				closeOverLay();
                bootbox.alert(status + " " + $translate.instant('vnm.messages.error.connection'));
                App.unblockUI("#formSearchParentChild");
            });
        },

        getPostPaidPersonDetail: function (data, callback) {
            var url = eim_url + "/bs/postpaid/postpaidPersonDetail";

            $http.post(url, data).success(callback).error(function (data, status, headers, config) {
//				closeOverLay();
                bootbox.alert(status + " " + $translate.instant('vnm.messages.error.connection'));
                App.unblockUI("#formSearchParentChild");
            });
        },
        getListGLCode: function (codeName, callback) {
            var url = eim_url + "/bs/postpaid/getListGLCode?codeName=" + codeName;
            $http.get(url).success(callback).error(function (callback) {
                bootbox.alert($translate.instant('vnm.messages.error.connection'));
//                App.unblockUI("#postpaidManagement");
            });
        }

    }
});


app_vnm.controller('formSearchParentChild', function ($scope, $rootScope, $translate, $compile, $timeout, $uibModal, $location, $window, $filter, $http,
                                                      NgTableParams, $localStorage, factoryFormSearchParentChild, ctk_postpaidManagement) {
    $scope.listPayMethod = [];
    $scope.listCollectorAgency = [];
    $scope.showBtnTreeView = false;
    $scope.selectedPostPaidPerson;
    $scope.model.selectedPostpaidCust = {};
    loadGlData();


    $scope.searchParentPeople = function () {
        console.log("init data listPayMethod");
        console.log($scope.listPayMethod);
        console.log("init data listCollectorAgency");
        console.log($scope.listCollectorAgency);


        var SIM_NUM = $scope.SearchConditionSim;
        var ID_NUM = $scope.SearchConditionIdCard;
        var POSTPAID_ACCOUNT_NO = $scope.SearchConditionAccount;
        var MSISDN = $scope.SearchConditionPhoneNo;
        var TAX_CODE = $scope.SearchConditionTaxCode;
        var USER_NAME = $scope.SearchConditionCustomerFullname;
        var count = 0;
        if (SIM_NUM !== "" && SIM_NUM) {
            count++;
        }
        if (ID_NUM !== "" && ID_NUM) {
            count++;
        }
        if (POSTPAID_ACCOUNT_NO !== "" && POSTPAID_ACCOUNT_NO) {
            count++;
        }
        if (MSISDN !== "" && MSISDN) {
            count++;
        }
        if (TAX_CODE !== "" && TAX_CODE) {
            count++;
        }
        if (USER_NAME !== "" && USER_NAME) {
            count++;
        }

        if (count > 0) {
            App.blockUI({
                target: "#formSearchParentChild",
                boxed: true,
                message: 'Loading...'
            });
            var searchConditions = {
                "SIM_NUM": SIM_NUM,
                "ID_NUM": ID_NUM,
                "POSTPAID_ACCOUNT_NO": POSTPAID_ACCOUNT_NO,
                "MSISDN": MSISDN,
                "TAX_CODE": TAX_CODE,
                "USER_NAME": USER_NAME,
            }
            factoryFormSearchParentChild.searchParent(searchConditions, function (result) {
                if (result.listPostpaidPersonObject.length > 0) {

                    $scope.listCustomer = result.listPostpaidPersonObject;
                    $scope.selectedParent = result.listPostpaidPersonObject[0];
                    $scope.selectedPostPaidPerson = result.listPostpaidPersonObject[0];
                    $scope.listChildren = result.listPostpaidPersonObject[0].listPostpaidPersonObject;
                    $scope.getItemInfo($scope.selectedPostPaidPerson);
                    App.unblockUI("#formSearchParentChild");
                    $scope.showBtnTreeView = true;

                } else if (result.listPostpaidPersonObject.length === 0) {
                    App.unblockUI("#formSearchParentChild");
                    bootbox.alert("Không có giá trị tương ứng với điều kiện tìm kiếm của bạn");

                }

                if (result.error) {
                    App.unblockUI("#formSearchParentChild");
                    bootbox.alert(status + " " + $translate.instant('vnm.messages.error.connection'));

                }


            });

        } else {

            bootbox.alert("Bạn cần nhập ít nhất một trường tìm kiếm!");
        }

    };

    $scope.getItemInfo = function (selectedAccount) {
        $scope.treeData = [];
        console.log("getItemInfo=====>");
        console.log("selectedAccount=");
        console.log(selectedAccount);
        $scope.selectedPostPaidPerson = selectedAccount;
        if ($scope.treeData.length == 0) {
            var obj = {};
            var valObj = {};
//            valObj.name = selectedAccount.givenName + selectedAccount.officialName;
            if(selectedAccount.parent){
            	if(selectedAccount.parent.listPostpaidPersonObject){
            		valObj.name = selectedAccount.parent.listPostpaidPersonObject[0].fullName;
                    valObj.accountNo = selectedAccount.parent.listPostpaidPersonObject[0].accountNo;
                    valObj.image = "/images/angular-tree/img/user.png";
                    valObj.selected = "selected";
                    $scope.treeData.push(valObj);
            	}
            	
            }
            
            
        }

        $scope.basicTree = [{
            name: selectedAccount.parent?selectedAccount.parent.fullName:selectedAccount.givenName+" "+selectedAccount.officialName,
            image: "/images/angular-tree/img/user.png",
            accountNo: selectedAccount.parent? selectedAccount.parent.accountNo:selectedAccount.accountNo,
            children: selectedAccount.parent?$scope.treeData:null
        }];

        fillPostPaidPersonObj(selectedAccount);
    };


    $scope.processTreeView = function () {
        $scope.treeData = [];
        selectedAccount = $scope.selectedPostPaidPerson;
        if(selectedAccount.parent){
				angular.forEach(selectedAccount.parent.listPostpaidPersonObject, function(value, key) {
					var obj = {};
	                var valObj = {};
	                valObj.name= value.fullName;
	                valObj.accountNo = value.accountNo;
	                valObj.image= "/images/angular-tree/img/user.png";
	                valObj.selected= key==0?"selected": "" ;
	                $scope.treeData.push(valObj);
	                
				});
				
				$scope.basicTree = [{
		    	    name: selectedAccount.parent.fullName,
		    	    image: "/images/angular-tree/img/user.png",
		    	    accountNo:selectedAccount.parent.accountNo,
		    	    children: $scope.treeData
		    		}];
				
			}
        fillPostPaidPersonObj(selectedAccount);

    };


    $scope.$on('selection-changed', function (e, node) {
        App.blockUI({
            target: "#formSearchParentChild",
            boxed: true,
            message: 'Loading...'
        });
        //node - selected node in tree
        $scope.selectedNode = node;
        console.log("$scope.selectedNode=------");
        console.log($scope.selectedNode);
        var queryData = {
            "accountNo": $scope.selectedNode.accountNo
        }

        factoryFormSearchParentChild.getPostPaidPersonDetail(queryData, function (result) {

            if (result.postpaidPersonObject) {

                fillPostPaidPersonObj(result.postpaidPersonObject);
                selectedAccount = result.postpaidPersonObject;
            }
            App.unblockUI("#formSearchParentChild");
        });

    });

    function fillPostPaidPersonObj(postPaidPersonData) {
        console.log("postPaidPersonData=");
        console.log(postPaidPersonData);
        $scope.model.selectedPostpaidCust = postPaidPersonData;
        var address = $scope.parseAddress(postPaidPersonData.homeGeneral1, postPaidPersonData.homeCity, postPaidPersonData.billProvince, postPaidPersonData.billRegion);
        $scope.customerDetailcusType = postPaidPersonData.customerType === 'Corporate' ? 'Tổ chức' : 'Cá nhân';
        $scope.customerDetailfullName = postPaidPersonData.givenName + postPaidPersonData.officialName;
        if (postPaidPersonData.parent) {
            $scope.customerDetailparentfullName = postPaidPersonData.parent.fullName;
        } else {
            $scope.customerDetailparentfullName = "";
        }

        $scope.customerDetailaddress = address;
        $scope.customerDetailparentaddress = address;

        $scope.customerDetaildob = $filter('date')(postPaidPersonData.birthDate, "dd/MM/yyyy");
        console.log("====" + $filter('date')(postPaidPersonData.birthDate, "dd/MM/yyyy"));
        $scope.customerDetaildob = postPaidPersonData.birthDate;
        $scope.customerDetailgender = postPaidPersonData.genderCode === 'Female' ? 'Nữ' : 'Nam';
        $scope.customerDetailidCard = postPaidPersonData.socialSecurityNumber;
        $scope.customerDetailtaxCode = postPaidPersonData.taxCode;
//			$scope.customerDetailparentcusType = $scope.selectedParent.customerType==='Corporate'?'Tổ chức':'Cá nhân';

        var tmpTBC = [];
        tmpTBC = $scope.listCollectorAgency.find(function (record) {
            return record.glCodeValueEn === postPaidPersonData.billType
        });
        if (tmpTBC) {
//     			if(tmpTBC.length>0){
            $scope.customerDetailLoaiTBC = tmpTBC.glCodeValueVn;
//     			}

        }
        var tmpHTTT = [];
        tmpHTTT = $scope.listPayMethod.find(function (record) {
            return record.glCodeValueEn === postPaidPersonData.paymentMethod
        });
        if (tmpHTTT) {
//     			if(tmpHTTT.length>0){
            $scope.customerDetailpaymentMethod = tmpHTTT.glCodeValueVn;
//     			}

        }
        $scope.customerDetailcreditLimit = postPaidPersonData.creditLimit != null ? postPaidPersonData.creditLimit : 0;
        $scope.customerDetailbillDebt = postPaidPersonData.accountBalance != null ? postPaidPersonData.accountBalance : 0;
        $scope.customerDetaillstSTB = postPaidPersonData.msisdn;
        $scope.customerDetailsegment = postPaidPersonData.customerSegment;
        $scope.customerDetailcusStatus = postPaidPersonData.subcriberAccountStatus;


    };

    $scope.parseAddress = function (homeGeneral1, homeCity, billProvince, billRegion) {
        var homeGeneral = homeGeneral1.split(",");
        var address = "";
        for (var i = 0; i < homeGeneral.length; i++) {
            if (homeGeneral[i] !== '') {
                address = address + homeGeneral[i] + ",";
            }
        }
        address = address + homeCity + "," + billProvince + "," + (billRegion === 'Southward' ? 'Miền Nam' : 'Miền Bắc');
        return address;
    };

    function loadGlData() {
        App.blockUI({
            target: "#formSearchParentChild",
            boxed: true,
            message: 'Loading...'
        });
        factoryFormSearchParentChild.getListGLCode("PAYMENT_METHOD", function (result) {
            if (result.status == "0" && result.messages) {
                bootbox.alert("Xảy ra lỗi trong quá trình getPayMethod! Lỗi: " + result.messages);
            } else {

                if (result.length > 0) {
                    $scope.listPayMethod = result;
                } else {
                    $scope.listPayMethod = [];
                }
            }

            App.unblockUI("#formSearchParentChild");
            factoryFormSearchParentChild.getListGLCode("COLLECTOR_AGENCY", function (result) {
                if (result.status == "0" && result.messages) {
                    bootbox.alert("Xảy ra lỗi trong quá trình getCollector acgency! Lỗi: " + result.messages);
                } else {
                    if (result.length > 0) {
                        $scope.listCollectorAgency = result;
                    } else {
                        $scope.listCollectorAgency = [];

                    }
                }
                App.unblockUI("#formSearchParentChild");
            });
        });
        
    }
});

function StringUtilNVL(val) {
    if (val == undefined || val == null) return "";
    return $.trim(val);
}

function createTimeStamp() {
    var theMoment = moment();
    var millisTimeStamp = theMoment.valueOf();
    return millisTimeStamp;
}

