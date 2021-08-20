// import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from 'react'

function App() {
  let [movieinfo, setMovieinfo] = useState("null");
  let [title, setTitle] = useState("titanic")

  useEffect(() => {
    getMovieData();
  }, [])
  function readTitle(value) {
    setTitle(value);
  }

  function getMovieData() {
    let url = 'http://www.omdbapi.com/?t=' + title + '&apikey=58da0a22#';

    fetch(url)
      .then((response) => response.json())
      .then((movie) => {
        setMovieinfo(movie);
        console.log(movie);
      })
      .catch((err) => {
        console.log("error");
      })
  }
  return (
    <div className="App">
      <div className="container">
        <div className="padd">
          <h1>Movie Search</h1>
          <div className="search">
            <input type="text" placeholder="Enter Movie Name" onChange={(event) => { readTitle(event.target.value) }} className="search-field" />
            <button className="btn" onClick={getMovieData}>Get Data</button>
          </div>

        </div>
        {
          movieinfo?.Error===undefined?(
        <div className="movie">
        
          <div className="poster">
            <img src={movieinfo?.Poster} alt="" className="poster-img" />
          </div>
          <div className="details">
            <div className="padd">
              <h1 className='title'>{movieinfo?.Title}</h1>
              <p><strong>Actors</strong>: {movieinfo?.Actors}</p>
              <p><strong>Genre</strong>: {movieinfo?.Genre}</p>
              <p><strong>Directed By</strong>: {movieinfo?.Director}</p>
              <p><strong>Plot</strong>: {movieinfo?.Plot}</p>
              <p><strong>Box Office</strong>: {movieinfo?.BoxOffice}</p>
              <p><strong>Runtime</strong>: {movieinfo?.Runtime}</p>
              <p><strong>Released</strong>: {movieinfo?.Released}</p>
              <p><strong>Awards</strong>: {movieinfo?.Awards}</p>
              <p><strong>IMDB Rating</strong>: {movieinfo?.imdbRating}</p>
            </div>
          </div>
        </div>
          ):
          (
          <h1>Movie details not found</h1>
          )
        }
      </div>
    </div >
  );
}

export default App;
