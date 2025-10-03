import './App.css'
import {Chart as ChartJS} from "chart.js/auto"
import { Pie } from 'react-chartjs-2'
import { useState } from 'react'


import Jirath2 from './assets/IMG_9276.jpg'
import POSN from './assets/POSN_Pic.jpg'
import SCI_SU from './assets/LINE_ALBUM_แข่งขันตอบปัญหาวิทยาศาสตร์แข่งขันเขี.jpg'
import Bamso from './assets/Bamso.jpg'
import AMC from './assets/AMC.png'
import TMC from './assets/TMC.jpg'
import Math5 from './assets/Math5.jpg'
import Bee from './assets/75.png'
import NSC from './assets/NSC.png'
import Workspace from './assets/Workspace Web.png'
import coffee from './assets/coffee.png'

import Navbar from './components/Navbar'
import GridCom from './components/Grid_com'
import GridInfo from './components/GridInfo'



function App() {
  const [gridInfoVisible, setGridInfoVisible] = useState(false);
  const [gridShowing, setGridShowing] = useState<gridcom>();

  

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

  type gridcom = {
    img : string;
    des : string;
    title : string;
    organization : string;
    award : string;
  }

  function handleGridClicked(gridcom:gridcom) {
    setGridInfoVisible(true);
    setGridShowing(gridcom);
  }

  return (
    <div>
      <div className={`${gridInfoVisible ? "fixed inset-0  bg-black/50 z-10 w-screen h-screen backdrop-blur-[4px]" : "-z-50"} `}></div>
      <Navbar></Navbar>

      <GridInfo 
        title={gridShowing?.title??""}
        des={gridShowing?.des??""}
        visible={gridInfoVisible}
        img={gridShowing?.img??""}
        organization={gridShowing?.organization??""}
        award={gridShowing?.award??""}
        onClose={() => setGridInfoVisible(false)}
      >
        

      </GridInfo>

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
        <div className='text-4xl font-medium pb-10'>Competitive Programming 💻</div>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-15'>

          <GridCom onClick={() => handleGridClicked(
            {img: POSN, des : "dsdf", title : "สอวน. คอมพิวเตอร์ (ค่าย 1)", organization : "มูลนิธิส่งเสริมโอลิมปิกวิชาการและพัฒนามาตรฐานวิทยาศาสตร์ศึกษา (สอวน.)", award : "เข้าร่วมค่าย 1"})} 
            img={POSN} title='สอวน. คอมพิวเตอร์ (ค่าย 1)' organization='มูลนิธิส่งเสริมโอลิมปิกวิชาการและพัฒนามาตรฐานวิทยาศาสตร์ศึกษา (สอวน.)' Award='เข้าร่วมค่าย 1'>
          </GridCom>
          
          <GridCom onClick={() => handleGridClicked(
            {img: SCI_SU, des : "dsdf", title : "การแข่งขันเขียนโปรแกรมคอมพิวเตอร์ งานสัปดาห์วันวิทยาศาสตร์", organization : "คณะวิทยาศาสตร์ มหาวิทยาลัยศิลปากร", award : "รางวัลชมเชย"})}  
            img={SCI_SU} title='การแข่งขันเขียนโปรแกรมคอมพิวเตอร์ งานสัปดาห์วันวิทยาศาสตร์' organization='คณะวิทยาศาสตร์ มหาวิทยาลัยศิลปากร' Award='รางวัลชมเชย'>
          </GridCom>
          
          <GridCom onClick={() => handleGridClicked(
            {img: Bamso, des : "dsdf", title : "BAMSO 2024 : คอมพิวเตอร์", organization : "โรงเรียนบดินทรเดชา (สิงห์ สิงหเสนี)", award : "ผ่านเข้ารอบชิงชนะเลิศ 10 ทีมสุดท้าย"})}   
            img={Bamso} title='BAMSO 2024 : คอมพิวเตอร์' organization='โรงเรียนบดินทรเดชา (สิงห์ สิงหเสนี)' Award='ผ่านเข้ารอบชิงชนะเลิศ 10 ทีมสุดท้าย'>
          </GridCom>
        
        </div>
      </div>

      <div className='bg-gray-100 px-[10%] py-10 shadow-[0_0px_8px_0_rgba(0,0,0,0.15),_0_0px_20px_0_rgba(0,0,0,0.15)]'>
        <div className='text-4xl font-medium pb-10'>Mathematics 📉</div>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-15'>

          <GridCom onClick={() => handleGridClicked(
            {img: AMC, des : "dsdf", title : "Australian Mathematics Competition 2025 (AMC)", organization : "Australian Mathematics Trust (AMT)", award : "รางวัลเหรียญเงิน และ Certificate of Distinction"})}   
            img={AMC} title='Australian Mathematics Competition 2025 (AMC)' organization='Australian Mathematics Trust (AMT)' Award='รางวัลเหรียญเงิน และ Certificate of Distinction'>
          </GridCom>

          <GridCom onClick={() => handleGridClicked(
            {img: TMC, des : "dsdf", title : "13ᵗʰ Thailand Mathematics Contest (TMC)", organization : "สมาชิกภาพสหภาพ IMC ประจำประเทศไทย", award : "รางวัลเหรียญทองแดง"})} 
            img={TMC} title='13ᵗʰ Thailand Mathematics Contest (TMC)' organization='สมาชิกภาพสหภาพ IMC ประจำประเทศไทย' Award='รางวัลเหรียญทองแดง'>
          </GridCom>

          <GridCom onClick={() => handleGridClicked(
            {img: Math5, des : "dsdf", title : "การแข่งขันทักษะวิชาการเขตการศึกษา 5  อัครสังฆมณฑลกรุงเทพฯ", organization : "โรงเรียนเขตการศึกษา 5 อัครสังฆมณฑลกรุงเทพฯ", award : "ชนะเลิศ ระดับเหรียญทอง"})} 
            img={Math5} title='การแข่งขันทักษะวิชาการเขตการศึกษา 5  อัครสังฆมณฑลกรุงเทพฯ' organization='โรงเรียนเขตการศึกษา 5 อัครสังฆมณฑลกรุงเทพฯ' Award='ชนะเลิศ ระดับเหรียญทอง'>
          </GridCom>

          <GridCom img={Bee} title='Integration Bee 2025 @Chulalongkorn University' organization='กรรมการนิสิตคณะวิศวกรรมศาสตร์ จุฬาลงกรณ์มหาวิทยาลัย' Award='รางวัลเหรียญทองแดง'></GridCom>
        </div>
      </div>

      <div className='bg-white px-[10%] py-10 shadow-[0_0px_8px_0_rgba(0,0,0,0.15),_0_0px_20px_0_rgba(0,0,0,0.15)]'>
        <div className='text-4xl font-medium pb-10'>Web & Game Development 🎮</div>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-15'>
          <GridCom img={NSC} title='การแข่งขันพัฒนาโปรแกรมคอมพิวเตอร์แห่งประเทศไทยครั้งที่ 27 (NSC 2025)' organization='สำนักงานพัฒนาวิทยาศาสตร์และเทคโนโลยีแห่งชาติ สวทช.' Award='ผ่านเข้ารอบชิงชนะเลิศ และได้รับทุนสนับสนุน 10,000 บาท'></GridCom>
          <GridCom img={Workspace} title='Personal Workspace Web' organization='My Project' Award=''></GridCom>
          <GridCom img={coffee} title='Coffee Shop Website' organization='My Project' Award=''></GridCom>
        </div>
      </div>

      

    </div>
  )
}

export default App
