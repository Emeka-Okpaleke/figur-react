import Frame12037 from "../assets/image/Frame12037.png"
import videoFile from '../assets/video/hero.mp4';
const Section1 = () => {
    return ( 
        
        <div className="first container">
            <div className="first-write-up"> 
            <h2>
            More than a digital payment. <span>Figur</span> out your business.
            </h2>
            <p>
            Built for individuals and businesses to experience seamless accessibility to pay bills effortlessly, Open active personal & business accounts,
            receive and withdraw money anytime, Track your daily revenue, and more all on one simple platform.
            </p>
            <img src={Frame12037}
             alt="" 
             style={{ width: '200px', height: 'auto', paddingTop: '20px'}}
             />
            </div>
            <div className="video-container">
            <video className="video" width="" controls>
                <source src={videoFile} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            </div>

        </div>


     );
}
 
export default Section1;