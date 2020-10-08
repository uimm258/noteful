import React, { Component } from "react";
import ApiContext from "../ApiContext";
import config from '../config';
import ValidateError from '../ValidateError'

class User extends Component {
  static contextType = ApiContext;

  addFolder = (name) => {
    fetch(`${config.API_ENDPOINT}/folders/${name}`, {
      method: 'POST',
      header:{
        'content-type': 'application/json'
      }
    })
    .then(res=>res.json())
    .then(resjson=>this.context.addFolder(resjson))
    .catch(error => {
      console.error({ error })
    })
  }

  handleSumitFolder(event){
    event.preventDefault()
    //create a function that makes this guy working
  }


  updateFolderName(name){
    const newFolder=name.target.value;
    this.context.updateAddFolder(newFolder)
  }

  //validate folder name
  validateName(){
    const name = this.state.name.value.trim()
    if(name.length === 0){
      return 'Name is required'
    } else if(name.length < 3){
      return 'Name must be at least 3 characters long';
    }
  }


  render() {
    const nameError = this.validateName();
    return (
      <div>
        <h2>Add A New Folder</h2>
        <form>
          <div className='user-name'>
            <label htmlFor="user" className="user">
            </label>
            
            <input 
              text="folder-name" 
              className="folder-name"
              name="folder-name" 
              id="folder-name" 
              onChange={e => this.updateFolderName(e.target.value)}/>
            
            {this.state.name.touched && (
            <ValidateError message={nameError} />
            )}
          
      
            <button 
              type="submit" 
              className="add-folder-button"
              onSubmit={e=>this.handleSumitFolder(e)}>
              Add New Folder</button>
          
          </div>
        </form>
      </div>
    );
  }
}

export default User;
