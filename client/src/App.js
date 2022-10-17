import Home from "./Home";

import { Routes, Route } from "react-router-dom";
import Post from "./Post";
import NotFound from "./NotFound";
import Client from "./layout/Client";
import Admin from "./layout/Admin";
import { useEffect } from "react";
import { getPostFromServer } from "./features/postSlice";
import { useDispatch } from "react-redux";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPostFromServer());
  }, [dispatch]);
  return (
    <Routes>
      <Route path="/" element={<Client />}>
        <Route path="" element={<Home />} />
        <Route path="post/:id" element={<Post />} />
        <Route path="*" element={<NotFound />} />
      </Route>
      <Route path="/admin" element={<Admin />}>
        <Route path="" element={"<Home />"} />
      </Route>
    </Routes>
  );
}

export default App;
