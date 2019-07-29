import { all, takeLatest } from "redux-saga/effects";

import { Types as MovieTypes } from "../ducks/movies";
import { Types as ActorTypes } from "../ducks/actors";

import { loadMovies } from "./movies.js";
import { loadActors } from "./actors.js";

export default function* rootSaga() {
  return yield all([
    takeLatest(MovieTypes.LOAD_MOVIE_REQUEST, loadMovies),
    takeLatest(ActorTypes.LOAD_ACTOR_REQUEST, loadActors)
  ]);
}
