import React, {Component} from 'react';

class FamousPerson extends Component {

  state = {
      person: {  
      name: '',
      role: ''
     }
  };


  handlePersonChange = (propertyName) => {
    return (event) => {
      console.log(' famous person input ');
      this.setState(
        {
          person: {
            ...this.state.person, 
            [propertyName]: event.target.value
          }
        }
      );
    }
  }

  handleclick = ()=> {
    console.log(this.state);
  }


  // renders the HTML
  render () {
    return ( 
      <div>
        <h1>Famous Person Information</h1>
        Famous Person Name: <input type="text" onChange={this.handlePersonChange('name')} />
        Role he/she play: <input type="text" onChange={this.handlePersonChange('role')} />
        <button onClick={this.handleclick}>Add Person</button>
        <p>{this.state.person.name} is famous for {this.state.person.role}.</p>
      </div>
    )
  }



} // end of class


export default FamousPerson; 