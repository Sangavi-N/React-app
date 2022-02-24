import React,{useState} from 'react'
import axios from 'axios'
import Axiosprops from './Axiosprops';

export default function Axiosmethod() {
    const [page, setPage] = useState({
        empty: [],
        isLoading: true,
        errors: null
      });
      axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((response) => {
        setPage({empty:response.data, isLoading:false});
        });

        return (

            <div>
            {!page.isLoading ? 
            page.empty.map(user => {
                console.log("user is ", user)
                    const { id, title, body } = user;
                    
         return(
            <div key={id}>
                <h2>{title}</h2>
                <p>{body}</p>
                <div>This is axios</div>
                <Axiosprops title={title} body = {body}/> 
            </div>
            
            )
         }):<div>No Elements are there</div>}
        </div>
          );
    
    }
