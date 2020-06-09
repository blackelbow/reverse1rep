import React, { Component } from 'react';

class Header extends Component {

    render() { 

        var headerStyle = {
            textAlign: 'center',
            backgroundColor: '#9b4dca',
          }

        return (<header className="App-header" style={headerStyle}><h1 style={{color:"white"}}>Reverse 1 Rep Max</h1></header>);
    }
}
 
export default Header;