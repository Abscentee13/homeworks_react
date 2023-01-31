import React, {useEffect, useState} from "react";
import {useForm} from "react-hook-form";

import './User.css';
import {userService} from "../../services/userService";
import {UserForm} from "../UserForm/UserForm";
import {render} from "react-dom";








const User = ({user}) => {

    const {id, name, username, email, address, phone, website, company} = user;

    const {handleSubmit} = useForm();

    const submit =  () => {


        console.log('11111');


        const [users, setUsers] = useState([]);
        const [createUser, setCreateUser] = useState(null);

        useEffect(() => {
            userService.getAll().then(({data})=>setUsers([...data]))
        }, []);

        return(
            document.getElementById("user-form")
                    .render(
                        <UserForm setUsers={setUsers} createUser={createUser}/>
            )
        );
    };



    return (
        <form >
            <div className="user-block" id={'user' + id}>

                    <div className="user-block__user-data-field"> id: {id} </div>
                    <div className="user-block__user-data-field"> name: {name}</div>
                    <div className="user-block__user-data-field"> username: {username}</div>
                    <div className="user-block__user-data-field"> email: {email}</div>

                    {/*<div className="user-block__user-data-header"> address:*/}
                    {/*    <div className="user-block__user-data-field"> street: {address['street']}</div>*/}
                    {/*    <div className="user-block__user-data-field"> suite: {address['suite']}</div>*/}
                    {/*    <div className="user-block__user-data-field"> city: {address['city']}</div>*/}
                    {/*    <div className="user-block__user-data-field"> zipcode: {address['zipcode']}</div>*/}

                    {/*    <div className="user-block__user-data-header"> geo:*/}
                    {/*        <div className="user-block__user-data-field"> lat: {address['geo']['lat']}</div>*/}
                    {/*        <div className="user-block__user-data-field"> lng: {address['geo']['lng']}</div>*/}
                    {/*    </div>*/}

                    {/*</div>*/}

                    {/*<div className="user-block__user-data-field"> phone: {phone}</div>*/}
                    {/*<div className="user-block__user-data-field"> website: {website}</div>*/}

                    {/*<div className="user-block__user-data-header"> company:*/}
                    {/*    <div className="user-block__user-data-field"> company Name: {company['name']}</div>*/}
                    {/*    <div className="user-block__user-data-field"> catchPhrase: {company['catchPhrase']}</div>*/}
                    {/*    <div className="user-block__user-data-field"> bs: {company['bs']}</div>*/}
                    {/*</div>*/}


                    <input className="button_detail" type="submit" onSubmit={handleSubmit(submit)} value="UPDATE"/>
                    <input className="button_detail" type="submit" value="DELETE"/>
            </div>



        </form>
    );
};

export {User};