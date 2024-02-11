import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';

import UserRegistration from './UserRegistration';
import UserLogin from './UserLogin';

import SellerRegistration from './SellerRegistration';
import SellerLogin from './SellerLogin';
import ResetPassword from './ResetPassword';
import DeliveryBoyLogin from './DeliveryBoyLogin';
import DeliveryBoyRegistration from './DeliveryBoyRegistration';

import UpdateUser from './UpdateUser';

function App() {
  return (
    <BrowserRouter>
      <div>
        <Routes>
          { <Route exact path = '/Login' element={<UserLogin/>}/>
          /*<Route exact path = '/login' element={<Login/>}/> */}

          <Route exact path = '/Registration' element={<UserRegistration/>}/>

         
          <Route exact path = '/SellerRegistration' element={<SellerRegistration/>}/>
          <Route exact path = '/SellerLogin' element={<SellerLogin/>}/>
          <Route exact path = '/Forget' element={<ResetPassword/>}/>
          <Route exact path = '/DeliveryBoyLogin' element={<DeliveryBoyLogin/>}/>
          <Route exact path = '/DeliveryBoyRegistration' element={<DeliveryBoyRegistration/>}/>

          {/* <Route exact path = '*' element={<Login/>}/> */}
          {<Route exact path = '/Update' element={<UpdateUser/>}/>}
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
