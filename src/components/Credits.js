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
          <h2>Us</h2>
          <p>Bolters in the Dark is an unofficial game by Jared Hunt.</p>
          <p>The website was created by Colin "Vindexus" Kierans.</p>

          <div class="mt-2 mb-4"></div>

          <h2>Others</h2>
          <p>The Warhammer 40,000 universe is by Games Workshop.</p>
          <p>Bolters in the Dark is by John Harper.</p>
          <p>The 40k icons are by Robert Bjurshagen from the Noun Project</p>
          <p>The background image is <a href="https://commons.wikimedia.org/wiki/File:The_Cat%27s_Paw_Nebula.jpg">The Cat's Paw Nebula</a> by NASA.</p>
        </div>
      </div>
    )
  }
}