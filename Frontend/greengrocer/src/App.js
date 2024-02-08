import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import UserRegistration from './UserRegistration';
import UserLogin from './UserLogin';

function App() {
  return (
    <BrowserRouter>
      <div>
        <Routes>
          { <Route exact path = '/Login' element={<UserLogin/>}/>
          /*<Route exact path = '/login' element={<Login/>}/> */}
          <Route exact path = '/Registration' element={<UserRegistration/>}/>
          {/* <Route exact path = '*' element={<Login/>}/> */}
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
