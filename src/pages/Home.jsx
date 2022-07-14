
import React,{useEffect, useState} from 'react';
import {useParams, Link, useNavigate} from "react-router-dom"
import axios from 'axios';

const Home = () => {
    const [users, setUsers]=useState([]);
    let navigate=useNavigate();

    async function getAllUsers(){
        const {data} = await axios.get("https://jsonplaceholder.typicode.com/users");
        setUsers(data)
    }

    useEffect(()=>{

        getAllUsers();

    },[])

    return (
        <div className="container">
            <div className="row">
                <div className="user-list">
                {users ? <>
                {users.map((user) => (
                    <div className="user" key={user.id}>
                    <div className="user-card" onClick={()=>navigate(`/${user.id}`)}>
                    <div className="user-card__container">
                        <h3>{user.name}</h3>
                        <p>
                        <b>Email:</b> {user.email}
                        </p>
                        <p>
                        <b>Phone:</b> {user.phone}
                        </p>
                        <p>
                        <b>Website:</b>
                        {user.website}
                        </p>
                    </div>
                    </div>
                </div>

                ))}
                </> : 
                <><div>loading...</div></>
                }    
                
                </div>
            </div>
        </div>
    );
}

export default Home;
