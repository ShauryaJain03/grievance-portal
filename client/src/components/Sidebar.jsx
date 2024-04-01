import { Sidebar, Menu, MenuItem } from 'react-pro-sidebar';
import EventNoteIcon from '@mui/icons-material/EventNote';

import DomainVerificationIcon from '@mui/icons-material/DomainVerification';
import LogoutIcon from '@mui/icons-material/Logout';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import { Link } from 'react-router-dom';
function SidebarComp() {
  return (
    <div>
      <Sidebar backgroundColor="#87CEEB" width='280px'  className='shadow-xl shadow-stone-400 h-full'>
        <Menu>
        <div className='text-center my-5 text-xl font-semibold'>
            Grievance Redressal Portal
          </div>
          <br/>
          <Link to="/account"><MenuItem> <EventNoteIcon/> Post Grievance</MenuItem></Link>
          <Link to="/account/status"><MenuItem> <DomainVerificationIcon/> 
           View Status
          </MenuItem></Link>
          <Link to="/account/previous"><MenuItem><ContentCopyIcon/>  Previous Posts</MenuItem></Link>
          <MenuItem> <LogoutIcon/> Logout</MenuItem>
        </Menu>
      </Sidebar> 
    </div>
  )
}

export default SidebarComp
