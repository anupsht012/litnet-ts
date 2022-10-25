
import '../Login/login.scss';
// import loginPic from '../../../../assets/images/loginpic.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot, faLock, faEnvelope } from '@fortawesome/free-solid-svg-icons';
// import { faFacebookF, faInstagram , faTwitter } from '@fortawesome/free-brands-svg-icons';
import  Navbar  from '../../Homepage/Navbar/Navbar';


const Login = () => {
  return (

    <section className='login'>
      <div className="navbar-div">
        <Navbar logo="PoemNet"/>
      </div>
      <div className="content">
        <div className="image-area">
          <img src='/images/loginpic.png' alt="" />
        </div>
        
        <div className="login-area">
          
          <div className="user-login">
           <div className="login-div">
           <div className="login-title">
              <div className="login-title-name">
              User Login
              </div>
              <div className="bar"></div>
            
            </div>
            <div className="input-field">
              <div className="email-address">
                  <FontAwesomeIcon icon={faEnvelope} />
              <input type="email" placeholder='Email' />
              </div>
              <div className="password">
              <FontAwesomeIcon icon={faLock} />
              <input type="password" placeholder='Password' />


              </div>
            </div>
            <div className="forget">Forgot Password ?</div>

            <div className="button">
              <button className="login-btn">Login</button>
            </div>
            <div className="create">Create an account</div>
           </div>
          </div>
        </div>
      </div>
    </section>

  )
}

export default Login