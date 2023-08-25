import { Component } from "react";
import "./navbarstyle.css";

class navbar extends Component{
    render(){
        return(
            <nav className="Navbaritems">
                <h1 className="navbar-logo">Trippy</h1>
                <ul className="nav-menu">
                        <li><Link>Home</Link></li>
                        <li></li>
                </ul>
            </nav>
        )
    }
}