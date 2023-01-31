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

      return (
          <div className="main-block">
                  <UserForm setUsers={setUsers} createUser={createUser}/>
                  <Users users={users} setCreateUser={setCreateUser}/>
          </div>
      );
};

export {App};