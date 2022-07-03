const MovieListEl= document.querySelector(".movie-list");

		


async function onSearchChange(event){
  
  const title = event.target.value;
  
  renderMovies(title);
  
}

let Movies;
let MoviesData;
async function renderMovies(title) {


  const MovieWrapper= document.querySelector(".movies");
  MovieWrapper.classList += ' movies__loading';

  const NoResultWrapper= document.querySelector(".no-results");
  NoResultWrapper.classList += ' no-results__img--container';
  
  const MovieCardWrapper=document.querySelector(".movie-card");
      // use this so that the movie card isn't initially there, same thing you did with the picture but opposite
  MovieCardWrapper.classList.add('movie-card');

  if (!Movies) {
    const Movies = await fetch(`http://www.omdbapi.com/?apikey=4124ddf1&s=${title}`);
  
    const MoviesData = await Movies.json(); // must use await here and above 
    localStorage.setItem("id", JSON.stringify(MoviesData.Search));

    console.log(MoviesData.Search)
    MovieWrapper.classList.remove('movies__loading');
    
  
    if (!!MoviesData.Response) {
      NoResultWrapper.classList.remove('no-results__img--container');
      MovieCardWrapper.classList.replace('movie-card','visible')
    
    }
    MovieListEl.innerHTML= MoviesData.Search.map((Movie) => MovieHTML(Movie) ).join("");

  }    

  

}

function MovieHTML(Movie) {
    return `
    <div class="movie-card">
      <div class="movie-card__container">
        <figure>
          <img src="${Movie.Poster}" alt="" class="car__img">
        </figure>  
        <h3 class="purple">${Movie.Title}</h3>
          <p>Type: ${Movie.Type}</p>
          <p>Year: ${Movie.Year}</p>
      </div>
    </div>`
};

function filterMovies(event) {

  
  const filtername = event.target.value;
  console.log(filtername)
  const Data = JSON.parse(localStorage.getItem("id"));
  console.log(Data)
  if (filtername==='Year_Asc') {
    for (let i=0; i< Data.length; ++i ) {
      
      Data.sort((a,b) => a.Year - b.Year);
        
      
    }
  } else if (filtername==='Year_Desc') {

    for (let i=0; i< Data.length; ++i ) {
      
      Data.sort((a,b) => b.Year - a.Year);
        
      
    }

  }
  console.log(Data)
  MovieListEl.innerHTML= Data.map((Movie) => MovieHTML(Movie) ).join("");

 
}

searchInput.onkeyup = function (e) {
  if (e.key === 'Enter') {
      searchBtn.click();
  }
}


filterMovies(event);

renderMovies(title);
