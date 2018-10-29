import React, { Component } from 'react'
import { withPrefix } from 'gatsby'

import '../css/header.css'

class Header extends Component {

  render() {
    return (
      <div className="main-header">
        <div className="container">
          <a className="menu-icon-link" href="https://www.fitato.fit">
            <img
              src={withPrefix('/static/fitato-logo-white.svg')}
              title='Fitato'
              alt="fitato logo"
            />
          </a>
          <a style={{float: 'right', marginTop: '10px', color: '#aaa'}} href="tel:+918200396237">Contact us</a>
        </div>
      </div>
    )
  }
}

export default Header
