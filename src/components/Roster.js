import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Roster =(props) =>{
    console.log(props);
    return(
            <div className="Roster">
                <ol className="Name">{
                        props.playerProps.length ? 
                        props.playerProps.map((singleP, index) => {
                            return (
                                <li key={index} className="Single">
                                    <p> Name: {singleP.name} </p>
                                    <p> Breed: {singleP.breed}</p> 
                                    <Link to={`/Roster/${index}`}>
                                        {singleP.name}
                                    </Link>
                                </li>
                            )
                        }) : <div>data loading</div> 
                    }
                </ol>
            </div>
    )
}

export default Roster;

 {/* <Link to={"/Roster/" + index}>{singleP.name}</Link> */}

// !props.playerProps.length ? <div>data loading</div> :