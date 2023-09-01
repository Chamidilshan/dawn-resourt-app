import React, { useState } from "react";
import img1 from "../assets/bedroom.jpeg";
import img2 from "../assets/chairs.jpeg";
import img3 from "../assets/home.jpeg";
import img4 from "../assets/kanthi.jpeg";

import img8 from "../assets/1.jpg";
import img9 from "../assets/2.jpg";
import img10 from "../assets/3.jpg";
import img11 from "../assets/4.jpg";
import img12 from "../assets/5.jpg";
import img14 from "../assets/6.jpg";
import img15 from "../assets/7.jpg";
import img16 from "../assets/8.jpg";

import img19 from "../assets/11.jpg";

import img26 from "../assets/18.jpg";
import img27 from "../assets/19.jpg";
import img28 from "../assets/20.jpg";
import img29 from "../assets/21.jpg";
import img30 from "../assets/22.jpg";
import img31 from "../assets/23.jpg";
import img32 from "../assets/24.jpg";
import img33 from "../assets/25.jpg";
import img34 from "../assets/26.jpg";
import img35 from "../assets/27.jpg";
import img36 from "../assets/28.jpg";
import img37 from "../assets/29.jpg";
import img38 from "../assets/30.jpg";
import img39 from "../assets/tea.jpeg";
import "./GalleryStyle.css";

const Gallery = () => {
  let data1 = [
    {
      id: 1,
      imgsrc: img8,
    },
    {
      id: 2,
      imgsrc: img2,
    },
    {
      id: 3,
      imgsrc: img14,
    },
    {
      id: 4,
      imgsrc: img15,
    },
    {
      id: 5,
      imgsrc: img16,
    },
    {
      id: 6,
      imgsrc: img19,
    },
    {
      id: 7,
      imgsrc: img27,
    },
    {
      id: 8,
      imgsrc: img28,
    },
    {
      id: 9,
      imgsrc: img29,
    },
    {
      id: 10,
      imgsrc: img30,
    },
    {
      id: 11,
      imgsrc: img31,
    },
    {
      id: 12,
      imgsrc: img12,
    },
    {
      id: 13,
      imgsrc: img32,
    },
    {
      id: 13,
      imgsrc: img33,
    },
    {
      id: 13,
      imgsrc: img35,
    },
    {
      id: 13,
      imgsrc: img36,
    },
  ];
  let data2 = [
    {
      id: 1,
      imgsrc: img9,
    },
    {
      id: 2,
      imgsrc: img10,
    },
    {
      id: 3,
      imgsrc: img11,
    },
    {
      id: 4,
      imgsrc: img12,
    },
    {
      id: 5,
      imgsrc: img37,
    },
    {
      id: 6,
      imgsrc: img38,
    },
    {
      id: 7,
      imgsrc: img39,
    },{
        id: 7,
        imgsrc: img4,
      }
  ];
  const [model, setModel] = useState(false);
  const [tempimg, settempimg] = useState("");
  const getImg = (imgsrc) => {
    settempimg(imgsrc);
    setModel(true);
  };
  return (
    <>
      {/* <div className="description"><h1>Here are some of our captures</h1></div> */}
      <div className={model ? "model open" : "model"}>
        <img src={tempimg} />
        <div className="fas fa-times" onClick={() => setModel(false)}></div>
      </div>
      <h1 id="accomo">Accomodation</h1>
      <div id="gallery" className="gallery">
        {data1.map((item, index) => {
          return (
            <div
              className="pics"
              key={index}
              onClick={() => getImg(item.imgsrc)}
            >
              <img className="imageholder" src={item.imgsrc} alt="" />
            </div>
          );
        })}
      </div>
      <h1 id="dining">Dining</h1>
      <div className="gallery">
        {data2.map((item, index) => {
          return (
            <div
              className="pics"
              key={index}
              onClick={() => getImg(item.imgsrc)}
            >
              <img className="imageholder" src={item.imgsrc} alt="" />
            </div>
          );
        })}
      </div>
      <h1></h1>
      <h1 id="events">Events and Functions</h1>
      <div className="gallery">
        {data1.map((item, index) => {
          return (
            <div
              className="pics"
              key={index}
              onClick={() => getImg(item.imgsrc)}
            >
              <img className="imageholder" src={item.imgsrc} alt="" />
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Gallery;
