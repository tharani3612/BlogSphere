import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

import Home from "./pages/Home/Home";
import Blogs from "./pages/Blogs/Blogs";
import BlogDetails from "./pages/BlogDetails/BlogDetails";
import Categories from "./pages/Categories/Categories";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import ForgotPassword from "./pages/ForgotPassword/ForgotPassword";

function App() {
  return (
    <BrowserRouter>

      <Routes>

        {/* LOGIN */}
        <Route
          path="/"
          element={<Login />}
        />

        <Route
          path="/login"
          element={<Login />}
        />

        {/* REGISTER */}
        <Route
          path="/register"
          element={<Register />}
        />

        {/* FORGOT PASSWORD */}
        <Route
          path="/forgotpassword"
          element={<ForgotPassword />}
        />

        {/* HOME */}
        <Route
          path="/home"
          element={<Home />}
        />

        {/* BLOGS */}
        <Route
          path="/blogs"
          element={<Blogs />}
        />

        {/* BLOG DETAILS */}
        <Route
          path="/blogs/:id"
          element={<BlogDetails />}
        />

        {/* CATEGORIES */}
        <Route
          path="/categories"
          element={<Categories />}
        />

      </Routes>

    </BrowserRouter>
  );
}

export default App;