import React from 'react'
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import Feature from '../Components/HomePage/Feature';
import About from '../Components/HomePage/About';
import aboutimage1 from '../assets/Frame 19.png';
import aboutimage2 from '../assets/download.png';
import Header from '../Components/HomePage/Header';
import Upload from '../Components/Upload/Upload';

function Home() {
  return (
    <div>
      <Navbar/>
      <Upload/>
      {/* <Footer/> */}
        {/* <Navbar/>
        <Header/>
        <Feature/>
        <About image={aboutimage1} title='Comes Wit All You Nedd For Daily Life' button='Get The App'/>
    
    <About image={aboutimage2} title='Download And Get The App Now' button='Download'/>
        <Footer/> */}
    </div>
  )
}

export default Home