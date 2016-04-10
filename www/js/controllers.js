angular.module('app.controllers', [])
  
.controller('macySHomeCtrl', function($scope) {

})
   
.controller('bagCtrl', function($scope) {

})
   
.controller('dealsCtrl', function($scope) {

})
         
.controller('womenCtrl', function($scope) {

})
 
.controller('checkoutCtrl', function($scope) {

})
 

.controller('dressesCtrl', function($scope, $ionicPopup, $timeout) {
    // Triggered on a button click, or some other target
    $scope.showCost = function() {
      $scope.data = {}

      // An elaborate, custom popup
      var myPopup = $ionicPopup.show({
        title: 'Price',
        template: '<ion-list><ion-radio default ng-model="low" ng-value="low">< $50</ion-radio><ion-radio ng-model="mid" ng-value="mid">$50 - $100</ion-radio><ion-radio ng-model="high" ng-value="high">$101 - $250</ion-radio><ion-radio ng-model="higher" ng-value="higher">$251 - $500</ion-radio><ion-radio ng-model="highest" ng-value="highest">>$501</ion-radio></ion-list>',
        //subTitle: 'Please use normal things',
        scope: $scope,
        buttons: [
          { text: 'Cancel' },
          {
            text: '<b>Ok</b>',
            type: 'button-positive',
            onTap: function(e) {
                myPopup.close();
            }
          },
        ]
      });
       myPopup.then(function(res) {
        console.log('Tapped!', res);
       });
       $timeout(function() {
         myPopup.close(); //close the popup after 3 seconds for some reason
     }, 20000);
       };


       // Triggered on a button click, or some other target
       $scope.showSize = function() {
         $scope.data = {}

         // An elaborate, custom popup
         var myPopup = $ionicPopup.show({
           title: 'Size',
           template: '<ion-list><ion-checkbox ng-model="filter.petites">Petites</ion-checkbox><ion-checkbox ng-model="filter.plus">Plus Sizes</ion-checkbox><ion-checkbox ng-model="filter.regular">Regular</ion-checkbox></ion-list>',
           //subTitle: 'Please use normal things',
           scope: $scope,
           buttons: [
             { text: 'Cancel' },
             {
               text: '<b>Ok</b>',
               type: 'button-positive',
               onTap: function(e) {
                  myPopup.close();
               }
             },
           ]
         });
          myPopup.then(function(res) {
           console.log('Tapped!', res);
          });
          $timeout(function() {
            myPopup.close(); //close the popup after 3 seconds for some reason
        },20000);
          };


          // Triggered on a button click, or some other target
          $scope.showBrand = function() {
            $scope.data = {}

            // An elaborate, custom popup
            var myPopup = $ionicPopup.show({
              title: 'Brand',
              template: '<ion-list><ion-checkbox ng-model="filter.LRL">Lauren Ralph Lauren</ion-checkbox><ion-checkbox ng-model="filter.plus">Calvin Klein</ion-checkbox><ion-checkbox ng-model="filter.regular">Michael Kors</ion-checkbox></ion-list>',
              //subTitle: 'Please use normal things',
              scope: $scope,
              buttons: [
                { text: 'Cancel' },
                {
                  text: '<b>Ok</b>',
                  type: 'button-positive',
                  onTap: function(e) {
                      myPopup.close();
                  }
                },
              ]
            });
             myPopup.then(function(res) {
              console.log('Tapped!', res);
             });
             $timeout(function() {
               myPopup.close(); //close the popup after 3 seconds for some reason
           },20000);
             };
})
