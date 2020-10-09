import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Navbar from './layout/Navbar.component';
import { HomeMovie } from './movie-item.component';
import wave from '../styles/images/wave.svg';
import '../styles/style.css';

import { APIKey } from '../APIKey';

const UPCOMING_API = `https://api.themoviedb.org/3/movie/upcoming?api_key=${APIKey}&language=en-US&page=1`;
const POPULAR_API = `https://api.themoviedb.org/3/movie/popular?api_key=${APIKey}&language=en-US&page=1`;
const NOWPLAYING_API = `https://api.themoviedb.org/3/movie/now_playing?api_key=${APIKey}&language=en-US&page=1`;
const TOPRATED_API = `https://api.themoviedb.org/3/movie/top_rated?api_key=${APIKey}&language=en-US&page=1`;

class HomePage extends React.Component {
    state = { movies: [], upcoming: [], popular: [], nowplaying: [], toprated: [] };
    
    componentDidMount() {
        const req1 = axios.get(UPCOMING_API);
        const req2 = axios.get(POPULAR_API);
        const req3 = axios.get(NOWPLAYING_API);
        const req4 = axios.get(TOPRATED_API);

        axios.all([req1, req2, req3, req4])
        .then(axios.spread((...responses) => {
            const upcoming = responses[0].data.results;
            const popular = responses[1].data.results;
            const nowplaying = responses[2].data.results;
            const toprated = responses[3].data.results;
            this.setState({ 
                upcoming: upcoming.slice(0, 9),
                popular: popular.slice(0, 9),
                nowplaying: nowplaying.slice(0, 9),
                toprated: toprated.slice(0, 9),
             });
        }));
    }
    
    render() {
        const upcoming = this.state.upcoming;
        const popular = this.state.popular;
        const nowplaying = this.state.nowplaying;
        const toprated = this.state.toprated;
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
                    <div className="movie-container">
                        <div className="home-carousel">
                            <h1><Link to="/upcoming">Upcoming</Link></h1>
                            <div>
                                {upcoming.length > 0 && upcoming.map(movie => {
                                    return (<HomeMovie key={movie.id} {...movie}/>);
                                })}
                            </div>
                        </div>
                        <div className="divide-line">
                            <span></span>
                        </div>
                        <div className="home-carousel">
                            <h1><Link to="/popular">Popular</Link></h1>
                            <div>
                                {popular.length > 0 && popular.map(movie => {
                                    return (<HomeMovie key={movie.id} {...movie}/>);
                                })}
                            </div>
                        </div>
                        <div className="divide-line">
                            <span></span>
                        </div>
                        <div className="home-carousel">
                            <h1><Link to="/now-playing">Now Playing</Link></h1>
                            <div>
                                {nowplaying.length > 0 && nowplaying.map(movie => {
                                    return (<HomeMovie key={movie.id} {...movie}/>);
                                })}
                            </div>
                        </div>
                        <div className="divide-line">
                            <span></span>
                        </div>
                        <div className="home-carousel">
                            <h1><Link to="/top-rated">Top Rated</Link></h1>
                            <div>
                                {toprated.length > 0 && toprated.map(movie => {
                                    return (<HomeMovie key={movie.id} {...movie}/>);
                                })}
                            </div>
                        </div>
                    </div>
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
                                    <i className="fab fa-github-square"></i>
                                    <i className="fab fa-linkedin"></i>
                                    <i className="fab fa-codepen"></i>
                                    <i className="fab fa-dribbble"></i>
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
