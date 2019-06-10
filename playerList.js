import React from 'react';

const PlayerList = (props) => {
    
    const playersList = props.todos.length ? (
  props.todos.map(todo=>{
      return(<div key={todo.id}>
          <h1 onClick={()=> {props.deleteTodo(todo.id)}}>{todo.name}</h1>
      </div>)
  })
    ):
    (
        <h2>The list is empty</h2>
    )
    return (
        <div>
           {playersList}
        </div>
    );
};

export default PlayerList;