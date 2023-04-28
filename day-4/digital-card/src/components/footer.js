import React from "react"
import twiter from "./images/Twitter Icon.png"
import facebook from "./images/Facebook Icon.png"
import instagram from "./images/Instagram Icon.png"
import linkedin from "./images/Linkedin Icon.png"
import github from "./images/GitHub Icon.png"

export default function Footer() {
    return (
        <footer className="footer">

            <img src={twiter} />
            <img src={facebook} />
            <img src={instagram} />
            <img src={linkedin} />
            <img src={github} />


        </footer>
    )
}