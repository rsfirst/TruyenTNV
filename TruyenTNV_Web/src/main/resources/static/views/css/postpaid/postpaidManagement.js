var treeApp = angular.module('treeApp', ['TreeWidget']);

app_vnm.factory('factoryFormSearchParentChild', function ($http, $translate) {
    return {
        searchParent: function (data, callback) {
            var url = eim_url + "/bs/postpaid/searchParent";
            $http.post(url, data).success(callback).error(function (data, status, headers, config) {
                bootbox.alert(status + " " + $translate.instant('vnm.messages.error.connection'));
                closeOverLay();
            });
        },

        getPostPaidPersonDetail: function (data, callback) {
            var url = eim_url + "/bs/postpaid/postpaidPersonDetail";
            $http.post(url, data).success(callback).error(function (data, status, headers, config) {
                bootbox.alert(status + " " + $translate.instant('vnm.messages.error.connection'));
                closeOverLay();
            });
        },
        getListGLCode: function (codeName, callback) {
            var url = eim_url + "/bs/postpaid/getListGLCode?codeName=" + codeName;
            $http.get(url).success(callback).error(function (callback) {
                bootbox.alert($translate.instant('vnm.messages.error.connection'));
                closeOverLay();

            });
        }
    }
});

app_vnm.factory('ctk_postpaidManagement', function($http, $translate) {
	return {
        getListGLCode : function(codeName, callback) {
            var url = eim_url + "/bs/postpaid/getListGLCode?codeName="+ codeName;
            $http.get(url).success(callback).error(function (callback)
            {
                bootbox.alert($translate.instant('vnm.messages.error.connection'));
                closeOverLay();
            });
        },
        getListPostpaidTypeCustomer : function(callback) {
            var url = eim_url + "/bs/postpaid/getListPostpaidTypeCustomer";
            $http.get(url).success(callback).error(function (callback)
            {
                bootbox.alert($translate.instant('vnm.messages.error.connection'));
                closeOverLay();
            });
        },
        getListPostpaidServiceType : function(callback) {
            var url = eim_url + "/bs/postpaid/getListPostpaidServiceType";
            $http.get(url).success(callback).error(function (callback)
            {
                bootbox.alert($translate.instant('vnm.messages.error.connection'));
                closeOverLay();
            });
        },
        getListPostpaidPersonType : function(callback) {
            var url = eim_url + "/bs/postpaid/getListPostpaidPersonType";
            $http.get(url).success(callback).error(function (callback)
            {
                bootbox.alert($translate.instant('vnm.messages.error.connection'));
                closeOverLay();
            });
        },
        getListPostpaidCustomerSeg : function(customerSegCode, callback) {
            var url = eim_url + "/bs/postpaid/getListPostpaidCustomerSeg?customerSegCode=" + customerSegCode;
            $http.get(url).success(callback).error(function (callback)
            {
                bootbox.alert($translate.instant('vnm.messages.error.connection'));
                closeOverLay();
            });
        },
        getListProvince : function(callback) {
            var url = eim_url + "/bs/postpaid/getListProvince";
            $http.get(url).success(callback).error(function (callback)
            {
                bootbox.alert($translate.instant('vnm.messages.error.connection'));
                closeOverLay();
            });
        },
        getListDistrict : function(provinceId, callback) {
            var url = eim_url + "/bs/postpaid/getListDistrict?provinceId=" + provinceId ;
            $http.get(url).success(callback).error(function (callback)
            {
                bootbox.alert($translate.instant('vnm.messages.error.connection'));
                closeOverLay();
            });
        },
        searchPostpaidPersonParent : function(companyName, genderCode, personType, idNum, birthDate, taxCode, callback) {
            var url = eim_url + "/bs/postpaid/searchPersonPostpaidParent?companyName=" + companyName + "&genderCode=" + genderCode + "&personType=" + personType
                + "&idNum=" + idNum + "&birthDate=" + birthDate + "&taxCode=" + taxCode;
            $http.get(url).success(callback).error(function (callback)
            {
                bootbox.alert($translate.instant('vnm.messages.error.connection'));
                closeOverLay();
            });
        },
	    searchPostpaidPersonByIdOrTax : function(valueSearch, isIdNum, callback) {
            var url = eim_url + "/bs/postpaid/searchPostpaidPersonByTaxCodeOrIDNum?valueSearch=" + valueSearch + "&isIdNum=" + isIdNum;
            $http.get(url).success(callback).error(function (callback)
            {
                bootbox.alert($translate.instant('vnm.messages.error.connection'));
                closeOverLay();
            });
        },
        addNewPersonParent : function(staffId, shopId, data,  callback) {
            var url = eim_url + "/bs/postpaid/addNewPersonPostpaidParent?staffId=" + staffId + "&shopId=" + shopId;
            $http.post(url, data).success(callback).error(function(callback) {
                bootbox.alert(status + " " + $translate.instant('vnm.messages.error.connection'));
                closeOverLay();
            });
        },
        updatePersonParent : function(staffId, shopId, data, callback) {
            var url = eim_url + "/bs/postpaid/updatePersonPostpaidParent?staffId=" + staffId + "&shopId=" + shopId;
            $http.post(url, data).success(callback).error(function(callback) {
                bootbox.alert(status + " " + $translate.instant('vnm.messages.error.connection'));
                closeOverLay();
            });
        },
        addNewPersonChild : function(staffId, shopId, data,  callback) {
            var url = eim_url + "/bs/postpaid/addNewPersonPostpaidChild?staffId=" + staffId + "&shopId=" + shopId;
            $http.post(url, data).success(callback).error(function(callback) {
                bootbox.alert(status + " " + $translate.instant('vnm.messages.error.connection'));
                closeOverLay();
            });
        },
        updatePersonChild : function(staffId, shopId, data, callback) {
            var url = eim_url + "/bs/postpaid/updatePersonPostpaidChild?staffId=" + staffId + "&shopId=" + shopId;
            $http.post(url, data).success(callback).error(function(callback) {
                bootbox.alert(status + " " + $translate.instant('vnm.messages.error.connection'));
                closeOverLay();
            });
        },
        searchPostpaidPersonParentByAccountNo : function(accountNo, callback) {
            var url = eim_url + "/bs/postpaid/searchPostpaidPersonByAccountNo?accountNo=" + accountNo;
            $http.get(url).success(callback).error(function (callback)
            {
                bootbox.alert($translate.instant('vnm.messages.error.connection'));
                closeOverLay();
            });
        },
        searchParentHistory : function(data, callback) {
            var url = eim_url + "/bs/postpaid/searchParentHistory";
            $http.post(url, data).success(callback).error(function(callback) {
                bootbox.alert(status + " " + $translate.instant('vnm.messages.error.connection'));
                closeOverLay();
            });
        },
        getListReasonChangeSim : function(callback) {
            var url = eim_url + "/bs/postpaid/getListResonChangeSimPostpaid";
            $http.get(url).success(callback).error(function (callback)
            {
                bootbox.alert($translate.instant('vnm.messages.error.connection'));
                closeOverLay();
            });
        },
        callChangeSimPostpaid: function (newSerial, staffId, shopId, strComment, data, callback) {
            var url = eim_url + "/bs/postpaid/actionChangeSimPostpaid?newSerial=" + newSerial + "&staffId=" + staffId + "&shopId=" + shopId + "&strComment=" + strComment;
            $http.post(url, data).success(callback).error(function (callback) {
                bootbox.alert(status + " " + $translate.instant('vnm.messages.error.connection'));
                closeOverLay();
            });
        },
	}
});
app_vnm.factory('ctk_serviceDataPostpaid', function($http, $translate) {
    return {
        getPackageClass : function(callback) {
            var url = eim_url + "/bs/PostPaidCommon/getPackageClass";
            $http.post(url).success(callback).error(function (callback)
            {
                bootbox.alert($translate.instant('vnm.messages.error.connection'));
                closeOverLay();
            });
        },
        checkExist : function(mdn, callback) {
            var url = eim_url + "/bs/PostPaidCommon/checkExistRequest?mdn="+mdn;
            $http.get(url).success(callback).error(function (callback)
            {
                bootbox.alert($translate.instant('vnm.messages.error.connection'));
                closeOverLay();
            });
        },
        checkExistAction : function(mdn, callback) {
            var url = eim_url + "/bs/SearchRequestForm/checkExist?mdn="+mdn;
            $http.get(url, mdn).success(callback).error(function (callback)
            {
                bootbox.alert($translate.instant('vnm.messages.error.connection'));
                closeOverLay();
            });
        },
        searchRequestFormOnCancel : function(msisdn, staffCode, callback) {
            var url = eim_url + "/bs/SearchRequestForm/onCancel?msisdn="+msisdn+"&staffCode="+staffCode;
            $http.get(url).success(callback).error(function (callback)
            {
                bootbox.alert($translate.instant('vnm.messages.error.connection'));
                closeOverLay();
            });
        },
        checkPersonIDISDN : function(strPer, strISDN, callback) {
            var url = eim_url + "/bs/PostPaidCommon/checkPersonIDISDN?strPer="+strPer+"&strISDN="+strISDN;
            $http.get(url).success(callback).error(function (callback)
            {
                bootbox.alert($translate.instant('vnm.messages.error.connection'));
                closeOverLay();
            });
        },

        // checkPersonIDISDN : function(strPer, strISDN) {
        //     return $http({
        //         method: 'GET',
        //         url: eim_url + "/bs/PostPaidCommon/checkPersonIDISDN",
        //         params: {"strPer":strPer, "strISDN":strISDN},
        //         headers: {'Content-Type': 'application/x-www-form-urlencoded'}
        //     });
        // },

        getApParam : function(paramType, paramName, callback) {
            var url = eim_url + "/bs/PostPaidCommon/getApParam?paramType="+paramType+"&paramName="+paramName;
            $http.get(url).success(callback).error(function (callback)
            {
                bootbox.alert($translate.instant('vnm.messages.error.connection'));
                closeOverLay();
            });
        },

        addNewConnect : function(paramNewConnect, callback) {
            var url = eim_url + "/bs/PostPaidCommon/addNewConnect";
            $http.post(url, paramNewConnect).success(callback).error(function (callback) {
                bootbox.alert($translate.instant('vnm.messages.error.connection'));
                closeOverLay();
            });
        },
        updateExistRequestPrePaid : function(mdn, staffCode, callback) {
            var url = eim_url + "/bs/PostPaidCommon/updateExistReqPre?mdn="+mdn+"&staffCode="+staffCode;
            $http.get(url).success(callback).error(function (callback)
            {
                bootbox.alert($translate.instant('vnm.messages.error.connection'));
                closeOverLay();
            });
        },
    }
});

