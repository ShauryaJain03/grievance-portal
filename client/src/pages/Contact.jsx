/* eslint-disable react/prop-types */

import { Avatar, Divider } from "@mui/material"
import HeaderNoPic from "../components/HeaderNoPic"

export function EduComp(props){
  return <div className="flex items-center justify-between py-2 border-2 h-[100px] w-[600px] rounded-lg px-4">
      <div className="flex items-center justify-center gap-3">
        <div>
          <Avatar src= {`${props.img}`} />
        </div>
        <div>
          {props.name}
        </div>
        <Divider orientation="vertical" flexItem />
        <div>
          {props.pos}
        </div>
      </div>
      <div className="">
        {props.email}
      </div>
  </div>
}

function Contact() {
  return (
    <>
    <HeaderNoPic/>
    <div className="flex flex-col items-center justify-center">
      <div className="text-2xl mt-8 font-bold">Contact</div>
      <div className="text-stone-500 mb-8 mt-2">Any more issues? Feel free to reach out</div>
      <div className="h-full flex items-center justify-center py-3">
        <EduComp name={"Dr. Upendra Kumar"} pos={"Chief Proctor"} email={"upendra@iiita.ac.in"} img= {""} />
      </div>
      <div className="h-full flex items-center justify-center py-3">
        <EduComp name={"Dr. Amarnath Yadav"} pos={"Chief Warden"} email={"amarnath@iiita.ac.in"} img= {""} />
      </div>
      <div className="h-full flex items-center justify-center py-3">
        <EduComp name={"Dr. Amarnath Yadav"} pos={"Chief Warden"} email={"amarnath@iiita.ac.in"} img= {""} />
      </div>
    </div>
    </>
  )
}

export default Contact
