import React from 'react';
import '../styles/UserCard.css'

const UserCard = (props) => {
    return (
        <>
            <div className='user_card'>
                <div className='user_card_image'>
                    <img src='https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' />
                </div>

                <div className='user_card_info'>
                    <h3 className='user_name'> {props.userCard.firstname+' '+props.userCard.lastname} </h3>
                    <span className='user_index'>@melzi</span>
                </div>

            </div>
        </>
    );
};

export default UserCard;