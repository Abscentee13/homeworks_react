import React from "react";
import {useEffect, useState} from 'react';


import "./App.css";

import {UserForm, Users} from './components';
import {userService} from './services/userService';


const App = () => {

    const [users, setUsers] = useState([]);
    const [createUser, setCreateUser] = useState(null);


    useEffect(() => {
        userService.getAll().then(({data})=>setUsers([...data]))
    }, []);

   const user = {
    "id": 111,
    "name": "Write Name",
    "username": "Write Username",
    "email": "eeeeee@www.www"
    }

      return (
          <div className="main-block">
                  <UserForm user={user} setUsers={setUsers} createUser={createUser}/>
                  <Users users={users}/>
          </div>
      );
};

export {App};