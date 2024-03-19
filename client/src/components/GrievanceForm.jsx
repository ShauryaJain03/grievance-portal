/* eslint-disable no-unused-vars */
import axios from "axios";
import { useState } from "react";

function GrievanceForm() {
    const [type,setType]=useState('');
    const [desc,setDesc]=useState('');
    const [image,setImage]=useState('');
    const [imageUrl,setImageURL]=useState('');

    function handleSubmit(event){
        event.preventDefault();
        console.log(type,desc,image,imageUrl);
        axios.post("http://localhost:4000/newGrievance",{
            type,
            desc,
            image,
        })
    }

    
    const handleFileChange = (e) => {
        const file = e.target.files[0];
        setImage(file);
        const reader = new FileReader();
        reader.onload = () => {
            setImageURL(reader.result);
        };
        reader.readAsDataURL(file);
    };


    return (
        <div className="mt-8 p-6 shadow-lg shadow-stone-400 rounded-md w-3/4 bg-slate-100">
        <h1 className="text-2xl mb-4">Submit Your Grievance</h1>

        <form onSubmit={handleSubmit}>

            <div className="mb-4">
            
                <select id="grievanceType" name="grievanceType" value={type} onChange={(e)=>{setType(e.target.value)}} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" required>
                    <option value="" disabled>Select the type of grievance</option>
                    <option value="academics">Academics</option>
                    <option value="mess">Mess</option>
                    <option value="hostel">Hostel</option>
                    <option value="other">Other</option>
                </select>
            </div>

            <div className="mb-4">
                
                <textarea id="description" name="description" value={desc} placeholder="Describe your grievance here" onChange={(e)=>{setDesc(e.target.value)}} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" rows="4" cols="50" required></textarea>
            </div>

            <div className="mb-4">
                <label htmlFor="image" className="block text-gray-700">Upload Related Image(s) if any</label>
                <input type="file" id="image" name="image" accept="image/*" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" onChange={handleFileChange}/>
            </div>

            <div className="text-center">
                <button type="submit" className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 focus:outline-none focus:bg-indigo-700">Submit</button>
            </div>
        </form>
    </div>
    );
}

export default GrievanceForm;
