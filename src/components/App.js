import React, { useState } from "react";
// import axios from "axios";
// import fetchMovies from "../service/fetch_movies";

import MovieList from "./movie-list";

function App(props) {
  const [data, setData] = useState({});

  // componentDidMount = () => {
  //   // const promise = axios.get('https://imdb-api.com/API/Top250Movies/k_tmbfg3wv');
  //   this.setState({ ...this.state, data: fetchMovies() });
  //   // promise
  //   //   .then((response) => {
  //   //     // this.setState({...this.state, data: response.data})
  //   //     this.setState({ ...this.state, data: fetchMovies() });
  //   //   })
  //   //   .catch((err) => {
  //   //     console.log(err);
  //   //   });
  // };

  const items = data.items || [];

  return (
    <div>
      <div className="container">
        <br />
        <MovieList />
      </div>
    </div>
  );
}

export default App;
