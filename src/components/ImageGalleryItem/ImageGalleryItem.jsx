import PropTypes from 'prop-types';
import { Item, ImageWrapper, Image } from './ImageGalleryItem.styled';

export const ImageGalleryItem = ({ link, title, large }) => {
    return (
        <Item>
            <ImageWrapper>
                <Image src={link} alt={title} data-large={large} loading="lazy" />
            </ImageWrapper>
        </Item>
    );
}

ImageGalleryItem.propTypes = {
    link: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    large: PropTypes.string.isRequired,
}