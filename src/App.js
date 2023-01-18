import React from 'react'
import ClassComponent from './ClassComponent'
import FunctionalComponent from './FunctionalComponent'
import './App.css';
import Events from './Events'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Class from './Class'
import Home from './Home'
import About from './About'
import Contact from './Contact'
import NotFound from './NotFound'
import Navigation from './Navigation'
import Products from './Products'

 class App extends React.Component{
  state={
    products:[
      {id:1,name:"redmi",price:12343,pic:"https://bl-i.thgim.com/public/incoming/va46t7/article66279654.ece/alternates/FREE_1200/2022-12-18T190939Z_836193254_UP1EICI1H82HM_RTRMADP_3_SOCCER-WORLDCUP-ARG-FRA-REPORT.JPG"},
      {id:2,name:"realme",price:23456,pic:"https://cdn.primedia.co.za/primedia-broadcasting/image/upload/c_fill,h_289,w_463/gastbpvfoq5yzy9deqsx"},
      {id:3,name:"Iphone",price:140000,pic:"https://backend.keepup.com.au/wp-content/uploads/2022/12/20221219001743912679.jpg?w=550&quality=80&strip=all"}
      ]
  }
  render(){
    return (
      <div>
      <BrowserRouter>
      <Navigation/>
      <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/contact" element={<Contact/>}/>
      <Route path="/Products" element={<Products products={this.state.products}/>}/>
      <Route path="*" element={<NotFound/>}/> 
      </Routes>
      </BrowserRouter>
    {/*<Events/>
      <ClassComponent demo="ram"/>
      <Class/>
      <ClassComponent/>
      <FunctionalComponent demo="siva"/>
      <FunctionalComponent demo="teja"/>*/}
    </div>
  )
}
}
export default App