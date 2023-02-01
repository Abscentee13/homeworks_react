import React, {useState} from "react";
import {useEffect} from "react";
import {useForm} from "react-hook-form";
import {joiResolver} from "@hookform/resolvers/joi";

import "./UserForm.css";
import {userService} from "../../services/userService";
import {userValidator} from "../validators/userValidator";


const UserForm = ({user, setUsers,createUser}) => {
            const {id, name, username, email} = user;


            const {register, handleSubmit, reset, formState: {errors, isValid}, setValue} = useForm({
                mode: 'all'
                //,
                //resolver: joiResolver(userValidator)
            });



    useEffect(() => {
        userService.getAll().then(({data})=>setUsers([...data]))
    }, []);



            useEffect(() => {
                if (createUser){
                    setValue('id', createUser.id)
                    setValue('name', createUser.name)
                    setValue('username', createUser.username)
                    setValue('email', createUser.email)
                }
            }, [createUser]);

            const submitCreateUser = async (user) => {
                console.log('yes');
                const {data} = await userService.create(user);
                setUsers(prev=>[...prev, data]);
                reset();
            };


    return(
            <form id="user-form" className="user-form" onSubmit={handleSubmit(submitCreateUser)}>
                <input className="user-block__user-data-field" type="text" placeholder={user.id} {...register('id')}/>
                {errors.id && <span>{errors.id.message}</span>}
                <input className="user-block__user-data-field" type="text" placeholder={user.name} {...register('name')}/>
                {errors.name && <span>{errors.name.message}</span>}
               <input className="user-block__user-data-field" type="text" placeholder={user.username} {...register('username')}/>
                {errors.username && <span>{errors.username.message}</span>}
                <input className="user-block__user-data-field" type="text" placeholder={user.email} {...register('email')}/>
                {errors.email && <span>{errors.email.message}</span>}
                <input className="button_detail" type="submit" value="SEND"/>
            </form>
    );
};

export {UserForm};




// {
//     "id": 1,
//     "name": "Leanne Graham",
//     "username": "Bret",
//     "email": "Sincere@april.biz",
//     "address": {
//     "street": "Kulas Light",
//         "suite": "Apt. 556",
//         "city": "Gwenborough",
//         "zipcode": "92998-3874",
//         "geo": {
//         "lat": "-37.3159",
//             "lng": "81.1496"
//     }
// },
//     "phone": "1-770-736-8031 x56442",
//     "website": "hildegard.org",
//     "company": {
//     "name": "Romaguera-Crona",
//         "catchPhrase": "Multi-layered client-server neural-net",
//         "bs": "harness real-time e-markets"
// }
// }