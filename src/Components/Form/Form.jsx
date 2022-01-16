import React from 'react';
import './Form.scss';


function Form() {
    return (
        <div className='Form'>
            <div className='ftheader'>
                <h1>Submit a ticket</h1>
            </div>
            <div className='fdesc'>
                <p>If you can't find a solution to your problem in our knowledgebase, you can submit a ticket by selecting the appropriate department below.</p>
            </div>
            <div className='fradio'>
            <p>Department <hr /></p>
            
            <input type="radio" name="department" value="Account Access" required="required" />Account Access<br/>
            <input type="radio" name="department" value="Billing/Sales" required="required" />Billing/Sales<br/> 
            <input type="radio" name="department" value="Domains" />Domains <br/> 
            <input type="radio" name="department" value="Pre-Sales --Domains"  required="required"/>Pre-Sales --Domains<br/> 
            <input type="radio" name="department" value="Domain Transfers" required="required"/>Domain Transfers <br/> 
            <input type="radio" name="department" value="Whois Verification" required="required"/>Whois Verification <br/> 
            <input type="radio" name="department" value="Transfer Disputes" required="required"/>Transfer Disputes <br/> 
            <input type="radio" name="department" value="Hosting Transfers" required="required"/>Hosting Transfers <br/> 
            <input type="radio" name="department" value="Hosting--VPS and Dedicated Servers" required="required"/>Hosting--VPS and Dedicated Servers <br/> 
            <input type="radio" name="department" value="Pre-Sale --SSL" required="required"/>Pre-Sale --SSL<br/> 
            <input type="radio" name="department" value="SSL" required="required"/>SSL <br/> 
            <input type="radio" name="department" value="Private Email" required="required"/>Private Email <br/> 
            <input type="radio" name="department" value="EasyWP" required="required"/>EasyWP <br/> 
            <input type="radio" name="department" value="Supersonic CDN" required="required"/>Supersonic CDN <br/> 
            <input type="radio" name="department" value="VPN Applicatioin" required="required"/>VPN Application <br/> 
            <input type="radio" name="department" value="Apps" required="required"/>Apps <br/> 
            <input type="radio" name="department" value="Risk Management" required="required"/>Risk Management <br/> 
            <input type="radio" name="department" value="Abuse Cases" required="required"/>Abuse Cases <br/> 
            <input type="radio" name="department" value="Feedback" required="required"/>Feedback<br/> 
            
            </div>
            <div className='aaa'>
                <a href="/ticketdetails">Next</a>
            </div>
        </div>
    )
}

export default Form
