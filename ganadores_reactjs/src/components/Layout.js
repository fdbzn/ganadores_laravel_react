import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

function Layout(props) {
  return (
    <React.Fragment>
        <Navbar />
        <div className="main_content">
          {props.children}

        </div>
        <Footer />
    </React.Fragment>
  );
}

export default Layout;
