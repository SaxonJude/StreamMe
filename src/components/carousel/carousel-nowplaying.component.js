import React, { Component } from 'react';
import { fetchNowplaying, fetchToprated } from '../../actions/index';
import { connect } from 'react-redux';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Link } from 'react-router-dom';
import notfound from '../../styles/images/notfound.jpg';
import 'swiper/swiper-bundle.css';

const IMG_API_SMALL = 'https://image.tmdb.org/t/p/w154';

class NowPlaying extends Component {
    componentDidMount() {
        this.props.fetchNowplaying();
    }

    setVoteCount = vote => {
        if(vote >= 7.5) {
            return 'green'
        } else if (vote >= 5) {
            return 'orange'
        } else {
            return 'red'
        }
    }

    render() {
        return (
            <div className="carousel-container-box">
                <Swiper 
                tag="section" wrapperTag="ul" navigation 
                spaceBetween={0} loop={true} grabCursor={true}
                breakpoints={{
                    1: { slidesPerView: 2, width: 400 }, 640: { slidesPerView: 3, width: 640 },
                    768: { slidesPerView: 4, width: 768 }, 1200: { slidesPerView: 6, width: 1200 },
                    1500: { slidesPerView: 7, width: 1500 } 
                    }}>
                    {this.props.nowPlaying.map(movie => {
                        return (
                            <SwiperSlide key={`${movie.id}`} tag="li">
                                <Link to={`movie-details/${movie.id}`}>
                                    <div className='swiper_item'>
                                        <div className="rating-star"><i className={`fas fa-star tag ${this.setVoteCount(movie.vote_average)}`}></i><p>{movie.vote_average}</p></div>
                                        <img src={movie.poster_path === null ? notfound : `${IMG_API_SMALL}${movie.poster_path}`} alt={movie.title} />
                                        <div className="card-text">
                                            <p>{movie.title}</p>
                                        </div>
                                    </div>
                                </Link>
                            </SwiperSlide>
                        )
                    })}
                </Swiper>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    nowPlaying: state.movies.nowPlaying,
});

export default connect(mapStateToProps, { fetchNowplaying })(NowPlaying);
