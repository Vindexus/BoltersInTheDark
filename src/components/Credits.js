import React, { Component } from 'react'

export default class Credits extends Component {
  componentWillMount () {
    document.title = "Credits - Bolters in the Dark";
  }

  render () {
    return (
      <div class="card">
        <div className="card-body">
          <h1>Credits</h1>
          <p>Bolters in the Dark is an unofficial game by Jared Hunt.</p>
          <p>The website was created by Colin "Vindexus" Kierans.</p>
          <p>This work is based on Blades in the Dark (found at <a href="http://www.bladesinthedark.com/">http://www.bladesinthedark.com/</a>), product of One Seven Design, developed and authored by John Harper, and licensed for our use under the Creative Commons Attribution 3.0 Unported license (<a href="http://creativecommons.org/licenses/by/3.0/">http://creativecommons.org/licenses/by/3.0/</a>).</p>
          <p>The Warhammer 40,000 universe is by Games Workshop.</p>
          <p>The 40k icons are by Robert Bjurshagen from the Noun Project</p>
          <p>The background image is <a href="https://commons.wikimedia.org/wiki/File:The_Cat%27s_Paw_Nebula.jpg">The Cat's Paw Nebula</a> by NASA.</p>
        </div>
      </div>
    )
  }
}