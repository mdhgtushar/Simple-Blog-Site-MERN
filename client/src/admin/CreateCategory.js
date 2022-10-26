import React, { useEffect, useState } from "react";
import ApiReq from "../api/ApiReq";

const CreateCategory = () => {
  const [category_name, setCategory_name] = useState("");
  const [image, setImage] = useState("");
  const [categories, setCategories] = useState([]);
  const GetCategories = async () => {
    const data = await ApiReq.get("/category");
    setCategories(data.data);
  };

  useEffect(() => {
    GetCategories();
  }, []);

  const categorySubmit = async (e) => {
    e.preventDefault();
    console.log(image);
    const formData = new FormData();
    formData.append("image", image);
    formData.append("category_name", category_name);
    const submitdata = await ApiReq.post("/category", formData);
    if (submitdata) {
      alert("success");
    }
    setCategory_name("");
    GetCategories();
  };

  const deleteCatagory = async (id) => {
    const deleteCat = await ApiReq.delete("/category", {
      params: {
        id: id,
      },
    });
    alert(deleteCat.data.success);
    GetCategories();
  };
  return (
    <div style={{ padding: "50px" }} class="row">
      <div class="col-md-4">
        <form onSubmit={categorySubmit} encType="multipart/form-data">
          <div class="card mb-2">
            <div class="card-body">
              <h2>Create Category</h2>
              <hr />
              <div class="mb-3">
                <label for="title" class="form-label">
                  Enter The Category Name
                </label>
                <input
                  class="form-control"
                  id="title"
                  value={category_name}
                  onChange={(e) => setCategory_name(e.target.value)}
                />
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
                <input class="form-control" type="submit" />
              </div>
            </div>
          </div>
        </form>
      </div>

      <div class="col-md-8">
        <div class="row">
          {categories.map((category) => {
            return (
              <div class="card mr-2" style={{ width: "18rem" }}>
                <img
                  src={`http://localhost:5000/controllers/uploads/${category.image}`}
                  class="card-img-top"
                  alt="..."
                />
                <div class="card-body">
                  <p class="card-title">{category.category_name}</p>
                  <button onClick={() => deleteCatagory(category._id)}>
                    Delete
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default CreateCategory;
