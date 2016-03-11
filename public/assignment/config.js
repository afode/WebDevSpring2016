(function()
{
    angular
        .module("FormBuilderApp", [])
        .config(function($routeProvider)
        {
            $routeProvider
                .when("/",
                    {
                        templateUrl: "home/home.view.html",
                        controller: "home.controller"
                    })
                //.when("/course/:index",
                //    {
                //        templateUrl: "courseOverview/courseOverview.view.html",
                //        controller: "courseOverview.controller"
                //    })
        });
})();