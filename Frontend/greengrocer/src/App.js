import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import RegisterUser from './RegisterUser';
import '../node_modules/bootstrap/dist/css/'
function App() {
  return (
    <BrowserRouter>
      <div>
        <Routes>
          {/* <Route exact path = '/' element={<Login/>}/>
          <Route exact path = '/login' element={<Login/>}/> */}
          <Route exact path = '/Registration' element={<RegisterUser/>}/>
          {/* <Route exact path = '*' element={<Login/>}/> */}
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
