import { useState } from "react"



export const Header=()=>{

    let [btnText, setBtnText] = useState("login")
    return (
        <div className="header">
            <div id="logo"><h1>LOGO</h1> </div>
            <div id="links">
                <div><a href="http://">home</a></div>
                <div><a href="http://">About Us</a></div>
                <div><a href="http://">Contact us</a></div>
                <div><a href="http://">Cart</a></div>
                <button id="login-up" onClick={()=>{
                    return btnText==="login"? setBtnText("logOut"):setBtnText("login");
                }}>
                    {btnText}
                </button>
            </div>
        </div>
    )
}

