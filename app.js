(function() {

    var HelloApp = 
    ng.core
    .Component({
        selector: 'hello-app',
        template: '<h1>Utu traiiiiin!</h1>'
    })
    .Class({
        constructor: function() {}
    });

    document.addEventListener('DOMContentLoaded', function() {
        ng.platformBrowserDynamic.bootstrap(HelloApp);
    })
})();