import './App.css'
import {Chart as ChartJS} from "chart.js/auto"
import { Pie } from 'react-chartjs-2'
import { useState } from 'react'


import Jirath2 from './assets/IMG_9276.jpg'

import POSN from './assets/POSN_Pic.jpg'
import POSN_Cert from './assets/POSN_Cert.jpg'
import POSN_2 from './assets/POSN_23.jpg'

import SCI_SU from './assets/LINE_ALBUM_แข่งขันตอบปัญหาวิทยาศาสตร์แข่งขันเขี.jpg'
import SCI_SU_Cert from './assets/SCI_SU_Cert.jpg'

import Bamso from './assets/Bamso.jpg'
import Bamso_cert from './assets/Bamso_Cert.png'


import AMC from './assets/AMC.png'
import AMC_Cert1 from './assets/AMC_Cert1.png'
import AMC_Cert2 from './assets/AMC_Cert2.png'

import TMC from './assets/TMC.jpg'
import TMC_Cert from './assets/TMC_Cert.png'

import Math5 from './assets/Math5.jpg'

import Bee from './assets/75.png'

import NSC from './assets/NSC.png'
import NSC_Cert from './assets/NSC_Cert.png'
import NSC_Poster from './assets/NSC_Poster.png'

import Workspace from './assets/Workspace Web.png'
import Workspace2 from './assets/Workspace2.png'
import Workspace3 from './assets/Workspace3.png'

import coffee from './assets/coffee.png'
import coffee2 from './assets/Coffee2.png'
import coffee3 from'./assets/coffee3.png'

import Navbar from './components/Navbar'
import GridCom from './components/Grid_com'
import GridInfo from './components/GridInfo'
import ProjectCom from './components/Project_com'
import ProjectInfo from './components/ProjectInfo'



