import React, { Component } from 'react';
import './App.css';
import {connect} from 'react-redux';
import {fetchSmurfs, postSmurfs} from '../actions'
class App extends Component {
  constructor(){
    super();

    this.state = {
      name: '',
      age: '',
      height: '',
      // id: '',
    
    }

  }

  handleChange = (e) => {
    this.setState({
      ...this.state,
      [e.target.name]: e.target.value,
    })
  }

  postSmurfButton = (e,smurf) => {
    e.preventDefault();
    this.props.postSmurfs(smurf);

  }
  componentDidMount(){
    this.props.fetchSmurfs()
  }

  render() {
    return (
      <div className="App">
        {
          this.props.smurfs.map(smurf => {
            return (
              <div className='smurfBox'>
                <h1>Name: {smurf.name}</h1>
                <h1>Age: {smurf.age}</h1>
                <h1>Height: {smurf.height}</h1>
                {/* <h1>{smurf.id}</h1> */}
              </div>
            )
          })
        }

        <form onSubmit = {(e) => this.postSmurfButton(e,this.state)}>
          <input
            type='text'
            name='name'
            placeholder='name'
            value={this.state.name}
            onChange={(e) => this.handleChange(e)}
          
          />

          <input
            type='text'
            name='age'
            placeholder='age'
            value={this.state.age}
            onChange={(e) => this.handleChange(e)}
          />
          <input
            type='text'
            name='height'
            placeholder='height'
            value={this.state.height}
            onChange={(e) => this.handleChange(e)}
          
          />

          {/* <input
            type='text'
            name='id'
            placeholder='id'
            value={this.state.id}
            onChange={(e) => this.handleChange(e)}
          
          /> */}

          <button >POST NEW SMURF</button>


        </form>



      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { 
    ...state,
    smurfs: [...state.smurfs],
  }
}
export default connect(mapStateToProps, {fetchSmurfs, postSmurfs})(App);
