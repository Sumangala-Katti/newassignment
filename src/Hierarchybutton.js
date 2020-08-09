import React,{Component} from 'react';
import {Link} from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSitemap } from '@fortawesome/free-solid-svg-icons'
class Hierarchybutton extends Component{
    render(){
        return(
            
                <div className="Btn-left">
                   <button type="button" class="collapsible"><FontAwesomeIcon icon={faSitemap}/>&nbsp;Hierarchy View</button>  
               </div>
               
           
                     
        );
    }
}
export default Hierarchybutton;  