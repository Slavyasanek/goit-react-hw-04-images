import React, { Component } from 'react';
import { Header, SearchBtn, SearchForm, SearchInput } from './Searchbar.styled';
import {BsFillSearchHeartFill} from 'react-icons/bs'
import PropTypes from 'prop-types';

const INITIAL_STATE = {
    searchValue: ''
}

class Searchbar extends Component {
    state = {
        ...INITIAL_STATE
    }
    
    static propTypes = {
        handleSearch: PropTypes.func.isRequired,

    }
    handleSubmit = e => {
        e.preventDefault();
        this.props.handleSearch(this.state.searchValue)
        this.reset();
    }
    handleChange = ({target: {value}}) => {
        this.setState({
            searchValue: value
        })
    }
    reset = () => {
        this.setState({...INITIAL_STATE})
    }
    render() {
        return (
            <Header>
                <SearchForm onSubmit={this.handleSubmit}>
                    <SearchInput
                        type="text"
                        autocomplete="off"
                        autoFocus
                        placeholder="Search images and photos"
                        onChange={this.handleChange}
                        value={this.state.searchValue}
                    />
                    <SearchBtn type="submit">
                        <BsFillSearchHeartFill/>
                    </SearchBtn>
                </SearchForm>
            </Header>
        );
    }
}

export default Searchbar;