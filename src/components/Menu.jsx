import React from 'react';
import '../css/menu.css';
import { Link } from 'react-router-dom';

const Menu = () => {
    return(
        <>
        <div className="main-div">
            <header>Parentsalarm</header>
            <nav>
                <span className="student_detail">RAKESH KUMAR - VIII - E</span>
                <span className="logout"><i class="fa-solid fa-power-off"></i></span>
            </nav>
            <div className="menu-section">
                <div className="menu announce-section"><Link to="/announcement"><i class="fa-solid fa-bullhorn"></i></Link></div>
                <div className="menu homework-section"><Link to="/homework"><i class="fa-solid fa-pen"></i></Link></div>
                <div className="menu marks-section"><Link to=""><i class="fa-solid fa-star"></i></Link></div>
                <div className="menu content-section"><Link to=""><i class="fa-brands fa-youtube"></i></Link></div>
                <div className="menu notice-section"><Link to=""><i class="fa-regular fa-note-sticky"></i></Link></div>
                <div className="menu profile-section"><Link to=""><i class="fa-solid fa-user"></i></Link></div>
                <div className="menu settings-section"><Link to=""><i class="fa-solid fa-gear"></i></Link></div>
                <div className="menu classes-section"><Link to=""><i class="fa-solid fa-film"></i></Link></div>
                <div className="menu test-section"><Link to=""><i class="fa-solid fa-book"></i></Link></div>
            </div>
        </div>
        </>
    )
}

export default Menu;