import React from 'react';
import Navbar from './Navbar.component';
import wave from '../styles/images/wave.svg';
import '../styles/style.css';

class HomePage extends React.Component {
    render() {
        return (
            <div>
                <Navbar />
                <div className="header">
                    <div className="movie-details">
                        <header>Latest</header>
                        <h1>Honest Thief 3: United</h1>
                        <h3>Action <span>|</span> 6.7 Rating</h3>
                    </div>
                    <div className="bottom_gradient"></div>
                </div>
                <div className="movie_list">
                    <img src={wave} className="footer_wave" alt="footer wave" />
                </div>
                <footer>
                    <div>
                        <h3>Stream<span>Me</span></h3>
                        <content>
                            <ul>
                                <li>
                                    <h1>Location</h1>
                                    <p>United Kingdom,<br />Dorset,<br />Bournemouth</p>
                                </li>
                                <li>
                                    <h1>Contact Details</h1>
                                    <p>Email - saxonjude@gmail.com<br />Phone - 07954******</p>
                                </li>
                                <li>
                                    <h1>Portfolio</h1>
                                    <p>www.saxondp.me</p>
                                </li>
                            </ul>
                        </content>
                        <div className="links">
                            <ul>
                                <li>
                                    <i class="fab fa-github-square"></i>
                                    <i class="fab fa-linkedin"></i>
                                    <i class="fab fa-codepen"></i>
                                    <i class="fab fa-dribbble"></i>
                                </li>
                                <li>
                                    <p>Designed and Coded by Saxon Du Plooy.</p>
                                </li>
                                <li>
                                    <p>Copyright @ 2020</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </footer>
            </div>
        );
    }
}

export default HomePage;
