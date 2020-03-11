app_vnm.factory('ctk_service', function ($http) { 
    return { 
    	create_ticket: function (data, callback) {
            $http.post(eim_url+ '/ticket', data).success(callback);
        },
        get_cus:function(callback){
        	
        	var url = "http://localhost:7888/test?idCard='271816333'";
        	 $http.post(url).success(callback);
        }
    }
});

app_vnm.controller('ctrl-ticket', function ($scope, $rootScope ,$translate,$compile,$timeout, $uibModal, $location, $window,FileUploader,$filter, ctk_service) {	
	
	
	 $scope.model={};  
	 
	 ctk_service.get_cus( function (rs) {
		 $scope.model=rs[0];
     });
	 
	 $scope.validationOptions = {
			  debounce: 1500,               
			    preValidateFormElements: true,
        rules: {
        	SubscriberName: {
                required: true,
                maxlength: 255
            },
            NPRegistrationName: {
                required: true,
                maxlength: 255
            },
            DocumentNumber: {
                required: true,
                maxlength: 11
            },
            DocumentIssueDate: {
                required: true,
                maxlength: 11
            },
            DocumentIssuePlace: {
                required: true,
                maxlength: 11
            },
            SubscriberRepresentative: {
                required: true,
                maxlength: 255
            }
        },
        messages: {
        	SubscriberName: {
                required:$translate.instant('vnm.messages.validate.subscriberName.required'), 
                maxlength: "Tên thuê bao không vượt quá 255 ký tự."
            },
            NPRegistrationName: {
                required: "Yêu cầu nhập tên đăng ký NP",
                maxlength: "Tên đăng ký NP không vượt quá 255 ký tự."
            },
            DocumentNumber: {
                required: "Yêu cầu nhập số định danh",
                maxlength: "Số định danh không vượt quá 11 ký tự."
            },
            DocumentIssueDate: {
                required: "Yêu cầu nhập ngày cấp định danh",
                maxlength: "Ngày cấp định danh không vượt quá 11 ký tự."
            },
            DocumentIssuePlace: {
                required: "Yêu cầu nhập nơi cấp định danh",
                maxlength: "Nơi cấp định danh không vượt quá 11 ký tự."
            },
            SubscriberRepresentative: {
                required: "Yêu cầu nhập tên đại diện thuê bao",
                maxlength: "Tên đại diện thuê bao không vượt quá 255 ký tự."
	            }
	        }
	    } 
	
 
    $scope.IdentityTypeSource  = [
        { 'Id': '1', 'Title': 'Chứng minh thư' },
        { 'Id': '2', 'Title': 'Thẻ căn cước' } 
    ];
    $scope.DonorSource  = [
        { 'Id': '1', 'Title': 'Viettel' },
        { 'Id': '2', 'Title': 'Vinaphone' },
        { 'Id': '3', 'Title': 'Mobifone' } ,
        { 'Id': '4', 'Title': 'Gtel' } 
    ]; 
    
    $scope.CitizenSource  = [
        { 'Id': 'VN', 'Title': 'Việt Nam' },
        { 'Id': 'USA', 'Title': 'United States' } 
    ]; 
    $scope.ProvinceSource  = [
        { 'Id': '1', 'Title': 'Hà Nội' },
        { 'Id': '2', 'Title': 'TP. Hồ Chí Minh' },
        { 'Id': '3', 'Title': 'Đà Nẵng' } 
    ]; 
    $scope.DistrictSource  = [
        { 'Id': '1', 'Title': 'Cầu giấy' },
        { 'Id': '2', 'Title': 'Hoàn kiếm' },
        { 'Id': '3', 'Title': 'Từ Liêm' } 
    ]; 
    $scope.SubTypeSource  = [
        { 'Id': '1', 'Title': 'Trả trước' },
        { 'Id': '2', 'Title': 'Trả sau' } 
    ]; 
    $scope.DocumentTypeSource  = [
        { 'Id': '1', 'Title': 'Chứng minh thư' },
        { 'Id': '2', 'Title': 'Thẻ căn cước' },
        { 'Id': '3', 'Title': 'Hộ chiếu' },
        { 'Id': '4', 'Title': 'Khác' } 
    ];
    
    $scope.model.fileAttachments = [];
    var uploader = $scope.uploader = new FileUploader({
        url: eim_url+'/ticket/upload'
    });
    uploader.onSuccessItem = function (fileItem, response, status, headers) {
        $scope.model.fileAttachments.push(response);
    };
    
    
    $scope.cancel = function () {
         
    }
    $scope.save = function () {  
    	
    	 if ($scope.frm_createticket.validate()) {
	    	 if (uploader.queue.length > 0) {
	             uploader.uploadAll();
	             uploader.onCompleteAll = function () {
	            	 ctk_service.create_ticket($scope.model, function (rs) {
	                 });
	             };
	         } else {
	        	 ctk_service.create_ticket($scope.model, function (rs) {
	             });
	         } 
    	 }
    	 
    }
    
    
    

});

app_vnm.directive('ngThumb', ['$window', function($window) {
    var helper = {
        support: !!($window.FileReader && $window.CanvasRenderingContext2D),
        isFile: function(item) {
            return angular.isObject(item) && item instanceof $window.File;
        },
        isImage: function(file) {
            var type =  '|' + file.type.slice(file.type.lastIndexOf('/') + 1) + '|';
            return '|jpg|png|jpeg|bmp|gif|'.indexOf(type) !== -1;
        }
    };

    return {
        restrict: 'A',
        template: '<canvas/>',
        link: function(scope, element, attributes) {
            if (!helper.support) return;

            var params = scope.$eval(attributes.ngThumb);

            if (!helper.isFile(params.file)) return;
            if (!helper.isImage(params.file)) return;

            var canvas = element.find('canvas');
            var reader = new FileReader();

            reader.onload = onLoadFile;
            reader.readAsDataURL(params.file);

            function onLoadFile(event) {
                var img = new Image();
                img.onload = onLoadImage;
                img.src = event.target.result;
            }

            function onLoadImage() {
                var width = params.width || this.width / this.height * params.height;
                var height = params.height || this.height / this.width * params.width;
                canvas.attr({ width: width, height: height });
                canvas[0].getContext('2d').drawImage(this, 0, 0, width, height);
            }
        }
    };
}]);