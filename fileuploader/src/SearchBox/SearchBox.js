import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import './SearchBox.css'

class SearchBox extends Component {
    render () {
        return (
            <div className="SearchBox">
                <FontAwesomeIcon icon={faSearch} id="searchIcon"/>
                <input placeholder="Type here" id="searchBoxSpace"/>
            </div>
        );
    } 
}

export default SearchBox;