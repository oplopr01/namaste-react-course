import React from "react"
import ReactDOM from "react-dom/client"
import {Header} from "./chapter5/Components/Header"
import Body from "./chapter5/Components/Body"


const App=()=>{
    return (
        <div className="app">
            <Header/>
            <Body/>
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App/>)