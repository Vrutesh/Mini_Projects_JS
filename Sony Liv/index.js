// hero-banner slider

let next_btn = document.querySelector(".next-button");
let previous_btn = document.querySelector(".prev-btn");
let slides = document.querySelectorAll(".slide");
let currentSlide = 0;

const next_Slide = () => {
  slides[currentSlide].classList.remove("active");
  currentSlide = [currentSlide + 1] % slides.length;
  slides[currentSlide].classList.add("active");

  if (currentSlide === slides.length - 1) {
    clearInterval(intervalID);
    next_btn.style.opacity = "0.5";
    next_btn.style.cursor = "not-allowed";
    next_btn.removeEventListener("click", next);
  }
  if (currentSlide >= 0) {
    previous_btn.style.opacity = "1";
    previous_btn.style.cursor = "pointer";
    previous_btn.addEventListener("click", previous);
  }
};

const intervalID = setInterval(next_Slide, 2000);

const previous_Slide = () => {
  slides[currentSlide].classList.remove("active");
  currentSlide = [currentSlide - 1 + slides.length] % slides.length;
  slides[currentSlide].classList.add("active");

  if (currentSlide === slides.length - 2) {
    next_btn.style.opacity = "1";
    next_btn.style.cursor = "pointer";
    next_btn.addEventListener("click", next);
  }

  if (currentSlide === 0) {
  previous_btn.style.opacity = "0.5";
  previous_btn.style.cursor = "not-allowed";
  previous_btn.removeEventListener("click", previous);
}
};

const next = () => {
  console.log("Next button Clicked");
  next_Slide();
};

const previous = () => {
  console.log("Previous button Clicked");
  previous_Slide();
};

next_btn.addEventListener("click", next);
previous_btn.addEventListener("click", previous);

if (currentSlide === 0) {
  previous_btn.style.opacity = "0.5";
  previous_btn.style.cursor = "not-allowed";
  previous_btn.removeEventListener("click", previous);
}


// fetch data 
const API_KEY = "f3fbd38c0c00cefd4bd7ffeb48aa7a17";
const API_URL = "https://api.themoviedb.org/3/movie/";
const TV_API_URL = "https://api.themoviedb.org/3/tv/";

const upcomingCards = document.querySelectorAll(".upcoming img");
// const backdrops = document.querySelectorAll(".slide img");
const trendingCards = document.querySelectorAll(".trending img");
const latestMovieCards = document.querySelectorAll(".latest img");

const upcomingURL = `${API_URL}upcoming?language=en-US&page=1&region=IN&api_key=${API_KEY}`;
const latestURL = `${API_URL}now_playing?language=en-US&page=1&region=IN&api_key=${API_KEY}`;
const tvURL = `${TV_API_URL}popular?language=en-US&page=1&region=IN&api_key=${API_KEY}`;

fetch(upcomingURL)
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(upcomingData => {
    // Handle upcoming data
    const upcomingMovies = upcomingData.results;

    upcomingMovies.forEach((movie, index) => {
        if (movie && movie.poster_path && movie.backdrop_path) {
          const imageURL = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
          upcomingCards[index].src = imageURL;
        //   const backdropURL = `https://image.tmdb.org/t/p/w500${movie.backdrop_path}`;
        //   backdrops[index].src = backdropURL;
        } else {
          // Hide the card if the image URL is null or undefined
          upcomingCards[index].style.display = "none";
        //   backdrops[index].style.display ='none'
        }
      });
      
  })
  .catch(error => {
    console.error('There was a problem with the fetch operation:', error);
  });

fetch(latestURL)
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(latestMoviesData => {
    // Handle upcoming data
    const latestMovies = latestMoviesData.results;

    latestMovieCards.forEach((card, index) => {
      if (latestMovies[index]) {
        const imageURL = `https://image.tmdb.org/t/p/w500${latestMovies[index].poster_path}`;
        card.src = imageURL;
      }
    });
  })
  .catch(error => {
    console.error('There was a problem with the fetch operation:', error);
  });

fetch(tvURL)
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(tvData => {
    // Handle trending data
    const tvSeries = tvData.results;

    trendingCards.forEach((card, index) => {
      if (tvSeries[index]) {
        const imageURL = `https://image.tmdb.org/t/p/w500${tvSeries[index].poster_path}`;
        card.src = imageURL;
      }
    });
  })
  .catch(error => {
    console.error('There was a problem with the fetch operation:', error);
  });


