import React from 'react';
import { 
    Redirect,
    Switch,
    Route
   
} from 'react-router-dom';

const Results = (props) => ( //dynamic results component prints customizable titles to pages upon props call
    <div>
        <h2>{ props.title }
        </h2>
    </div>
);

export default Results;

