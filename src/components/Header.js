import React from "react";
// import {Link} from "react-router-dom";
import { useNavigate } from "react-router-dom";
import bannerImg from "../images/restaurantfood.jpg"

const Header = () => {
    const navigate = useNavigate();

    const navigateToBooking = () =>{
        navigate("/booking");
    }

    return(
        <header className="header">
            <section>
                <div className="banner">
                    <h2>Little Lemon</h2>
                    <h3>Chicago</h3>
                    <p>We are a family owned Mediterraneran restaurant,focused on traditional recipes served with a modern twist.
                    </p>
                    <button aria-label="On Click" onClick={navigateToBooking}>Reserve Table</button>
                </div>
                <div className="banner-img">
                    <img src={bannerImg} alt=""/>
                </div>
            </section>
        </header>
    )
}

export default Header;