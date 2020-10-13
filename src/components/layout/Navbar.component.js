import React from 'react';
import { Link } from 'react-router-dom';
import SearchBar from './search-bar.component';

class Navbar extends React.Component {
    state = { navBackground: false, toggle: false, isMobile: false };

    componentDidMount() {
        document.addEventListener("scroll", () => {
            const scroll = window.scrollY;

          if(scroll > 0) {
            this.setState({ navBackground: true });
          } else {
            this.setState({ navBackground: false});
          }
        });

        window.addEventListener('resize', () => {
            this.setState({
                isMobile: window.innerWidth <= 900
            });
        }, false);
    }

      onHamburgerClick = e => {
          const toggle = !this.state.toggle;
        this.setState({ toggle });
      }

    render() {
        const isMobile = this.state.isMobile && this.state.toggle ? 'mobile' : '';
        return (
            <div>
                <nav className={this.state.navBackground ? 'nav-1 active' : 'nav-1'}>
                    <div className="movie-list-1">
                        <Link to="/" className="logo">Stream<span>Me</span></Link>
                        <ul>
                            <Link to="/">Home</Link>
                            <Link to="/upcoming">Upcoming</Link>
                            <Link to="/popular">Popular</Link>
                            <Link to="/now-playing">Now Playing</Link>
                            <Link to="/top-rated">Top Rated</Link>
                        </ul>
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
                </nav>
            </div>
        );
    }
}

export default Navbar;
