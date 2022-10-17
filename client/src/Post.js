import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getAllPost } from "./features/postSlice";

const Post = () => {
  const posts = useSelector(getAllPost);
  const params = useParams();
  const [post, setPost] = useState([]);

  useEffect(() => {
    setPost(posts[params.id - 1]);
  }, [params.id, posts]);
  console.log(params.id);
  return (
    <div class="col-lg-8">
      <div class="card mb-2">
        <div class="card-header">
          <h5 class="card-title m-0">{post.title}</h5>
        </div>
        <div class="card-body">
          <h5 class="card-title">
            <img src={post.image} class="w-100" alt={post.title} />
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
