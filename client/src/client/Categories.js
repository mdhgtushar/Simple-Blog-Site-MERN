import React, { useEffect, useState } from "react";
import ApiReq from "../api/ApiReq";

const Categories = () => {
  const [categories, setCategories] = useState([]);

  const getCategories = async () => {
    const data = await ApiReq.get("/category");

    setCategories(data.data);
  };
  useEffect(() => {
    getCategories();
  }, []);
  return (
    <div class="col-lg-8">
      Categories
      {categories.map((category) => {
        return (
          <div class="card" style={{ width: "12rem" }}>
            <img
              src={`http://localhost:5000/controllers/uploads/${category.image}`}
              class="card-img-top"
              alt="..."
            />
            <div class="card-body">
              <h5 class="card-title">{category.category_name}</h5>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Categories;
