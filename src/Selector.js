import React,{Component} from 'react';
import {Link} from 'react-router-dom'

class Selector extends Component{
    render(){
        return(  
          <div className="bdy-container">
            <div>
              <select>
                <option value="volvo">Exam Category</option>
                <option value="saab">Category1</option>
                <option value="opel">Category2</option>
              </select>
            </div>

            <div>
              <select>
                <option value="volvo">Exam Name</option>
                <option value="saab">Name1</option>
                <option value="opel">Name2</option>
              </select>
            </div>

            <div>
              <select>
                <option value="volvo">Year</option>
                <option value="saab">2020</option>
                <option value="opel">2019</option>
              </select>
            </div>

            <div>
              <select>
                <option value="qulification">Qualification</option>
                <option value="mca">MCA</option>
                <option value="opel">BCA</option>  
              </select>
            </div>
            <div>
              <input type = "text" value = "Vacancy"/>
            </div>

            <div>
              <input type = "text" value = "Minimum Age"/>
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
export default Selector;  