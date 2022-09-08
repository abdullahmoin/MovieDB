import React, { useEffect, useState } from "react";
import Table from "./common/table";
import fetchMovies from "../service/fetch-movies";

function MovieList(props) {
<<<<<<< HEAD
  const [movies, setMovies] = useState([]);
  const limit = 10;

  const columns = [
    {
      label: "#",
      path: "image",
      content: (item, path) => (
        <>
          {" "}
          <img src={item[path]} alt="" />
        </>
      ),
    },
    {
      label: "Rank",
      path: "rank",
      content: (item, path) => <> {item[path]} </>,
    },
    {
      label: "Title",
      path: "fullTitle",
      content: (item, path) => <> {item[path]} </>,
    },
    {
      label: "Rating",
      path: "imDbRating",
      content: (item, path) => <> {item[path]} </>,
    },
    {
      label: "Total Rating",
      path: "imDbRatingCount",
      content: (item, path) => <> {item[path]} </>,
    },
  ];

  useEffect(() => {
    const data = fetchMovies();
    const movieList = data.items;
    setMovies(movieList);
  }, []);

  return <Table items={movies} columns={columns} limit={limit} currentPage={3} />;
=======
    const [movies, setMovies] = useState([]);
    const limit = 10;

    const columns = [
        {
            label: "#",
            path: "image",
            content: (item, path) => (
                <>
                    {" "}
                    <img src={item[path]} alt="" />
                </>
            ),
        },
        {
            label: "Rank",
            path: "rank",
            content: (item, path) => <> {item[path]} </>,
        },
        {
            label: "Title",
            path: "fullTitle",
            content: (item, path) => <> {item[path]} </>,
        },
        {
            label: "Rating",
            path: "imDbRating",
            content: (item, path) => <> {item[path]} </>,
        },
        {
            label: "Total Rating",
            path: "imDbRatingCount",
            content: (item, path) => <> {item[path]} </>,
        },
    ];

    useEffect(() => {
        const data = fetchMovies();
        const movieList = data.items;
        setMovies(movieList);
    }, []);

    return (<Table
        items={movies}
        columns={columns}
        limit={limit}
        currentPage={3} />
    );
>>>>>>> 4a66e0e6a1fd64a0b77934cb10b49a3a4979f416
}

export default MovieList;
