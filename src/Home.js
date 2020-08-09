import React, {Component} from 'react';
import './index.css'
import header from './Header';
import Selector from './Selector';
import Form1 from './form1';
import Form2 from './form2';
//import Input from './Input';
//import axios from 'axios';

class Home extends Component{
 
  render(){
    return(
      <div>
        <div>
          <Selector/>
        </div>
      
        <div>
          <Form1/>
        </div>
        <div>
          <Form2/>
        </div>
       </div>
        
    );
    
  }
}

export default Home;