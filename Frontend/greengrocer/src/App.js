import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';

import UserRegistration from './UserRegistration';
import UserLogin from './UserLogin';

import SellerRegistration from './SellerRegistration';
import SellerLogin from './SellerLogin';
import ResetPassword from './ResetPassword';
import AdminDashboard from './AdminDashboard';
<<<<<<< HEAD

=======
import AllSeller from './AllSeller';
>>>>>>> 96f39104ce8f194d08eea665ff152283e3b0d220
import DeliveryLogin from './DeliveryLogin';
import DeliveryRegistration from './DeliveryRegistration';
import Home from './Home';



import UpdateUser from './UpdateUser';
import AllUser from './AllUser';
import AllProducts from './AllProducts';

function App() {
  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route exact path = '/' element={<Home/>}/>
          <Route exact path = '/UserLogin' element={<UserLogin/>}/>
          <Route exact path = '/UserRegistration' element={<UserRegistration/>}/>
          <Route exact path = '/DeliveryLogin' element={<DeliveryLogin/>}/>
          <Route exact path= '/DeliveryRegistration' element={<DeliveryRegistration />}/>
          <Route exact path = '/SellerRegistration' element={<SellerRegistration/>}/>
          <Route exact path = '/SellerLogin' element={<SellerLogin/>}/>
          <Route exact path = '/Forget' element={<ResetPassword/>}/>
          <Route exact path = '/AdminDashboard' element={<AdminDashboard/>}/>
          <Route exact path = '/getAllSellers' Component={AllSeller}/>
          <Route exact path = '/getAllUsers' Component={AllUser}/>
          <Route exact path = '/getAllProducts' Component={AllProducts}/>
          {/* <Route exact path = '*' element={<Login/>}/> */}
          {<Route exact path = '/Update' element={<UpdateUser/>}/>}
          <Route exact path = '/Update' element={<UpdateUser/>}/>

          <Route exact path = '/Update' element={<UpdateUser/>}/>

        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
