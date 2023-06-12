import PropTypes from 'prop-types';
import { Item, ImageWrapper, Image } from './ImageGalleryItem.styled';

const itemVariant = {
    initial: { scale: 0.5},
    isOn: { scale: 1, transition: { type: "spring" } },
    exit: { scale: 0 }
};


export const ImageGalleryItem = ({ link, title, large }) => {
    return (
        <Item 
        initial={"initial"}
        animate={"isOn"}
        exit={"exit"}
        variants={itemVariant}>
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