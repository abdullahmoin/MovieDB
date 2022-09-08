import React, { Component } from "react";
// import axios from "axios";
// import fetchMovies from "../service/fetch_movies";
import fetchMovies from "./service/fetch-movies";

class App extends Component {
  state = {
    data: {},
  };

  componentDidMount = () => {
    // const promise = axios.get('https://imdb-api.com/API/Top250Movies/k_tmbfg3wv');
    this.setState({ ...this.state, data: fetchMovies() });
    // promise
    //   .then((response) => {
    //     // this.setState({...this.state, data: response.data})
    //     this.setState({ ...this.state, data: fetchMovies() });
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });
  };

  render() {
    const items = this.state.data.items || [];
    return (
      <div>
        <div className="container table-responsive">
          <table class="table table-striped align-middle">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Rank</th>
                <th scope="col">Movie Name</th>
                <th scope="col">Rating</th>
                <th scope="col" className="text-center">Your Likes</th>
                <th scope="col">Total Likes</th>
              </tr>
            </thead>
            <tbody>
              {items.map((item) => {
                const id = item.id;
                const rank = item.rank;
                const fullTitle = item.fullTitle;
                const img = item.image;
                const imdbRating = item.imDbRating;
                const likes = parseInt(item.imDbRatingCount);

                return (
                  <tr key={id}>
                    <th scope="row">
                      <img src={img} alt="" className="movie-img" />
                    </th>
                    <td>{rank}</td>
                    <td>{fullTitle}</td>
                    <td className="">
                      <div className="d-flex rating">
                      <p className="me-1 rating-star"><i class="ri-star-fill"></i></p>
                      <p>{imdbRating}</p>
                      </div>
                      
                    </td>
                    <td className="text-center handle-linking"><i class="ri-heart-3-line"></i></td>
                    <td>{likes}</td> 
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default App;
