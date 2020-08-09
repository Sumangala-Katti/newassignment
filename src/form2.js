import React,{Component} from 'react';
import {Link} from 'react-router-dom'
import Selector from './Selector';
import Subdivtwo from './Subdivtwo';
import Addnewstage from './addnewstage';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash,faCopy,faBraille } from '@fortawesome/free-solid-svg-icons'
class Form1 extends Component{
    render(){
        return(
          <div>
            <div>
              <Subdivtwo/>
            </div>
            <div className="form1-text">
                <p> All stages/...  </p>
                <b>All stages</b>
              </div>
              <div>
                <div className="priliminary-div">
                  <b><FontAwesomeIcon icon={faBraille}/>&nbsp;Priliminary&nbsp;<FontAwesomeIcon icon={faTrash}/>Remove&nbsp;<FontAwesomeIcon icon={faCopy}/>&nbsp;Copy Structure From</b>
                </div>
                <div className="main-div">  
                  <b><FontAwesomeIcon icon={faBraille}/>&nbsp;Mains&nbsp;<FontAwesomeIcon icon={faTrash}/>Remove&nbsp;<FontAwesomeIcon icon={faCopy}/>&nbsp;Copy Structure From</b>
                </div>
              <div>
                <Addnewstage/>
              </div> 
            </div>
          </div>          
        );
    }
}
export default Form1;  