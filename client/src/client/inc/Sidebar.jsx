import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ApiReq from "../../api/ApiReq";
import Post from "../components/Post";
import { useTranslation } from "react-i18next";

const Sidebar = () => {
  const { t } = useTranslation();
  const [categories, setCategories] = useState([]);

  const getCategories = async () => {
    const data = await ApiReq.get("category");
    setCategories(data.data);
  };

  const [posts, setPosts] = useState([]);

  const getPosts = async () => {
    const data = await ApiReq.get("posts/featured");
    setPosts(data.data);
  };
  useEffect(() => {
    getPosts();
    getCategories();
  }, []);

  return (
    <div className="col-lg-4">
      <div className="card">
        <div className="card-body">
          <p className="lead">{t("admin")}</p>
          <hr className="my-4" />
          <p>{t("description")}</p>
          <p className="lead">
            <button
              type="button"
              className="btn btn-primary"
              data-toggle="modal"
              data-target="#exampleModalCenter"
            >
              Watch Video
            </button>
          </p>
        </div>
      </div>
      <br />

      <li
        type="button"
        className="list-group-item list-group-item-action active"
        aria-current="true"
      >
        {t("titles.1")}
      </li>
      {posts.map((post, key) => {
        return <Post post={post} key={post.id} />;
      })}
      <ul className="list-group mb-2">
        <li
          type="button"
          className="list-group-item list-group-item-action active"
          aria-current="true"
        >
          {t("titles.2")}
        </li>
        {categories.map((category, key) => {
          return (
            <li
              className="list-group-item d-flex justify-content-between align-items-center"
              key={key}
            >
              <Link to={`/category/${category.category_name}`}>
                {category.category_name}{" "}
              </Link>
              <span className="badge bg-primary rounded-pill">
                {category.numberOfPosts}
              </span>
            </li>
          );
        })}
      </ul>
      <br />
      <p className="color-gray">all &copycopyright reserved</p>
    </div>
  );
};

export default Sidebar;
