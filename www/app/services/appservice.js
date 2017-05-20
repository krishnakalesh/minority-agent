

ImageApp.factory('ImageService', ['$rootScope','$http','$window',function( $rootScope,$http,$q, $window)
    {
	var service = {};
	service.upload=function(file) {
		var upl = $http({
			method: 'POST',
			url: 'https://20170517t010650-dot-anand-167702.appspot.com/uploadTemplate', // /api/upload
			headers: {
				'Content-Type': 'multipart/form-data',
				'Access-Control-Allow-Origin': '*'
			},
			data: {
				iid :'ABCDEF',
				upload: file
			},
			transformRequest: function(data, headersGetter) {
				var formData = new FormData();
				angular.forEach(data, function(value, key) {
					formData.append(key, value);
				});

				var headers = headersGetter();
				delete headers['Content-Type'];

				return formData;
			}
		});
		return upl.then(handleSuccess, handleError);
	} 

	service.fetchAllPNRData=function() {		
		var upl = $http({
			method: 'GET',
			url: 'https://cacheinvaders.mybluemix.net/getAllpnr', // /api/upload
		});		
		return upl.then(handleSuccess, handleError);
	}


	function handleError(response, data) {
		if (!angular.isObject(response.data) ||!response.data.message) {
			return ($q.reject("An unknown error occurred."));
		}

		return ($q.reject(response.data.message));
	}

	function handleSuccess(response) {		
		return (response);
	}

	return service;
}]);
