// import logo from './logo.svg';
import './App.css';
import {Routes,Route} from 'react-router-dom';
import Home from './components/Home';
import Error from './components/Error';
import Header from './components/Header';
import Login from './components/Login';
// import Dashboard from './components/Dashboard';
import BusReg from './components/BusReg';
import UserForm from './components/UserForm';
import Advertisement from './components/Advertisement';
function App() {
  return (
    <>
      <Header />
      {/* <BusReg/> */}
      {/* <BusReg/> */}
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        {/* <Route path='/dashboard' element={<Dashboard />} /> */}
        <Route path='/register/business' element={<BusReg/>}/>
        <Route path='/register/user' element={<UserForm/>}/>
        <Route path='/advertisement' element={<Advertisement/>}/>
        <Route path='*' element={<Error />} />
      </Routes>
    </>
  );
}

export default App;
