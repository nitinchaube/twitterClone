import React from 'react'
import './Widget.css'
import {
        TwitterTimelineEmbed,
        TwitterShareButton,
        TwitterTweetEmbed,
        } from "react-twitter-embed";
import SearchIcon from "@material-ui/icons/Search";

function Widget() {
    return (
        <div className="widgets">
            <div className="widgets__input">
                <SearchIcon className="widgets__searchIcon"/>
                <input placeholder="Search Twitter" type="text" />
            </div>

            <div className="widgets__widgetContainer">
                <h2>What's Happening</h2>
                <TwitterTweetEmbed tweetId={"858551177860055040"}/>
                <TwitterTimelineEmbed 
                    sourceType="profile"
                    screenName="cleverqazi"
                    options={{height:400}}
                    />
                <TwitterShareButton
                    url={"https://facebook.com/cleverprogrammer"}
                    options={{text: "#react js is awesome so as nitin ",via:"cleverqazi"}}
                />
            </div>

        </div>
    );
}

export default Widget;
