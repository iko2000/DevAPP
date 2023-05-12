import "./styleinter.css";

function Stats(props: any) {
  return <div className="stats" style={props.style}>
    <div className="stat"> 
     <p>Repos</p>
     <p>{props.repos}</p>
    
    </div>
    <div className="stat"> 
    <p>Followers</p>
     <p>{props.followers}</p>
     </div>
    <div className="stat"> 
    <p>following</p>
     <p>{props.following}</p>
    </div>

  </div>;
}

export default Stats;
