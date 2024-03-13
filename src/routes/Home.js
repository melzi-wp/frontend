import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import DashNavbar from '../components/DashNavbar';
import UserCard from '../components/UserCard';
import Sidebar from '../components/Sidebar';

const Home = () => {

    const [connectedUser, setConnectedUser] = useState({});

    const navigate = useNavigate();

    const getConnectedUserData = () => {
        setConnectedUser(JSON.parse( localStorage.getItem('user_data')));
    }


    useEffect(() => {
        getConnectedUserData();
        
        if(localStorage.getItem("user_data") === null){
            //user not connected
            //redirection to home page
            navigate("/login");
        }
    }, []);

    return (
        <div >
            <DashNavbar />
{/*            <h1 style={{color :'red', marginTop: '5rem'}} >hello {connectedUser.firstname +' '+ connectedUser.lastname} </h1>
*/}  
            <UserCard userCard={connectedUser} />
            <Sidebar />
        </div>
    );
};

export default Home;