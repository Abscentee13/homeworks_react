import {UserForm, Users} from "./components";
import {userService} from "./services";
import {useEffect, useState} from "react";

const App = () => {
  const [users, setUsers] = useState([]);
  const [updateUser, setUpdateUser] = useState(null);

  useEffect(() => {
   userService.getAll().then(({data})=>setUsers([...data]))
  }, [])

  return (
      <div>
        <UserForm setUsers={setUsers} updateCar={updateUser}/>
        <hr/>
        <Users users={users} setUpdateUser={setUpdateUser}/>
      </div>
  );
};

export {App};