import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";


// export function fetchPosts(){
//     return async function(dispatch){
//         await fetch("https://jsonplaceholder.typicode.com/posts")
//             .then((res) => res.json())
//             .then((posts) =>
//                 dispatch({
//                     type: FETCH_POSTS,
//                     payload: posts,
//                 })
//             );
//     }
// };

// export async function fetchPosts() {
//   const data = await fetch("https://jsonplaceholder.typicode.com/posts")
//   const response= await data.json();
//   console.log(response)
//   return response;
// }

export const fetchPosts= createAsyncThunk("posts/fetchPosts", async()=>{
  return fetch("https://jsonplaceholder.typicode.com/posts").then((res)=>res.json());
})

export const createPost= createAsyncThunk("posts/crreatePost", async({values})=>{
  return fetch("https://jsonplaceholder.typicode.com/posts", {
    method:"POST",
    headers: {
      Accept : "application/json",
      "Content-type": "application/json"
    },
    body:JSON.stringify({
      title:values.title,
      body:values.body
  })
  }).then((res)=>res.json());
})

const postSlice=createSlice({
  name:"posts",
  initialState:{
    posts:[],
    loading:false
  },
  extraReducers: {
    [fetchPosts.pending] : (state, action) =>{
      state.loading =true;
    },
    [fetchPosts.fulfilled]:(state, action)=>{
      state.loading=false;
      state.posts=action.payload;
    },
    [fetchPosts.rejected]:(state,action)=>{
      state.loading=false;
    },
    [createPost.pending] : (state, action) =>{
      state.loading =true;
    },
    [createPost.fulfilled]:(state, action)=>{
      state.loading=false;
      state.posts=[action.payload];
    },
    [createPost.rejected]:(state,action)=>{
      state.loading=false;
    },
  },
});

export default postSlice.reducer;
