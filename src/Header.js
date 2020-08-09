import React,{Component} from 'react';
import {Link} from 'react-router-dom'
import Button from './button';
import Subdiv from './subdiv';
class Header extends Component{
    render(){
        return(
            <div className="header-content">
                <p>Exams/Add New Exam</p>
                <h2>Add New Exam</h2>
                <div>
                    <Button/>  
                </div>
                <div>
                <Subdiv/>
                </div>
            </div>  
                     
        );
    }
}
export default Header;  