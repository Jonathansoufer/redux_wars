import { call, put } from "redux-saga/effects";

import api from "../../services/api";

import { Creators as MovieActions } from "../ducks/movies";

export function* loadMovies() {
  try {
    const response = yield call(api.get, "films");
    yield put(MovieActions.loadMoviesSuccess(response.data.results));
  } catch (error) {
    yield put(MovieActions.loadMoviesFailure);
  }
}
