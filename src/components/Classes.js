import React, { Component } from 'react'
import './Classes.css'
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
        <div class="card">
          <div className="card-body">
            <div className="card-text">
              <h2>{cls.name}</h2>
              <p>{cls.summary}</p>
              <h3>Specialties</h3>
              <ul class="specialties">
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
        <div class="classes">
          {list}
        </div>
      </div>
    )
  }
}