import React, { Component } from 'react';
import fetch from 'isomorphic-fetch';
class Edit extends Component {
    constructor(props){
        super(props);
        this.state = {city:"",temperature:"",weatherid:""};
        this.handleCityChange =  this.handleCityChange.bind(this);
        this.handleTempChange =  this.handleTempChange.bind(this);
        this.handleSubmit =  this.handleSubmit.bind(this);
    }
    componentWillMount(){
       console.log("this",this.props.location)
        fetch('http://localhost:5000/weathers/' + this.state.weatherid, {
        method: 'GET',
         headers: {
           'Accept':'application/json',
            'Content-Type':'application/json',
     },
    })
.then((res) => res.json())
.then(searchdata => { 
    this.setState({city:searchdata.city, temperature:searchdata.temperature});
});

    }
    handleCityChange(e){
        this.setState({city:e.target.value});
    }
    handleTempChange(e){
        this.setState({temperature:e.target.value});
    }
    handleSubmit(e){
        e.preventDefault();
        console.log(`${this.state.city}  temperature is ${this.state.temperature}`)
    const reqBody = {
        "city" : this.state.city,
        "temperature": this.state.temperature
    };
        fetch('http://localhost:5000/weathers/add', {
        method: 'POST',
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
           <p>welcome to create weather component</p> 
           <form
           onSubmit={this.handleSubmit}>
<input type ="text" value ={this.state.city}
onChange ={this.handleCityChange}/>
<input type ="text" value ={this.state.temperature}
onChange ={this.handleTempChange}/>
<input type ="submit" value = 'post' onClick={this.handleSubmit}/>
           </form>
        </div> );
    }
}
 
export default Edit;