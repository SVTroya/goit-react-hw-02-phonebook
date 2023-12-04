import { Component } from 'react';
import { FilterStyled } from './Filter.styled';

export class Filter extends Component {
  filterInputId = crypto.randomUUID();

  handleChange = ({ target: input }) => {
    const { name: inputName, value } = input;
    this.props.onChange(inputName, value);
  };

  render() {
    return (
      <FilterStyled
        type='text'
        name='filter'
        id={this.filterInputId}
        value={this.props.filter}
        placeholder='Find conacts by name'
        onChange={this.handleChange} />
    )
  }
}
