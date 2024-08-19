import { useState } from 'react';
import TaskList from '../TaskList.jsx';
import FloorNumber from '../FloorNumber.jsx';


function BuildingTasks() {

  const [tasks , setTasks] = useState([
    {id:1 , title:'تکسچر کعبه' , description:'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و ...'},
    {id:2 , title:'task2' , description:'lorem lorem2'},
    {id:3 , title:'task3' , description:'lorem lorem3'},
  ])

  const deleteTask = (id) => {
    setTasks(tasks.filter((item) => item.id !== id))
  }
// , height:'calc(100% - 30px)'
  return (
    <div style={{ rowGap:'8px' , display : 'grid' , flex:1 , overflowY:'auto', padding:'8px' , backgroundColor:'#F3F3F3' , height:'calc(100% - 16px)' , width:'100%' , borderRadius:'12px'}}>
      <div>
        <div style={{display:'flex' ,  columnGap:'16px'}}>
          <FloorNumber fnum='7'/>
          <TaskList tasks = {tasks}  onDelete= {deleteTask}/>
        </div>
      </div>
      <div>
        <div style={{display:'flex' ,  columnGap:'16px'}}>
          <FloorNumber fnum='6'/>
          <TaskList tasks = {tasks}  onDelete= {deleteTask}/>
        </div>
      </div>
      <div>
        <div style={{display:'flex' ,  columnGap:'16px'}}>
          <FloorNumber fnum='5'/>
          <TaskList tasks = {tasks}  onDelete= {deleteTask}/>
        </div>
      </div>
      <div>
        <div style={{display:'flex' ,  columnGap:'16px'}}>
          <FloorNumber fnum='4'/>
          <TaskList tasks = {tasks}  onDelete= {deleteTask}/>
        </div>
      </div>
      <div>
        <div style={{display:'flex' ,  columnGap:'16px'}}>
          <FloorNumber fnum='3'/>
          <TaskList tasks = {tasks}  onDelete= {deleteTask}/>
        </div>
      </div>
      <div>
        <div style={{display:'flex' ,  columnGap:'16px'}}>
          <FloorNumber fnum='2'/>
          <TaskList tasks = {tasks}  onDelete= {deleteTask}/>
        </div>
      </div>
      <div>
        <div style={{display:'flex' ,  columnGap:'16px'}}>
          <FloorNumber fnum='1'/>
          <TaskList tasks = {tasks}  onDelete= {deleteTask}/>
        </div>
      </div>
    </div>
  )
}

export default BuildingTasks
