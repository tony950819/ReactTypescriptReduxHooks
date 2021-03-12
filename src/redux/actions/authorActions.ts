import {Author} from '../../Models/Models';
import * as authorApi from "../../api/authorApi";
import * as types from './actionType'
import {beginAPICAL} from '../actions/apiStatusActions'


export function   loadAuthorsSuccess (authors:Array<Author>) {
    return {type:types.LOAD_AUTHOR_SUCCESS,authors}
}

export function loadAuthors () {
    return function (dispatch:any){
        dispatch(beginAPICAL());
        return authorApi.getAuthors().then(authors=>{
            dispatch(loadAuthorsSuccess(authors));
        }).catch(error=>{
            throw error;
        });    
    }
}