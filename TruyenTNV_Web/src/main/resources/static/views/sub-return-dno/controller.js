
app_vnm.factory('ctk_service', function ($http) { 
    return { 
    	create_ticket: function (data, callback) {
            $http.post(eim_url+ '/ticket', data).success(callback);
        }
    }
});

app_vnm.controller('ctrl-sub-return-dno', function ($scope, $rootScope ,$translate,$compile,$timeout, $uibModal, $location, $window,$filter, ctk_service) {	
	
	
	 $scope.model={};  
	 $scope.validationOptions = {
			  debounce: 1500,               
			    preValidateFormElements: true,
        rules: {
        	SubscriberName: {
                required: true,
                maxlength: 255
            } 
        },
        messages: {
        	SubscriberName: {
                required:$translate.instant('vnm.messages.validate.subscriberName.required'), 
                maxlength: "Tên thuê bao không vượt quá 255 ký tự."
            } 
	    } 
	
 
  
    $scope.DNOSource  = [
        { 'Id': '1', 'Title': 'VTE' },
        { 'Id': '2', 'Title': 'MBF' },
        { 'Id': '3', 'Title': 'VNP' }  
    ]; 
    
    $scope.StatusSource  = [
        { 'Id': '1', 'Title': 'Đã gửi' },
        { 'Id': '2', 'Title': 'Chưa gửi'  
    ]; 
     
    
    $scope.cancel = function () {
         
    }
    $scope.save = function () {  
    	 
    	 
    }
    
    
    

});