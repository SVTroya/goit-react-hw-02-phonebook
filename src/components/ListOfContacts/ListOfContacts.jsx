import { Component } from 'react';

import { Contact } from '../Contact/Contact';
import PropTypes from 'prop-types';
import { HeaderContainer, ListWrapper } from './ListOfContacts.styled';
import { Filter } from '../Filter/Filter';

export class ListOfContacts extends Component {

  static propTypes = {
    contacts: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string,
        name: PropTypes.string,
      }),
    ),
  };

  getContactsItems(contacts, filter) {
    return contacts.filter(contact => contact.name.toLowerCase().includes(filter.toLowerCase()))
      .map(contact => (
        <li key={contact.id}>
          <Contact contact={contact} />
        </li>
      ));
  }

  render() {
    return (
      <ListWrapper>
        <HeaderContainer><h3>Contacts</h3>
          <Filter filter={this.props.filter} onChange={this.props.onChange} /></HeaderContainer>
        <ul>
          {this.getContactsItems(this.props.contacts, this.props.filter)}
        </ul>
      </ListWrapper>
    );
  }
}
