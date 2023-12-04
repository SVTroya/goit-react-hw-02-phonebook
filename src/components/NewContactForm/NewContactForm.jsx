import { Component } from 'react';
import { nanoid } from 'nanoid';
import { Form, FormWrapper } from './NewContactForm.styled';
import PropTypes from 'prop-types';

export class NewContactForm extends Component {

  static propTypes = {
    name: PropTypes.string,
    onSubmit: PropTypes.func,
  };

  nameInputId = crypto.randomUUID();
  phoneInputId = crypto.randomUUID();

  handleChange = ({ target: input }) => {
    const { name: inputName, value } = input;
    this.props.onChange(inputName, value);
  };

  handleSubmit = (ev) => {
    ev.preventDefault();
    const { name, phone } = ev.currentTarget.elements;
    this.props.onSubmit(nanoid(), name.value, phone.value);
  };

  handleClick = ({ target: button }) => {
    button.blur();
  };

  render() {
    return (
      <FormWrapper>
        <Form onSubmit={this.handleSubmit}>
          <label htmlFor={this.nameInputId}>Name</label>
          <input
            type='text'
            name='name'
            id={this.nameInputId}
            value={this.props.name}
            placeholder='Enter name'
            onChange={this.handleChange}
            required />
          <label htmlFor={this.phoneInputId}>Phone number</label>
          <input
            type='tel'
            name='phone'
            id={this.phoneInputId}
            value={this.props.phone}
            placeholder='Enter phone number'
            onChange={this.handleChange}
            required />
          <button type='submit' onClick={this.handleClick}>Add contact</button>
        </Form>
      </FormWrapper>
    );
  }
}
