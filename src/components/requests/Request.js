import React from 'react';
import '../../styles/RequestStyle.css'

const Request = (props) => {

    const {data} = props;

    return (
        <>
            <div className='request'>
                <div className='request_details'>
                    <img className='user_image' src={data.profile_image} />
                    <p>
                        <b>{data.user_name}</b> want to add your friends
                    </p>
                </div>
                <div className='request_answers'>
                    <button className='accept_button'>Accept</button>
                    <button className='decline_button'>Decline</button>
                </div>

            </div>
        </>
    );
};

export default Request;