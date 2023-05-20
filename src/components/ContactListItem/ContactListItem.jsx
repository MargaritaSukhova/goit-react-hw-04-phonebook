import PropTypes from 'prop-types';
import {
  ListItem,
  Text,
  DelBtn,
} from '../ContactListItem/ContactListItem.styled';

const ContactListItem = ({ id, name, number, onDelete }) => {
  return (
    <ListItem>
      <Text>
        {name}: {number}
      </Text>
      <DelBtn type="button" onClick={() => onDelete(id)}>
        Delete
      </DelBtn>
    </ListItem>
  );
};

ContactListItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default ContactListItem;
