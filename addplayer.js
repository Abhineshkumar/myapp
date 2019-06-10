import React, { Component } from 'react';

class Addplayer extends Component {
    state={
        name:''
    }

   handleChange=(e)=>{
       this.setState({
        name: e.target.value
       })
   }
   submitHandler =(e)=>{
       e.preventDefault();
       this.props.addTodo(this.state)
       this.setState({
        name: ''
       })
   }
    render() {
        return (
            <div>
               <form onSubmit={this.submitHandler}>
                  <h3>Add to Todos : </h3>
                  <input type="text" value={this.state.name} onChange={this.handleChange}/>
               </form>
            </div>
        );
    }
}

export default Addplayer;