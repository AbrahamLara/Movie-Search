$(document).ready(function() {
    var search = $('#search');

    $('form').submit(function(event) {
        event.preventDefault(); // Prevents form from refreshing
    });

    search.keyup(function(event) {
        console.log(String.fromCharCode(event.keyCode));
        var valueSearch = search.val();

        if (valueSearch.length > 3) {
            console.log(String.fromCharCode(event.keyCode));
            $.ajax({
                type: "GET",
                url: "http://www.omdbapi.com/?apikey=8ac64afe&",
                data: {
                    t: search.val(),
                },
                dataType: "json",
                success: function(response) {
                    $('#title').html(response.Title);
                    $('#poster').attr("src",response.Poster);
                    $('#description').html(response.Plot);
                }
            });
        }
    });
});