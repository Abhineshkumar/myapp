import React, { Component , PureComponent } from 'react';


const Temp =(props)=>{
    console.log('render temp')
      return(
          <div>{props.number}</div>
      )
}

class Pure extends PureComponent {
    state={
        number: 1
    }

componentWillMount(){
    setInterval(()=>{
        this.setState({
            
                number:1
          
        })
    }, 2000)
}

        render() {
            console.log('render app')
            return (
                <div>
                    <Temp number = {this.state.number}/>
                </div>
            )
        }
    }
        