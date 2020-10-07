import React ,{useState} from 'react'
import './tweetBox.css'
import {Avatar ,Button} from "@material-ui/core";
import db from './firebase'

function TweetBox() {
    const [ tweetMessage, setTweetMessage]= useState("");
    const [tweetImage,setTweetImage] = useState("");

    const sendTweet= e=>{
        e.preventDefault();

        db.collection('posts').add({
            displayName:"nitin chaube",
            username:"nitincjs",
            verified:true,
            text:tweetMessage,
            image:tweetImage,
            avatar:"https://marketingland.com/wp-content/ml-loads/2014/07/twitter-logo-small-fade-1920.png",



        });

        setTweetImage("");
        setTweetMessage("");

    };

    return (
        <div className="tweetBox">
            <form>
                <div className="tweetBox__input">
                    <Avatar src="https://marketingland.com/wp-content/ml-loads/2014/07/twitter-logo-small-fade-1920.png"/>
                    <input 
                        onChange={(e)=>setTweetMessage(e.target.value)}
                        value={tweetMessage} 
                        type="text"
                        placeholder="whats Happening?">

                    </input>
                   

                </div>
                 <input 
                    onChange={(e)=>setTweetImage(e.target.value)}
                    value={tweetImage}
                    className="tweetBox__inputImage" 
                    type="text" 
                    placeholder="Optional : Enter img url">

                </input>
                <Button onClick={sendTweet} type="submit" className="tweetBox__tweetButton">Tweet</Button>
            </form>

        </div>
    );
}

export default TweetBox;
