import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ApiReq from "../../api/ApiReq";
import Post from "../components/Post";

const Sidebar = () => {
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
    <div class="col-lg-4">
      <form class="mb-2">
        <input
          class="form-control"
          list="datalistOptions"
          id="exampleDataList"
          placeholder="Type to search..."
        />
        <datalist id="datalistOptions">
          <option value="San Francisco" />
          <option value="New York" />
          <option value="Seattle" />
          <option value="Los Angeles" />
          <option value="Chicago" />
        </datalist>
      </form>
      <li
        type="button"
        class="list-group-item list-group-item-action active"
        aria-current="true"
      >
        ফিচার্ড পোস্ট
      </li>
      {posts.map((post, key) => {
        return <Post post={post} key={post.id} />;
      })}
      <ul class="list-group mb-2">
        <li
          type="button"
          class="list-group-item list-group-item-action active"
          aria-current="true"
        >
          ক্যাটাগরি
        </li>
        {categories.map((category, key) => {
          return (
            <li
              class="list-group-item d-flex justify-content-between align-items-center"
              key={key}
            >
              <Link to={`/category/${category.category_name}`}>
                {category.category_name}{" "}
              </Link>
              <span class="badge bg-primary rounded-pill">
                {category.numberOfPosts}
              </span>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Sidebar;
