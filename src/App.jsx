import { Route, Routes } from 'react-router-dom';
import LoginCard from './pages/auth/login';


function App() {
  return (
    <div>
    <Routes>
  
      <Route path='auth/login' element ={<LoginCard/>}/>
    
    </Routes>
    </div>
  );
}

export default App;
