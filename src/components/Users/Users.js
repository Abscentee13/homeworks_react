import React from "react";
import {User} from "../User/User";

const Users = ({users,setCreateUser}) => {

    return (
        <div>
            {users.map(user=><User key={user.id} user={user} setCreateUser={setCreateUser}/>)}
        </div>
    );
};

export {Users};