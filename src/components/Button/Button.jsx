import PropTypes from 'prop-types';
import { LoadButton } from './Button.styled';
import { AiFillFileImage } from 'react-icons/ai';

export const Button = ({ loadMore }) => (
    <>
        <LoadButton type="button" onClick={loadMore}>Load more <AiFillFileImage /></LoadButton>
    </>
);

Button.propTypes = {
    LoadMore: PropTypes.func
}