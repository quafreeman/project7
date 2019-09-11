// // Quadria's Gallery
// //**I am shooting for meets expectations, if I do not meet expectations, it needs to be sent back */
//Importing from React and other components
import React, { Component } from "react";
import "./App.css";
import apiKey from "./config.js";
// import axios from 'axios';
import NotFound from "./Components/NotFound.js";
import Header from "./Components/Header.js";
import Gallery from "./Components/Gallery.js";
// import Photo from './Components/Picture';
// import SearchForm from "./Components/SearchForm";



import { Route, Switch, Redirect, BrowserRouter } from "react-router-dom";

//Setting states to an empty array
class App extends Component {
  state = {
    searchForm: "",
    results: [],
    pandas: [],
    cats: [],
    stars: []
  };

  //Buttons displaying 3 different options
  pickedImages = ["pandas", "cats", "stars"];

  componentDidMount() {
    this.performSearch("pandas");
    this.performSearch("stars");
    this.performSearch("cats");
  }

  // const url = this.props.location.pathname;
  // if (url.includes('/searchForm')) {
  //   let query = url.slice(8);
  //   this.onSearch(query);
  // }

  performSearch = (query = "pandas") => {
    this.setState({
      loading: true,
      pandasResults: []
    });
    fetch(
      `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&per_page=24&format=json&nojsoncallback=1`
    )
      .then(response => response.json())
      .then(responseData => {
        //  updates the photos on the query selected
        if (query === "pandas") {
          this.setState({
            pandasResults: responseData.photos.photo,
            loading: false
          });
        } else if (query === "stars") {
          this.setState({
            starsResults: responseData.photos.photo,
            loading: false
          });
        } else if (query === "cats") {
          this.setState({
            catsResults: responseData.photos.photo,
            loading: false
          });
        } else {
          this.setState({
            results: responseData.photos.photo,
            searchForm: query,
            loading: false
          });
        }
      })
      .catch(error => console.log("Error fetching or parsing data", error));
  };

  render() {
    return (
      <BrowserRouter>
        <div className="container">
          <Header newSearch={this.performSearch} />
          {/* <Route render={({ history }) => <Header onSearch={this.onSearch} history={history} />} /> */}
          <Switch>
            <Route exact path="/" render={() => <Redirect to="/pandas" />} />

            <Route
              exact
              path="/pandas"
              render={() =>
                this.state.loading ? (
                  <p>Loading...</p>
                ) : (
                  <Gallery pictures={this.state.pandasResults} query="pandas" />
                )
              }
            />

            <Route
              exact
              path="/stars"
              render={() =>
                this.state.loading ? (
                  <p>Loading...</p>
                ) : (
                  <Gallery pictures={this.state.starsResults} query="stars" />
                )
              }
            />

            <Route
              exact
              path="/cats"
              render={() =>
                this.state.loading ? (
                  <p>Loading...</p>
                ) : (
                  <Gallery pictures={this.state.catsResults} query="cats" />
                )
              }
            />

            <Route
              path="/search/:topic"
              render={() =>
                this.state.loading ? (
                  <p>Loading...</p>
                ) : (
                  <Gallery
                    pictures={this.state.results}
                    query={this.state.searchForm}
                  />
                )
              }
            />

            <Route component={NotFound} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
