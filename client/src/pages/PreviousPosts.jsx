/* eslint-disable react/prop-types */
import { Avatar, Divider } from '@mui/material';
import SidebarComp from '../components/Sidebar';

function PrevComp(props){
    return (
        <div className=' w-[800px] border-2 rounded-lg py-2 px-4'>
            <div className="flex items-center justify-between py-2 font-semibold">
                <div className="flex items-center justify-center gap-3">
                    <div>
                        <Avatar src= {`${props.img}`} />
                    </div>
                    <div>
                        {props.title}
                    </div>
                    <Divider orientation="vertical" flexItem />
                    <div className='flex gap-2'>
                        Posted By : <div>{props.postby}</div>
                    </div>
                </div>
                <div className="flex gap-2">
                        Status : <div className={props.status==="Resolved"?"text-green-400":"text-red-400"}>{props.status}</div>
                </div>
            </div>

            <div className='py-2'>
                <div className='font-semibold'>Description</div>
                <div>{props.desc}</div>
            </div>
        </div>
    )
  }


function Previous() {

  return (
    <div>
      <div className='h-dvh'>
        <div className='h-full flex'>
          <SidebarComp/>

      <main className='flex flex-col w-full'>

      <div className='flex px-8 py-5 justify-between items-center'>
        <div className='text-lg font-semibold'>Previous Posts</div>

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

      <div className='w-full h-full flex flex-col items-center justify-center gap-8'>

        <PrevComp img={''} title={"lorem epsum dolor it su"} postby={"John Doe"} desc={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, porro facere ipsa voluptates asperiores consequatur veniam commodi inventore nisi ducimus tenetur ut cupiditate, laboriosam, autem fugit molestias nemo magni quibusdam?"} status={"Resolved"}/>

        <PrevComp img={''} title={"lorem epsum dolor it su"} postby={"John Doe"} desc={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, porro facere ipsa voluptates asperiores consequatur veniam commodi inventore nisi ducimus tenetur ut cupiditate, laboriosam, autem fugit molestias nemo magni quibusdam?"} status={"Unresolved"}/>
      </div>
      </main>
      </div>
    </div>
    </div>
  )
}

export default Previous
