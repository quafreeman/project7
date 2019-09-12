import React from 'react';
import Picture from './Picture';

// Function gives the pictures
const Gallery = (props) => {
    const results= props.pictures;
    let pictures;
    if (results && results.length > 0) { 
        pictures = results.map((picture) => (
            < Picture
                url={`https://farm${picture.farm}.staticflickr.com/${picture.server}/${picture.id}_${picture.secret}.jpg`}
                key={picture.id}

            />
        ));
    }
    return (
        < div className="photo-container" >

            {/* <h2>{props.match.params.name}</h2> */}
            <ul>{pictures}</ul>
        </div>
    );
};

export default Gallery;