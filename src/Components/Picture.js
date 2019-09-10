import React from 'react';
import Gallery from './Gallery';

// Function gives the pictures
const Picture = ({ data, title }) => {
    // let picture = props
    let pictures = [];
    if (data) { 
        pictures = data.map((picture) => (
            < Gallery
                url={`https://oceans${picture.oceans}.staticflickr.com/${picture.server}/${picture.id}_${picture.secret}.jpg`}
                key={picture.id}

            />
        ));
    }
    return (
        < div className="photo-container" >

            <h2>{title} </h2>
            <ul>{pictures}</ul>
        </div>
    );
};

export default Picture;