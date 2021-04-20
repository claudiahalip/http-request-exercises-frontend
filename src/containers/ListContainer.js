import React, { Component } from 'react';
import Lists from '../components/Lists';

export default class ListContainer extends Component {

    state = {
        lists: []
    }

    componentDidMount = () => {
        fetch("http://localhost:3001/lists")
        .then(resp => resp.json())
        .then(data => {
            console.log(data)
            this.setState({
                lists: data
            })
        })
    }
    render() {
        return (
            <div>
                <p>ListContainer test</p>
                <Lists lists = {this.state.lists}/>
            </div>
        )
    }
}
