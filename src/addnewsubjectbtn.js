import React,{Component} from 'react';
import {Link} from 'react-router-dom'


class Addnewsubjectbtn extends Component{
    render(){
        return(
            
            <div className="form1footer-div">
            <button className="addnew-sub">Add New Subject</button> 
            <label for="text">&nbsp;Click this button to add "New Subject" to this list</label>
            </div>
                
           
                     
        );
    }
}
export default Addnewsubjectbtn;  