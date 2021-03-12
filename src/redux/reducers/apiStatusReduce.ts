import {InitialState} from './InitialState'
import * as types from '../actions/actionType'
import {actionTypeEndsInSuccess} from '../../Actions'


export default function apiCallStatusReducer  (state=InitialState.apiCallsInProgress,action:any){

   if(action.type==types.BEGIN_API_CALL) {
        return state+1;
   }else if(action.type==types.API_CALL_ERROR || actionTypeEndsInSuccess(action.type)) {
        return state-1;
   }
   return state;
}

