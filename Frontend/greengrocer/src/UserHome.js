import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import "./home.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import "./user.css";

const UserHome=()=>
{
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  const[cartDetails,setCartDetails] = useState({pid:"",sid:"",uid:"",quantity:""});
  const[bucket,setBucket] = useState([]);
  const[user,setUser] = useState([]);
  const email = sessionStorage.getItem("email");
  const url = "http://localhost:8080/cart/addbucket";
  const addProduct =  (cartDetails) => {
     setBucket(prevList => 
      [...prevList, cartDetails]);
      console.log(cartDetails);
  };

  const addProductIndb=()=>
  {
    fetch(url, {
      method: 'POST',
      headers: {
        Accept:"application/json",
        'Content-Type': 'application/json', // Change to the desired content type
      },
      body: JSON.stringify(bucket),
    })
    .then(response => response.json())
    .then(data => {
      console.log(data);
    })
    .catch(error => {
      console.error('Error:', error);
    });

  }



  const GetUser = () =>{
    const getUserUrl = "http://localhost:8080/greengrocer/user/getUserByEmail/"+email;
    axios.get(getUserUrl)
      .then((result) => {
        setUser(result.data);
      })
      .catch(error => console.error("Error fetching user: ",error));

  }
  console.log(user);
  sessionStorage.setItem("uid",JSON.stringify(user.uid));

  const getProducts = ()=>{
    axios.get('http://localhost:8080/products')
      .then((result) => {
        
        setProducts(result.data);
      })
      .catch(error => console.error('Error fetching products:', error));
  }

  useEffect(() => {
    // Fetch products from the Spring Boot backend
   getProducts();
   GetUser();
  }, []);


  const handleChange=(event,product,field)=>
  {
    let actualValue = event.target.value;

    setCartDetails({
      ...cartDetails,
      [field]:parseInt(actualValue),
      pid:parseInt(product.pid),
      sid:parseInt(product.seller.sid),
      uid:parseInt(sessionStorage.getItem("uid"))
    })
    
  }
  

  return (
   
    <main className="main-container">
    <div >
      <h1>Product List</h1>
      <div style={{ display: 'flex', flexWrap: 'wrap',textAlign:"center",color: "#060606"}}>
        {products.map(product => (
          <div key={product.pid} style={{ width: '300px', margin: '10px', padding: '15px', border: '3px solid black',textAlign:"center", marginLeft:"120px"}}>
            <h3>{product.pname}</h3>
            <img key={product.pid} src={product.imageUrl} alt={`Image ${product.pid}`} style={{width:"40%" ,height:"40%"}}/>
            {/* <img src="https://img.freepik.com/free-photo/front-view-vegetable_140725-103355.jpg?size=626&ext=jpg" style={{width:"40%" ,height:"40%"}}></img> */}
            <p>Price: ₹{product.price}</p>
            <p style={{color:"red"}}>Available Quantity: {product.availableQuantity}</p>
            <input type="number" placeholder="Enter the quantity" max="{product.availableQuantity}" name="quantity" style={{ border: '3px solid black'}} onChange={(e)=>handleChange(e,product,"quantity")} />
            <br></br><br/>
            <button  className="btn btn-success" onClick={() => addProduct(cartDetails)} >Add to Cart</button>
            
          </div>
        ))}
      </div>
      <button className="btn btn-danger" onClick={addProductIndb}>Add All</button>
    </div>
    </main>

    
  );
}

export default UserHome;
