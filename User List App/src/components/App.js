/**
 * Created by Owner on 1/4/2017.
 */
import React from 'react';
import UserList from './UserList'
export default class App extends React.Component{

  render(){

    return (
      //display these users in a table
      <div className="container">
       <UserList/>
      </div>
      );
  }
}
