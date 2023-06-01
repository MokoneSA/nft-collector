import React from 'react'
import './Card.css'

function Card(props){
  // inline styling
    const pStyle = {
    color: "#fff",
    fontWeight: "bold",
    marginLeft: "3px"
  };

  const nftArtist = {
    color: "#fff",
    fontSize: "15px",
    marginRight: "9px"
  };

  const smallStyle = {
    color: "grey"
  };

  const {children} = props;
  return (
    <>
      <div>
        <img src={children} alt='' />
      </div>
      <div>
      <h3 className='card-heading'>Ast Digital Art #19</h3>
      </div>
      <div className='currency'>
      <small style={smallStyle}>Current Bid</small><p style={pStyle}>2.3ETH</p>
      </div>
      <div className='place-bid'>
      <p style={nftArtist}>Gelan Stack</p><button className='bid-btn'>Place Bid</button>
      </div>
    </>
  )
}

export default Card
