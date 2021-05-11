import React, { Component } from 'react';
import {Button, Box} from '@material-ui/core';

class SearchBar extends Component {
    constructor() {
        super()

        this.state = {
            userInput: "",
        }
    }
 
    // enter user input into state which will show in textbox
    handleChange = (event) => {
        this.setState({userInput: event.target.value});
    }

    keyPress = (event) => {
        // on enter in textbox, call submitForm to change URL
        if (event.key === "Enter"){
            this.props.submitForm();
        }
    }

    render() {
        return (
            <div className="searchBarContainer">
                <label htmlFor="searchBar">
                    <input id="searchBar" type="text" placeholder="Search recipe..."  value={this.state.userInput} onChange={this.handleChange} onKeyPress={this.keyPress}/>
                </label>
            </div>
        );
    }
}

export default SearchBar;