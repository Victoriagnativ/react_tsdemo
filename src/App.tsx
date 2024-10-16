
import './App.css';
import Users from "./components/users/Users";
import {FC, useState} from "react";
import {IUser} from "./modals/IUser";
import {ITodo} from "./modals/ITodo";
import {getTodosOfUser} from "./services/api.service";

const App:FC  = ()=> {

    const [todos, setTodos] = useState<ITodo[]>([]);
    const lift = (user:IUser) => {

        getTodosOfUser(user).then((response:ITodo[]) => {
              setTodos(response);

          });
    }
    return (
      <div>
          {
              todos.map(todo => <div key={todo.id}>{todo.title}</div>)
          }

          <hr/>
          <Users lift = {lift}/>
    </div>
  );
}

export default App;
