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
            console.log(data);
            console.log(data.Poster);
            console.log(data.Title);
            console.log(data.Year);
            console.log(data.imdbRating);
            console.log(data.Rated);
            console.log(data.Plot);
            console.log(data.Actors);
            console.log(data.Runtime);
            console.log(data.Genre);

            result.innerHTML = `
                <div class="info-wrapper">
                    <div class="movie-info">
                    <img class="movie-poster" src="${data.Poster}" alt="" />
                    <div class="movie-titles">
                        <h2>${data.Title}</h2>
                        <div class="rating">
                            <img src="./assets/img/star-filled.svg" alt="IMDB Rating" />
                            <span>${data.imdbRating}</span>
                        </div>
                    </div>
                    
                    </div>
                </div>
            `;
        })
        console.log(url);
    }
}

searchBtn.addEventListener('click', getMovie);