import React, {Component} from 'react';
import premios from '../images/premios.png';

export default class Premios extends Component {

  render() {

    return (
      <img
        src={premios}
        alt="logo"
        className="logos"
      />
    );
  }
}
