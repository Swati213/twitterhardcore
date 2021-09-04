import React from "react";

//import { useState } from "react";
import "./feed.css";
import Post from "./Post";
import Sdata from "./Sdata";

import TweetBox from "./TweetBox";
//import FlipMove from "react-flip-move";

function Feed() {
 // const [posts, setPosts] = useState([]);
  return (
    <div className="feed">
      <div className="feed__header">
        <h2>Home</h2>
      </div>
      <TweetBox />
    
      {Sdata.map((val)=>{
  return(

<Post
    key={val.id}
    displayName={val.displayName}
        username={val.username}
        verified={val.verified}
        text={val.text}
    
    image={val.image}
    avatar={val.avatar}

  />
  );
  } ) }

      

     
    </div>
  );
}

export default Feed;
