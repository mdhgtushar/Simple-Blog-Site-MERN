import React from "react";
import Post from "../components/Post";
import PostHome from "../components/PostHome";

const Sidebar = () => {
  return (
    <div class="col-lg-4">
      <form class="mb-2">
        <input
          class="form-control"
          list="datalistOptions"
          id="exampleDataList"
          placeholder="Type to search..."
        />
        <datalist id="datalistOptions">
          <option value="San Francisco" />
          <option value="New York" />
          <option value="Seattle" />
          <option value="Los Angeles" />
          <option value="Chicago" />
        </datalist>
      </form>
      <li
        type="button"
        class="list-group-item list-group-item-action active"
        aria-current="true"
      >
        ফিচার্ড পোস্ট
      </li>
      <Post />
      <Post />
      <Post />
      <Post />
      <ul class="list-group mb-2">
        <li
          type="button"
          class="list-group-item list-group-item-action active"
          aria-current="true"
        >
          ক্যাটাগরি
        </li>
        <li class="list-group-item d-flex justify-content-between align-items-center">
          A list item
          <span class="badge bg-primary rounded-pill">14</span>
        </li>
        <li class="list-group-item d-flex justify-content-between align-items-center">
          A second list item
          <span class="badge bg-primary rounded-pill">2</span>
        </li>
        <li class="list-group-item d-flex justify-content-between align-items-center">
          A third list item
          <span class="badge bg-primary rounded-pill">1</span>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
