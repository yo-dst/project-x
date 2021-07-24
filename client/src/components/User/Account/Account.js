import React, { useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import { Redirect, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import {logout, updateUser} from "../../../actions/user";
import {addProduct, delProduct, updateProduct ,fetchUserProducts} from "../../../actions/userProducts";

const UserProducts = (props) => {
    const dispatch = useDispatch();
    const userProducts = useSelector(state => state.userProducts);

    useEffect(() => {
        dispatch(fetchUserProducts());
    }, [dispatch]);

    if (userProducts.loading) {
        return (
            <h1>Loading...</h1>
        );
    }
    else if (userProducts.err) {
        return (
            <h1>NEED TO HANDLE THAT BOY</h1>
        );
    }
    else {
        return (
            <div>
                <Button onClick={e => props.setSelectedProduct("OKOKOK")}>CHANGE SELECTEDPRODUCT</Button>
                {userProducts.products.map(product => (
                    <div key={product._id} style={{background: "yellow"}}>
                        {product.title} | {product.price / 100}€<br/>
                        <img src={`http://localhost:5000/images/products/${product.imageFront}`} alt={product.title} width="200px" height="200px"/>
                        <Button onClick={e => dispatch(delProduct(product._id))}>Delete product</Button>
                    </div>
                ))}
            </div>
        );
    }
}

const Account = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const user = useSelector(state => state.user);
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [newProduct, setNewProduct] = useState({
        title: "",
        description: "",
        imageFront: "",
        imageback: "",
        style: "",
        price: ""
    });

    const handleLogout = () => {
        dispatch(logout());
        history.push("/shop");
    }

    const handleProductSubmit = async (e) => { //del async ???
        try {
            e.preventDefault();
            const formData = new FormData();
            formData.append("title", newProduct.title);
            formData.append("description", newProduct.description);
            formData.append("imageFront", newProduct.imageFront);
            formData.append("imageBack", newProduct.imageBack);
            formData.append("style", newProduct.style);
            formData.append("price", parseFloat(newProduct.price));
            dispatch(addProduct(formData));
        } catch (err) {
            console.log(err);
        }
    }

    const handleProductUpdate = (e) => {
        dispatch(updateProduct(selectedProduct._id, newProduct)); // i was doing that
        console.log("YEH");
    }

    if (user.isLoading) {
        return (
            <h1>Loading...</h1>
        );
    }
    else if (!user.user)
        return (
            <Redirect to="/login" />
        );
    else if (user.user) {
        return (
            <div>
                <h2>Account</h2>
                <p>{selectedProduct ? selectedProduct : "null"}</p>
                <Button onClick={e => setSelectedProduct(null)}>reset selectedProduct</Button>
                <p>
                    Username: {user.user.username} <br/>
                    Firstname: {user.user.firstname} <br/>
                    Lastname: {user.user.lastname} <br/>
                    Email: {user.user.email} <br/>
                    Password: {user.user.password} <br/>
                </p>
                <UserProducts selectedProduct={selectedProduct} setSelectedProduct={setSelectedProduct} />
                <Button variant="primary" onClick={handleLogout}>Déconnexion</Button>
                <form onSubmit={selectedProduct ? handleProductUpdate : handleProductSubmit} encType="multipart/form-data">
                    <input
                        type="text"
                        placeholder="title"
                        name="title"
                        value={newProduct.title}
                        onChange={(e) => setNewProduct({...newProduct, title: e.target.value})}
                    />
                    <input 
                        type="text"
                        placeholder="description"
                        name="description"
                        value={newProduct.description}
                        onChange={(e) => setNewProduct({...newProduct, description: e.target.value})}
                    />
                    <input 
                        type="file"
                        accept=".jpg"
                        name="imageFront"
                        onChange={(e) => setNewProduct({...newProduct, imageFront: e.target.files[0]})}
                    />
                    <input 
                        type="text"
                        placeholder="price"
                        name="price"
                        value={newProduct.price}
                        onChange={(e) => setNewProduct({...newProduct, price: e.target.value})}
                    />
                    <input type="submit"/>
                </form>
            </div>
        );
    }
};

export default Account;