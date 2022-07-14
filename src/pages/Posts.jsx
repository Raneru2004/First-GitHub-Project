import React,{useEffect, useState} from 'react';
import {useParams, Link, useNavigate} from "react-router-dom"
import axios from 'axios';


const Posts = () => {
    let navigate=useNavigate();
    const {id}= useParams();
    const [posts, setPosts] =useState([]);
    const [loading, setLoading] =useState();
    const [searchId, setSearchId]=useState(id);
    function onSearch(){
        fetchPosts(searchId)

    }

    async function fetchPosts(userId){
        setLoading(true)
        // const data = await fetch("https://jsonplaceholder.typicode.com/posts/1");
        // const data2 = await data.json()
         const {data} = await axios.get(`https://jsonplaceholder.typicode.com/posts?userId=${userId || id}`); // {data } is same as response.data
         setPosts(data);
         console.log(data)
         setLoading(false)

    }

    useEffect(()=>{
        
        fetchPosts();
        
        
        
    },[])

    

    return (
    <>
        <div>
            <div>
                <div className="post__search">
                     
                       <button onClick={()=>navigate("/")}>← Back</button>
                    
                    <div className="post__search--container">
                    <label className="post__search--label">Search by Id</label>
                    <input
                        type="number" 
                        value={searchId} 
                        onChange={(event)=> setSearchId(event.target.value)}
                        onKeyPress={(event)=>{
                            if (event.key==='Enter'){
                                onSearch();
                            }
                        }}
                    />
                    <button onClick={() => onSearch()}>Enter</button>
                    </div>
                </div>
                { loading ? // below loops over skeleton loading state 10 times as 10 results produced
                     new Array(10).fill(0).map((_, index) => (
                        <><div className="post" key={index}>
                        <div className="post__title">
                        <div className="post__title--skeleton"></div>
                        </div>
                        <div className="post__body">
                        <p className="post__body--skeleton"></p> 
                        </div>
                    </div></>
                     ))
                     : <>
                    {posts.map((post)=>
                    (<div className="post" key={post.id}>
                        <div className="post__title">{post.title}</div> 
                        <p className="post__body">{post.body}</p>
                    </div>)
                    )}
                </> }
                
                
                
                
            </div>
        </div>
    </>
    );
}

export default Posts;
//add the () around the div in the map function means it retruns it