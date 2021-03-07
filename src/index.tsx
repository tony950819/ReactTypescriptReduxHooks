import * as React from "react";
import * as ReactDOM from "react-dom";
import {BrowserRouter as Router} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import App from './componets/App';
ReactDOM.render(<>
                    <Router>
                        <App />

                    </Router>
                </>,document.getElementById("app"));