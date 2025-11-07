import './index.css'
import DashBoard from './pages/dashBoard';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import SignupPage from './pages/signupPage';
import SigninPage from './pages/signinPage';

function App() {

  return<div>   
    <BrowserRouter>
    <Routes>
    <Route  index element={<SignupPage/>} />
    <Route path='/signin' element={<SigninPage/>} />
    <Route path='/dashBoard' element={<DashBoard/>} />
    </Routes>
    </BrowserRouter>
  </div>
}


export default App
