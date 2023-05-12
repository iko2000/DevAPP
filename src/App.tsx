import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import Input from "./components/Interface";
import searchImg from "./assets/search.svg";
import Interface from "./components/Interface";
import light from "./assets/sun.svg"
import moon from "./assets/moon.svg"

import Stats from "./components/Stats";
import Links from "./components/Links";
import { link } from "fs";


function App() {
       
    const [imported, setImported] = useState(null);
    const [name, setName] = useState(null);
    const [nick, setNick] = useState(null);
    const [img, setImg] = useState('s');
    const [bio, setBio] = useState(null);
    const [twitter, setTwitter] = useState(null);
    const [github, setGithub] = useState(null);
    const [site, setSite] = useState(null);
    const [company, setCompany] = useState(null);
    const [email, setEmail] = useState(null);
    const [date, setDate] = useState(null);
    const [location, setLocation] = useState(null);
    const [repo, setRepo] = useState(0);
    const [follower, setFollower] = useState(null);
    const [following, setFollowing] = useState(null);
    const [input, setInput] = useState('');
    const [respon, setRespon] = useState('iviko');
    const [color, setColor] = useState(false);
    const [boxcolor, setboxColor] = useState('darkblue');
    const [mode, setmode] = useState('light');




  console.log(imported);
 
  const [users, setUsers] = useState<any>(null);
  useEffect(() => {
    axios(`https://api.github.com/users/${respon}`)
      .then((response) => response.data)
      .then((data) => {
        setName(data.login);
        setFollower(data.followers);
        setBio(data.bio);
        let converted = data.created_at.slice(0,10);
        setDate(converted);
        setFollowing(data.following);
        setLocation(data.location);
        setCompany(data.organizations_url);
        setTwitter(data.twitter_username);
        setImported(data);
        setSite(data.html_url)
        setNick(data.node_id);
        setImg(data.avatar_url)

      }).catch(
        function (error) {
          alert(error + 'Show error notification!')
        })

     
  }, [respon]);

  let styles:any = {
    app: {
      backgroundColor: '#00022e',
      color: 'white'
    },

    box: {
      backgroundColor: '#214761',
    },

    lightmode: {
      backgroundColor: "white",
    },

   
  }

  return (
    <div className="App" style={color ? styles.app : styles.lightmode}>
      <div className="box">
        <div className="floor1">
          <h1 className={color ? "darken" : "lighten"}>devFinder</h1>
          <button className={color ? "dark" : 'light'} onClick={() => {
            setColor(!color);
          }}>{color ? 'LIGHT' : 'DARK'} <img src={color ? light : moon}/></button>
          
        </div>
        <div className="floor2"></div>
        <div className="floor3" style={color ? styles.box : styles.lightmode}>
          <div className="input"  >
            <div style={color ? styles.box : styles.lightmode}>
              <img src={searchImg} />
             
              <input style={color ? styles.box : styles.lightmode}  value={input} placeholder="Search Github Username..." onChange={(e:any) => {
                setInput(e.target.value);
              }}/>
            </div>
          
          </div>
          <button type="submit" value="Submit" onClick={(e) =>  {
              e.preventDefault();
              setRespon(input);
              console.log('clicked');
            }}>Search</button>
         
        </div>
       
        <div className="floor4"></div>
        <div className="floor5">
          <div className="picdiv">
            <img src={img}/>
          </div>
          <div className="profile" style={color ? styles.app : styles.lightmode}>
            <Interface
              name={name}
              nick={nick}
              bio={bio ? bio : "No Bio in Profile"}
              date={date}
            />
            <Stats repos={repo} followers={follower} following={following} style={color ? styles.app : styles.lightmode} />
            <Links
              github={site ? site : 'Not Aviable'}
              twitter={twitter ? twitter : 'Not Aviable'}
              location={location ? location : 'Not Aviable'}
              link={github ? github : 'Not Aviable'}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
