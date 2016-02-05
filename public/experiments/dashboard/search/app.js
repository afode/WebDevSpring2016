/**
 * Created by AmandaFode on 2/4/16.
 */

(function(){
    $(init);

    var $movieTitle;
    var $searchBtn;
    var $searchResults;
    var searchUrl = "http://www.omdbapi.com/?s=TITLE";

    function init(){
        $movieTitle = $("#movieTitle");
        $searchBtn = $("#searchBtn");
        $searchResults = $("#searchResults tbody");
        var DETAILS_URL = ""

        $searchBtn.click(searchMovie);
    }

    function searchMovie(){
        var title = $movieTitle.val();
        var url = searchUrl.replace("TITLE", title);

        alert("URL" + url);
        $.ajax({
            url: url
            success: renderSearchResults
        });
    }

    function renderSearchResults() {
        console.log(response);
        var totalResults = response.totalResults;
        var movies = response.Search;
        for (var m = 0; m < movies.length; m++) {
            var movie = movies[m];
            var title = movie.Title;
            var year = movie.year;
            var imdbID = movie.imdbID;
            var posterUrl = movie.Poster;

            var $tr = $("<tr>");

            var $img = $("<img>")
                .attr("id", imdbID);
                .attr("src", )

            var $td = $("<td>");
            $td.append(posterUrl);
            $tr.append(td);

            $td = $("<td").append(title).appendTo($tr);
        }
    }

    function fetchMovieDetails(event) {
        var $img = $(event.currentTarget);
        var $imdbid = $img.attr("id");
        var url = DETAILS_URL.replace("IMDBID", imdbid);
        $.ajax({
            url: url,
            success: renderMovieDetails
        });
    }

    function renderMovieDetails(response) {
        console.log(response);

        var title = response.Title;
        var director = response.Director;
        var plot = response.Plot;
        var posterUrl = response.Poster;
        var actors = response.Actors;
        var actorArray = actors.split(",");

        $detailsTitle.html(title);
        $detailsDirector.html(director);
        $detailsPlot.html(plot);
        $detailsPoster.attr("src", posterUrl);

        $detailsActors.empty();

        for (var a in actorArray) {
            var actorName = actorArray[a];


        }

    }
})