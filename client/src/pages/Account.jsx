import { Sidebar, Menu, MenuItem } from 'react-pro-sidebar';
import EventNoteIcon from '@mui/icons-material/EventNote';
import DomainVerificationIcon from '@mui/icons-material/DomainVerification';
import LogoutIcon from '@mui/icons-material/Logout';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import GrievanceForm from '../components/GrievanceForm';


function Account() {
  return (
    <div className='h-dvh'>
      <div className='h-full flex'>
      <Sidebar backgroundColor="rgb(29, 129, 220,0.4)" width='280px'  className='shadow-xl shadow-stone-400'>
        <Menu>
          <div className='text-center my-5 text-xl font-semibold'>
            Grievance Redressal Portal
          </div>
          <br/>
          <MenuItem> <EventNoteIcon/> Post Grievance</MenuItem>
          <MenuItem> <DomainVerificationIcon/> View Status</MenuItem>
          <MenuItem><ContentCopyIcon/>  Previous Posts</MenuItem>
          <MenuItem> <LogoutIcon/> Logout</MenuItem>
        </Menu>
      </Sidebar>
      <main className='flex flex-col w-full'>

      <div className='flex px-8 py-5 justify-between items-center'>
        <div>Status</div>

        <div className="flex items-center gap-2 border border-gray-300 rounded-full py-2 px-4 ">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
          </svg>
          <div>John Doe</div>
          <div className="bg-gray-500 text-white rounded-full border border-gray-500 overflow-hidden">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 relative top-1">
              <path fillRule="evenodd" d="M7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM3.751 20.105a8.25 8.25 0 0116.498 0 .75.75 0 01-.437.695A18.683 18.683 0 0112 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 01-.437-.695z" clipRule="evenodd" />
            </svg>
          </div>
        </div>
      </div>

      <div className='w-full h-full flex items-start justify-center'>
        <GrievanceForm/>
      </div>


      </main>
      </div>
    </div>
  )
}

export default Account
