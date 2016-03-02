require.config({
    baseUrl: 'js',
    urlArgs: 'v=1.0'
});

require(
    [
         
        'app',
        'views/loginView',
        'views/signUpView',
        'views/homePageView',
        'controllers'
        
       // 'controllers/LoginviewController'
        
    ],
    function () {
        angular.bootstrap(document, ['eLearningApp']);
    });