import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import '../styles/style.css'

import EditUser from './edit-user.component';
import Explore from './explore.component';
import HomePage from './home-page.component';
import AccountRouting from './account-routing.component';
import SignIn from './sign-in.component';
import SignUp from './sign-up.component';
import GuestProfile from './guest-profile.component';
import UserProfile from './user-profile.component';
import MovieDetails from './movie-details.component';
import counter from './counter';

class App extends React.Component {
    render() {
        return (
            <Router>
                <div>
                    <Route path="/" exact component={HomePage}/>
                    <Route path="/counter" exact component={counter}/>
                    <Route path="/explore" exact component={Explore}/>
                    <Route path="/account" exact component={AccountRouting}/>
                    <Route path="/sign-in" exact component={SignIn}/>
                    <Route path="/sign-up" exact component={SignUp}/>
                    <Route path="/guest/profile" exact component={GuestProfile}/>
                    <Route path="/user/profile" exact component={UserProfile}/>
                    <Route path="/details/:id" exact component={MovieDetails}/>
                    <Route path="/edit/:id" exact component={EditUser}/>
                </div>
            </Router>
        );
    }
}

export default App;
