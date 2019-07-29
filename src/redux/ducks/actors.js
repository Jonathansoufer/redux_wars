/**
 *Action Types
 */
export const Types = {
  LOAD_ACTOR_REQUEST: "LOAD_ACTOR_REQUEST",
  LOAD_ACTOR_SUCCESS: "LOAD_ACTOR_SUCCESS",
  LOAD_ACTOR_FAILURE: "LOAD_ACTOR_FAILURE",
  LOAD_ACTOR_DETAIL: "LOAD_ACTOR_DETAIL",
};
/**
 *Reducer
 */
const INITIAL_STATE = {
  data: [],
  loading: false,
  error: false
};

export default function actors(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.LOAD_ACTOR_REQUEST:
      return { ...state, loading: true };
    case Types.LOAD_ACTOR_SUCCESS:
      return {
        ...state,
        data: action.payload.data,
        loading: false,
        error: false
      };
    case Types.LOAD_ACTOR_FAILURE:
      return { ...state, loading: false, error: true };
    default:
      return state;
  }
}
/**
 *Action Creators
 */

export const Creators = {
  loadActorsRequest: () => ({
    type: Types.LOAD_ACTOR_REQUEST
  }),
  loadActorsSuccess: data => ({
    type: Types.LOAD_ACTOR_SUCCESS,
    payload: { data }
  }),
  loadActorsFailure: () => ({
    type: Types.LOAD_ACTOR_FAILURE
  })
};
