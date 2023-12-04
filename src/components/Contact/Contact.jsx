import { Component } from 'react';
import { IconWrapper, Name, Phone } from './Contact.styled';
import PropTypes from 'prop-types';
import { ImBin } from 'react-icons/im';

export class Contact extends Component {

static propTypes = {
  contact: PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string,
  }),
  onRemoveContact: PropTypes.func,
}

  render() {
  const {id, name, phone} = this.props.contact
    return (
      <>
        <Name>{name}</Name>
        <Phone>tel.:{phone}</Phone>
        <IconWrapper>
          <ImBin size={20} onClick={() => this.props.onRemoveContact(id)}/>
        </IconWrapper>
      </>
    )
  }
}
