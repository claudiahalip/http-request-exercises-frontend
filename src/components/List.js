import React, { Component } from 'react'

export default class List extends Component {

    state = {
        status: this.props.list.status 
    }
   
    handleClick =(e) => {
        e.preventDefault()
        const configObj = {
            method: "PATCH",
            headers:{
                "Content-Type": "application/json",
                "Accept": "application/json",
            },
            body: JSON.stringify( {status: this.props.list.status ? false : true} )
        }
        fetch(`http://localhost:3001/lists/${this.props.list.id}`, configObj)
        .then(resp => resp.json())
        .then(data => {
            console.log(data)
            this.setState({
                status: data.status
            })
        })
    }

    render() {
        return (
            <div>
                <h1>{this.props.list.name}</h1>
                <h2>Status: {this.props.list.status ? "active" : "inactive"}</h2>
                <button onClick={this.handleClick}>{this.state.status ? "active" : "inactive"}</button>
            </div>
        )
    }
}
