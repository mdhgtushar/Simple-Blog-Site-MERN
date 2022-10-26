import React from "react";
import { Link } from "react-router-dom";
const PostHome = ({ post }) => {
  return (
    <Link
      to={`/post/${post._id}`}
      class="card mb-3 text-decoration-none text-muted"
    >
      <div class="row g-0">
        <div class="col-md-4">
          <img
            style={{ width: "100%", height: "120px", objectFit: "cover" }}
            src={`http://localhost:5000/controllers/uploads/posts/${post.image}`}
            class="card-img-top"
            alt="post"
          />
        </div>
        <div class="col-md-8">
          <div class="card-body">
            <h5 class="card-title">{post.title}</h5>
            <span
              class="d-inline-block text-truncate col-12"
              style={{ fontSize: "12px" }}
            >
              {post.description}
            </span>
            {post.categories.map((category) => {
              return (
                <div
                  class="badge bg-primary text-wrap"
                  style={{ marginRight: "5px" }}
                  key={category}
                >
                  {category}
                </div>
              );
            })}
            <small class="text-muted"> 3 mins ago</small>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default PostHome;
