import React,{Component} from 'react';
import {Link} from 'react-router-dom'
import Hierarchybutton from './Hierarchybutton';

class Subdiv extends Component{
    render(){
        return(
            <div>
                <div className="subone-div">
                    <label className="label-style" for="text">All Stages,Subjects,Topics & Sub-Topics</label>
                    <Hierarchybutton/>
                </div>

                
           </div>
                     
        );
    }
}
export default Subdiv;  