import React, { Component } from 'react';

class GetById extends Component {
    constructor(){
        super();
        this.state = {
            city:'',
            temperature:'',
            weatherid:'',
            searchdata:{},
        }
        this.handleSearchById = this.handleSearchById.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange = (e) =>{
this.setState({weatherid:e.target.value});
    }
    handleSearchById = (e) => {
        e.preventDefault();
        const reqBody = {
            "city":this.state.city,
            "temperature":this.state.temperature,
            "weatherid":this.state.weatherid
        };
        fetch('http://localhost:5000/weathers/' + this.state.city, {
        method: 'GET',
         headers: {
           'Accept':'application/json',
      'Content-Type':'application/json',
      body: JSON.stringify(reqBody)
     },
    })
.then((res) => res.json())
.then(searchdata => { this.setState({searchdata}, () => console.log("user fetched"))
});
    }
    render() { 
        return (<div>
           <p>welcome to get city component</p>
           <form>
<input type ="text" value ={this.state.id} placeholder ="enter Id"
onChange ={this.handleChange}/> 
<input type ="submit" value = 'getcitytemp' onClick={this.handleSearchById}/>
           </form>
           <div>{this.state.searchdata.city}{this.state.searchdata.temperature}</div>
        </div>  );
    }
}


export default GetById;