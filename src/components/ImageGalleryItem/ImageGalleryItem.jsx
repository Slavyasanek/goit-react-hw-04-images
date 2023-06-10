import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Item } from './ImageGalleryItem.styled';
import { ImageWrapper, Image } from './ImageGalleryItem.styled';

class ImageGalleryItem extends Component {
    static propTypes = {
        link: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        large: PropTypes.string.isRequired,
    }
    render() {
        const {link, title, large} = this.props;
        return (
            <Item>
                <ImageWrapper>
                    <Image src={link} alt={title} data-large={large} loading="lazy"/>
                </ImageWrapper>
            </Item>
        );
    }
}

export default ImageGalleryItem;