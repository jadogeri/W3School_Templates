import React from 'react'
import WebPage from './WebPage';

const Home = () => {
  return (
    <div>
      <WebPage 
        src="https://www.w3schools.com/w3css/img_temp_blog.jpg" alt="blog" route="/blog" 
      />
      <WebPage 
        src="https://www.w3schools.com/w3css/img_temp_band.jpg" alt="band" route="/band" 
      />
      <WebPage 
        src="https://www.w3schools.com/w3css/img_temp_art.jpg" alt="art" route="/art" 
      />      
      <WebPage 
        src="https://www.w3schools.com/w3css/img_temp_photo2.jpg" alt="black and white photo" route="/black_and_white_photo" 
      />
      <WebPage 
        src="https://www.w3schools.com/w3css/img_temp_architect.jpg" alt="architect" route="/architect" 
      />
     <WebPage
       src="https://www.w3schools.com/w3css/img_temp_gourmet_catering.jpg" alt="gourmet catering" route="/gourmet_catering"
      />
            <WebPage 
        src="https://www.w3schools.com/w3css/img_temp_comingsoon.jpg" alt="coming soon" route="/coming_soon" 
      />
      <WebPage 
        src="https://www.w3schools.com/w3css/img_temp_parallax.jpg" alt="parallax" route="/parallax" 
      />
     <WebPage
       src="https://www.w3schools.com/w3css/img_temp_photo3.jpg" alt="photo portfolio" route="/photo_portfolio"
      />


    </div>
  )
}

export default Home