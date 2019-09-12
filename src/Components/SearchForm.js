import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

class Search extends Component { 
  
    state = {
      searchText: '' //empty string
    }
    
    onSearchChange = event => { //when text value changes in search bar the state of searchText changes
      this.setState({ searchText: event.target.value });
    }
    
    handleSubmit = event => { //event listener for submit key press to handle search change
      event.preventDefault();
      let searchQuery = this.state.searchText; //added
      this.props.onSearch(searchQuery);
      event.currentTarget.reset();
      let path = `/search/${searchQuery}`; //added
      this.props.history.push(path); //added
    }
    
    render() {  
      return ( //layout of Search Form
        <form className="search-form" onSubmit={this.handleSubmit} >
          <label className="is-hidden" htmlFor="search">Search</label>
          <input type="search" 
                 onChange={this.onSearchChange}
                 name="search" 
                 ref={(input) => this.query = input}
                 placeholder="Search" />
          <button type="submit" id="submit" className="search-button"><i className="material-icons icn-search">search</i></button>
        </form>      
      );
    }
  }
export default withRouter(Search);
