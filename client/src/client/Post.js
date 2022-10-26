import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import ApiReq from "../api/ApiReq";

const Post = () => {
  const [post, setPost] = useState([]);
  const params = useParams();
  const getSinglePost = async () => {
    const data = await ApiReq.get("/posts/post", {
      params: {
        id: params.id,
      },
    });
    setPost(data.data);
  };
  useEffect(() => {
    getSinglePost();
  }, [params.id, getSinglePost]);

  return (
    <div class="col-lg-8">
      <div class="card mb-2">
        <div class="card-header">
          <h5 class="card-title m-0">{post.title}</h5>
        </div>
        <div class="card-body">
          <h5 class="card-title">
            <img
              src={`http://localhost:5000/controllers/uploads/posts/${post.image}`}
              class="w-100"
              alt={post.title}
            />
          </h5>
          <div>{post.description}</div>
        </div>
      </div>

      <div class="card mb-2">
        <div class="card-body">
          <div class="mb-3">
            <label for="exampleFormControlTextarea1" class="form-label">
              Enter a comment
            </label>
            <textarea
              class="form-control"
              id="exampleFormControlTextarea1"
              rows="3"
            ></textarea>
          </div>
        </div>
      </div>
      <ul class="list-group list-group mb-2">
        <li class="list-group-item d-flex justify-content-between align-items-start">
          <div class="ms-2 me-auto">
            <div class="fw-bold">Subheading</div>
            Cras justo odio
          </div>
          <span class="badge bg-primary rounded-pill">14</span>
        </li>
        <li class="list-group-item d-flex justify-content-between align-items-start">
          <div class="ms-2 me-auto">
            <div class="fw-bold">Subheading</div>
            Cras justo odio
          </div>
          <span class="badge bg-primary rounded-pill">14</span>
        </li>
        <li class="list-group-item d-flex justify-content-between align-items-start">
          <div class="ms-2 me-auto">
            <div class="fw-bold">Subheading</div>
            Cras justo odio
          </div>
          <span class="badge bg-primary rounded-pill">14</span>
        </li>
      </ul>
    </div>
  );
};

export default Post;
