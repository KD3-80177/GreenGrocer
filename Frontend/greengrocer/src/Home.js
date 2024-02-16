import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

import "../node_modules/bootstrap/dist/css/bootstrap.min.css";


import Products from "./Products";
import axios from "axios";

const Home=()=>
{

    const [products, setProducts] = useState([]);

  // Use an object to track local quantities by product ID
  const [quantities, setQuantities] = useState([]);

  const[cartDetails,setCartDetails] = useState({pid:"",sid:"",uid:"",quantity:""});

  const[bucket,setBucket] = useState([]);

  //  const  addProduct = (product)=>
  //  {
  //     setBucket(prevList=>
        
  //         [...prevList,product]
  //       )
  //        console.log(bucket);
  //  }

  const url = "http://localhost:8080/cart/addbucket";

  const addProduct =  (product) => {
     setBucket(prevList => {
      const updatedList = [...prevList, product];
      console.log(updatedList); // Access updated state here
      return updatedList; // Return the updated state
    });
  };

   const handleAddToCart = (product) => {
     setCartDetails(
        {
          pid:parseInt(`${product.pid}`),
          uid:1,
          sid:parseInt(`${product.seller.sid}`)
        }
      )
      addProduct(product);
  };

  const addProductIndb = () =>
  {
      axios.post(url,cartDetails).then((result)=>result.data)
  }

  
   const printBucket=()=>
   {
    console.log(bucket);
   }
  useEffect(() => {
    // Fetch products from the Spring Boot backend
   axios.get('http://localhost:8080/products')
      .then((result) => {
        
        setProducts(result.data);
      })
      .catch(error => console.error('Error fetching products:', error));
  }, []);



  const handleChange=(event,product,field)=>
  {
    let actualValue = event.target.value;

    setCartDetails({
      ...cartDetails,
      [field]:parseInt(actualValue),
      pid:parseInt(product.pid),
      sid:parseInt(product.seller.sid),
      uid:1 
    })

    
  }

  return (
    <div>
      <h1>Product List</h1>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {products.map(product => (
          <div key={product.pid} style={{ width: '300px', margin: '10px', padding: '15px', border: '1px solid #ccc',textAlign:"center" }}>
            <h3>{product.pname}</h3>
            <img src="https://img.freepik.com/free-photo/front-view-vegetable_140725-103355.jpg?size=626&ext=jpg" style={{width:"40%" ,height:"40%"}}></img>
            <p>Price: ${product.price}</p>
            <p>Available Quantity: {product.availableQuantity}</p>
            <p>Quantity: {quantities[product.pid]}</p>
            {/* <button onClick={() => handleQuantityChange(parseInt(product.pid), -1)}>-</button>
            <button onClick={() => handleQuantityChange(parseInt(product.pid), 1)}>+</button> */}
            <input type="number" max={product.availableQuantity} name="quantity" onChange={(e)=>handleChange(e,product,"quantity")} />
            <button onClick={() => handleAddToCart(product)}>Add to Cart</button>
          
          </div>
        ))}
      </div>
      <button onClick={addProductIndb}>Add All</button>
    </div>
  );
}

export default Home;


{/* <div >
                                
                                <div style={{ display: 'flex', flexWrap: 'wrap' , textAlign:"center"}}>
                                    {products.map(product => (
                                        <div key={product.id} style={{ width: '300px', margin: '10px', padding: '15px', border: '1px solid #ccc' }}>
                                             <h3>{product.pname}</h3>
                                             <img src="https://img.freepik.com/free-photo/front-view-vegetable_140725-103355.jpg?size=626&ext=jpg" style={{width:"40%" ,height:"40%"}}></img>
                                              <p>Price: ${product.price}</p>
                                              <p>Quantity: {product.quantity || 0}</p>
                                              <button onClick={() => handleQuantityChange(product, -1)}>-</button>
                                              <button onClick={() => handleQuantityChange(product, 1)}>+</button>
                                              <button onClick={() => handleAddToCart(product)}>Add to Cart</button>
                                        </div>
                                     ))}
               </div>
              </div> */}