app_vnm.controller('ctrl-postpaidManagement', function($scope, $rootScope, $translate, $compile, $timeout, $uibModal, $location, $window, FileUploader, $filter, $http,
		NgTableParams, $localStorage,ctk_postpaidManagement, ctk_serviceDataPostpaid, factoryFormSearchParentChild) {
	
	$scope.model = {};
    $scope.model.searchSex = {};
    $scope.model.searchPersonType = {};
    $scope.listPersonParent = [];
    $scope.tableSub = new NgTableParams({}, {
        dataset : []
    });
    $scope.model.personSelected = {};
    $scope.model.personBackup = {};
    $scope.model.codeName = "GENDER"; //get combo gioi tinh
    $scope.model.codeLang = "WRITTEN_LANGUAGE_CODE"; //get combo language
    $scope.model.codePayMethod = "PAYMENT_METHOD";
    $scope.model.codePayLocation = "BILL_MEDIA";
    
    $scope.listPayMethod = [];
    $scope.listCollectorAgency = [];
    $scope.showBtnTreeView = false;
    $scope.selectedPostPaidPerson;
    $scope.model.selectedPostpaidCust = {};

    $scope.regionList = [ {
        'code' : '0',
        'name' : '',
        'nameEn' : ''
    }, {
        'code' : '1',
        'name' : 'Miền Bắc',
        'nameEn' : 'Northern'
    }, {
        'code' : '2',
        'name' : 'Miền Trung',
        'nameEn' : 'Central'
    }, {
        'code' : '3',
        'name' : 'Miền Nam',
        'nameEn' : 'Southward'
    } ];

    $scope.model.isNotEdit = true;
    $scope.model.isAdd = false;
    $scope.model.showEdit = true;
    $scope.model.disableChangeSim = true;

    var checkLoad = 0;
    var indexSelect = -1;
    $scope.listComboGender = [];
    $scope.listComboLang = [];
    $scope.listCustType = [];
    $scope.listServiceType = [];
    $scope.listDefaultService = [];
    $scope.listRegisterService = [];
    $scope.listPersonType = [];
    $scope.listFamilySeg = [];
    $scope.listConsumerSeg = [];
    $scope.listCorporateSeg = [];
    $scope.listProvince = [];
    $scope.listLivingDistrict = [];
    $scope.listBillDistrict = [];

    $scope.listComboGenderSearch = [];
    $scope.listPersonTypeSearch = [];
    $scope.listCustSeg = [];
    $scope.listCustSegDetail = [];
    $scope.listPayMethod = [];
    $scope.listPayLocation = [];

    $scope.objectSearchHis = [];

    $scope.getGenderData = function() { 
    	overLoading();
        ctk_postpaidManagement.getListGLCode($scope.model.codeName, function(result) {
        	closeOverLay();
            if (result.status == "0" && result.messages){
                bootbox.alert("Xảy ra lỗi trong quá trình getGenderData! Lỗi: " + result.messages);
            } else {
                if (result.length > 0) {
                    var emptyOb = {
                        value :"ALL",
                        glCodeValueVn : "Tất cả"

                    };
                    $scope.listComboGenderSearch.push(emptyOb)
                    $scope.listComboGenderSearch = $scope.listComboGenderSearch.concat(result);
                    $scope.model.searchSex = $scope.listComboGenderSearch[0];
                    $scope.model.sex = $scope.listComboGenderSearch[0];
                    $scope.listComboGender = result;
                } else {
                    $scope.listComboGender = [];
                    $scope.listComboGenderSearch = [];
                    // bootbox.alert("getListGLCode : Không tìm thấy dữ liệu!");
                }
                
            }
            checkLoad++;
            console.log(checkLoad);
            $scope.getLangData();
        });
    }

    $scope.getLangData = function() {
    	overLoading();
        ctk_postpaidManagement.getListGLCode($scope.model.codeLang, function(result) {
        	closeOverLay();
            if (result.status == "0" && result.messages){
                bootbox.alert("Xảy ra lỗi trong quá trình getLangData! Lỗi: " + result.messages);
            } else {
                if (result.length > 0) {
                    $scope.listComboLang = result;
                } else {
                    $scope.listComboLang = [];
                }
            }
            checkLoad++;
            console.log(checkLoad);
            $scope.getTypeCustomerData();
        });
    }

    $scope.getPayMethod = function() {
    	overLoading();
        ctk_postpaidManagement.getListGLCode($scope.model.codePayMethod, function(result) {
        	closeOverLay();
            if (result.status == "0" && result.messages){
                bootbox.alert("Xảy ra lỗi trong quá trình getPayMethod! Lỗi: " + result.messages);
            } else {
                if (result.length > 0) {
                    $scope.listPayMethod = result;
                } else {
                    $scope.listPayMethod = [];
                }
            }
            checkLoad++;
            console.log(checkLoad);
            $scope.getPayLocation();
        });
    }

    $scope.getPayLocation = function() {
    	overLoading();
        ctk_postpaidManagement.getListGLCode($scope.model.codePayLocation, function(result) {
        	closeOverLay();
            if (result.status == "0" && result.messages){
                bootbox.alert("Xảy ra lỗi trong quá trình getPayLocation! Lỗi: " + result.messages);
            } else {
                if (result.length > 0) {
                    $scope.listPayLocation = result;
                } else {
                    $scope.listPayLocation = [];
                }
            }
            checkLoad++;
            console.log(checkLoad);
            $scope.getBillTypeFamily();
        });
    }

    $scope.getTypeCustomerData = function() {
    	overLoading();
        ctk_postpaidManagement.getListPostpaidTypeCustomer(function(result) {
        	closeOverLay();
            if (result.status == "0" && result.messages){
                bootbox.alert("Xảy ra lỗi trong quá trình getTypeCustomerData! Lỗi: " + result.messages);
            } else {
                if (result.length > 0) {
                    $scope.listCustType = result;
                } else {
                    $scope.listCustType = [];
                }
            }
            checkLoad++;
            console.log(checkLoad);
            $scope.getServiceTypeData();
        });
    }

    $scope.getServiceTypeData = function() {
    	overLoading();
        ctk_postpaidManagement.getListPostpaidServiceType(function(result) {
        	closeOverLay();
            if (result.status == "0" && result.messages){
                bootbox.alert("Xảy ra lỗi trong quá trình getServiceTypeData! Lỗi: " + result.messages);
            } else {
                if (result.length > 0) {
                    $scope.listServiceType = result;
                } else {
                    $scope.listServiceType = [];
                }
            }
            $scope.getServiceTypeForTable();
            checkLoad++;
            console.log(checkLoad);
           
            $scope.getPersonTypeData()
        });
    }

    $scope.getPersonTypeData = function() {
    	overLoading();
        ctk_postpaidManagement.getListPostpaidPersonType(function(result) {
        	closeOverLay();
            if (result.status == "0" && result.messages){
                bootbox.alert("Xảy ra lỗi trong quá trình getPersonTypeData! Lỗi: " + result.messages);
            } else {
                if (result.length > 0) {
                    var emptyOb = {
                        svPersonNoteTypeId: "ALL",
                        personTypeNameVn: "Tất cả"
                    };
                    $scope.listPersonTypeSearch.push(emptyOb)
                    $scope.listPersonTypeSearch = $scope.listPersonTypeSearch.concat(result);
                    $scope.model.searchPersonType = $scope.listPersonTypeSearch[0];
                    $scope.listPersonType = result;
                } else {
                    $scope.listPersonType = [];
                    $scope.listPersonTypeSearch = [];
                }
            }
            checkLoad++;
            console.log(checkLoad);
            $scope.getFamilySegData();
        });
    }

    $scope.getFamilySegData = function() {
    	overLoading();
        ctk_postpaidManagement.getListPostpaidCustomerSeg("FAMILY", function(result) {
        	closeOverLay();
            if (result.status == "0" && result.messages){
                bootbox.alert("Xảy ra lỗi trong quá trình getListPostpaidCustomerSeg! Lỗi: " + result.messages);
            } else {
                if (result.length > 0) {
                    $scope.listFamilySeg = result;
                } else {
                    $scope.listFamilySeg = [];
                }
            }
            checkLoad++;
            console.log(checkLoad);
            $scope.getConsumerSegData();
        });
    }

    $scope.getBillTypeFamily = function() {
    	overLoading();
        ctk_postpaidManagement.getListGLCode("BILL_TYPE_FAMILY", function(result) {
        	closeOverLay();
            //App.unblockUI("#postpaidManagement");

            if (result.status == "0" && result.messages){
                bootbox.alert("Xảy ra lỗi trong quá trình getBillTypeFamily! Lỗi: " + result.messages);
            } else {
                if (result.length > 0) {
                    $scope.listBillTypeFamily = result;
                } else {
                    $scope.listBillTypeFamily = [];
                }
            }
            checkLoad++;
            console.log(checkLoad);
            $scope.getBillTypeCorporate();
        });
    }

    $scope.getBillTypeCorporate = function() {
    	overLoading();
        ctk_postpaidManagement.getListGLCode("BILL_TYPE_CORPORATE", function(result) {
        	closeOverLay();
            if (result.status == "0" && result.messages){
                bootbox.alert("Xảy ra lỗi trong quá trình getBillTypeCorporate! Lỗi: " + result.messages);
            } else {
                if (result.length > 0) {
                    $scope.listBillTypeCorporate = result;
                } else {
                    $scope.listBillTypeCorporate = [];
                }
            }
            checkLoad++;
            console.log(checkLoad);
            $scope.loadStatus();
        });
    }

    $scope.getConsumerSegData = function() {
    	overLoading();
        ctk_postpaidManagement.getListPostpaidCustomerSeg("CONSUMER", function(result) {
        	closeOverLay();
            if (result.status == "0" && result.messages){
                bootbox.alert("Xảy ra lỗi trong quá trình getConsumerSegData! Lỗi: " + result.messages);
            } else {
                if (result.length > 0) {
                    $scope.listConsumerSeg = result;
                } else {
                    $scope.listConsumerSeg = [];
                }
            }
            checkLoad++;
            console.log(checkLoad);
            $scope.getCorporateSegData();
        });
    }

    $scope.getCorporateSegData = function() {
    	overLoading();
        ctk_postpaidManagement.getListPostpaidCustomerSeg("CORPORATE", function(result) {
        	closeOverLay();
            if (result.status == "0" && result.messages){
                bootbox.alert("Xảy ra lỗi trong quá trình getCorporateSegData! Lỗi: " + result.messages);
            } else {
                if (result.length > 0) {
                    $scope.listCorporateSeg = result;
                } else {
                    $scope.listCorporateSeg = [];
                }
            }
            checkLoad++;
            console.log(checkLoad);
            $scope.getProvinceData();
        });
    }

    $scope.getProvinceData = function() {
    	overLoading();
        ctk_postpaidManagement.getListProvince(function(result) {
        	 closeOverLay();
            if (result.status == "0" && result.messages){
                bootbox.alert("Xảy ra lỗi trong quá trình getProvinceData! Lỗi: " + result.messages);
            } else {
                if (result.length > 0) {
                    $scope.listProvince = result;
                } else {
                    $scope.listProvince = [];
                }
            }
            checkLoad++;
            console.log(checkLoad);
            $scope.getPayMethod();
        });
    }

    $scope.getServiceTypeByCon = function(strType, sysType) {
        var lstObject = [];
        $scope.listServiceType.forEach(function(item){
            if (item['autoAssigned']==strType && item['svServiceTypeId']==sysType){
                if (item['autoAssigned']=='1') item['checked']=true;
                else item['checked']=false;
                lstObject.push(item);
            }
        });
        return lstObject;
    }

    $scope.selectEntity = function() {
        console.log($scope.listDefaultService);
    }

    $scope.getServiceTypeForTable = function() {
        $scope.listDefaultService = $scope.getServiceTypeByCon('1', '1000040');
        $scope.listRegisterService = $scope.getServiceTypeByCon('0', '1000040');
    }

    var initialize = function () {
        var date = new Date();
        // $scope.model.searchDateBirth = $filter('date')(new Date(), 'dd/MM/yyyy');

//        overLoading("loading...");
        $scope.getGenderData();
       // $scope.getLangData();
       // $scope.getTypeCustomerData();
       // $scope.getServiceTypeData();
        //$scope.getPersonTypeData();
        //$scope.getFamilySegData();
        //$scope.getConsumerSegData();
        //$scope.getCorporateSegData();
        //$scope.getProvinceData();
        //$scope.getPayMethod();
        //$scope.getPayLocation();
        //$scope.getBillTypeFamily();
        //$scope.getBillTypeCorporate();
	}

    initialize();

    //load data cho cac combobox roi closeOverLay
    $scope.$watch(function() {
        return checkLoad;
    }, function(check) {
        if (check ==9 ){
            closeOverLay();
            $scope.model.personType = $scope.listPersonType[0];
            $scope.listCustSeg = $scope.listFamilySeg;
        }
    });

    $scope.selectPersonType = function (item) {
        if (item.svPersonNoteTypeId == "0"){
            $scope.listCustSeg = $scope.listFamilySeg;
            $scope.listNoticeChargeType = $scope.listBillTypeFamily;
        } else {
            $scope.listCustSeg = $scope.listCorporateSeg;
            $scope.listNoticeChargeType = $scope.listBillTypeCorporate;
        }
        $scope.model.detailSegment = $scope.listCustSeg[0];
        $scope.model.detailChildSegment = $scope.listCustSeg[0];
    }

    $scope.selectLivingProvince = function (item) {
        //change region when choose province
        $scope.model.detailLivingRegion = $scope.regionList[item.code];
      
        $scope.getDistrictFromProvince ("LIVING", item);
        $scope.model.detailBillProvince = item;
        $scope.selectBillProvince(item);
        $scope.model.detailLivingDistrict = {};
    }

    $scope.selectBillProvince = function (item) {
        //change region when choose province
        $scope.model.detailBillRegion = $scope.regionList[item.code];
        $scope.model.detailBillDistrict = {};
        //$scope.getDistrictFromProvince2 ("BILL", item);
        $scope.model.detailChildBillRegion = $scope.regionList[item.code];
        $scope.model.detailChildBillDistrict = {};
    }

    $scope.selectLivingDistrict = function (item) {
        $scope.model.detailBillDistrict = item;
    }

    $scope.changeHomeSuburb = function (item) {
        $scope.model.personSelected.postalSuburb = item;
    }

    $scope.changeHomeLine2 = function (item) {
        $scope.model.personSelected.postalLine2 = item;
    }

    $scope.changeHomeLine1 = function (item) {
        $scope.model.personSelected.postalLine1 = item;
    }

    $scope.changeHomeGeneral3 = function (item) {
        $scope.model.personSelected.postalGeneral3 = item;
    }

    $scope.changeHomeGeneral4 = function (item) {
        $scope.model.personSelected.postalGeneral4 = item;
    }

    $scope.getDistrictFromProvince = function (type, item) {
       overLoading();
        //get list district
        ctk_postpaidManagement.getListDistrict(item.proId, function(result) {
           
            closeOverLay();

            if (result.status == "0" && result.messages){

                bootbox.alert("Xảy ra lỗi trong quá trình getListDistrict! Lỗi: " + result.messages);
            } else {
                if (result.length > 0) {
                    if (type == "LIVING"){
                        $scope.listLivingDistrict = result;
                        $scope.model.detailLivingDistrict = $scope.listLivingDistrict[$scope.getIndexDistrict($scope.listLivingDistrict,$scope.model.personSelected.homeCity)];
                    } else {
                        $scope.listBillDistrict = result;
                        $scope.model.detailBillDistrict = $scope.listBillDistrict[$scope.getIndexDistrict($scope.listBillDistrict,$scope.model.personSelected.postalCity)];
                    }
                } else {
                    if (type == "LIVING"){
                        $scope.listLivingDistrict = [];
                    } else {
                        $scope.listBillDistrict = [];
                    }
                }
            }
            $scope.getDistrictFromProvince2 ("BILL", item);

        });
    }
    
    $scope.getDistrictFromProvince2 = function (type, item) {
        overLoading();
         //get list district
         ctk_postpaidManagement.getListDistrict(item.proId, function(result) {
            
             closeOverLay();

             if (result.status == "0" && result.messages){

                 bootbox.alert("Xảy ra lỗi trong quá trình getListDistrict! Lỗi: " + result.messages);
             } else {
                 if (result.length > 0) {
                     if (type == "LIVING"){
                         $scope.listLivingDistrict = result;
                         $scope.model.detailLivingDistrict = $scope.listLivingDistrict[$scope.getIndexDistrict($scope.listLivingDistrict,$scope.model.personSelected.homeCity)];
                     } else {
                         $scope.listBillDistrict = result;
                         $scope.model.detailBillDistrict = $scope.listBillDistrict[$scope.getIndexDistrict($scope.listBillDistrict,$scope.model.personSelected.postalCity)];
                     }
                 } else {
                     if (type == "LIVING"){
                         $scope.listLivingDistrict = [];
                     } else {
                         $scope.listBillDistrict = [];
                     }
                 }
             }
         });
     }

    $scope.searchPostpaidPerson = function() {
        var companyName = StringUtilNVLWithDefault($scope.model.searchCompanName,"");
        var genderCode = StringUtilNVLWithDefault($scope.model.searchSex.value,"");
        var personType = StringUtilNVLWithDefault($scope.model.searchPersonType.svPersonNoteTypeName,"");
        var idNum = StringUtilNVLWithDefault($scope.model.searchIdNum,"") ;
        var birthDate = StringUtilNVLWithDefault($("#searchDateOfBirth").val(),"");
        var taxCode = StringUtilNVLWithDefault($scope.model.searchTax,"");

        if (companyName == "" && ( genderCode == "ALL" || genderCode == "") && personType == ""  && idNum == "" && birthDate == "" && taxCode == ""){
            bootbox.alert("Phải nhập ít nhất một điều kiện tìm kiếm. Vui lòng thử lại!");
            return;
        }

        if (genderCode == "ALL" ){
            genderCode = "";
        }

      overLoading();
        $scope.model.personSelected = {};
        ctk_postpaidManagement.searchPostpaidPersonParent(companyName, genderCode, personType, idNum, birthDate, taxCode, function(result) {
        	closeOverLay();
            if (result.status == "0" && result.messages){
                bootbox.alert("Xảy ra lỗi trong quá trình tìm kiếm! Lỗi: " + result.messages);
            } else {
                if (result.length > 0) {
                    $scope.listPersonParent = result;
                    $scope.tableSub = new NgTableParams({}, {
                        dataset : $scope.listPersonParent
                    });
                } else {
                    $scope.listPersonParent = [];
                    $scope.tableSub = new NgTableParams({}, {
                        dataset : []
                    });
                    bootbox.alert("Không tìm thấy dữ liệu!");
                }
            }
        });
    }

    $scope.model.detailPersonType = {};
    $scope.model.detailSegment = {};
    $scope.model.detailGender = {};
    $scope.model.detailLang = {};
    $scope.model.detailLivingRegion = {};
    $scope.model.detailLivingProvince = {};
    $scope.model.detailLivingDistrict = {};

    $scope.model.detailBillRegion = {};
    $scope.model.detailBillProvince = {};
    $scope.model.detailBillDistrict = {};

    $scope.getThisPerson = function(item) {
        if (!$scope.model.isNotEdit){
            return;
        }
        indexSelect = $scope.listPersonParent.indexOf(item);
        $scope.model.personSelected = item;

        $scope.model.detailPersonType = $scope.model.personSelected.personTypeId !=null ? $scope.listPersonType[$scope.getIndexPersonType($scope.listPersonType,$scope.model.personSelected.personTypeId)] : {};
        if ($scope.model.personSelected.personTypeId !=null ){
            $scope.selectPersonType($scope.model.detailPersonType);
        }
        $scope.model.detailSegment = $scope.listCustSeg[$scope.getIndexGL($scope.listCustSeg, $scope.model.personSelected.customerSegment)];
        $scope.model.detailGender = $scope.listComboGender[$scope.getIndexGL($scope.listComboGender,$scope.model.personSelected.genderCode)];
        $scope.model.detailLang = $scope.listComboLang[$scope.getIndexGL($scope.listComboLang,$scope.model.personSelected.spokenLanguageCode)];
        $scope.model.detailLivingRegion = $scope.regionList[$scope.getIndexRegion($scope.regionList,$scope.model.personSelected.homeGeneral1)];
        $scope.model.detailLivingProvince = $scope.listProvince[$scope.getIndexProvince($scope.listProvince,$scope.model.personSelected.homeState)];
        $scope.model.detailBillRegion = $scope.regionList[$scope.getIndexRegion($scope.regionList,$scope.model.personSelected.postalGeneral1)];
        $scope.model.detailBillProvince = $scope.listProvince[$scope.getIndexProvince($scope.listProvince,$scope.model.personSelected.postalState)];
        
        if ($scope.model.detailLivingProvince != null){
        	overLoading();
            ctk_postpaidManagement.getListDistrict($scope.model.detailLivingProvince.proId, function(result) {
            	closeOverLay();
                if (result.status == "0" && result.messages){
                    bootbox.alert("Xảy ra lỗi trong quá trình getListDistrict! Lỗi: " + result.messages);
                } else {
                    if (result.length > 0) {
                        $scope.listLivingDistrict = result;
                        $scope.model.detailLivingDistrict = $scope.listLivingDistrict[$scope.getIndexDistrict($scope.listLivingDistrict,$scope.model.personSelected.homeCity)];
                    } else {
                        $scope.listLivingDistrict = [];
                    }
                    $scope.model.detailLivingDistrict.district = $scope.model.personSelected.homeCity;
                    
                    if ($scope.model.detailBillProvince != null){
                    	overLoading();
                        //get list district
                        ctk_postpaidManagement.getListDistrict($scope.model.detailBillProvince.proId, function(result) {
                        	closeOverLay();
                            if (result.status == "0" && result.messages){
                                bootbox.alert("Xảy ra lỗi trong quá trình getListDistrict! Lỗi: " + result.messages);
                            } else {
                                if (result.length > 0) {
                                    $scope.listBillDistrict = result;
                                    $scope.model.detailBillDistrict = $scope.listBillDistrict[$scope.getIndexDistrict($scope.listBillDistrict,$scope.model.personSelected.postalCity)];
                                } else {
                                    $scope.listBillDistrict = [];
                                }
                                
                                $scope.model.detailBillDistrict.district = $scope.model.personSelected.postalCity;
                            }
                        });
                    }
                }
            });
        }
        
        $scope.account=item.accountNo;
        $scope.objectSearchHis.fullName = item.fullName;
        $scope.objectSearchHis.socialSecurityNumber = item.socialSecurityNumber;
        $scope.objectSearchHis.birthDate = item.birthDate;
    }

    $scope.getIndexGL = function (arr, item) {
        return arr.findIndex(x => x.value.toUpperCase()== StringUtilNVLWithDefault(item, "").toUpperCase());
    }

    $scope.getIndexPersonType = function (arr, item) {
        return arr.findIndex(x => x.svPersonNoteTypeId.toUpperCase()== StringUtilNVLWithDefault(item, "").toUpperCase());
    }

    $scope.getIndexRegion = function (arr, item) {
        return arr.findIndex(x => x.nameEn.toUpperCase()== StringUtilNVLWithDefault(item, "").toUpperCase());
    }

    $scope.getIndexProvince = function (arr, item) {
        return arr.findIndex(x => x.province.toUpperCase()== StringUtilNVLWithDefault(item, "").toUpperCase());
    }

    $scope.getIndexDistrict = function (arr, item) {
        return arr.findIndex(x => x.district.toUpperCase()== StringUtilNVLWithDefault(item, "").toUpperCase());
    }

    $scope.getIndexPayment = function (arr, item) {
        return arr.findIndex(x => x.glCodeValueEn.toUpperCase()== StringUtilNVLWithDefault(item, "").toUpperCase());
    }

    $scope.getIndexPaymentValue = function (arr, item) {
        return arr.findIndex(x => x.value.toUpperCase()== StringUtilNVLWithDefault(item, "").toUpperCase());
    }

    $scope.addNewPerson = function() {
        $scope.model.isNotEdit = false;
        $scope.model.showEdit = false;
        $scope.model.isAdd = true;

        $scope.model.personBackup = angular.copy($scope.model.personSelected);
        $scope.model.personSelected = {};

        $scope.model.detailPersonType = $scope.listPersonType[0];
        $scope.selectPersonType($scope.model.detailPersonType);
        $scope.model.detailSegment = $scope.listCustSeg[0];
        $scope.model.detailGender = $scope.listComboGender[0];
        $scope.model.detailLang = $scope.listComboLang[0];
        $scope.model.detailLivingRegion = {};
        $scope.model.detailLivingProvince = {};
        $scope.model.detailLivingDistrict = {};

        $scope.model.detailBillRegion = {};
        $scope.model.detailBillProvince = {};
        $scope.model.detailBillDistrict = {};

        $scope.model.personSelected.emailAddress = "N/A";
        $scope.disableSearchPar();

        $('#liTabChildSubManager').addClass('disableTabPostpaid');
        $('#liTabSearchChild').addClass('disableTabPostpaid');
    }

    $scope.showHisPar = function() {
        // alert($scope.objectSearchHis.birthDate);
        // $scope.model. = $scope.objectSearchHis.accountNo;
        $scope.tableActionDetails = new NgTableParams({}, {
            dataset : null
        });
        $scope.tableActions = new NgTableParams({}, {
            dataset : null
        });

        $scope.objectSearchHis.accountNo = $scope.account;

        $scope.objectSearchHis.postpaidAccountType = "CUS_PARENT";
        $scope.model.hisCusName = $scope.objectSearchHis.fullName;
        $scope.model.hisCusIdCard = $scope.objectSearchHis.socialSecurityNumber;
        $scope.model.hisCusBirthDate = $scope.objectSearchHis.birthDate;
        $('#liTabParentSubManager').removeClass('active');
        $('#liTabHistory').addClass('active');
        $('#tabParentSubManager').removeClass('active');
        $('#tabHistory').addClass('active');
        $(window).scrollTop(0);
    }

    $scope.showHisChild = function() {
        $scope.tableActionDetails = new NgTableParams({}, {
            dataset : null
        });
        $scope.tableActions = new NgTableParams({}, {
            dataset : null
        });
        // alert($scope.objectSearchHis.birthDate);
        // $scope.model. = $scope.objectSearchHis.accountNo;

        $scope.objectSearchHis.accountNo= $scope.accountChild;
        $scope.objectSearchHis.postpaidAccountType = "CUS";
        $scope.model.hisCusName = $scope.objectSearchHis.fullName;
        $scope.model.hisCusIdCard = $scope.objectSearchHis.socialSecurityNumber;
        $scope.model.hisCusBirthDate = $scope.objectSearchHis.birthDate;
        $('#liTabChildSubManager').removeClass('active');
        $('#liTabHistory').addClass('active');
        $('#tabChildSubManager').removeClass('active');
        $('#tabHistory').addClass('active');
        $(window).scrollTop(0);
    }

    $scope.showHisChildTB = function() {
        $scope.tableActionDetails = new NgTableParams({}, {
            dataset : null
        });
        $scope.tableActions = new NgTableParams({}, {
            dataset : null
        });
        // alert($scope.objectSearchHis.birthDate);
        // $scope.model. = $scope.objectSearchHis.accountNo;
        $scope.model.hisCusName = $scope.objectSearchHis.fullName;
        $scope.model.hisCusIdCard = $scope.objectSearchHis.socialSecurityNumber;
        $scope.model.hisCusBirthDate = $scope.objectSearchHis.birthDate;
        $scope.objectSearchHis.postpaidAccountType = "Sub";
        $scope.objectSearchHis.accountNo = $scope.hisIsdn.substring(2,11);
        $('#liTabChildSubManager').removeClass('active');
        $('#liTabHistory').addClass('active');
        $('#tabChildSubManager').removeClass('active');
        $('#tabHistory').addClass('active');
        $(window).scrollTop(0);
    }

    $scope.disableSearchPar = function() {
        $('#formSearchPar :input').attr('disabled', true);
        $('#formSearchPar :button').attr('disabled', true);
    }

    $scope.enableSearchPar = function() {
        $('#formSearchPar :input').removeAttr('disabled');
        $('#formSearchPar :button').removeAttr('disabled');
    }

    $scope.editPerson = function() {
        if ($scope.model.personSelected.accountNo == null || $scope.model.personSelected.accountNo.trim() == ""){
            bootbox.alert("Chưa chọn KH cha để sửa KH!" );
            return;
        }
        $scope.model.isNotEdit = false;
        $scope.model.showEdit = false;
        $scope.model.personBackup = angular.copy($scope.model.personSelected);
        $scope.disableSearchPar();
        if ($scope.model.detailPersonType.svPersonNoteTypeId == "0"){
            $scope.model.disableIdnum = true;
        } else {
            $scope.model.disableTaxcode = true;
        }
        $('#liTabChildSubManager').addClass('disableTabPostpaid');
        $('#liTabSearchChild').addClass('disableTabPostpaid');
    }

    $scope.commitAccept = function() {
        if (!$scope.validateAddPerson()){
            return;
        }
        if ($scope.model.isAdd){
            //add new person
            if ($scope.model.detailPersonType.svPersonNoteTypeId == "0"){
                var valueSearch = $scope.model.personSelected.socialSecurityNumber.trim();
                var isIdNum = true;
            } else {
                var valueSearch = $scope.model.personSelected.taxCode.trim();
                var isIdNum = false;
            }
            var lstSearchId = [];
            var canAdd = true;

            overLoading();

            ctk_postpaidManagement.searchPostpaidPersonByIdOrTax(valueSearch, isIdNum, function(result) {
            	closeOverLay();
                if (result.status == "0" && result.messages){
                    bootbox.alert("Xảy ra lỗi trong quá trình tìm kiếm CMT! Lỗi: " + result.messages);
                } else {
                    lstSearchId = result;
                }

                if (lstSearchId.length > 0){
                    if (isIdNum){
                        for (i = 0; i < lstSearchId.length; i++){
                            if (lstSearchId[i].personTypeId == $scope.model.detailPersonType.svPersonNoteTypeId){
                                canAdd = false;
                                bootbox.confirm({
                                    message: "CMTND " + valueSearch + " đã tồn tại, xin hãy sử dụng CMT khác. Bạn có muốn tạo KH con!",
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
                                            $scope.model.personSelected = lstSearchId[i];
                                            $scope.listPersonParent = [];
                                            $scope.listPersonParent.push(lstSearchId[i]);
                                            indexSelect = 0;
                                            $scope.tableSub = new NgTableParams({}, {
                                                dataset : $scope.listPersonParent
                                            });
                                            $scope.model.isNotEdit = true;
                                            $scope.model.showEdit = true;
                                            $scope.model.isAdd = false;
                                            $scope.enableSearchPar();
                                            $scope.getThisPerson(lstSearchId[i]);
                                            $scope.addNewPersonChild();
                                            $('#liTabChildSubManager').removeClass('disableTabPostpaid');
                                            return;
                                        }
                                    }
                                });
                                return;
                            }
                        }
                    } else {
                        bootbox.alert("MST " + valueSearch + " đã tồn tại, xin hãy sử dụng MST khác hoặc tìm kiếm lại để tạo KH con. Cảm ơn!");
                        canAdd = false;
                        return;
                    }
                }

                if (canAdd){
                 

                    var strStaffId = $localStorage.clientContext.shop.staffId;
                    var strShopId =  $localStorage.clientContext.shop.shopId;

                    var lstPerAdd = [];
                    lstPerAdd.push({});
                    lstPerAdd.push($scope.model.personSelected);
                    overLoading();
                    ctk_postpaidManagement.addNewPersonParent(strStaffId, strShopId, lstPerAdd, function(result) {
                    	closeOverLay();
                        if (result.status == "0" && result.messages){
                            bootbox.alert("Xảy ra lỗi trong quá trình tạo khách hàng! Lỗi: " + result.messages);
                        } else {
                            bootbox.alert("Thêm mới thành công!");
                            $scope.model.isNotEdit = true;
                            $scope.model.showEdit = true;
                            $scope.model.isAdd = false;
                            $scope.enableSearchPar();
                            $('#liTabChildSubManager').removeClass('disableTabPostpaid');

                            $scope.model.personSelected = result;
                            $scope.listPersonParent = [];
                            $scope.listPersonParent.push(result);
                            indexSelect = 0;
                            $scope.tableSub = new NgTableParams({}, {
                                dataset : $scope.listPersonParent
                            });
                        }
                    });
                }
            });
        } else {
            // update

           
            var lstPerAdd = [];
            lstPerAdd.push($scope.model.personBackup);
            lstPerAdd.push($scope.model.personSelected);

            var strStaffId = $localStorage.clientContext.shop.staffId;
            var strShopId =  $localStorage.clientContext.shop.shopId;
            overLoading();
            ctk_postpaidManagement.updatePersonParent(strStaffId,strShopId,lstPerAdd, function(result) {
            	closeOverLay();
                if (result.status == "0" && result.messages){
                    bootbox.alert("Xảy ra lỗi trong quá trình cập nhật thông tin! Lỗi: " + result.messages);
                } else {
                    bootbox.alert("Cập nhật thành công!");
                    $scope.model.isNotEdit = true;
                    $scope.model.showEdit = true;
                    $scope.model.isAdd = false;
                    $scope.model.disableIdnum = false;
                    $scope.enableSearchPar();
                    $('#liTabChildSubManager').removeClass('disableTabPostpaid');
                    $('#liTabSearchChild').removeClass('disableTabPostpaid');

                    $scope.model.personSelected = result;
                    $scope.listPersonParent[indexSelect] = result;
                    $scope.tableSub = new NgTableParams({}, {
                        dataset : $scope.listPersonParent
                    });
                }
            });
        }
    }

    $scope.cancelCommit = function() {
        bootbox.confirm({
            message: "Chưa lưu lại thông tin. Bạn có muốn thoát?",
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
                    $scope.model.isNotEdit = true;
                    $scope.model.showEdit = true;
                    $scope.model.isAdd = false;
                    $scope.model.disableIdnum = false;
                    $scope.model.disableTaxcode = false;
                    $scope.enableSearchPar();
                    $scope.getThisPerson($scope.model.personBackup);
                    $('#liTabChildSubManager').removeClass('disableTabPostpaid');
                    $('#liTabSearchChild').removeClass('disableTabPostpaid');
                }
            }
        });
    }

    $scope.validateAddPerson = function() {
        if ($scope.model.personSelected.familyName == null  || $scope.model.personSelected.familyName.trim() == "" ){
            bootbox.alert($translate.instant('vnm.form_postpaid.mess.valid.last.name'));
            return false;
        }
        if ($scope.model.personSelected.givenName == null  || $scope.model.personSelected.givenName.trim() == "" ){
            bootbox.alert($translate.instant('vnm.form_postpaid.mess.valid.first.name'));
            return false;
        }
        if ($scope.model.personSelected.mobilePhoneNr == null  || $scope.model.personSelected.mobilePhoneNr.trim() == "" ){
            bootbox.alert($translate.instant('vnm.form_postpaid.mess.valid.telephone'));
            return false;
        }
        if ($("#detailDateOfBirth").val() == null  || $("#detailDateOfBirth").val().trim() == "" ){
            bootbox.alert($translate.instant('vnm.form_postpaid.mess.valid.birthdate'));
            return false;
        }
        if ($scope.model.personSelected.socialSecurityNumber == null  || $scope.model.personSelected.socialSecurityNumber.trim() == "" ){
            bootbox.alert($translate.instant('vnm.form_postpaid.mess.valid.idnum'));
            return false;
        }
        if ( $scope.model.personSelected.socialSecurityNumber.trim().length < 8 ){
            bootbox.alert($translate.instant('vnm.form_postpaid.mess.valid.idnum.eight'));
            return false;
        }
        if ( $scope.model.personSelected.socialSecurityNumber.trim().length >15 ){
            bootbox.alert($translate.instant('vnm.form_postpaid.mess.valid.idnum.fifteen'));
            return false;
        }
        if ($scope.model.personSelected.placeOfIssue == null  || $scope.model.personSelected.placeOfIssue.trim() == "" ){
            bootbox.alert($translate.instant('vnm.form_postpaid.mess.valid.placeOfIssue'));
            return false;
        }
        if ($scope.model.personSelected.placeOfIssue.trim().length < 5 ){
            bootbox.alert($translate.instant('vnm.form_postpaid.mess.valid.placeOfIssue.five'));
            return false;
        }
        if ($("#detailDateIssue").val() == null  || $("#detailDateIssue").val().trim() == "" ){
            bootbox.alert($translate.instant('vnm.form_postpaid.mess.valid.dateOfIssue'));
            return false;
        }
        if ($scope.model.detailPersonType.svPersonNoteTypeId != "0"){
            if ($scope.model.personSelected.officialName == null  || $scope.model.personSelected.officialName.trim() == "" ){
                bootbox.alert($translate.instant('vnm.form_postpaid.mess.valid.company.name'));
                return false;
            }
            if ($scope.model.personSelected.taxCode == null  || $scope.model.personSelected.taxCode.trim() == "" ){
                bootbox.alert($translate.instant('vnm.form_postpaid.mess.valid.taxcode'));
                return false;
            }
        }

        if ($scope.model.detailLivingProvince.proId == null  || $scope.model.detailLivingProvince.proId.trim() == "" ){
            bootbox.alert($translate.instant('vnm.form_postpaid.mess.valid.province.living'));
            return false;
        }
        if ($scope.model.detailLivingDistrict.disId == null  || $scope.model.detailLivingDistrict.disId.trim() == "" ){
            bootbox.alert($translate.instant('vnm.form_postpaid.mess.valid.district.living'));
            return false;
        }
        if ($scope.model.detailBillProvince.proId == null  || $scope.model.detailBillProvince.proId.trim() == "" ){
            bootbox.alert($translate.instant('vnm.form_postpaid.mess.valid.province.billing'));
            return false;
        }
        if ($scope.model.detailBillDistrict.disId == null  || $scope.model.detailBillDistrict.disId.trim() == "" ){
            bootbox.alert($translate.instant('vnm.form_postpaid.mess.valid.district.billing'));
            return false;
        }
        if ($scope.model.personSelected.homeSuburb == null  || $scope.model.personSelected.homeSuburb.trim() == "" ){
            bootbox.alert($translate.instant('vnm.form_postpaid.mess.valid.wardPlace.living'));
            return false;
        }
        if ($scope.model.personSelected.homeLine2 == null  || $scope.model.personSelected.homeLine2.trim() == "" ){
            bootbox.alert($translate.instant('vnm.form_postpaid.mess.valid.streetPlace.living'));
            return false;
        }

        if ($scope.model.personSelected.postalSuburb == null  || $scope.model.personSelected.postalSuburb.trim() == "" ){
            bootbox.alert($translate.instant('vnm.form_postpaid.mess.valid.wardPlace.billing'));
            return false;
        }
        if ($scope.model.personSelected.postalLine2 == null  || $scope.model.personSelected.postalLine2.trim() == "" ){
            bootbox.alert($translate.instant('vnm.form_postpaid.mess.valid.streetPlace.billing'));
            return false;
        }
        if ($scope.model.personSelected.postalLine1 == null  || $scope.model.personSelected.postalLine1.trim() == "" ){
            bootbox.alert($translate.instant('vnm.form_postpaid.mess.valid.apartNumber.billing'));
            return false;
        }

        var dNow = moment();
        dNow = moment(dNow, "DD/MM/YYYY");
        var dBirth = moment($("#detailDateOfBirth").val().trim(), "DD/MM/YYYY");
        var dIssue = moment($("#detailDateIssue").val().trim(), "DD/MM/YYYY");
        var minYearBirthday = moment().add(-18, 'years');
        var maxYearBirthday = moment().add(-200, 'years');
        var minIssue = moment().add(-15, 'years');

        if (dIssue >= dNow){
            bootbox.alert($translate.instant('vnm.form_postpaid.mess.valid.issueNow'));
            return false;
        }
        if (dIssue < minIssue){
            bootbox.alert($translate.instant('vnm.form_postpaid.mess.valid.issueFifthteen'));
            return false;
        }
        if (dBirth > minYearBirthday ){
            bootbox.alert($translate.instant('vnm.form_postpaid.mess.valid.dateBirth.eighteen'));
            return false;
        }
        if (dBirth < maxYearBirthday ){
            bootbox.alert($translate.instant('vnm.form_postpaid.mess.valid.dateBirth.hundred'));
            return false;
        }

        $scope.model.personSelected.personTypeName = $scope.model.detailPersonType.personTypeNameEn;
        $scope.model.personSelected.customerSegment = $scope.model.detailSegment.code;
        $scope.model.personSelected.genderCode = $scope.model.detailGender.value;
        $scope.model.personSelected.spokenLanguageCode = $scope.model.detailLang.value;
        $scope.model.personSelected.homeGeneral1 = $scope.model.detailLivingRegion.code;
        $scope.model.personSelected.homeState = $scope.model.detailLivingProvince.proId;
        $scope.model.personSelected.homeCity = $scope.model.detailLivingDistrict.disId;
        $scope.model.personSelected.postalGeneral1 = $scope.model.detailBillRegion.code;
        $scope.model.personSelected.postalState = $scope.model.detailBillProvince.proId;
        $scope.model.personSelected.postalCity = $scope.model.detailBillDistrict.disId;
        $scope.model.personSelected.birthDate = $("#detailDateOfBirth").val().trim();
        $scope.model.personSelected.dateOfIssue = $("#detailDateIssue").val().trim();
        return true;
    }

    $scope.model.personChildSelected = {};
    $scope.model.personChildBackup = {};

    $scope.model.detailChildPersonType = {};
    $scope.model.detailChildSegment = {};
    $scope.model.detailChildGender = {};
    $scope.model.detailChildLang = {};

    $scope.model.detailChildLivingRegion = {};
    $scope.model.detailChildLivingProvince = {};
    $scope.model.detailChildLivingDistrict = {};

    $scope.model.detailChildBillRegion = {};
    $scope.model.detailChildBillProvince = {};
    $scope.model.detailChildBillDistrict = {};

    $scope.model.detailChildPaymentMethod = {};
    $scope.model.detailChildPaymentLocation = {};
    $scope.model.detailChildPaymentType = {};

    $scope.disableForCreateChildCoporate = function (){
        $scope.disableChildType = true;
        $scope.disableSegment = true;
        $scope.disableFirstName = false;
        $scope.disableGivenName = false;
        $scope.disableChildGender = false;
        $scope.disableChildBirth = false;
        $scope.disableChildSocialSecurityNumber = false;
        $scope.disableChildPlaceIssue = false;
        $scope.disableChildDateIssue = false;
        $scope.disableChildLang = false;
        $scope.disableChildEmail = false;
        $scope.disableChildPhoneNr = false;
        $scope.disableChildOfficeName = true;
        $scope.disableChildTaxcode = true;
        $scope.disableChildBussinessLicense = false;
        $scope.disableChildProvince = true;
        $scope.disableChildDistrict = true;
        $scope.disableChildHomeSuburb = true;
        $scope.disableChildHomeLine2 = true;
        $scope.disableChildHomeLine1 = true;
        $scope.disableChildHomeGenaral3 = true;
        $scope.disableChildHomeGeneral4 = true;
        $scope.disableChildParentAccountNo = true;

        $scope.disableChildBillProvince = false;
        $scope.disableChildBillDistrict = false;
        $scope.disableChildPostalSuburb = false;
        $scope.disableChildPostalLine2 = false;
        $scope.disableChildPostalLine1 = false;
        $scope.disableChildPostalGeneral3 = false;
        $scope.disableChildPostalGeneral4 = false;
        $scope.disableChildPaymentMethod = false;
        $scope.disableChildPaymentLocation = false;
        $scope.disableChildPaymentType = false;
        $scope.disableChildAccountCharge = true;
        $scope.disableChildDebtcharge = true;
        $scope.disableChildDeposit = true;
        $scope.disableChildNote = true;
        $scope.disableSubcriberAccountStatus = true;
    }

    $scope.disableForCreateChildFamily = function (){
        $scope.disableChildType = true;
        $scope.disableSegment = true;
        $scope.disableFirstName = false;
        $scope.disableGivenName = false;
        $scope.disableChildGender = true;
        $scope.disableChildBirth = true;
        $scope.disableChildSocialSecurityNumber = true;
        $scope.disableChildPlaceIssue = true;
        $scope.disableChildDateIssue = true;
        $scope.disableChildLang = true;
        $scope.disableChildEmail = true;
        $scope.disableChildPhoneNr = true;
        $scope.disableChildOfficeName = true;
        $scope.disableChildTaxcode = true;
        $scope.disableChildBussinessLicense = true;
        $scope.disableChildProvince = true;
        $scope.disableChildDistrict = true;
        $scope.disableChildHomeSuburb = true;
        $scope.disableChildHomeLine2 = true;
        $scope.disableChildHomeLine1 = true;
        $scope.disableChildHomeGenaral3 = true;
        $scope.disableChildHomeGeneral4 = true;
        $scope.disableChildParentAccountNo = true;

        $scope.disableChildBillProvince = false;
        $scope.disableChildBillDistrict = false;
        $scope.disableChildPostalSuburb = false;
        $scope.disableChildPostalLine2 = false;
        $scope.disableChildPostalLine1 = false;
        $scope.disableChildPostalGeneral3 = false;
        $scope.disableChildPostalGeneral4 = false;
        $scope.disableChildPaymentMethod = false;
        $scope.disableChildPaymentLocation = false;
        $scope.disableChildPaymentType = false;
        $scope.disableChildAccountCharge = true;
        $scope.disableChildDebtcharge = true;
        $scope.disableChildDeposit = true;
        $scope.disableChildNote = true;
        $scope.disableSubcriberAccountStatus = true;
    }

    $scope.disableAllChild = function (){
        $scope.disableChildType = true;
        $scope.disableSegment = true;
        $scope.disableFirstName = true;
        $scope.disableGivenName = true;
        $scope.disableChildGender = true;
        $scope.disableChildBirth = true;
        $scope.disableChildSocialSecurityNumber = true;
        $scope.disableChildPlaceIssue = true;
        $scope.disableChildDateIssue = true;
        $scope.disableChildLang = true;
        $scope.disableChildEmail = true;
        $scope.disableChildPhoneNr = true;
        $scope.disableChildOfficeName = true;
        $scope.disableChildTaxcode = true;
        $scope.disableChildBussinessLicense = true;
        $scope.disableChildProvince = true;
        $scope.disableChildDistrict = true;
        $scope.disableChildHomeSuburb = true;
        $scope.disableChildHomeLine2 = true;
        $scope.disableChildHomeLine1 = true;
        $scope.disableChildHomeGenaral3 = true;
        $scope.disableChildHomeGeneral4 = true;
        $scope.disableChildParentAccountNo = true;

        $scope.disableChildBillProvince = true;
        $scope.disableChildBillDistrict = true;
        $scope.disableChildPostalSuburb = true;
        $scope.disableChildPostalLine2 = true;
        $scope.disableChildPostalLine1 = true;
        $scope.disableChildPostalGeneral3 = true;
        $scope.disableChildPostalGeneral4 = true;
        $scope.disableChildPaymentMethod = true;
        $scope.disableChildPaymentLocation = true;
        $scope.disableChildPaymentType = true;
        $scope.disableChildAccountCharge = true;
        $scope.disableChildDebtcharge = true;
        $scope.disableChildDeposit = true;
        $scope.disableChildNote = true;
        $scope.disableSubcriberAccountStatus = true;
    }

    $scope.disableAllChild();

    $scope.prepairDataForCreateChild = function () {
        $scope.model.detailChildPersonType = $scope.model.detailPersonType;
        $scope.model.detailChildSegment = $scope.model.detailSegment;
        $scope.model.detailChildGender = $scope.model.detailGender;
        $scope.model.detailChildLang = $scope.model.detailLang;

        $scope.model.detailChildLivingRegion = $scope.model.detailLivingRegion;
        $scope.model.detailChildLivingProvince = $scope.model.detailLivingProvince;
        $scope.model.detailChildLivingDistrict = $scope.model.detailLivingDistrict;

        $scope.model.detailChildBillRegion  = $scope.model.detailBillRegion;
        $scope.model.detailChildBillProvince = $scope.model.detailBillProvince;
        $scope.model.detailChildBillDistrict = $scope.model.detailBillDistrict;

        $scope.model.detailChildPaymentMethod = $scope.listPayMethod[0];
        $scope.model.detailChildPaymentLocation = $scope.listPayLocation[3];
        $scope.model.detailChildPaymentType = $scope.listNoticeChargeType[0];
        $scope.model.personChildSelected.emailAddress = "N/A";
        $scope.model.personChildSelected.accountNo = "";
        $scope.model.personChildSelected.accountBalance = "";
        $scope.model.personChildSelected.depositAmount = "";
        $scope.model.personChildSelected.parentAccountNo = $scope.model.personSelected.accountNo;

        if ($scope.model.detailChildPersonType.svPersonNoteTypeId != "0"){
            $scope.model.personChildSelected.familyName = $scope.model.personSelected.officialName;
        }
    }

    $scope.addNewPersonChild = function() {
        if ($scope.model.personSelected.accountNo == null || $scope.model.personSelected.accountNo.trim() == ""){
            bootbox.alert("Chưa chọn KH cha để tạo KH con!" );
            return;
        }
        $scope.model.personBackup = angular.copy($scope.model.personSelected);
        $scope.model.personChildBackup = {};
        $scope.model.personChildSelected = {};
        $scope.model.personChildSelected = angular.copy($scope.model.personSelected);

        $scope.prepairDataForCreateChild();

        $('#liTabParentSubManager').removeClass('active');
        $('#liTabParentSubManager').addClass('disableTabPostpaid');
        $('#liTabSearchChild').addClass('disableTabPostpaid');
        $('#liTabChildSubManager').addClass('active');
        $('#tabParentSubManager').removeClass('active');
        $('#tabChildSubManager').addClass('active');

        $scope.model.showAddChild = true;
        $scope.model.isAddChild = true;

        if ($scope.model.detailChildPersonType.svPersonNoteTypeId != "0"){
            $scope.disableForCreateChildCoporate();
            $scope.model.personChildSelected.givenName = "";
        } else {
            $scope.disableForCreateChildFamily();
        }
        //khi tao kh con khong disable phan khuc kh
        $scope.disableSegment = false;
    }

    $scope.editChild = function() {
        if ($scope.model.personChildSelected.accountNo == null || $scope.model.personChildSelected.accountNo.trim() == ""){
            bootbox.alert("Chưa chọn KH con để sửa!" );
            return;
        }
        $scope.model.personChildBackup = angular.copy($scope.model.personChildSelected);

        $scope.model.showAddChild = true;
        $scope.model.isAddChild = false;
        $('#liTabParentSubManager').addClass('disableTabPostpaid');
        $('#liTabSearchChild').addClass('disableTabPostpaid');

        if ($scope.model.detailChildPersonType.svPersonNoteTypeId != "0"){
            $scope.disableForCreateChildCoporate();
        } else {
            $scope.disableForCreateChildFamily();
        }
    }

    $scope.validateAddPersonChild = function() {
        if ($scope.model.personChildSelected.familyName == null  || $scope.model.personChildSelected.familyName.trim() == "" ){
            bootbox.alert($translate.instant('vnm.form_postpaid.mess.valid.last.name'));
            return false;
        }
        if ($scope.model.personChildSelected.givenName == null  || $scope.model.personChildSelected.givenName.trim() == "" ){
            bootbox.alert($translate.instant('vnm.form_postpaid.mess.valid.first.name'));
            return false;
        }
        if ($scope.model.personChildSelected.mobilePhoneNr == null  || $scope.model.personChildSelected.mobilePhoneNr.trim() == "" ){
            bootbox.alert($translate.instant('vnm.form_postpaid.mess.valid.telephone'));
            return false;
        }
        if ($("#detailDateOfBirth").val() == null  || $("#detailDateOfBirth").val().trim() == "" ){
            bootbox.alert($translate.instant('vnm.form_postpaid.mess.valid.birthdate'));
            return false;
        }
        if ($scope.model.personChildSelected.socialSecurityNumber == null  || $scope.model.personChildSelected.socialSecurityNumber.trim() == "" ){
            bootbox.alert($translate.instant('vnm.form_postpaid.mess.valid.idnum'));
            return false;
        }
        if ( $scope.model.personChildSelected.socialSecurityNumber.trim().length < 8 ){
            bootbox.alert($translate.instant('vnm.form_postpaid.mess.valid.idnum.eight'));
            return false;
        }
        if ( $scope.model.personChildSelected.socialSecurityNumber.trim().length >15 ){
            bootbox.alert($translate.instant('vnm.form_postpaid.mess.valid.idnum.fifteen'));
            return false;
        }
        if ($scope.model.personChildSelected.placeOfIssue == null  || $scope.model.personChildSelected.placeOfIssue.trim() == "" ){
            bootbox.alert($translate.instant('vnm.form_postpaid.mess.valid.placeOfIssue'));
            return false;
        }
        if ($scope.model.personChildSelected.placeOfIssue.trim().length < 5 ){
            bootbox.alert($translate.instant('vnm.form_postpaid.mess.valid.placeOfIssue.five'));
            return false;
        }
        if ($("#dtDateOfIssue").val() == null  ||$("#dtDateOfIssue").val().trim() == "" ){
            bootbox.alert($translate.instant('vnm.form_postpaid.mess.valid.dateOfIssue'));
            return false;
        }
        if ($scope.model.detailPersonType.svPersonNoteTypeId != "0"){
            if ($scope.model.personChildSelected.officialName == null  || $scope.model.personChildSelected.officialName.trim() == "" ){
                bootbox.alert($translate.instant('vnm.form_postpaid.mess.valid.company.name'));
                return false;
            }
            if ($scope.model.personChildSelected.taxCode == null  || $scope.model.personChildSelected.taxCode.trim() == "" ){
                bootbox.alert($translate.instant('vnm.form_postpaid.mess.valid.taxcode'));
                return false;
            }
        }

        // if ($scope.model.detailChildLivingProvince.proId == null  || $scope.model.detailChildLivingProvince.proId.trim() == "" ){
        //     bootbox.alert($translate.instant('vnm.form_postpaid.mess.valid.province.living'));
        //     return false;
        // }
        // if ($scope.model.detailChildLivingDistrict.disId == null  || $scope.model.detailChildLivingDistrict.disId.trim() == "" ){
        //     bootbox.alert($translate.instant('vnm.form_postpaid.mess.valid.district.living'));
        //     return false;
        // }
        if ($scope.model.detailChildBillProvince.proId == null  || $scope.model.detailChildBillProvince.proId.trim() == "" ){
            bootbox.alert($translate.instant('vnm.form_postpaid.mess.valid.province.billing'));
            return false;
        }
        if ($scope.model.detailChildBillDistrict.disId == null  || $scope.model.detailChildBillDistrict.disId.trim() == "" ){
            bootbox.alert($translate.instant('vnm.form_postpaid.mess.valid.district.billing'));
            return false;
        }
        // if ($scope.model.personChildSelected.homeSuburb == null  || $scope.model.personChildSelected.homeSuburb.trim() == "" ){
        //     bootbox.alert($translate.instant('vnm.form_postpaid.mess.valid.wardPlace.living'));
        //     return false;
        // }
        // if ($scope.model.personChildSelected.homeLine2 == null  || $scope.model.personChildSelected.homeLine2.trim() == "" ){
        //     bootbox.alert($translate.instant('vnm.form_postpaid.mess.valid.streetPlace.living'));
        //     return false;
        // }

        if ($scope.model.personChildSelected.postalSuburb == null  || $scope.model.personChildSelected.postalSuburb.trim() == "" ){
            bootbox.alert($translate.instant('vnm.form_postpaid.mess.valid.wardPlace.billing'));
            return false;
        }
        if ($scope.model.personChildSelected.postalLine2 == null  || $scope.model.personChildSelected.postalLine2.trim() == "" ){
            bootbox.alert($translate.instant('vnm.form_postpaid.mess.valid.streetPlace.billing'));
            return false;
        }
        if ($scope.model.personChildSelected.postalLine1 == null  || $scope.model.personChildSelected.postalLine1.trim() == "" ){
            bootbox.alert($translate.instant('vnm.form_postpaid.mess.valid.apartNumber.billing'));
            return false;
        }

        var dNow = moment();
        dNow = moment(dNow, "DD/MM/YYYY");
        var dBirth = moment($("#dtBirthdayChild").val().trim(), "DD/MM/YYYY");
        var dIssue = moment($("#dtDateOfIssue").val().trim(), "DD/MM/YYYY");
        var minYearBirthday = moment().add(-18, 'years');
        var maxYearBirthday = moment().add(-200, 'years');
        var minIssue = moment().add(-15, 'years');

        if (dIssue >= dNow){
            bootbox.alert($translate.instant('vnm.form_postpaid.mess.valid.issueNow'));
            return false;
        }
        if (dIssue < minIssue){
            bootbox.alert($translate.instant('vnm.form_postpaid.mess.valid.issueFifthteen'));
            return false;
        }
        if (dBirth > minYearBirthday ){
            bootbox.alert($translate.instant('vnm.form_postpaid.mess.valid.dateBirth.eighteen'));
            return false;
        }
        if (dBirth < maxYearBirthday ){
            bootbox.alert($translate.instant('vnm.form_postpaid.mess.valid.dateBirth.hundred'));
            return false;
        }

        if ($scope.model.detailChildPaymentMethod.glCodeValueEn == null  || $scope.model.detailChildPaymentMethod.glCodeValueEn == "" ){
            bootbox.alert($translate.instant('vnm.form_postpaid.mess.valid.paymentMethod'));
            return false;
        }

        if ( ($scope.model.detailChildPaymentLocation.glCodeValueEn == null  || $scope.model.detailChildPaymentLocation.glCodeValueEn == "" )  &&
            ($scope.model.detailChildPaymentLocation.glCodeValueVn == null  || $scope.model.detailChildPaymentLocation.glCodeValueVn == "" )  ){
            bootbox.alert($translate.instant('vnm.form_postpaid.mess.valid.paymentLocation'));
            return false;
        }

        if ($scope.model.detailChildPaymentType.glCodeValueEn == null  || $scope.model.detailChildPaymentType.glCodeValueEn == "" ){
            bootbox.alert($translate.instant('vnm.form_postpaid.mess.valid.paymentType'));
            return false;
        }

        $scope.model.personChildSelected.personTypeName = $scope.model.detailChildPersonType.personTypeNameEn;
        $scope.model.personChildSelected.customerSegment = $scope.model.detailChildSegment.code;
        $scope.model.personChildSelected.genderCode = $scope.model.detailChildGender.value;
        $scope.model.personChildSelected.spokenLanguageCode = $scope.model.detailChildLang.value;
        $scope.model.personChildSelected.homeGeneral1 = $scope.model.detailChildLivingRegion.code;
        $scope.model.personChildSelected.homeState = $scope.model.detailChildLivingProvince.proId;
        $scope.model.personChildSelected.homeCity = $scope.model.detailChildLivingDistrict.disId;
        $scope.model.personChildSelected.postalGeneral1 = $scope.model.detailChildBillRegion.code;
        $scope.model.personChildSelected.postalState = $scope.model.detailChildBillProvince.proId;
        $scope.model.personChildSelected.postalCity = $scope.model.detailChildBillDistrict.disId;
        $scope.model.personChildSelected.birthDate = $("#dtBirthdayChild").val().trim();
        $scope.model.personChildSelected.dateOfIssue = $("#dtDateOfIssue").val().trim();

        $scope.model.personChildSelected.httt = $scope.model.detailChildPaymentMethod.glCodeValueEn;
        $scope.model.personChildSelected.paymentLocation =  $scope.model.detailChildPaymentLocation.glCodeValueEn;
        $scope.model.personChildSelected.paymentType = $scope.model.detailChildPaymentType.glCodeValueEn;

        return true;
    }

    $scope.commitAcceptChild = function() {
        if (!$scope.validateAddPersonChild()){
            return;
        }
        if ($scope.model.isAddChild){
            var lstSearchId = [];

           

            var lstPerAdd = [];
            lstPerAdd.push($scope.model.personChildBackup);
            lstPerAdd.push($scope.model.personChildSelected);
            var strStaffId = $localStorage.clientContext.shop.staffId;
            var strShopId =  $localStorage.clientContext.shop.shopId;
            overLoading();
            ctk_postpaidManagement.addNewPersonChild(strStaffId, strShopId, lstPerAdd, function(result) {
            	closeOverLay();
                if (result.status == "0" && result.messages){
                    bootbox.alert("Xảy ra lỗi trong quá trình tạo khách hàng con! Lỗi: " + result.messages);
                } else {
                    bootbox.alert("Thêm mới thành công!");

                    $scope.model.personChildSelected = result;
                    $scope.model.showAddChild = false;
                    $scope.model.isAddChild = false;
                    $('#liTabParentSubManager').removeClass('disableTabPostpaid');
                    $('#liTabSearchChild').removeClass('disableTabPostpaid');
                    $scope.disableAllChild();
                }
            });
        } else {
            // update
            var lstPerAdd = [];
            lstPerAdd.push($scope.model.personChildBackup);
            lstPerAdd.push($scope.model.personChildSelected);

            var strStaffId = $localStorage.clientContext.shop.staffId;
            var strShopId =  $localStorage.clientContext.shop.shopId;
            overLoading();
            ctk_postpaidManagement.updatePersonChild(strStaffId, strShopId, lstPerAdd, function(result) {
            	closeOverLay();
                if (result.status == "0" && result.messages){
                    bootbox.alert("Xảy ra lỗi trong quá trình cập nhật thông tin! Lỗi: " + result.messages);
                } else {
                    bootbox.alert("Cập nhật thành công!");
                    $scope.enableSearchPar();

                    $scope.model.personChildSelected = result;
                    $scope.model.showAddChild = false;
                    $scope.model.isAddChild = false;
                    $('#liTabParentSubManager').removeClass('disableTabPostpaid');
                    $('#liTabSearchChild').removeClass('disableTabPostpaid');
                    $scope.disableAllChild();
                }
            });
        }
    }

    $scope.cancelCommitChild = function() {
        bootbox.confirm({
            message: "Chưa lưu lại thông tin. Bạn có muốn thoát?",
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
                    if ($scope.model.isAddChild) {
                        $scope.model.isAddChild = false;
                        // $scope.model.personSelected = angular.copy($scope.model.personBackup);
                        $scope.model.personBackup = {};
                        // $scope.getThisPerson($scope.model.personSelected);
                        $scope.model.personChildSelected = {};

                        $('#liTabParentSubManager').addClass('active');
                        $('#liTabChildSubManager').removeClass('active');
                        $('#tabParentSubManager').addClass('active');
                        $('#tabChildSubManager').removeClass('active');
                    } else {
                        $scope.model.personChildSelected = angular.copy($scope.model.personChildBackup);
                        $scope.model.personChildBackup = {};
                    }
                    $scope.model.showAddChild = false;
                    $scope.disableAllChild();
                    $('#liTabParentSubManager').removeClass('disableTabPostpaid');
                    $('#liTabSearchChild').removeClass('disableTabPostpaid');
                }
            }
        });

    }

    $scope.getDataForChild = function () {
        $scope.model.detailChildPersonType = $scope.model.detailPersonType;
        $scope.model.detailChildSegment = $scope.model.detailSegment;
        $scope.model.detailChildGender = $scope.model.detailGender;
        $scope.model.detailChildLang = $scope.model.detailLang;

        $scope.model.detailChildLivingRegion = $scope.model.detailLivingRegion;
        $scope.model.detailChildLivingProvince = $scope.model.detailLivingProvince;
        $scope.model.detailChildLivingDistrict = $scope.model.detailLivingDistrict;

        $scope.model.detailChildBillRegion  = $scope.model.detailBillRegion;
        $scope.model.detailChildBillProvince = $scope.model.detailBillProvince;
        $scope.model.detailChildBillDistrict = $scope.model.detailBillDistrict;

        $scope.model.detailChildPaymentMethod = $scope.listPayMethod[$scope.getIndexPayment($scope.listPayMethod,$scope.model.personChildSelected.httt)];
        $scope.model.detailChildPaymentLocation = $scope.listPayLocation[$scope.getIndexPayment($scope.listPayLocation,$scope.model.personChildSelected.paymentLocation)];
        $scope.model.detailChildPaymentType = $scope.listNoticeChargeType[$scope.getIndexPayment($scope.listNoticeChargeType,$scope.model.personChildSelected.paymentType)];

        $scope.model.subProduct = {};
        $scope.model.subProduct.msisdn = $scope.model.personChildSelected.msisdn;
        $scope.model.subProduct.callPlan = $scope.model.personChildSelected.callPlan;
        $scope.model.subProduct.subcriberAccountStatus = $scope.model.personChildSelected.subcriberAccountStatus;
        $scope.model.subProduct.iccid = $scope.model.personChildSelected.iccid;

        $scope.listSubProduct = [];
        $scope.listSubProduct.push($scope.model.subProduct);
        $scope.tableChildSub = new NgTableParams({}, {
            dataset : $scope.listSubProduct
        });

        $scope.model.disableChangeSim = true;
        if ($scope.model.personChildSelected.subStatusCode == '3' || $scope.model.personChildSelected.subStatusCode == '7'){
            $scope.model.disableChangeSim = false;
        }
    }

    $scope.onSelectCustomerSearch = function () {
        if ($scope.model.selectedPostpaidCust.accountNo == null || $scope.model.selectedPostpaidCust.accountNo ==''){
            bootbox.alert("Không có khách hàng để chọn. Vui lòng tìm kiếm lại!");
            return;
        }
        if ($scope.model.selectedPostpaidCust.parent){
            //chon KH con
            $scope.model.parentAccount = $scope.model.selectedPostpaidCust.parent.accountNo;
            $scope.model.childAccount = $scope.model.selectedPostpaidCust.accountNo;
            $scope.hisIsdn = $scope.model.selectedPostpaidCust.msisdn;

            $('#liTabChildSubManager').addClass('active');
            $('#tabChildSubManager').addClass('active');
            $('#liTabSearchChild').removeClass('active');
            $('#tabSearchChild').removeClass('active');

            $scope.objectSearchHis = [];
            $scope.objectSearchHis.accountNo = $scope.model.childAccount;
            $scope.objectSearchHis.postpaidAccountType = "CUS";
            $scope.accountChild = $scope.model.childAccount;


            //search parent
           
            $scope.model.personSelected = {};
            $scope.listPersonParent = [];
            overLoading();
            ctk_postpaidManagement.searchPostpaidPersonParentByAccountNo($scope.model.parentAccount, function(result) {
            	closeOverLay();
                if (result.status == "0" && result.messages){
                    bootbox.alert("Xảy ra lỗi trong quá trình tìm kiếm! Lỗi: " + result.messages);
                } else {
                    if (result.accountNo){
                        $scope.listPersonParent.push(result);
                        $scope.tableSub = new NgTableParams({}, {
                            dataset : $scope.listPersonParent
                        });
                        $scope.getThisPerson(result);
                    }
                }
            
                // search child
                $scope.model.personChildSelected = {};
                overLoading();
                ctk_postpaidManagement.searchPostpaidPersonParentByAccountNo($scope.model.childAccount, function(result) {
                	closeOverLay();
                    if (result.status == "0" && result.messages){
                        bootbox.alert("Xảy ra lỗi trong quá trình tìm kiếm! Lỗi: " + result.messages);
                    } else {
                        if (result.accountNo){
                            $scope.model.personChildSelected = result;
                            $scope.objectSearchHis.fullName = $scope.model.personChildSelected.fullName;
                            $scope.objectSearchHis.socialSecurityNumber = $scope.model.personChildSelected.socialSecurityNumber;
                            $scope.objectSearchHis.birthDate = $scope.model.personChildSelected.birthDate;
                            $scope.getDataForChild();
                            $scope.disableAllChild();
                        }
                    }
                });
            });
        } else {
            //chon KH cha
            $scope.model.parentAccount = $scope.model.selectedPostpaidCust.accountNo;
            $scope.objectSearchHis.accountNo = $scope.model.parentAccount;
            $scope.hisIsdn = $scope.model.selectedPostpaidCust.msisdn;
            $('#liTabParentSubManager').addClass('active');
            $('#tabParentSubManager').addClass('active');
            $('#liTabSearchChild').removeClass('active');
            $('#tabSearchChild').removeClass('active');

         
            $scope.model.personSelected = {};
            $scope.listPersonParent = [];
            overLoading();
            ctk_postpaidManagement.searchPostpaidPersonParentByAccountNo($scope.model.parentAccount, function(result) {
            	closeOverLay();
                if (result.status == "0" && result.messages){
                    bootbox.alert("Xảy ra lỗi trong quá trình tìm kiếm! Lỗi: " + result.messages);
                } else {
                    if (result.accountNo){
                        $scope.listPersonParent.push(result);
                        $scope.tableSub = new NgTableParams({}, {
                            dataset : $scope.listPersonParent
                        });
                        $scope.getThisPerson(result);
                    }
                }
            });
        }
    }

    var targetDialogChangeSim = "#dialogChangeSimPostpaid .modal-content";
    $scope.openChangeSimPostpaid = function() {
        $('#dialogChangeSimPostpaid').modal('show');
        $scope.model.changeSimOldIccId = $scope.model.personChildSelected.iccid;
        $scope.listReasonChangeSim = [];
        $scope.model.changeSimReason = {};

        
        overLoading();
        ctk_postpaidManagement.getListReasonChangeSim(function(result) {
        	closeOverLay();
            if (result.status == "0" && result.messages){
                bootbox.alert("Xảy ra lỗi trong quá trình getListReasonChangeSim! Lỗi: " + result.messages);
            } else {
                if (result.length > 0) {
                    $scope.listReasonChangeSim = result;
                    $scope.model.changeSimReason = $scope.listReasonChangeSim[0];
                } else {
                    $scope.listReasonChangeSim = [];
                }
            }
        });
    }

    $scope.closeChangeSimPostpaid = function() {
        $('#dialogChangeSimPostpaid').modal('hide');
    }

    $scope.changeIccIdNew = function() {
        $scope.model.changeSimNewIccId = $scope.model.changeSimNewIccId.replace(/\D/g, '');
    }

    $scope.acceptChangeSim = function() {

        if ($scope.model.changeSimOldIccId == null || $scope.model.changeSimOldIccId == ""
            || ( $scope.model.changeSimOldIccId.trim().length != 19 && $scope.model.changeSimOldIccId.trim().length != 20) ) {
            bootbox.alert("Số sim cũ không đúng định dạng");
            return;
        }

        if ($scope.model.changeSimNewIccId == null || $scope.model.changeSimNewIccId == ""
            || ( $scope.model.changeSimNewIccId.trim().length != 19 && $scope.model.changeSimNewIccId.trim().length != 20) ) {
            bootbox.alert("Số sim mới không đúng định dạng");
            return;
        }

        if ($scope.model.changeSimNewIccId == $scope.model.changeSimOldIccId) {
            bootbox.alert("Số sim mới và sim cũ không được giống nhau");
            return;
        }

        var strOldIccId = $scope.model.changeSimOldIccId;
        var strNewIccId = $scope.model.changeSimNewIccId;
        var strReason = $scope.model.changeSimReason.name;
        var strStaffId = $localStorage.clientContext.shop.staffId;
        var strShopId =  $localStorage.clientContext.shop.shopId;

        overLoading();
        ctk_postpaidManagement.callChangeSimPostpaid(strNewIccId, strStaffId, strShopId, strReason, $scope.model.personChildSelected, function(result) {
        	closeOverLay();
            if (result.status == "0" && result.messages){
                bootbox.alert("Xảy ra lỗi trong quá trình callChangeSimPostpaid! Lỗi: " + result.messages);
            } else {
                bootbox.alert("Thay sim thành công!");
                $scope.model.personChildSelected = result;
                $scope.model.changeSimOldIccId = $scope.model.personChildSelected.iccid;
                $scope.model.changeSimNewIccId = "";
            }
        });
    }

    $scope.listProm = [];
    $scope.listStatus = [];
    $scope.listShop = [];
    $scope.listPackageClass = [];
    $scope.model.selectedProm = {};
    $scope.model.selectedStatus = {};
    $scope.model.selectedShop = {};
    $scope.model.selectedPackageClass = {};
    $scope.model.mdn = "";
    $scope.model.iccId = "";
    $scope.dialogResult = false;
    // $scope.custCurrent = {};
    $scope.loadProm = function(){
    	 overLoading();
        ctk_postpaidManagement.getListGLCode("PROMOTION_CODE", function(result) {
        	closeOverLay();
            if (result.status == "0" && result.messages){
                bootbox.alert("Xảy ra lỗi trong quá trình loadProm! Lỗi: " + result.messages);
            } else {
                if (result.length > 0) {
                    $scope.listProm = result;

                } else {
                    $scope.listProm = [];
                    // bootbox.alert("getListGLCode : Không tìm thấy dữ liệu!");
                }
            }
           
        });
    }
    $scope.loadStatus = function(){
    	overLoading();
        ctk_postpaidManagement.getListGLCode("SERVICE_STATUS", function(result) {
        	closeOverLay();
            if (result.status == "0" && result.messages){
                bootbox.alert("Xảy ra lỗi trong quá trình loadStatus! Lỗi: " + result.messages);
            } else {
                if (result.length > 0) {
                    $scope.listStatus = result;
                    $scope.model.selectedStatus = result[2];
                } else {
                    $scope.listStatus = [];
                }
            }
            console.log(checkLoad);
            $scope.getPackageClass();
        });
    }
    $scope.getPackageClass = function(){
    	overLoading();
        ctk_serviceDataPostpaid.getPackageClass(function(result) {
        	closeOverLay();
            if (result.status == "0" && result.messages){
                bootbox.alert("Xảy ra lỗi trong quá trình getPackageClass! Lỗi: " + result.messages);
            } else {
                if (result.length > 0) {
                    $scope.listPackageClass = result;
                    $scope.model.selectedPackageClass = result[0];
                } else {
                    $scope.listPackageClass = [];
                    // bootbox.alert("getListGLCode : Không tìm thấy dữ liệu!");
                }
                
                console.log(checkLoad);
                loadGlData();
            }
        });
    }
    $scope.loadShop = function(){
        $scope.listShop.push($localStorage.clientContext.shop);
        $scope.model.selectedShop = $localStorage.clientContext.shop;
    }
    $scope.initDefault = function(){
        $scope.model.selectedPackageClass = $scope.listPackageClass[0];
        $scope.model.selectedStatus = $scope.listStatus[2];
        $scope.model.selectedProm = {};
        $scope.model.mdn = "";
        $scope.model.iccId = "";
    }

    $scope.loadShop();
    //$scope.loadStatus();
   // $scope.getPackageClass();

    $rootScope.modalInstance;
    $scope.newConnect = function(){
        $scope.custCurrent = {};
        $scope.custCurrent['person'] = angular.copy($scope.model.personChildSelected);
        $scope.initDefault();
        $('#modalServiceDataPostPaid').modal('show');
    }
    $scope.closeDialog = function() {
        $('#modalServiceDataPostPaid').modal('hide');
    }

    $scope.onAcceptDialogService = function() {
        $scope.dialogResult = false;
        var per = $scope.custCurrent['person'];
        var mstrPersonID = per['socialSecurityNumber'];
        overLoading();
        ctk_serviceDataPostpaid.checkPersonIDISDN(mstrPersonID, formatMsisdnWithoutZero($scope.model.mdn), function(result){
        	closeOverLay();
            if (result.status == "0" && result.messages){
                bootbox.alert("Xảy ra lỗi trong quá trình checkPersonIDISDN! Lỗi: " + result.messages);
                return false;
            }else{
                if (result){
                    $scope.onAcceptDialogService2();
                }else{
                    bootbox.alert("Số thuê bao không chính xác");
                }
            }
        });
    }

    $scope.onAcceptDialogService2 = function() {
        var pattern = "((092)|(8492)|(92)|(0188)|(84188)|(188)|(0186)|(84186)|(186)|(052)|(8452)|(52)|(056)|(8456)|(56)|(058)|(8458)|(58)){1}(\d){7}";
        overLoading();
        ctk_serviceDataPostpaid.getApParam("", "MDN_PATTERN", function (result) {
        	closeOverLay();
            if (result.status == "0" && result.messages) {
                bootbox.alert("Xảy ra lỗi trong quá trình getApParam MDN_PATTERN! Lỗi: " + result.messages);
                return false;
            } else {
                if (result.length > 0) {
                    pattern = result[0]['paramValue'];
                }
            }
            if ($scope.model.mdn.match(RegExp('^'+pattern+'$'))){
                $scope.onAcceptDialogService3();
            }else{
                bootbox.alert("Số thuê bao không đúng định dạng");
            }
        });
    }
    $scope.onAcceptDialogService3 = function(){
        var prducts = [];
        if($scope.model.iccId.replace(/\s+/g,"").length != 19 && $scope.model.iccId.replace(/\s+/g,"").length != 20) {
            bootbox.alert("Số ICCID không đúng định dạng");
            return false;
        }

        $scope.custCurrent['products'] = [];
        $scope.model.iccId = $scope.model.iccId.replace(/\s+/g,"");
        $scope.model.mdn = $scope.model.mdn.replace(/\s+/g,"");
        //tuannx2 removed
        //////////////////////////////////////////////////

        var pro = {};
        var ser = {};

        //set data for service
        ser.serviceName = formatMsisdnWithoutZero($scope.model.mdn);
        ser.general5 = $scope.model.iccId;
        ser.serviceSubtype = $scope.model.selectedPackageClass.name;
        ser.personId = $scope.custCurrent['personId'];
        ser.general3 = $scope.model.selectedShop;

        //set data to product
        pro.service = ser;
        pro.customer = $scope.custCurrent;
        pro.customerNodeId = $scope.custCurrent['customerNodeId'];
        //prducts = pnlVas.getInsertVAST(pro['productInstanceId']);//Rxxx
       // if(prducts.size() > 0) {
       //     pro['companionProductList'] = prducts;
       // }

        var preSub = {};
        preSub.isdn = formatMsisdnWithoutZero($scope.model.mdn);
        preSub.serial = $scope.model.iccId;
        preSub.accountNo = $scope.custCurrent['person']['accountNo'];

        //insert
        var paramNewConnect = {
            'sub': preSub,
            'prodNew': pro,
            'staffId': $localStorage.clientContext.shop.staffId,
            'shopId': $localStorage.clientContext.shop.shopId,
            'stringComment': '',
            'stringRequestId': ''
        };
        overLoading();
        ctk_serviceDataPostpaid.addNewConnect(paramNewConnect, function(result) {
        	closeOverLay();
            if (result.status == "0" ){
                bootbox.alert("Xảy ra lỗi trong quá trình addNewConnect! Lỗi: " + result.messages);
            } else {
                pro = result;
                $scope.custCurrent['products'].push(pro);
                bootbox.alert('Đấu nối thành công !');
                $scope.initDefault();
                $scope.dialogResult = true;
                overLoading();
                ctk_serviceDataPostpaid.updateExistRequestPrePaid('0' + formatMsisdnWithoutZero($scope.model.mdn),
                    $localStorage.clientContext.shop.staffCode, function(result) {
                	closeOverLay();
                    if (result.status == "0" && result.messages){
                        bootbox.alert("Xảy ra lỗi trong quá trình updateExistRequestPrePaid! Lỗi: " + result.messages);
                    } else {
                        $('#modalServiceDataPostPaid').modal('hide');
                    }
                });

            }
        });
    }
    var targetBlockUIServiceData = "#modalServiceDataPostPaid .modal-content";
    $scope.acceptDialog = function() {
    	overLoading();
        if($scope.model.iccId.replace(/\s+/g,"").length != 19 && $scope.model.iccId.replace(/\s+/g,"").length != 20) {
        	closeOverLay();
            bootbox.alert("Số ICCID không đúng định dạng");
            return false;
        }
        var pattern = "((092)|(8492)|(92)|(0188)|(84188)|(188)|(0186)|(84186)|(186)|(052)|(8452)|(52)|(056)|(8456)|(56)|(058)|(8458)|(58)){1}(\d){7}";
        ctk_serviceDataPostpaid.getApParam("", "MDN_PATTERN", function (result) {
        	closeOverLay();
            if (result.status == "0" && result.messages) {
                bootbox.alert("Xảy ra lỗi trong quá trình getApParam MDN_PATTERN! Lỗi: " + result.messages);
                return false;
            } else {
                if (result.length > 0) {
                    pattern = result[0]['paramValue'];
                }
            }
            if ($scope.model.mdn.match(RegExp('^'+pattern+'$'))){
                $scope.acceptDialog1();
            }else{
                bootbox.alert("Số thuê bao không đúng định dạng");
            }
        });
    }

    $scope.acceptDialog1 = function() {
    	overLoading();
        ctk_serviceDataPostpaid.checkExist(formatMsisdnWithoutZero($scope.model.mdn), function(result) {
        	closeOverLay();
            if (result.status == "0" && result.messages){
                bootbox.alert("Xảy ra lỗi trong quá trình checkExistAction! Lỗi: " + result.messages);
            } else {
                if (!result) {
                	overLoading();
                    ctk_serviceDataPostpaid.checkExistAction('0' + formatMsisdnWithoutZero($scope.model.mdn), function(result) {
                    	closeOverLay();
                        if (result.status == "0" && result.messages){
                            bootbox.alert("Xảy ra lỗi trong quá trình checkExistAction! Lỗi: " + result.messages);
                        } else {
                            if (result.length > 0) {
                                if (confirm("Đang tồn tại một yêu cầu với số thuê bao này, bạn có muốn hủy trước khi thực hiện tiếp không?")){
                                	overLoading();
                                    ctk_serviceDataPostpaid.searchRequestFormOnCancel('0' + formatMsisdnWithoutZero($scope.model.mdn), $localStorage.clientContext.shop.staffCode, function(call){
                                       closeOverLay();
                                    	if (result.status == "0" && result.messages){
                                            bootbox.alert("Xảy ra lỗi trong quá trình checkExistAction! Lỗi: " + result.messages);
                                        }else{
                                            $scope.onAcceptDialogService();
                                        }
                                    });
                                }
                            }else{
                                $scope.onAcceptDialogService();
                            }
                        }
                    });
                }else{
                    $scope.onAcceptDialogService();
                }
            }
            return true;
        });
    }
    
    $scope.listAction = [];
    $scope.listActionDetail = {};
    $scope.searchHistory = function() {
        if(StringUtilNVL($scope.model.hisCusFromDate) == EMPTY_VALUE){
            bootbox.alert("Hãy nhập từ ngày!");
            return;
        }
        if(StringUtilNVL($scope.model.hisCusToDate) == EMPTY_VALUE){
            bootbox.alert("Hãy nhập đến ngày!");
            return;
        }

        var fromDate = $scope.model.hisCusFromDate;
        var toDate = $scope.model.hisCusToDate;

        if (fromDate>toDate){
            bootbox.alert("Từ ngày không được lớn hơn đến ngày!");
            return;
        }
    	// App.blockUI("#formTabHistory");
    	var paramSearch = {
            'postpaidAccountNo': $scope.objectSearchHis.accountNo,
            'fromDate': $("#fromDate").val(),
            'toDate': $("#toDate").val(),
            'postpaidAccountType' : $scope.objectSearchHis.postpaidAccountType,
            // $scope.objectSearchHis.accountNo-'SV-ACC-0006198050490'
        };
    	overLoading();
    	ctk_postpaidManagement.searchParentHistory(paramSearch, function(result) {
			closeOverLay();
			if(result!=null&& result.error!=null){
				$scope.listAction = [];
				bootbox.alert(result.error);

			}
			/*else (result != null && result.lstPostpaidHistoryObject.length > 0)*/
			else{ 
				$scope.listAction = result;
                $scope.listActionDetail = result.lstPostpaidHistoryDetailObject;
            	//CaoTT2
                 for (var loop = 0; loop<$scope.listActionDetail.length; loop++){
                         if($scope.listActionDetail[loop].content=="Số thuê bao"){
                        	 console.log ($scope.listActionDetail[loop].newValue);
                        	 var newValue = $scope.listActionDetail[loop].newValue.match(/\d/g);
                             $scope.listActionDetail[loop].newValue = newValue.join("");
                         }
           
                     
                 }
                $scope.tableActions = new NgTableParams({}, {
                    dataset : result.lstPostpaidHistoryObject
                });
			} /*else {
				//$scope.listAction = [];
			}*/
            // App.unblockUI("#formTabHistory");
        });
    }

    $scope.getDetail = function(item) {
        var listShowDetail=[];
        $scope.model.itemActionSelected = item;
        for (var loop = 0; loop<$scope.listActionDetail.length; loop++){
            if(item.logTransId == $scope.listActionDetail[loop].logTransId){
                listShowDetail.push($scope.listActionDetail[loop]);
            }
        }
       

        for(var loop1=0; loop1<listShowDetail.length;loop1++){
            if(listShowDetail[loop1].content=="Giới tính"){
                if (listShowDetail[loop1].oldValue!=null || listShowDetail[loop1].oldValue!=undefined) {
                    if($scope.listComboGender[$scope.getIndexGL($scope.listComboGender, listShowDetail[loop1].oldValue)]!=null){
                        listShowDetail[loop1].oldValue = $scope.listComboGender[$scope.getIndexGL($scope.listComboGender, listShowDetail[loop1].oldValue)].glCodeValueVn;
                    }
                }
                if (listShowDetail[loop1].newValue!=null || listShowDetail[loop1].newValue!=undefined) {
                    listShowDetail[loop1].newValue = $scope.listComboGender[$scope.getIndexGL($scope.listComboGender, listShowDetail[loop1].newValue)].glCodeValueVn;
                }
            }

            if(listShowDetail[loop1].content=="Ngôn ngữ sử dụng"){
                if (listShowDetail[loop1].oldValue!=null || listShowDetail[loop1].oldValue!=undefined){
                    listShowDetail[loop1].oldValue = $scope.listComboLang[$scope.getIndexGL($scope.listComboLang,listShowDetail[loop1].oldValue)].glCodeValueVn;
                }
                if (listShowDetail[loop1].newValue!=null || listShowDetail[loop1].oldValue!=undefined){
                    listShowDetail[loop1].newValue = $scope.listComboLang[$scope.getIndexGL($scope.listComboLang,listShowDetail[loop1].newValue)].glCodeValueVn;
                }

            }

            if(listShowDetail[loop1].content=="Địa chỉ cước - Vùng miền"){
                if (listShowDetail[loop1].oldValue=="NORTHERN"){
                    listShowDetail[loop1].oldValue = "Miền Bắc";
                }

                if (listShowDetail[loop1].oldValue=="CENTRAL"){
                    listShowDetail[loop1].oldValue = "Miền Trung";
                }

                if (listShowDetail[loop1].oldValue=="SOUTHWARD"){
                    listShowDetail[loop1].oldValue = "Miền Nam";
                }

                if (listShowDetail[loop1].newValue=="NORTHERN"){
                    listShowDetail[loop1].newValue = "Miền Bắc";
                }

                if (listShowDetail[loop1].newValue=="CENTRAL"){
                    listShowDetail[loop1].newValue = "Miền Trung";
                }

                if (listShowDetail[loop1].newValue=="SOUTHWARD"){
                    listShowDetail[loop1].newValue = "Miền Nam";
                }
            }

            if(listShowDetail[loop1].content=="Đia chỉ LH - Vùng miền"){
                if (listShowDetail[loop1].oldValue=="NORTHERN"){
                    listShowDetail[loop1].oldValue = "Miền Bắc";
                }

                if (listShowDetail[loop1].oldValue=="CENTRAL"){
                    listShowDetail[loop1].oldValue = "Miền Trung";
                }

                if (listShowDetail[loop1].oldValue=="SOUTHWARD"){
                    listShowDetail[loop1].oldValue = "Miền Nam";
                }

                if (listShowDetail[loop1].newValue=="NORTHERN"){
                    listShowDetail[loop1].newValue = "Miền Bắc";
                }

                if (listShowDetail[loop1].newValue=="CENTRAL"){
                    listShowDetail[loop1].newValue = "Miền Trung";
                }

                if (listShowDetail[loop1].newValue=="SOUTHWARD"){
                    listShowDetail[loop1].newValue = "Miền Nam";
                }
            }

            if(listShowDetail[loop1].content=="Loại khách hàng"){
                if (listShowDetail[loop1].oldValue!=null || listShowDetail[loop1].oldValue!=undefined) {
                    if($scope.listPersonType[$scope.getIndexPersonType($scope.listPersonType, listShowDetail[loop1].oldValue)]!=null) {
                        listShowDetail[loop1].oldValue = $scope.listPersonType[$scope.getIndexPersonType($scope.listPersonType, listShowDetail[loop1].oldValue)].personTypeNameVn;
                    }
                }
                if (listShowDetail[loop1].newValue!=null || listShowDetail[loop1].newValue!=undefined) {
                    if($scope.listPersonType[$scope.getIndexPersonType($scope.listPersonType, listShowDetail[loop1].newValue)]!=null) {
                        listShowDetail[loop1].newValue = $scope.listPersonType[$scope.getIndexPersonType($scope.listPersonType, listShowDetail[loop1].newValue)].personTypeNameVn;
                    }
                }
            }

            if(listShowDetail[loop1].content=="Hình thức thanh toán"){
                if (listShowDetail[loop1].oldValue!=null || listShowDetail[loop1].oldValue!=undefined) {
                    if($scope.listPayMethod[$scope.getIndexPaymentValue($scope.listPayMethod, listShowDetail[loop1].oldValue)]!=null) {
                        listShowDetail[loop1].oldValue = $scope.listPayMethod[$scope.getIndexPaymentValue($scope.listPayMethod, listShowDetail[loop1].oldValue)].glCodeValueVn;
                    }
                }
                if (listShowDetail[loop1].newValue!=null || listShowDetail[loop1].newValue!=undefined) {
                    if($scope.listPayMethod[$scope.getIndexPaymentValue($scope.listPayMethod, listShowDetail[loop1].newValue)]!=null) {
                        listShowDetail[loop1].newValue = $scope.listPayMethod[$scope.getIndexPaymentValue($scope.listPayMethod, listShowDetail[loop1].newValue)].glCodeValueVn;
                    }
                }
            }

            if(listShowDetail[loop1].content=="Nơi thanh toán"){
                if (listShowDetail[loop1].oldValue!=null || listShowDetail[loop1].oldValue!=undefined) {
                    if($scope.listPayLocation[$scope.getIndexPaymentValue($scope.listPayLocation, listShowDetail[loop1].oldValue)]!=null) {
                        listShowDetail[loop1].oldValue = $scope.listPayLocation[$scope.getIndexPaymentValue($scope.listPayLocation, listShowDetail[loop1].oldValue)].glCodeValueVn;
                    }
                }
                if (listShowDetail[loop1].newValue!=null || listShowDetail[loop1].oldValue!=undefined) {
                    if($scope.listPayLocation[$scope.getIndexPaymentValue($scope.listPayLocation, listShowDetail[loop1].newValue)]!=null) {
                        listShowDetail[loop1].newValue = $scope.listPayLocation[$scope.getIndexPaymentValue($scope.listPayLocation, listShowDetail[loop1].newValue)].glCodeValueVn;
                    }
                }
            }

            if(listShowDetail[loop1].content=="Loại TBC"){
                if (listShowDetail[loop1].oldValue!=null || listShowDetail[loop1].oldValue!=undefined) {
                    if($scope.listNoticeChargeType[$scope.getIndexPayment($scope.listNoticeChargeType, $scope.model.personChildSelected.paymentType)]!=null) {
                        listShowDetail[loop1].oldValue = $scope.listNoticeChargeType[$scope.getIndexPayment($scope.listNoticeChargeType, $scope.model.personChildSelected.paymentType)].glCodeValueVn;
                    }
                }
                if (listShowDetail[loop1].newValue!=null || listShowDetail[loop1].newValue!=undefined) {
                    if($scope.listNoticeChargeType[$scope.getIndexPayment($scope.listNoticeChargeType, $scope.model.personChildSelected.paymentType)]!=null) {
                        listShowDetail[loop1].newValue = $scope.listNoticeChargeType[$scope.getIndexPayment($scope.listNoticeChargeType, $scope.model.personChildSelected.paymentType)].glCodeValueVn;
                    }
                }
            }

        }

        $scope.tableActionDetails = new NgTableParams({}, {
            dataset : listShowDetail
        });
    }
    
    $scope.searchParentPeople = function () {
        console.log("init data listPayMethod");
        console.log($scope.listPayMethod);
        console.log("init data listCollectorAgency");
        console.log($scope.listCollectorAgency);


        var SIM_NUM = $scope.model.SearchConditionSim;
        var ID_NUM = $scope.model.SearchConditionIdCard;
        var POSTPAID_ACCOUNT_NO = $scope.model.SearchConditionAccount;
        var MSISDN = $scope.model.SearchConditionPhoneNo;
        var TAX_CODE = $scope.model.SearchConditionTaxCode;
        var USER_NAME = $scope.model.SearchConditionCustomerFullname;
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
           
            var searchConditions = {
                "SIM_NUM": SIM_NUM,
                "ID_NUM": ID_NUM,
                "POSTPAID_ACCOUNT_NO": POSTPAID_ACCOUNT_NO,
                "MSISDN": MSISDN,
                "TAX_CODE": TAX_CODE,
                "USER_NAME": USER_NAME,
            }
            overLoading();
            factoryFormSearchParentChild.searchParent(searchConditions, function (result) {
            	closeOverLay();
                if (result.listPostpaidPersonObject.length > 0) {

                    $scope.listCustomer = result.listPostpaidPersonObject;
                    $scope.selectedParent = result.listPostpaidPersonObject[0];
                    $scope.selectedPostPaidPerson = result.listPostpaidPersonObject[0];
                    $scope.listChildren = result.listPostpaidPersonObject[0].listPostpaidPersonObject;
                    $scope.getItemInfo($scope.selectedPostPaidPerson);
                    $scope.showBtnTreeView = true;
                    
                    //DatBD2 fix lỗi không phân trang 
                    $scope.tableParamsChild = new NgTableParams({}, {
                        dataset : $scope.listCustomer
                    });
                    //end

                } else if (result.listPostpaidPersonObject.length === 0) {
                    bootbox.alert("Không có giá trị tương ứng với điều kiện tìm kiếm của bạn");

                }

                if (result.error) {
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
       
        //node - selected node in tree
        $scope.selectedNode = node;
        console.log("$scope.selectedNode=------");
        console.log($scope.selectedNode);
        var queryData = {
            "accountNo": $scope.selectedNode.accountNo
        }
        overLoading();
        factoryFormSearchParentChild.getPostPaidPersonDetail(queryData, function (result) {
        	closeOverLay();
            if (result.postpaidPersonObject) {

                fillPostPaidPersonObj(result.postpaidPersonObject);
                selectedAccount = result.postpaidPersonObject;
            }
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
       overLoading();
        factoryFormSearchParentChild.getListGLCode("PAYMENT_METHOD", function (result) {
        	closeOverLay();
            if (result.status == "0" && result.messages) {
                bootbox.alert("Xảy ra lỗi trong quá trình getPayMethod! Lỗi: " + result.messages);
            } else {
                if (result.length > 0) {
                    $scope.listPayMethod = result;
                } else {
                    $scope.listPayMethod = [];
                }
            }
            overLoading();
            factoryFormSearchParentChild.getListGLCode("COLLECTOR_AGENCY", function (result) {
            	closeOverLay();
                if (result.status == "0" && result.messages) {
                    bootbox.alert("Xảy ra lỗi trong quá trình getCollector acgency! Lỗi: " + result.messages);
                } else {
                    if (result.length > 0) {
                        $scope.listCollectorAgency = result;
                    } else {
                        $scope.listCollectorAgency = [];

                    }
                }
            });
        });
    }
});

function StringUtilNVL(val){
	if(val==undefined || val == null) return "";
	return $.trim(val);
}
function StringUtilNVLWithDefault(val, defaultValue) {
    if (val == '' || val == undefined || val == null)
        return defaultValue;
    return $.trim(val);
}

function createTimeStamp(){
	var theMoment = moment();
	var millisTimeStamp = theMoment.valueOf();
	return millisTimeStamp;
}