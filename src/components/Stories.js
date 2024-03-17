import React from 'react';
import '../styles/StoriesStyle.css'
import Story from './Story';

const Stories = () => {

    const stories = [{
        user_name   : "mohamed",
        user_photo  : "https://images.pexels.com/photos/4067768/pexels-photo-4067768.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        story_photo : "https://images.pexels.com/photos/1707820/pexels-photo-1707820.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    {
        user_name   : "karim",
        user_photo  : "https://images.pexels.com/photos/1704488/pexels-photo-1704488.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        story_photo : "https://images.pexels.com/photos/1545743/pexels-photo-1545743.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    {
        user_name   : "amine",
        user_photo  : "https://images.pexels.com/photos/1561020/pexels-photo-1561020.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        story_photo : "https://images.pexels.com/photos/2086622/pexels-photo-2086622.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },]

    return (
        <div className='stories'>
            <Story type="new"/>
            {stories.map((story) =>( 
                <Story type="old" data = {story} />
            ))}

        </div>
    );
};

export default Stories;