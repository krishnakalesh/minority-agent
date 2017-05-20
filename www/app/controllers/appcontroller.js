

(function(){
	ImageApp.controller('ImageController', ['$scope','$window','$rootScope', '$filter'  , '$parse', 'ImageService','$interval','$timeout'
		, function($scope,$window,$rootScope,  $filter, $parse, ImageService,$interval,$timeout,$cordovaBeacon){

	        $scope.beaconMessage  ="Jinga Lala";     
	        $scope.passengerData = {};

	        $scope.showAllPNR=false;
	        $scope.showBeacon=false;

	        //$cordovaBeacon.requestWhenInUseAuthorization();   
	        //$cordovaBeacon.startRangingBeaconsInRegion($cordovaBeacon.createBeaconRegion("estimote", "b9407f30-f5f8-466e-aff9-25556b57fe6d"));
  
	    	$scope.$watch('file', function(newfile, oldfile) {
	        if(angular.equals(newfile, oldfile) ){
	          return;
	        }
	        ImageService.upload(newfile).then(function(res){
	          // DO SOMETHING WITH THE RESULT!
	          console.log("result", res);
	        })
	      });

	    $scope.tryAgain = function(){	  
	    	$scope.showAllPNR=false;  	
			$scope.showBeacon =true; 	
			$scope.beaconMessage ='olala laa';
		};

		$scope.loadAgentData = function(){  
			
		};

		$scope.fetchAllPNRData = function(){	
				$scope.showAllPNR=true;  	
				$scope.showBeacon =false; 		
				ImageService.fetchAllPNRData().then(function(res){
					$scope.passengerData = res;
					console.log("result", $scope.passengerData);
				})
		};

		$rootScope.$on("$cordovaBeacon:didRangeBeaconsInRegion", function(event, pluginResult) {
            alert("In broadcast function");
            var uniqueBeaconKey;
            for(var i = 0; i < pluginResult.beacons.length; i++) {
                uniqueBeaconKey = pluginResult.beacons[i].uuid /*+ ":" + pluginResult.beacons[i].major + ":" + pluginResult.beacons[i].minor;
                $scope.beacons[uniqueBeaconKey] = pluginResult.beacons[i];*/
                alert("UUID: " + uniqueBeaconKey)
            }
            $scope.beaconMessage ='Baecon Alert!!!';
            $scope.$apply();
        });

        $scope.getAllPassengers = function(){	    	
			$scope.passengers ='Paseenger!!!';
		};
		
	}]);
})
();