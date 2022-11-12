import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
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
    <div className="col-lg-8">
      <br />
      <h4 className="text-muted card card-body">Cateogries List</h4>
      <br />
      <div className="row">
        {categories.map((category) => {
          return (
            <div className="col-md-4" key={category._id}>
              <Link to={`/category/${category.category_name}`}>
                <div className="card">
                  <img
                    src={`http://localhost:5000/controllers/uploads/${category.image}`}
                    className="card-img-top"
                    alt="..."
                  />
                  <div className="card-body">
                    <h5 className="card-title">{category.category_name}</h5>
                  </div>
                </div>
              </Link>
            </div>
          );
        })}
      </div></div>
  );
};

export default Categories;
