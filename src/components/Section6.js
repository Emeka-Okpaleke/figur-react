import joinfigur from "../assets/image/joinFigur.png"
import Frame12037 from "../assets/image/Frame12037.png"
const Section6 = () => {
    return ( 
        <div className="sixth">
            <div className="sixth-container container">
                <div className="sixth-image ">
                    <img src={joinfigur} alt="" 
                    style={{width: "100%", height: "100%"}}/>
                </div>

                <div className="sixth-text-container container">
                    <h4>Ready to Join the Figur System.</h4>
                    <p>Make life easy for the end user with solutions tailored for
                    growth while ensuring optimum satisfaction.</p>
                    <img src={Frame12037} alt=""  style={{maxwidth: "fit-content", height: "auto"}}/>
                </div>
            </div>

            
        </div>
     );
}
 
export default Section6;