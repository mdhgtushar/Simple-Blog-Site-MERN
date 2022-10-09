import React from "react";
import { Link } from "react-router-dom";

const Post = () => {
  return (
    <div class="card mb-3">
      <Link to="/post">
        <div class="row g-0">
          <div class="col-md-4">
            <div>
              <img
                style={{ width: "100%", height: "120px", objectFit: "cover" }}
                src="https://codingyaar.com/wp-content/uploads/bootstrap-4-card-image-left-demo-image.jpg"
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
                সহজেই খুজে পান ট্রিকবিডি এর সাপোর্ট টিম কে… যেকোন প্রয়োজনে আপনার
                পাশে :)
              </h5>
              <div class="badge bg-primary text-wrap">Lifestyle</div>
              <small class="text-muted"> 3 mins ago</small>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Post;
