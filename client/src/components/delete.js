import React, { Component } from 'react';
class Delete extends Component {
    constructor(props){
        super(props);
        this.state = {
        weatherid :'',
        city:'',
    temperature:'' };
        this.handleIdChange =  this.handleIdChange.bind(this);
        this.handleSubmit =  this.handleSubmit.bind(this);
    }
    handleIdChange(e){
        this.setState({weatherid : e.target.value});
    }
    handleSubmit(e){
        e.preventDefault();
    const reqBody = {
        "weatherid" : this.state.weatherid,
        "city":this.state.city,
        "temperature":this.state.temperature
    };
        fetch('http://localhost:5000/weathers/delete/' + this.state.weatherid, {
        method: 'DELETE',
         headers: {
           'Accept':'application/json',
      'Content-Type':'application/json'},
    body: JSON.stringify(reqBody) })
.then((res) => res.json())
.then((data)=>{
    console.log(data);
})
.catch((err) => console.log(err));
          }
        
    render() { 
        return (<div>
           <p>welcome to delete weather component</p>
           <form>
<input type ="text" value ={this.state.id} placeholder ="enter city"
onChange ={this.handleIdChange}/> 
<input type ="submit" value = 'delete' onClick={this.handleSubmit}/>
           </form>
        </div>  );
    }
}
 
export default Delete;