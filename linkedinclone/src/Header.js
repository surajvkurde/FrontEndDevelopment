import React from 'react';
import './Header.css';
import logo from "./images/linkedin.png";
import SearchIcon from '@material-ui/icons/Search';
import HeaderOptions from './HeaderOptions';
import HomeIcon from '@material-ui/icons/Home';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import BusinessCenterIcon  from '@material-ui/icons/BusinessCenter';
import NotificationsIcon from '@material-ui/icons/Notifications';
import ChatIcon from '@material-ui/icons/Chat';
import userImg from './images/user.jpg';
import { logout } from './features/userSlice';
import { auth } from './Firebase';

function Header() {
    const user =useSelector(selectUser())
    const dispatch= useDispatch();
    const logoutOfApp = () => {
        dispatch(logout());
        auth.signOut();
    };

    return (
        <div className='header'>
            <div className='header_left'>
                <img src={logo} alt="Logo"/>
                {/* <LinkedInIcon/> */}
                <div placeholder='search' className='header_search'>
                    <SearchIcon/>
                    <input type="text"/>
                </div>
            </div>
            <div className='header_right'>
                <HeaderOptions Icon={HomeIcon} title="Home"/>
                <HeaderOptions Icon={SupervisorAccountIcon} title="My Network"/>
                <HeaderOptions Icon={BusinessCenterIcon} title="Jobs"/>
                <HeaderOptions Icon={ChatIcon} title="Messages"/>
                <HeaderOptions Icon={NotificationsIcon} title="Notifications"/>
                <HeaderOptions avatar={user.photoUrl}
                title="me"
                onClick={logoutOfApp}></HeaderOptions>
            </div>
        </div>
    )
}

export default Header;
