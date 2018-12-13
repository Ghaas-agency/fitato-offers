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
            style={[{
              "cssText": `.offers-page-hero {background-image: url('${withPrefix('/static/Untitled-1.jpg')}');}.offers-page-steps__left::after{background-image: url('${withPrefix('/static/icons/arrow-down.svg')}');}`
            }]}
          >
            <meta name="description" content="Why wait for the New Year? Your fitness resolution starts now. Get 50% off on all Fitato passes." />
            <meta itemprop="name" content="50% Off on Every Fitato Pass | Fitato Mid-Month Offer"/>
            <meta itemprop="description" content="Why wait for the New Year? Your fitness resolution starts now. Get 50% off on all Fitato passes."/>
            <meta name="twitter:title" content="50% Off on Every Fitato Pass | Fitato Mid-Month Offer"/>
            <meta name="twitter:description" content="Why wait for the New Year? Your fitness resolution starts now. Get 50% off on all Fitato passes."/>
            <meta name="og:title" content="50% Off on Every Fitato Pass | Fitato Mid-Month Offer"/>
            <meta name="og:description" content="Why wait for the New Year? Your fitness resolution starts now. Get 50% off on all Fitato passes."/>
          </Helmet>
            
            <div className="offers-page-hero">
              <div className="container">
                <div className="offers-page-hero__wrapper">
                  {/* <div style={{textAlign: 'center'}}>
                    <img src={withPrefix('/static/fitao-dussehra-landing-page.png')} alt="fitato dussehra offer"/>
                  </div> */}
                  <div className="line"></div>
                  <h1>Why Wait For The New Year?</h1>
                  <p>Your Fitness Resolution Starts Now</p>
                  {/* <img src={withPrefix('/static/Untitled-2.png')} className="banner-mobile" alt="month-end offer" style={{marginTop: '30px'}}/> */}
                  {/* <p className="move-down-icon-animate">
                    <img src={withPrefix('/static/icons/arrow-down.svg')} width="25" className="down-arrow" alt="down arrow"/>
                    Scroll down to know more
                  </p> */}
                </div>
              </div>
              {/* <img src={withPrefix('/static/top-right.png')} alt="" className="offers-page-hero--prop__top-right"/>
              <img src={withPrefix('/static/bottom-left.png')} alt="" className="offers-page-hero--prop__bottom-left"/> */}
            </div>

            {/* <style dangerouslySetInnerHTML={{
              __html: `.offers-page-hero {background-image: url('${withPrefix('/static/Untitled-1.jpg')}');}.offers-page-steps__left::after{background-image: url('${withPrefix('/static/icons/arrow-down.svg')}');}`
            }}/> */}

            {/* <img src={withPrefix('/static/tri.svg')} className="tri-svg" alt="fitato dussehra offer"/> */}

            {/* <svg id="bigTriangleColor" xmlns="http://www.w3.org/2000/svg" version="1.1" width="100%" height="100" viewBox="0 0 100 102" preserveAspectRatio="none">
                <path d="M0 0 L50 100 L100 0 Z" />
            </svg> */}

            <div className="offers-page-steps">
              <div className="container">
                <div className="offers-page-steps__left">
                  <p><strong>BUY</strong></p>
                  <div className="offers-page-steps__left--item">
                    <p>Any Fitato Membership</p>
                  </div>
                </div>
                <div className="offers-page-steps__right">
                  <p><strong>GET</strong></p>
                  <div className="offers-page-steps__left--item">
                    <p>20% Off + 30% Cashback</p>
                  </div>
                  {/* <div className="offers-page-steps__right--item offers-page-steps__right--item-plus">
                    <p>20% Off</p>
                  </div>
                  <div className="offers-page-steps__right--item">
                    <p>30% Cashback</p>
                  </div> */}
                </div>
                {/* <div className="offers-page-steps__items">
                  <div className="offers-page-steps__item">
                    <p>Buy Any Fitato Membership</p>
                  </div>
                  <div className="offers-page-steps__item">
                    <p>Get 20% Off</p>
                  </div>
                  <div className="offers-page-steps__item">
                    <p>Get 30% Cashback</p>
                  </div>
                </div> */}
              </div>
            </div>
    
            <div className="offers-page-intro" /* style={{display: 'none'}} */>
              <div className="container">
                
                {/* <h2>Get Flat 50% Off on All Passes</h2> */}
                {/* <p className="offer-title-highlight">Highlight</p> */}
                <p className="offers-page-intro--use-coupon">Use Coupon Code<span className="offer-highlight">FIT50</span><span className="offer-highlight--clear">on your Fitato App</span></p>
                <p style={{fontSize: '1.3em', fontWeight: 'bold', paddingTop: '10px'}}>OR</p>
                <p style={{fontSize: '1.3em', fontWeight: 'bold', marginBottom: '0'}}>Buy Now:</p>
                
                <div className="offers-page-plans__items">
                  <div className="offers-page-plans__item">
                    <div className="offers-page-plans__item--title">
                      <h3>Fitato Quaterly<br /><small className="normal">(3 months)</small></h3>
                    </div>
                    <div className="offers-page-plans__item--body">
                      <p>Purchase the Fitato Quarterly pass and get unlimited access to every Fitato partner facility for 3 months!</p>
                      <p className="offers-page-plans__item--price-strike"><strike>&#8377;5,499</strike></p>
                      <p className="offers-page-plans__item--price">&#8377;4,399</p>
                      <p className="offers-page-plans__item--get-cb">Get Cashback: &#8377;1,649</p>
                      
                    </div>
                    <div className="offers-page-plans__item--cta">
                      <a href="https://imjo.in/4czyxN" target="_blank" rel="noopener noreferrer" className="button button-fluid">Buy Now</a>
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
                      <p className="offers-page-plans__item--get-cb">Get Cashback: &#8377;1,169</p>
                    </div>
                    <div className="offers-page-plans__item--cta">
                      <a href="https://imjo.in/YtCRvk" target="_blank" rel="noopener noreferrer" className="button button-fluid">Buy Now</a>
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
                      <p className="offers-page-plans__item--get-cb">Get Cashback: &#8377;659</p>
                    </div>
                    <div className="offers-page-plans__item--cta">
                      <a href="https://imjo.in/qEYkVv" target="_blank" rel="noopener noreferrer" className="button button-fluid">Buy Now</a>
                    </div>
                  </div>
                </div>
                <small>* Offer valid for first-time users and on 14<sup>th</sup> and 15<sup>th</sup> December 2018 only.</small>
                <br/>
                <small>* Not valid on payment made through Fitato wallet.</small>

                <div style={{marginTop: '50px'}}>
                  <h4 style={{marginBottom: '5px'}}>Have questions? Let us help.</h4>
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
