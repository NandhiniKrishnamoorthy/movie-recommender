import "./styles.css";
import React, { useState } from "react";

const movieList = {
  Horror: [
    {
      movieName: "Yavarum Nalam",
      description:
        "Horror film which is Directed by Vikram K. Kumar & performed by Madhavan",
      ratings: "5/5"
    },
    {
      movieName: "Pissasu",
      description: "Gothic horror film written and directed by Mysskin",
      ratings: "4.5/5"
    },
    {
      movieName: "Eeram",
      description:
        "supernatural crime thriller film written and directed by Arivazhagan",
      ratings: "4.5/5"
    }
  ],

  Thriller: [
    {
      movieName: "Ratchasan",
      description: "Psychological crime thriller film directed by Ram Kumar",
      ratings: "5/5"
    },
    {
      movieName: "U-Turn",
      description:
        "U Turn is a 2018 Indian mystery-thriller film written and directed by Pawan Kumar",
      ratings: "4.5/5"
    },
    {
      movieName: "Game Over",
      description:
        "Game Over is a 2019 Indian psychological thriller film directed by Ashwin Saravanan",
      ratings: "4/5"
    }
  ],

  RomanticMovies: [
    {
      movieName: "Charlie",
      description:
        "Charlie is a 2015 Indian Malayalam-language adventure drama film directed by Martin Prakkat",
      ratings: "5/5"
    },
    {
      movieName: "Oh-My Kadavule",
      description:
        "Oh My Kadavule is a 2020 Indian Tamil-language romantic fantasy film, written and directed by Ashwath Marimuthu",
      ratings: "4.5/5"
    },
    {
      movieName: "Vaayai Moodi Pesavum",
      description:
        "Vaayai Moodi Pesavum is a 2014 Indian Tamil-language satirical romantic comedy film directed by Balaji Mohan",
      ratings: "4.5/5"
    }
  ]
};

export default function App() {
  const [movieType, setmovieType] = useState("Horror");

  function displaydetails(item) {
    setmovieType(item);
  }

  return (
    <div className="App">
      <nav className="navigation">movieRecommender</nav>
      <header className="section">
        This recommender recommends some good movies for you to watch
      </header>
      <div>
        {Object.keys(movieList).map((movie) => (
          <button className="non-bullet" onClick={() => displaydetails(movie)}>
            {movie}
          </button>
        ))}
      </div>
      <div>
        <ul className="ul-Style">
          {movieList[movieType].map((movie) => (
            <li className="list-Style" key={movie.movieName}>
              {" "}
              <div style={{ fontWeight: "bold" }} className="movieStyle">
                {movie.movieName}
              </div>
              <div className="movieStyle">{movie.description}</div>
              <div className="movieStyle">{movie.ratings}</div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
