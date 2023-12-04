import { Component } from 'react';
import { ContactsList } from './App.styled';
import { NewContactForm } from './NewContactForm/NewContactForm';
import { ListOfContacts } from './ListOfContacts/ListOfContacts';

export class App extends Component {

  state = {
    // contacts: [],
    contacts: [
      {id: 'id-1', name: 'Rosie Simpson', phone: '459-12-56'},
      {id: 'id-2', name: 'Hermione Kline', phone: '443-89-12'},
      {id: 'id-3', name: 'Eden Clements', phone: '645-17-79'},
      {id: 'id-4', name: 'Annie Copeland', phone: '227-91-26'},
    ],
    name: '',
    phone: '',
    filter: '',
  };

  onSubmitForm = (id, value, phone) => {
    this.setState(prevState => {
      return { contacts: [...prevState.contacts, { id: id, name: value, phone: phone }] };
    });
  };

  onInputChange = (inputName, value) => {
    this.setState({ [inputName]: value });
  };

  reset = () => {
    this.setState({ name: '', phone: '' });
  };

  render() {
    return (
      <ContactsList>
        <NewContactForm
          name={this.state.name}
          phone={this.state.phone}
          onSubmit={this.onSubmitForm}
          onChange={this.onInputChange}
          reset={this.reset} />
        <ListOfContacts filter={this.state.filter} onChange={this.onInputChange} contacts={this.state.contacts} />
      </ContactsList>
    );
  }
}
