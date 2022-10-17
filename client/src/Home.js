import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import PostHome from "./components/PostHome";
import { getAllPost, getPostFromServer } from "./features/postSlice";

const Home = () => {
  const posts = useSelector(getAllPost);
  console.log(posts, "post");
  return (
    <div class="col-lg-8">
      <div class="card">
        <div class="card-body">
          <div class="jumbotron">
            <h1 class="display-4">Welcome to my Blog!</h1>
            <p class="lead">এখানে আমার আইডিয়ার নোট গুলো লিপিবদ্ধ করে রাখব।</p>
            <hr class="my-4" />
            <p>আরো ডিটেলস এর জন্য নিচের ভিডিও টি দেখতে পারেন</p>
            <p class="lead">
              <button
                type="button"
                class="btn btn-primary"
                data-toggle="modal"
                data-target="#exampleModalCenter"
              >
                Watch Video
              </button>
            </p>
          </div>
        </div>
      </div>
      <br />

      <div
        class="modal fade bd-example-modal-lg"
        id="exampleModalCenter"
        tabindex="-1"
        role="dialog"
        aria-labelledby="exampleModalCenterTitle"
        aria-hidden="true"
      >
        <div
          class="modal-dialog modal-dialog-centered modal-lg "
          role="document"
        >
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLongTitle">
                Modal title
              </h5>
              <button
                type="button"
                class="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
              <iframe
                width="100%"
                height="315"
                src="https://www.youtube.com/embed/eIUFkD0PuD8"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-secondary"
                data-dismiss="modal"
              >
                Close
              </button>
              <button type="button" class="btn btn-primary">
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div>
      {posts.map((post) => {
        return <PostHome post={post} key={post.id} />;
      })}
      <nav aria-label="Page navigation example">
        <ul class="pagination">
          <li class="page-item">
            <a class="page-link" href="#" aria-label="Previous">
              <span aria-hidden="true">&laquo;</span>
            </a>
          </li>
          <li class="page-item">
            <a class="page-link" href="#">
              1
            </a>
          </li>
          <li class="page-item">
            <a class="page-link" href="#">
              2
            </a>
          </li>
          <li class="page-item">
            <a class="page-link" href="#">
              3
            </a>
          </li>
          <li class="page-item">
            <a class="page-link" href="#" aria-label="Next">
              <span aria-hidden="true">&raquo;</span>
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Home;
