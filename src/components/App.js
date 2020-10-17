import React from 'react';
import { Provider } from "react-redux";
import store from "../store";
import { BrowserRouter as Router, Route } from 'react-router-dom';
import '../styles/style.css'
import jwt_decode from "jwt-decode";
import setAuthToken from "../utils/setAuthToken";
import { setCurrentUser, logoutUser } from "../actions/authActions";

import Explore from './explore.component';
import Home from './home-page.component';
import AccountRouting from './account-routing.component';
import SignIn from './sign-in.component';
import SignUp from './sign-up.component';
import GuestProfile from './guest-profile.component';
import UserProfile from './user-profile.component';
import UpcomingPage from './upcoming.component';
import PopularPage from './popular.component';
import SearchResults from './layout/search-results.component';
import NowPlayingPage from './now-playing.component';
import TopRated from './top-rated.component';
import MovieDetails from './movie-details.component';
import Cast from './cast-details.component.js';


if (localStorage.jwtToken) {
    const token = localStorage.jwtToken;
    setAuthToken(token);
    const decoded = jwt_decode(token);
    store.dispatch(setCurrentUser(decoded));
    const currentTime = Date.now() / 1000;
    if (decoded.exp < currentTime) {
      store.dispatch(logoutUser());
      window.location.href = "./login";
    }
}

class App extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <div>
                    <Router>
                        <div>
                            <Route path="/" exact component={Home}/>
                            <Route path="/details/:mId/people/:id" exact component={Cast}/>
                            <Route path="/search-results/:id" exact component={SearchResults}/>
                            <Route path="/account" exact component={AccountRouting}/>
                            <Route path="/sign-in" exact component={SignIn}/>
                            <Route path="/sign-up" exact component={SignUp}/>
                            <Route path="/guest/profile" exact component={GuestProfile}/>
                            <Route path="/user/profile/:id" exact component={UserProfile}/>
                            <Route path="/explore" exact component={Explore}/>
                            <Route path="/upcoming" exact component={UpcomingPage}/>
                            <Route path="/popular" exact component={PopularPage}/>
                            <Route path="/now-playing" exact component={NowPlayingPage}/>
                            <Route path="/top-rated" exact component={TopRated}/>
                            <Route path="/search-results/movie-details/:id" exact component={MovieDetails}/>
                            <Route path="/user/profile/movie-details/:id" exact component={MovieDetails}/>
                            <Route path="/movie-details/:id" exact component={MovieDetails}/>
                        </div>
                    </Router>
                </div>
            </Provider>
        );
    }
}

export default App;
