import { useState } from "react"
import React from 'react'
import './info.css'
 import logo from '../../assets/profile.png'

export default function Info() {
    return(
    
    <div className="info">
        <div className="info--picture">
            
                <div className="info--box">
                    <h1>Adam Casey Pastrana</h1>
                    <p className="role">Front End Developer</p>
                    <p>adamcaseypastrana@gmail.com</p>

                    <a href="mailto:adamcaseypastrana@gmail.com">
                    <button className="btn--email"> <i class="fa fa-envelope" aria-hidden="true"></i> Email </button>
                    </a>
                    <a href="https://facebook.com/adamcaseypastrana">
                    <button className="btn--linkedin"> <i class="fa fa-linkedin" aria-hidden="true"></i> LinkedIn</button></a>
                    </div> 
        </div>      
    </div>

            
    )
}