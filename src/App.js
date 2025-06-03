import { Header } from './Components/Header';
import { Menu } from './Components/Menu';
import { About } from './Components/About';
import { Home } from './Components/Home';
import { Team } from './Components/Team';
import { Footer } from './Components/Footer';
import { Login } from './Components/Login';
import { Logout } from './Components/Logout';
import { Registration } from './Components/Registration';
import { Admin } from './Components/Admin';
import { User } from './Components/User';
import { Routes, Route } from 'react-router-dom';
import { useState } from 'react';
function App() {
  const[loginData,setLoginData]=useState();
  return (
    <>

      <Header />
      <Menu loginData={loginData}  />
      <Routes>
        <Route path='/login' element={<Login  setLoginData={setLoginData} />} />
        <Route path='/registration' element={<Registration />} />
        <Route path='/admin' element={<Admin/>}/>
        <Route path='/user' element={<User/>}/>
         <Route path="/logout" element={<Logout/>}></Route>
        <Route path='/' element={
          <>
            <Home />
            <About />
            <Team />
          </>
        }
        />

      </Routes>

      <Footer />
    </>
  );
}

export default App;
