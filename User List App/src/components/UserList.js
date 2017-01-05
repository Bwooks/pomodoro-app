/**
 * Created by Owner on 1/4/2017.
 */
import React from 'react';
import {connect} from 'react-redux';
import {Table} from 'react-bootstrap';
import UserListElement from './UserListElement';
import UserDelete from './UserDelete';

class UserList extends React.Component{
  render(){
    const {users} = this.props;
    return (
      <div>
        <Table bordered responsive striped>
          <thead>
          <tr>
            <th>ID</th>
            <th>Username</th>
            <th>Job</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
          </thead>
          <tbody>
          {users.map((user,index)=>{
            return (
              <UserListElement key={user.id} user={user}/>
            );
          })}
          </tbody>
        </Table>
        <UserDelete/>
      </div>
    );
  }
}

function mapStateToProps(state){
  return{
    users:state.users.list
  }
}

export default connect(mapStateToProps)(UserList);
