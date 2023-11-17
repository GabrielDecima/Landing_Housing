
import Faq from '../componentes/faq/faq'
import BestProperty from '../componentes/bestProperty/bestProperty'
import Client from '../componentes/client/client'
import Footer from '../componentes/footer/footer'
import Header from '../componentes/header/header'
import Blog from '../componentes/ourBlog/blog'
import SendMesage from '../componentes/sendMesage/sendMesage'
import YourServices from '../componentes/yourServices/yourServices'
import './App.css'

function App() {


  return (
    <>
      <Header/>
      <YourServices/>
      <BestProperty/>
      <Client/>
       <Blog/>
      <Faq/>
      <SendMesage/>
      <Footer/>
  
    </>
  )
}

export default App
