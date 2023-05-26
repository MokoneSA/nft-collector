import React from 'react';
import './MainContent.css';
import Button from '../components/Button';
import Card from '../components/Card'
import ArtistCard from './ArtistCard';
import newasLetter from '../images/new-letter.jpg';
import pic1 from '../images/artists/pic1.jpg';
import pic2 from '../images/artists/pic2.jpg';
import pic3 from '../images/artists/pic3.jpg';
import pic4 from '../images/artists/pic4.jpg';
import pic5 from '../images/artists/pic5.jpg';
import pic6 from '../images/artists/pic6.jpg';
import pic7 from '../images/artists/pic7.jpg';
import pic8 from '../images/artists/pic8.jpg';
import pic9 from '../images/artists/pic9.jpg';
import pic10 from '../images/artists/pic10.jpg';
import art1 from '../images/nft_art/art1.png';
import art2 from '../images/nft_art/art2.png';
import art3 from '../images/nft_art/art3.png';
import art4 from '../images/nft_art/art4.png';
import art5 from '../images/nft_art/art5.png';


function MainContent(){
 return (
    <>
      <section>
        <div className='crypto'>
          <table>
            <tr className='crypt-list'>
              <td className='crypto-type'>ripple</td>
              <td className='crypto-type'>coinbase</td>
              <td className='crypto-type'>bitcoin</td>
              <td className='crypto-type'>BINANCE</td>
              <td className='crypto-type'>BANANO</td>
            </tr>
          </table>
        </div>
      </section>
      <section>
        <div className='journey'>  
            <div className='journey-info'>
              <h3>YOUR JOURNEY STARTS HERE</h3>
              <small className='small-font'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                sed do eiusmod tempor incididunt ut labore et dolore magna 
                aliqua
              </small>
            </div>
            <div className='marketplace'>
                  <div className='options'>
                    <h4>Connect Wallet</h4>
                    <p>WalletConnect Protocol Does Not Run On A Blockchain 
                      And There Are No Fees.
                    </p>
                  </div>
                  <div className='options'>
                    <h4>NFT Marketplace</h4>
                    <p>
                      An NFT. Or Non-Fungible Token, Is A Unique Tokken Recorded In A Blockchain Ownership Of A Digital Or Physical Asset.
                    </p>
                  </div>
                  <div className='options'>
                    <h4>Collect NFT</h4>
                    <p>
                      NFTs Or Non-Fungible Tokens Are Digital Assets Based On Blockchain Technology
                    </p>
                  </div>
              </div>
        </div>
      </section>
      <section>
        <div className='trending-nft'>
          <h3 className='trending-nft-h3'>TREDING NFT THIS WEEK</h3>
          <small className='small-font'>
            It is illegal to screenshot an NFT and pass it of as your own.
            It is also illegal to post it online or make a physical copy.
          </small>
          <div className='categories'>
            <button className='btn-category btn-active'>All Categories</button>
            <button className='btn-category'>Art</button>
            <button className='btn-category'>Abstract</button>
            <button className='btn-category'>Video</button>
            <button className='btn-category'>Game</button>
          </div>
          <div className='bid-section'>
              <div className='bid-option'>
                <Card>{art1}</Card>
              </div>
              <div className='bid-option'>
                <Card>{art2}</Card>
              </div>
              <div className='bid-option'>
                <Card>{art3}</Card>
              </div>
              <div className='bid-option'>
                <Card>{art4}</Card>
              </div>
              <div className='bid-option'>
                <Card>{art5}</Card>
              </div>
              <div className='bid-option'>
                <Card>{art1}</Card>
              </div>
              <div className='bid-option'>
                <Card>{art2}</Card>
              </div>
              <div className='bid-option'>
                <Card>{art3}</Card>
              </div>
          </div>
        </div>
      </section>
      <section>
        <div className='top-artist'>
        <h3 className='heading-artist'>TOP ARTIST</h3>
          <small className='small-font'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                sed do eiusmod tempor incididunt ut labore et dolore magna 
                aliqua
          </small>
          <div className='artist-list'>
            <div className='artist-name'>
              <ArtistCard><img src={pic1} alt='' />bessie lee</ArtistCard>
            </div>
            <div className='artist-name'>
              <ArtistCard><img src={pic2} alt='' />jenny wilson</ArtistCard>
            </div>
            <div className='artist-name'>
              <ArtistCard><img src={pic3} alt='' />esther jay</ArtistCard>
            </div>
            <div className='artist-name'>
              <ArtistCard><img src={pic4} alt='' />jacob jones</ArtistCard>
            </div>
            <div className='artist-name'>
              <ArtistCard><img src={pic5} alt='' />marvin keen</ArtistCard>
            </div>
            <div className='artist-name'>
              <ArtistCard><img src={pic6} alt='' />jerome bell</ArtistCard>
            </div>
            <div className='artist-name'>
              <ArtistCard><img src={pic7} alt='' />@devidmalan</ArtistCard>
            </div>
            <div className='artist-name'>
              <ArtistCard><img src={pic8} alt='' />@isco</ArtistCard>
            </div>
            <div className='artist-name'>
              <ArtistCard><img src={pic9} alt='' />@medric</ArtistCard>
            </div>
            <div className='artist-name'>
              <ArtistCard><img src={pic10} alt='' />@vinivius</ArtistCard>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className='newsletter-section'>
          <div className='newsletter-info'>
            <h3>SUBSCRIBE OUR LATEST NEWSLETTERS</h3>
            <small>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
              sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </small>
            <form className="email" action="action_page.php">
                <input type="text" className='email-input' placeholder="  Enter your email" name="email"/>
                <button type="submit" className='email-btn'>EMAIL</button>
            </form>
          </div>
          <div className='newsletter-image'>
            <img src={newasLetter} alt='' />
          </div>
        </div>
      </section>
      <section>
        <div className="project-start">
          <div className='project-outer-border'>
            <div className='project-info'>
              <h3>NEVER MISS A DROP</h3>
              <small className='small-font'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                sed do eiusmod tempor incididunt ut labore et dolore magna 
                aliqua</small>
              <button className='project-btn'>Start Project</button>
            </div>
          </div> 
        </div>
      </section>
    </>
  )
}

export default MainContent;
