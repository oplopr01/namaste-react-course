<<<<<<< HEAD
import React from "react"
import {ReactDOM} from "react-dom/client"
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
=======
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
>>>>>>> 2a154504faf6c65ad14f9e8569c60b8803533953
root.render(<App/>)