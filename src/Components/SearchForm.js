import React, { Component } from 'react';

class SearchForm extends Component { 
  
    state = {
      searchText: '' //empty string
    }
    
    onSearchChange = event => { //when text value changes in search bar the state of searchText changes
      this.setState({ searchText: event.target.value });
    }
    
    handleSubmit = event => { //event listener for submit key press to handle search change
      event.preventDefault();
      this.props.onSearch(this.query.value);
      event.currentTarget.reset();
    }
    
    render() {  
      return ( //layout of submit form
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
export default (SearchForm);
