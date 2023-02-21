import { useState } from "react";

const Query =() =>{
    const [inputName, setInputName] = useState('')
    const [inputBreed, setInputBreed] = useState('')

    return(
            <div className="Query">
                <span>Name: </span>
                <input value= { inputName } type="text"></input>
                <span>Breed: </span>
                <input value= { inputBreed }type="text"></input>
                <button>Submit</button>
            </div>
    )
}

export default Query;

// add key={index}