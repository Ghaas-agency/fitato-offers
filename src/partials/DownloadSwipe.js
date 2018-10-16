import React from 'react'
import { withPrefix } from 'gatsby'
import AppIcons from './AppIcons'

const DownloadSwipe = () => (
  <div className="partial-download-swipe">
    <div className="container">
      <div className="partial-download-swipe__left">
        <h2>Download the Fitato App</h2>
        <p>Swim your way to Zumba via MMA and Yoga! Experiment each day with a new adventure and push your body to the limits with your Fitato Pass.</p>
        <AppIcons />
      </div>
      <div className="partial-download-swipe__right">
        <img src={withPrefix('/static/fitato-app.png')} alt="download fitato smartphone app"/>
      </div>
    </div>
  </div>
)

export default DownloadSwipe
