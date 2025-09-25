import './App.css'
import Jirath from './assets/Gemini_Generated_Image_v9znvvv9znvvv9zn.png'
import Navbar from './components/Navbar'

function App() {

  return (
    <div>
      <Navbar></Navbar>
      <div className='flex justify-between mt-20 px-[25%]'>
        <div>
          <div className='text-[5vw] font-bold'>Hi There!</div>
          <div className='text-gray-600 text-2xl mb-6'>I'm a student from Joseph Upatham School looking forward to learn Computer Science!</div>
          <div className='text-gray-500 mb-10'>Since 2005, I've enjoyed turning complex problems into simple, beautiful and intuitive designs. When I'm not pushing pixels, you'll find me cooking, gardening or working out in the park.</div>
          <button className='bg-blue-500 text-white font-medium p-3 rounded-2xl cursor-pointer hover:bg-blue-400 duration-100'>See My Work!</button>
        </div>
        <img className='w-48 md:w-96' src={Jirath} alt="" />
      </div>
      
    </div>
  )
}

export default App
