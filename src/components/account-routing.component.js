import React from 'react';
import { Link } from 'react-router-dom';
import NavbarRed from './Navbar-red.component';

class AccountRouting extends React.Component {
    render() {
        return (
            <div>
                <NavbarRed />
                <div className="auth-body">
                    <div className="auth-route">
                        <div className="auth-left">
                            <section>
                                <Link to="/"><h1>Stream<span>Me</span></h1></Link>
                            </section>
                            <content>
                                <h1>Browse and Rate <br /> 
                                your Favorite Shows</h1>
                                <Link className="account-first-link" to="/sign-in">Sign In</Link>
                                <Link to="/sign-up">Sign Up</Link>
                                <Link to="/guest/profile">Browse as Guest</Link>
                                <i>Guests have limited access to features</i>
                                <div className="back-btn"><i class="fas fa-angle-left"></i><Link to="/">Back</Link></div>
                            </content>
                        </div>
                        <div className="auth-right"></div>
                    </div>
                </div>
            </div>
        );
    }
}

export default AccountRouting;
