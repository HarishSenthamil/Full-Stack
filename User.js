import React, { Component } from 'react';

class User extends Component {
  render() {
    const { user } = this.props;
    return (
      <div>
        <h2>{user.name}</h2>
        <p>Email: {user.email}</p>
        <h3>Hobbies</h3>
        <ul>
          {user.hobbies.map((hobby, index) => (
            <li key={index}>{hobby}</li>
          ))}
        </ul>
      </div>
    );
  }
}

export default User;
