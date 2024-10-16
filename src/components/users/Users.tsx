import React, {FC, useEffect, useState} from 'react';
import {IUser} from "../../modals/IUser";
import User from "../user/User";
import {getUsers} from "../../services/api.service";
type IUserProps = {
    lift:(user:IUser)=> void
}
const Users:FC<IUserProps> = ({lift}) => {
    let [users, setUsers] = useState<IUser[]>([]);

    useEffect(()=>{
        getUsers().then((response: IUser[] )=> {
                setUsers(response);
            });
    },[])
    return (
        <div>
            {
                users.map((value: IUser) => <User lift ={lift} user={value} key={value.id} />)
            }
        </div>

    );
};

export default Users;