import PropTypes from 'prop-types';
import { Block } from '../Filter/Filter.styled';
import { Label, Input } from '../ContactForm/ContactForm.styled';

const Filter = ({ value, onChangeFilter }) => {
  return (
    <Block>
      <Label htmlFor="filter"> Find contacts by name</Label>
      <Input type="text" id="filter" value={value} onChange={onChangeFilter} />
    </Block>
  );
};

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChangeFilter: PropTypes.func.isRequired,
};

export default Filter;
