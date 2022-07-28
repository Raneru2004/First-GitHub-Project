import './App.css';
import { Component, useEffect } from 'react';
import { fetchPosts } from './actions/postAction';
import { useDispatch,useSelector } from 'react-redux';
import PostForm from './components/PostForm';

function App () {

// WE ARE GONNA BASICALLY ADD A POST TO THE POSTS THAT ARE DISPLAYED USING REDUX AND FETCH FROM POST ACTION

  const {posts, loading} = useSelector((state)=> state.post)

  const dispatch= useDispatch();

  useEffect(()=>{
    dispatch(fetchPosts())
  },[])

  if (loading) {
    return <h2> loading...</h2>
  }
  return (
    
      <div className="App">
        <PostForm/>
        <h1>Posts :</h1>
         {posts.map((post)=>(
          <div key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
          </div>
         ))} 
        
      </div>
  
  );
  
}

export default App;
