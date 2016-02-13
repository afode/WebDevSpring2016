/**
 * Created by AmandaFode on 2/11/16.
 */
(function(){
    angular
        .module("MovieAdminApp", [])
        .controller("MovieListController", MovieListController);
    function MovieListController($scope) {
        $scope.movies = [
            {id: 123, title: "Star Wars", director: "JJ Abrams"},
            {id: 234, title: "Avatar", director: "James Cameron"},
            {id: 345, title: "Aliens", director: "James Cameron"},
        ];

        // event handler declarations
        $scope.addMovie = addMovie;
        $scope.deleteMovie = deleteMovie;
        $scope.selectMovie = selectMovie;

        // event handler Implementation

        function updateMovie(movie) {

        }

        var selectedMovieIndex = -1;
        function selectMovie(movie) {
            selectedMovieIndex = $scope.movies.indexOf(movie);
            console.log(movie);
            $scope.movie = {
                id: movie.id,
                title: movie.title,
                director: movie.director
            };
        }

        $scope.addMovie = function(movie) {
            //console.log("addMovie: " + $scope.movie.title);
            var newMovie = {
                id: movie.id,
                title: movie.title,
                director: movie.director
            };
            $scope.movies.push(newMovie);
        }

        $scope.deleteMovie = function(movie) {
            var index = $scope.movies.indexOf(movie);
            console.log("deleteMovie: " + index);
            $scope.movies.splice(index, 1);
        }

    }
})();