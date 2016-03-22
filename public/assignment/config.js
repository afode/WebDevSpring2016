(function()
{
    angular
        .module("FormBuilderApp")
        .config(Configuration);


        function Configuration($routeProvider) {
            $routeProvider
                .when("/", {
                    templateUrl: "views/home/home.view.html",
                    controller: "HomeController"
                })
                .when("/admin", {
                    templateUrl: "views/admin/admin.view.html",
                    controller: "AdminController"
                })
                .when("/fields", {
                    templateUrl: "views/forms/fields.view.html",
                    controller: "FieldsController"
                })
                .when("/forms", {
                    templateUrl: "views/forms/forms.view.html",
                    controller: "FormsController"
                })
                .when("/header", {
                    templateUrl: "views/header/header.view.html",
                    controller: "HeaderController"
                })
                .when("/sidebar", {
                    templateUrl: "views/sidebar/sidebar.view.html",
                    controller: "SidebarController"
                })
                .when("/login", {
                    templateUrl: "views/users/login.view.html",
                    controller: "LoginController"
                })
                .when("/profile", {
                    templateUrl: "views/users/profile.view.html",
                    controller: "ProfileController"
                })
                .when("/register", {
                    templateUrl: "views/users/register.view.html",
                    controller: "RegisterController"
                })
                .otherwise({
                    redirectTo: "/"
                })
        }
})();