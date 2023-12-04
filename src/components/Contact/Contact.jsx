import { Component } from 'react';
import { IconWrapper, Name, Phone } from './Contact.styled';
import PropTypes from 'prop-types';
import { ImBin } from 'react-icons/im';

export class Contact extends Component {

static propTypes = {
  contact: PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string,
  })
}

  render() {
    return (
      <>
        <Name>{this.props.contact.name}</Name>
        <Phone>tel.:{this.props.contact.phone}</Phone>
        <IconWrapper>
          <ImBin size={20}/>
        </IconWrapper>
      </>
    )
  }
}
