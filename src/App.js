import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Dashboard from "./Pages/Dashboard/Dashboard";
import RequireAuth from "./components/RequireAuth/RequireAuth";
import Footer from "./components/Share/Footer/Footer";
import Header from "./components/Share/Header/Header";
import About from "./Pages/About/About";
import Blogs from "./Pages/Blogs/Blogs";
import Contact from "./Pages/Contact/Contact";
import Error from "./Pages/Error/Error";
import Home from "./Pages/Home/Home";
import Login from "./Pages/Login/Login";
import MyPortfolio from "./Pages/MyPortfolio/MyPortfolio";
import SignUp from "./Pages/SignUp/SignUp";
import Profile from "./Pages/Dashboard/Profile";
import AddProduct from "./Pages/Dashboard/AddProduct";
import AddReview from "./Pages/Dashboard/AddReview";
import ManageProduct from "./Pages/Dashboard/ManageProduct";
import ManageAllOrders from "./Pages/Dashboard/ManageAllOrders";
import Users from "./Pages/Dashboard/Users";
// import RequireAdmin from "./components/RequireAuth/RequireAdmin";

function App() {
  return (
    <>
      <header>
        <Header />
      </header>
      <main className=" pt-20 ">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route
            path="/dashboard"
            element={
              <RequireAuth>
                <Dashboard />
              </RequireAuth>
            }
          >
            <Route  index element={<Profile />} />
            <Route path="addProduct" element={<AddProduct />} />
            <Route path="addReview" element={<AddReview />} />
            <Route path="manageProduct" element={<ManageProduct />} />
            <Route path="manageAllOrders" element={<ManageAllOrders/>} />
            <Route path="users" element={</>} />
          </Route>
          <Route path="/myPortfolio" element={<MyPortfolio />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </main>
      <footer>
        <Footer />
      </footer>
      <ToastContainer />
    </>
  );
}

export default App;
