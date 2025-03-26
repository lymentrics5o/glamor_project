import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate,Link } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Carousel from "./Carousel";


const GetProducts = () => {

    let [products,setProducts] = useState([])
    let [error,setError] = useState("")
    let [loading,setLoading] = useState ("")
    let [filteredProducts,setFilteredProducts] = useState([])

    const img_url ="https://luke6.pythonanywhere.com/static/images/"
    const navigate = useNavigate();
    
    const getProduct = async() => {
        setError("")
        setLoading("please wait... receiving products...")
        try {
            const response = await axios.get("https://luke6.pythonanywhere.com/api/getproducts")
            setProducts(response.data)
            setFilteredProducts(response.data)
            setLoading("");

        } catch (error) {
            setLoading("");
            setError(error.message);
        }
    }

    const handleSearch = (value) => {
        const filtered = products && products.filter((product) =>
            product.product_name.toLowerCase().includes(value.toLowerCase())
        )
        setFilteredProducts(filtered)
    }
    //useEffect(function,dependancy) > this is a react hook used to execute afunction every time it is rerenderd by use of dependances
    useEffect( ()=>{ 
        getProduct();
    },[])
    return (
        <div className="container-fluid">
    <Navbar/>
         
        <div className="row">
            <b className="text-warning">{loading}</b>
            <b className="text-danger">{error}</b>
            {/*navbar */}
            <nav className="m-4">
            <Link className="btn btn-dark mx-2" to="/addproduct">add product</Link>
            <Link className="btn btn-dark mx-2" to="/signin">sign in</Link>
            <Link className="btn btn-dark mx-2" to="/signup">sign up</Link>
            <Link className="btn btn-dark mx-2" to="/">home</Link>
            </nav>

            {/*carosel */}
            {/*content */}

            <div className="justify-content-center m-3">
                <div className="col-md-6">
                    <input type="text" placeholder="search for a product by name" onChange={(e) => handleSearch(e.target.value)}  className="form-control" />
                </div>
            </div>


            {filteredProducts.map((product)=>(
                <div className="col-md-3 justify-content-center mb-4">
                <div className="card shadow">
                    <img src={img_url + product.product_photo} className="product_img" alt="" />
                    <div className="card-body">
                        <h5 className="mt-2">{product.product_name}</h5>
                        <p className="text-mutted">{product.product_desc.slice(0,10)}</p>
                        <b className="text-warning">{product.product_cost} ksh</b><br />

                        <button className="btn btn-dark w-100 " onClick={() => navigate("/singleproduct",{state:{product}})}>view product</button>
                    </div>
                </div>
                </div>
        ))}

            {/*footer */}
            
        </div>
        <Footer/>
        </div>
        
        


     );
}
 
export default GetProducts;