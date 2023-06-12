import { TextWrapper } from './Notification.styled';
import PropTypes from 'prop-types';

export const Notification = ({ message, icon }) => {
    return (
        <TextWrapper>
            <p>{message}</p>
            {icon}
        </TextWrapper>
    )
}

Notification.propTypes = {
    message: PropTypes.string.isRequired,
    icon: PropTypes.element.isRequired
}