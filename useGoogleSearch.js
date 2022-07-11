import React, {useEffect, useState} from 'react';
import API_KEY from './keys';

const CONTEXT_KEY ="87431eadbbe9ed051"

const UseGoogleSearch = (term) => {
    const [data, setData] =useState(null)

    useEffect(()=>{
        const fetchData= async() => {
            fetch(`
            https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${CONTEXT_KEY}&q=${term}`)
            .then(respone => respone.json())
            .then( result => {
                setData(result)
            })
        }
        fetchData();

    }, [term]) //term is what people search in

    return { data }
}

export default UseGoogleSearch;
