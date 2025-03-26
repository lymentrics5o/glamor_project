import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
const Signin = () => {


    let[username,setUsername]=useState("")
    let[password,setPassword]=useState("")
    let [loading,setLoading]=useState("")
    let[error,setError]=useState("")

    let navigate= useNavigate()

    const submitForm = async (e)=>{
        e.preventDefault();
        try{
            setError("")
            setLoading("Please wait......")
            const data= new FormData()
            data.append("username",username)
            data.append("password",password)
            const response=await axios.post("https://luke6.pythonanywhere.com/api/signin",data);
            if(response.data.user){
                localStorage.setItem("user",JSON.stringify(response.data.user))
                navigate("/")

            }else{
                setLoading("")
                setError(response.data.message)
            }

        } catch(error){
            setLoading("");
            setError("Something went wrong");
        }
    }

    return ( 
        <div className="row justify-content-center mt-4">
            <div className="col-md-6 card shadow p-4">
                <h2>Sign In</h2>
                <b className="text-warning">{loading}</b>
                <b className="text-danger">{error}</b>

                <form onSubmit={submitForm}>
                    <input type="text" 
                    placeholder="Enter username" 
                    required
                    onChange={(e)=> setUsername(e.target.value)}
                    className="form-control" />
                     <br />
                     <input type="pasword" 
                     placeholder="Enter password"
                     required
                     onChange={(e)=> setPassword(e.target.value)}
                     className="form-control" />
                      <br />
                      <button className="btn btn-primary" type="submit">Sign In</button>
                </form>
                <p>Already have an account?<Link to="/signup">Sign Up</Link>
                </p>
            </div>
        </div>
     );
}
 
export default Signin;