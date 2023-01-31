import React from "react";

import "./Users.css";

import {User} from "../User/User";

const Users = ({users,setCreateUser}) => {

    return (
        <div className="users-set-block">
            {users.map(user=><User key={user.id} user={user} setCreateUser={setCreateUser}/>)}

        </div>
    );
};

export {Users};