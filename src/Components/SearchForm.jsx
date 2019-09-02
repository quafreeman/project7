import React, { Component } from 'react';

export default class Search extends Component { 
  
    state = {
      searchText: '' //empty string
    }
    
    onSearchChange = event => { //when text value changes in search bar the state of searchText changes
      this.setState({ searchText: event.target.value });
    }
    
    handleSubmit = event => { //event listener for submit key press to handle search change
      event.preventDefault();
      this.props.onSearch(this.state.searchText);
      event.currentTarget.reset();
    }
    
    render() {  
      return ( //layout of submit form
        <form className="search-form" onSubmit={this.handleSubmit} >
          <label className="is-hidden" htmlFor="search"></label>
          <input type="search" 
                 onChange={this.onSearchChange}
                 name="search" 
                 placeholder="Search" />
          <button type="submit" id="submit" className="search-button"><i className="material-icons icn-search">search</i></button>
        </form>      
      );
    }
  }

