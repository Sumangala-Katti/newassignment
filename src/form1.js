import React,{Component} from 'react';
import {Link} from 'react-router-dom'
import Selector from './Selector';
import Subdivone from './Subdivone';
import Addnewsubjectbtn from './addnewsubjectbtn';
import Subjects from './subjects';

class Form1 extends Component{
    render(){
        return(
          <div>
            <div>
              <Subdivone/>
            </div>
            <div className="form1-text">
                <p> All stages/Priliminary  </p>
                <b>Priliminary&nbsp;&nbsp;</b>
                <input type="checkbox"/>
                <label for="text">&nbsp;Locked Subject Time</label>
                
              </div>
            <div className="bdy-container">
              
            
            
              <div>
                <select>
                  <option value="volvo">Language</option>
                  <option value="saab">Category1</option>
                  <option value="opel">Category2</option>
                </select>
              </div>
              
              <div>
                
                <input type = "text" value = "No. of Questions" />
              </div>

              <div>
                <input type = "text" value = "Maximim Marks"/>  
              </div>


              <div className="fifth-div">
                <input type = "text" value = "Last Year Cutoff"/>
              </div>
          
              <div>
                <input type="date" value="Exam Date"/>
              </div> 
    
              <div>
                <input type="date"/>
              </div>

              <div>
                <input type="date" value="suma"/>
              </div> 

              <div className="fifth-div">
                <input type = "text" value = "Last Year Cutoff"/>
              </div> 
              
           </div>
           <Subjects/>
           <Addnewsubjectbtn/>
          </div>           
        );
    }
}
export default Form1;  