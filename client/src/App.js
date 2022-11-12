import Home from "./client/Home";

import { Routes, Route } from "react-router-dom";
import Post from "./client/Post";
import NotFound from "./client/NotFound";
import Client from "./layout/Client";
import Admin from "./layout/Admin";
import Categories from "./client/Categories";
import CreatePost from "./admin/CreatePost";
import CreateCategory from "./admin/CreateCategory";
import Category from "./client/Category";
import Search from "./client/Search";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Client />}>
        <Route path="" element={<Home />} />
        <Route path="categories" element={<Categories />} />
        <Route path="category/:name" element={<Category />} />
        <Route path="post/:id" element={<Post />} />
        <Route path="search/:name" element={<Search />} />
        <Route path="*" element={<NotFound />} />
      </Route>
      <Route path="/admin" element={<Admin />}>
        <Route path="" element={"dashboared"} />
        <Route path="create-post" element={<CreatePost />} />
        <Route path="create-category" element={<CreateCategory />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default App;
