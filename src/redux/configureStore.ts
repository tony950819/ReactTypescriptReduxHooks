import {createStore,applyMiddleware} from 'redux';
import rootReducer from './reducers';
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';
import {composeWithDevTools} from 'redux-devtools-extension'
import { Course } from '../Models/Models';

//import { CourseReducerModel } from './reducers/courseReducer';


const InitialSte ={ 
   courses: new Array<Course>()
}

function configureStore (){
   //we'll be able to interact with our Redux store using Redux dev tools in the browser.
    return  createStore(
            rootReducer,
            InitialSte,
            composeWithDevTools(applyMiddleware(reduxImmutableStateInvariant()))
        );
}
export const store:any=configureStore();