import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';

import UserRegistration from './UserRegistration';
import UserLogin from './UserLogin';

import SellerRegistration from './SellerRegistration';
import SellerLogin from './SellerLogin';
import ResetPassword from './ResetPassword';
<<<<<<< HEAD
import AdminDashboard from './AdminDashboard';
=======
import DeliveryLogin from './DeliveryLogin';
import DeliveryRegistration from './DeliveryRegistration';


>>>>>>> 5f0ca7688e3e525d15e3c09b21cf9f4a89e7cbc9

import UpdateUser from './UpdateUser';

function App() {
  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route exact path = '/UserLogin' element={<UserLogin/>}/>
          <Route exact path = '/UserRegistration' element={<UserRegistration/>}/>
          <Route exact path = '/DeliveryLogin' element={<DeliveryLogin/>}/>
          <Route exact path= '/DeliveryRegistration' element={<DeliveryRegistration />}/>
          <Route exact path = '/SellerRegistration' element={<SellerRegistration/>}/>
          <Route exact path = '/SellerLogin' element={<SellerLogin/>}/>
          <Route exact path = '/Forget' element={<ResetPassword/>}/>
<<<<<<< HEAD
          <Route exact path = '/AdminDashboard' element={<AdminDashboard/>}/>
          
          {/* <Route exact path = '*' element={<Login/>}/> */}
          {<Route exact path = '/Update' element={<UpdateUser/>}/>}
=======
          <Route exact path = '/Update' element={<UpdateUser/>}/>
>>>>>>> 5f0ca7688e3e525d15e3c09b21cf9f4a89e7cbc9
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
