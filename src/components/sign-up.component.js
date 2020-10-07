import React from 'react';
import { Link } from 'react-router-dom';
import NavbarRed from './Navbar-red.component';

class SignUp extends React.Component {
    render() {
        return (
            <div>
                <NavbarRed />
                <div className="signup-body">
                    <div className="signup-route">
                        <div className="signup-left">
                            <content>
                                <h1>Sign Up</h1>
                                <div className="links">
                                    <ul>
                                        <li><a href="https://github.com/SaxonJude"><i className="fab fa-github-square"></i></a></li>
                                        <li><a href="https://www.linkedin.com/in/saxon-du-plooy-058523171/" ><i className="fab fa-linkedin"></i></a></li>
                                        <li><a href="https://codepen.io/SaxonJude"><i className="fab fa-codepen"></i></a></li>
                                        <li><a href="https://dribbble.com/SaxonJude/shots"><i className="fab fa-dribbble"></i></a></li>
                                    </ul>
                                </div>
                                <form id="signup">
                                    <div className="sign-up-inputs">
                                        <input type="text" placeholder="Username"/>
                                        <input type="email" placeholder="Email"/>
                                        <input type="password" placeholder="Password"/>
                                    </div>
                                </form>
                                <div className="sign-up-btn"><Link to="/sign-up">Sign In</Link></div>
                                <i className="bottom-i">Guests have limited access to features</i>
                                <div className="back-btn"><i class="fas fa-angle-left"></i><Link to="/account">Back</Link></div>
                            </content>
                        </div>
                        <div className="signup-right"></div>
                    </div>
                </div>
            </div>
        );
    }
}

export default SignUp;
