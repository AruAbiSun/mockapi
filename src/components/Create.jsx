import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Create = () => {
   const navigate = useNavigate();
   const [editData, setEditData] = useState({
     product_id: "",
     product_name: "",
     product_price: "",
   })
  const handleChange = (e) => {
        const { name, value } = e.target 
        setEditData((preData) => ({
            ...preData,[name]:value
        }))
    }
  const handleFormSubmit = async (e) => {
    e.preventDefault()
    await axios.post(`https://65d5fbe6f6967ba8e3bd2eb1.mockapi.io/api/products`, editData)
      .catch((err) => console.log(err))
    navigate('/product')
  }
  return (
    <div>
      <form onSubmit={handleFormSubmit}>
        <label>
          productId:
          <input
            type="text"
            name="product_id"
            value={editData.product_id}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          productName:
          <input
            type="text"
            name="product_name"
            value={editData.product_name}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          productPrice:
          <input
            type="text"
            name="product_price"
            value={editData.product_price}
            onChange={handleChange}
          />
        </label>
        <br />
        <button type="submit">Create</button>
      </form>
    </div>
  );
};

export default Create;
