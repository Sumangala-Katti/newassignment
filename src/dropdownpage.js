import React,{Component} from 'react';
import {Link} from 'react-router-dom'
import Hierarchybutton from './Hierarchybutton';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from "react-bootstrap-submenu";
class Dropdownpage extends Component{
    render(){
        return(
            
          <div>
              <ul id="nav">
                <li><a href="#">Main Item 1</a></li>
                <li><a href="#">Main Item 2</a>
                </li>
               </ul>
            </div>
            
                     
        );
    }
}
export default Dropdownpage;  
