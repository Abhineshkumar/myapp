import React, { Component } from 'react';
import PlayerList from './playerList';
import Addplayer from './addplayer';
import Pure from './pure';


class Player extends Component {

  state={
      todos:[
          {id:1, name:"virat"},
          {id:2, name:"Rohit"},
          {id:3, name:"Shikhar"}
      ]
  }
deleteTodo=(id)=>{
    const todos = this.state.todos.filter(todo=>{
        return todo.id !== id
    })
    this.setState({
        todos:todos
    })
}

addTodo=(todo)=>{
    //todo.id = Math.random();
    let todos= [...this.state.todos, todo]
    this.setState({
        todos:todos
    })
}
    render() {
        return (
            <div>
                
                <PlayerList todos={this.state.todos} deleteTodo={this.deleteTodo}/>
                <Addplayer addTodo={this.addTodo}/>
                <Pure/>
            </div>
        );
    }
}

export default Player;