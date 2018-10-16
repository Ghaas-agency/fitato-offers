import React from 'react'
import Countdown from 'react-countdown-now'
import { withPrefix } from 'gatsby'

const Completionist = () => <span>Offer has ended.</span>;

const renderer = ({ days, hours, minutes, seconds, completed }) => {
  if (completed) {
    return <Completionist />;
  } else {
    let daysText = (days === 1) ? 'Day' : 'Days';
    let hoursText = (hours === 1) ? 'Hour' : 'Hours';
    let minutesText = (minutes === 1) ? 'Minute' : 'Minutes';
    let secondsText = (seconds === 1) ? 'Second' : 'Seconds';
    return <span><img src={withPrefix('/static/baseline-alarm-24px.svg')} style={{margin: '0 10px 3px 5px', verticalAlign: 'middle', width: '25px'}} alt="clock" /> {days} {daysText}, {hours} {hoursText}, {minutes} {minutesText}, {seconds} {secondsText} Left</span>;
  }
};

const style = {
  backgroundColor: '#EB1F2E',
  position: 'fixed',
  top: '0',
  left: '0',
  right: '0',
  color: '#ffffff',
  textAlign: 'center',
  padding: '10px 0',
  boxShadow: '0px 2px 2px rgba(0,0,0,0.2)',
  borderBottom: '1px solid #EB1F2E'
}

const CountdownTimer = () => (
  <div className="countdown-timer">
    <div style={style}>
      <div className="container">
        <Countdown date={new Date(2018, 8, 30, 23, 59, 59)} zeroPadLength={1} renderer={renderer} />
      </div>
    </div>
  </div>
)

export default CountdownTimer