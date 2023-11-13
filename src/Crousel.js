import React, { useEffect, useState } from "react";
import "./Crousel.css";
import pic1 from "./Images/elephant-1822636.jpg";
import pic2 from "./Images/mountains-1587287.jpg";
import pic3 from "./Images/elephant-2380009.jpg";
import pic4 from "./Images/pic01.jpg";

import rightArrow from "./Images/right-arrow.png";
import leftArrow from "./Images/arrow.png";

function Crousel() {
  const [num, setNum] = useState(0);
  var images = [pic1, pic2, pic3, pic4];
  let spanTags = [];

  function prevSlide() {
    setNum((prev) => {
      if (prev === 0) {
        return 0;
      } else if (prev > 0) {
        return prev - 1;
      }
    }); 
  }

  function nextSlide() {
    // setNum((prev) => prev+1)
    setNum((prev) => {
      if (prev === images.length - 1) {
        return images.length - 1;
      } else if (prev < images.length - 1) {
        return prev + 1;
      }
    });
  }

  function navCircles() {
    // var spanClass = "image-nav-circle";
    images.map((d, index) => {
      debugger
      if (index === num) {
        spanTags.push(<a onClick={() => imageCircle(index)}><span className="image-nav-circle inc-Opacity"></span></a>);
      }else{
        spanTags.push(<a onClick={() => imageCircle(index)}><span className="image-nav-circle"></span></a>);
      }
    });
    // spanTags[num]
    // console.log(spanTags[num].props.className);
    return spanTags;
  }
  function imageCircle(value){
    console.log(value)
setNum(() => value)
  }
  return (
    <div className="crousel">
      <div className="container">
        <div class="arrow-left" onClick={prevSlide}>
          <div class="arrow-left-mask"></div>
        </div>
        <div className="slider">
          <div className="slider-image">
            <img id="slide" src={images[num]} />
          </div>
          <div className="image-nav">
            {navCircles()}
            {/* <span className="image-nav-circle"></span>
            <span className="image-nav-circle"></span>
            <span className="image-nav-circle"></span>
            <span className="image-nav-circle"></span> */}
          </div>
        </div>

        <div className="arrow-right" onClick={nextSlide}>
          <div className="arrow-right-mask"></div>
        </div>
      </div>
      <div className="asxz">
<h1>Hello</h1>
      </div>
    </div>
  );
}

export default Crousel;
