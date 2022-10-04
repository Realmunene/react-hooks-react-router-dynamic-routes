import React from "react";
import { Route, useRouteMatch } from "react-router-dom";
import MovieShow from "./MovieShow";

function MoviesPage({ movies }) {
  const match = useRouteMatch();
  
  return (
    <div>
      <MovieShow movies = {movies}/>
      <Route exact path={match.url}>
            <h3>Choose a movie from the list above</h3>
      </Route>
      <Route path={`${match.url}/:movieId`}>
         <MovieShow movies = {movies}/>
      </Route>
    </div>
  );
}
export default MoviesPage;
