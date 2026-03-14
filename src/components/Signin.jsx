import axios from 'axios';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Signin = () => {

    //  Define two hooks for capturing/storing user input
    const[email, setEmail]=useState("");
    const[password, setPassword]=useState("");

    // Declare the three additional hooks
    const[loading, setLoading]=useState("");
    const[success, setSuccess]=useState("");
    const[error, setError]=useState("");

    // Below is the useNavigate hook to redirect a user to another page on successful login/signin
    const navigate = useNavigate();

    // Below is the function to handle the sign in action
    const handlesubmit = async (e) =>{
        // Prevent site from reloading
        e.preventDefault()

        // Update the loading hook with a message
        setLoading("Please bear with us while we finalize your login.")

        try{
            // Create a FormData object to hold the email and the password.
            const data = new FormData();

            // Insert the email and the password on the FormData created
            data.append("email", email);
            data.append("password",password);

            // Interact with axios for the response
            const response = await axios.post("https://kbenkamotho.alwaysdata.net/api/signin",data);

            // Set the loading hook back to default.
            setLoading("");

            //  Check whether the user exists as part of the response from the API
            if (response.data.user){
                // If user is there ,definately the details entered during signin are correct.
                // setSuccess("Login Successful. Welcome!");

                // If it is successful let the person get redirected to another page.
                navigate("/");
            }
            else{
                // The user is not found therefore the credentials entered on form were incorrect.
                setError("Login failed. Please try again!");
                
            }
        }
        catch(error){
            // setloadin back to default
            setLoading("");

            // Update the error hook with a message
            setError("Damn we have a problem. Try again!");
        }
    }




return (
    <div className='row justify-content-center mt-4'>
        <div className="col-md-6 card shadow p-4 bg-dark">
            <h1 className='text-warning'>SignIn</h1>

            <h5 className="text-primary">{loading}</h5>
            <h3 className="text-success">{success}</h3>
            <h4 className="text-danger">{error}</h4>

            <form onSubmit={handlesubmit}>
                <input type="email" 
                placeholder='Enter the email address here'
                className='form-control'
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}/> <br />

                {/* <p className='text-light'>{email} <br /></p> */}


                <input type="password"
                placeholder='Enter password here'
                className='form-control'
                required 
                value={password}
                onChange={(e) => setPassword(e.target.value)}/> <br />

                {/* <p className='text-light'>{password} <br /></p> */}

                <input type="submit" value="Signin" className='btn btn-outline-danger' />

            <p className='lest'>Create an account if one is not at disposal<Link to={'/signup'} className='link'>Sign Up</Link></p>
            </form>
        </div>
        
    </div>
)
}

export default Signin;

// Storing user details into the local storage