import { FETCH_SUCCESS, FETCH_FAIL, FETCH_START,  POST_SUCCESS, POST_FAIL, POST_START } from '../actions'

const initialState = {
   smurfs: [],
   fetchingSmurfs: false,
   addingSmurf: false,
   error: null,

 }

 export const reducer = (state = initialState, action) => {
   switch(action.type){
    case FETCH_START:
      return {
        ...state,
        fetchingSmurfs: true,
      }
    case FETCH_SUCCESS:
      return {
        ...state,
        fetchingSmurfs: false,
        smurfs: action.payload,
      }
    case FETCH_FAIL:
      return {
        ...state,
        fetchingSmurfs: false,
        error: action.payload,
      }

    case POST_START:
      return {
        ...state,
        postingSmurfs: true,
      }
    case POST_SUCCESS:
      return {
        ...state,
        postingSmurfs: false,
        smurfs: action.payload,
      }
    case POST_FAIL:
      return {
        ...state,
        postingSmurfs: false,
        error: action.payload,
      }
    default:
      return {...state}
   }
 }
 
