import React, { Component } from 'react'
import axios from 'axios'
import {Button} from '@material-ui/core'
import './Central.css'
class CRequest extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             posts:[],
             finalposts:[],
             posttoaxios:[]
        }


    }

        componentDidMount() { 
        axios.get('http://localhost:3000/requestdata')
        .then(response=>{
            console.log(response);

            this.setState({
                
                posts:response.data
                
            })
})
    }

            
handleAccept=e=>{
    // e.preventDefault();
    // console.log('eeeeeeeee')
    // console.log([e])
    // var ids =this.state.posts.reduce((ids, post) => {
    //     if (post.id===e) {
    //       ids.push(post);
    //     }
    //     return ids;
    //   }, []);
    //   console.log('------')
    //   console.log(ids[0].Status)
    //   console.log('-------')
    //   ids[0].Status=true;
    //   axios.post('http://localhost:3000/requestdata',ids[0])
    // //   this.setState({
    //       posttoaxios:ids[0]
    //   },
    //   ()=>{})
      

      

}


handleReject=e=>{
    
}


        


    
    
    render() {
       
        var ids =this.state.posts.reduce((ids, post) => {
           
            if (post.Status==false) {
              ids.push(post);
            //   const newpost=post;
            //   newpost.Status=true
            //   this.setState({
            //     posttoaxios: this.state.posttoaxios.concat([post])
            //   })
            }

            return ids;
          }, []);
        //   var newid=ids
          
          
    //    this.setState({
    //        posttoaxios:ids
    //    })
        //   console.log(ids)
        //   console.log('posttoaxios')

        //   console.log(this.state.posttoaxios)

          
          return(
              <div>
                  {/* <form onSubmit={this.handleAccept}> */}
         {ids.map((menuItem,index)=>{
            const {id,Category,Project_Title,Project_Leader,Budget,Status}=menuItem;
            return (
                <div className="row s2 m2 flow-text">
                <div className="col s12 m12">
                  <div className="card blue-grey darken-1">
                    <div className="card-content white-text">
                      <span className="card-title">Category: {Category}</span>
                      <div>Title: {Project_Title}</div>
                      <div>Leader: {Project_Leader}</div>
                      <div>Budget: Rs.{Budget}</div>
                    </div>
                    <div className="card-action">
                      <Button className='ARbuttons' id='Accept' variant='contained' name={id} size='large' onClick={()=>this.handleAccept(id)} >Accept</Button>
                      <Button className='ARbuttons' id='Reject' variant='contained' value={id} size='large' onClick={this.handleReject}>Reject</Button>
                    </div>
                  </div>
                </div>
              </div>
                       
            )
        })}
{/* </form> */}
</div>

          )
        {/* // return( 
        //     <div>{a}</div>)
             */}
        



}
}

        
export default CRequest
