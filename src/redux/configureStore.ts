import {createStore,applyMiddleware} from 'redux';
import rootReducer from './reducers';
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';
import {composeWithDevTools} from 'redux-devtools-extension'
import {InitialState} from '../redux/reducers/InitialState'
import thunk from 'redux-thunk';


function configureStore (){
   //we'll be able to interact with our Redux store using Redux dev tools in the browser.
    return  createStore(
            rootReducer,
            InitialState,
            composeWithDevTools(applyMiddleware(thunk,reduxImmutableStateInvariant()))
        );
}
export const store:any=configureStore();