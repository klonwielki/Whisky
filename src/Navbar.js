import { Link } from "react-router-dom"
import './navbar.css'

function Navbar(){
    return(
        <div className="Navbar">
            <Link className="Link" to="/"><p>Home</p></Link>
            <Link className="Link" to="/whiskies"><p>Whiskies</p></Link>
        </div>
    )
}
export default Navbar