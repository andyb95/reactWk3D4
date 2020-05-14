import React, {Component} from 'react';
import './App.css';
import data from './data'
import Person from './components/Person'

class App extends Component {

  constructor(){
    super()
    this.state={
      person: data,
      currentPerson: 0
    }
    this.handlePrevious=this.handlePrevious.bind(this)
    this.handleNext=this.handleNext.bind(this)
  }

  // componentDidMount(){
  //   this.setState({})
  // }

  handlePrevious(){
    if (this.state.currentPerson === 0){
      this.setState({currentPerson: 24})
    } else {
      this.setState({currentPerson: this.state.currentPerson-1})
    }
  }

  handleNext(){
    if (this.state.currentPerson===  24){
      this.setState({currenctPerson: 0})
    } else {
      this.setState({currentPerson: this.state.currentPerson+1})
    }
  }

  render(){
    const person=this.state.person.map((element, index)=> {
      if (this.state.currentPerson === index){
        return <div>
        <Person key = {index} id ={element}/>
      </div>
      }
      
    })
    return (
      <div className="App">
        <div className="header">
          <span>Home</span>
        </div>

        <div className="body">
          <span>{this.state.currentPerson+1}/25</span>
          {person}
        </div>

        <div>
          <button onClick={this.handlePrevious}>Previous</button>
          <button onClick={this.handleNext}>Next</button>
        </div>
      </div>
    );
  }
}

export default App;
