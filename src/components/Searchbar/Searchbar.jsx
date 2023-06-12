import { useState } from 'react';
import { Header, SearchBtn, SearchForm, SearchInput } from './Searchbar.styled';
import { BsFillSearchHeartFill } from 'react-icons/bs'
import PropTypes from 'prop-types';


export const Searchbar = ({ handleSearch }) => {
    const [searchValue, setSearchValue] = useState('');

    const handleSubmit = e => {
        e.preventDefault();
        handleSearch(searchValue)
        reset();
    }
    const handleChange = ({ target: { value } }) => {
        setSearchValue(value);
    }
    const reset = () => {
        setSearchValue('');
    }

    return (
        <Header>
            <SearchForm onSubmit={handleSubmit}>
                <SearchInput
                    type="text"
                    autocomplete="off"
                    autoFocus
                    placeholder="Search images and photos"
                    onChange={handleChange}
                    value={searchValue}
                />
                <SearchBtn type="submit">
                    <BsFillSearchHeartFill />
                </SearchBtn>
            </SearchForm>
        </Header>
    );
}

Searchbar.propTypes = {
    handleSearch: PropTypes.func.isRequired,
}