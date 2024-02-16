import { useEffect, useState } from "react";
import './AdminStyle.css'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import axios from "axios";
import SellerHeader from "./SellerHeader";
import SellerSidebar from "./SellerSidebar";

function AllOrder() {

    const [openSidebarToggle, setOpenSidebarToggle] = useState(false)

    const OpenSidebar = () => {
        setOpenSidebarToggle(!openSidebarToggle)
    }

    const [orders,setOrders]=useState([]);
    
    const url=`http://127.0.0.1:8080/seller/getSellerOrders/${1}`
    
    const FetchRecords =() =>{
        axios.get(url).then((result)=>{
            setOrders(result.data);
        })
    }

    useEffect(()=>{FetchRecords()},[])
    return ( 
       <div className='grid-container'>
        <SellerSidebar openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar}/>
        <SellerHeader OpenSidebar={OpenSidebar}/>
        <main className='main-container'>
            <div className="table-responsive">
                        <table className="table table-success table-striped-columns">
                            <thead>
                               <tr>
                                 <th>Order Id</th> 
                                 <th>User Id</th>
                                 <th>User Name</th>
                                 <th>Product Id</th>
                                 <th>Product Name</th>
                                 <th>Quantity </th>
                                 <th>Status </th>
                               </tr>
                            </thead>
                            <tbody>
                                {
                                    orders.map((order)=>{
                                        return (<tr key={order.pid}>
                                            <td>{order.oid}</td>
                                            <td>{order.user.uid}</td>
                                            <td>{order.user.fullName}</td>
                                            <td>{order.product.pid}</td>
                                            <td>{order.product.pname}</td>
                                            <td>{order.quantity}</td>
                                            <td>{order.status}</td>
                                           {/* <td>
                                         <button className="btn  
                                            btn-danger"  
                                            onClick={()=>{
                                                RemoveRecord(emp.No)
                                            }}>
                                                 
                                                Remove
                                            </button>
                                        </td>*/}
                                        </tr>);
                                    })
                                }
                            </tbody>
                        </table>
            </div>
        </main>
        
       </div> 
     );
}

export default AllOrder;