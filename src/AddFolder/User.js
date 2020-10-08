import React, { Component } from "react";

class User extends Component {
  render() {
    return (
      <div>
        <form>
          <h2>User Register</h2>
          <div className='user-name'>
            <label htmlFor="user" className="user">
              <input text="name" className="reg-user" name="name" id="name" />
            </label>
          </div>
          <div className='button'>
            <button type="submit" className="add-new">Add</button>
          </div>
        </form>
      </div>
    );
  }
}

export default User;
