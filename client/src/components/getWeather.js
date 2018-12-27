import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class GetWeather extends Component {
    constructor(){
        super();
        this.state = {
            weathers:[]
        }
    }
    componentDidMount() {
        fetch('http://localhost:5000/weathers')
        .then(res => res.json())
        .then(weathers => this.setState({weathers}, () => console.log('weather fetched...')));
    }
render() { 
        return (<div>
            {/* <form
           onSubmit={this.handleSubmit}>
<input type ="text" value ={this.state.city}
onChange ={this.handleCityChange}/>
<input type ="text" value ={this.state.temperature}
onChange ={this.handleTempChange}/>
<input type ="submit" value = 'post' onClick={this.handleSubmit}/>
           </form> */}
           <ul>
        {this.state.weathers.map(c => 
          <li key={c.id}>
          <span>{c.city}  </span>
          <span>{c.temperature} </span>
          <span><Link to={'/edit/'+c._id} >Edit</Link></span>
          <span><Link to={'/delete/'+c._id} >Delete</Link></span>
          </li>
          
        )}
        </ul>
        </div>  );
    }
}
 
export default GetWeather;