import React, { Component } from 'react'
import { BrowserRouter as Link } from "react-router-dom";

import './Home.css'

import AquilaPauldron from '../img/aquila-pauldron.png'
import SpaceMarine from '../img/space-marine.png'
import HeavyBolter from '../img/heavy-bolter.png'
import Logo from '../img/logo-600.png'
import Suffer from '../img/suffernotthealien.png'

export default class Home extends Component {
  componentWillMount () {
    document.title = "Bolters in the Dark";
  }

  render () {
    return (
      <div>
        <div>
          <div class="row">
            <div className="col-sm 12 text-center welcome">
              <div id="branding">
                <img class="logo" src={Logo} alt="Bolters in the Dark Logo"></img>
                <img class="suffer" src={Suffer} alt="Suffer Not The Alien To Live"></img>
              </div>
              <div class="tagline col-md-6 offset-md-3">
                <p>An unofficial <a href="https://en.wikipedia.org/wiki/Warhammer_40,000" target="_blank" rel="noopener noreferrer" i>Warhammer 40,000</a> roleplaying game <br />based on the <a target="_blank" href="https://bladesinthedark.com/licensing" rel="noopener noreferrer" i>Forged in the Dark</a> system.</p>
              </div>
            </div>
          </div>
          <div class="row">
            <div className="card col-md-4">
              <img class="card-img-top" src={SpaceMarine} alt="Space Marine Helmet"></img>
              <div className="card-body">
                <div className="card-title">
                  <h2>The Game</h2>
                </div>
                <div className="card-text">
                  <p>Bolters in the Dark is a game about futuristic <strong>super-soldiers</strong> who defend humanity from the most dangerous and terrifying foes in the galaxy. There are battles, chases, escapes, bloody skirmishes, betrayals, victories, and deaths.</p>
                </div>
              </div>
            </div>
            <div className="card col-md-4">
              <img class="card-img-top" src={AquilaPauldron} alt="Aquila Pauldron"></img>
              <div className="card-body">
                <div className="card-title">
                  <h2>The Setting</h2>
                </div>
                <div className="card-text">
                  <p>The game is intended to evoke the bleak futuristic setting of <em>Warhammer 40,000</em>.</p>

                  <p>Millenia of corruption and war have left humanity’s trillions spread across the stars in hopeless ignorance. Only the divine Emperor keeps the galaxy-spanning Imperium from fragmenting and failing.</p>
                </div>
              </div>
            </div>
            <div className="card col-md-4">
              <img class="card-img-top" src={HeavyBolter} alt="Heavy Bolter"></img>
              <div className="card-body">
                <div className="card-title">
                  <h2>What You Need</h2>
                </div>
                <div className="card-text">
                  <ul>
                    <li>Some six-sided dice (d6s)</li>
                    <li>Familiarity with or a copy of Blades in the Dark</li>
                    <li>A copy of the rules</li>
                    <li>Printed out character sheets and a squad sheet</li>
                  </ul>
                  <div className="text-center pt-2">
                    <Link to="/downloads" className="btn btn-secondary"><span>Get the Downloads</span></Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="mt-4 row">
          <div class="col-md-8 offset-md-2 col-sm-12 offset-sm-0">
            <div class="row">
              <div className="card col-md-6 col-sm-12 the-deathwatch">
                <div className="card-body">
                  <div className="card-title">
                    <h2>The Deathwatch</h2>
                  </div>
                  <div className="card-text">
                    <p>You play as members of the military arm of the Ordo Xenos, the alien-hunting branch of the Emperor's Holy Inquisition. You are selected elite Space Marine from chapters all across the Imperium.</p>

                    <p>You are the <strong>Deathwatch</strong>.</p>
                  </div>
                </div>
              </div>
              <div className="card col-md-6 col-sm-12">
                <div className="card-body">
                  <div className="card-title">
                    <h2>How Does It Play?</h2>
                  </div>
                  <div className="card-text">
                    <p>Bolters in the Dark is very narrative and story driven. There is limited crunch and min-maxing.</p>

                    <p>There is more emphasis on describing the scene and leveraging the narrative than it is about weapon stats and character talents.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}