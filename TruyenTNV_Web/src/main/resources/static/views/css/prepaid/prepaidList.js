var FILE_DOWNLOAD = "Có lỗi xảy ra trong quá trình download file !";

var CUSTOMER_TYPE_PRIVATE = "1";
var CUSTOMER_TYPE_FOREIGN = "2";
var CUSTOMER_TYPE_COMPANY = "3";
var CUSTOMER_TYPE_STAFF = "4";

var CUSTOMER_TYPE_PRIVATE_STR = "Cá nhân";
var CUSTOMER_TYPE_FOREIGN_STR = "Người nước ngoài";
var CUSTOMER_TYPE_COMPANY_STR = "Doanh nghiệp/Tổ chức";
var CUSTOMER_TYPE_STAFF_STR = "Nhân viên";

app_vnm.factory('prepaidList', function($http, $translate) {
	return {
		country : function(callback) {
			var url = eim_url + "/bs/Custome/listCountry";
			$http.post(url).success(callback).error(function(data, status, headers, config) {
				App.unblockUI("#contentMain");
				bootbox.alert(status + " " + $translate.instant('vnm.messages.error.connection'));
			});
		},
		province : function(callback) {
			var url = eim_url + "/bs/Custome/listProvince";
			$http.post(url).success(callback).error(function(data, status, headers, config) {
				App.unblockUI("#contentMain");
				bootbox.alert(status + " " + $translate.instant('vnm.messages.error.connection'));
			});
		},
		district : function(data, callback) {
			var url = eim_url + "/bs/Custome/listDistrict?proId=" + data;
			$http.post(url).success(callback).error(function(data, status, headers, config) {
				App.unblockUI("#contentMain");
				bootbox.alert(status + " " + $translate.instant('vnm.messages.error.connection'));
			});
		},
		customer : function(callback) {
			var url = eim_url + "/bs/Custome/listCustomerType";
			$http.post(url).success(callback).error(function(data, status, headers, config) {
				App.unblockUI("#contentMain");
				bootbox.alert(status + " " + $translate.instant('vnm.messages.error.connection'));
			});
		},
		provinceId : function(data,callback) {
			var url = eim_url + "/bs/Custome/getProvinceId?proName=" + data;
			$http.post(url).success(callback).error(function(data, status, headers, config) {
				App.unblockUI("#contentMain");
				bootbox.alert(status + " " + $translate.instant('vnm.messages.error.connection'));
			});
		},
		districtId : function(data,callback) {
			var url = eim_url + "/bs/Custome/getDistrictId?disName=" + data;
			$http.post(url).success(callback).error(function(data, status, headers, config) {
				App.unblockUI("#contentMain");
				bootbox.alert(status + " " + $translate.instant('vnm.messages.error.connection'));
			});
		},
		addCusBatch : function(data,callback) {
			var url = eim_url + "/bs/Custome/addCusBatch";
			$http.put(url, data).success(callback).error(function(data, status, headers, config) {
				App.unblockUI("#contentMain");
				if("403" == status){
					bootbox.alert(status + " : " + data.message);
				} else {
					bootbox.alert($translate.instant('vnm.messages.error.connection'));
				}
			});
		}
	}
});

