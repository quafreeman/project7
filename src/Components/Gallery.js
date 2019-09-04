import React from 'react'

const Gallery = (props) => {
    return (
        <li>
            <img src={props.url} alt={props.title} />
        </li>
    );
}


export default Gallery;


















// import React, { Component } from 'react';
// import Picture from './Picture';
// import NotFound from './NotFound';

// class Gallery extends Component {
    
//     pictures = props => { //gets Pictures with props
        
//         const results = props.data;
//         let pictures = results.map(currentPicture => <Picture key={currentPicture.id} url={``}/>);
//         if(results.length > 0 ){
//         return pictures;
//         }else{ // If you cant find anything give NOT FOUND message.
//          return  <NotFound />
//         }
//     }
    
//     render() { //shows Pictures on the page.

//         // makes the nav links work as well as being able to type it in the URL
//         if(this.props.searchText !== this.props.query) {
//             this.props.history.push(`/performSearch/${this.props.query}`); 
//             this.props.search(this.props.query);
//         }
        
//         return ( //Return the new data
//             <div className="photo-container">
//                 <h2>{this.props.searchText}</h2>
//                 <ul>
//                 {this.pictures(this.props)}  
//                 </ul> 
//             </div>
//         );
        
//     }
// }

// export default Gallery;