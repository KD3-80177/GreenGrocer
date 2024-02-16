    import { useEffect,useState } from "react";
    import './DeliveryBoy.css'
    import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
    import axios from "axios";
    import DeliveryBoy from './DeliveryBoySidebar';
    import DeliveryHeadr from './DeliveryBoyHeader';


    function UpdateDeliveryBoy(){
        const [openSidebarToggle, setOpenSidebarToggle] = useState(false)

    const OpenSidebar = () => {
        setOpenSidebarToggle(!openSidebarToggle)
    }

    const [deliveryBoy,setDeliveryBoy]=useState([{fullName:"",address:"",city:"",state:""}]);
    
    const url=""

    const OnTextChange=(arge)=>{
        var emp1 = {...deliveryBoy}
        emp1[arguments.target.name]=args.target.value;
        setDeliveryBoy(emp1)
    }
    
    const FetchRecords =() =>{
        axios.get(url).then((result)=>{
            setDeliveryBoy(result.data);
        })
    }

    
    useEffect(()=>{FetchRecords()},[])
    return ( 
       <div className='grid-container'>
        <AdminSidebar openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar}/>
        <AdminHeader OpenSidebar={OpenSidebar}/>
        <main className='main-container'>
            <div className="table-responsive">
                        <table className="table table-success table-striped-columns">
                            <thead>
                               <tr>
                                 <th>Seller Id</th> 
                                 <th>Full Name</th>
                                 <th>Mobile</th>
                                 <th>Address</th>
                               </tr>
                            </thead>
                            <tbody>
                                {
                                    sellers.map((seller)=>{
                                        return (<tr key={seller.sid}>
                                            <td>{seller.sid}</td>
                                            <td>{seller.fullName}</td>
                                            <td>{seller.mobileNo}</td>
                                            <td>{seller.address}</td>
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

export default UpdateDeliveryBoy;

