import React, { Component, createContext } from 'react'
import './Addtodo.css';

class Tasks extends Component {
    render() {
        const { items } = this.props;
        return (
            <div>
                                <div className="">
                    <div className="">
                        <ul>
                            <li>Task: {this.props.items.count}</li>
                            <ul>
                                <li>What to do: {items.what}</li>
                                <li>Where: {items.where}</li>
                                <li>When: {items.when}</li>
                                <li>All Day: {items.allday}</li>
                            </ul>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}

export default Tasks;