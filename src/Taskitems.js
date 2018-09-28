import React, { Component } from 'react';


class Taskitems extends Component {
    render() {
        return (
            this.props.tasks.map((task, key) => {
                return <li key={task.name} className={(task.completed) ? 'active' : ''} onClick={() => {this.props.handleClick(key)} }>{task.name}</li>
            })
        )
    }
}

export default Taskitems;