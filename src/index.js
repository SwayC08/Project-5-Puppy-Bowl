import { createRoot } from "react-dom/client";
import { useState } from "react";

import Query from "./components/Query";
import Roster from "./components/Roster";

const Main = ()=> {

    return (
        <div>
            <Query />
            <Roster />
        </div>
    )
}

const app = document.getElementById("app");
let root = createRoot(app);
root.render(<Main />)