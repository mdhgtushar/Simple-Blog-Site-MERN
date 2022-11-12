import { useTranslation } from "react-i18next";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import ApiReq from "../../api/ApiReq";

const Header = () => {
  const [categories, setCategories] = useState([]);
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();
  const clickLanguage = (lang) => {
    i18n.changeLanguage(lang);
  };

  const getCategories = async () => {
    const data = await ApiReq.get("category");
    setCategories(data.data);
  };

  useEffect(() => {
    getCategories();
  }, []);
  const searchAction = (e) => {
    e.preventDefault();
    if (e.target.searchInput.value) {
      navigate("/search/" + e.target.searchInput.value);
    } else {
      alert("Please write what you want to search");
    }
  };
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light mb-2 border border-top-0 border-start-0 border-end-0">
      <div className="container">
        <Link className="lead" to="/">
          {t("logoText")}
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">
                {t("menu.1")}
              </Link>
            </li>
            <li className="nav-item dropdown">
              <Link
                className="nav-link dropdown-toggle"
                type="button"
                id="dropdownMenuButton"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                {t("menu.2")}
              </Link>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li>
                  <Link to={`/categories`} className="dropdown-item">
                    {t("menu.3")}
                  </Link>
                </li>
                <div className="dropdown-divider"></div>
                {categories.map((category, key) => {
                  return (
                    <li key={key}>
                      <Link
                        to={`/category/${category.category_name}`}
                        className="dropdown-item"
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
          <form className="d-flex" method="get" onSubmit={searchAction}>
            <input
              className="form-control me-2"
              type="search"
              name="searchInput"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-success" type="submit">
              Search
            </button>
          </form>
          <select
            name=""
            className="btn"
            defaultValue={localStorage.i18nextLng}
            onChange={(e) => clickLanguage(e.target.value)}
          >
            <option value="en">English</option>
            <option value="bn">Bangla</option>
          </select>
        </div>
      </div>
    </nav>
  );
};

export default Header;
