import React, { useEffect, useRef } from "react";
import Clipboard from "../Clipboard";
import { scrollable } from "../../utils/scrollintoview";
import "./index.css";

function Contacts() {
  
  const contactsRef = useRef();
  useEffect(() => {
    scrollable(contactsRef)
  }, [])

  return (
    <section ref={contactsRef} className="contacts">
      <h2>Contacts</h2>
      {/* social links */}
      <div className="contacts-content">
        {/* Resume a */}
        <div className="contacts-card">
          <div className="card-icon">
            <img alt="email-icon" src="./assets/images/mail.png" />
          </div>
          <div className="card-head">email</div>
          <div className="card-body">
              <a
                className="author-email"
                href="mailto:amitkarmacharya.work@gmail.com"
              >
                amitkarmacharya.work@gmail.com
              </a>
              <Clipboard
                text="amitkarmacharya.work@gmail.com"
                styling={{ display: "inline-block" }}
              />
          </div>
          
        </div>
        {/* github link */}
        <div className="contacts-card">
          <div className="card-icon">
            <img alt="github-icon" src="./assets/images/telephone.png" />
          </div>
          <div className="card-head">phone number</div>
          <div className="card-body">
            <a
              href="tel:443-760-7685"
              rel="noreferrer"
            >( 443 ) - 760 - 7685
            </a>
            <Clipboard
                text="4437607685"
                styling={{ display: "inline-block" }}
              />
          </div>
        </div>
        {/* linkedIn link */}
        <div className="contacts-card">
          <div className="card-icon">
            <img alt="linkedIn-icon" src="./assets/images/pin.png" />
          </div>
          <div className="card-head">Location</div>
          <div className="card-body">
            Nottingham, MD, 21234
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contacts;
