import React, {use, useContext, useState} from 'react'
import { AuthContext } from '../../context/AuthProvider'
const CreateTask = () => {

  const [ userData, setUserData] = useContext(AuthContext);

  const [taskTitle, setTaskTitle] = useState('')
  const [taskDescription, setTaskDescription] = useState('')
  const[taskDate, setTaskDate] = useState('')
  const [ assignTo, setAssignTo] = useState('')
  const [category, setCategory] = useState('')
  
  const [newTask, setNewTask] = useState({})

  const submitHandler = (e) =>{
    e.preventDefault()

   setNewTask({taskTitle, taskDescription, taskDate, category,active:false,newTask:true, completed:false, failed:false})

   const data = userData
   
   
   data.forEach(function(elem){
    if(assignTo == elem.firstname){
      elem.tasks.push(newTask)
      elem.taskNumbers.newTask += 1
      
    }
   })
   setUserData(data)

   console.log(data);
   

   
   
    
  }

  return (
    <div>
      <div className="mt-10">
        <form onClick={(e)=>{
          submitHandler(e)
        }} 
        
        className="p-5 bg-[#1c1c1c] rounded-xl flex flex-wrap w-full items-start justify-between">
          
          {/* Left side of the form (Inputs) */}
          <div className="w-1/2 flex flex-col items-start justify-between p-2">
            
            {/* Task Title Input */}
            <div className="mb-5 w-full">
              <h3 className="text-sm text-gray-300 mb-0.5">Task Title</h3>
              <input value={taskTitle}
              onChange={(e)=>{
                setTaskTitle(e.target.value)
              }}
                type="text" 
                placeholder="Make a UI design" 
                className="text-sm py-1 px-2 w-full rounded outline-none bg-transparent border-[1px] border-gray-500" 
              />
            </div>
            
            {/* Date Input */}
            <div className="mb-5 w-full">
              <h3 className="text-sm text-gray-300 mb-0.5">Date</h3>
              <input 
              value={taskDate}
              onChange={(e)=>{
                setTaskDate(e.target.value)
              }} 
                type="date" 
                className="text-sm py-1 px-2 w-full rounded outline-none bg-transparent border-[1px] border-gray-500" 
              />
            </div>
            
            {/* Assign to Input */}
            <div className="mb-5 w-full">
              <h3 className="text-sm text-gray-300 mb-0.5">Assign to</h3>
              <input 
              value={assignTo}
              onChange={(e)=>{
                setAssignTo(e.target.value)
              }}
                type="text" 
                placeholder="employee name" 
                className="text-sm py-1 px-2 w-full rounded outline-none bg-transparent border-[1px] border-gray-500" 
              />
            </div>
            
            {/* Category Input */}
            <div className="w-full">
              <h3 className="text-sm text-gray-300 mb-0.5">Category</h3>
              <input 
              value={category}
              onChange={(e)=>{
                setCategory(e.target.value)
              }}
                type="text" 
                placeholder="design, dev, etc" 
                className="text-sm py-1 px-2 w-full rounded outline-none bg-transparent border-[1px] border-gray-500" 
              />
            </div>
          </div>
          
          {/* Right side of the form (Description and Button) */}
          <div className="w-1/2 p-2">
            <h3 className="text-sm text-gray-300 mb-0.5">Description</h3>
            <textarea 
              value={taskDescription}
              onChange={(e)=>{
                setTaskDescription(e.target.value)
              }}
              name="" 
              id="" 
              cols="30" 
              rows="10"
              className="w-full h-44 text-sm py-2 px-4 rounded outline-none bg-transparent border-[1px] border-gray-500 resize-none"
            ></textarea>
            
            <button className="bg-emerald-500 py-3 hover:bg-emerald-600 px-5 rounded-lg text-sm mt-4 w-full">
              Create Task
            </button>
          </div>
        </form>
      </div> 
    </div>
  )
}

export default CreateTask
