import React, { Component } from 'react';
import User from './User';

class UserList extends Component {
  render() {
    const { users } = this.props;
    return (
      <div>
        <h1>User List</h1>
        <ul>
          {users.map(user => (
            <li key={user.email}>
              <User user={user} />
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default UserList;
