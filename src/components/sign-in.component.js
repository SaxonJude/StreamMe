import React from 'react';
import { Link } from 'react-router-dom';
import NavbarRed from './Navbar-red.component';

class SignIn extends React.Component {
    render() {
        return (
            <div>
                <NavbarRed />
                <div className="signin-body">
                    <div className="signin-route">
                        <div className="signin-left">
                            <content>
                                <h1>Sign In</h1>
                                <div className="links">
                                    <ul>
                                        <li><a href="https://github.com/SaxonJude"><i className="fab fa-github-square"></i></a></li>
                                        <li><a href="https://www.linkedin.com/in/saxon-du-plooy-058523171/"><i className="fab fa-linkedin"></i></a></li>
                                        <li><a href="https://codepen.io/SaxonJude"><i className="fab fa-codepen"></i></a></li>
                                        <li><a href="https://dribbble.com/SaxonJude/shots"><i className="fab fa-dribbble"></i></a></li>
                                    </ul>
                                </div>      
                                <form id="signin">
                                    <div className="sign-in-inputs">
                                        <input type="text" placeholder="Username"/>
                                        <input type="password" placeholder="Password"/>
                                    </div>
                                </form>
                                <div className="sign-in-btn"><Link to="/sign-in">Sign In</Link></div>
                                <i className="bottom-i">Guests have limited access to features</i>
                                <div className="back-btn"><i class="fas fa-angle-left"></i><Link to="/account">Back</Link></div>
                            </content>
                        </div>
                        <div className="signin-right"></div>
                    </div>
                </div>
            </div>
        );
    }
}

export default SignIn;
