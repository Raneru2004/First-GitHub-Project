import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { createPost } from '../actions/postAction';

export default function PostForm() {
  return (
    <div>
        <h1>Add Post</h1>
        <form>
            <div>
                <label>Title: </label>
                <br/>
                <input type="text" name="title"
                value=""/>
            </div>
            <br/>
            <div>
                <label>Body: </label>
                <br/>
                <textarea name='body' value=""/>
            </div>
            <br/>
            <button type='submit'>Submit</button>
        </form>
    </div>
  )
}
