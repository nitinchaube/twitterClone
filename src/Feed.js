import React ,{useState, useEffect} from 'react';
import TweetBox from './TweetBox.js';
import "./feed.css";
import Post from "./Post.js";
import db from './firebase.js';
import FlipMove from 'react-flip-move';

function Feed() {
    const [posts, setPosts]  = useState([]);

    useEffect(() => {
        db.collection('posts').onSnapshot(snapshot=> (
            setPosts(snapshot.docs.map(doc => doc.data()))
        ))
       
    }, [])


    return (
        <div className="feed">
  
            {/* Header */}

            <div className="feed__header" >
                 <h2>Home</h2>

            </div>
            {/* TweetBox */}

            <TweetBox/>

            <FlipMove>
                {/* post */}
                    {posts.map(post =>(
                        <Post
                            key={post.text}
                            displayName={post.displayName}
                            username={post.username}
                            verified={post.verified}
                            text={post.text}
                            avatar={post.avatar}
                            image={post.image}
                        />
                    ))}
             
            </FlipMove>

        </div>
    );
}

export default Feed;
