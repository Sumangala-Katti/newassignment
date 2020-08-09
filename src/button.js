import React,{Component} from 'react';
import {Link} from 'react-router-dom'

class Button extends Component{
    render(){
        return(
            
                <div className="Btn-left">
                    <button className="cancel-btn">Cancel</button>
                    <button className="save-btn">Save</button>
                    <button className="create-exam">Create Exam</button>   
                </div>
                
           
                     
        );
    }
}
export default Button;  