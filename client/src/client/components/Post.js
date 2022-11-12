import React from "react";
import { Link } from "react-router-dom";

const Post = ({ post }) => {
  return (
    <div className="card mb-3 overflow-hidden">
      <Link to={`/post/${post._id}`}>
        <div className="row g-0">
          <div className="col-md-4 p-0"
            style={{ height: "60px", }}>
            <div>
              <img
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
                src={`http://localhost:5000/controllers/uploads/posts/${post.image}`}
                className="card-img-top"
                alt="post"
              />
            </div>
          </div>
          <div className="col-md-8">
            <div className=" py-3">
              <h5
                className="card-tittle"
                style={{ fontSize: "15px" }}
              >
                {post.title}
              </h5>

              {post.categories.map((category) => {
                return (
                  <div
                    className="badge bg-primary text-wrap"
                    style={{ marginRight: "5px" }}
                    key={category}
                  >
                    {category}
                  </div>
                );
              })}
              <small className="text-muted"> 3 mins ago</small>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Post;
