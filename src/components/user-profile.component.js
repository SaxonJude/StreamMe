import React from 'react';
import { Link } from 'react-router-dom';
import NavbarRed from './Navbar-red.component';

class UserProfile extends React.Component {
    render() {
        return (
            <div>
                <NavbarRed />
                <div className="profile">
                    <div className="profile-container">
                        <div className="sidebar">
                            <div className="sidebar-content">
                                <ul>
                                    <Link to="/"><li><p>Home</p></li></Link>
                                    <Link to="/"><li className="sidebar-active"><p>Users Profile <i class="fas fa-arrow-right"></i></p></li></Link>
                                    <Link to="/"><li><p>Trending</p></li></Link>
                                    <Link to="/"><li><p>Series</p></li></Link>
                                    <Link to="/"><li><p>Films</p></li></Link>
                                    <Link to="/latest"><li><p>Latest</p></li></Link>
                                </ul>
                            </div>
                            <span className="white-bar"></span>
                            <div className="sidebar-wave"></div>
                        </div>
                            <div className="profile-info">
                                <div className="profile-card">
                                    <div className="user-card-image"></div>
                                    <div className="card-text">
                                        <h1>Welcome User.</h1>
                                        <Link to="/">Sign Out</Link>
                                    </div>
                                </div>
                                <div className="profile-stats">
                                    <ul>
                                        <li><span>0</span><p>Favorite Movies</p></li>
                                        <li><span>0</span><p>Favorite TV Shows</p></li>
                                        <li><span>0</span><p>Rated Movies</p></li>
                                        <li><span>0</span><p>Rated TV Shows</p></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="profile-movie-info">
                                <ul>
                                    <li>
                                        <h1>Favorite Movies</h1>
                                        <div className="movie-box-test">Movies</div>
                                    </li>
                                    <li>
                                        <h1>Favorite TV Shows</h1>
                                        <div className="movie-box-test">Movies</div>
                                    </li>
                                    <li>
                                        <h1>Rated Movies</h1>
                                        <div className="movie-box-test">Movies</div>
                                    </li>
                                    <li>
                                        <h1>Rated Movies</h1>
                                        <div className="movie-box-test">Movies</div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                </div>
            </div>
        );
    }
}

export default UserProfile;
