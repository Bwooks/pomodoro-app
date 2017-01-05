/**
 * Created by Owner on 1/4/2017.
 */
export default function users(state={},action){
  switch(action.type){
    case "users.modalDeleteShow":
      return modalShow(state,action);
    case "users.modalDeleteHide":
      return modalHide(state);
    case "user.Delete":
      return modalDeleteUser(state,action);
    default:
      return state;
  }
}

function modalShow(state={},action){
  let new_state = JSON.parse(JSON.stringify(state));
  new_state.modal = new_state.modal ? new_state.modal : {};
  new_state.modal.list_delete = {
    show:true,
    id:action.id,
    username:action.username
  };
  return new_state;
}

function modalDeleteUser(state={},action){
  let new_state = JSON.parse(JSON.stringify(state));
  new_state.list = new_state.list.filter((user)=>{
    return user.id !== action.id;
  });
  return new_state;
}

function modalHide(state={}){
  let new_state = JSON.parse(JSON.stringify(state));
  new_state.modal.list_delete = {
    id:0,
    show:false,
    username:''
  };
  return new_state;
}
