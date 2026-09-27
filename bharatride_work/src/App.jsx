import {Routes,Route,Navigate,useLocation,useNavigate} from 'react-router-dom'
import Start from './pages/Start'
import UserLogin from './pages/UserLogin'
import UserSignUp from './pages/UserSignUp'
import Home from './pages/Home'
import Riding from './pages/Riding'
import History from './pages/History'
import Offers from './pages/Offers'
import Wallet from './pages/Wallet'
import Safety from './pages/Safety'
import Profile from './pages/Profile'
import Support from './pages/Support'
import {useEffect} from 'react'

function Guard({children}){ const nav=useNavigate(); const loc=useLocation(); useEffect(()=>{ if(!localStorage.getItem('bharat_session')) nav('/login',{replace:true,state:{from:loc.pathname}}) },[]); return localStorage.getItem('bharat_session')?children:null }
export default function App(){ return <Routes>
  <Route path="/" element={<Start/>}/><Route path="/login" element={<UserLogin/>}/><Route path="/signup" element={<UserSignUp/>}/>
  <Route path="/home" element={<Guard><Home/></Guard>}/><Route path="/riding" element={<Guard><Riding/></Guard>}/>
  <Route path="/history" element={<Guard><History/></Guard>}/><Route path="/offers" element={<Guard><Offers/></Guard>}/><Route path="/wallet" element={<Guard><Wallet/></Guard>}/><Route path="/safety" element={<Guard><Safety/></Guard>}/><Route path="/profile" element={<Guard><Profile/></Guard>}/><Route path="/support" element={<Guard><Support/></Guard>}/>
  <Route path="*" element={<Navigate to="/" replace/>}/>
</Routes> }
