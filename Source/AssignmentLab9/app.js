// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', ['ionic', 'ui.router','ngCordova'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

      // Don't remove this line unless you know what you are doing. It stops the viewport
      // from snapping when text inputs are focused. Ionic handles this internally for
      // a much nicer keyboard experience.
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})


.config(function($stateProvider, $urlRouterProvider, $locationProvider) {
  $urlRouterProvider.otherwise('/')

  $stateProvider.state('first', {
    url: '/',
    templateUrl: 'templates/first.html'
  })
  
  .state('home', {
    url: '/home',
    templateUrl: 'templates/home.html',
      controller:'getweather'
  })
})

 .controller('getweather', function ($scope, $ionicModal, $location, $state, $http, $cordovaCamera, $ionicHistory) {
    
    $scope.text='Hello world!';

    //city = document.getElementById('cityname').value;
    city = 'Chicago';
        $scope.city1='Name: '+city;
    var weather = { };
    console.log('start')
    $http.jsonp('http://api.openweathermap.org/data/2.5/weather?q='+city+'&appid=1abe9c87c394ef77b86b71f0a1459ec9&callback=JSON_CALLBACK').then(function(data) {
                       console.log(data);
        $scope.x=data;
        $scope.temp='Temperature is: '+data.data.main.temp;
        $scope.desc='Description: '+data.data.weather[0].description;
                    //console.log(x);
                                       //         $scope.main=data.main;
        //console.log(main);
                                                //$scope.temp = data.main.temp;
                                            })
    
    $http.get('http://maps.googleapis.com/maps/api/geocode/json?address='+city).then(function(data2) {
                       console.log(data2);
        
        $scope.placeid='Place ID: '+data2.data.results[0].place_id;
       })
    $scope.getdata = function () {
      $location.path('/home');
     $state.go('home');    
    };
    
    $scope.upload=function(){
        var options = {
      quality: 75,
      destinationType: Camera.DestinationType.DATA_URL,
      sourceType: Camera.PictureSourceType.CAMERA,
      allowEdit: true,
      encodingType: Camera.EncodingType.JPEG,
      targetWidth: 500,
      targetHeight: 500,
      popoverOptions: CameraPopoverOptions,
      saveToPhotoAlbum: false,
	  correctOrientation:true
    };
    
       $cordovaCamera.getPicture(options).then(function(imageData) {
            $scope.f= "data:image/jpeg;base64," + imageData;
    }, function(err) {
      // error
    });
        //$scope.z3=z1;
    }
    
    
})