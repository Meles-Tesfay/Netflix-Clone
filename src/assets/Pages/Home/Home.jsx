import React from 'react';
import './Home.css';
import Navbar from '../../Components/Navbar/Navbar';
import hero_banner from '../../imges/hero_banner.jpg'
import hero_title from'../../imges/hero_title.png';
import play_icon from'../../imges/play_icon.png';
import info_icon from'../../imges/info_icon.png';
import TitleCadrs from '../../Components/TitleCards/TitleCadrs';
import Footer from '../../Components/Footer/Footer';

const Home = () =>{
 return(
  <div className="Home">
 <Navbar />
  <div className="hero">
    <img src={hero_banner} alt="" className='banner_image'/>
    <div className="hero_caption">
      <img src={hero_title}alt="" className='caption_img'/>
       <p>Discovering his ties to a secret,ancient order
        a young man living In modern Istanbul embarks on on 
        a quest to save the city from imortal enemy
       </p>
       <div className="hero_btns">
        <button className='btn'><img src={play_icon}alt="" />Play</button>
        <button className='btn_dark-btn'><img src={info_icon}alt="" />More Info</button>
       </div>
       <TitleCadrs/>
    </div>
   </div>
   <div className="more-cards">
    <TitleCadrs title={"Blockbuster movies"} category={"top_rated"}/>
    <TitleCadrs title={"Only on netflix"}  category={"popular"}/>
    <TitleCadrs title={"Upcoming"}  category={"upcoming"}/>
    <TitleCadrs title={"Top pics for you"}  category={"now_playing"}/>
   </div>
   <Footer />
  </div>
 )

  
 
}

export default Home
