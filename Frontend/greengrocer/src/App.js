import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';

import UserRegistration from './UserRegistration';
import UserLogin from './UserLogin';

import SellerRegistration from './SellerRegistration';
import SellerLogin from './SellerLogin';
import ResetPassword from './ResetPassword';
import AdminDashboard from './AdminDashboard';

import AllSeller from './AllSeller';
import DeliveryLogin from './DeliveryLogin';
import DeliveryRegistration from './DeliveryRegistration';


import UpdateUser from './UpdateUser';
import AllUser from './AllUser';
import AllProducts from './AllProducts';
import AllDelieryBoy from './AllDeliveryBoy';
import SellerDashboard from './SellerDashboard';
import Products from './Products';
import Cart from './Cart';
import UserDashboard from './UserDashboard';
import CombineHome from './CombineHome';
import ControlledCarousel from './ControlledCarousel';
import AllOrder from './AllOrder';

import DeliveryBoyDash from './DeliveryBoyDash';
import Common from './common';

function App() {
  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route exact path = '/' element={<UserLogin/>}/>
          <Route exact path = '/UserLogin' element={<UserLogin/>}/>
          <Route exact path = '/UserRegistration' element={<UserRegistration/>}/>
          <Route exact path = '/DeliveryLogin' element={<DeliveryLogin/>}/>
          <Route exact path= '/DeliveryRegistration' element={<DeliveryRegistration />}/>
          <Route exact path = '/SellerRegistration' element={<SellerRegistration/>}/>
          <Route exact path = '/SellerLogin' element={<SellerLogin/>}/>
          <Route exact path = '/Forget' element={<ResetPassword/>}/>
          <Route exact path = '/AdminDashboard' element={<AdminDashboard/>}/>
          <Route exact path = '/UserDashboard' element={<UserDashboard/>}/>
          <Route exact path = '/Common' element={<Common/>}/>
          <Route exact path = '/SellerDashboard' element={<SellerDashboard/>}/>
 
          {/* <Route exact path = '*' element={<Login/>}/> */}
          {<Route exact path = '/Update' element={<UpdateUser/>}/>}
          

         {/* <DeliveryBoyDash/> */}

          <Route exact path = '/getAllSellers' Component={AllSeller}/>
          <Route exact path = '/getAllUsers' Component={AllUser}/>
          <Route exact path = '/getAllProducts' Component={AllProducts}/>
          <Route exact path = '/getAllDeliveryBoys' Component={AllDelieryBoy}/>
          <Route exact path = '/goToAdminDashboard' Component={AdminDashboard}/>


          {/* Seller Dashboard */}
          <Route exact path = '/getAllOrders' Component={AllOrder}/>

          {/* <Route exact path = '*' element={<Login/>}/> */}
          <Route exact path = '/Update' element={<UpdateUser/>}/>
          <Route exact path = '/products' element={<Products/>}/>
           <Route exact path='/DeliveryBoyDash' element={<DeliveryBoyDash/>}/>
           <Route exact path='/goToDeliveyDashboard' Component={DeliveryBoyDash}/>
          <Route exact path = '/cart' element={<Cart/>}/>
           
           <Route exact path='/DeliveryBoyDash' element={<DeliveryBoyDash/>}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
