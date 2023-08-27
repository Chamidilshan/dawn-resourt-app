import "./videoStyle.css";
// import video from "../assets/videoplayback.mov";

function Videos(){
    return(
       <section className="video-area">
         <div className="videoholder">
            <h1>A glimpse of who we are</h1>
            <video className="video" autoPlay  muted>
                
            </video>
        </div>
       </section>
    );

}
export default Videos;