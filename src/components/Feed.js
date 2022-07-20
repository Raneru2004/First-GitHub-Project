import React, {useState, useEffect} from 'react';
import './Feed.css';
import TweetBox from './TweetBox';
import Post from './Post';
import db from '../firebase';
import { collection, addDoc, getDocs, doc, getDoc, query, where, updateDoc, deleteDoc } from "firebase/firestore";
import axios from 'axios';
import FlipMove from 'react-flip-move';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';


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
            <div className='feed__header'>
                    <h1>Home</h1>
                    <AutoAwesomeIcon/>
            </div>
            <div className='feed'>
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
                
            </div>
        </div>
    );
}

export default Feed;
