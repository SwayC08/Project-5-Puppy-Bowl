import { createRoot } from "react-dom/client";
import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { Roster, Profile } from "./components";

const Main = ()=> {
    const [players, setPlayers]= useState([]);
// add New player name
    const [newPName, setNewPName] = useState(""); 
// add New player breed    
    const [newPBreed, setNewPBreed] = useState("");
// delete player by name    
const [removeById, setRemoveById] = useState("");

// Fetch data from API  
    async function fetchPlayerInfo(){
        try {
            const response = await fetch ("https://fsa-puppy-bowl.herokuapp.com/api/2301-FTB-MT-WEB-FT/players");
            const translatedData = await response.json();
            setPlayers(translatedData.data.players)
        } catch (error){
            console.error(error);
        }
    };

    useEffect(()=> {
        fetchPlayerInfo();
    }, []);

// Fetch response from API for new player
    async function newPlayerReq(event){
        event.preventDefault();
        try {
            const response = await fetch ("https://fsa-puppy-bowl.herokuapp.com/api/2301-FTB-MT-WEB-FT/players", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    name: newPName,
                    breed: newPBreed
                })
            });
            const translatedData = await response.json();
            setPlayers([...players, translatedData.data.newPlayer])
        } catch(error){
            console.log(error);
        }
    }

// Fetch response from API to delete player (by id #   ex. 1480)
    async function removePlayer (event){
        event.preventDefault();
        fetch('https://fsa-puppy-bowl.herokuapp.com/api/2301-FTB-MT-WEB-FT/players'
            , {
                method: 'DELETE',
            });

            try {
                const response = await fetch(
                `https://fsa-puppy-bowl.herokuapp.com/api/2301-FTB-MT-WEB-FT/players/${ removeById }`,
                    {
                        method: 'DELETE',
                    }
                );
                const result = await response.json();
                console.log(result);
            } catch (error) {
                console.log(error); 
            }
    }

    return (
        <BrowserRouter>
{/* Title & Nav */}
            <div className="Main">
                <nav className="Nav">
                    <p className="title"> &#128054;  &#127923;</p>
                    <Link to="/" className="home" >
                        <button>Home</button>
                    </Link>
                </nav>
{/* Add Player */}
                <div className="Settings">
                    <form className="Add" onSubmit ={ newPlayerReq }  >
                        <h3>Add New Player:</h3>
                        <span>Name:  
                            <input onChange= {(event)=>{
                                    setNewPName(event.target.value)
                                }} type="text">
                            </input>
                        </span>
                        <span>Breed: 
                            <input onChange= {(event)=>{
                                    setNewPBreed(event.target.value)
                                }} type="text">
                            </input>
                        </span>
                        <button type="submit">Submit</button>
                    </form>
{/* Delete Player */}
                    <form className="Delete" onSubmit ={ removePlayer }  >
                        <h3>Remove Player: </h3>
                        <span>ID:  
                            <input onChange= {(event)=>{
                                    setRemoveById(event.target.value)
                                }} type="text">
                            </input>
                        </span>
                        <button type="submit">Delete</button>
                    </form> 
                </div>               
                <Routes>
{/* Homepage*/}                    
                    <Route path="/" element={ 
                        <Roster playerProps= { players } /> } 
                    />
{/* Profile*/}                      
                    <Route path="/players/:id" element={ 
                        <Profile playerProps= { players }/> } 
                    />
                </Routes>
            </div>
        </BrowserRouter>
    )
}

const app = document.getElementById("app");
let root = createRoot(app);
root.render(<Main />)

