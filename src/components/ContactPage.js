import React from 'react';
import whatsappIcon from '../resources/whatsapp-icon.png';
import phoneIcon from '../resources/phone-icon.png';
import gmailIcon from '../resources/gmail-icon.png';
import { ownerDetails, others, officeDetails } from '../constants.js';
import { connect } from 'react-redux';

class ContactPage extends React.Component {
  navigateHome = () => {
    this.props.dispatch({ type: 'NAVIGATE_TO', pageIndex: 0 });
    this.props.dispatch({ type: 'TOGGLE_NAV'});

    let contactItems = document.getElementsByClassName('contact');
    let i;
    for (i = 0; i < contactItems.length; i++) {
      contactItems[i].style.opacity = 0;
    }
  }

  triggerPage = () => {
    setTimeout(function () {
      let contactItems = document.getElementsByClassName('contact');
      let i, j;
      for (i = 0, j = 0.1; i < contactItems.length; i++, j += 0.1) {
        contactItems[i].style.transition = 'opacity 0.3s ' + j + 's linear';
        contactItems[i].style.opacity = 1;
      }
    }, 500);
  }

  componentDidUpdate = () => {
    if (this.props.activePageIndex === 4) {
      this.triggerPage();
    }
  }

  render () {
    return (
      <div id = 'contactpage' className = 'page'>
        <div id = 'back-icon' title = 'Go Home' onClick = { this.navigateHome }></div>

        <div id = 'contact-title' className = 'page-title'>Contact Us</div>
        <div id = 'contact-container'>
          <div id = 'contact-wrapper'>
            <div id = 'contact-owner' className = 'contact'>
              <div id = 'contact-owner-tag' class = 'contact-tag'>Head</div>
              <div id = 'contact-owner-content'>
                <span style = { {fontWeight: 600} }>{ ownerDetails.name }</span>
                <br />
                { ownerDetails.number }&nbsp;
                <img alt = 'Whatsapp Icon' src = { whatsappIcon } />
                <br />
                { ownerDetails.email }&nbsp;
                <img alt = 'Gmail Icon' src = { gmailIcon } />
              </div>
            </div>

            <div className = 'contact-sub-wrap'>
              <div id = 'contact-others' className = 'contact'>
                <div style = { {textAlign: 'left'} }>
                  <span style = { {fontWeight: 600} }>{ others[0].name }</span>
                  <br />
                  <img alt = 'Whatsapp Icon' src = { whatsappIcon } />
                  &nbsp;{ others[0].number }
                </div>

                <div style = { {textAlign: 'right'} }>
                  <span style = { {fontWeight: 600} }>{ others[1].name }</span>
                  <br />
                  { others[1].number }&nbsp;
                  <img alt = 'Whatsapp Icon' src = { whatsappIcon } />
                </div>
              </div>

              <div id = 'contact-others' className = 'contact'>
                <div style = { {textAlign: 'left'} }>
                  <span style = { {fontWeight: 600} }>{ others[2].name }</span>
                  <br />
                  <img alt = 'Whatsapp Icon' src = { whatsappIcon } />
                  &nbsp;{ others[2].number }
                </div>

                <div style = { {textAlign: 'right'} }>
                  <span style = { {fontWeight: 600} }>{ others[3].name }</span>
                  <br />
                  { others[3].number }&nbsp;
                  <img alt = 'Whatsapp Icon' src = { whatsappIcon } />
                </div>
              </div>

              <div id = 'contact-office' className = 'contact'>
                <div id = 'contact-office-tag' class = 'contact-tag'>Office Phone Number</div>
                  <div id = 'contact-office-content'>
                    <img alt = 'Phone Icon' src = { phoneIcon } />
                    &nbsp;{ officeDetails.number1 }<br/>
                    <img alt = 'Phone Icon' src = { phoneIcon } />
                    &nbsp;{ officeDetails.number2 }
                </div>
              </div>
            </div>

            <div className = 'contact-sub-wrap'>
              <div id = 'contact-email' className = 'contact'>
                <div id = 'contact-email-tag' class = 'contact-tag'>Office Email</div>
                <div id = 'contact-email-content'>
                  <img alt = 'Gmail Icon' src = { gmailIcon } />
                  &nbsp;{ officeDetails.email }
                </div>
              </div>

              <div id = 'contact-gstno' className = 'contact'>
                <div id = 'contact-gstno-tag' class = 'contact-tag'>GST No.</div>
                <div id = 'contact-gstno-content'>
                  { officeDetails.gstno }
                </div>
              </div>

              <div id = 'contact-address' className = 'contact'>
                <div id = 'contact-address-tag' class = 'contact-tag'>Where to find us?</div>
                <div id = 'contact-address-content'>
                  { 
                    officeDetails.address.split('\n').map(
                      (item, index) => <span key = { index }>{ item }<br /></span>
                    )
                  }
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

function mapPropsToState (state) {
  return {
    activePageIndex: state.activePageIndex,
    prevPageIndex: state.prevPageIndex
  }
}

export default connect(mapPropsToState)(ContactPage);