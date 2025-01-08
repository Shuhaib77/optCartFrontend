import { Route, Routes, useLocation} from 'react-router-dom';
import LoginCard from './pages/auth/login';
import Sidebar from './components/Common/Sidebar';
import Home from './pages/HomePage';
import Dashboard from './pages/Admin/AdminDashboard';

function App() {
  const location=useLocation()
  const noSidebarPaths=['/auth/login']
  if(location.pathname!==noSidebarPaths){
    console.log(location.pathname,'lkkjk');
    
  }
  return (
    <>
    <div>
      <div>
      {!noSidebarPaths.includes(location.pathname) && <Sidebar />}
      </div>
    <Routes>
      <Route path='/' element = {<Home/>}/>
      <Route path='auth/login' element={<LoginCard/>}/>
      <Route path='/admin/dashboard' element= {<Dashboard/>}/>
      
    </Routes>
    </div>
    </>
    
  );
}

export default App;
