import React from "react"
import email from "./images/Mail.png"

export default function Main() {
    return (
        <main>
            <h1 className="main-name">Laura Smith</h1>
            <p className="main-desig">Frontend Developer</p>
            <p className="main-web">laurasmith.website</p>
            <div className="main-button"><img src={email} /> Email</div>
            <div className="main-content">
                <h3 className="about-heading">About</h3>
                <p className="about-content">
                    I am a frontend developer with a particular interest in making things simple and automating daily tasks. I try to keep up with security and best practices, and am always looking for new things to learn.
                </p>
                <h3 className="interest-heading">Interests</h3>
                <p className="interest-content">
                    Food expert. Music scholar. Reader. Internet fanatic. Bacon buff. Entrepreneur. Travel geek. Pop culture ninja. Coffee fanatic.
                </p>
            </div>
        </main>
    )
}