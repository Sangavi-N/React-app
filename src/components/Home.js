import React from 'react'
import {Link} from 'react-router-dom'   

function Home(){
    return(
        <div>
             <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/axios">Axios</Link></li>
           </ul>
            <h1>This is home</h1>
            <p>This is home paragraph</p>
        </div>
    )
}

export default Home