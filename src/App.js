// Quadria's Gallery
//**I am shooting for meets expectations, if I do not meet expectations, it needs to be sent back */

import React, { Component } from 'react';
import axios from 'axios';
import {
  Redirect,
  Switch,
  Route
} from 'react-router-dom';

// import React from 'react';
import './App.css';
//** Importing the necessary components from .js folder*/
// import SearchForm from './Components/SearchForm'
// import Navigate from './Components/Navigate';
import Gallery from './Components/Gallery';
import apiKey from './Components/config';
import NotFound from './Components/NotFound';
import Picture from './Components/Picture';
import Header from './Components/Header';
import Results from './Components/Results'


export default class App extends Component {

  constructor() {
    super();
    this.state = {
      images: [],
      searchKey: "",
      searchPerformed: false,
      loading: true
    };
  }

  componentDidMount() {
   console.log(apiKey);
   for (let i = 0; i < this.pickedPhotos.length; i++) 
   axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${this.pickedPhotos[i]}&per_page=24&format=json&nojsoncallback=1`)
    .then(response => {
      console.log(response);
      this.setState({
        [this.pickedPhotos[i]]: response.data.pictures.picture
      });
      })
      .catch(error => {
        console.log('Error fetching and parsing data', error);
      });
  }
    //Fetching API 
    performSearch = (query) => { //array for search and index pages with default query for those pages
      axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key${apiKey}=&tags${query}=ocean&per_page=24&format=json&nojsoncallback=1`)
        .then(res => {
          this.setState({
            searchPerformed: res.data.pictures.picture
  
          })
        })
        .catch(error => {
  
        });
    }
  
    // searchPandas = (query = 'pandas') => { //image array for 'panda'
    //   axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key${apiKey}=&tags${query}=ocean&per_page=24&format=json&nojsoncallback=1`)
    //     .then(res => {
    //       this.setState({
    //         pandas: res.data.pictures.picture
    //       })
    //     })
    //     .catch(error => {
  
    //     });
    // }
  
    // searchStars = (query = 'stars') => { //image array for 'stars'
    //   axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key${apiKey}=&tags${query}=ocean&per_page=24&format=json&nojsoncallback=1`)
    //     .then(res => {
    //       this.setState({
    //         stars: res.data.pictures.picture
    //       })
    //     })
    //     .catch(error => {
  
    //     });
    // }
  
    // searchCat = (query = 'cat') => { //image array for 'cat'
    //   axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key${apiKey}=&tags${query}=ocean&per_page=24&format=json&nojsoncallback=1`)
    //     .then(res => {
    //       this.setState({
    //         cat: res.data.pictures.picture
    //       })
    //     })
    //     .catch(error => {
          
    //     });
    // }


    render() {
      return (
        <div className="container">
  
          <Route render={({ history }) => <Header onSearch={this.onSearch} history={history} />} />
          <Switch>
            <Route exact path="/" render={() => <Redirect to="/pandas" />} />
            <Route path="/pandas" render={() => <Picture data={this.state.pandas} title={"Pandas"} />} />
            <Route path="/stars" render={() => <Picture data={this.state.stars} title={"Stars"} />} />
            <Route path="/cats" render={() => <Picture data={this.state.cats} title={"Cats"} />} />
            <Route
              path="/search/:query"
              render={({ match }) =>
                this.state.loading ? (
  
                  <h2>It's Loading...</h2>
                ) : (
                    <Picture data={this.state.search} results={match.params.query} match={match} />
                  )}
            />
            <Route component={NotFound} />
          </Switch>
        </div>
      );
                }
              }
