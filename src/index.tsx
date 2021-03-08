import * as React from "react";
import * as ReactDOM from "react-dom";
import {BrowserRouter as Router} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import App from './componets/App';
import {store} from './redux/configureStore'
import {Provider as ReduxProvider} from 'react-redux'

ReactDOM.render(<>
                <ReduxProvider store={store}>
                <Router>
                    <App />
                </Router>
                </ReduxProvider>
                                
                </>,document.getElementById("app"));