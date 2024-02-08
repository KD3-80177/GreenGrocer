import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import RegisterUser from './RegisterUser';
import Login from './Login';
import SellerRegistration from './SellerRegistration';
import SellerLogin from './SellerLogin';

function App() {
  return (
    <BrowserRouter>
      <div>
        <Routes>
          { <Route exact path = '/Login' element={<Login/>}/>
          /*<Route exact path = '/login' element={<Login/>}/> */}
          <Route exact path = '/Registration' element={<RegisterUser/>}/>
          <Route exact path = '/SellerRegistration' element={<SellerRegistration/>}/>
          <Route exact path = '/SellerLogin' element={<SellerLogin/>}/>

          {/* <Route exact path = '*' element={<Login/>}/> */}
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
