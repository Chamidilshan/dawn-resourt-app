import React, { useState } from 'react';
import img1 from "../assets/bedroom.jpeg";
import img2 from "../assets/chairs.jpeg";
import img3 from "../assets/home.jpeg";
import img4 from "../assets/kanthi.jpeg";
import img5 from "../assets/kanthi.jpeg";
import img6 from "../assets/kanthi.jpeg";
import img7 from "../assets/kanthi.jpeg";
import img8 from "../assets/1.jpg";
import img9 from "../assets/2.jpg";
import img10 from "../assets/3.jpg";
import img11 from "../assets/4.jpg";
import img12 from "../assets/5.jpg";
import img13 from "../assets/6.jpg";
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
        {
            id:8,
            imgsrc:img8,
        },
        {
            id:9,
            imgsrc:img9,
        },
        {
            id:10,
            imgsrc:img10,
        },
        {
            id:11,
            imgsrc:img11,
        },
        {
            id:12,
            imgsrc:img12,
        },
        {
            id:13,
            imgsrc:img13,
        },
    ]
    const [model,setModel] = useState(false);
    const [tempimg,settempimg] = useState('');
    const getImg=(imgsrc)=>{
        settempimg(imgsrc);
        setModel(true);
    }
    return (
      <>
      {/* <div className="description"><h1>Here are some of our captures</h1></div> */}
      <div className={model? "model open": "model"}>
        <img src={tempimg} />
            <div className="fas fa-times" onClick={()=>setModel(false)}></div>
      </div>
      <h1 id="accomo">Accomodation</h1>
        <div id="gallery" className="gallery"> 
        {data.map((item,index)=>{
            return(
                <div className="pics" key={index} onClick={() => getImg(item.imgsrc)}>
                    <img className="imageholder" src={item.imgsrc} alt="" />
                </div>
            )
        })}
        
        </div>
        <h1 id="dining">Dining</h1>
        <div className="gallery"> 
        {data.map((item,index)=>{
            return(
                <div className="pics" key={index} onClick={() => getImg(item.imgsrc)}>
                    <img className="imageholder" src={item.imgsrc} alt="" />
                </div>
            )
        })}
        
        </div>
        <h1></h1>
        <h1 id="events">Events and Functions</h1>
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