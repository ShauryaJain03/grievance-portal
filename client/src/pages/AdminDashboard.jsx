import { Sidebar, Menu, MenuItem } from 'react-pro-sidebar';
import EventNoteIcon from '@mui/icons-material/EventNote';

import DomainVerificationIcon from '@mui/icons-material/DomainVerification';
import LogoutIcon from '@mui/icons-material/Logout';
import { Link } from 'react-router-dom';
import BarCharts, {      } from '../components/Charts';
function AdminDashboard() {
  return (
    <div>
      <div className='h-dvh'>
        <div className='h-full flex '>
            <Sidebar backgroundColor="#87CEEB" width='280px'  className='shadow-xl shadow-stone-400 '>
                <Menu>
                <div className='text-center my-5 text-xl font-semibold'>
                    Grievance Redressal Portal
                </div>
                <br/>
                <Link to="/admin/"><MenuItem> <DomainVerificationIcon/> Dashboard</MenuItem></Link>
              <Link to="/admin/grievance"><MenuItem> <EventNoteIcon/> New Grievances</MenuItem></Link>
              <MenuItem> <LogoutIcon/> Logout</MenuItem>
              </Menu>
            </Sidebar> 
      <main className='flex flex-col w-full'>
        <div className='py-4 px-4'>
            <div className='text-lg font-semibold py-6'>DASHBOARD</div>
            <div className='flex py-2 gap-3 text-white'>
              <div className="p-4 w-[24%] rounded-xl bg-orange-500">
                <div className='text-xl font-semibold'>18</div>
                <div>Pending Grievances</div>
              </div>    
              <div className="p-4 w-[24%] rounded-xl bg-blue-500">
                <div className='text-xl font-semibold'>40</div>
                <div>Resolved Grievances</div>
              </div>    
              <div className="p-4 w-[24%] rounded-xl bg-green-500">
                <div className='text-xl font-semibold'>3 days</div>
                <div>Average Resolution Time</div>
              </div>    
              <div className="p-4 w-[24%] rounded-xl bg-red-500">
                <div className='text-xl font-semibold'>6</div>
                <div>Active Staff</div>
              </div>    
            </div>
        </div>
        <div className='h-full'>
            <BarCharts/>
        </div>        
      </main>
      </div>
    </div>
    </div>
  )
}

export default AdminDashboard
