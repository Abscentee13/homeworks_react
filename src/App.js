import React from "react";
import {useEffect, useState} from 'react';

import {UserForm, Users} from './components';
import {userService} from './services/userService';


const App = () => {
      const [users, setUsers] = useState([]);
      const [createUser, setCreateUser] = useState(null);

      useEffect(() => {
        userService.getAll().then(({data})=>setUsers([...data]))
      }, []);

      return (
          <div>
              <div>
                  <UserForm setUsers={setUsers} createUser={createUser}/>
              </div>
              <div>
                  <Users users={users} setCreateUser={setCreateUser}/>
              </div>
          </div>
      );
};

export {App};