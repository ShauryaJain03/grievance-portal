/* eslint-disable react/prop-types */
import { Sidebar, Menu, MenuItem } from 'react-pro-sidebar';
import EventNoteIcon from '@mui/icons-material/EventNote';

import DomainVerificationIcon from '@mui/icons-material/DomainVerification';
import LogoutIcon from '@mui/icons-material/Logout';
import { Link } from 'react-router-dom';
import { Avatar, Divider, TextField } from '@mui/material';
import { useState } from 'react';
import ImageViewer from '../components/ImageViewer';

function PrevComp(props){
    const [dec,setDec]=useState("");
    console.log(dec);
    return (
        <div className=' w-[800px] border-2 rounded-lg py-2 px-4'>
            <div className="flex items-center justify-between py-2">
                <div className="flex items-center justify-center gap-3">
                    <div>
                        <Avatar src= {`${props.img}`} />
                    </div>
                    <div className='font-semibold'>
                        {props.title}
                    </div>
                    <Divider orientation="vertical" flexItem/>
                    <div className='flex gap-2'>
                        <div className='font-semibold'>Posted By : </div>
                        <div className='text-blue-500 font-semibold'>{props.postby}</div>
                    </div>
                </div>
                <div>
                    <div className='text-red-500 font-semibold'>{props.escalated}</div>
                </div>
                <div className="flex gap-2">
                    <div className='font-semibold'>Posted On :</div>
                     <div className='text-blue-500 font-semibold'>{props.date}</div>
                </div>
            </div>

            <div className='py-2'>
                <div className='font-semibold'>Description :</div>
                <div>{props.desc}</div>
            </div>
            <div className='py-2 flex flex-col gap-4'>
                <div className='font-semibold'>Related Images :</div>
                <div>
                    <ImageViewer/>
                </div>
            </div>
            <div>
            <div className='flex gap-8 py-2 items-center'>
                <TextField id="outlined-basic" label="Final Decision" multiline fullWidth variant="standard" value={dec} onChange={(e)=>{setDec(e.target.value)}}/>
            </div>
            </div>
            <div className='pt-8 flex items-center justify-center gap-6'>
                <button className='border-2 px-2 py-2 rounded-lg bg-green-500 hover:bg-green-600 text-white'>Set as Resolved</button>
                <button className='border-2 px-2 py-2 rounded-lg bg-yellow-500 hover:bg-yellow-600 text-white'>Set as In Progress</button>
                <button className='border-2 px-2 py-2 rounded-lg bg-red-500 hover:bg-red-600 text-white'>Set as Unresolved</button>
            </div>
        </div>
    )
  }

function AdminGrievance() {
  return (
    <div>
    <div className='h-dvh'>
      <div className='h-dvh flex'>
          <Sidebar backgroundColor="#87CEEB" width='280px'  className='shadow-xl shadow-stone-400 h-full'>
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
      <div className='text-xl py-6  px-6 font-semibold'>NEW GRIEVANCES</div>
      <div className='py-4 px-4 flex flex-col gap-5 justify-center items-center'>
      <PrevComp img={''} title={"lorem epsum dolor it su"} postby={"John Doe"} desc={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, porro facere ipsa voluptates asperiores consequatur veniam commodi inventore nisi ducimus tenetur ut cupiditate, laboriosam, autem fugit molestias nemo magni quibusdam?"} date={"Jan 12, 2024"} escalated={"Escalated"}/>
      <PrevComp img={''} title={"lorem epsum dolor it su"} postby={"John Doe"} desc={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, porro facere ipsa voluptates asperiores consequatur veniam commodi inventore nisi ducimus tenetur ut cupiditate, laboriosam, autem fugit molestias nemo magni quibusdam?"} date={"Jan 12, 2024"}/>
      <PrevComp img={''} title={"lorem epsum dolor it su"} postby={"John Doe"} desc={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, porro facere ipsa voluptates asperiores consequatur veniam commodi inventore nisi ducimus tenetur ut cupiditate, laboriosam, autem fugit molestias nemo magni quibusdam?"} date={"Jan 12, 2024"}/>
      </div>
    </main>
    </div>
  </div>
  </div>
  )
}

export default AdminGrievance
