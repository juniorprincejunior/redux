import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'

import './App.css';
import Input from './components/Input';
import TodoItem from './components/TodoItem';

import { useSelector } from 'react-redux';

import { selectTodoList } from './feature/todoSlice';



function App() {
const todoList= useSelector(selectTodoList)
console.log(todoList);
  return (
    <div className="container">
     <Input/>
     <div style={{backgroundColor : "pink"}}>
          {
            todoList.map(
              item =>(
                <TodoItem name={item.item}
                  done={item.done}
                  id={item.id}
                />
              )
            )
          }
     </div>
    </div>
  );
}

export default App;
