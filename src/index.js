import { createRoot } from "react-dom/client";
import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { Roster, Profile, NewPlayer, TitleNav, DeletePlayer } from "./components";

const Main = ()=> {
    const [players, setPlayers]= useState([]);
    const [newPName, setNewPName] = useState("");   
    const [newPBreed, setNewPBreed] = useState("");  
    const [newPUrl, setNewPUrl] = useState("");  
    const [removeById, setRemoveById] = useState("");

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

    return (
        <BrowserRouter>
            <div className="Main">
                <TitleNav />
                <div className="Settings">
                    <NewPlayer players={ players } setPlayers={ setPlayers } newPName={ newPName } setNewPName={ setNewPName } newPBreed={ newPBreed } setNewPBreed={ setNewPBreed } newPUrl={ newPUrl } setNewPUrl={ setNewPUrl }  />

                    <DeletePlayer players={ players } setPlayers={ setPlayers } removeById={ removeById } setRemoveById={ setRemoveById } />
                </div>
                <Routes>                   
                    <Route path="/" element={ 
                        <Roster 
                            playerProps= { players } 
                        /> } 
                    />                      
                    <Route path="/:id" element={ 
                        <Profile 
                            playerProps= { players }
                        /> } 
                    />
                </Routes>
            </div>
        </BrowserRouter>
    )
}

const app = document.getElementById("app");
let root = createRoot(app);
root.render(<Main />)