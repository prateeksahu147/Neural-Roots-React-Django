import React from "react"
import { Link } from "react-router-dom"
import "../../styles/WorkspaceStyle.css"
import { Nav, Button} from "react-bootstrap"
import companyLogo from "../../static/workspace-static/NeuralRootsLogo.png";

const SideNavbar = ({props}) =>{

  return(
        <div>
            <Nav>
                <div className="sidebar">
                <label><img src={companyLogo} className="img-fluid"/></label>
                {props.map((link) => {
                    return (
                            <Link id="menu" key={link.RouteID} to = {link.Routes} >
                            {link.RouteDisplayedName}
                            </Link>
                    );
                })}
                <Link state="active" id="logout" to="">Logout</Link>
                </div>
            </Nav>
        </div>
        )
}


export default SideNavbar

