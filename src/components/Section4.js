import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faR, faPiggyBank, faBook, faBookOpen, faBagShopping, faKey, faCreditCard, faChartLine, faPhone } from '@fortawesome/free-solid-svg-icons';

const Section4 = () => {
    return ( 
        <div className="section4 container">
            <h3>Your Partner for business</h3>
            <p>It is simple and easy to take control of your money across all platforms, in real-time. Using Figur, you can <br />
            control all aspects of your finances</p>

            <div className="multiple-icons">
              <div className="R">
                <FontAwesomeIcon icon={faR} className="scoop one" />
                <p className="CAC" style={{ paddingLeft: "15px" }}>CAC registration</p>
              </div>

              <div className="bank icon1">
                <FontAwesomeIcon icon={faPiggyBank} className="scoop two" />
                <p className="CAC" style={{ paddingLeft: "15px" }}>
                  Business bank account
                </p>
              </div>

              <div className="invoicing icon1">
                <FontAwesomeIcon icon={faBook} className="scoop three" />
                <p className="CAC" style={{ paddingLeft: "15px" }}>Invoicing tool</p>
              </div>

              <div className="book-keep icon1">
                <FontAwesomeIcon icon={faBookOpen} className="scoop four" />
                <p className="CAC" style={{ paddingLeft: "15px" }}>Book keeping</p>
              </div>

              <div className="online icon1">
                <FontAwesomeIcon icon={faBagShopping} className="scoop five" />
                <p className="CAC" style={{ paddingLeft: "15px" }}>Online store</p>
              </div>

              <div className="savings icon1">
                <FontAwesomeIcon icon={faKey} className="scoop six" />
                <p className="CAC" style={{ paddingLeft: "15px" }}>Savings</p>
              </div>

              <div className="POS icon1">
                <FontAwesomeIcon icon={faCreditCard} className="scoop seven" />
                <p className="CAC" style={{ paddingLeft: "15px" }}>POS</p>
              </div>

              <div className="revenue icon1">
                <FontAwesomeIcon icon={faChartLine} className="scoop eight" />
                <p className="CAC" style={{ paddingLeft: "15px" }}>Revenue tracker</p>
              </div>

              <div className="customer icon1">
                <FontAwesomeIcon icon={faPhone} className="scoop nine" />
                <p className="CAC" style={{ paddingLeft: "15px" }}>
                  Instant customer support
                </p>
              </div>
            </div>
        </div>
     );
}
 
export default Section4;