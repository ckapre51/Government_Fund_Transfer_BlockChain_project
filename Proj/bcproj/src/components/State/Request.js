import React, { Component } from 'react'
// import requestdata from '../requestdata'
import axios from 'axios'

class Request extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             Category:'',
             Project_Title:'',
             Project_Leader:'',
             Budget:'',
             Status:false
        }
    }

    handleChange=e=>{
        this.setState({
            [e.target.name]:e.target.value
        })
    }

    handleSubmit=event=>{
        // alert(`${this.state}`)
        event.preventDefault()
        axios.post('http://localhost:3000/requestdata',this.state)
        console.log(`${this.state}`)
        alert('Request has been submitted successfully')

    }
    
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
            
            <div>
                <label>Category</label>
                <input type='text'
                name='Category'
                    value={this.state.Category}
                    onChange={this.handleChange}></input>
            </div>

            <div>
                <label>Project Title</label>
                <input type='text'
                    name='Project_Title'
                    value={this.state.Project_Title}
                    onChange={this.handleChange}></input>
            </div>

            <div>
                <label>Project Leader</label>
                <input type='text'
                    name='Project_Leader'
                    value={this.state.Project_Leader}
                    onChange={this.handleChange}></input>
            </div>

            <div>
                <label>Budget</label>
                <input type='number'
                name='Budget'
                    value={this.state.Budget}
                    onChange={this.handleChange}></input>
            </div>
            {/* <div>
                <label>Comments</label>
                <textarea
                    value={this.state.comments}
                    onChange={(value)=>this.handleComments(value)}></textarea>
            </div> */}

            <button type='submit'>Submit</button>
            </form>
        )
    }
}

export default Request
