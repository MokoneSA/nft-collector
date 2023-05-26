import React from 'react'
import './ArtistCard.css'

const ArtistCard = (props) => {

  const {children} = props;

  return (
    <>
    <div className='border-div'>
      <div className='artist'>
        <h3 className='artist-h3'>{children}</h3>
        <small>Total sale</small><p>2.3ETH</p>
      </div>
    </div>
    </>
  )
}

export default ArtistCard;
