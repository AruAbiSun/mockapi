import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Product = ({ setId }) => {
  const [product, setProduct] = useState([]);
  const[deleteData,setDeletedata]=useState([])
  const navigate=useNavigate()
  useEffect(() => {
    fetchData();
  }, [deleteData]);
  const fetchData = async () => {
    await axios
      .get("https://65d5fbe6f6967ba8e3bd2eb1.mockapi.io/api/products")
      .then((res) => setProduct(res.data))
      .catch((err) => {
        console.log(err);
      });
  };
  const handleEdit = (id) => {
    setId(id)
    navigate(`/edit/${id}`)
  }
  const handleDelete = async(id) => {
    await axios.delete(`https://65d5fbe6f6967ba8e3bd2eb1.mockapi.io/api/products/${id}`)
      .then(res => setDeletedata(res.data))
    .catch((err)=>{console.log(err)})
  }
  return (
    <div>
      <table class="table">
        <thead>
          <tr>
            <th scope="col">No.</th>
            <th scope="col">ProductId</th>
            <th scope="col">ProductName</th>
            <th scope="col">ProductPrice</th>
            <th scope="col">Edit</th>
            <th scope="col">Delete</th>
          </tr>
        </thead>
        <tbody>
          {product.map((item, index) => {
            return (
              <>
                <tr key={index}>
                  <th scope="row">{item.id}</th>
                  <td>{item.product_id}</td>
                  <td>{item.product_name}</td>
                  <td>{item.product_price}</td>
                  <td><button onClick={()=>{handleEdit(item.id)}}>Edit</button></td>
                  <td><button onClick={()=>{handleDelete(item.id)}}>Delete</button></td>
                </tr>
              </>
            );
          })}
        </tbody>
          </table>
          <button onClick={()=>{navigate('/create')}}>Create</button>
    </div>
  );
};

export default Product;
