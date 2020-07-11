import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import CalculatorView from './components/CalculatorView';
import DataView from './components/DataView';
import BottomNav from './components/BottomNav'
import CalculationModal from './components/CalculationModal';
import db from './components/DataBase'


class App extends Component {

  constructor(props) {
    super(props);
    this.state = { 
      calculatorViewVisible: true,
      dataViewVisible: false,
      modalVisible: false,
      result: '',
      calcs: [] ,//Add state for dexie.js
      animation: "flip", //Add state for Rodal
      width: 30,
      height: 30,
      measure:'rem'
     }
     this.handleClick = this.handleClick.bind(this)
     this.calculate = this.calculate.bind(this)
     this.show = this.show.bind(this)
     this.hide = this.hide.bind(this)
     this.save = this.save.bind(this)
     this.delete = this.delete.bind(this)
     this.clear = this.clear.bind(this)
  }

  componentDidMount() {
    db.table('calculation')
      .toArray()
      .then((calcs) => {
        this.setState({ calcs });
      });
  }

  handleClick(id) {
    switch (id.target.id) {
      case "calculator":
        this.setState(
          {
            calculatorViewVisible: true,
            dataViewVisible: false,
            modalVisible: false
          }
        )
        break;
      case "data":
        this.setState(
          {
            calculatorViewVisible: false,
            dataViewVisible: true,
            modalVisible: false
          }
        )
        break;
      default:      
      this.setState(
        {
          calculatorViewVisible: true,
          dataViewVisible: false,
          modalVisible: false
        }
      )
      
    }
  }

  calculate (){

    var max=document.getElementById("oneRM")
    var weight=document.getElementById("goalWeight")
    var reps=document.getElementById("goalReps")

    if (max.value>0 && weight.value>0 && !reps.value>0) {
        var loss_per_rep=max.value*.03
        var total_loss=max.value-weight.value
        var maxreps=Math.round((total_loss/loss_per_rep)+1)
        this.setState ({result: maxreps, modalVisible: true});
    }
    else if (max.value>0 && reps.value>0 && !weight.value>0) {
        var maxweight = Math.round(max.value-(max.value*((reps.value-1)*.03)))
        this.setState ({result: maxweight, modalVisible: true})
    }
    else {
        var warning = "Error. Just do 'fahves'"
        this.setState ({result: warning, modalVisible: true})
    };

  }

  show() {
    this.setState({ visible: true });
  }

  hide() {
    this.setState({ modalVisible: false });
  }

  save(){
    var max=document.getElementById("oneRM")
    var weight=document.getElementById("goalWeight")
    var reps=document.getElementById("goalReps")
    var timeStamp = new Date()
    var niceTimeStamp = timeStamp.toDateString()

    if (max.value>0 && weight.value>0 && !reps.value>0) {
     db.calculation.add({
        datetime: niceTimeStamp, 
        onerepmax: max.value, 
        goalreps: reps.value, 
        goalweight: weight.value, 
        calculatedreps: this.state.result, 
        calculatedweight: null
      });
      this.componentDidMount();

      this.setState({dataViewVisible: true, calculatorViewVisible: false, modalVisible: false})
    }
    else if (max.value>0 && reps.value>0 && !weight.value>0) {
      db.calculation.add({
        datetime: niceTimeStamp, 
        onerepmax: max.value, 
        goalreps: reps.value, 
        goalweight: weight.value, 
        calculatedreps: null, 
        calculatedweight: this.state.result
      });
      this.componentDidMount();
      this.setState({dataViewVisible: true, calculatorViewVisible: false, modalVisible: false});
    }
    else {this.setState({dataViewVisible: false, calculatorViewVisible: true, modalVisible: false});}
}

  delete ({currentTarget}) {
    var num = parseInt(currentTarget.id)
    db.calculation.delete(num);
    this.setState({dataViewVisible: true, calculatorViewVisible: false, modalVisible: false});
    this.componentDidMount();
  }

  clear(){
    db.calculation.clear();
    this.setState({dataViewVisible: true, calculatorViewVisible: false, modalVisible: false});
    this.componentDidMount();
  }

  
  render() {
  return (

    <div className="App">
  
      <Header/>

      <CalculatorView 
        visible={this.state.calculatorViewVisible} 
        calculate={this.calculate} 
        show={this.show}/>

      <DataView 
        visible={this.state.dataViewVisible}
        calcs={this.state.calcs}
        delete={this.delete}
        clear={this.clear}/>

      <CalculationModal 
        visible={this.state.modalVisible} 
        result={this.state.result} 
        animation={this.state.animation}
        width={this.state.width} 
        height={this.state.height} 
        measure={this.state.measure}
        hide={this.hide} 
        save={this.save}/>

      <BottomNav 
        handleClick={this.handleClick}/>

    </div>
  );
}
}

export default App;
