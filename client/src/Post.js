import React from "react";

const Post = () => {
  return (
    <div class="col-lg-8">
      <div class="card mb-2">
        <div class="card-header">
          <h5 class="card-title m-0">
            সহজেই খুজে পান ট্রিকবিডি এর সাপোর্ট টিম কে… যেকোন প্রয়োজনে আপনার
            পাশে :)
          </h5>
        </div>
        <div class="card-body">
          <h5 class="card-title">Special title treatment</h5>
          <p class="card-text">
            আসসলামুআলাইকুম, ট্রিকবিডি এর গুরুত্বপূর্ন কিছু আপডেট নিয়ে আপনাদের
            সামনে হাজির হলাম। অনেকেরেই অভিযোগ ছিলো ট্রিকবিডি টিম এর সাথে যোগাযোগ
            এর সহজ কোন উপায় নেই… তাই অনেক গুরুত্বপূর্ন বিষয়ে যোগাযোগের জন্য
            চেষ্টা করা হলেও কোন রেসপন্স পাওয়া যায় না। সেই সমস্যা সমাধানে আপনাদের
            জন্য তৈরী করা হলো Trickbd Support Mailing System যেটা পুরো ট্রিকবিডি
            টিম মিলে নিয়ন্ত্রন করবে… সুতরাং যেকোন প্রয়োজনে বিস্তারিত তথ্য দিয়ে
            আপনার শুধু একটা মেইল করলেই হবে। 🙂 মেইল এড্রেস ~ support@trickbd.com
            মেইল করার সময় নিচের কাঠামো টা ফলো করুন … মেইলের সাবজেক্টে আপনার
            ট্রিকবিডি তে অবস্থান উল্লেখ করুন। যেমনঃ আপনি ট্রেইনার হলে সাবজেক্টে
            এ “[Trainer]” লিখে সাবজেক্ট লেখা শুরু করুন। যদিআপনার ট্রিকবিডি তে
            আইডি না থাকলে “[Visitor]” লিখুন ট্রেইনার হওয়ার জন্য বা নতুন আইডি
            খুলার জন্য মেইলে আবেদন না করে পোষ্টের নিচের দিকে দেখুন
          </p>
          <a href="#" class="btn btn-primary">
            Go somewhere
          </a>
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
