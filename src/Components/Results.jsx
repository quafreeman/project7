import React from 'react';
import {
    Grid
   
} from 'react-bootstrap';

const Results = (props) => ( //dynamic results component prints customizable titles to pages upon props call
    <Grid>
        <h2>{ props.title }
        </h2>
    

        
    </Grid>
);



export default Results;

