import './App.css'
import {Chart as ChartJS} from "chart.js/auto"
import { Pie } from 'react-chartjs-2'
import Jirath2 from './assets/IMG_9276.jpg'
import Navbar from './components/Navbar'
import GridCom from './components/Grid_com'

function App() {
  const data = {
    labels: [
      'Math',
      'Competitive Programming',
      'Web & Game Development'
    ],
    datasets: [{
      label: 'My Skills',
      data: [40, 30, 30],
      backgroundColor: [
        'rgb(255, 99, 132)',
        'rgb(54, 162, 235)',
        'rgb(255, 205, 86)'
      ],
      hoverOffset: 20
    }]
  };

  return (
    <div>
      <Navbar></Navbar>
      <div className='flex justify-between pt-20 pb-20 px-[25%] gap-10'>
        <div>
          <div className='text-[5vw] font-bold'>Hi There!</div>
          <div className='text-gray-600 text-2xl mb-6'>I'm a student from Joseph Upatham School looking forward to learn Computer Science!</div>
          <div className='text-gray-500 mb-10'>Since 2005, I've enjoyed turning complex problems into simple, beautiful and intuitive designs. When I'm not pushing pixels, you'll find me cooking, gardening or working out in the park.</div>
          <button className='bg-blue-500 text-white font-medium p-3 rounded-2xl cursor-pointer hover:bg-blue-400 duration-100'>See My Work!</button>
        </div>
        <img className='w-48 md:w-96 bg-white shadow-[0_4px_8px_0_rgba(0,0,0,0.5),_0_6px_20px_0_rgba(0,0,0,0.19)] rounded-2xl' src={Jirath2} alt="" />
      </div>
      
      <div className='flex flex-col md:flex-row md:gap-20 gap-10 px-[25%] py-15 bg-gray-100 shadow-[0_0px_8px_0_rgba(0,0,0,0.15),_0_0px_20px_0_rgba(0,0,0,0.15)]'>
        <div className='flex-1'><Pie data={data}></Pie></div>
        <div className='flex-1'>
          <div className='text-4xl font-medium'>My Interests </div>
          <div className='text-gray-500'><br />Since 2005, I've enjoyed turning complex problems into simple, beautiful and intuitive designs. When I'm not pushing pixels, you'll find me cooking, gardening or working out in the park.</div>
        </div>
      </div>
      
      <div className='bg-white px-[10%] py-10 shadow-[0_0px_8px_0_rgba(0,0,0,0.15),_0_0px_20px_0_rgba(0,0,0,0.15)]'>
        <div className='text-4xl font-medium pb-10'>Competitive Programming</div>
        <div className='grid grid-cols-3 gap-15'>
          <GridCom></GridCom>
          <GridCom></GridCom>
          <GridCom></GridCom>
          <GridCom></GridCom>
          <GridCom></GridCom>
          <GridCom></GridCom>
        </div>
      </div>
    </div>
  )
}

export default App
