import React from 'react';
import { Link } from 'react-router-dom';
import SearchBar from './search-bar.component';


class NavbarRed extends React.Component {
    render() {
        return (
            <div>
                <section className="nav-red">
                    <div className="movie-list">
                        <div id="logo"><Link to="/">Stream<span>Me</span></Link></div>
                    </div>
                    <div className="user-list">
                        <span>
                            <SearchBar />
                        </span>
                        <Link to="/explore"><i className="fas fa-compass"></i></Link>
                        <Link to="/account"><i className="fas fa-user"></i></Link>
                    </div>
                </section>
            </div>
        );
    }
}

export default NavbarRed;
