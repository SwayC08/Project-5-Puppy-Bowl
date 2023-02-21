import { createRoot } from "react-dom/client";
import { useState } from "react";

const Main = ()=> {

    return (
        <div>
            Hello!
        </div>
    )
}

const app = document.getElementById("app");
let root = createRoot(app);
root.render(<Main />)