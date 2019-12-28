import React, { Component } from "react"
import {
    Route,
    NavLink,
    HashRouter
} from "react-router-dom"
import Info from "./Info"
import Registry from "./Registry"

class Main extends Component {
    render () {
        return (
            <div>
                <h1>Danielle Shriver and Billy Askew</h1>
                <ul className="header">
                    <li>
                        <NavLink to="/">Info</Navlink>
                    </li>
                    <li>
                        <NavLink to="/registry">Registry</Navlink>
                    </li>
                </ul>

            </div>
        )
    }
}