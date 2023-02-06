import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Context } from "../Context"

function Header() {

    const { cartItems } = useContext(Context)

    return (
        <header>
            <Link to="/"><h2>PicSome</h2></Link>
            <Link to="/cart"> <img src={`./images/${cartItems.length ? "shoopingfill.png" : "shooping.png"}`} alt="" /></Link>
        </header>
    )
}


export default Header