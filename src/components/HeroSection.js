import React from 'react';
import './HeroSection.css';
import img1 from '../images/hero-section.png';

function HeroSection() {
  return (
    <div className='banner-section'>
    <div className='banner-info'>
        <h1>DISCOVER AN AMAZING NFT COLLECTION</h1>
        <small>A Good NFT Project Will Have A Healthy Community Following Them.
            The Ones With The Most Engagement Are Ussualy The Proects Which
            Will Be The Most Successful. NFTs Are More Than Just Owning a Piece Of Art.
            They Are Being Part Of A Community. Where A Culture Has Been Created,
            And Culture Creates A Following
        </small>
        <form className="example" action="action_page.php">
            <input type="text" className='search-input' placeholder="  Search.." name="search"/>
            <button type="submit" className='search-button'>SEARCH</button>
        </form>
        <table className='stats'>
            <tr>
            <td className='rate'>320+</td>
            <td className='stats-info'>Project Done</td>
            <td className='rate'>60+</td>
            <td className='stats-info'>Creative People</td>
            <td className='rate'>200+</td>
            <td className='stats-info'>Happy Client</td>
            </tr>
        </table>
        <table className='authors'>
        <tr>
            <td colSpan={2}><h3>CREATED BY |</h3></td>
            <td colSpan={2}>Simon</td>
        </tr>
        </table>
    </div>
    <div className='banner-image'>
        <img src={img1} className='img-banner' alt='' />
    </div>
    </div>
  )
}

export default HeroSection;
