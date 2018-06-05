var document = new Document();

var animationId = 0;

function guiCreateMovie(title, director, actor, yearOfPublication, genre) {
    document.getElementById("grid").innerHTML +=    '<div class="grid_item" id="'+ 'grid_item_' + animationId +'">' +
                                                    '<div class="grid_item_picture">' +
                                                    '<img src="movie_pic.png" height="200" width="200">' +
                                                    '</div>' +
                                                    '<div class="grid_item_title">' +
                                                    '<p><b>title</b> ' + title + '</p>' +
                                                    '</div>' +
                                                    '<div class="grid_item_director">' +
                                                    '<p><b>director</b> ' + director + '</p>' +
                                                    '</div>' +
                                                    '<div class="grid_item_actor">' +
                                                    '<p><b>actor</b> ' + actor + '</p>' +
                                                    '</div>' +
                                                    '<div class="grid_item_yearOfPublication">' +
                                                    '<p><b>year of publication</b> ' + yearOfPublication + '</p>' +
                                                    '</div>' +
                                                    '<div class="grid_item_genre">' +
                                                    '<p><b>genre</b> ' + genre + '</p>' +
                                                    '</div>' +
                                                    '</div>'
    
    var elem = document.getElementById('grid_item_' + animationId);    
    animationId++;

}

function guiCreateMovieFromInput() {
    var title = document.getElementById("input_title").value;
    var director = document.getElementById("input_director").value;
    var actor = document.getElementById("input_actor").value;
    var yearOfPublication = document.getElementById("input_yearOfPublication").value;
    var genre = document.getElementById("input_genre").value;

    guiCreateMovie(title, director, actor, yearOfPublication, genre);
}