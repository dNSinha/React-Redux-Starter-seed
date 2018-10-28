import React from 'react';
import Header from './header/index';
import Footer from './footer/index';
import './App.css';

const App = () => (
    <div>
        <div className="header">
            <Header />
        </div>
        <div className="content">
            {/* {this.props.children} */}
        </div>
        <div className="footer">
            <Footer />
        </div>
    </div>
);

export default App;