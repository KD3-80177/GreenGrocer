import { Link } from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./home.css"
const Home=()=>
{
    return (
        <>
            <div className="top_banner">
                <div className="container">
                    <div className="detail">
                        <h2>Get All fresh Vegitables</h2>
                        <Link to="/product">Shop Now</Link>
                    </div>
                    <div className="img_box">
                        <img src="./images/img6.jpg" alt="products"></img>
                    </div>
                </div>
            </div>
        </>
    )
}