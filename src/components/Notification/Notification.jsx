import { TextWrapper } from './Notification.styled';
import PropTypes from 'prop-types';

const Notification = ({ message, icon }) => {
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

export default Notification;