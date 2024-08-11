import BuildingTasks from './BuildingTasks';
import PersistentDrawerRight from './UserBar';

export default function HomePage() {


  return (
    <div style={{display:'flex' , columnGap:'28px',height:'calc(100% - 56px)' , padding:'28px'}}>
      <PersistentDrawerRight />
      <BuildingTasks />
    </div>
  )
}