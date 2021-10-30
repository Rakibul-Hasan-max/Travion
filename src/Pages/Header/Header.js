import React from 'react';
import './Header.css';
import logo from '../../Images/logo.png'
import { Link } from 'react-router-dom';
// import useFirebase from '../Hooks/useFirebase';


const Header = () => {
    // const {user, logout} = useFirebase();
    return (
        <div>
            <div className="naved">
                <div>
                    <Link to ="/"><img className="logoname" src={logo} alt=""/></Link>
                </div>
                <nav>
                    <Link to ="/home">Home</Link>
                    <Link to ="/departments">Booking</Link>
                    <Link to ="/addService">AddService</Link>
                    <Link to ="/blog">ManageServices</Link>
                    <Link to ="/login">Login</Link>
                    {/* {user?.email && <button onClick={logout} className="btn btn-success" >Logout</button>} */}
                </nav>
            </div>
        </div>
    );
};


export default Header;
