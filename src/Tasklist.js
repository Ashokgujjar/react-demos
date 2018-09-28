import React, { Component} from 'react';
import Taskitems from './Taskitems';


class Tasklist extends Component{
    constructor(){
        super();
        this.state = {
            tasks: [
                {
                    name:"aaa",
                    completed: false
                },
                {
                    name:"bbb",
                    completed: true
                },
                {
                    name:"ccc",
                    completed: false
                },
                {
                    name:"ddd",
                    completed: false
                },
            ]
        };
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick(index){
        let { tasks } = this.state;
        tasks[index].completed = !tasks[index].completed;

        this.setState({
            tasks: tasks
        })

        console.log(this.state.tasks[index]);
    }

    render(){
        let { tasks } = this.state;
        console.log(tasks);
        return (
            <ul>
                <Taskitems tasks={tasks} handleClick={this.handleClick}/>
            </ul>
        )
    }
}

export default Tasklist;