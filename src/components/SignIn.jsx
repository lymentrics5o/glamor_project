import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Footer from "./Footer";
import { Link } from "react-router-dom";


const SignIn = () => {
    let[username,setUsername]=useState("")
    let[password,setPassword]=useState("")
    let[error,setError]=useState("")
    let[success,setSuccess]=useState("")
    let[loading,setLoading]=useState("")

    let navigate= useNavigate()


    const data=new FormData()
    data.append("username" ,username)
    data.append("password", password)
    const submitForm= async(e)=>{
        e.preventDefault()
        try { 
       
        setLoading("Please wait...")
        setError("")
        setSuccess("")

        const response=await axios.post("https://luke6.pythonanywhere.com/api/signin",data)
        setLoading("")
        setSuccess("")
        if(response.data.user){
            localStorage.setItem("user",JSON.stringify(response.data.user))
            navigate("/")

        }else{
            setLoading("")
            setError(response.data.message)
        }

        setUsername("")
        setPassword("")
        }

   
catch (error) {
    setError(error.message)
}
}


return ( 
        <div className="row justify-content-center">
            
            
            <div className="col-md-6 card shadow p-4">
                <b className="text-warning">{loading}</b>
                <b className="text-danger">{error}</b>
                <b className="text-success">{success}</b>
                <h2>Sign In</h2>

                <form onSubmit={submitForm}>
                    <input type="text"
                    placeholder="Enter username" 
                    required
                    value={username}
                    onChange={(e)=>setUsername(e.target.value)}
                    className="form-control"
                    />
<br />

                    <input type="password"
                    placeholder="Enter password" 
                    required
                    value={password}
                    className="form-control"
                    onChange={(e)=>setPassword(e.target.value)}
                    />
                    <br />

                    <button className="btn btn-primary form-control">Sign In</button>
                </form>
            </div>
            <Footer/>
        </div>
     );}
 
export default SignIn;
