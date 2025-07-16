

export function TaskListView({currentTask,taskList,getCurrentTask}){

    var taskTableSheelStyle="p-4 text-center "
    return    <div className="flex flex-col  w-1/2 h-10 mr-2 min-w-sm">

      <div className="flex  bg-blue-400 w-full h-fit rounded-xl">
      <p className={taskTableSheelStyle+"w-1/9"} >S.no</p>
      <p className={taskTableSheelStyle+"w-3/9 "} >Updated Date</p>
      <p className={taskTableSheelStyle+"w-3/9 "} >Description</p>
      <p className={taskTableSheelStyle+"w-2/9"} >Status</p>
      </div> 
      
      {
   
   
    Array.from(taskList||[]).map((v,i)=>{
         return (
  <div key={i} className={`flex hover:bg-blue-200 cursor-pointer  ${ currentTask?._id&&currentTask._id==v._id? 'bg-blue-500! rounded-sm':''}`} onClick={()=>{
    getCurrentTask(v)
  }}>
    <p className={taskTableSheelStyle+" w-1/9"}>{i+1}</p>
    <p className={taskTableSheelStyle+" w-3/9"} >{formatTimestamp(v.updatedAt)}</p>
    <p className={taskTableSheelStyle+" w-3/9"}>{v.description}</p>
    <p className={taskTableSheelStyle+" w-2/9"}>{v.status}</p>
  </div>
)     })
      }
      
     <button className={`p-3 ml-[80%] mt-7   rounded-sm`} onClick={()=>{
      setCurrentTask(undefined)
     }}>Add Task</button>

      </div>

}

function formatTimestamp(timestamp) {
  const date = new Date(timestamp);

  const day = String(date.getDate()).padStart(2, '0');
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const year = date.getFullYear();

  const hours = String(date.getHours()).padStart(2, '0');
  const minutes = String(date.getMinutes()).padStart(2, '0');

  return `${day}/${month}/${year} ${hours}:${minutes}`;
}
