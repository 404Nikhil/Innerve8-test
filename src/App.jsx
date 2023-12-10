import { useState } from 'react'
import Nav from './Components/Nav/nav.jsx'
import Home from './Pages/home.jsx'
import Prize from './Pages/prize.jsx'
import Tracks from './Pages/tracks.jsx'
import './Components/noise.css'
import Timeline from './Pages/timeline.jsx'
import Threejs from './Components/threejs.jsx'
import Testimonial from './Pages/testimonial.jsx'
import Dates from './Pages/dates.jsx'
import Footer from './Pages/footer.jsx'
import Sponsor from './Pages/sponsor.jsx'
import Bannercard from './Pages/bannercard.jsx'
import Problems from './Pages/problems.jsx'
import Faqs from './Pages/faqs.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="noise"></div>
      <Home />
      <Dates />
      <Prize  />
      <Tracks  />
      <Problems />
      <Timeline />
      <Timeline />
      <Timeline />
      <Sponsor/>
      <Testimonial/>
<<<<<<< HEAD
      <Faqs/>
=======
>>>>>>> 8df2dd1bcc64bc2e81adf24465e00eb42c5edbb3
      <Bannercard/>
      <Footer/>
    </>
  )
}

export default App
