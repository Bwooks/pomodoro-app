/**
 * Created by Owner on 1/4/2017.
 */
export default function users(state={},action){
  switch(action.type){
    case "users.modalDeleteShow":
      let new_state = JSON.parse(JSON.stringify(state));
      new_state.modal = new_state.modal ? new_state.modal : {};
      new_state.modal.list_delete = {
        show:true,
        id:action.id,
        username:action.username
      };
      return new_state;
    case "users.modalDeleteHide":
      new_state = JSON.parse(JSON.stringify(state));
      new_state.modal.list_delete = {
        id:0,
        show:false,
        username:''
      };
      return new_state;
    default:
      return state;
  }
}
