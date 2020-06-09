import React, { Component } from 'react';
import Rodal from 'rodal';
import 'rodal/lib/rodal.css';


class CalculationModal extends Component {
    constructor(props) {
        super(props);
        this.state=this.props.state
    }


    render() { 

        var divStyle = {
            textAlign: 'center',
            justifyContent: 'center',
            
        }

        var buttonStyle = {
            marginRight: '3%'
        }

        return (  
        <div>
            {
                this.props.visible
                ? <div>
                    <Rodal 
                        visible={this.props.visible} 
                        onClose={this.props.hide} 
                        animation={this.props.animation}
                        width={this.props.width}
                        height={this.props.height}
                        measure={this.props.measure}
                    >
                    <div style={divStyle}>
                        <h2>Results</h2><hr></hr>
                        <h3 id="modalResult">{this.props.result}</h3><hr></hr>
                            <button onClick={this.props.hide} style={buttonStyle}>Close</button>
                            <button onClick={this.props.save}>Save</button>
                    </div>
                    </Rodal>
                </div>
                : <div></div>
            }
        </div> 
        );
    }
}
 
export default CalculationModal;