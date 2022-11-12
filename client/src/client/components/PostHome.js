import React from "react";
import { Link } from "react-router-dom";
const PostHome = ({ post }) => {
  return (
    <Link
      to={`/post/${post._id}`}
      className="card mb-3 text-decoration-none text-muted overflow-hidden"
    >
      <div className="row">
        <div className="col-md-4 p-0" style={{ height: "120px" }}>
          <img
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
            src={`http://localhost:5000/controllers/uploads/posts/${post.image}`}
            className="card-img-top"
            alt="post"
          />
        </div>
        <div className="col-md-8">
          <div className="py-3">
            <h5 className="card-title">{post.title}</h5>
            <span
              className="d-inline-block text-truncate col-12 p-0"
              style={{ fontSize: "12px" }}
            >
              {post.description}
            </span>
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
  );
};

export default PostHome;
