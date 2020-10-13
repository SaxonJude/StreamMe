import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from './layout/Navbar.component';
import wave from '../styles/images/wave.svg';
import { fetchMovie, getTrailer, fetchReview, fetchUpcoming, fetchPopular, fetchNowplaying, fetchToprated, loading } from '../actions';
import { connect } from 'react-redux';
import notfound from '../styles/images/notfound.jpg';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import UpComing from './carousels/carousel-upcoming.component';
import Popular from './carousels/carousel-popular.component';
import NowPlaying from './carousels/carousel-nowplaying.component';
import TopRated from './carousels/carousel-topRated.component';
import Spinner from './spinner.component';

const BACKDROP = 'https://image.tmdb.org/t/p/w1280';

class HomePage extends React.Component {
    state = { loading: false };

    componentDidMount() {
        this.setState({ loading: false });
        this.props.getTrailer('');
        this.props.fetchMovie('');
        this.props.fetchReview('');
        this.props.fetchUpcoming();
        this.props.fetchPopular();
        this.props.fetchNowplaying();
        this.props.fetchToprated();
        this.setState({ loading: true });
    }

    onClick = () => {
        console.log(this.props.loading);
    }

    render() {
        return (
            <div>
                <Navbar />
                <div className="header">
                    {this.state.loading === true ? <Swiper 
                        tag="section" wrapperTag="ul"  id="main_swiper"
                        autoplay={{
                            delay: 5000,
                            disableOnInteraction: false
                        }} 
                        a11y={{ enabled: true, prevSlideMessage: 'Previous slide', nextSlideMessage: 'Next slide' }}
                        slidesPerView={1} >
                            {this.props.upcoming.map(movie => {
                                return (
                                    <SwiperSlide id='swiper_item' key={`${movie.id}`} tag="li">
                                        <Link className="header-slide" to={`movie-details/${movie.id}`}>
                                            <div className="movie-details">
                                                <header>Latest</header>
                                                <h1 onClick={() => console.log(movie)}>{movie.title}</h1>
                                                <h3>{movie.release_date} <span>|</span> {movie.vote_average} Rating</h3>
                                            </div>
                                            <img src={`${BACKDROP}${movie.backdrop_path}`} alt={movie.title} />
                                            <div className="bottom_gradient"></div>
                                        </Link>
                                    </SwiperSlide>
                                )
                            })}
                    </Swiper> : <Spinner />}
                </div>
                <div className="movie_list">
                    <div className="movie-container">
                        <div className="home-carousel">
                            <h1><Link onClick={this.onClick}>Upcoming</Link></h1>
                            {this.state.loading === true ? <UpComing /> : <Spinner />}
                        </div>
                        <div className="divide-line">
                            <span></span>
                        </div>
                        <div className="home-carousel">
                            <h1><Link to="/popular">Popular</Link></h1>
                            {this.state.loading === true ? <Popular /> : <Spinner />}
                        </div>
                        <div className="divide-line">
                            <span></span>
                        </div>
                        <div className="home-carousel">
                            <h1><Link to="/now-playing">Now Playing</Link></h1>
                            {this.state.loading === true ? <NowPlaying /> : <Spinner />}
                        </div>
                        <div className="divide-line">
                            <span></span>
                        </div>
                        <div className="home-carousel">
                            <h1><Link to="/top-rated">Top Rated</Link></h1>
                            {this.state.loading === true ? <TopRated /> : <Spinner />}
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

const mapStateToProps = state => ({
    upcoming: state.movies.upcoming,
    popular: state.movies.popular,
    nowPlaying: state.movies.nowPlaying,
    topRated: state.movies.topRated,
    latest: state.movies.latest,
});

export default connect(mapStateToProps, { fetchMovie, getTrailer, fetchReview, fetchUpcoming, fetchPopular, fetchNowplaying, fetchToprated })(HomePage);
