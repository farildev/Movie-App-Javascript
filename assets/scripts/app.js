const searchInput = document.getElementById("search-input");
const searchBtn = document.getElementById("search-btn");
const result = document.getElementById("result");


let getMovie = () => {
    let movieName = searchInput.value;
    let apikey = `dfd48644`;
    let url = `http://www.omdbapi.com/?t=${movieName}&apikey=${apikey}`;
    
    if(movieName.length <= 0){
        result.innerHTML = `<h3 class="input-msg">Please enter a valid movie name!</h3>`
    }
    else{
        fetch(url)
        .then((response) => response.json())
        .then((data) => {
            result.innerHTML = `
                <div class="info-wrapper">
                    <div class="movie-left">
                        <img src="${data.Poster}" alt="" />
                    </div>
                    <div class="movie-right">
                        <div class="movie-name">
                            <h2>${data.Title}</h2>
                        </div>
                        <div class="rating">
                            <img src="./assets/img/star-filled.svg" alt="" />
                            <span>${data.imdbRating} IMDB Rating</span>
                        </div>
                        <div class="movie-info">
                            <span>${data.Rated}</span>
                            <span>${data.Year}</span>
                            <span>${data.Runtime}</span>
                        </div>
                    </div>
                </div>
                <div class="information">
                    <div class="genre-info">    
                        <div class="genre">${data.Genre.split(",").join("<span></span>")}</div>
                    </div>
                    <div class="plot-info"><h3>Plot:</h3>${data.Plot}</div>
                    <div class="cast-info"><h3>Cast:</h3>${data.Actors}</div>
                </div>
            `;
        })
    }
}

searchBtn.addEventListener('click', getMovie);
