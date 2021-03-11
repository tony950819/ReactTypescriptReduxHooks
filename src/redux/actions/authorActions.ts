import {Author} from '../../Models/Models';
import * as authorApi from "../../api/authorApi";
import * as types from './actionType'



export function   loadAuthorsSuccess (authors:Array<Author>) {
    return {type:types.LOAD_AUTHOR_SUCCESS,authors}
}

export function loadAuthors () {
    return function (dispatch:any){
        return authorApi.getAuthors().then(authors=>{
            dispatch(loadAuthorsSuccess(authors));
        }).catch(error=>{
            throw error;
        });    
    }
}