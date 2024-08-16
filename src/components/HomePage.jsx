import BuildingTasks from './BuildingTasks';
import Sidebar from './sidebar';


function HomePage() {


  return (
    <div style={{display:'flex' , columnGap:'28px',height:'calc(100% - 56px)' , padding:'28px'}}>
      {/* <PersistentDrawerRight /> */}
      <Sidebar/>
      <BuildingTasks />
    </div>
  )
}

export default HomePage
