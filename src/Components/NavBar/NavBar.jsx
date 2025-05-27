import { Link } from "react-router-dom"
import "./NavBar.css"
import { FaTimes, FaBars } from "react-icons/fa"
import { useState } from "react"
import logo from '../../assets/logo.png'
const NavBar = () => {
    const[click,setClick] = useState(false);

    const handleClick =()=>{
        setClick(!click);
    }
    const[color,setColor]=useState(false);
    const handleColor =()=>{
        if(window.scrollY >=200)
            setColor(true);
        else
        setColor(false);
    }

    window.addEventListener("scroll",handleColor)

    return (
        <nav className={color ? "color" : ""}>
            <div className="logo">
             <Link to='/'>   <img src={logo} alt="" /></Link>
            </div>
            <div className={click ? "menu active" : "menu"}>
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/product">Products</Link>
                <Link to="/contact">Contact</Link>
            </div>
            <div className="hamburger" onClick={handleClick}>
           {
            click ? (
                 <FaTimes style={{ color: "#e42b2e"}} size={25} />
            ) : (
                 <FaBars style={{ color: "#e42b2e" }} size={25} />
            )
           }
            </div>

        </nav>
    )
}

export default NavBar