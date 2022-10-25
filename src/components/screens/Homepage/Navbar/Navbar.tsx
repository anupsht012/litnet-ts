import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { NavLink } from 'react-router-dom';
import './navbar.scss';

const Navbar = (props:any) => {
  
  return (
    <nav>
      <div className="container">
        <div className="navbar">
          <div className="logo ">
            <NavLink to={'/'}>{props.logo}</NavLink>
          </div>
          <div className="search  d-flex">
            <div className="input-container d-flex">
            <div className='icon'><FontAwesomeIcon icon={faMagnifyingGlass} /></div>
            <input type="text" placeholder="Search.." />
            </div>
          </div>
          <div className="nav-links d-flex">
            <div><NavLink to={'/review'}>Catagories</NavLink></div>
           <div> <NavLink to={'/login'}>Login</NavLink></div>
           <div> <NavLink to={'/register'}>Register</NavLink></div>
          </div>
        </div>

      </div>
    </nav>
  )
}

export default Navbar
