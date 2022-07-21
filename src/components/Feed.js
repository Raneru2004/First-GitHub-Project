import React, {useState, useEffect} from 'react';
import './Feed.css';
import TweetBox from './TweetBox';
import Post from './Post';
import db from '../firebase';
import { collection, addDoc, getDocs, doc, getDoc, query, where, updateDoc, deleteDoc } from "firebase/firestore";
import axios from 'axios';
import FlipMove from 'react-flip-move';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import { Button } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import NotificationsIcon from '@mui/icons-material/Notifications';
import SearchIcon from '@mui/icons-material/Search';
import HomeIcon from '@mui/icons-material/Home';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import MicNoneIcon from '@mui/icons-material/MicNone';



function Feed() {
    const [posts, setPosts] =useState([]);

    
    useEffect(() => {
        async function getAllPosts(){
            const {docs} = await getDocs(collection(db, "posts"))
            const posts =docs.map(elem=>  elem.data())
            setPosts(posts)
            return posts
            
        }
        getAllPosts()

    },[])


    // useEffect(()=>{
    //     db.collection("posts").onSnapshot(snapshot =>(
    //         setPosts(snapshot.docs.map(doc=>doc.data()))
    //         ))
    // },[])
    
    return (
        <div className='feed__wrapper' >
            <Button className='tweet--plus'><AddIcon/></Button>
            <div className='feed'>
                
                <div className='feed__header'>
                        <h1>Home</h1>
                        <AutoAwesomeIcon/>
                </div>
                <div className='feed__body'>
                    <TweetBox/>
                    

                    <FlipMove>
                    {posts.map(post => (
                        <Post 
                        key={post.text}
                        displayName={post.displayName}
                        username={post.username} 
                        verified = {post.verified}
                        text={post.text}
                        avatar={post.avatar}
                        image ={post.image}
                        />
                    ))}
                    </FlipMove>
                      
                </div>
                <div className='menuBar--wrapper'>
                    <div className='menuItem--wrapper'>
                         <HomeIcon/>
                    </div>
                    <div className='menuItem--wrapper'>
                         <SearchIcon/>
                    </div>
                    <div className='menuItem--wrapper'>
                         <MicNoneIcon/>
                    </div>
                    <div className='menuItem--wrapper'>
                         <NotificationsIcon/>
                    </div>
                    <div className='menuItem--wrapper'>
                         <MailOutlineIcon/>
                    </div>
                </div>
                
            </div>
           
        </div>
    );
}

export default Feed;
