import React from 'react'
import './ThirdHeader.scss';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faLongArrowAltRight } from  "@fortawesome/free-solid-svg-icons";

function ThirdHeader() {
    return (
        <div className='theader'>
            <div>
            <a id='support' href='#support'>Support </a>
            </div>
            <div>
            <FontAwesomeIcon size="2x" id='icon' icon={faLongArrowAltRight} />
            </div>
            <div>
                <a id='ticket'> Tickets </a>
                </div>        
        </div>
    )
}

export default ThirdHeader
