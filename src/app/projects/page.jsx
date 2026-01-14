"use client";
import { Plus, Clock, Wifi, CheckCircle } from "lucide-react";
import { HiOutlineDocumentChartBar } from "react-icons/hi2";
import Link from "next/link";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setProject } from "../redux/slices/projectSlice";
import { useSearchParams } from "next/navigation";
// import ProjectSlice from '../redux/slices/projectSlice'

export default function Project() {
  
  const { currentUserId } = useSelector((state) => state.user)
  const [isOpen, setIsOpen] = useState(false);
  const [projects, setProjects] = useState({
    name: '',
    id: currentUserId
  })
  const [error, setError] = useState("")

 const params = useSearchParams();
 const issu = params.get("issues")
  
  const { project }= useSelector(state => state.project);
  const dispatch = useDispatch()

  const handleSubmit = (e) => {
    e.preventDefault();
    if(!projects.name){
       setError("Project name required")
    }
    else{
      setError("")
        dispatch(setProject(projects))
        setProjects("")
        setIsOpen(false)
    }
  };

  const changeHandle = (e) => {
    const name = e.target.name
    const value = e.target.value
    setProjects({...projects, [name]: value})
    
  }

  function timeAgo(timestamp) {
  const seconds = Math.floor((Date.now() - timestamp) / 1000);

  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);

  if (seconds < 60) return `${seconds} sec ago`;
  if (minutes < 60) return `${minutes} min${minutes > 1 ? "s" : ""} ago`;
  if (hours < 24) return `${hours} hour${hours > 1 ? "s" : ""} ago`;
  return `${days} day${days > 1 ? "s" : ""} ago`;
}


  console.log(project);
  
  return (
    
    <div className="bg-[#f9faff] relative">

          <main className="px-22 py-10 h-[600px]">
        <div className="flex justify-between items-center mb-6">
          <div className="flex flex-col gap-3 mb-10 h-22">
            <h2 className="text-2xl font-semibold text-gray-800">Projects</h2>
            <p className="text-gray-500">Manage your issue tracking projects</p>
          </div>

          <button
            onClick={() => setIsOpen(true)}
            className="flex items-center gap-2 bg-[#4f46e5] text-white px-4 py-2 rounded-lg font-medium hover:bg-[#4338ca] transition">
            <Plus className="h-4 w-4" /> Create Project
          </button>
        </div>

        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

          {
            project && project.map((data) => (
              <Link href={`/issues?name=${data.name}`}>
                <div className="rounded-xl shadow-sm p-6 h-[200px] bg-white hover:shadow-md transition">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="h-10 w-10 rounded-lg bg-indigo-100 flex items-center justify-center">
                      <HiOutlineDocumentChartBar className="h-6 w-6 text-[#4f46e5]" />
                    </div>
                  </div>
                  <div className="h-22 flex flex-col justify-center">
                    <h3 className="text-lg font-medium text-gray-800">{data.name}</h3>
                    <p className="text-gray-500 text-sm mb-2">{`${issu == 1 ? issu+ " " + "issue" : issu+ " " + "issues"}`}</p>
                  </div>
                  <div className="flex h-[28] items-center text-gray-400 text-sm gap-2">
                    <Clock className="h-4 w-4" />
                    <p>{timeAgo(data.createdAt)}</p>
                  </div>
                </div>
              </Link>
            ))
          }

          {isOpen && (
            <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
              <div className="bg-white h-[250px] rounded-lg p-6 w-[450px] shadow-lg">
                <h2 className="text-lg font-semibold mb-2">Create New Project</h2>
                <p className="text-gray-500 text-sm mb-4">
                  Add a new project to start tracking issues
                </p>
                <form onSubmit={handleSubmit}>
                <div className="flex flex-col h-[110px] justify-center">
                    {
            error && (
                <h1 className="text-red-700">{error}</h1>
            )
          }
                  <label
                    for="text"
                    className="block text-sm font-medium mb-1">
                    Project Name
                  </label>
                  <input
                    type="text"
                    id="text"
                    name="name"
                    placeholder="My Awesome Project"
                    value={projects.name}
                    onChange={changeHandle}
                    className="w-full border rounded-md px-3 py-2 mb-4 outline-none focus:ring-2 focus:ring-[#4f46e5]"
                  />
                </div>
                <div className="flex h-[60px] items-center justify-end gap-3">
                  <button
                    onClick={() => setIsOpen(false)}
                    className="px-4 py-2 rounded-md border h-[45px]"
                  >
                    Cancel
                  </button>
                  <button
                    className="px-4 py-2 rounded-md h-[45px] bg-[#4f46e5] text-white"
                  >
                    Create Project
                  </button>
                </div>
                </form>
                
              </div>
            </div>
          )}


        </div>
      </main>

      
    </div>
  );
}
