import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { FaUserAlt } from "react-icons/fa";
import { AuthContext } from '../../Context/AuthProvider';

const Navbar = () => {

   const { user } = useContext(AuthContext)
   const menuItems =
      <React.Fragment>
         <li><Link to='/about'>About</Link>
         </li>
         <li><Link to='/contactUs'>Contact Us</Link>
         </li>
      </React.Fragment>
   return (
      <div>
         <div className="navbar bg-base-100 py-5">
            <div className="navbar-start">
               <div className="dropdown">
                  <label tabIndex={0} className="btn btn-ghost lg:hidden">
                     <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                  </label>
                  <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">


                     {/* <li><Link to='/review'>Review</Link></li> */}
                     {menuItems}

                     {
                        user?.uid ?
                           <>
                              <li><Link to='/appointment'>Appointment</Link></li>
                              <li><Link to='review'>Review</Link></li>
                              <li><button className='nav' > Logout</button></li>

                           </>
                           :
                           <>
                              <li><Link to='/register'>SignUp</Link></li>
                              <li><Link to='/login'>Login</Link></li>
                           </>
                     }
                  </ul>
               </div>
               <Link to='/' className="btn btn-ghost normal-case text-xl">
                  <div className='flex items-center ml-2 font-bold lg:text-3xl text-base'>
                     <img className='lg:w-14 w-10 mr-2' src='https://i.ibb.co/KNR8XZg/image-removebg-preview.png' alt="" />
                     <h3> Doctors Protal</h3>
                  </div>
               </Link>
            </div>

            <div className="mr-6 navbar-end">
               <div className=" hidden  lg:flex lg:text-lg font-semibold">
                  <ul className="menu menu-horizontal">
                     <li className='mx-1'><Link to='about'>About</Link></li>
                     <li className='mx-1'><Link to='contactUs'>Contact Us</Link></li>
                     {
                        user?.uid ?
                           <>
                              <li><Link to='/appointment' className='lg:text-lg  text-xs font-semibold nav mx-2'>Appointment</Link></li>
                              <li><Link to='my_review' className='lg:text-lg  text-xs font-semibold nav'>Review</Link></li>
                              <button className='mx-2 lg:text-lg text-xs font-semibold nav'> Logout</button>

                           </>
                           :
                           <>
                              <li><Link to='/register' className='mx-1 lg:text-lg text-xs font-semibold nav'>SignUp</Link></li>
                              <li><Link to='/login' className='mr-1 lg:text-lg text-xs font-semibold nav'>Login</Link></li>
                           </>
                     }
                  </ul>
               </div>

               <Link to='/user'>
                  {
                     user?.photoURL ?
                        <>
                           <img title={user?.displayName} className='h-12 rounded-full ' src={user?.photoURL} alt="User_Photo" />
                        </>
                        :
                        <span ><FaUserAlt></FaUserAlt> </span>
                  }

               </Link>
            </div>
         </div>
      </div>
   );
};

export default Navbar;