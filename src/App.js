import React, { Component } from 'react';
import TableForm from './components/TableForm/TableForm.js'
import Table from './components/Table/Table.js'
import './App.scss';


class App extends Component {

  state = {usersList: []}

  loadFromLocalStorage = () => {
    let arr = JSON.parse(localStorage.getItem('usersList'));
    if (!arr) arr = [];   
    this.setState({usersList: arr})
  }

  updateLocalStorage(value) {
    localStorage.removeItem('usersList');
    localStorage.setItem('usersList', JSON.stringify(value));
  }

  addToState = value => {
    this.setState( { usersList: [ ...this.state.usersList, value ] } );
    console.log(this.state.usersList);
    this.updateLocalStorage(this.state.usersList);
  }

  removeFromState = index => {
    let arr = this.state.usersList;
    arr.splice(index, 1);
    this.setState( { usersList: arr});
    this.updateLocalStorage(arr);
  }

  componentWillMount() {
    this.loadFromLocalStorage();
  }

  render() {
    return (
      <div className="App">
        <h1>table</h1>
        <TableForm addToState={ this.addToState }></TableForm>
        <Table 
          usersList = { this.state.usersList }
          removeFromState={ this.removeFromState }
        ></Table>
      </div>
    );
  }
}

export default App;
