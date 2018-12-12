import React from 'react'
import Helmet from 'react-helmet'
import { withPrefix } from 'gatsby'
import DownloadSwipe from '../partials/DownloadSwipe'
import Layout from '../components/index'
import '../css/offer.css'

class OffersPage extends React.Component {
  render() {
    return (
      <Layout>
        <div className="offers-page">
          <Helmet
            title="50% Off on Every Fitato Pass | Fitato Mid-Month Offer"
          >
            <meta name="description" content="asasas" />
            <meta itemprop="name" content="50% Off on Every Fitato Pass | Fitato Mid-Month Offer"/>
            <meta itemprop="description" content="asasas"/>
            <meta name="twitter:title" content="50% Off on Every Fitato Pass | Fitato Mid-Month Offer"/>
            <meta name="twitter:description" content="asasas"/>
            <meta name="og:title" content="50% Off on Every Fitato Pass | Fitato Mid-Month Offer"/>
            <meta name="og:description" content="asasas"/>
          </Helmet>
            
            <div className="offers-page-hero">
              <div className="container">
                <div className="offers-page-hero__wrapper">
                  {/* <div style={{textAlign: 'center'}}>
                    <img src={withPrefix('/static/fitao-dussehra-landing-page.png')} alt="fitato dussehra offer"/>
                  </div> */}
                  <h1>Why Wait For The New Year?</h1>
                  <div className="line"></div>
                  <p>Your Fitness Resolution Starts Now</p>
                  <img src={withPrefix('/static/Untitled-2.png')} className="banner-mobile" alt="month-end offer" style={{marginTop: '30px'}}/>
                  <p className="move-down-icon-animate">
                    <img src={withPrefix('/static/icons/arrow-down.svg')} width="25" className="down-arrow" alt="down arrow"/>
                    Scroll down to know more
                  </p>
                </div>
              </div>
              {/* <img src={withPrefix('/static/top-right.png')} alt="" className="offers-page-hero--prop__top-right"/>
              <img src={withPrefix('/static/bottom-left.png')} alt="" className="offers-page-hero--prop__bottom-left"/> */}
            </div>

            <style dangerouslySetInnerHTML={{
              __html: `.offers-page-hero {background-image: url('${withPrefix('/static/Untitled-1.png')}');}@media only screen and (max-width: 767px) {.offers-page-hero {background-image: unset}}`
            }}/>

            {/* <img src={withPrefix('/static/tri.svg')} className="tri-svg" alt="fitato dussehra offer"/> */}

            {/* <svg id="bigTriangleColor" xmlns="http://www.w3.org/2000/svg" version="1.1" width="100%" height="100" viewBox="0 0 100 102" preserveAspectRatio="none">
                <path d="M0 0 L50 100 L100 0 Z" />
            </svg> */}

            <div className="offers-page-intro" style={{display: 'none'}}>
              <div className="container">
                <h2>Buy a Quarterly Pass and Get a Monthly Pass Free*</h2>
                <div className="offers-page-intro__items">
                  <p style={{fontSize: '3em', fontWeight: '700', color: '#EB1F2E'}}>₹5,499</p>
                  <h3 style={{margin: '0 0 10px 0'}}>FITATO QUATERLY (3 Months)</h3>
                  <p style={{fontSize: '20px', lineHeight: '1.6em'}}>Get unlimited access to every Fitato partner facility for 3 months!</p>
                  <p style={{margin: '0px 0 40px 0', fontSize: '35px'}}>+</p>
                  <p style={{fontSize: '2em', padding: '0px 0 10px 0'}}><strike>&#8377;2,199</strike></p>
                  <p style={{fontSize: '4em', fontWeight: '700', color: '#EB1F2E'}}>FREE</p>
                  <h3 style={{margin: '0 0 10px 0', color: 'rgba(0,0,0,0.8)'}}>FITATO MONTHLY (1 Month)</h3>
                  <p style={{fontSize: '20px', lineHeight: '1.6em', paddingBottom: '20px'}}>Get unlimited access to all facilities for one month absolutely free!</p>
                  <p><span className="offer-highlight">Use Coupon Code: <strong>GETFIT</strong></span></p>
                  <p style={{fontSize: '1.2em', lineHeight: '2em', paddingTop: '0px'}}>on your Fitato App<br /></p>
                  <p style={{fontSize: '1.3em', fontWeight: '700'}}>OR</p>
                  <a href="https://imjo.in/fyUM4z" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="button button-fluid" 
                    style={{maxWidth: '400px', fontSize: '20px', marginTop: '0px'}}
                  >Buy Here</a>
                  <p style={{paddingTop: '40px'}}>As soon as you make your payment, our fitness concierge will get in touch with you and take you through the rest of the process.</p>
                  <div>
                    <small>* Offer valid on 14<sup>th</sup> and 15<sup>th</sup> December 2018 only.</small>
                    <br/>
                    <small>Not valid on payment made through wallet.</small>
                  </div>
                </div>
              </div>
            </div>
    
            <div className="offers-page-intro" /* style={{display: 'none'}} */>
              <div className="container">
                
                <h2>Get Flat 50% Off on All Passes</h2>
                {/* <p className="offer-title-highlight"></p> */}
                {/* <h3>Buy a Quarterly Pass and get a Monthly Pass Free*</h3> */}
                <p><span className="offer-highlight">Use Coupon Code: <strong>FIT50</strong></span></p>
                <p style={{fontSize: '1.2em', lineHeight: '2em', paddingTop: '0px'}}>on your Fitato App<br /></p>
                <p style={{fontSize: '1.3em', fontWeight: 'bold'}}>OR</p>
                <p style={{fontSize: '1.3em', fontWeight: 'bold', marginBottom: '0.5em'}}>Buy Now:</p>
                
                <div className="offers-page-plans__items">
                  <div className="offers-page-plans__item">
                    <div className="offers-page-plans__item--title">
                      <h3>Fitato Quaterly<br /><small className="normal">(3 months)</small></h3>
                    </div>
                    <div className="offers-page-plans__item--body">
                      <p>Purchase the Fitato Quarterly pass and get unlimited access to every Fitato partner facility for 3 months!</p>
                      {/* <p className="offers-page-plans__item--price-strike"><strike>&#8377;5,499</strike></p>
                      <p className="offers-page-plans__item--price">&#8377;3,119</p> */}
                      <p className="offers-page-plans__item--price-strike"><strike>&#8377;3,899</strike></p>
                      {/* <small>Get Cashback: &#8377;936</small> */}
                      <p className="offers-page-plans__item--price">&#8377;5,499</p>
                      {/* <p className="offers-page-plans__item--get-cb">Get 100% Cashback</p> */}
                    </div>
                    <div className="offers-page-plans__item--cta">
                      <a href="https://imjo.in/67wHbA" target="_blank" rel="noopener noreferrer" className="button button-fluid">Buy Now</a>
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
                      {/* <small>Get Cashback: &#8377;936</small>
                      <p className="offers-page-plans__item--price" style={{margin: '40px 0 20px 0'}}>&#8377;3,899</p> */}
                      {/* <p className="offers-page-plans__item--get-cb">Get 100% Cashback</p> */}
                    </div>
                    <div className="offers-page-plans__item--cta">
                      <a href="https://imjo.in/67wHbA" target="_blank" rel="noopener noreferrer" className="button button-fluid">Buy Now</a>
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
                      {/* <small>Get Cashback: &#8377;528</small>
                      <p className="offers-page-plans__item--price" style={{margin: '40px 0 20px 0'}}>&#8377;2,199</p> */}
                      {/* <p className="offers-page-plans__item--get-cb">Get 100% Cashback</p> */}
                    </div>
                    <div className="offers-page-plans__item--cta">
                      <a href="https://imjo.in/Z2fERu" target="_blank" rel="noopener noreferrer" className="button button-fluid">Buy Now</a>
                    </div>
                  </div>
                </div>
                <small>* Offer valid for first-time users and till 30<sup>th</sup> November 2018 only.</small>
                <br/>
                <small>Not valid on payment made through wallet.</small>

                {/* <div className="offers-page-intro__passes-left">
                  <h3>For The First 500 Passes Only</h3>
                  <p className="red"><b>{this.state.passesLeft}</b> Passes Left</p>
                </div> */}

                <div style={{marginTop: '50px'}}>
                  <h4 style={{marginBottom: '5px'}}>Have questions? Let us help.</h4>
                  {/* <span onClick={this.handleClick} className="button">Talk to us</span> */}
                  <a href="tel:+918200396237" className="button">Talk to us</a>
                </div>
                
              </div>
            </div>
    
            <div className="offers-page-banner align-center">
              <div className="container">
                <h3 style={{marginBottom: '10px'}}>Don’t Just Wish For A Good Body, Work For It!</h3>
                <h2>Work out in over 300+ gyms &amp; fitness studios with your single-access Fitato Pass. Come, fall in love with fitness.</h2>
              </div>
            </div>

        </div>
        <DownloadSwipe />

      </Layout>
    )
  }
} 

export default OffersPage
