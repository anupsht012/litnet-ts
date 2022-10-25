
import '../Register/register.scss';
// import loginPic from '../../../../assets/images/loginpic.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPerson, faLock, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import Navbar from '../../Homepage/Navbar/Navbar';

const Register = () => {
  return (
    <section className="register">
         <div className="navbar-div">
        <Navbar logo="PoemNet"/>
      </div>
      <div className="content">
        <div className="image-area">
          <img src='/images/loginpic.png' alt="" />
        </div>
        
        <div className="register-area">
          
          <div className="register-login">
           <div className="register-div">
           <div className="register-title">
              <div className="register-title-name">
             Register
              </div>
              <div className="bar"></div>
            
            </div>
            <div className="input-field">
            <div className="username">
                  <FontAwesomeIcon icon={faPerson} />
              <input type="text" placeholder='Full Name' />
              </div>

              <div className="email-address">
                  <FontAwesomeIcon icon={faEnvelope} />
              <input type="email" placeholder='Email' />
              </div>
              <div className="password">
              <FontAwesomeIcon icon={faLock} />
              <input type="password" placeholder='Password' />
              </div>
              <div className="confirm-password">
              <FontAwesomeIcon icon={faLock} />
              <input type="password" placeholder='Confirm Password' />
              </div>
            </div>
        

            <div className="button">
              <button className="register-btn">Sign up</button>
            </div>
            <div className="create">Already have an account?Sign in</div>
           </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Register