import React from 'react';
import { Link } from 'react-router-dom';
import SearchBar from './search-bar.component';

class Navbar extends React.Component {
    render() {
        return (
            <div>
                <nav id="nav-1">
                    <div className="movie-list-1">
                        <div id="logo">Stream<span>Me</span></div>
                        <ul className="nav-list-1">
                            <Link to="/">Home</Link>
                            <Link to="/">Series</Link>
                            <Link to="/">Films</Link>
                            <Link to="/">Trending</Link>
                            <Link to="/">Latest</Link>
                        </ul>
                    </div>
                    <div className="user-list-1">
                        <span>
                            <SearchBar />
                        </span>
                        <Link to="/explore"><i className="fas fa-compass"></i></Link>
                        <Link to="/account"><i className="fas fa-user"></i></Link>
                    </div>
                </nav>
            </div>
        );
    }
}

export default Navbar;
