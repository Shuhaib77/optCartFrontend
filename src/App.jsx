import { Route, Routes } from 'react-router-dom';
import LoginCard from './pages/auth/login';

function App() {
  return (
    <div>
      <p>
        home page
      </p>
    <Routes>
      <Route path='auth/login' element={<LoginCard/>}/>
    </Routes>
    </div>
  );
}

export default App;
