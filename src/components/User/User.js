import React from "react";

const User = ({user,setCreateUser}) => {
    const {id, name} = user;

    return (
        <div>
            <div>id: {id}</div>
            <div>name: {name}</div>

            <button onClick={()=>setCreateUser(user)}>create</button>
            <button>delete</button>

        </div>
    );
};

export {User};