app_vnm.controller('ctrl-prepaidList', function($scope, $rootScope, $translate, $compile, $timeout, $uibModal, $location, $window, FileUploader, $filter, $http,
		NgTableParams, $localStorage,prepaidList) {
	$scope.shopCode=$localStorage.clientContext.shop.shopCode;
	$scope.staffCode=$localStorage.clientContext.shop.staffCode;
	$scope.selMdn = "";
	$scope.ind = "";
	$scope.btnDeleIsDis = true;
	$scope.btnModIsDis = true;
	$scope.model = {};
	$scope.listProvince = [];
	$scope.listCustomerType = [];
	$scope.listDistrict = [];
	$scope.fileNameTemplate = "";
	$scope.validationOptions = {
			debounce : 1500,
			preValidateFormElements : true,
			rules : {
				fullName : {
					required: true,
					maxlength : 50,
					EmptyValue:true
				},
				cardId : {
					required: true,
					EmptyValue:true,
					maxlength : 15,
					minlength : 8
				},
				address : {
					required: true,
					EmptyValue:true,
					maxlength : 80,
					minlength : 5
				},
				planceOfIssue : {
					minlength : 5,
					required: true,
					EmptyValue:true
				},
				dateOfIssue : {
					required: true,
					EmptyValue:true,
					isDate:true,
					lessthancurrentdate:true,
					requiredlessthanyear: 15
				},
				dob : {
					required: true,
					EmptyValue:true,
					isDate:true,
					check14to100Age: true					
				},
				mdn : {
					required: true,
					maxlength : 11,
					minlength : 10
				},
				serial : {
					required: true,
					maxlength : 20
				}
			},
			messages : {
				fullName : {
					required: "Bạn cần nhập họ và tên.",
					EmptyValue: "Bạn cần nhập họ và tên.",
					maxlength : "Tối đa 50 ký tự"
				},
				planceOfIssue:{
					required: "Yêu cầu nhập nơi cấp",
					EmptyValue: "Yêu cầu nhập Nơi cấp"
				},
				address:{
					required: "Yêu cầu nhập địa chỉ",
					EmptyValue: "Yêu cầu nhập Nơi cấp",
					maxlength: "Tối đa 50 ký tự",
					minlength: "Không ít hơn 5 ký tự."
				},
				dateOfIssue:{
					required: "Yêu cầu nhập ngày cấp",
					EmptyValue: "Yêu cầu nhập ngày cấp",
					isDate:"Ngày cấp không đúng định dạng",
					lessthancurrentdate:"Ngày cấp phải nhỏ hơn ngày hiện tại",
					requiredlessthanyear: "CMT đã hết hạn"
				},
				dob:{
					required: "Yêu cầu nhập ngày sinh",
					EmptyValue: "Yêu cầu nhập ngày sinh",
					isDate:"Ngày sinh không đúng định dạng",
					check14to100Age: "Bạn chỉ được đăng ký từ 14 - 100 tuổi"
				},
				mdn : {
					required: "Yêu cầu nhập số thuê bao",
					minlength : "Số điện thoại không ít hơn 10 số.",
					maxlength : "Số điện thoại không nhiều hơn 11 số."
				},
				serial : {
					required: "Yêu cầu nhập ICCID",
					maxlength : "Số SIM không nhiều hơn 20 số."
				}
			}
	}

	$scope.listSex = [ {
		'Id' : '1',
		'Title' : 'Nữ'
	}, {
		'Id' : '0',
		'Title' : 'Nam'
	} ];
	
	//DatBD2
	 $scope.lstTypeCardCompany=[
	    	{ 'Id': '1', 'Title': 'Quyết định thành lập' },
	        { 'Id': '2', 'Title': 'Giấy chứng nhận đăng ký kinh doanh và đăng ký thuế' },
	        { 'Id': '3', 'Title': 'Giấy phép đầu tư' },
	        { 'Id': '4', 'Title': 'Giấy chứng nhận đăng ký doanh nghiệp' },
	    ];
	 $scope.lstTypeCard=[
	    	{ 'Id': '01', 'Title': 'Chứng minh thư' },
	        { 'Id': '02', 'Title': 'Hộ chiếu' },
	        { 'Id': '03', 'Title': 'Thẻ căn cước' }   	
	    ];
	 $scope.lstSubUseType=[
	    	{ 'Id': 'CN01', 'Title': 'Cho bản thân' },
	        { 'Id': 'CN02', 'Title': 'Cho người được giám hộ' },
	        { 'Id': 'CN03', 'Title': 'Cho thiết bị' },
	        { 'Id': 'TC01', 'Title': 'Cho các cá nhân thuộc tổ chức' },
	        { 'Id': 'TC02', 'Title': 'Cho thiết bị' }   	
	    ];
	//end

	
	dowloadFile = function(data) {
		overLoading("Downloading file mẫu...");
		var url = eim_url + '/bs/downLoadFileTemplate';
		$http.post(url, data, {
			responseType : 'arraybuffer'
		}).success(function(response, status, headers, config) {
			overLoading("Downloading file mẫu...");
			download(new Blob([ response ]) , headers('FileNameDownload'), headers["content-type"]);
			closeOverLay();
		}).error(function(data) {
			bootbox.alert(FILE_DOWNLOAD);
			closeOverLay();
		});
	}
	
    $scope.removeTextForFileExcelDownLoad = function(listData){
    		console.log('removeTextForFileExcelDownLoad ');
        	for(var i =0; i<listData.length;i++){
        		var subData = listData[i];
        		if(subData != null){
        			
        			if(subData['dateOfIssue'] != null && subData['dateOfIssue']!= undefined
        					&& subData['dateOfIssue'].startsWith("'")){
        				subData['dateOfIssue'] = subData['dateOfIssue'].substring(1,subData['dateOfIssue'].length)
        			}
        			
        			if(subData['dob'] != null && subData['dob']!= undefined
        					&& subData['dob'].startsWith("'")){
        				subData['dob'] = subData['dob'].substring(1,subData['dob'].length)
        			}
        			
        			     
        			if(subData['idCard'] != null && subData['idCard']!= undefined
        					&& subData['idCard'].startsWith("'")){
        				subData['idCard'] = subData['idCard'].substring(1,subData['idCard'].length)
        			}
        			
        			if(subData['mdn'] != null && subData['mdn']!= undefined
        					&& subData['mdn'].startsWith("'")){
        				subData['mdn'] = subData['mdn'].substring(1,subData['mdn'].length)
        			}
        			        			
        			  
        			if(subData['serial'] != null && subData['serial']!= undefined
        					&& subData['serial'].startsWith("'")){
        				subData['serial'] = subData['serial'].substring(1,subData['serial'].length)
        			}
        			
        			if(subData['taxCode'] != null && subData['serial']!= undefined
        					&& subData['taxCode'].startsWith("'")){
        				subData['taxCode'] = subData['taxCode'].substring(1,subData['taxCode'].length)
        			}
        		}
        	}
        	
        	return listData;
    }
    
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
    //end
    
    $scope.reportFields = {
    		fullName: 'Tên KH', 
    		dob: 'Ngày Sinh', 
    		type_card:'Loại giấy tờ cá nhân',
    		idCard: 'Số giấy tờ cá nhân',
    		genderStr: 'Giới tính',
    		customerTypeStr: 'Loại khách hàng', 
    		sub_use_type : 'Đối tượng sử dụng',
    		companyName: 'Tên công ty',  
    		type_Card_Company: 'Loại giấy tờ tổ chức',    		
    		taxCode: 'Số giấy tờ tổ chức',
    		address: 'Địa chỉ',
    		addressCompany: 'Địa chỉ công ty',
    		province: 'Tỉnh thành',
    		district: 'Quận huyện',
    		mdn: 'Số TB',
    		serial: 'serial',
    		placeOfIssue: 'Nơi cấp CMT',
    		dateOfIssue: 'Ngày cấp',
    		country: 'Quốc tịch',
    		img_id: 'Ảnh CMT 1',
    		img_id_2: 'Ảnh CMT 2',
    		bus_permit_no_img1: 'Ảnh GPKD1',
    		bus_permit_no_img2: 'Ảnh GPKD2',
    		parent_img: 'Ảnh DSCN của TC',
    		authorized_img: 'Ảnh giấy ủy quyền',
    		file_id: 'Ảnh HS 1',
    		file_id_2: 'Ảnh HS 2',
    		contract_img1: 'Ảnh HĐ 1',
    		contract_img2: 'Ảnh HĐ 2',
    		cust_img :'Ảnh chân dung',
    		statusStr: 'Trạng thái',
    		depError: 'Chi tiết lỗi'};
    $scope.data = {};
    $scope.filename = {};
    
    var fields = [];
    var header = [];
    
    $scope.ExportDataTable = function () {
    			$scope.data = $scope.setTextForFileExcelDownLoad($scope.dataSubscriberPreTemplate);
    			var fileNameDownload = "Result_"+$scope.fileNameTemplate;
                $scope.filename = !!fileNameDownload ? fileNameDownload : 'export-excel';
                fields = [];
                header = [];

                angular.forEach($scope.reportFields, function(field, key) {
                    if(!field || !key) {
                        throw new Error('error json report fields');
                    }
                    console.log("Key "+key+"; field: "+field);
                    fields.push(key);
                    header.push(field);
                });
                
                $scope.clickDownLoad();
                
                $scope.removeTextForFileExcelDownLoad($scope.dataSubscriberPreTemplate);
    }
    
    function _bodyData() {
        var data = $scope.data;
        var body = "";
        angular.forEach(data, function(dataItem) {
            var rowItems = [];

            angular.forEach(fields, function(field) {
                if(field.indexOf('.')) {
                    field = field.split(".");
                    var curItem = dataItem;

                    // deep access to obect property
                    angular.forEach(field, function(prop){
                        if (curItem !== null && curItem !== undefined) {
                            curItem = curItem[prop];
                        }
                    });

                    data = curItem;
                }
                else {
                    data = dataItem[field];
                }

                var fieldValue = data !== null ? data : ' ';

                if (fieldValue !== undefined && angular.isObject(fieldValue)) {
                    fieldValue = _objectToString(fieldValue);
                }

                rowItems.push(fieldValue);
            });

            body += rowItems.toString() + '\n';
        });

        return body;
    }
    
    function _convertToExcel(body) {
        return header + '\n' + body;
    }
    
    function _objectToString(object) {
        var output = '';
        angular.forEach(object, function(value, key) {
            output += key + ':' + value + ' ';
        });

        return '"' + output + '"';
    }
    
    $scope.clickDownLoad =  function() {
        var bodyData = _bodyData();
        var strData = _convertToExcel(bodyData);

        var blob = new Blob([strData], {type: "text/plain;charset=utf-8"});

        return saveAs(blob, [$scope.filename + '.csv']);
    };
    
    $scope.setTextForFileExcelDownLoad = function(listData){
    	for(var i =0; i<listData.length;i++){
    		var subData = listData[i];
    		if(subData != null){
    			   			

			/*
			 * var textGender = ""; if(subData.gender == "1"){ textGender = "Nam"; } if(subData.gender == null){ textGender = "Nữ"; }
			 * 
			 * subData.genderStr = textGender;
			 */
				
    			// set trang thai
				if(subData.status == ""){
					textStatus = "Chưa thực hiện";
				}
				if(subData.status == null){
					textStatus = "Chưa thực hiện";
				}
				
				if(subData.status == "0"){
					textStatus = "Thực hiện lỗi";
				}
				
				if(subData.status == "1"){
					textStatus = "Thực hiện thành công";
				}
    							
				subData.statusStr = textStatus;
    			
    			if(subData['dateOfIssue'] != null && subData['dateOfIssue']!= undefined
    					&& subData['dateOfIssue'].trim() != ""){
    				subData['dateOfIssue'] = "'"+subData['dateOfIssue'];
    			}
    			
    			if(subData['dob'] != null && subData['dob']!= undefined
    					&& subData['dob'].trim() != ""){
    				subData['dob'] = "'"+subData['dob'];
    			}
    			
    			if(subData['idCard'] != null && subData['idCard']!= undefined
    					&& subData['idCard'].trim() != ""){
    				subData['idCard'] = "'"+subData['idCard'];
    			}
    			
    			if(subData['mdn'] != null && subData['mdn']!= undefined
    					&& subData['mdn'].trim() != ""){
    				subData['mdn'] = "'"+subData['mdn'];
    			}
    			
    			if(subData['serial'] != null && subData['serial']!= undefined
    					&& subData['serial'].trim() != ""){
    				subData['serial'] = "'"+subData['serial'];
    			}
    			
    			if(subData['taxCode'] != null && subData['taxCode']!= undefined
    					&& subData['taxCode'].trim() != ""){
    				subData['taxCode'] = "'"+subData['taxCode'];
    			}
    			
    			console.log(subData);
    		}
    	}
    	
    	return listData;
    }
    
    $scope.downloadFileTemplateServer = function(){
    	var attachFile = {};
    	attachFile.fileName = "template_DKTTTL.xlsx";
    	attachFile.folder = "template_DKTTTL.xlsx";
    	dowloadFile(attachFile);
    }
    
	$scope.loadDefauld = function() {
		App.blockUI({
			target : "#contentMain",
			boxed : true,
			message : 'loading...'
		});
		prepaidList.province(function(result) {
			if(result.status == '0' && result.status != 'undefined'){
				bootbox.alert($translate.instant('vnm.messages.validate.prepaid.server.' + result.messages));
			}else {
				$scope.listProvince = result;
				prepaidList.customer(function(result) {
					if(result.status == '0' && result.status != 'undefined'){
						App.unblockUI("#contentMain");
						bootbox.alert($translate.instant('vnm.messages.validate.prepaid.server.' + result.messages));
					}else {
						App.unblockUI("#contentMain");
						$scope.listCustomerType = result;
					}
				});
			}
		});
	}

	var initialize = function () {
		$scope.loadDefauld();
		disableDefault($scope);
	}

	initialize();

	$scope.updateDistrict = function(id) {
		$scope.model.district = "";
		prepaidList.district(id, function(result) {
			$scope.listDistrict = result;
		});
	}

	$scope.updateCustomerType = function(id) {
		showTheCustomerType($scope, id);
	}

	$scope.getInfoBatch = function(index, item) {
		if(item.customerType=="1"){ //item là cá nhân
			 $scope.lstSubUseType=[
			    	{ 'Id': 'CN01', 'Title': 'Cho bản thân' },
			        { 'Id': 'CN02', 'Title': 'Cho người được giám hộ' },
			        { 'Id': 'CN03', 'Title': 'Cho thiết bị' }
			    ];
		}
		else if(item.customerType=="2"){ //item là tổ chức
			 $scope.lstSubUseType=[
			    	
			        { 'Id': 'TC01', 'Title': 'Cho các cá nhân thuộc tổ chức' },
			        { 'Id': 'TC02', 'Title': 'Cho thiết bị' }   	
			    ];
		}
		disableChange($scope);
		$scope.ind = index;
		$scope.selMdn = item.mdn;
		$scope.btnDeleIsDis = false;
		$scope.btnModIsDis = false;
		loadData(item);
	}

	var loadData = function (item){
		$scope.model.fullName = item.fullName;
		$scope.model.dob = item.dob;
		$scope.model.sex = item.gender;
		$scope.model.idCard = item.idCard;
		$scope.model.planceOfIssue = item.placeOfIssue; 
		$scope.model.dateOfIssue = item.dateOfIssue;
		$scope.model.customerType = item.customerType;
		$scope.model.companyName = item.companyName;
		$scope.model.taxCode = item.taxCode;
		$scope.model.address = item.address;
		
		//DatBD2
		$scope.model.addressCompany=item.addressCompany;
		$scope.model.typeCard=item.type_card;
		$scope.model.typeCardCompany=item.type_Card_Company;
		$scope.model.subUseType=item.sub_use_type;
		//end
		prepaidList.provinceId(item.province, function(result) {
			if(result.status == '0' && result.status != 'undefined'){
				bootbox.alert($translate.instant('vnm.messages.validate.prepaid.server.' + result.messages));
			}else {
				$scope.model.province = result.proId;
				prepaidList.district(result.proId, function(result) {
					if(result.status == '0' && result.status != 'undefined'){
						bootbox.alert($translate.instant('vnm.messages.validate.prepaid.server.' + result.messages));
					}else {
						$scope.listDistrict = result;
						prepaidList.districtId(item.district, function(result) {
							if(result.status == '0' && result.status != 'undefined'){
								bootbox.alert($translate.instant('vnm.messages.validate.prepaid.server.' + result.messages));
							}else {
								$scope.model.district = result.disId;
							}
						});
					}
				});
			}
		});

		$scope.model.mdn = item.mdn;
		$scope.model.serial = item.serial;
		$scope.model.status = item.status === "" ? "Chưa thực hiện" : item.status === null ? "Chưa thực hiện" : item.status === '0' ? "Thực hiện lỗi" : item.status === '1' ? "Thực hiện thành công" : "";
		$scope.model.depError = item.depError;
		showTheCustomerType($scope,item.customerType);
	}

	$scope.remove = function(){
		$scope.dataSubscriberPreTemplate.splice($scope.ind,1);

		$scope.model.fullName = "";
		$scope.model.dob = "";
		$scope.model.sex = "";
		$scope.model.idCard = "";
		$scope.model.planceOfIssue = ""; 
		$scope.model.dateOfIssue = "";
		$scope.model.customerType = "";
		$scope.model.companyName = "";
		$scope.model.taxCode = "";
		$scope.model.address = "";
		$scope.model.province = "";
		$scope.model.district = "";
		$scope.model.mdn = "";
		$scope.model.serial = "";
		$scope.model.status = "";
		$scope.model.depError = "";
		//DatBD2
		$scope.model.addressCompany="";
		$scope.model.typeCard="";
		$scope.model.typeCardCompany="";
		$scope.model.subUseType="";
		//end
		disableDefault($scope);
		$scope.btnDeleIsDis = true;
		$scope.btnModIsDis = true;
		$scope.tableParams = new NgTableParams({}, {
			dataset : $scope.dataSubscriberPreTemplate
		});
	}

	$scope.edit = function (){

		if($scope.model.customerType == ""){
			bootbox.alert( "Bạn phải chọn loại khách hàng.");
			return;
		}

		if($scope.model.sex == ""){
			bootbox.alert( "Bạn phải chọn giới tính.");
			return;
		}

		if ($scope.frm_prepaidList.validate()) {
			$scope.dataSubscriberPreTemplate[$scope.ind].fullName = $scope.model.fullName;
			$scope.dataSubscriberPreTemplate[$scope.ind].dob = $("#dob").val();
			$scope.dataSubscriberPreTemplate[$scope.ind].gender = $scope.model.sex;
			$scope.dataSubscriberPreTemplate[$scope.ind].idCard = $scope.model.idCard;
			$scope.dataSubscriberPreTemplate[$scope.ind].placeOfIssue = $scope.model.planceOfIssue; 
			$scope.dataSubscriberPreTemplate[$scope.ind].dateOfIssue = $("#dateOfIssue").val();
			$scope.dataSubscriberPreTemplate[$scope.ind].customerType = $scope.model.customerType;
			$scope.dataSubscriberPreTemplate[$scope.ind].companyName = $scope.model.companyName;
			$scope.dataSubscriberPreTemplate[$scope.ind].taxCode = $scope.model.taxCode;
			$scope.dataSubscriberPreTemplate[$scope.ind].address = $scope.model.address;
			$scope.dataSubscriberPreTemplate[$scope.ind].province = $("#province").text().trim();
			$scope.dataSubscriberPreTemplate[$scope.ind].district = $("#district").text().trim();
			$scope.dataSubscriberPreTemplate[$scope.ind].mdn = $scope.model.mdn;
			$scope.dataSubscriberPreTemplate[$scope.ind].serial = $scope.model.serial;
			//DatBD2
			$scope.dataSubscriberPreTemplate[$scope.ind].addressCompany=$scope.model.addressCompany;
			$scope.dataSubscriberPreTemplate[$scope.ind].type_card=$scope.model.typeCard;
			$scope.dataSubscriberPreTemplate[$scope.ind].type_Card_Company=$scope.model.typeCardCompany;
			$scope.dataSubscriberPreTemplate[$scope.ind].sub_use_type=$scope.model.subUseType;
			//end
			$scope.tableParams = new NgTableParams({}, {
				dataset : $scope.dataSubscriberPreTemplate
			});
		}
	}

	$scope.add = function (){
		App.blockUI({
			target : "#contentMain",
			boxed : true,
			message : 'loading...'
		});

		// Update anh khi thuc hien
		if ( $scope.listFileImageUploadedPrepaid.length==0)
			{
				App.unblockUI("#contentMain");
				bootbox.alert("Bạn chưa upload ảnh !");
				return;
			}
		
		for(var m=0 ; m< $scope.listFileImageUploadedPrepaid.length; m++){
			var imageElement = $scope.listFileImageUploadedPrepaid[m];
			if(imageElement!= null && imageElement!= undefined){
				var fileNameElement= imageElement.fileName;
				var tmpFileName = fileNameElement.split('/');
// var tmpFileName = fileNameElement.split('\\');
				
				for(var i =0; i < $scope.dataSubscriberPreTemplate.length; i ++){
					for(var j = 0; j < $scope.dataSubscriberPreTemplate[i].attachmentDataObject.length; j ++){
						//DatBD2
						//if($scope.dataSubscriberPreTemplate[i].attachmentDataObject[j].attachmentType.toUpperCase() == imageElement.attachmentType.toUpperCase()){
							//$scope.dataSubscriberPreTemplate[i].attachmentDataObject[j].fileName = fileNameElement;
						//}
						//$scope.dataSubscriberPreTemplate[i].attachmentDataObject[j].fileName = fileNameElement;
						
						if($scope.dataSubscriberPreTemplate[i].attachmentDataObject[j].fileName.toUpperCase() == tmpFileName[tmpFileName.length-1].toUpperCase()){
							$scope.dataSubscriberPreTemplate[i].attachmentDataObject[j].fileName = fileNameElement;
						}
					}
				}
			}
			
		}
		
		
		for(var i =0; i < $scope.dataSubscriberPreTemplate.length; i ++){
			$scope.dataSubscriberPreTemplate[i].shopId = $localStorage.clientContext.shopId;
			//DatBD2
			$scope.dataSubscriberPreTemplate[i].shopCode=$localStorage.clientContext.shop.shopCode;
			
			$scope.dataSubscriberPreTemplate[i].create_user=$localStorage.clientContext.shop.staffCode;
			$scope.dataSubscriberPreTemplate[i].fileExcute=uploaderListPrepaid.queue[0].file.name;
			//end
		}
		
		for(var j=0; j<$scope.dataSubscriberPreTemplate.length; j++)
			{
				for(var h=0; h<$scope.dataSubscriberPreTemplate[j].attachmentDataObject.length; h++)
					{
					 	var x= $scope.dataSubscriberPreTemplate[j].attachmentDataObject[h];
						if (checkSubString(x.fileName,"\\")==false && checkSubString(x.fileName,"/")==false)
							{
								App.unblockUI("#contentMain");
								bootbox.alert("Bạn chưa upload ảnh "+ x.fileName);
								return ;
							}
					}
			}
		
		
		prepaidList.addCusBatch($scope.dataSubscriberPreTemplate, function (result) {
			if(result.status == '0' && result.status != 'undefined'){
				
				App.unblockUI("#contentMain");
				
				if(result!=null && result!= undefined){
					if(result.code == 'LIST_PREPAID_MAX_RECORD'){
						var maxRecordServer  = result.messages;
						var messageAlert = $translate.instant('vnm.messages.validate.prepaid.server.LIST_PREPAID_MAX_RECORD');
						messageAlert = messageAlert.replace(/###/, maxRecordServer);
						bootbox.alert(messageAlert);
						return;
					}
				}
				
				bootbox.alert($translate.instant('vnm.messages.validate.prepaid.server.' + result.messages));
			}else {
				App.unblockUI("#contentMain");
				var success = 0;
				var unsuccess = 0;
				for(var i = 0; i < result.length; i ++){
					if(result[i].status == '0'){
						unsuccess ++;
					}else if(result[i].status == '1') {
						success ++;
					}
				}
				$scope.dataSubscriberPreTemplate = result;
				bootbox.alert({ 
					message: "	 File đăng ký theo lô của bạn đã được ghi nhận, vui lòng sang chức năng "+'"Quản lý đăng ký theo lô"'+" để lấy kết quả đăng ký sau ít nhất 1 tiếng. <br/>Tổng số thuê bao upload thành công: " + success + "<br/>Tổng số thuê bao upload không thành công: " + unsuccess, 
					callback: function(){ 
						for(var j = 0; j < $scope.dataSubscriberPreTemplate.length; j ++){
							if($scope.dataSubscriberPreTemplate[j].status != '1')
							{
								var tmp = $translate.instant('vnm.messages.validate.prepaid.server.' + $scope.dataSubscriberPreTemplate[j].depError);
								$scope.dataSubscriberPreTemplate[j].depError = tmp;
							}
						}
						$scope.tableParams = new NgTableParams({}, {
							dataset : $scope.dataSubscriberPreTemplate
						});
					}
				});


			}
		});
	}

	/* BEGIN UPLOAD LIST SUBSCRIBER PREPAID */
	var uploaderListPrepaid = $scope.uploaderListPrepaid = new FileUploader({
		url: eim_url+'/bs/Custome/listsubscriber'
	});

	$scope.isDisabledListImagePrePaidSpan = true;

	uploaderListPrepaid.queueLimit = 1;
	$scope.dataSubscriberPreTemplate = [];

	// Another user-defined filter set max file size
	uploaderListPrepaid.filters.push({
		'name': 'enforceMaxFileSize',
		'fn': function (item) {
			$scope.fileNameTemplate = item.name;
			var fileName = item.name;
			var sizeFile = item.size;
			var fileExtValue = fileName.split(".").pop();

			if(fileExtValue.toUpperCase() !="xlsx".toUpperCase() && fileExtValue.toUpperCase() !="xls".toUpperCase()){
				bootbox.alert($translate.instant('vnm.messages.validate.prepaid.server.PREPAID-FILE-TYPE-XLS-REQUIRED'));
				return false;
			}

			if(sizeFile <=10485760){
				return true;
			}else{
				var message = messageSizeErrorClient.replace(/###/, fileName);
				bootbox.alert(message);
				return false;
			}
		}
	});


	// set data before upload for each item
	uploaderListPrepaid.onBeforeUploadItem  = function(item){
		overLoading();
		item.headers = {
				Authorization: 'Bearer '+ $localStorage.clientContext.token
		};
		var form_data = new FormData();
		item.formData.push(form_data);
	}

	uploaderListPrepaid.onAfterAddingFile = function (item){
	}

	$scope.removeAllItemListPrePaid =  function(){
		// xóa danh sách thuê bao trả trước
		$scope.dataSubscriberPreTemplate = [];
		uploaderListPrepaid.clearQueue();

		// remove list image
		$("#btnUploaderListImagePrePaid").attr('disabled', 'disabled');
		$("#spanUploaderListImagePrePaid").attr('disabled', 'disabled');
		$scope.isDisabledListImagePrePaidSpan = true;

		// xóa danh sách ảnh thuê bao trả trước
		$scope.listFileImageUploadedPrepaid = [];
		uploaderListImagePrePaid.clearQueue();
	}

	// on item upload success
	uploaderListPrepaid.onSuccessItem = function (fileItem, response, status, headers) {
		
		response = $scope.executeValueListDataTemplate(response);
		
		$scope.dataSubscriberPreTemplate = response;
		$scope.tableParams = new NgTableParams({}, {
			dataset : response
		});
		$("#btnUploaderListImagePrePaid").removeAttr("disabled");
		$("#spanUploaderListImagePrePaid").removeAttr("disabled");
		$scope.isDisabledListImagePrePaidSpan = false;
		closeOverLay();
	};



	
	// xử lý thông tin cho file template upload
	$scope.executeValueListDataTemplate = function(listSubscribers){
		var listSubscribersOut = listSubscribers;
		for(var i = 0; i <listSubscribersOut.length; i++){
			var customerType = StringUtilNVL(listSubscribersOut[i].customerType);
			if(customerType != ""){
				
// if(customerType == CUSTOMER_TYPE_PRIVATE){
// listSubscribersOut[i].customerTypeStr = CUSTOMER_TYPE_PRIVATE_STR;
// }
//
// if(customerType == CUSTOMER_TYPE_FOREIGN){
// listSubscribersOut[i].customerTypeStr = CUSTOMER_TYPE_FOREIGN_STR;
// }
//				
// if(customerType == CUSTOMER_TYPE_COMPANY){
// listSubscribersOut[i].customerTypeStr = CUSTOMER_TYPE_COMPANY_STR;
// }
//				
// if(customerType == CUSTOMER_TYPE_STAFF){
// listSubscribersOut[i].customerTypeStr = CUSTOMER_TYPE_STAFF_STR;
// }
				
			}
		}
		
		return listSubscribersOut;
	}
	
	// on item upload error
	uploaderListPrepaid.onErrorItem = function (fileItem, response, status, headers) {
		closeOverLay();
		if(response!=null && response!= undefined){
			if(response.code == 'LIST_PREPAID_MAX_RECORD'){
				var maxRecordServer  = response.messages;
				var messageAlert = $translate.instant('vnm.messages.validate.prepaid.server.LIST_PREPAID_MAX_RECORD');
				messageAlert = messageAlert.replace(/###/, maxRecordServer);
				bootbox.alert(messageAlert);
				return;
			}
		}
		bootbox.alert($translate.instant('vnm.common.upload.file.error'));
	}
	uploaderListPrepaid.onAfterAddingAll = function(items){
		if(items!=null){
			uploaderListPrepaid.uploadAll();	
		}
	} 

	/* END UPLOAD LIST SUBSCRIBER PREPAID */

	/* ==BEGIN UPLOAD LIST IMAGE PREPAID== */
	var uploaderListImagePrePaid = $scope.uploaderListImagePrePaid = new FileUploader({
		url: eim_url+'/bs/Custome/uploadImageBatch'
	});

	$scope.listFileImageUploadedPrepaid = [];

	uploaderListImagePrePaid.filters.push({
		'name': 'typeImage',
		'fn': function (item) {
			var fileName = item.name;
			var sizeFile = item.size;
			var fileExtValue = fileName.split(".").pop();

			var isImageFile = $scope.isImage(fileExtValue);
			if(!isImageFile){
				bootbox.alert($translate.instant('vnm.messages.validate.prepaid.server.PREPAID-FILE-TYPE-IMAGE-REQUIRED'));
				return false;
			}

			if(sizeFile <=10485760){
				return true;
			}else{
				var message = messageSizeErrorClient.replace(/###/, fileName);
				bootbox.alert(message);
				return false;
			}
		}
	});

	uploaderListImagePrePaid.onAfterAddingFile = function(item){
		var fileName = item._file.name;
		var objectAttachMent = getAttachmentImageByName($scope.dataSubscriberPreTemplate, fileName);
		if(objectAttachMent!=null){
			item.attachmentType = objectAttachMent.attachmentType;
			item.attachMentIdClient = objectAttachMent.attachMentIdClient;
		}
	}

	// set data before upload for each item
	uploaderListImagePrePaid.onBeforeUploadItem  = function(item){
		overLoading();
		var identityDocType = StringUtilNVL(item.attachmentType);
		var identityDocNote = StringUtilNVL(item.identityDocNote);
		item.attachMentIdClient = createTimeStamp();
		var attachMentIdClient = StringUtilNVL(item.attachMentIdClient);

		// set token
		item.headers = {
				Authorization: 'Bearer '+ $localStorage.clientContext.token
		};

		var form_data = new FormData();
		form_data.append("identityDocType", identityDocType);
		form_data.append("identityDocNote", identityDocNote);
		form_data.append("attachMentIdClient", attachMentIdClient);

		item.formData.push(form_data);

	}

	// on item upload success
	uploaderListImagePrePaid.onSuccessItem = function (fileItem, response, status, headers) {
		$scope.listFileImageUploadedPrepaid.push(response);
		var tmp = response.fileName.split('/'); //HUngDN
		// var tmp = response.fileName.split('\\');
		//DatBD2 update
		var typeAttachment=response.attachmentType;
		//end

		for(var i =0; i < $scope.dataSubscriberPreTemplate.length; i ++){
			for(var j = 0; j < $scope.dataSubscriberPreTemplate[i].attachmentDataObject.length; j ++){
				
				if($scope.dataSubscriberPreTemplate[i].attachmentDataObject[j].attachmentType.toUpperCase() == typeAttachment.toUpperCase()){
					
					$scope.dataSubscriberPreTemplate[i].attachmentDataObject[j].fileName = response.fileName;
				}
			}
		}

	};

	// on item upload error
	uploaderListImagePrePaid.onErrorItem = function (fileItem, response, status, headers) {
		closeOverLay();
		if(response!= undefined && response!=null){
			if(response.code == "FILE_IMAGE_CONTENT_ERROR"){
				// bootbox.alert($translate.instant('vnm.messages.validate.prepaid.server.PREPAID-FILE-CONTENT-ERROR'));
			}
		}else{			
			// bootbox.alert($translate.instant('vnm.mnp_message.common.upload.file.error'));
		}
	}

	$scope.removeItemListImagePrepaid = function(item, indexItem){
		item.remove();
	}

	$scope.removeElementAttachmenByItem =  function(item){
		angular.forEach( $scope.listFileImageUploadedPrepaid, function(objectAttact, index){
			if(objectAttact.attachMentIdClient == item.attachMentIdClient){
				$scope.listFileImageUploadedPrepaid.splice(index,1);   
			}
		});
		item.remove();
	}

	$scope.removeAllItemListImagePrePaid =  function(){
		$scope.listFileImageUploadedPrepaid = [];
		uploaderListImagePrePaid.clearQueue()
	}

	$scope.uploadAllFileListImage =  function(uploaderIn, obj){
		var messageError = "";
		var idButtonImage = obj.target.id;
		var listFileNameImage = $filter('orderBy')(getListFileNameUploader(uploaderListImagePrePaid), false);
		var listFileTemplateFile = $filter('orderBy')(getListFileNameImageFromListTemplate($scope.dataSubscriberPreTemplate), false);

		checkListTotalSize = getTotalSizeListFileUpload(uploaderIn);
		if(!checkListTotalSize){
			bootbox.alert("messageSizeError");
			closeOverLay();
			return 0;
		}else{
			uploaderIn.uploadAll();	
			uploaderIn.onCompleteAll = function () {
				closeOverLay();
			}
		}
	}

	/* END UPLOAD LIST IMAGE PREPAID */

	$scope.uploadFileTemplateSubscriber = function(uploaderListIn, $event){
		$scope.removeAllItemListPrePaid();
		$scope.model.fullName = "";
		$scope.selMdn = "";
		$scope.model.dob = "";
		$scope.model.sex = "";
		$scope.model.idCard = "";
		$scope.model.planceOfIssue = ""; 
		$scope.model.dateOfIssue = "";
		$scope.model.customerType = "";
		$scope.model.companyName = "";
		$scope.model.taxCode = "";
		$scope.model.address = "";
		$scope.model.province = "";
		$scope.model.district = "";
		$scope.model.mdn = "";
		$scope.model.serial = "";
		$scope.model.status = "";
		$scope.model.depError = "";
		disableDefault($scope);

	}

	$scope.isImage = function(ext) {
		if (ext) {
			return ext.toUpperCase() == "jpg".toUpperCase() || ext.toUpperCase() == "png".toUpperCase() ;
		}
	}

	// BEGIN validate input
	$.validator.addMethod("isDate", function (value, element) {
		if (value == undefined || value=="") return true;
		if($.trim(value)=="") return true;
		var valueDate = $.trim(value);
		return moment(valueDate, 'DD/MM/YYYY',true).isValid();
	}, "");

	$.validator.addMethod("lessthancurrentdate", function (value, element) {
		if (value === "") return true;
		if($.trim(value)=="") return true;
		var today = moment();
		return (moment(today, "DD/MM/YYYY") > moment(value, "DD/MM/YYYY"));
	}, "");

	$.validator.addMethod("requiredlessthanyear", function (value, element, options) {
		if (value == undefined || value=="") return true;
		if($.trim(value)=="") return true;

		var today = moment().add(-options, 'years');
		return (moment(today, "DD/MM/YYYY") <= moment(value, "DD/MM/YYYY"));
	}, "");

	$.validator.addMethod("check14to100Age", function (value, element) {
		if (value == undefined || value=="") return true;
		if($.trim(value)=="") return true;

		var today = moment().add(-14, 'years');
		if (moment(today, "DD/MM/YYYY") <= moment(value, "DD/MM/YYYY")){
			return false;
		};
		var today1 = moment().add(-100, 'years');
		if (moment(today1, "DD/MM/YYYY") >= moment(value, "DD/MM/YYYY")){
			return false;
		};
		return true;
	}, "");

	$.validator.addMethod("EmptyValue", function (value, element) {
		if (value == undefined || value=="") return false;
		if($.trim(value)=="") return false;
		return true;
	}, "");

});

// BEGIN FUNCTION

// get list document type from uploader
function getListFileNameUploader(uploaderIn){
	var listTypeName = [];
	for(var i =0; i<uploaderIn.queue.length;i++){
		var item = uploaderIn.queue[i];
// var itemType = item.identityDocType+"";
		var itemFileName = item._file.name+"";
		listTypeName.push(itemFileName)
	}
	return listTypeName;
}

// get list file Name from list subscriber
function getListFileNameImageFromListTemplate(listSubscriber){
	var listFileNameTemplate = [];
	for(var i = 0; i<listSubscriber.length; i++){
		if(listSubscriber[i]!= undefined && listSubscriber[i]!=null){
			var attachMentData = listSubscriber[i].attachmentDataObject;

			for(var j =0 ;j <attachMentData.length; j++){
				if(attachMentData[j]!= undefined && attachMentData[j]!=null){
					var fileName = StringUtilNVL(attachMentData[j].fileName);
					var attachmentType = StringUtilNVL(attachMentData[j].attachmentType);
					// get file name push to list
					if(fileName!=""){
						listFileNameTemplate.push(fileName);
					}
				}
			}

		}
	}
	return listFileNameTemplate;
}


// compare list string: return false if 2 list not equal
function compareTwoListString(listStringOne, listStringTwo){

	if(listStringOne.length == 0 || listStringTwo.length==0 ){
		return false;
	}

	if(listStringOne.length != listStringTwo.length){
		return false;
	}

	if(JSON.stringify(listStringOne) === JSON.stringify(listStringTwo)){
		return true;
	}else{
		return false;
	};
}

// get file type from file name
function getAttachmentImageByName(listSubscriber, imageName){
	var  listFileTemplate = null;
	var listFileTemplate  = getListFileImageFromListTemplate(listSubscriber);
	for(var i = 0; i<listFileTemplate.length; i++){
		if(listFileTemplate[i]!= undefined && listFileTemplate[i]!=null){
			if(listFileTemplate[i].fileName == imageName){
				return listFileTemplate[i]
			}
		}
	}
	return listFileTemplate;
}

// get list type from list subscriber
function getListFileImageFromListTemplate(listSubscriber){
	var listFileTemplate = [];
	for(var i = 0; i<listSubscriber.length; i++){
		if(listSubscriber[i]!= undefined && listSubscriber[i]!=null){
			var attachMentData = listSubscriber[i].attachmentDataObject;

			for(var j =0 ;j <attachMentData.length; j++){
				if(attachMentData[j]!= undefined && attachMentData[j]!=null){
					var fileName = StringUtilNVL(attachMentData[j].fileName);
					var attachmentType = StringUtilNVL(attachMentData[j].attachmentType);
					var attachMentIdClient = StringUtilNVL(attachMentData[j].attachMentIdClient);

					if(fileName!="" && attachmentType!=""){
						var fileObject = {
								'attachmentType': attachmentType, 
								'fileName': fileName,
								"attachMentIdClient":attachMentIdClient
						};
						listFileTemplate.push(fileObject);
					}
				}
			}

		}
	}
	return listFileTemplate;
}


// END FUNCTION

function StringUtilNVL(val){
	if(val==undefined || val == null) return "";
	return $.trim(val);
}

function createTimeStamp(){
	var theMoment = moment();
	var millisTimeStamp = theMoment.valueOf();
	return millisTimeStamp;
}

function checkAllFileUploaded(uploader){
	var checkFileAllisUpload = true;
	for(var i =0; i<uploader.queue.length;i++){
		var item = uploader.queue[i];
		var itemStatus = item.isSuccess;
		if(!itemStatus){
			checkFileAllisUpload = false
			break;
		}
	}
	return checkFileAllisUpload;
}

// get total size of list file upload
function getTotalSizeListFileUpload(uploaderIn){
	var listFileTotalSizeByte = 0;
	for(var i =0; i<uploaderIn.queue.length;i++){
		var item = uploaderIn.queue[i];
		var fileSize = item.file.size;
		listFileTotalSizeByte += fileSize;
	}
	var listFileTotalSizeMB = listFileTotalSizeByte/1024/1024;
	if(listFileTotalSizeMB >5){
		return true;
	}

	return true;
}

// remove file in queue by id
function removeItemQueueById(uploader, attachMentIdClient){
	var checkFileAllisUpload = true;
	for(var i =0; i<uploader.queue.length;i++){
		var item = uploader.queue[i];
		if(item.attachMentIdClient == attachMentIdClient){
			item.remove();	
		}
	}
}

function overLoading(message){
	App.blockUI({
		message: message
	});
	$(".blockOverlay").css("background-color", "#000000");
	$(this).css("opacity", "1");
}

function closeOverLay(){
	$.unblockUI();
}

function disableDefault($scope){
	$scope.fullNameDisabledForm = true;
	$scope.dobDisabledForm = true;
	$scope.sexDisabledForm = true;
	$scope.idCardDisabledForm = true;
	$scope.planceDisabledForm = true;
	$scope.dateOfIssDisabledForm = true;
	$scope.customerTypeDisabledForm = true;
	$scope.companyNameDisabledForm = true;
	$scope.taxCodeDisabledForm = true;
	$scope.addressDisabledForm = true;
	$scope.provinceDisabledForm = true;
	$scope.dictrictDisabledForm = true;
	$scope.mdmDisabledForm = true;
	$scope.serialDisabledForm = true;
	$scope.statusDisabledForm = true;
	$scope.depErrorDisabledForm = true;
}

function disableChange($scope){
	$scope.fullNameDisabledForm = false;
	$scope.dobDisabledForm = false;
	$scope.sexDisabledForm = false;
	$scope.idCardDisabledForm = false;
	$scope.planceDisabledForm = false;
	$scope.dateOfIssDisabledForm = false;
	$scope.customerTypeDisabledForm = false;
	$scope.companyNameDisabledForm = false;
	$scope.taxCodeDisabledForm = false;
	$scope.addressDisabledForm = false;
	$scope.provinceDisabledForm = false;
	$scope.dictrictDisabledForm = false;
	$scope.mdmDisabledForm = false;
	$scope.serialDisabledForm = false;
	$scope.statusDisabledForm = true;
	$scope.depErrorDisabledForm = true;
}

function showTheCustomerType($scope, id){
	disableChange($scope);
	if (id == "1") {
		$scope.companyNameDisabledForm = true;
		$scope.taxCodeDisabledForm = true;

	} else if (id == "2") {
		$scope.companyNameDisabledForm = true;
		$scope.taxCodeDisabledForm = true;
		$scope.provinceDisabledForm = true;
		$scope.dictrictDisabledForm = true;

	}else if (id == "4") {
		$scope.companyNameDisabledForm = true;
		$scope.taxCodeDisabledForm = true;
	} 
}

function checkSubString(a,b)
{
	if(a.indexOf(b) == -1)
		return false;
	else 
		return true;

}