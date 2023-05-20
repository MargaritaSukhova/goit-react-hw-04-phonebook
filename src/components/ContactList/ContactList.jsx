import PropTypes from 'prop-types';
import ContactListItem from '../ContactListItem/ContactListItem';
import { ListOfContacts } from '../ContactList/ContactList.styled';

const ContactList = ({ contacts, onContactDelete }) => {
  return (
    <ListOfContacts>
      {contacts.map(({ id, name, number }) => {
        return (
          <ContactListItem
            key={id}
            id={id}
            name={name}
            number={number}
            onDelete={onContactDelete}
          />
        );
      })}
    </ListOfContacts>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      key: PropTypes.string,
    })
  ),
  onContactDelete: PropTypes.func.isRequired,
};

export default ContactList;
