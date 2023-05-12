import "./styleinter.css";
import twitter from "../assets/twitter.svg"
import web from "../assets/web.svg"
import location from "../assets/location.svg"
import company from "../assets/company.svg"


function Links(props:any) {


    return (
        <div className="links">
           <div className="link"> 
           <div className="insider"><div><img src={location}/></div><p className="linker">{props.location}</p></div>
           <div className="insider"><div><img src={web}/></div><p className="linker">{props.github}</p></div>

           </div>
           <div className="link"> 
           <div className="insider"><div><img src={twitter}/></div><p className="linker">{props.twitter}</p></div>
           <div className="insider"><div><img src={company}/></div><p className="linker">{props.link}</p></div>
           </div>

        </div>
    )
}


export default Links;