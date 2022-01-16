import React from 'react'
import './FourthHeader.scss';

function FourthHeader() {
    return (
        <div className='foheader'>
            <a href="/">Home</a>
            <a href="/submitticket">Submit a Ticket</a>
            <a href="/knowledgebase">knowledgebase</a>
            <a href="/news">News</a>
            <a href="/adminpanel">Admin Panel</a>
        </div>
    )
}

export default FourthHeader
