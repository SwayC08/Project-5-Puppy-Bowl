import { useState} from "react";
import { Link } from "react-router-dom";


const Roster =(props) =>{
    // console.log(props);
    const { playerProps } = props;
    const [inputName, setInputName] = useState("");
    const [inputBreed, setInputBreed] = useState("");

    let filterR = playerProps.filter((singleP)=>{
            let lowCase = singleP.name.toLowerCase();
            let lowCased = singleP.breed.toLowerCase();
            // console.log(lowCase);
            return (
                lowCase.includes(inputName.toLowerCase()) && lowCased.includes(inputBreed.toLowerCase())
                )
        }
    )


    return(
            <div className="Roster">
                <div className="Query">
                    <span>Name:  <input onChange= {(event)=>{
                        setInputName(event.target.value)
                    }} type="text"></input></span>
                    <span>Breed: <input onChange= {(event)=>{
                        setInputBreed(event.target.value)
                    }} type="text"></input></span>
                </div>
                {/* <Link to={ <Search playerProps= { players }/> }></Link> */}
                {/* <Search nameProps = { inputName }/> */}
                <ol className="Name">{
                        filterR.length ? 
                        filterR.map((singleP, index) => {
                            return (
                                <li key={index} className="Single">
                                    <p> Name: {singleP.name} </p>
                                    <p> Breed: {singleP.breed}</p> 
                                    <Link to={`/${index}`}>
                                        <button>More Info</button>
                                        {/* {singleP.name} */}
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
