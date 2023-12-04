import { Component } from 'react';
import { FilterInputStyled } from './FilterInputStyled';
import PropTypes from 'prop-types';

export class Filter extends Component {

  static propTypes = {
    filter: PropTypes.string,
    onChange: PropTypes.func,
  }

  filterInputId = crypto.randomUUID();

  handleChange = ({ target: input }) => {
    const { name: inputName, value } = input;
    this.props.onChange(inputName, value);
  };

  render() {
    return (
      <FilterInputStyled
        type='text'
        name='filter'
        id={this.filterInputId}
        value={this.props.filter}
        placeholder='Find conacts by name'
        onChange={this.handleChange} />
    )
  }
}
