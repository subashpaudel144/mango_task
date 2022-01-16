import React from 'react'
import './TicketDetails.scss'

function TicketDetails() {
    return (
        <div className='Ticket'>
            <div className='Theading'>
                <h1>Your Ticket Details</h1>
            </div>
            <div className='Tpara'>
                <p>If you are reporting a problem, please remember to provide as much information that is relevant to the issue as possible.</p>
            </div>
            <div className='info'>
                <p>General Information</p><hr />
                <label htmlFor="">First and Last Name:*</label><br />
                <input type="text"  required/><br />
                <label htmlFor="">Email:*</label><br />
                <input type="email" required />
            </div>
            <div className='message'>
                <p>Your Message</p><hr />
                <label htmlFor="">Subject:*</label><br />
                <input type="text" required/><br />
                <label htmlFor="">Body:*</label><br />
                <textarea name="message" cols="70" rows="5" required></textarea>
            </div>
            <div className='file'>
                Attach file: <br /><hr />  
                <input type="file" id="docpicker"
                accept=".doc,.docx,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"></input><hr />
            </div>
            <div className='notes'>
            <input type="checkbox" value="agree"/>By using this service, you provide explicit consent for Namecheap to collect and process the personal data you submit and/or any other personal data that may be necessary to support helping you with your request(s). You also agree to our Privacy Policy, Terms of Service and any related policies.
            </div>

            <div className='submit'>
                <button type='submit'>Submit</button>
            </div>
        </div>
    )
}

export default TicketDetails
