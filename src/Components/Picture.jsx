import React from 'react';
import Gallery from './Gallery';

// Function  gives the pictures
const Picture = props => {
    let picture = props
                .data
                .map((picture) => (
        < Gallery
            url={`https://farm${picture.farm}.staticflickr.com/${picture.server}/${picture.id}_${picture.secret}.jpg`}
            key={picture.id}

        />
    ));
    return (
        < div className="photo-container" >

            <h2>{props.data.length === 0 && props.match ? 'No matches found' : props.results} </h2>
            <ul> {picture}</ul>
        </div>
    );
};

export default Picture;