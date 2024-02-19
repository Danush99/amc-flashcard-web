import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "src/redux/store";

import {
  addUser, 
  removeUser,
  userLogout,
} from "src/redux/user";

export default function ReduxExample() {
  const user = useSelector((state: RootState) => state.user.user);
  const dispatch = useDispatch<AppDispatch>();


  const showUser = (): JSX.Element => {
    return (
      <div>
      name : {user?.firstName} <br/>
      id : {user?.id} <br/>
      age : {user?.role} <br/>
    </div>
    );
  };
  

  return (
    <>
      <div>
        <h2>User object:</h2>
        <div>{showUser()}</div>
        <div>
          <button onClick={() => dispatch(addUser({firstName:'supul',lastName:"sakoasdn", isPremium:false, id:"sadsad213",role:"USER"}))}>addUser</button>
          <button onClick={() => dispatch(removeUser())}>removeUser</button>
          <button onClick={() => dispatch(userLogout())}>Logout</button>
        </div>
      </div>
    </>
  );
}
