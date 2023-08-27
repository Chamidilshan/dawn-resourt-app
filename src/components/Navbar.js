import { Component } from "react";
import "./navbarstyle.css";
import { MenuItems } from "./MenuItems";


class Navbar extends Component{
    state = {clicked:false};
    handleclick=()=>{
        this.setState({clicked:!this.state.clicked})
    }
    render(){
        return(
            <nav className="NavBarItems">
                <h1 className="navbar-logo">Dawn Resorts</h1>
                <div className="menu-icons">
                    <i onClick={this.handleclick} className={this.state.clicked ? "fas fa-times":"fas fa-bars"}></i>
                   
                </div>
                <ul className={this.state.clicked ? "nav-menu active":"nav-menu"}> 
                    {MenuItems.map((item,index)=>{
                        return(
                            <li key={index}><a className={item.cName} href={item.url}><i class={item.icon}></i>{item.title}</a></li>
                        )
                    })}
                    
                     
                </ul>
            </nav>
        );
    }
}
export default Navbar;