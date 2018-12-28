import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col,Button } from 'reactstrap';
class GetWeather extends Component {
    constructor(){
        super();
        this.state = {
            weathers:[],
        }
    }
    componentDidMount() {
        fetch('http://localhost:5000/weathers')
        .then(res => res.json())
        .then(weathers => this.setState({weathers}, () => console.log('weather fetched...')));
    }
render() { 
        return ( <div>
            {/* <form
           onSubmit={this.handleSubmit}>
<input type ="text" value ={this.state.city}
onChange ={this.handleCityChange}/>
<input type ="text" value ={this.state.temperature}
onChange ={this.handleTempChange}/>
<input type ="submit" value = 'post' onClick={this.handleSubmit}/>
           </form> */}
           <ol>
        {this.state.weathers.map(c => 
          <li key={c.id}>
           <Container>
          <Row>
          <Col xs="6" sm="4">{c.city}</Col>
          <Col xs="6" sm="4">{c.temperature}</Col>
          <Col sm="4"><Button color="warning"><Link to={'/edit/'+c._id} style={{ color: '#FFF' }}>EDIT</Link></Button><Button color="danger"><Link to={'/delete/'+c._id} style={{ color: '#FFF' }}>DELETE</Link></Button></Col>
        </Row>
        </Container>
          </li>
          
        )}
        </ol>
        </div>  );
    }
}
 
export default GetWeather;