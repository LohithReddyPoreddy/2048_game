import React from 'react'

function Header({score}) {
  return (
    <div className='header-section'>
        <div className='left-section'> 
            <button className='button-2048'> 2048 </button> 
        </div>
        <div className='center-section'> Score : {score} </div>
        <div className='right-section'> 
            <button className='newgame-button' id='newgame-button'>New game</button> </div>
    </div>
  )
}

export default Header