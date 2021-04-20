import React, { Component } from 'react'
import List from './List';

export default class Lists extends Component {

    renderLists = () => {
       return this.props.lists.map( list => {
           return <List list = {list} key = {list.id} />
       })
    }
    render() {
        return (
            <div>
                {this.renderLists()}
            </div>
        )
    }
}
