import React from "react";
import { Link } from "react-router-dom";

const Post = ({ post }) => {
  return (
    <div class="card mb-3">
      <Link to={`/post/${post.id}`}>
        <div class="row g-0">
          <div class="col-md-4">
            <div>
              <img
                style={{ width: "100%", height: "120px", objectFit: "cover" }}
                src={post.image}
                class="card-img-top"
                alt="post"
              />
            </div>
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <h5
                class="card-tittle d-inline-block "
                style={{ fontSize: "15px" }}
              >
                {post.title}
              </h5>
              {post.categories.map((category) => {
                return (
                  <div
                    class="badge bg-primary text-wrap"
                    style={{ marginRight: "5px" }}
                  >
                    {" "}
                    {category}{" "}
                  </div>
                );
              })}
              <small class="text-muted"> 3 mins ago</small>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Post;
