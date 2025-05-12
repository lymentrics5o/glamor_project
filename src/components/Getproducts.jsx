import axios from "axios";
import { useEffect, useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import { useNavigate } from "react-router-dom";
import Footer from "./Footer";
import Navbar from "./Navbar";
import Carousel from "./Carousel";

const GetProducts = () => {
    let [products, setProducts] = useState([]);
    let [loading, setLoading] = useState("");
    let [error, setError] = useState("");
    let [filteredproducts, setfilteredProducts] = useState([]);

    const img_url = "https://luke6.pythonanywhere.com/static/images/";
    const navigate = useNavigate();

    useEffect(() => {
        const storedUsername = localStorage.getItem("username");
        if (storedUsername) {
            toast.success(`Welcome back, ${storedUsername}!`);
        }

        getProducts();
    }, []);

    // Function to get products from the API
    const getProducts = async () => {
        setError("");
        setLoading("please wait, receiving the product");
        try {
            const response = await axios.get("https://luke6.pythonanywhere.com/api/getproducts");
            setLoading("");
            setProducts(response.data);
            setfilteredProducts(response.data);
        } catch (error) {
            console.log(error);
            setLoading("");
            setError(error.message);
        }
    };

    const handleSearch = (value) => {
        const filtered = products.filter((product) =>
            product.product_name.toLowerCase().includes(value.toLowerCase())
        );
        setfilteredProducts(filtered);
    };

    return (
        <div className="products-container">
            <Navbar />
            <Carousel />

            <h3 className="products-title text-info">Available Products</h3>
            {error && <div className="error-message">{error}</div>}
            {loading && <div className="loading-message">{loading}</div>}

            <div className="search-container">
                <input
                    type="text"
                    className="search-input"
                    placeholder="Search products by name"
                    onChange={(e) => handleSearch(e.target.value)}
                />
            </div>
            <div className="row">
                {filteredproducts.map((product) => (
                    <div className="col-md-3 justify-content-center mb-4" key={product.id}>
                        <div className="card shadow">
                            <img
                                src={img_url + product.product_photo}
                                className="product_img"
                                alt={product.product_name}
                            />
                            <div className="card-body">
                                <h5 className="mt-2">{product.product_name}</h5>
                                <p className="text-muted">{product.product_desc.slice(0, 10)}</p>
                                <b className="text-warning">{product.product_cost} ksh</b>
                                <br />
                                <button
                                    className="btn btn-dark w-100"
                                    onClick={() => navigate("/singleproducts", { state: { product } })}
                                >
                                    View Product
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <Footer />
            <ToastContainer />
        </div>
    );
};

export default GetProducts;
