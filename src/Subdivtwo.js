import React,{Component} from 'react';
import {Link} from 'react-router-dom'
import Hierarchybutton from './Hierarchybutton';
import Dropdownpage from './dropdownpage'
class Subdiv extends Component{
    render(){
        return(
            
            <div className="subtwo-div">
            <label for="text">All Stages,Subjects,Topics & Sub-Topics</label>
           
            <Hierarchybutton/>
            
            </div>
                
           
                     
        );
    }
}
export default Subdiv;  