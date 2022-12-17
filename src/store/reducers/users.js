import { userAction } from "../actions/userAction";

const usersState = {};

const users = (state = usersState, action) => {
  let newState = usersState;

  switch (action.type) {
    case userAction.USER_REGISTER_SUCCESS:
      break;
    case userAction.USER_REGISTER_FAILD:
      break;
    default:
      newState = state;
      break;
  }

  return newState;
};
export default users;
