import { useState } from 'react'
import './App.css'

function App() {

  const [cross1,setCross1] = useState(false);


  return (
    <>
      
      <div className="tictac_cover">
        <div className="tictac_box">
          <div className="item cross_box"></div>
          <div className="item round_box"></div>
          <div onClick={(e) => { setCross1(!cross1) }} className={`item ${cross1? "cross_box":""}`}></div>
          <div className="item"></div>
          <div className="item"></div>
          <div className="item"></div>
          <div className="item"></div>
          <div className="item"></div>
          <div className="item"></div>
        </div>
      </div>

    </>
  )
}

export default App
