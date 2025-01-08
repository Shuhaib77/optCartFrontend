import { Route, Routes, useLocation} from 'react-router-dom';
import LoginCard from './pages/auth/login';

function App() {
  const location=useLocation()
  const noSidebarPaths=['/auth/login']
  if(location.pathname!==noSidebarPaths){
    console.log(location.pathname,'lkkjk');
    
  }
  return (
    <>
    <div>
      <p>
        home page
      </p>
    <Routes>
      <Route path='auth/login' element={<LoginCard/>}/>
    </Routes>
    </div>
    </>
    
  );
}

export default App;
