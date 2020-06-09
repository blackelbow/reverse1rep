import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
//import db from './DataBase'

class DataView extends Component {
constructor(props) {
    super(props);
    this.state = this.props.state;
}


    render() {

    var tableStyle = {
        width: '90%',
        textAlign: 'center',
        justifyContent: 'center',
        margin: '1rem'
    }

    var clearbuttonStyle ={
        textAlign: 'center',
        justifyContent: 'center',
        marginBottom: '5rem'
    }

    return ( 
    <div>
        {
            this.props.visible
            ?
            <div>

                <h2 style={{textAlign: "center"}}> Data </h2>

                <table style={tableStyle}>
                    <thead>
                        <tr>
                            <th>Date</th>
                            <th>One Rep Max Used</th>
                            <th>Reps</th>
                            <th>Weight</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>

                         {this.props.calcs.map((calc) => (
                
                            <tr key={calc.id}>
                                <td>{calc.datetime} </td>
                                <td>{calc.onerepmax} </td>
                                <td>{calc.calculatedreps}{calc.goalreps}</td>
                                <td>{calc.calculatedweight}{calc.goalweight}</td>
                                <td id={calc.id} onClick={this.props.delete}><FontAwesomeIcon icon={faTrash}/></td>
                            </tr>
                            ))}
                    </tbody>
                </table>
                <div className="container" style={clearbuttonStyle}>
                <button class="button-large" onClick={this.props.clear}>Clear Data</button>
                </div>
            </div>
            :<div></div>
        }
    </div>
     );
}
}

 
export default DataView;