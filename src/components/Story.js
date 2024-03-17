import React from 'react';
import '../styles/storyStyle.css'
import { FaPlusSquare } from 'react-icons/fa';

const Story = (props) => {
const {type, data} = props;

    return (
    <>
        {type === "new" ? (
            <div className='story user'>
                <FaPlusSquare size={30} className='addIcon'/>
                <span>Add Story</span>
            </div>)
        : (
            <div className='story friend' style={{ backgroundImage: `url(${data.story_photo})`, backgroundSize: "cover" }} >
                <div className='user_details'>
                    <img src= {data.user_photo}/>
                </div>
                <h3>{data.user_name}</h3>
            </div>
        )    
        }       
        
    </>
    );
};

export default Story;