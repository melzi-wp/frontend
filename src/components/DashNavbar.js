import React from 'react';
import '../styles/Dashnavbar.css'
import { FaFonticons, FaPlusSquare, FaSearchengin } from 'react-icons/fa';

const DashNavbar = () => {


    return (
        <div className='navbar'>
            <div className='navbar_left'>
                <h1> social media app</h1>
            </div>
            <div className='navbar_right'>
                <div className='navbar_search'>
                    <FaSearchengin size={16} style={{ color:'rgb(71, 110, 248)', marginRight: '3px'}} />
                    <input name='q' placeholder='Search...' type='search'></input>
                </div>

                <button className='navbar_profile_button' >
                    <FaPlusSquare size={14} style={{marginRight:'3px'}} /> Create
                </button> 

                <div className='navbar_profile_image'>
                <img src='https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' />

                </div>
            </div>
        </div>
    );
};

export default DashNavbar;