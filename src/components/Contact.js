import React, { Component } from 'react'

export default class Contact extends Component {
  componentWillMount () {
    document.title = "Contact - Bolters in the Dark";
  }

  render () {
    return (
      <div class="card">
        <div className="card-body">
          <h1>Contact</h1>
          <p>We can't be contacted we're mysterious.</p>
        </div>
      </div>
    )
  }
}