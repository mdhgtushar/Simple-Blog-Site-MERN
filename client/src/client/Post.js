import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import ApiReq from "../api/ApiReq";

const Post = () => {
  const [post, setPost] = useState([]);
  const params = useParams();


  useEffect(() => {
    ApiReq.get("/posts/post", {
      params: {
        id: params.id,
      },
    }).then((data) => setPost(data.data))

  }, [params.id]);

  return (
    <div className="col-lg-8">
      <div className="card mb-2">
        <div className="card-header">
          <h5 className="card-title m-0">{post.title}</h5>
        </div>
        <div className="card-body">
          <h5 className="card-title">
            <img
              src={`http://localhost:5000/controllers/uploads/posts/${post.image}`}
              className="w-100"
              alt={post.title}
            />
          </h5>
          <div>{post.description}</div>
        </div>
      </div>

      <div className="card mb-2">
        <div className="card-body">
          <div className="mb-3">
            <label for="exampleFormControlTextarea1" className="form-label">
              Enter a comment
            </label>
            <textarea
              className="form-control"
              id="exampleFormControlTextarea1"
              rows="3"
            ></textarea>
          </div>
        </div>
      </div>
      <ul className="list-group list-group mb-2">
        <li className="list-group-item d-flex justify-content-between align-items-start">
          <div className="ms-2 me-auto">
            <div className="fw-bold">Subheading</div>
            Cras justo odio
          </div>
          <span className="badge bg-primary rounded-pill">14</span>
        </li>
        <li className="list-group-item d-flex justify-content-between align-items-start">
          <div className="ms-2 me-auto">
            <div className="fw-bold">Subheading</div>
            Cras justo odio
          </div>
          <span className="badge bg-primary rounded-pill">14</span>
        </li>
        <li className="list-group-item d-flex justify-content-between align-items-start">
          <div className="ms-2 me-auto">
            <div className="fw-bold">Subheading</div>
            Cras justo odio
          </div>
          <span className="badge bg-primary rounded-pill">14</span>
        </li>
      </ul>
    </div>
  );
};

export default Post;
