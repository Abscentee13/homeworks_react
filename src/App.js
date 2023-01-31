import React from "react";
import {useEffect, useState} from 'react';


import "./App.css";

import {UserForm, Users} from './components';
import {userService} from './services/userService';


const App = ({user}) => {

    const [users, setUsers] = useState([]);

    useEffect(() => {
        userService.getAll().then(({data})=>setUsers([...data]))
    }, []);

    useEffect((users) => {user = users[0]});

      return (
          <div className="main-block">
                  <UserForm user={user}/>
                  <Users users={users}/>
          </div>
      );
};

export {App};