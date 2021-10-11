import React, {useState} from 'react';
import Slider from "react-slick";

export interface IslideShowProp {
  imageList: [string]
}



export default function SlideShow(props: IslideShowProp){


  
  return (                
    <div>
    <Slide easing="ease">
      <div className="each-slide">
        <div style={{'backgroundImage': `url(${slideImages[0]})`}}>
          <span>Slide 1</span>
        </div>
      </div>
      <div className="each-slide">
        <div style={{'backgroundImage': `url(${slideImages[1]})`}}>
          <span>Slide 2</span>
        </div>
      </div>
      <div className="each-slide">
        <div style={{'backgroundImage': `url(${slideImages[2]})`}}>
          <span>Slide 3</span>
        </div>
      </div>
    </Slide>
  </div>
  );
}

