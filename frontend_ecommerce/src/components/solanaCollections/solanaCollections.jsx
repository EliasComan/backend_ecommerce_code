import React from 'react'
import { solanaCollections } from './solanaCollections.styles'

const SolanaCollections = () => {
  return (
    <div className={solanaCollections.container}>
        <img className={solanaCollections.img} src="https://static.opensea.io/solana/explore-solana.png" alt="" />
        <div className={solanaCollections.undertitle}>
            <h2 className={solanaCollections.title}>Solana NFTs..</h2>
            <p className={solanaCollections.text}>Explore, Buy And Sell Popular Solana NFTs On OpenSea's Solana Beta, And Enjoy Low Gas Fees And Fast Transaction Speeds.</p>
        </div>
        <hr />
        
    </div>
  )
}

export default SolanaCollections