import React, {useState} from 'react'
import Logo from '../assets/logo.png';
import search from '../assets/search.png'
import user from '../assets/user.png'
import { Link, NavLink } from 'react-router-dom';


function Navbar() {

    const [nav, setnav] = useState(false);

    const changeBackground = () => {
        if(window.scrollY >= 50) {
            setnav(true);
        }else{
            setnav(false);
        }
    }
    window.addEventListener('scroll', changeBackground)

  return (
    
<nav className={nav ? 'nav active': 'nav'}>
   <a className='logo'>
        <img src={Logo} alt='/' />
        
        </a>
    <input type='checkbox' className='menu-btn'/>
    <label className='menu-icon' for='menu-btn'>
        <span className='nav-icon'></span>
    </label>
    <ul className='menu'>
        <li><a to="/">Home</a></li>
        <li><a>UpLoad</a></li>
        <li><a>Download</a></li>
        <li><a to="/contact">Contact</a></li>
        
        </ul>
      
   
        <div class="row height d-flex justify-content-center align-items-center">

<div class="col-md-6">

  <div class="form">
    <i class="fa fa-search"></i>
    <input type="text" class="form-control form-input" placeholder="Search "/>
    <span class="left-pan"><i class="fa fa-microphone"></i></span>
  </div>
  
</div>

</div>

    <ul className='search-icon'>
    <li> <img src={user} alt=''/></li>
    </ul>
 

   </nav>
  )
}

export default Navbar