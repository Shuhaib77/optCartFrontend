import { Route, Routes, useLocation} from 'react-router-dom';
import LoginCard from './pages/auth/login';
import Sidebar from './components/Common/Sidebar';
import Home from './pages/HomePage';
import Dashboard from './pages/Admin/AdminDashboard';
import Employeemangement from './pages/HR/EmployeeManggement';
import JobOpenings from './pages/HR/JobOpenings';
import AttendenceandLeave from './pages/HR/Attendence&Leave';

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
      <Route path='/hr/employeemangement' element= {<Employeemangement/>}/>
      <Route path='/hr/jobopenings' element= {<JobOpenings/>}/>
      <Route path='/hr/AttendanceAndLeave' element= {<AttendenceandLeave/>}/>
      
    </Routes>
    </div>
    </>
    
  );
}

export default App;
