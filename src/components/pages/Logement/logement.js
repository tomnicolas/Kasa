import React from "react"
import {useParams} from "react-router-dom";

function Logement() {

    const params = useParams()
    console.log(params)
    
    return (
        <div>
            <h1>Logement</h1>
        </div>
    )
}

export default Logement