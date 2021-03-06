import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import IconButton from "@material-ui/core/IconButton";
import EditIcon from '@material-ui/icons/Edit';
import GroupAddIcon from '@material-ui/icons/GroupAdd';
import NotificationsIcon from '@material-ui/icons/Notifications';
import VideoCallIcon from '@material-ui/icons/VideoCall';

function MyProfile({switchPage, setSwitchPage}){
    const name = localStorage.getItem('myname')

    return(
        <div className="my-profile">
         <div style={{display:"inline-flex", width: "100%", padding:"10px"}}>
                <div style={{display:"inline-flex", position: "relative", left: 0, width: "100%" }}>
                 <Avatar>{name[0].toUpperCase()}</Avatar>
            <h1>{name}</h1>   
                </div>
                <div style={{display:"inline-flex"}}>

                <IconButton edge="end" color="inherit" onClick={()=>setSwitchPage("videocall")}>
            <VideoCallIcon />
          </IconButton>

                <IconButton edge="end" color="inherit" onClick={()=>setSwitchPage("user-profile-details")}>
            <NotificationsIcon />
          </IconButton>

                <IconButton edge="end" color="inherit" onClick={()=>setSwitchPage("edit-my-profile")}>
            <EditIcon />
          </IconButton>

          <IconButton edge="end" color="inherit" onClick={()=>setSwitchPage("add-chat-room")}>
            <GroupAddIcon />
          </IconButton>
                </div>
        </div>
        </div>
    )
}

export default MyProfile;
