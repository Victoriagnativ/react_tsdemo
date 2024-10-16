import React, {FC} from 'react';
import {IUser} from "../../modals/IUser";

type IUserProps = {
        user: IUser;
        lift:(user:IUser)=>void;
}
const User:FC<IUserProps> = ({user,lift}) => {
    return (

            <div key={user.id}>{user.name}
                <button onClick ={()=>{
                    lift(user);
                }}> chosen
                </button>
            </div>

    );
};

export default User;