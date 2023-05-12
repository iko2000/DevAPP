import './styleinter.css';



function Interface(props:any) {
  return (
    <div className="interface">
      <div className="info"> 
      <p className='name'>{props.name}</p>
      <p className='nick'>{props.nick}</p>
      <p className='bio'>{props.bio}</p>
      </div>
      <div className="date"> 
      <address>Joined at: {props.date}</address>
      </div>
    </div>
  );
}

export default Interface;
