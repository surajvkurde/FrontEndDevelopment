import React from 'react';
import './Sidebar.css';
import {Avatar} from "@material-ui/core";
import { selectUser } from './features/userSlice';

function Sidebar() {
    const user = useSelector(selectUser);

    const recentItem=(topic)=> (
        <div className='sidebar_recentItem'>
            <span className='sidebar_hash'>#</span>
            <p>{topic}</p>
        </div>
    );
    return (
       <div className="sidebar">
            <div className='sidebar_top'>
                <img src="https://images.unsplash.com/photo-1636587224433-3cd253788c40?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1032&q=80"
                alt=""/>
                <Avatar src={user.photoUrl} className="sidebar_avatar">
                {user.email[0]}
                </Avatar>
                <h2> {user.DisplayName} </h2>
                <h4> {user.email} </h4>
            </div>

            <div className="sidebar_stats">
                <div className='sidebar_stat'>
                    <p>Who viewed You </p>
                    <p className='sidebar_statNumber'>2122</p>
                </div>
                <div className='sidebar_stat'>
                    <p>Views on Post </p>
                    <p className='sidebar_statNumber'>2344</p>                    
                </div>
            </div>


            <div className='sidebar_bottom'>
                <p>Recent</p>
                {recentItem("reactJS")}
                {recentItem("programming")}
                {recentItem("css")}
                {recentItem("Blockchain")}
                {recentItem("python")}
            </div>
        </div>
    );
}

export default Sidebar;
