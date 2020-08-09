import React,{Component} from 'react';
import {Link} from 'react-router-dom'

class Input extends Component{
    render(){
        return(
          <div className="bdy-container">
            <div>
              <input type = "text" value = "Vacancy"/>
            </div>

            <div>
              <input type = "text" value = "Minimum Age"/>
            </div>

            <div>
              <input type = "text" value = "Maximum Age"/>
            </div>

            <div className="fourth-div">
              <input type = "text" value = "Salary"/>
            </div>

            <div className="fifth-div">
              <input type = "text" value = "Last Year Cutoff"/>
            </div>
          
            <div>
              <input type="date"/>
            </div> 
    
            <div>
              <input type="date"/>
            </div>

            <div>
              <input type="date"/>
            </div> 

            <div className="fifth-div">
              <input type = "text" value = "Last Year Cutoff"/>
            </div> 
          </div>             
        );
    }
}
export default Input;  