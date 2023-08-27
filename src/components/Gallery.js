import React, { useState } from 'react';
import img1 from "../assets/bedroom.jpeg";
import img2 from "../assets/chairs.jpeg";
import img3 from "../assets/home.jpeg";
import img4 from "../assets/kanthi.jpeg";
import img5 from "../assets/kanthi.jpeg";
import img6 from "../assets/kanthi.jpeg";
import img7 from "../assets/kanthi.jpeg";
import "./GalleryStyle.css";


const Gallery=()=>{

    let data=[
        {
            id:1,
            imgsrc:img1,
        },
        {
            id:2,
            imgsrc:img2,
        },
        {
            id:3,
            imgsrc:img3,
        },
        {
            id:4,
            imgsrc:img4,
        },
        {
            id:5,
            imgsrc:img5,
        },
        {
            id:6,
            imgsrc:img6,
        },
        {
            id:7,
            imgsrc:img7,
        },
    ]
    const [model,setModel] = useState(false);
    const [tempimg,setTempImgSrc] = useState('');
    const getImg=(imgsrc)=>{
        setTempImgSrc(imgsrc);
        setModel(true);
    }
    return (
      <>
      <div className="description"><h1>Here are some of our captures</h1></div>
      <div className={model? "model open": "model"}>
        <img src={setTempImgSrc} />
      </div>
        <div className="gallery"> 
        {data.map((item,index)=>{
            return(
                <div className="pics" key={index} onClick={() => getImg(item.imgsrc)}>
                    <img className="imageholder" src={item.imgsrc} alt="" />
                </div>
            )
        })}
        </div>
    </>
    )
}

export default Gallery;