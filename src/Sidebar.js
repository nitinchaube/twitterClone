import React from "react";
import "./Sidebar.css";

import TwitterIcon from '@material-ui/icons/Twitter';
import HomeIcon from '@material-ui/icons/Home';
import ExploreIcon from '@material-ui/icons/Explore';
import NotificationsActiveIcon from '@material-ui/icons/NotificationsActive';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import ListAltIcon from '@material-ui/icons/ListAlt';
import PermIdentityIcon from '@material-ui/icons/PermIdentity';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';

import {Button} from '@material-ui/core';





import SidebarOption from "./SidebarOption";




function Sidebar(){

    return(
        <div className="sidebar">
            {/* Twitter icon */}
            
            <TwitterIcon className="sidebar_twitter_icon"/>

             {/* SidebarOption */}
             <SidebarOption active Icon={HomeIcon} text="Home"/>
            <SidebarOption Icon={ExploreIcon} text="Explore" />
            <SidebarOption Icon={NotificationsActiveIcon} text="Notifications"/>
            <SidebarOption Icon={MailOutlineIcon} text="Messages"/>
            <SidebarOption Icon={BookmarkBorderIcon} text="Bookmarks"/>
            <SidebarOption Icon={ListAltIcon } text="Lists"/>
            <SidebarOption Icon={PermIdentityIcon} text="Profile"/>
            <SidebarOption Icon={MoreHorizIcon} text="More"/>
            

            
     
           

            {/* Button->Tweet */}

            <Button variant="outlined" className="sidebar__tweet" fullWidth >Tweet</Button>



        </div>
    );
}

export default Sidebar;