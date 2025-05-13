import React, { useContext } from 'react'
import Navbar from './Navbar'
import AlbumItem from './AlbumItem'
import SongItem from './SongItem'
// import { albumsData } from '../assets/assets'
// import { songsData } from '../assets/assets'
import { PlayerContext } from '../context/PlayerContext'

const DisplayHome = () => {

  const { songsData, albumsData } = useContext(PlayerContext)

  return (
    <>
      <Navbar />
      <div className='mb-4'>
        <h1 className='my-5 font-bold text-2xl'>Featured Charts</h1>
        <div className='flex overflow-auto'>
          {Array.isArray(albumsData) ? albumsData.map((item, index) => (
            <AlbumItem key={index} name={item.name} desc={item.desc} id={item._id} image={item.image} />
          )) : <p className='text-white'>Loading albums...</p>}
        </div>
      </div>

      <div className='mb-4'>
        <h1 className='my-5 font-bold text-2xl'>Today's Biggest Hits</h1>
        <div className='flex overflow-auto'>
          {Array.isArray(songsData) ? songsData.map((item, index) => (
            <SongItem key={index} name={item.name} desc={item.desc} id={item._id} image={item.image} />
          )) : <p className='text-white'>Loading songs...</p>}
        </div>
      </div>
    </>
  )
}

export default DisplayHome
