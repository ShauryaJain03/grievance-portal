import { Sidebar, Menu, MenuItem } from 'react-pro-sidebar';
import EventNoteIcon from '@mui/icons-material/EventNote';

import DomainVerificationIcon from '@mui/icons-material/DomainVerification';
import LogoutIcon from '@mui/icons-material/Logout';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
function SidebarComp() {
  return (
    <div>
              <Sidebar backgroundColor="#87CEEB" width='280px'  className='shadow-xl shadow-stone-400'>
        <Menu>
          <div className='text-center my-5 text-xl font-semibold'>
            Grievance Redressal Portal
          </div>
          <br/>
            <MenuItem><EventNoteIcon/> Post Grievance</MenuItem>
          
            <MenuItem><DomainVerificationIcon/> View Status</MenuItem>
          
            <MenuItem><ContentCopyIcon/>  Previous Posts</MenuItem>
         
            <MenuItem> <LogoutIcon/> Logout</MenuItem>
        </Menu>
      </Sidebar>      
    </div>
  )
}

export default SidebarComp
