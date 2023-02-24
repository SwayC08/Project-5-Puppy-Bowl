import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Roster =(props) =>{
    const { playerProps } = props;

{/* Search (name & breed) */}    
    const [inputName, setInputName] = useState("");
    const [inputBreed, setInputBreed] = useState("");

{/* Filter Search (name & breed) */}
    let filterR = playerProps.filter((singleP)=>{
            let lowCase = singleP.name.toLowerCase();
            let lowCased = singleP.breed.toLowerCase();
            return (
                lowCase.includes(inputName.toLowerCase()) && lowCased.includes(inputBreed.toLowerCase())
                )
        }
    )
{/* start of visuals */}
    return(
            <div className="Roster">
{/* Search Bar */}
                <div className="Query">
                    <h3>Search By:</h3>
                    <span>Name:  <input onChange= {(event)=>{
                        setInputName(event.target.value)
                    }} type="text"></input></span>
                    <span>Breed: <input onChange= {(event)=>{
                        setInputBreed(event.target.value)
                    }} type="text"></input></span>
                </div>
{/* Roster */}                
                <ol className="Name">{
                        filterR.length ? 
                        filterR.map((singleP, index) => {
                            return (
                                <li key={ singleP.name } className="Single">
{/* Photo */}                                    
                                    <p>{ <img className="Photos" src={singleP.imageUrl}/> }</p>
{/* Name*/}                                     
                                    <p> {singleP.name} </p>
{/* Breed*/}                                     
                                    <p> Breed: {singleP.breed} </p>
{/* Link button*/}                                    
                                    <Link to={`/players/${ index }`}>
                                        <button>More Info</button>
                                    </Link>
                                </li>
                            )
                        }) : <div>No Data Available</div>
                    }
                </ol>
            </div>
    )
}

export default Roster;

 {/* <Link to={"/Roster/" + index}>{singleP.name}</Link> */}

// !props.playerProps.length ? <div>data loading</div> :

// value= { inputName }
