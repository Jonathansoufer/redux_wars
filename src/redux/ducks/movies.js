/**
 *Action Types
 */
export const Types = {
  LOAD_MOVIE_REQUEST: 'LOAD_MOVIE_REQUEST',
  LOAD_MOVIE_SUCCESS: 'LOAD_MOVIE_SUCCESS',
  LOAD_MOVIE_FAILURE: 'LOAD_MOVIE_FAILURE'
};
/**
 *Reducer
 */
const INITIAL_STATE = {
  data: [],
  loading: false,
  error: false,
};

export default function movies(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.LOAD_MOVIE_REQUEST:
      return { ...state, loading: true };
    case Types.LOAD_MOVIE_SUCCESS:
      return {
        ...state,
        data: action.payload.data,
        loading: false,
        error: false,
      };
    case Types.LOAD_MOVIE_FAILURE:
      return { ...state, loading: false, error: true };
    default:
      return state;
  }
}
/**
 *Action Creators
 */

export const Creators = {
  loadMoviesRequest: () => ({
    type: Types.LOAD_MOVIE_REQUEST,
  }),

  loadMoviesSuccess: data => ({
    type: Types.LOAD_MOVIE_SUCCESS,
    payload: { data },
  }),

  loadMoviesFailure: () => ({
    type: Types.LOAD_MOVIE_FAILURE,
  }),
};
