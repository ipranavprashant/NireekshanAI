// import DetailsCard from './DetailsCard'
import ChatAI from './ChatAI'
import DetailsCard from './DetailsCard'
import Navbar from './Navbar'
import Sidebar from './Sidebar'
import Statistics from './Statistics'


function Main() {

  return (
        <div>
  <div className='mt-3'>
       <Navbar />
       </div>
      <div className='flex space-x-8 p-4'>
        <Sidebar />

    <ChatAI />
      <Statistics />
      <DetailsCard />
    </div>
    </div>
  )
}

export default Main
