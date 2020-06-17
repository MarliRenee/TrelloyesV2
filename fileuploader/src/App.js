import React, { Component } from 'react';
import FilterableList from './FilterableList/FilterableList'
import SearchBar from './SearchBar/SearchBar'
import './App.css'


class App extends Component {
  render() {
    return (
      <div className="App">
        <SearchBar/>
        <FilterableList files={this.props.files} />
      </div>
    );
  }
}

export default App;