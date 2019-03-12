import React from 'react'
import { Router, Scene } from 'react-native-router-flux'
import Home from './pages/Home.js'
import C1Lesson1 from './pages/chap1/Lesson1.js'
import C1Lesson2 from './pages/chap1/Lesson2.js'
import C1Lesson3 from './pages/chap1/Lesson3.js'
import C1Lesson4 from './pages/chap1/Lesson4.js'

import C2Lesson1 from './pages/chap2/Lesson1.js'
import C2Lesson2 from './pages/chap2/Lesson2.js'
import C2Lesson3 from './pages/chap2/Lesson3.js'
import C2Lesson4 from './pages/chap2/Lesson4.js'

import C3Lesson1 from './pages/chap3/Lesson1.js'
import C3Lesson2 from './pages/chap3/Lesson2.js'
import C3Lesson3 from './pages/chap3/Lesson3.js'
import C3Lesson4 from './pages/chap3/Lesson4.js'

import C4Lesson1 from './pages/chap4/Lesson1.js'
import C4Lesson2 from './pages/chap4/Lesson2.js'
import C4Lesson3 from './pages/chap4/Lesson3.js'
import C4Lesson4 from './pages/chap4/Lesson4.js'

import C5Lesson1 from './pages/chap5/Lesson1.js'
import C5Lesson2 from './pages/chap5/Lesson2.js'
import C5Lesson3 from './pages/chap5/Lesson3.js'
import C5Lesson4 from './pages/chap5/Lesson4.js'

import C6Lesson1 from './pages/chap6/Lesson1.js'
import C6Lesson2 from './pages/chap6/Lesson2.js'
import C6Lesson3 from './pages/chap6/Lesson3.js'
import C6Lesson4 from './pages/chap6/Lesson4.js'

import C7Lesson1 from './pages/chap7/Lesson1.js'
import C7Lesson2 from './pages/chap7/Lesson2.js'
import C7Lesson3 from './pages/chap7/Lesson3.js'
import C7Lesson4 from './pages/chap7/Lesson4.js'

import C8Lesson1 from './pages/chap8/Lesson1.js'
import C8Lesson2 from './pages/chap8/Lesson2.js'
import C8Lesson3 from './pages/chap8/Lesson3.js'
import C8Lesson4 from './pages/chap8/Lesson4.js'


import Lesson from './pages/Lesson.js'
const Routes = () => (
   <Router>
      <Scene key = "root">
         <Scene key = "home" component = {Home}  initial = {true} hideNavBar={true}/>
         <Scene key = "c1les1" component = {C1Lesson1} hideNavBar={true}  />
          <Scene key = "c1les2" component = {C1Lesson2} hideNavBar={true}  />
           <Scene key = "c1les3" component = {C1Lesson3} hideNavBar={true}  />
           <Scene key = "c1les4" component = {C1Lesson4} hideNavBar={true}  />

            <Scene key = "c2les1" component = {C2Lesson1} hideNavBar={true}  />
          <Scene key = "c2les2" component = {C2Lesson2} hideNavBar={true}  />
           <Scene key = "c2les3" component = {C2Lesson3} hideNavBar={true}  />
           <Scene key = "c2les4" component = {C2Lesson4} hideNavBar={true}  />

           <Scene key = "c3les1" component = {C3Lesson1} hideNavBar={true}  />
           <Scene key = "c3les2" component = {C3Lesson2} hideNavBar={true}  />
           <Scene key = "c3les3" component = {C3Lesson3} hideNavBar={true}  />
           <Scene key = "c3les4" component = {C3Lesson4} hideNavBar={true}  />
  
 
           <Scene key = "c4les1" component = {C4Lesson1} hideNavBar={true}  />
           <Scene key = "c4les2" component = {C4Lesson2} hideNavBar={true}  />
           <Scene key = "c4les3" component = {C4Lesson3} hideNavBar={true}  />
           <Scene key = "c4les4" component = {C4Lesson4} hideNavBar={true}  />
 

           <Scene key = "c5les1" component = {C5Lesson1} hideNavBar={true}  />
           <Scene key = "c5les2" component = {C5Lesson2} hideNavBar={true}  />
           <Scene key = "c5les3" component = {C5Lesson3} hideNavBar={true}  />
           <Scene key = "c5les4" component = {C5Lesson4} hideNavBar={true}  />
          
         
          <Scene key = "c6les1" component = {C6Lesson1} hideNavBar={true}  />
           <Scene key = "c6les2" component = {C6Lesson2} hideNavBar={true}  />
           <Scene key = "c6les3" component = {C6Lesson3} hideNavBar={true}  />
           <Scene key = "c6les4" component = {C6Lesson4} hideNavBar={true}  />
          
          <Scene key = "c7les1" component = {C7Lesson1} hideNavBar={true}  />
           <Scene key = "c7les2" component = {C7Lesson2} hideNavBar={true}  />
           <Scene key = "c7les3" component = {C7Lesson3} hideNavBar={true}  />
           <Scene key = "c7les4" component = {C7Lesson4} hideNavBar={true}  />
          
          <Scene key = "c8les1" component = {C8Lesson1} hideNavBar={true}  />
           <Scene key = "c8les2" component = {C8Lesson2} hideNavBar={true}  />
           <Scene key = "c8les3" component = {C8Lesson3} hideNavBar={true}  />
           <Scene key = "c8les4" component = {C8Lesson4} hideNavBar={true}  />

         <Scene key = "lesson" component = {Lesson} hideNavBar={true}  />
      </Scene>
   </Router>
)
export default Routes