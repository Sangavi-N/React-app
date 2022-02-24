import React from 'react'

import axios from "axios"

function Axiosprops(props){
    const{title,body}=props

    return(
        <div>
            <h1>{title}</h1>
            <h3>{body}</h3>
        </div>
    )
}

export default Axiosprops