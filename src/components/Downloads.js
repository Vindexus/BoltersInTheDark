import React, { Component } from 'react'

import { downloadUrl } from '../config'

export default class Downloads extends Component {
  componentWillMount () {
    document.title = "Downloads - Bolters in the Dark";
  }

  render () {
    return (
      <div>
        <div className="row">
          <div className="col-md-4">
            <div className="card">
              <div className="card-body">
                <h2 className="card-title">Rules</h2>
                <a href={downloadUrl} className="btn btn-secondary">Google Docs Rules</a>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card">
              <div className="card-body">
                <h2 className="card-title">Character & Party Sheets</h2>
                <a href={downloadUrl} className="btn btn-secondary">Download PDFs</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}