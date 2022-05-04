import * as React from 'react';
import '../index.css';
import { Link } from 'react-router-dom'
/******************************** */
function NoMatch(){
    return(
        <div>
            <h1>nothing to see here </h1>
            <p>
                <Link to="/"> go back to HOME page</Link>
            </p>
        </div>
    );
}

export default NoMatch;