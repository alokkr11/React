import React from "react"
import pic from "./images/Rectangle 90.png"


export default function Header() {
    return (
        <header>
            <img src={pic} className="header-img" />
        </header>
    )
}