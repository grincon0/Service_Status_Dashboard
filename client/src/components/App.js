import React, { Component } from 'react';
import Footer from './general/Footer/Footer';
import Header from './general/Header/Header';
import Wrapper from './general/Wrapper/Wrapper';
import Status from '../pages/Status';
import "./App.css"


class App extends Component {
    render() {
        return (
            <div>
                <Header />
                <Wrapper>
                    <Status />
                </Wrapper>
                <Footer>
                    <div className="footer-note">
                        <span >&copy; Startup Group</span>
                    </div>
                </Footer>
            </div>
        );
    }
}

export default App;