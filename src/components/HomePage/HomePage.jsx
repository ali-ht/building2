import BuildingTasks from './BuildingTasks.jsx';
import Sidebar from './sidebar.jsx';


export default function HomePage() {


  return (
    <div style={{display:'flex' , columnGap:'28px',height:'calc(100% - 56px)' , padding:'28px'}}>
      {/* <PersistentDrawerRight /> */}
      <Sidebar/>
      <BuildingTasks />
    </div>
  )
}