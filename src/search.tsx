import React, { FormEvent } from "react";
import './search.css';

export class SearchBox extends React.Component {
    state = { searchText: '' }

    handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        console.log(
            this.state.searchText
        );
    };

    onInputChanged = (event: React.ChangeEvent<HTMLInputElement>) => {
        this.setState({searchText: event.target.value});
    };

    render() {
        return (
            <form action="" className="search-box" onSubmit={this.handleSubmit} >
                <input
                className="input-box"
                type="text"
                value = {this.state.searchText}
                onChange = { this.onInputChanged }
                placeholder="Search..." />
            </form>
        );
    }
} 