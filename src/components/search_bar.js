import React, { Component } from 'react';

class SearchBar extends Component {
    constructor(props) {
        super(props);

        this.state = {term: ''};
    }


  render() {
    return (
        <div className="search-bar">
            <input value={this.state.term} onChange={event => this.onInputChange(event.target.value)} />
        </div>
    );
  }

  // local function used to handle the onChange event
  onInputChange(term) {
      // update the state of this class, inorder to display all characters
      this.setState({term});
      // execute a YouTube research defined in App (update its state, videos:) with the new content of input (event.target.value)
      // this function has been passed during the Searchbar instatiation
      this.props.onSearchTermChange(term);
  }
}

export default SearchBar;