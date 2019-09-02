import React from 'react';
const NoMatchFound = props => { // If you cant find the search present a 404 message.
    return(
        <div>
            <h1>404</h1>
            <h2>No match found</h2>
            <p>Sorry, please try again</p>
        </div>
    );
}
 export default NoMatchFound;