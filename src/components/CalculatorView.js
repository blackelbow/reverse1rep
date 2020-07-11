import React, {Component} from 'react';


class CalculatorView extends Component {
    constructor(props) {
        super(props);
        this.state = this.props.state;
    }

    render() {

    var inputStyle = {
        position: 'sticky',
        width: '50%',
        textAlign: 'center',
        justifyContent: 'center',
        height: '10rem',
        marginBottom: '25rem', 
        marginTop: '5rem',
        paddingBottom: '5rem'
        
    }

    return ( 
        <div>
                { this.props.visible
                ?<div className="container" style={inputStyle}>

                <form>
                    <fieldset>
                        <label for="oneRM">Enter One Rep Max (Lbs)</label>
                        <input type="number" id="oneRM" min="1" required></input>
                        <p>THEN</p>
                        <label for="goalWeight">Enter Goal Weight</label>
                        <input type="number" id="goalWeight" min="1"></input>
                        <p>OR</p>
                        <label for="goalReps">Enter Goal Reps</label>
                        <input type="number" id="goalReps" min="1" max="30"></input>
                    </fieldset>
                </form>

                <button class="button-large" onClick={this.props.calculate}>Calculate</button>

                </div>
                : <div></div>
                }
            
        </div>
        );
    }
}
 
export default CalculatorView;