function App() {
  const [gridInfoVisible, setGridInfoVisible] = useState(false);
  const [gridShowing, setGridShowing] = useState<gridcom>();

  const [projectInfoVisible, setProjectInfoVisible] = useState(false);
  const [projectShowing, setProjectShowing] = useState<projectcom>();

  

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


  ChartJS

  type gridcom = {
    img : string;
    des : string;
    title : string;
    organization : string;
    award : string;
    img1 : string;
    img2 : string;
  }

  type projectcom = {
    img : string;
    des : string;
    title : string;
    organization : string;
    award : string;
    img1 : string;
    img2 : string;
    img3 : string;
    link  : link[];
  }

  type link = {
    name : string;
    url : string;
  }

  function handleGridClicked(gridcom:gridcom) {
    setGridInfoVisible(true);
    setGridShowing(gridcom);
  }

  function handleProjectClicked(projectcom:projectcom) {
    setProjectInfoVisible(true);
    setProjectShowing(projectcom);
  }

  return (
    <div>
      <div className={`${gridInfoVisible || projectInfoVisible ? "fixed inset-0  bg-black/50 z-10 w-screen h-screen" : "-z-50"} `}></div>
      <Navbar></Navbar>

      <GridInfo 
        title={gridShowing?.title??""}
        des={gridShowing?.des??""}
        visible={gridInfoVisible}
        img={gridShowing?.img??""}
        organization={gridShowing?.organization??""}
        award={gridShowing?.award??""}
        img1={gridShowing?.img1??""}
        img2={gridShowing?.img2??""}
        onClose={() => setGridInfoVisible(false)}
      >
      </GridInfo>

      <ProjectInfo
        title={projectShowing?.title??""}
        des={projectShowing?.des??""}
        visible={projectInfoVisible}
        img={projectShowing?.img??""}
        organization={projectShowing?.organization??""}
        award={projectShowing?.award??""}
        img1={projectShowing?.img1??""}
        img2={projectShowing?.img2??""}
        img3={projectShowing?.img3??""}
        link={projectShowing?.link??[]}
        onClose={() => setProjectInfoVisible(false)}
      >
        
      </ProjectInfo>

      <div className='flex lg:flex-row flex-col justify-between pt-20 pb-20 px-[10%] 2xl:px-[25%] gap-10'>
        <div>
          <div className='text-[5rem] font-bold'>Hi There!</div>
          <div className='text-gray-600 text-2xl mb-6'>I'm Jirath Wanna from Joseph Upatham School, and I'm looking forward to learning Computer Science!</div>
          <div className='text-gray-500 mb-10'>ผมเป็นคนที่มีความสนใจในศาสตร์ของวิทยาการคอมพิวเตอร์และคณิตศาสตร์เป็นอย่างมาก โดยผมมองว่าวิทยาการคอมพิวเตอร์เป็นสาขาวิชาที่จะมีบทบาทสำคัญในการสร้างนวัตกรรมและพัฒนาเทคโนโลยีในอนาคต ด้วยเหตุนี้ ผมจึงมีความตั้งใจที่จะศึกษาต่อในสาขาวิทยาการคอมพิวเตอร์</div>
          <button className='bg-blue-500 text-white font-medium p-3 rounded-2xl cursor-pointer hover:bg-blue-400 duration-100'>See My Work!</button>
        </div>
        <img className='w-96 bg-white shadow-[0_4px_8px_0_rgba(0,0,0,0.5),_0_6px_20px_0_rgba(0,0,0,0.19)] rounded-2xl' src={Jirath2} alt="" />
      </div>
      
      <div className='flex flex-col xl:flex-row md:gap-20 gap-10 px-[25%] py-15 bg-gray-100 shadow-[0_0px_8px_0_rgba(0,0,0,0.15),_0_0px_20px_0_rgba(0,0,0,0.15)]'>
        <div className='flex-1'><Pie data={data}></Pie></div>
        <div className='flex-1'>
          <div className='text-4xl font-medium'>My Interests </div>
          <div className='text-gray-500'><br />ผมแบ่งความสนใจในด้านวิทยาการคอมพิวเตอร์ออกเป็น 3 ด้าน ได้แก่ Competitive Programming, Mathematics และ Web & Game Development โดยตลอดช่วงมัธยมปลาย ผมได้ใช้เวลาส่วนใหญ่ไปกับการพัฒนาทักษะในแต่ละด้าน พร้อมทั้งเข้าร่วมการแข่งขันและสร้างโปรเจกต์ต่างๆ</div>
        </div>
      </div>
      
      <div className='bg-white px-[10%] py-10 shadow-[0_0px_8px_0_rgba(0,0,0,0.15),_0_0px_20px_0_rgba(0,0,0,0.15)]'>
        <div className='text-4xl font-medium pb-10'>Competitive Programming 💻</div>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-15'>

          <GridCom onClick={() => handleGridClicked(
            {img: POSN, img1 : POSN_Cert, img2: POSN_2, des : "ระหว่างวันที่ 3 - 17 ตุลาคม 2567 ผมได้มีโอกาสเข้าร่วมค่ายโอลิมปิกวิชาการ สอวน. สาขาคอมพิวเตอร์ ค่าย 1 ณ โรงเรียนวิสุทธรังษี จังหวัดกาญจนบุรี ภายในค่าย ผมได้เรียนรู้เนื้อหาพื้นฐานสำคัญ เช่น Data Structure (Array, Struct, Stack, Queue), Math (เมทริกซ์, เซต, ฯลฯ) และ Algorithm (การ Sort แบบต่างๆ) โดยสิ่งที่ทำให้ผมพัฒนาได้มากที่สุดจากค่ายนี้ คือการฝึกทำโจทย์จากระบบ Grader กับเพื่อนๆ ซึ่งต้องอาศัยความรู้ทฤษฎีที่ได้เรียนรู้จากภายในค่าย และการคิดวิเคราะห์อย่างเป็นระบบ การแลกเปลี่ยนวิธีการคิดในการแก้โจทย์กับเพื่อนๆภายในค่าย จึงช่วยให้ผมได้เห็นมุมมองใหม่ๆ ได้พัฒนาทักษะของตนเอง และได้รู้จักกับเพื่อนที่มีความสนใจด้านเดียวกัน ซึ่งเป็นประสบการณ์ที่ล้ำค่ามากในชีวิตของผมครับ", 
            title : "สอวน. คอมพิวเตอร์ (ค่าย 1)", organization : "มูลนิธิส่งเสริมโอลิมปิกวิชาการและพัฒนามาตรฐานวิทยาศาสตร์ศึกษา (สอวน.)", award : "เข้าร่วมค่าย 1"})} 
            img={POSN} title='สอวน. คอมพิวเตอร์ (ค่าย 1)' organization='มูลนิธิส่งเสริมโอลิมปิกวิชาการและพัฒนามาตรฐานวิทยาศาสตร์ศึกษา (สอวน.)' Award='เข้าร่วมค่าย 1'>
          </GridCom>
          
          <GridCom onClick={() => handleGridClicked(
            {img: SCI_SU,  img1 : SCI_SU_Cert, img2: SCI_SU,des : "การแข่งขันเขียนโปรแกรมครั้งนี้ เป็นโอกาสอันดีที่ผมจะได้พัฒนาทักษะด้านการเขียนโปรแกรม โดยโจทย์แต่ละข้อจำเป็นต้องใช้การคิดวิเคราะห์อย่างเป็นระบบ นอกจากนี้ ยังเป็นโอกาสอันดีที่ผมจะได้พบกับเพื่อน ๆ ที่เคยเข้าร่วมค่าย สอวน. ด้วยกันอีกด้วย", title : "การแข่งขันเขียนโปรแกรมคอมพิวเตอร์ งานสัปดาห์วันวิทยาศาสตร์", organization : "คณะวิทยาศาสตร์ มหาวิทยาลัยศิลปากร", award : "รางวัลชมเชย"})}  
            img={SCI_SU} title='การแข่งขันเขียนโปรแกรมคอมพิวเตอร์ งานสัปดาห์วันวิทยาศาสตร์' organization='คณะวิทยาศาสตร์ มหาวิทยาลัยศิลปากร' Award='รางวัลชมเชย'>
          </GridCom>
          
          <GridCom onClick={() => handleGridClicked(
            {img: Bamso, img1 : Bamso_cert, img2 : Bamso, des : "การแข่งขัน BAMSO 2024 รอบชิงชนะเลิศ เป็นการแข่งขัน Competitive Programming ที่ต้องอาศัยความรู้และทักษะการเขียนโปรแกรมเพื่อแก้โจทย์ปัญหาต่าง ๆ ซึ่งนับเป็นประสบการณ์ ที่ท้าทายอย่างมากสําหรับผม", title : "BAMSO 2024 : คอมพิวเตอร์", organization : "โรงเรียนบดินทรเดชา (สิงห์ สิงหเสนี)", award : "ผ่านเข้ารอบชิงชนะเลิศ 10 ทีมสุดท้าย"})}   
            img={Bamso} title='BAMSO 2024 : คอมพิวเตอร์' organization='โรงเรียนบดินทรเดชา (สิงห์ สิงหเสนี)' Award='ผ่านเข้ารอบชิงชนะเลิศ 10 ทีมสุดท้าย'>
          </GridCom>
        
        </div>
      </div>

      <div className='bg-gray-100 px-[10%] py-10 shadow-[0_0px_8px_0_rgba(0,0,0,0.15),_0_0px_20px_0_rgba(0,0,0,0.15)]'>
        <div className='text-4xl font-medium pb-10'>Mathematics 📉</div>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-15'>

          <GridCom onClick={() => handleGridClicked(
            {img: AMC, img1 : AMC_Cert1, img2 : AMC_Cert2, des : "AMC เป็นการแข่งขันคณิตศาสตร์นานาชาติที่จำเป็นต้องใช้กระบวนการคิดอย่างเป็นระบบในการแก้โจทย์แต่ละข้อ ซึ่งข้อสอบส่วนใหญ่จะเน้นในเรื่อง โจทย์ปัญหาประยุกต์ เรขาคณิต และความน่าจะเป็น การแข่งขันครั้งนี้ช่วยพัฒนา Problem Solving Skills ให้กับผมเป็นอย่างมาก", 
            title : "Australian Mathematics Competition 2025 (AMC)", organization : "Australian Mathematics Trust (AMT)", award : "🥈 รางวัลเหรียญเงิน และ Certificate of Distinction"})}   
            img={AMC} title='Australian Mathematics Competition 2025 (AMC)' organization='Australian Mathematics Trust (AMT)' Award='🥈 รางวัลเหรียญเงิน และ Certificate of Distinction'>
          </GridCom>

          <GridCom onClick={() => handleGridClicked(
            {img: TMC, img1 : TMC_Cert, img2 : TMC, des : "13ᵗʰ Thailand Mathematics Contest (TMC) เป็นการแข่งขันคณิตศาสตร์ ซึ่งจำเป็นต้องใช้ความรู้คณิตศาสตร์มัธยมปลายมาใช้ในการแก้โจทย์คณิตศาสตร์ต่างๆ ซึ่งช่วยให้ผมได้ฝึกการแก้ปัญหาอย่างเป็นระบบ การแยกปัญหาออกเป็นขั้นตอน การคิดเชิงตรรกะ และเสริมสร้างความรู้ความเข้าใจในหลักคณิตศาสตร์ ซึ่งเป็นพื้นฐานสำคัญในศาสตร์ของวิทยาการคอมพิวเตอร์", title : "13ᵗʰ Thailand Mathematics Contest (TMC)", organization : "สมาชิกภาพสหภาพ IMC ประจำประเทศไทย", award : "🥉 รางวัลเหรียญทองแดง"})} 
            img={TMC} title='13ᵗʰ Thailand Mathematics Contest (TMC)' organization='สมาชิกภาพสหภาพ IMC ประจำประเทศไทย' Award='🥉 รางวัลเหรียญทองแดง'>
          </GridCom>

          <GridCom onClick={() => handleGridClicked(
            {img: Math5, img1 : Math5, img2 : "", des : "การแข่งขันครั้งนี้จําเป็นต้องใช้ความรู้คณิตศาสตร์ระดับมัธยมปลายในการแก้โจทย์ปัญหา โดยถือเป็นประสบการณ์ที่ท้าทาย และผมภูมิใจเป็นอย่างมากที่ได้รับรางวัลชนะเลิศ", title : "การแข่งขันทักษะวิชาการเขตการศึกษา 5  อัครสังฆมณฑลกรุงเทพฯ", organization : "โรงเรียนเขตการศึกษา 5 อัครสังฆมณฑลกรุงเทพฯ", award : "🥇 ชนะเลิศ ระดับเหรียญทอง"})} 
            img={Math5} title='การแข่งขันทักษะวิชาการเขตการศึกษา 5  อัครสังฆมณฑลกรุงเทพฯ' organization='โรงเรียนเขตการศึกษา 5 อัครสังฆมณฑลกรุงเทพฯ' Award='🥇 ชนะเลิศ ระดับเหรียญทอง'>
          </GridCom>

          <GridCom onClick={() => handleGridClicked(
            {img: Bee, img1 : Bee, img2 : "", des : "การแข่งขัน Integration Bee 2025 เป็นการแข่งขันคณิตศาสตร์แคลคูลัสระดับมัธยมปลายในหัวข้อการอินทิเกรต ซึ่งผมได้นำความรู้ที่มีมาใช้ในการแก้โจทย์แต่ละข้อ แม้จะไม่ได้ผ่านเข้ารอบ แต่ก็ถือเป็นโอกาสอันดีในการพัฒนาทักษะทางคณิตศาสตร์ของผม", title : "Integration Bee 2025 @Chulalongkorn University", organization : "กรรมการนิสิตคณะวิศวกรรมศาสตร์ จุฬาลงกรณ์มหาวิทยาลัย", award : "🥉 รางวัลเหรียญทองแดง"})}  
            img={Bee} title='Integration Bee 2025 @Chulalongkorn University' organization='กรรมการนิสิตคณะวิศวกรรมศาสตร์ จุฬาลงกรณ์มหาวิทยาลัย' Award='🥉 รางวัลเหรียญทองแดง'>
          </GridCom>

        </div>
      </div>

      <div className='bg-white px-[10%] py-10 shadow-[0_0px_8px_0_rgba(0,0,0,0.15),_0_0px_20px_0_rgba(0,0,0,0.15)]'>
        <div className='text-4xl font-medium pb-10'>Web & Game Development 🎮</div>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-15'>
          
          <ProjectCom onClick={() => handleProjectClicked(
            {img: NSC, img1 : NSC_Cert, img2 : NSC_Poster, img3 : NSC_Cert , des : "ผมและเพื่อนร่วมทีมได้ร่วมกันพัฒนาเกมกู้กรุงสี (Color Retrieval) เพื่อส่งประกวดในหมวด 21 โปรแกรมเพื่อความบันเทิง ระดับนักเรียน โดยทีมของพวกเราได้รับทุนสนับสนุน 10,000 บาท และผ่านเข้ารอบชิงชนะเลิศ โดยเกมที่พวกเราพัฒนาเป็นเกมแนว Action, Platformer ซึ่งมีแก่นสำคัญเป็นการเติมสีเพื่อฟื้นฟูเมือง ระบบการเล่นที่เป็นจุดเด่นของเกมคือการต่อสู้โดยใช้สีเป็นกลไกหลักในการเล่น โดยผู้เล่นจะต้องคิดหาวิธีเอาชนะด่านต่าง ๆ ตามกฎกติกา พร้อมทั้งจัดสรรทรัพยากรที่มีอยู่จำกัดอย่างรอบคอบและใช้ความสามารถในการผ่านอุปสรรคต่าง ๆ ผมได้รับหน้าที่เป็นหัวหน้าโครงการ ซึ่งถือเป็นโอกาสอันดีที่ทำให้ผมได้ฝึกทักษะการทำงานเป็นทีม ทั้งในด้านการแบ่งงาน การวางตารางการทำงาน รวมถึงการให้กำลังใจเพื่อน ๆ ระหว่างการพัฒนา พวกเราพบกับปัญหามากมาย ไม่ว่าจะเป็นการวาดภาพประกอบ การพัฒนาระบบที่ซับซ้อน รวมถึงข้อจำกัดด้านเวลา แต่สุดท้ายพวกเราก็สามารถแก้ปัญหาเหล่านี้และผ่านเข้าสู่รอบชิงชนะเลิศได้ ซึ่งพวกเราทุกคนรู้สึกภาคภูมิใจกับผลงานชิ้นนี้เป็นอย่างมาก", title : "การแข่งขันพัฒนาโปรแกรมคอมพิวเตอร์แห่งประเทศไทยครั้งที่ 27 (NSC 2025)", organization : "สำนักงานพัฒนาวิทยาศาสตร์และเทคโนโลยีแห่งชาติ สวทช.", award : "ผ่านเข้ารอบชิงชนะเลิศ และได้รับทุนสนับสนุน 10,000 บาท"
              ,link : [{name : "คลิปวิดีโอแนะนำผลงาน : ", url : "https://www.facebook.com/100000550526763/videos/oa.1528925231792269/2579815079031268"}] })}
            img={NSC} title='การแข่งขันพัฒนาโปรแกรมคอมพิวเตอร์แห่งประเทศไทยครั้งที่ 27 (NSC 2025)' organization='สำนักงานพัฒนาวิทยาศาสตร์และเทคโนโลยีแห่งชาติ สวทช.' Award='ผ่านเข้ารอบชิงชนะเลิศ และได้รับทุนสนับสนุน 10,000 บาท'>
          </ProjectCom>

          <ProjectCom onClick={() => handleProjectClicked(
            {img: Workspace, img1 : Workspace, img2 : Workspace2, img3 : Workspace3 , des : "เว็บไซต์นี้เป็นแหล่งรวมฟังก์ชันที่จำเป็นต่อการทำงานและการเรียน เช่น ตัวนับเวลาถอยหลัง การเปิดเพลง การแนบคลิป YouTube ที่ต้องการ และการแสดงเป้าหมายที่ตั้งไว้ ผู้ใช้สามารถเปิดเว็บไซต์นี้ระหว่างทำการบ้าน อ่านหนังสือ หรือทำงานอื่น ๆ ได้ ผมพัฒนาเว็บไซต์นี้ด้วย React, TailwindCSS และ TypeScript โดยผมได้เรียนรู้สิ่งต่างๆมากมายจากการลงมือทำจริง ไม่ว่าจะเป็นการออกแบบโครงสร้างเว็บไซต์ การจัดระเบียบโค้ดให้อ่านง่าย การทำ Responsive Design เพื่อให้ใช้งานได้ทุกอุปกรณ์ และการแก้ไขปัญหาจากการลองผิดลองถูกด้วยตนเอง การพัฒนาเว็บไซต์นี้ช่วยพัฒนาความสามารถของผมเป็นอย่างมาก", title : "Personal Workspace Web", organization : "My Project", award : ""
              ,link : [{name : "ลิงก์เว็บไซต์ : ", url : "https://workspace-web-jirath.netlify.app"}] })}
            img={Workspace} title='Personal Workspace Web' organization='My Project' Award=''>
          </ProjectCom>

          <ProjectCom onClick={() => handleProjectClicked(
            {img: coffee, img1 : coffee, img2 : coffee2, img3 : coffee3 , des : "เว็บไซต์ร้านกาแฟ เป็นเว็บไซต์ที่ผมพัฒนาให้กับร้านกาแฟของแม่ ซึ่งนับเป็นเว็บไซต์แรกที่ผมสร้างขึ้นเพื่อฝึกทักษะการใช้เครื่องมือพื้นฐานอย่าง HTML และ CSS ภายในเว็บไซต์ประกอบด้วย ประวัติและบรรยากาศของร้าน เมนูเครื่องดื่มและอาหาร รีวิวจากลูกค้า และช่องทางการติดต่อ เว็บไซต์นี้นับเป็นจุดเริ่มต้นที่ดีของการพัฒนาผลงานเว็บไซต์ต่อ ๆ ไปของผม", title : "Website ร้านกาแฟ", organization : "My Project", award : ""
              ,link : [{name : "ลิงก์เว็บไซต์ : ", url : "https://qgarden.netlify.app/story"}] })}
            img={coffee} title='Website ร้านกาแฟ' organization='My Project' Award=''>
          </ProjectCom>

        </div>
      </div>

      

    </div>
  )
}

export default App
