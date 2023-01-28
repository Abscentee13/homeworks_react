import React from "react";

import './User.css';

const User = ({user}) => {
    const {id, name, username, email, address, phone, website, company} = user;

    return (
        <div>
            <div className="user-block" id={'user' + id}>
                <div className="user-block__user-data-header">
                    <div className="user-block__user-data-field"> id: {id} </div>
                    <div className="user-block__user-data-field"> name: {name}</div>
                    <div className="user-block__user-data-field"> username: {username}</div>
                    <div className="user-block__user-data-field"> email: {email}</div>

                    <div className="user-block__user-data-header"> address:
                        <div className="user-block__user-data-field"> street: {address['street']}</div>
                        <div className="user-block__user-data-field"> suite: {address['suite']}</div>
                        <div className="user-block__user-data-field"> city: {address['city']}</div>
                        <div className="user-block__user-data-field"> zipcode: {address['zipcode']}</div>

                        <div className="user-block__user-data-header"> geo:
                            <div className="user-block__user-data-field"> lat: {address['geo']['lat']}</div>
                            <div className="user-block__user-data-field"> lng: {address['geo']['lng']}</div>
                        </div>

                    </div>

                    <div className="user-block__user-data-field"> phone: {phone}</div>
                    <div className="user-block__user-data-field"> website: {website}</div>

                    <div className="user-block__user-data-header"> company:
                        <div className="user-block__user-data-field"> company Name: {company['name']}</div>
                        <div className="user-block__user-data-field"> catchPhrase: {company['catchPhrase']}</div>
                        <div className="user-block__user-data-field"> bs: {company['bs']}</div>
                    </div>
                </div>


            </div>



        </div>
    );
};

export {User};