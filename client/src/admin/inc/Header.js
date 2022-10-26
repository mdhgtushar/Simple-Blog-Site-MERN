import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <a href="#" class="navbar-brand">
          Hobayer Blog <b>Admin</b>
        </a>
        <button
          type="button"
          class="navbar-toggler"
          data-toggle="collapse"
          data-target="#navbarCollapse"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div
          id="navbarCollapse"
          class="collapse navbar-collapse justify-content-start"
        >
          <div class="navbar-nav">
            <Link to="" class="nav-item nav-link">
              Dashboard
            </Link>
            <Link to="create-post" class="nav-item nav-link">
              Create Post
            </Link>
            <Link to="create-category" class="nav-item nav-link">
              Create Category
            </Link>
          </div>
          <form class="navbar-form form-inline">
            <div class="input-group search-box">
              <input
                type="text"
                id="search"
                class="form-control"
                placeholder="Search here..."
              />
              <div class="input-group-append">
                <span class="input-group-text">
                  <i class="material-icons">&#xE8B6;</i>
                </span>
              </div>
            </div>
          </form>
          <div class="navbar-nav ml-auto action-buttons">
            <Link to="/">Back to The Site</Link>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
