const searchInput = document.getElementById("search-input");
const searchBtn = document.getElementById("search-btn");
const result = document.getElementById("result");


let getMovie = () => {
    let movieName = searchInput.value;
    let apikey = `316d4030-3821-48fc-85d7-3c242ecf6ce0`;
    let url = `http://www.omdbapi.com/?t=${movieName}&apikey=${apikey}`;
    
    if(movieName.length <= 0){
        result.innerHTML = `<h3 class="input-msg">Please enter a valid movie name!</h3>`
    }
    else{
        fetch(url)
        .then((response) => response.json())
        .then((data) => {
            console.log(data);
        })
    }
}

searchBtn.addEventListener('click', getMovie);