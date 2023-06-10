import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { LoadButton } from './Button.styled';
import {AiFillFileImage} from 'react-icons/ai';

class Button extends Component {
    static propTypes = {
        LoadMore: PropTypes.func
    }
    render() { 
        const {loadMore} = this.props
        return (
            <>
            <LoadButton type="button" onClick={loadMore}>Load more <AiFillFileImage/></LoadButton>
            </>
        );
    }
}
 
export default Button;