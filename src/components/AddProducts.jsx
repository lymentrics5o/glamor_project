import axios from "axios";
import { useRef, useState } from "react";
import Footer from "./Footer";
import { Link } from "react-router-dom";

const AddProducts = () => {
  let [product_name, setProductName] = useState("");
  let [product_desc, setProductDesc] = useState("");
  let [product_cost, setProductCost] = useState("");
  let [product_photo, setProductPhoto] = useState("");
  let [loading, setLoading] = useState("");
  let [success, setSuccess] = useState("");
  let [error, setError] = useState("");

  const fileInputRef = useRef(null);

  const submitForm = async (e) => {
    e.preventDefault();
    try {
      setError("");
      setSuccess("");
      setLoading("Please wait....");

      const data = new FormData();
      data.append("product_name", product_name);
      data.append("product_desc", product_desc);
      data.append("product_cost", product_cost);
      data.append("product_photo", product_photo);

      const response = await axios.post(
        "https://luke6.pythonanywhere.com/api/addproducts",
        data
      );
      setLoading("");
      console.log(response);
      setSuccess(response.data.success);
      setProductName("");
      setProductDesc("");
      setProductCost("");
      fileInputRef.current.value = "";
    } catch (error) {
      console.log(error);
      setLoading("");
      setError(error.message);
    }
  };

  return (
    <div className="row justify-content-center">
      <nav className="m-4">
        <Link className="btn btn-info mx-2" to="/addproducts">
          add product
        </Link>
        <Link className="btn btn-info mx-2" to="/signin">
          sign in
        </Link>
        <Link className="btn btn-info mx-2" to="/signup">
          sign up
        </Link>
        <Link className="btn btn-info mx-2" to="/getproducts">
          home
        </Link>
      </nav>
      <div className="col-md-6">
        <b className="text-warning">{loading}</b>
        <b className="text-danger">{error}</b>
        <b className="text-success">{success}</b>

        <h2>Add A Product</h2>
        <form onSubmit={submitForm} className="form-control">
          <input
            type="text"
            placeholder="Enter Product name"
            required
            className="form-control"
            value={product_name}
            onChange={(e) => setProductName(e.target.value)}
          />
          <br />

          <textarea
            className="form-control"
            placeholder="Enter Product description"
            required
            value={product_desc}
            onChange={(e) => setProductDesc(e.target.value)}
          ></textarea>

          <br />

          <input
            type="number"
            placeholder="Enter cost"
            required
            value={product_cost}
            className="form-control"
            onChange={(e) => setProductCost(e.target.value)}
          />

          <label htmlFor="">Product Photo</label>

          <input
            type="file"
            className="form-control"
            ref={fileInputRef}
            required
            onChange={(e) => setProductPhoto(e.target.files[0])}
          />
          <br />

          <button className="btn btn-primary form-control">Add product</button>
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default AddProducts;
