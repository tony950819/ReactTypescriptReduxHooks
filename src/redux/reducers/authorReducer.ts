import {InitialState} from './InitialState'
import * as types from '../actions/actionType'

export default function AuthorsReducer  (state=InitialState.authors,action:any){

    switch(action.type){
        case types.LOAD_AUTHOR_SUCCESS:
            return action.authors;
        default :
            return state;
    }
}

