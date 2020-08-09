import React,{Component} from 'react';
import {Link} from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash,faCopy,faBraille } from '@fortawesome/free-solid-svg-icons'

class Subjects extends Component{
    render(){
        return(
            <div>
                <div className="subj-div">
                    <b>Subjects</b>
                </div>
                <div className="arrow-div">
                    <div className="arrow right">
                    </div>
                    <div className="">
        <b><FontAwesomeIcon icon={faBraille}/>&nbsp;English&nbsp;<FontAwesomeIcon icon={faTrash}/>Remove&nbsp;<FontAwesomeIcon icon={faCopy}/>Copy Structure From</b>
                    </div>

                </div>
            </div>
                
           
                     
        );
    }
}
export default Subjects;  