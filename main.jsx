import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
 import { AdviceApp } from './formSample/Advice/AdviceApp'
import { RegFrom } from './formSample/RegFrom'
// import { Cart } from './formSample/Cart'
// import './index.css'
// import './QrCode.css'
// import { UserCard } from './components/UserCard'
// import { QrCode } from './components/QrCode'
// import App from './App.jsx'
//  import "./formSample/RegFrom.css"
 import "./formSample/Advice/Advice.css"

createRoot(document.getElementById('root')).render(
  <StrictMode>
     {/* <App/>  */}
    {/* <UserCard/>  */}
   {/* <QrCode/>
     */}
     {/* <Cart/> */}
     {/* <UserDetails/> */}
     {/* <RegFrom/>  */}
   <AdviceApp/> 
     
  </StrictMode>
)
