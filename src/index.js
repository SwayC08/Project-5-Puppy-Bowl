import { createRoot } from "react-dom/client";
import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { Query, Roster, Profile } from "./components";

const Main = ()=> {
    const [players, setPlayers]= useState([]);

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

    return (
        <BrowserRouter>
            <div>
                <nav className="Nav">
                    {/* <Link to="/" >Search</Link> */}
                    <Link to="/Roster" > Roster</Link>
                    {/* <Link to="/Roster:id" > Profile</Link> */}
                </nav>
                <Routes>
                    {/* <Route path="/" element={ <Query /> } /> */}
                    <Route path="/Roster" element={ <Roster playerProps= { players } /> } />
                    <Route path="/Roster/:id" element={ <Profile playerProps= { players }/> } />
                </Routes>
                {/* { <Roster  /> } */}
            </div>
        </BrowserRouter>
    )
}

const app = document.getElementById("app");
let root = createRoot(app);
root.render(<Main />)

