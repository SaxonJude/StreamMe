import React from 'react';
import { Link } from 'react-router-dom';
import NavbarRed from './Navbar-red.component';

class SeriesPage extends React.Component {
    render() {
        return (
            <div>
                <NavbarRed />
                <div className="profile">
                    <div className="explore-wave-bot"></div>
                    <div className="profile-container">
                        <div className="sidebar">
                        <div className="sidebar-content">
                                <ul>
                                    <Link to="/"><li><p>Home</p></li></Link>
                                    <Link to="/explore"><li><p>Explore</p></li></Link>
                                    <Link to="/trending"><li><p>Trending</p></li></Link>
                                    <Link to="/series"><li className="sidebar-active"><p>Series<i class="fas fa-arrow-right"></i></p></li></Link>
                                    <Link to="/films"><li><p>Films</p></li></Link>
                                    <Link to="/latest"><li><p>Latest</p></li></Link>
                                </ul>
                            </div>
                            <span className="white-bar"></span>
                            <div className="sidebar-wave"></div>
                        </div>
                        <div className="explore-content">
                            <h1>Discover Series</h1>
                            <div className="newrelease-carousels">
                                <section className="1"></section>
                                <section className="2"></section>
                            </div>
                            <div className="page-buttons">
                                <button><i class="fas fa-angle-left"></i></button>
                                <button><i class="fas fa-angle-right"></i></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default SeriesPage;
