import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const SignUp = () => {
    //create usestate variables
    let [username,setUsername] = useState("");
    let [email,setEmail] = useState("");
    let [phone,setPhone] = useState("");
    let [password,setPassword] = useState("");
    let [loading, setLoading]= useState("");
    let[success,setSuccess] = useState("");
    let [error,setError] = useState("");

    const submitForm = async (e) =>{
        e.preventDefault()
       
        try {
           setLoading("please wait while we submit your data") 
           const data =new FormData();
           data.append("username",username);
           data.append("email",email);
           data.append("phone",phone);
           data.append("password",password);
           
           const response= await axios.post("https://luke6.pythonanywhere.com/api/signup",data);
           setLoading("")
           setSuccess(response.data.success)
        } catch (error) {
          setLoading("")
          setError("something went wrong")  
        }

    }


    return ( 
        <div className="row justify-content-center mt-4">
            <div className="col-md-6 card shadow p-4">
                <h2>SignUp</h2>
                <form onSubmit={submitForm}>
                <input type="username" className="form-control" placeholder="Enter Username" required onChange={(e) => setUsername(e.target.value)} /> <br />
                <input type="email" className="form-control" placeholder="Enter Email"  required onChange={(e) => setEmail(e.target.value)}/><br />
                <input type="tel" className="form-control" placeholder="Enter Phone No" required onChange={(e) => setPhone(e.target.value)} /><br />
                <input type="password" className="form-control" placeholder="Enter Password" required onChange={(e) => setPassword(e.target.value)} /><br />
                <button className="btn btn-success">SignUp</button>
                </form>
                <p>already have an account <Link to= "/signin">signin</Link></p>
            </div>
        </div>
     );
}
 
export default SignUp;