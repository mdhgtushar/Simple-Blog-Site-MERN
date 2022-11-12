import React, { useEffect, useState } from "react";
import ApiReq from "../api/ApiReq";
import PostHome from "./components/PostHome";
import { useTranslation } from "react-i18next";

const Home = () => {
  const [posts, setPosts] = useState([]);
  const { t } = useTranslation();

  const getPosts = async () => {
    const data = await ApiReq.get("/posts");
    setPosts(data.data);
  };

  useEffect(() => {
    getPosts();
  }, []);
  console.log(posts);

  return (
    <div className="col-lg-8">
      <div className="card">
        <div className="card-body">
          <h1 className="display-4">Welcome to my Blog!</h1>
          <p className="lead">এখানে আমার আইডিয়ার নোট গুলো লিপিবদ্ধ করে রাখব।</p>
          <hr className="my-4" />
          <p>{t("description")}</p>
          <p className="lead">
            <button
              type="button"
              className="btn btn-primary"
              data-toggle="modal"
              data-target="#exampleModalCenter"
            >
              Watch Video
            </button>
          </p>
        </div>
      </div>
      <br />

      <div
        className="modal fade bd-example-modal-lg"
        id="exampleModalCenter"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="exampleModalCenterTitle"
        aria-hidden="true"
      >
        <div
          className="modal-dialog modal-dialog-centered modal-lg "
          role="document"
        >
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLongTitle">
                Modal title
              </h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <iframe
                width="100%"
                height="315"
                src="https://www.youtube.com/embed/eIUFkD0PuD8"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-dismiss="modal"
              >
                Close
              </button>
              <button type="button" className="btn btn-primary">
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div>
      {posts.map((post) => {
        return <PostHome post={post} key={post.id} />;
      })}
      {/* <nav aria-label="Page navigation example">
        <ul className="pagination">
          <li className="page-item">
            <a className="page-link" href="#" aria-label="Previous">
              <span aria-hidden="true">&laquo;</span>
            </a>
          </li>
          <li className="page-item">
            <a className="page-link" href="#">
              1
            </a>
          </li>
          <li className="page-item">
            <a className="page-link" href="#" aria-label="Next">
              <span aria-hidden="true">&raquo;</span>
            </a>
          </li>
        </ul>
      </nav> */}
    </div>
  );
};

export default Home;
