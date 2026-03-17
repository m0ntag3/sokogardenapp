import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Loader from './Loader';

const Getproducts = () => {

    // Initialize hooks to help manage the state of the application
    const [products,setProducts] = useState([]);
        // Squarebrackets - [] - are used because the products are to be fetched and stored/put inside a list/array.
    const [loading,setLoading] = useState(false);
    const [error,setError] = useState("");

    // Below we specify the image base url
    const img_url= "https://collinspaul.alwaysdata.net/static/images/"
    // Create a function to help fetch the products from the API
    const fetchProducts = async () =>{
        try{
            // Update the loading hook
            setLoading(true)
            // Interact with the end point for fetching the products.
            const response= await axios.get("https://collinspaul.alwaysdata.net/api/get_products")

            // Update the products hook with the response given from the API
            setProducts(response.data)

            // Set the loading hook back to default
            setLoading(false)
        }
        catch(error){
            // If an error is found, set the loading hook back to default
            setLoading(false)

            // Update the error hook with a message
            setError(error.message)
        }
    }

    // we shall use the useEffect hook this enables us to automatically rerender(redisplay) new features incase of any changes
    useEffect(()=> {
        fetchProducts()
    },[])

    // console.log(products)

return (
    <div className='row'>
        <h3 className="text-warning">Available Products</h3>

        {loading && <Loader/> }
        <h4 className="text-danger"> {error} </h4>

        {/* Map the products fetched from the API to the user interface */}

        {products.map((product) => (
                    <div className="col-md-3 justify-content-center mb-3">
            <div className="card shadow">
                <img 
                src={img_url + product.product_photo} 
                alt="product name"
                className='pic' />

                <div className="card-body">
                    <h5 className='text-secondary'>{product.product_name}</h5>
                    <p className="text-dark">{product.product_description.slice(0,70)}...</p>
                    <h4 className="text-info">Kes {product.product_cost}</h4>
                </div>
            </div>
        </div>
        ) )}

        
    </div>
)
}

export default Getproducts;