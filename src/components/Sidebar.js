import React from 'react';
import '../styles/SidebarStyle.css'
import {FaHome, FaPhotoVideo, FaUser, FaUsers, FaRegCaretSquareDown, FaCog, FaCalendarDay } from 'react-icons/fa';

const Sidebar = () => {
    return (
        <>
            <div className='sidebar'>
                <div className='sidebar_menu'>
                    <a className='active'> <FaHome  className='me_3'/><p>Home</p></a>
                    <a><FaUsers className='me_3'/> <p>People</p></a>
                    <a> <FaPhotoVideo className='me_3'/><p>Photos</p> </a>
                    <a><FaCalendarDay className='me_3'/><p>News Feed</p>  </a>
                    <a><FaUser className='me_3'/><p>Profile</p> </a>
                    <a><FaCog className='me_3'/> <p>Settings</p></a>
                </div>
            
            </div>
        </>
    );
};

export default Sidebar;