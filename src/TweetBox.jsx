import React, { useState } from "react";
import './Tweetbox.css' 
import { Avatar, Button } from "@material-ui/core";
import TwitterLogo from './twitterlogo.png'
import Post from "./Post";
//import Sdata from "./Sdata"

function TweetBox() {
    const [tweetMessage,setTweetMessage]=useState('')
    const [tweetImage,setTweetImage]=useState('')
    const[items,setItems]=useState([]);
    const sendTweet = (e)=>{
        e.preventDefault();
        if(tweetImage && tweetMessage ) {
          
        const person = { id: new Date().getTime().toString(),displayName: "Swati Sinha",
        username: "swatisi65271543",
        verified: true,
        text: tweetMessage,
        image: tweetImage,
        avatar:TwitterLogo,
         };
        setItems((items) => {
            return [...items, person];
          });
    
          }
        setTweetImage('')
          setTweetMessage('')
        }
    
    return (
        <div>
        <div className='tweetBox'>
           <form action="">
               <div className="tweetBox__input">
               <Avatar src={TwitterLogo} />
<input type="text"placeholder="What's happening?"
 value={tweetMessage}
 onChange={(e) => setTweetMessage(e.target.value)}
/>

               </div>
<input type="text"  className='tweetBox__imageInput'  placeholder="  Enter image URL" 
    value={tweetImage}
    onChange={(e) => setTweetImage(e.target.value)}
  />
               <Button onClick={sendTweet} type='submit' className='tweetBox__tweetButton'>Tweet</Button>
           </form>
        </div>
        {items.map((elem) => {
            const { displayName, username,verified,text,image,avatar} = elem;
         return(
           <>
        <div key={elem.id}>

           <Post displayName={displayName}
        username={username}
        verified={verified}
        text={text}
    
    image={image}
    avatar={avatar}

        />
        </div>

           </>
           );
          })}
          

        </div>
    )
}

export default TweetBox
