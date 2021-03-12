import * as  types from './actionType';

export function beginAPICAL() {
    return {type:types.BEGIN_API_CALL}
}
export function apiCallError(){
    return {type:types.API_CALL_ERROR}
}