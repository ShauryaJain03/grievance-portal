import { Sidebar, Menu, MenuItem } from 'react-pro-sidebar';
import EventNoteIcon from '@mui/icons-material/EventNote';
import DomainVerificationIcon from '@mui/icons-material/DomainVerification';
import LogoutIcon from '@mui/icons-material/Logout';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
function Account() {
  return (
    <div className='h-dvh'>
      <div className='h-full flex'>
      <Sidebar backgroundColor="rgb(29, 129, 220,0.4)" >
        <Menu>
          <div className='text-center mb-5'>
            Grievance Redressal Portal
          </div>
          <MenuItem> <EventNoteIcon/> Post Grievance</MenuItem>
          <MenuItem> <DomainVerificationIcon/> View Status</MenuItem>
          <MenuItem><ContentCopyIcon/>  Previous Posts</MenuItem>
          <MenuItem> <LogoutIcon/> Logout</MenuItem>
        </Menu>
      </Sidebar>
      <main style={{ padding: 10 }}>
        
      </main>
      </div>
    </div>
  )
}

export default Account
