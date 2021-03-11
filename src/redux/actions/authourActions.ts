import {Author} from '../../Models/Models';
import * as authourApi from "../../api/authorApi";
import * as types from './actionType'



export function   loadAuthoursSuccess (authours:Array<Author>) {
    return {type:types.LOAD_AUTHOUR_SUCSESS,authours}
}

export function loadAuthors () {
    return function (dispatch:any){
        return authourApi.getAuthors().then(authours=>{
            dispatch(loadAuthoursSuccess(authours));
        }).catch(error=>{
            throw error;
        });    
    }
}