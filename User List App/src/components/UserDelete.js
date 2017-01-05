/**
 * Created by Owner on 1/4/2017.
 */
import React from 'react';
import {Button,Modal} from 'react-bootstrap';
import {connect} from 'react-redux';

class UserDelete extends React.Component{

  modalDeleteHide(){
    this.props.dispatch({
      type:"users.modalDeleteHide"
    })
  }

  render(){
    const {show,username} = this.props.modal_delete;
    return(
      <Modal show={show}>
        <Modal.Header>Are you sure you want to delete {username}?</Modal.Header>
        <Modal.Footer>
          <Button bsStyle="primary">Yes</Button>
          <Button onClick={this.modalDeleteHide.bind(this)}>No</Button>
        </Modal.Footer>
      </Modal>
    );
  }
}

function mapStateToProps(state){
  let modal_delete;
  if(state.users.modal && state.users.modal.list_delete){
       modal_delete = state.users.modal.list_delete;
  }else{
    modal_delete = {
      show:false,
      username:'',
      id:0
    }
  }
  return {
      modal_delete:modal_delete
  };
}
//Comment
export default connect(mapStateToProps)(UserDelete);
