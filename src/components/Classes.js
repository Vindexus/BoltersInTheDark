import React, { Component } from 'react'

import data from '../game/classes.json'

export default class Classes extends Component {
  componentWillMount () {
    document.title = "Classes - Bolters in the Dark";
  }

  render () {
    const list = data.map((cls) => {
      const specials = cls.specials.map((spc) => {
        return <li><strong>{spc.name}:</strong> {spc.description}</li>
      })
      return (
        <div class="card mt-2">
          <div className="card-body">
            <div className="card-title"><h2>{cls.name}</h2></div>
            <div className="card-text">
              <h3>Specialties</h3>
              <ul>
                {specials}
              </ul>
            </div>
          </div>
        </div>
      )
    })

    return (
      <div>
        <div class="card">
          <div className="card-body">
            <h1>Classes</h1>
            <p>Each player chooses on of the follow characters to play.</p>
          </div>
        </div>
        {list}
      </div>
    )
  }
}