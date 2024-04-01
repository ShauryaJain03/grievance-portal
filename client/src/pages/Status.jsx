import StarRating from '../components/StarRating';
import { Divider } from '@mui/material';
import SidebarComp from '../components/Sidebar';

function Status() {

  return (
    <div>
      <div className='h-dvh'>
        <div className='h-full flex'>
          <SidebarComp/>
      <main className='flex flex-col w-full'>

      <div className='flex px-8 py-5 justify-between items-center'>
        <div className='text-2xl'>Status</div>

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
      <Divider/>
      <div className='w-full h-full'>
        <div className='px-8 flex justify-between w-3/4 py-5'>
            <div className='flex gap-2'>
              <div className='font-semibold'>Case Number : </div>
              <div>123</div>
            </div>
            <div className='flex gap-2'>
              <div className='font-semibold'>Name of Complainant : </div>
              <div>John Doe</div>
            </div>
            
        </div>
        <Divider/>
        <div className='w-full px-8 py-5 flex flex-col gap-8'>
            <div className='flex gap-2'>
              <div className='font-semibold'>Current Status : </div>
              <div className={`text-green-400`}>Resolved</div>
            </div>
            <div className='flex gap-2'>
              <div className='font-semibold'>Final Decision : </div>
              <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, aperiam Lorem ipsum dolor sit.</div>
            </div>
            <div className='flex justify-between w-3/4'>
                <div className='flex gap-2'>
                  <div className='font-semibold'>Action Taken By : </div>
                  <div>Dr. Amarnath</div>
                </div>
                <div className='flex gap-2'>
                  <div className='font-semibold'>Designation : </div>
                  <div>Chief Warden</div>
                </div>
            </div>
            <div className='flex justify-between w-3/4'>
                <div className='flex gap-2'>
                  <div className='font-semibold'>Email : </div>
                  <div>amarnath@iiita.ac.in</div>
                </div>
                <div className='flex gap-2'>
                  <div className='font-semibold'>Contact : </div>
                  <div>98732XXXXX</div>
                </div>
            </div>
        </div>
        <Divider/>
        <div className='px-8 py-5 flex items-center gap-4'>
          <div className='text-lg'>Feedback</div>
          <div>
            <StarRating maxRating={5} size={28} color={"#87CEEB "}/>
          </div>
        <div className='px-4 flex justify-center gap-16 py-4 font-semibold w-full text-white'>
            <button className='border border-green-400 px-3 py-2 rounded-xl bg-green-400 hover:bg-green-500'>Satisfied</button>
            <button className='border border-red-400 px-3 py-2 rounded-xl bg-red-400 hover:bg-red-500'>Escalate</button>
        </div>
        </div>
      </div>
      </main>
      </div>
    </div>
    </div>
  )
}

export default Status
