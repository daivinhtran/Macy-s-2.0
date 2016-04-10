angular.module('app.routes', ['ionicUIRouter'])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    
  

      /* 
    The IonicUIRouter.js UI-Router Modification is being used for this route.
    To navigate to this route, do NOT use a URL. Instead use one of the following:
      1) Using the ui-sref HTML attribute:
        ui-sref='tabsController.macySHome'
      2) Using $state.go programatically:
        $state.go('tabsController.macySHome');
    This allows your app to figure out which Tab to open this page in on the fly.
    If you're setting a Tabs default page or modifying the .otherwise for your app and
    must use a URL, use one of the following:
      /page1/tab1/page2
      /page1/tab2/page2
  */
  .state('tabsController.macySHome', {
    url: '/page2',
    views: {
      'tab1': {
        templateUrl: 'templates/macySHome.html',
        controller: 'macySHomeCtrl'
      },
      'tab2': {
        templateUrl: 'templates/macySHome.html',
        controller: 'macySHomeCtrl'
      }
    }
  })

  /* 
    The IonicUIRouter.js UI-Router Modification is being used for this route.
    To navigate to this route, do NOT use a URL. Instead use one of the following:
      1) Using the ui-sref HTML attribute:
        ui-sref='tabsController.bag'
      2) Using $state.go programatically:
        $state.go('tabsController.bag');
    This allows your app to figure out which Tab to open this page in on the fly.
    If you're setting a Tabs default page or modifying the .otherwise for your app and
    must use a URL, use one of the following:
      /page1/tab1/page3
      /page1/tab2/page3
  */
  .state('tabsController.bag', {
    url: '/page3',
    views: {
      'tab1': {
        templateUrl: 'templates/bag.html',
        controller: 'bagCtrl'
      },
      'tab2': {
        templateUrl: 'templates/bag.html',
        controller: 'bagCtrl'
      }
    }
  })

  .state('tabsController.deals', {
    url: '/page4',
    views: {
      'tab3': {
        templateUrl: 'templates/deals.html',
        controller: 'dealsCtrl'
      }
    }
  })

  .state('tabsController', {
    url: '/page1',
    templateUrl: 'templates/tabsController.html',
    abstract:true
  })

  /* 
    The IonicUIRouter.js UI-Router Modification is being used for this route.
    To navigate to this route, do NOT use a URL. Instead use one of the following:
      1) Using the ui-sref HTML attribute:
        ui-sref='tabsController.women'
      2) Using $state.go programatically:
        $state.go('tabsController.women');
    This allows your app to figure out which Tab to open this page in on the fly.
    If you're setting a Tabs default page or modifying the .otherwise for your app and
    must use a URL, use one of the following:
      /page1/tab1/page5
      /page1/tab2/page5
  */
  .state('tabsController.women', {
    url: '/page5',
    views: {
      'tab1': {
        templateUrl: 'templates/women.html',
        controller: 'womenCtrl'
      },
      'tab2': {
        templateUrl: 'templates/women.html',
        controller: 'womenCtrl'
      }
    }
  })

  /* 
    The IonicUIRouter.js UI-Router Modification is being used for this route.
    To navigate to this route, do NOT use a URL. Instead use one of the following:
      1) Using the ui-sref HTML attribute:
        ui-sref='tabsController.dresses'
      2) Using $state.go programatically:
        $state.go('tabsController.dresses');
    This allows your app to figure out which Tab to open this page in on the fly.
    If you're setting a Tabs default page or modifying the .otherwise for your app and
    must use a URL, use one of the following:
      /page1/tab1/dress
      /page1/tab2/dress
  */
  .state('tabsController.dresses', {
    url: '/dress',
    views: {
      'tab1': {
        templateUrl: 'templates/dresses.html',
        controller: 'dressesCtrl'
      },
      'tab2': {
        templateUrl: 'templates/dresses.html',
        controller: 'dressesCtrl'
      }
    }
  })

  /* 
    The IonicUIRouter.js UI-Router Modification is being used for this route.
    To navigate to this route, do NOT use a URL. Instead use one of the following:
      1) Using the ui-sref HTML attribute:
        ui-sref='tabsController.checkout'
      2) Using $state.go programatically:
        $state.go('tabsController.checkout');
    This allows your app to figure out which Tab to open this page in on the fly.
    If you're setting a Tabs default page or modifying the .otherwise for your app and
    must use a URL, use one of the following:
      /page1/tab1/checkout
      /page1/tab2/checkout
  */
  .state('tabsController.checkout', {
    url: '/checkout',
    views: {
      'tab1': {
        templateUrl: 'templates/checkout.html',
        controller: 'checkoutCtrl'
      },
      'tab2': {
        templateUrl: 'templates/checkout.html',
        controller: 'checkoutCtrl'
      }
    }
  })

$urlRouterProvider.otherwise('/page1/tab1/page2')

  

});