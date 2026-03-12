import axios from 'axios';
import React, { useState } from 'react'
import { Link } from 'react-router-dom';

const Signup = () => {
    // Initialize the hooks
    const [username,setUsername]=useState("");
    // username= name of the hook \|/ setUsername= function
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const [number,setNumber] = useState("");
    // console.log(username)

    // Define the three state of application will move to
    const[loading,setLoading]=useState("");
    const[success,setSuccess]=useState("");
    const[error,setError]=useState("");

    // Below is a function to handle the submit action
    const handleSubmit = async(e) => {
        // Below we prevent our site from reloading
        e.preventDefault()

        // Update our loading hook with a message that will be displayed to the users who will try to register
        setLoading("Please bear with us while we finalize your registration. This will only take a moment.")
        try{
            // Create a form data object that will enable you to capture the four detils entered on the form
            const formdata = new FormData();

            // Insert the four details(username,email,password,phone number) interms of key-value pairs.
            formdata.append("username", username);
            formdata.append("email", email);
            formdata.append("password", password);
            formdata.append("phone", number);

            // By use of Axois, we can access the method (POST)
            const response = await axios.post("https://collinspaul.alwaysdata.net/api/signup", formdata);

            // Set back the loading to default
            setLoading("");

            //  Just incase everything goes well update the success hook with a message.
            setSuccess(response.data.message)

            // Clear the hooks
            setUsername("");
            setEmail("");
            setPassword("");
            setNumber("");
        }
        catch(error){
            // set the loading book back to default
            setLoading("");

            // Update the error hook with the message given back from the response
            setError(error.message)
        }

    }

return (
    <div className='row justify-content-center mt-4'>
        <div className="card col-md-6 shadow p-4 bg-dark">
            <h1 className='text-warning'>Sign Up</h1>

            <h5 className='text-warning'>{loading}</h5>
            <h3 className='text-success'>{success}</h3>
            <h4 className="text-danger">{error}</h4>

            <form onSubmit={handleSubmit}>


            <input type="text" 
            placeholder='Enter the Username'
            className='form-control' 
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required /> <br />

            {/* {username} */}

            <input type="email"
            placeholder='Enter the email address'
            className='form-control' 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required/> <br />

            {/* {email} */}
            
            <input type="password"
            placeholder='Enter the password'
            className='form-control'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required /> <br />

            {/* {password} */}

            <input type="number"
            placeholder='Enter the mobilephone number'
            className='form-control' 
            value={number}
            onChange={(e) => setNumber(e.target.value)}
            required/> <br />

            {/* {number} <br /> */}

            <input type="submit" value="Signup" className="btn btn-outline-danger" /> <br /> <br />

            <p className='last'>Already have an account?<Link to={'/signin'} className='link'>Sign In</Link></p>
            </form>
        </div>
    </div>
)
}

export default Signup;

// Axios 
    // In React, Axios is prefered to fetch() since Axios can hold many things at a time.
    // Axios is also considered automatic in comparison to fetch().
    // Axios is prefered because;

        //It automatically converts your data to JSON(Automatic JSON Transformation)hence no more calling .json() on every response.
        // By use of Axios you can "intercept" requests or responses to inject auth tokens or handle errors globally using Interceptors.
        //It handles older browsers more better than the native Fetch API.
        //It allows you to easily abort a request if a component unmounts.

    // Its set up by installing the package using:
        // npm install axios

    // GET REQUEST
        // Performed within the useEffect hook to ensure it runs when the component mounts.
            // import React, { useState, useEffect } from 'react';
            // import axios from 'axios';

            // function UserList() {
            // const [users, setUsers] = useState([]);

            // useEffect(() => {
            //     // We define an async function inside the effect
            //     const fetchUsers = async () => {
            //     try {
            //         const response = await axios.get('https://jsonplaceholder.typicode.com/users');
            //         setUsers(response.data); // Axios puts the result in the 'data' property
            //     } catch (error) {
            //         console.error("Error fetching data:", error);
            //     }
            //     };

            //     fetchUsers();
            //   }, []); // Empty array means this runs once on mount

            // return (
            //     <ul>
            //     {users.map(user => <li key={user.id}>{user.name}</li>)}
            //     </ul>
            // );
            // }
    
    // POST REQUEST
            // const addUser = async (userData) => {
            // try {
            //     const response = await axios.post('/api/users', userData);
            //     console.log("User created:", response.data);
            // } catch (err) {
            //     console.error(err);
            // }
            // };