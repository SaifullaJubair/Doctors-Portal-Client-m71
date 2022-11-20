import React, { useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider';
import useAdmin from '../../hooks/useAdmin';
import Loading from '../../Shared/Loading/Loading';
import Navbar from '../../Shared/Navbar/Navbar';

const DashboardLayout = () => {
   const { user } = useContext(AuthContext);
   const [isAdmin, isAdminLoading] = useAdmin(user?.email)
   if (isAdminLoading) {
      return <span>Loading</span>
   }
   console.log(isAdmin)
   return (
      <div>
         <Navbar></Navbar>
         <div className="drawer drawer-mobile">
            <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content">

               <Outlet></Outlet>


            </div>
            <div className="drawer-side">
               <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
               <ul className="menu p-4 w-80 bg-base-100 text-base-content">
                  {/* <!-- Sidebar content here --> */}
                  <li><Link to='/dashboard'>My Appointment</Link></li>

                  {
                     isAdmin && <><li><Link to='/dashboard/allusers'>All Users</Link></li>
                     </>
                  }

               </ul>

            </div>
         </div>
      </div>
   );
};

export default DashboardLayout;