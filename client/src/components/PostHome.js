import React from "react";
import { Link } from "react-router-dom";
const PostHome = () => {
  return (
    <Link to="post" class="card mb-3 text-decoration-none text-muted">
      <div class="row g-0">
        <div class="col-md-4">
          <img
            style={{ width: "100%", height: "120px", objectFit: "cover" }}
            src="https://codingyaar.com/wp-content/uploads/bootstrap-4-card-image-left-demo-image.jpg"
            class="card-img-top"
            alt="post"
          />
        </div>
        <div class="col-md-8">
          <div class="card-body">
            <h5 class="card-title">
              সহজেই খুজে পান ট্রিকবিডি এর সাপোর্ট টিম কে… যেকোন প্রয়োজনে আপনার
              পাশে :)
            </h5>
            <span
              class="d-inline-block text-truncate col-12"
              style={{ fontSize: "12px" }}
            >
              আসসলামুআলাইকুম, ট্রিকবিডি এর গুরুত্বপূর্ন কিছু আপডেট নিয়ে আপনাদের
              সামনে হাজির হলাম। অনেকেরেই অভিযোগ ছিলো ট্রিকবিডি টিম এর সাথে
              যোগাযোগ এর..
            </span>
            <div class="badge bg-primary text-wrap">Lifestyle</div>
            <small class="text-muted"> 3 mins ago</small>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default PostHome;
