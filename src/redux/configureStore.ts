import {createStore,applyMiddleware} from 'redux';
import rootReducer from './reducers';
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';
import {composeWithDevTools} from 'redux-devtools-extension'
import { Authour, Course } from '../Models/Models';
import thunk from 'redux-thunk';


const InitialState ={ 
   courses: new Array<Course>(),
   authours:new Array<Authour>()
}

function configureStore (){
   //we'll be able to interact with our Redux store using Redux dev tools in the browser.
    return  createStore(
            rootReducer,
            InitialState as any,
            composeWithDevTools(applyMiddleware(thunk,reduxImmutableStateInvariant()))
        );
}
export const store:any=configureStore();