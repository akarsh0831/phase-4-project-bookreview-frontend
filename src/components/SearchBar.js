import React from 'react';

const SearchBar = props => {
    return (
        <div className="ui search">
            <input onChange={props.onChange} />
            <i className="search icon" />
        </div>
    )
}
  
export default SearchBar