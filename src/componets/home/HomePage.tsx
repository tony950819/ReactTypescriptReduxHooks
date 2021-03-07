import * as React from "react";
import {Link} from "react-router-dom";

function  HomePage  ()  {
    return (
        <div className="jumbotron">
        <h1>Basic course</h1>
        <p>Learning how to program in React</p>
        <Link to="about" className="btn btn-primary btn-lg">
            Learn more
        </Link>
    </div>
    )
}
export default HomePage;