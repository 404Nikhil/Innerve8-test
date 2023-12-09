import { useState } from 'react'
import Nav from './Components/Nav/nav.jsx'
import Home from './Pages/home.jsx'
import Prize from './Pages/prize.jsx'
import Tracks from './Pages/tracks.jsx'
import Noise from "/src/assets/images/white-noise.gif";
import './Components/noise.css'
import Timeline from './Pages/timeline.jsx'
import Threejs from './Pages/threejs.jsx'
import Testimonial from './Pages/testimonial.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="noise"></div>
      <Home />
      <Threejs />
      <Prize  />
      <Tracks  />
      <Timeline />
      <Timeline />
      <Timeline />
      <Testimonial/>
    </>
  )
}

export default App
