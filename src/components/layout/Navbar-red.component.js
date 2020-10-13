import React from 'react';
import { Link } from 'react-router-dom';
import SearchBar from './search-bar.component';

class NavbarRed extends React.Component {
    state = { toggle: false, isMobile: false };

    componentDidMount() {
        window.addEventListener('resize', () => {
            this.setState({
                isMobile: window.innerWidth <= 900
            });
        }, false);
    }

    onHamburgerClick = () => {
        const toggle = !this.state.toggle;
        this.setState({ toggle });
    }

    render() {
        const isMobile = this.state.toggle ? 'mobile' : '';
        return (
            <div>
                <section className="nav-red">
                    <div className="movie-list">
                        <Link className="logo" to="/">Stream<span>Me</span></Link>
                    </div>
                    <div className="user-list">
                        <span>
                            <SearchBar />
                        </span>
                        <Link to="/explore"><i className="fas fa-compass"></i></Link>
                        <Link to="/account"><i className="fas fa-user"></i></Link>
                    </div>
                    <div className="hamburger" onClick={this.onHamburgerClick}><i class="fas fa-bars"></i></div>
                    <div className={`footer_partial ${isMobile}`} >
                        <Link to="/"><i class="fas fa-home"></i></Link>
                        <Link to="/explore"><i className="fas fa-compass"></i></Link>
                        <Link to="/user/account"><i className="fas fa-user"></i></Link>
                    </div>
                </section>
            </div>
        );
    }
}

export default NavbarRed;
