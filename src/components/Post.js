import { Avatar } from '@mui/material';
import React,{forwardRef} from 'react';
import VerifiedIcon from '@mui/icons-material/Verified';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
import RepeatIcon from '@mui/icons-material/Repeat';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';import PublishIcon from '@mui/icons-material/Publish';
import './Post.css'

const Post = forwardRef(({
    displayName,
    username,
    verified,
    text,
    timestamp,
    image,
    avatar}, ref) => {
    return (
        <div className='post' ref={ref}>
            <div className='post__avatar'>
                <Avatar src={avatar}/>
            </div>
            <div className='post__body'>
                <div className='post__header'>
                    <div className='post__header--text'>
                        <h3>
                            {displayName}{" "}
                            <span className='post__header--special'>
                                
                             {verified && <VerifiedIcon className='post__badge'/>}
                             @{username}
                            </span>
                        </h3>
                    </div>
                    <div className='post__header--description'>
                        <p>{text}</p>
                    </div>
                </div>
                { image ? <><img src={image} 
                alt='' /></> : <></>}
                
                <div className='post__footer'>
                   <ChatBubbleIcon fontSize="small"/>
                   <RepeatIcon fontSize="small"/>
                   <FavoriteBorderIcon fontSize="small"/>
                   <PublishIcon fontSize="small"/>
                </div>
            </div>
            
        </div>
    );
});

export default Post;
