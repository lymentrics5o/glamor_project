import axios from "axios";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import {Link } from "react-router-dom";
import Footer from "./Footer";

const SingleProduct = () => {
//creating usestate variables
    let [phone,setPhone] = useState("");
    let [loading,setLoading] = useState("");
    let [success,setSuccess] = useState("");
    let [error,setError] = useState("");

    const {product} = useLocation().state || {}

    const img_url = "https://luke6.pythonanywhere.com/static/images/"

    const submitForm = async (e) => {
        e.preventDefault()
        setError("");
        setSuccess("");
        setLoading("please wait as we process payment...");

        try {
            const data = new FormData();
            data.append("phone",phone);
            data.append("amount",product.product_cost)

            const response = await axios.post("https://luke6.pythonanywhere.com/api/mpesa_payment",data)

            setLoading("");
            setSuccess(response.data.message);

        } catch (error) {
            setLoading("");
            setError(error.message);
            
        }
    };
    
    return ( 
        <div>
            <div className="row justify-content-center mt-3">
            <nav className="m-4">
            <Link className="btn btn-info mx-2" to="/addproducts">add product</Link>
            <Link className="btn btn-info mx-2" to="/signin">sign in</Link>
            <Link className="btn btn-info mx-2" to="/signup">sign up</Link>
            <Link className="btn btn-info mx-2" to="/getproducts">home</Link>

            </nav>
            
                <div className="col-md-3 card shadow">
                    <img src={img_url + product.product_photo} alt="" />
                        
                </div>
                <div className="col-md-3 card shadow">
                    <h2>{product.product_name}</h2>
                    <h3 className="text-warning">{product.product_cost}</h3>
                    <h4 className="text-mutted">{product.product_desc}</h4>

                    <b className="text-warning">{loading}</b>
                    <b className="text-danger">{error}</b>
                    <b className="text-success">{success}</b>
                    <form onSubmit={submitForm}>
                        <input type="number" readOnly value={product.product_cost} className="form-control" required /><br />
                        <input type="tel" className="form-control" placeholder="enter mpesa no 2547xxxxxxxxx" required onChange={(e)=>setPhone(e.target.value)} /><br />
                        <button className="btn btn-primary">pay now</button>

                    </form>
                </div>
            </div>
            <Footer/>
        </div>
    
     );
}
 
export default SingleProduct;