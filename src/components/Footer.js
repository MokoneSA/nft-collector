import React from 'react';
import './Footer.css';
import FooterNav from './FooterNav';

function Footer(){
  return (
    <footer >
      <FooterNav />
      <div className='footer'>
        <div className='footer-info'>
            <p className='footer-info-p'>NFTFY makes it easy for you to create a real NFT on the
                blockchain straight from your iPhone in a few taps! No coding
                experience needed!
            </p>
        </div>
        <div className='social-links'>
          <a href="#" class="fa fa-facebook"></a>
          <a href="#" class="fa fa-twitter"></a>
          <a href="#" class="fa fa-twitter"></a>
        </div>
      </div>
      <div className='copyright'>
        <hr />
        <p className='copyright-p'>Privacy policy</p>
        <p className='copyright-p'>Copyright@Nft Cretive agency</p>
        <p className='copyright-p'>Terms of service</p>
      </div>
    </footer>
  )
}

export default Footer;
