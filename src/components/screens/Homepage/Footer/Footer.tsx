import '../Footer/footer.scss';
// import image1 from '../../../../assets/images/image1.png';
// import image2 from '../../../../assets/images/image2.png';
// import image3 from '../../../../assets/images/image3.png';
// import image4 from '../../../../assets/images/image4.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot, faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faFacebookF, faInstagram , faTwitter } from '@fortawesome/free-brands-svg-icons';
const Footer = () => {
  return (
    <section className='footer'>
      <div className="container">
        <div className="connect">
          <div className="text">Interested? Connect with us.</div>
          <div className="buttons">
            <button className="sign-up">Sign Up</button>
            <button className="get-started">Get Started</button>

          </div>

        </div>
        <div className="partners">
          <div className="partner-name">Our Partners</div>
          <div className="images">
            <div><img src="/images/image1.png" alt="" /></div>
            <div><img src="/images/image2.png" alt="" /></div>
            <div><img src="/images/image3.png" alt="" /></div>
            <div><img src="/images/image4.png" alt="" /></div>
          </div>
        </div>



      </div>
      <div className="footer-main">
        <div className="container">
          <div className="logo">
            LitNet
          </div>
          <div className="footer-links">
            <div className="navigations">
              <div className="para">Navigations</div>
              <div className="navigation-links">
                <div>Home</div>
                <div>About</div>
                <div>Services</div>
                <div>Features</div>
                <div>Contacts</div>
              </div>

            </div>
            <div className="catagories">
              <div className="para">Catagories</div>
              <div className="catagories-link">
                <div>Courses</div>
                <div>Colleges</div>
                <div>Resources</div>

              </div>
            </div>
            <div className="help">
              <div className="para">Help and Support</div>
              <div className="help-link">
                <div>FAQs</div>
                <div>Supports</div>
                <div>Resources</div>
              </div>
            </div>
           
          </div>
          <div className="contact">
              <div className="para">Connect with Us</div>
              <div className="contact-links">
                <div className="contact-link">
                  <div>98xxxxxxxx, 01-1233222</div>
                  <div>Kathmandu, Nepal</div>
                  <div>me@malbro.com</div>
                </div>
                <div className="contact-icons">
                  <FontAwesomeIcon icon={faPhone} />
                  <FontAwesomeIcon icon={faLocationDot} />
                  <FontAwesomeIcon icon={faEnvelope} />
                </div>
              </div>
              <div className="social-icons">
                <FontAwesomeIcon icon={faFacebookF} />
                <FontAwesomeIcon icon={faInstagram} />
                <FontAwesomeIcon icon={faTwitter} />
              </div>

            </div>
        </div>
        
      </div>
      <div className="company ">
         <div className="container">
           <div className="name">
           LitNet Pvt. Ltd
           </div>
         </div>
          </div>
    </section>
  )
}

export default Footer