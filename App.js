import React, { Component } from 'react';
import UserList from './UserList';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [
        {
          name: 'Alice Smith',
          email: 'alice.smith@example.com',
          hobbies: ['Reading', 'Cycling', 'Cooking']
        },
        {
          name: 'Bob Johnson',
          email: 'bob.johnson@example.com',
          hobbies: ['Hiking', 'Photography', 'Gardening']
        },
        {
          name: 'Charlie Brown',
          email: 'charlie.brown@example.com',
          hobbies: ['Gaming', 'Drawing', 'Traveling']
        }
      ]
    };
  }

  render() {
    return (
      <div className="App">
        <UserList users={this.state.users} />
      </div>
    );
  }
}

export default App;

