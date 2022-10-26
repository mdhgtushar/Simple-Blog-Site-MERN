import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ApiReq from "../../api/ApiReq";

const Header = () => {
  const [categories, setCategories] = useState([]);

  const getCategories = async () => {
    const data = await ApiReq.get("category");
    setCategories(data.data);
  };
  useEffect(() => {
    getCategories();
  }, []);
  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-light mb-2 border border-top-0 border-start-0 border-end-0">
      <div class="container">
        <Link class="navbar-brand" to="/">
          হোবায়ের ব্লগ
        </Link>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <Link class="nav-link active" aria-current="page" to="/">
                প্রথম পাতা
              </Link>
            </li>
            <li class="nav-item dropdown">
              <Link
                class="nav-link dropdown-toggle"
                type="button"
                id="dropdownMenuButton"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                ক্যাটাগরি
              </Link>
              <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                <li>
                  <Link to={`/categories`} class="dropdown-item">
                    সব দেখুন
                  </Link>
                </li>
                <div class="dropdown-divider"></div>
                {categories.map((category, key) => {
                  return (
                    <li>
                      <Link
                        to={`/category/${category.category_name}`}
                        class="dropdown-item"
                        key={key}
                      >
                        {category.category_name}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </li>
          </ul>
          <form class="d-flex">
            <input
              class="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button class="btn btn-outline-success" type="submit">
              Search
            </button>
          </form>
          <button class="btn">En</button>
        </div>
      </div>
    </nav>
  );
};

export default Header;
