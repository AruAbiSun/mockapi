import React, { useEffect, useState } from "react";
import axios from "axios";

const Home = () => {
  const [product, setProduct] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    await axios
      .get("https://65d5fbe6f6967ba8e3bd2eb1.mockapi.io/api/products")
      .then((res) => setProduct(res.data))
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div>
      <div class="row row-cols-1 row-cols-md-3 g-4">
        {product.map((item, index) => {
          return (
            <>
              <div key={index}>
                <div class="col">
                  <div class="card">
                    <img
                      src={item.product_image}
                      class="card-img-top"
                      alt="..."
                    />
                    <div class="card-body">
                      <h5 class="card-title">{item.product_id}</h5>
                      <h5 class="card-title">{item.product_name}</h5>
                      <h5 class="card-title">{item.product_price}</h5>
                    </div>
                  </div>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
};

export default Home;
