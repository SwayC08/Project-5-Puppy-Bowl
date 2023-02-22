import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const Roster =(props) =>{
    const [players, setPlayers]= useState([]);

    const { id } = useParams();

    async function fetchPlayerInfo(){
        try {
            const response = await fetch ("https://fsa-puppy-bowl.herokuapp.com/api/2301-FTB-MT-WEB-FT/players");
            const translatedData = await response.json();
            const actualData = translatedData.data
            const trueData = actualData.players
            setPlayers(trueData);

        } catch (error){
            console.error(error);
        }
    };

    useEffect(()=> {
        fetchPlayerInfo();
    }, []);

    return(
            <div className="Roster">
                <ol className="Name">{
                        !players.length ? <div>data loading</div> :
                        players.map((singleP, index) => {
                            return (
                                <li key={index} className="Single">
                                    <p> Name: {singleP.name} </p>
                                    <p> Breed: {singleP.breed}</p>
                                    {/* <p> Status: {singleP.status}</p> */}
                                    <button>More Details</button>
                                </li>
                            )
                        })
                    }
                </ol>
            </div>
    )
}

export default Roster;