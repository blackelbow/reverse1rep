import React, {Component} from 'react';

class BottomNav extends Component {
    constructor(props) {
        super(props);
        this.state = this.props.state;
    }


    render() { 

        var containerStyle = {
            margin: "0",
            marginTop: "5px",
            padding: "0",
            position: "fixed",
            width: "100%",
            bottom: "0",
            backgroundColor: "#9b4dca",
        }
    
        var ulStyle = {
            listStyleType: "none",
            width: "auto",
            textAlign: 'center',
            height: "100%",
        }
    
        var li1Style = {
            display: "inline",
            width: "50%",
            height: "100%",
            borderRight: "1px solid #fff",
            textAlign: 'center', 
        }
    
        var li2Style = {
            display: "inline",
            width: "50%",
            borderLeft: "1px solid #fff",
            height: "100%",
            textAlign: 'center',
        }
    
        var aStyle = {
            color: "#fff",
            fontWeight: 'bold',
            height: "100%",
            width: "100%",
            paddingLeft: "10%",
            paddingRight: "10%",
            paddingBottom: "10%",
        }

        return ( 
            <div className="container" style={containerStyle}>
                <ul style={ulStyle}>
                    <li style={li1Style}><a style={aStyle} href="#calculator" id="calculator" onClick={this.props.handleClick}>CALCULATOR</a></li>
                    <li style={li2Style}><a style={aStyle} href="#data" id="data" onClick={this.props.handleClick}>MY DATA</a></li>
                </ul>
            </div>
         );
    }
}
 
export default BottomNav;