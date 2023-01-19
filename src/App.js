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
      {id:1,name:"iphone",price:150000,pic:"https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-card-40-iphone14pro-202209_FMT_WHH?wid=508&hei=472&fmt=p-jpg&qlt=95&.v=1663611329204"},
      {id:2,name:"Samsung",price:118000,pic:"https://m.media-amazon.com/images/I/71PvHfU+pwL._SX679_.jpg"},
      {id:3,name:"Google Pixel",price:38000,pic:"https://m.media-amazon.com/images/I/81-fNmQqlLL._SL1500_.jpg"}
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