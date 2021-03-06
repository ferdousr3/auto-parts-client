import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import RequireAdmin from "./components/RequireAuth/RequireAdmin";
import RequireAuth from "./components/RequireAuth/RequireAuth";
import Footer from "./components/Share/Footer/Footer";
import Header from "./components/Share/Header/Header";
import About from "./Pages/About/About";
import Blogs from "./Pages/Blogs/Blogs";
import Contact from "./Pages/Contact/Contact";
import AddReview from "./Pages/Dashboard/AddReview";
import Dashboard from "./Pages/Dashboard/Dashboard";
import ManageAllOrders from "./Pages/Dashboard/Order/ManageAllOrders";
import MyOrder from './Pages/Dashboard/Order/MyOrder';
import Payment from "./Pages/Dashboard/Payment/Payment";
import AddProduct from "./Pages/Dashboard/Product/AddProduct";
import ManageProduct from "./Pages/Dashboard/Product/ManageProduct";
import Profile from "./Pages/Dashboard/Profile";
import Users from "./Pages/Dashboard/User/Users";
import Error from "./Pages/Error/Error";
import Home from "./Pages/Home/Home";
import Login from "./Pages/Login/Login";
import MyPortfolio from "./Pages/MyPortfolio/MyPortfolio";
import Order from "./Pages/Order/Order";
import SignUp from "./Pages/SignUp/SignUp";

function App() {
  return (
    <>
      <header>
        <Header />
      </header>
      <main className=" pt-16 ">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route
            path="/order/:id"
            element={
              <RequireAuth>
                <Order />
              </RequireAuth>
            }
          />
          <Route
            path="/dashboard"
            element={
              <RequireAuth>
                <Dashboard />
              </RequireAuth>
            }
          >
            <Route index element={<Profile />} />
            <Route
              path="addProduct"
              element={
                <RequireAdmin>
                  <AddProduct />
                </RequireAdmin>
              }
            />
            <Route path="addReview" element={<AddReview />} />
            <Route path="payment/:id" element={<Payment />} />
            <Route
              path="manageProduct"
              element={
                <RequireAdmin>
                  <ManageProduct />
                </RequireAdmin>
              }
            />
            <Route
              path="manageAllOrders"
              element={
                <RequireAdmin>
                  <ManageAllOrders />
                </RequireAdmin>
              }
            />
            <Route
              path="users"
              element={
                <RequireAdmin>
                  <Users />
                </RequireAdmin>
              }
            />
            <Route path='myOrder' element={<MyOrder/>} />
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
