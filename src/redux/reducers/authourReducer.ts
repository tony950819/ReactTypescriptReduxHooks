import {InitialState} from '../reducers/InitialState'
import * as types from '../actions/actionType'

export default function AuthoursReducer  (state=InitialState.authours,action:any){

    switch(action.type){
        case types.LOAD_AUTHOUR_SUCSESS:
            return action.authours;
        default :
            return state;
    }
}

