import { createRoot } from "react-dom/client";
import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import { Query, Roster } from "./components";

const Main = ()=> {

    return (
        <BrowserRouter>
            <div>
                <nav className="Nav">
                    <Link to="/" >Search</Link>
                    <Link to="/Roster" > Roster</Link>
                </nav>
                <Routes>
                    <Route path="/" element={ <Query /> } />
                    <Route path="/Roster" element={ <Roster  /> } />
                </Routes>
                { <Roster  /> }
            </div>
        </BrowserRouter>
    )
}

const app = document.getElementById("app");
let root = createRoot(app);
root.render(<Main />)


// playerProps = {players}