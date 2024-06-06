import React, { useContext } from 'react'
import './Navbar.css'
import { CoinContext } from '../../context/CoinContext';
// import { symlink } from 'fs';
import { Link } from 'react-router-dom';

const Navbar = () => {

    const { setCurrency } = useContext(CoinContext);

    const currencyHandler = (event) => {
        switch (event.target.value) {
            case "usd": {
                setCurrency({ name: "usd", symbol: "$" })
                break;
            }
            case "inr": {
                setCurrency({ name: "inr", symbol: "₹" })
                break;
            }
            case "eur": {
                setCurrency({ name: "eur", symbol: "€" })
                break;
            }
            default: {
                setCurrency({ name: "usd", symbol: "$" })
                break;
            }
        }
    }

    return (
        <div className="navbar">
            <img src="" alt="" />
            <ul>
                <Link to={'/'}><li>Home</li></Link>
                <li>Features</li>
                <li>Pricing</li>
            </ul>
            <div className='nav-right'>
                <select onChange={currencyHandler}>
                    <option value="usd">USD</option>
                    <option value="eur">EUR</option>
                    <option value="inr">INR</option>
                </select>
                <button>Sign Up</button>
            </div>
        </div>
    )
}

export default Navbar
