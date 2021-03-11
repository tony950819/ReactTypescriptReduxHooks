import { Authour } from "../../Models/Models";
import * as types from '../actions/actionType'

export default function AuthoursReducer  (state:Array<Authour> =new Array<Authour>(),action:any){
    
    switch(action.type){
        case types.LOAD_AUTHOUR_SUCSESS:
            return action.authours;
        default :
            return state;
    }
}

