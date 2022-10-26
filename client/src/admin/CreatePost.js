import React, { useEffect, useState } from "react";
import ApiReq from "../api/ApiReq";
import Post from "./components/Post";

const CreatePost = () => {
  const [title, setTitle] = useState("");
  const [isF, setIsF] = useState(false);
  const [image, setImage] = useState();
  const [description, setDescription] = useState("");

  const [posts, setPosts] = useState([]);

  const GetPosts = async () => {
    const data = await ApiReq.get("/posts");
    setPosts(data.data);
  };
  useEffect(() => {
    GetPosts();
  }, []);
  const CreatePostAction = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("title", title);
    formData.append("isFeatured", isF);
    formData.append("description", description);
    formData.append("image", image);
    const submitPost = await ApiReq.post("/posts", formData);
    alert(submitPost.data);
    setTitle("");
    setIsF("");
    setDescription("");
    GetPosts();
  };
  const DeletePostAction = async (id) => {
    const deleteAction = await ApiReq.delete("/posts", { params: { id: id } });
    alert(deleteAction.data.success);
    GetPosts();
  };
  return (
    <div style={{ padding: "50px" }} class="row">
      <div class="col-lg-4">
        <form onSubmit={CreatePostAction}>
          <div class="card mb-2">
            <div class="card-body">
              <h2>Create Post</h2>
              <hr />
              <div class="mb-3">
                <label for="title" class="form-label">
                  Enter The Post Title
                </label>
                <input
                  class="form-control"
                  id="title"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />
              </div>
              <div class="mb-3">
                <input
                  class=""
                  id="featured"
                  type="checkbox"
                  value={isF}
                  onChange={(e) => setIsF(e.target.value)}
                />{" "}
                <label for="featured" class="form-label">
                  Is this Post Featured
                </label>
              </div>
              <div class="mb-3">
                <label for="image" class="form-label">
                  Select The Post Image
                </label>
                <input
                  class="form-control"
                  id="image"
                  required
                  type="file"
                  onChange={(e) => setImage(e.target.files[0])}
                />
              </div>
              <div class="mb-3">
                <label for="body" class="form-label">
                  Enter The Post Body
                </label>
                <textarea
                  class="form-control"
                  id="body"
                  rows="3"
                  onChange={(e) => setDescription(e.target.value)}
                >
                  {description}
                </textarea>
              </div>
              <div class="mb-3">
                <input class="form-control" type="submit" />
              </div>
            </div>
          </div>
        </form>
      </div>
      <div class="col-lg-8">
        {posts.map((post) => {
          return (
            <Post
              post={post}
              DeletePostAction={DeletePostAction}
              key={post._id}
            />
          );
        })}
      </div>
    </div>
  );
};

export default CreatePost;
