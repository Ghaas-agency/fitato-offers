import React from 'react'
import Helmet from 'react-helmet'
import { withPrefix } from 'gatsby'
import DownloadSwipe from '../partials/DownloadSwipe'
import Layout from '../components/index'
import '../css/offer.css'

/* const displayBlock = {
  display: 'block'
}

const displayNone = {
  display: 'none'
} */

class OffersPage extends React.Component {
  state = {
    modalToggle: false,
    passesLeft: 246
  }

  componentDidMount() {
    const oneHour = 60*60*1000;
    const current = new Date();
    const ends = new Date(2018, 8, 30, 23, 59, 59);
    
    const hoursLeft = Math.round(Math.abs((current.getTime() - ends.getTime())/oneHour));
    
    // Change the number every twelve hours
    const passesLeftCalc = (hoursLeft / 200) * 500;
    
    if(current.getMonth() >= 9) {
      this.setState({passesLeft: '11'});
    } else {
      this.setState({passesLeft: Math.round(passesLeftCalc)});
    }
  }

  handleClick = e => {
    if(e.target.className === 'workplace-modalbg' || e.target.className === 'modal-close') {
      this.setState({
        modalToggle: false
      });
    } else {
      this.setState({
        modalToggle: true
      });
    }
  }

  render() {
    return (
      <Layout>
        <div className="offers-page">
          <Helmet
            title="The Wefit Offer - Fitato"
          >
          </Helmet>
            
            <div className="offers-page-hero">
              <div className="container">
                <div className="offers-page-hero__wrapper">
                  {/* <div style={{textAlign: 'center'}}>
                    <img src={withPrefix('/static/fitao-dussehra-landing-page.png')} alt="fitato dussehra offer"/>
                  </div> */}
                  <h1>Your Fitness Freedom</h1>
                  <div className="line"></div>
                  <p>Presenting the WEFIT Sale!<br />One more reason. One less excuse!</p>
                </div>
              </div>
            </div>

            <style dangerouslySetInnerHTML={{
              __html: `.offers-page-hero {background-image: url('${withPrefix('/static/hero-bg.jpg')}');}@media only screen and (max-width: 767px) {.offers-page-hero {background-image: url('${withPrefix('/static/hero-bg-small.jpg')}');}}`
            }}/>

            {/* <img src={withPrefix('/static/tri.svg')} className="tri-svg" alt="fitato dussehra offer"/> */}

            {/* <svg id="bigTriangleColor" xmlns="http://www.w3.org/2000/svg" version="1.1" width="100%" height="100" viewBox="0 0 100 102" preserveAspectRatio="none">
                <path d="M0 0 L50 100 L100 0 Z" />
            </svg> */}
    
            <div className="offers-page-intro">
              <div className="container">
                
                <h2>The Wefit Offer!</h2>
                {/* <p className="offer-title-highlight"></p> */}
                <h3>20% Off + 30% Cashback On All Fitato Passes*</h3>
                <p><span className="offer-highlight">Use Coupon Code: <strong>WEFIT</strong></span></p>
                <p style={{fontSize: '1.2em', lineHeight: '2em', paddingTop: '0px'}}>on your Fitato App<br /></p>
                <p style={{fontSize: '1.3em', fontWeight: 'bold'}}>OR</p>
                <p style={{fontSize: '1.3em', fontWeight: 'bold', marginBottom: '0.5em'}}>Buy Online Here:</p>
                
                <div className="offers-page-plans__items">
                  <div className="offers-page-plans__item">
                    <div className="offers-page-plans__item--title">
                      <h3>Fitato Quarterly<br /><small className="normal">(3 months)</small></h3>
                    </div>
                    <div className="offers-page-plans__item--body">
                      <p>Purchase the Fitato Quarterly pass and get unlimited access to every Fitato partner facility for 3 months!</p>
                      <p className="offers-page-plans__item--price-strike"><strike>&#8377;5,499</strike></p>
                      <p className="offers-page-plans__item--price">&#8377;4,399</p>
                      <small>Get Cashback: &#8377;1,320</small>
                    </div>
                    <div className="offers-page-plans__item--cta">
                      <a href="https://imjo.in/faWD3Y" target="_blank" rel="noopener noreferrer" className="button button-fluid">Buy Now</a>
                    </div>
                  </div>
                  <div className="offers-page-plans__item">
                    <div className="offers-page-plans__item--title">
                      <h3>Fitato Bi-Monthly<br /><small className="normal">(2 months)</small></h3>
                    </div>
                    <div className="offers-page-plans__item--body">
                      <p>Purchase the Fitato Bi-Monthly pass and get unlimited  access to every Fitato partner facility for 2 months!</p>
                      <p className="offers-page-plans__item--price-strike"><strike>&#8377;3,899</strike></p>
                      <p className="offers-page-plans__item--price">&#8377;3,119</p>
                      <small>Get Cashback: &#8377;936</small>
                    </div>
                    <div className="offers-page-plans__item--cta">
                      <a href="https://imjo.in/UUbjfu" target="_blank" rel="noopener noreferrer" className="button button-fluid">Buy Now</a>
                    </div>
                  </div>
                  <div className="offers-page-plans__item">
                    <div className="offers-page-plans__item--title">
                      <h3>Fitato Monthly<br /><small className="normal">(1 month)</small></h3>
                    </div>
                    <div className="offers-page-plans__item--body">
                      <p>Purchase the Fitato Monthly pass and get unlimited access to every Fitato partner facility for  1 month!</p>
                      <p className="offers-page-plans__item--price-strike"><strike>&#8377;2,199</strike></p>
                      <p className="offers-page-plans__item--price">&#8377;1,759</p>
                      <small>Get Cashback: &#8377;528</small>
                    </div>
                    <div className="offers-page-plans__item--cta">
                      <a href="https://imjo.in/JgDgDQ" target="_blank" rel="noopener noreferrer" className="button button-fluid">Buy Now</a>
                    </div>
                  </div>
                </div>
                <small>* Offer valid for first-time users and on 29<sup>th</sup> to 2<sup>nd</sup> November 2018 only.</small>

                {/* <div className="offers-page-intro__passes-left">
                  <h3>For The First 500 Passes Only</h3>
                  <p className="red"><b>{this.state.passesLeft}</b> Passes Left</p>
                </div> */}

                <div style={{marginTop: '50px'}}>
                  <h4 style={{marginBottom: '5px'}}>Have questions? Let us help.</h4>
                  {/* <span onClick={this.handleClick} className="button">Talk to us</span> */}
                  <a href="tel:+918200396237" className="button">Talk to us</a>
                </div>
                {/* <p style={{textAlign: 'left', marginTop: '50px'}}><img src={downArrow} width="25" className="down-arrow"/>Scroll down for the Exclusive Fitfam Offer</p> */}
              </div>
            </div>
    
            <div className="offers-page-banner align-center">
              <div className="container">
                <h3 style={{marginBottom: '10px'}}>Don’t Just Wish For A Good Body, Work For It!</h3>
                <h2>Work out in over 300+ gyms &amp; fitness studios with your single-access Fitato Pass. Come, fall in love with fitness.</h2>
              </div>
            </div>
    
            {/* <div className="offers-page-exclusive">
              <div className="container">
                <h2>Exclusive Raksha Bandhan Fitfam Offer*</h2>
    
                <div className="pricing-row">
                  <div className="pricing-col">
                    <div className="pricing-col__head">
                      <h3>5 Siblings</h3>
                    </div>
                    <div className="pricing-col__body">
                      <p>Group of 5 purchasing the 3-month Fitato Pass together</p>
                      <p className="pricing-col__body--price"><strike>₹27,495</strike><br/>₹19,000</p>
                    </div>
                    <div className="pricing-col__cta">
                      <a href="https://imjo.in/zaJZPk" target="_blank" rel="noopener" className="button button-fluid">Buy Now</a>
                    </div>
                  </div>
                  
                  <div className="pricing-col">
                    <div className="pricing-col__head">
                      <h3>3 Siblings</h3>
                    </div>
                    <div className="pricing-col__body">
                      <p>Group of 3 purchasing the 3-month Fitato Pass together</p>
                      <p className="pricing-col__body--price"><strike>₹16,497</strike><br/>₹12,000</p>
                    </div>
                    <div className="pricing-col__cta">
                      <a href="https://imjo.in/6mvyEf" target="_blank" rel="noopener" className="button button-fluid">Buy Now</a>
                    </div>
                  </div>
    
                  <div className="pricing-col">
                    <div className="pricing-col__head">
                      <h3>2 Siblings</h3>
                    </div>
                    <div className="pricing-col__body">
                      <p>Group of 2 purchasing the 3-month Fitato Pass together</p>
                      <p className="pricing-col__body--price"><strike>₹10,998</strike><br/>₹8,200</p>
                    </div>
                    <div className="pricing-col__cta">
                      <a href="https://imjo.in/xAqb2Q" target="_blank" rel="noopener" className="button button-fluid">Buy Now</a>
                    </div>
                  </div>
    
                </div>
                <div style={{textAlign: 'center', marginBottom: '50px', marginTop: '-40px'}}><small><em>*Valid Till 26th August Only</em></small></div>
    
                <ul>
                  <li>Post the payment, you'll receive a confirmation call and email as soon as your payment is processed.</li>
                  <li>The email will have custom 100% off codes which your siblings can use to activate their passes on their respective mobile apps.</li>
                  <li>The pass starts when the user enters the activation code on the app.</li>
                  <li>The Fitato pass will give each user who is part of the squad unlimited access to all the Fitato partner gyms & fitness studios across the city of Pune for a period of 3 months.</li>
                </ul>
                
                <div className="offers-page-exclusive__contact">
                  <h4>Need recommendations or a crafted plan?</h4>
                  <a href="tel:+918200396237" className="button">Speak to us</a>
                </div>
              </div>
            </div> */}
    
        </div>
        <DownloadSwipe />

        {/* <div className="workplace-modalbg" 
          style={(this.state.modalToggle) ? displayBlock : displayNone} onClick={this.handleClick}>
          <div className="workplace-modal">
            <div className="workplace-modal__title">
              <h3>Learn More About the Exclusive Offer</h3>
            </div>
            <span className="modal-close" onClick={this.handleClick}>X</span>
            <div className="workplace-modal__form">
              <small>Please fill out this form, and we&apos;ll get in touch shortly.</small>
              <form action="https://formspree.io/pooja.ahuja@fitato.fit" method="POST" className="contact-form">
                <div><input type="text" name="name" placeholder="Your Name" required /></div>
                <div><input type="tel" name="phone" placeholder="Your Phone Number" required /></div>
                <div><input type="email" name="_replyto" placeholder="Your Email" required /></div>
                <input type="hidden" name="_subject" value="offers form submission" />
                <input type="hidden" name="_cc" value="murada@fitato.fit" />
                <input type="submit" value="Submit" />
              </form>
            </div>
          </div>
        </div> */}

      </Layout>
    )
  }
} 

export default OffersPage
