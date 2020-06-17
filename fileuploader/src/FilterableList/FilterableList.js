import React, { Component } from 'react';
import ListItem from '../ListItem/ListItem'
import './FilterableLists.css'

class FilterableList extends Component {
    render () {
        const list = this.props.files 
            .map((file, key) => <ListItem {...file} key={key} />);
        return (
            <div className="FilterableList">
                {list}
            </div>
        );
    }
}

FilterableList.defaultProps = {
    files: []
};

export default FilterableList;