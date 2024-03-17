import React from 'react';
import '../../styles/RequestsStyle.css'
import Request from './Request.js';

const Requests = () => {

    const requests = [
        {
            user_name: "Ahmed",
            profile_image: "https://images.pexels.com/photos/3585088/pexels-photo-3585088.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        },
        {
            user_name: "Zakaria",
            profile_image: "https://images.pexels.com/photos/220429/pexels-photo-220429.jpeg?auto=compress&cs=tinysrgb&w=600"
        },
        {
            user_name: "Sohaib",
            profile_image: "https://images.pexels.com/photos/4417069/pexels-photo-4417069.jpeg?auto=compress&cs=tinysrgb&w=600"
        },
        {
            user_name: "Fouad",
            profile_image: "https://images.pexels.com/photos/212372/pexels-photo-212372.jpeg?auto=compress&cs=tinysrgb&w=600"
        },
        {
            user_name: "Raouf",
            profile_image: "https://images.pexels.com/photos/3586765/pexels-photo-3586765.jpeg?auto=compress&cs=tinysrgb&w=600"
        }
    ]

    return (
        <>
            <div className='requests'>
                <div className='requests_title'>
                    <h4>Requests</h4>
                    <h4 className='requests_numbers'> 5 </h4>
                </div>

                {
                    requests.map(req => <Request data={req} />)
                    }
                
                
            </div>
        </>
        
    );
};

export default Requests;