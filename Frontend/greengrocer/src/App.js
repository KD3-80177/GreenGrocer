import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
<<<<<<< HEAD
import UserRegistration from './UserRegistration';
import UserLogin from './UserLogin';
=======
import RegisterUser from './RegisterUser';
import Login from './Login';
import SellerRegistration from './SellerRegistration';
import SellerLogin from './SellerLogin';
>>>>>>> c166f23b7983dfa313e41d06c7ab1ea01a89f376

function App() {
  return (
    <BrowserRouter>
      <div>
        <Routes>
          { <Route exact path = '/Login' element={<UserLogin/>}/>
          /*<Route exact path = '/login' element={<Login/>}/> */}
<<<<<<< HEAD
          <Route exact path = '/Registration' element={<UserRegistration/>}/>
=======
          <Route exact path = '/Registration' element={<RegisterUser/>}/>
          <Route exact path = '/SellerRegistration' element={<SellerRegistration/>}/>
          <Route exact path = '/SellerLogin' element={<SellerLogin/>}/>

>>>>>>> c166f23b7983dfa313e41d06c7ab1ea01a89f376
          {/* <Route exact path = '*' element={<Login/>}/> */}
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
