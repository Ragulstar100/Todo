
const addTaskAction = (res,req)=>{
    try{

    res.status(200).json({msg:"Your Data added Sucessfully"})    
    }catch(error){
    res.status(400).json({msg:error.message})
    }

}

const readTaskAction = (res,req)=>{
    try{

    res.status(200).json({msg:"Your Data added Sucessfully"})    
    }catch(error){
    res.status(400).json({msg:error.message})
    }

const updateTaskAction = (res,req)=>{
    try{

    res.status(200).json({msg:"Your Data added Sucessfully"})    
    }catch(error){
    res.status(400).json({msg:error.message})
    }

}

const deleteTaskAction = (res,req)=>{
    try{
    res.status(200).json({msg:"Your Data added Sucessfully"})    
    }catch(error){
    res.status(400).json({msg:error.message})
    }

}