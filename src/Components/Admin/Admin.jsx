import React from "react";
import './Admin.scss';

function Admin() {
  return (
    <div className="admin">
      <div className="adheading">
        <h1>Submitted Tickets</h1>
      </div>

      <div>
        <table>
            <tbody>
          <tr>
            <th>Tikcet Id</th>
            <th>Department</th>
            <th>Name</th>
            <th>Email</th>
            <th>Subject</th>
            <th>Message Body</th>
            <th>File</th>
          </tr>
          <tr>
            <td>1</td>
            <td>Account Access</td>
            <td>Subash Paudel</td>
            <td>subashpaudel144@gmail.com</td>
            <td>request for account access</td>
            <td>Dear sir, I want to access account.......</td>
            <td>No file choosen</td>
          </tr>
          <tr>
            <td>2</td>
            <td>Billing/Sales</td>
            <td>Gaurav Neupane</td>
            <td>ngaurav456@gmail.com</td>
            <td>request for billing</td>
            <td>Dear sir, I want to know my billing details</td>
            <td>No file choosen</td>
          </tr>
          <tr>
            <td>3</td>
            <td>Domains</td>
            <td>Madan Chapagain</td>
            <td>chapagainmadan7@gmail.com</td>
            <td>request for domain</td>
            <td>Dear sir, I want to buy domain</td>
            <td>No file choosen</td>
          </tr>
          <tr>
            <td>4</td>
            <td>Domain Transfers</td>
            <td>Saroj Paudel</td>
            <td>sarojpaudel@gmail.com</td>
            <td>request for domain transfers</td>
            <td>Dear sir, I want to transfer domain</td>
            <td>No file choosen</td>
          </tr>
          <tr>
            <td>5</td>
            <td>Whois Verification</td>
            <td>Sagar Poudel</td>
            <td>sagarpoudel@gmail.com</td>
            <td>request for whois verification</td>
            <td>Dear sir, I want to verify the person</td>
            <td>No file choosen</td>
          </tr>
          <tr>
            <td>6</td>
            <td>Hosting Transfers</td>
            <td>Gaurav Neupane</td>
            <td>ngaurav456@gmail.com</td>
            <td>request for billing</td>
            <td>Dear sir, I want to know my billing details</td>
            <td>No file choosen</td>
          </tr>
          </tbody>
        </table>

      </div>
    </div>
  );
}

export default Admin;
