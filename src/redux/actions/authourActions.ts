import {Authour} from '../../Models/Models';
import * as authourApi from "../../api/authorApi";
import * as types from './actionType'



export function   loadAuthoursSuccess (authours:Array<Authour>) {
    return {type:types.LOAD_AUTHOUR_SUCSESS,authours}
}

export function loadAuthours () {
    return function (dispatch:any){
        return authourApi.getAuthors().then(authours=>{
            dispatch(loadAuthoursSuccess(authours));
        }).catch(error=>{
            throw error;
        });    
    }
}