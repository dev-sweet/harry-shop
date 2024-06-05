import { createBrowserRouter } from "react-router-dom";
import Home from "../components/Home/Home/Home";
import ErrorPage from "../components/Shared/NotFound";
import MainLayout from "../components/Layouts/MainLayout";
import ProductDetails from "../components/ProductDetails/ProductDetails";
import Login from "../components/Shared/Login";
import Register from "../components/Shared/Register";
import About from "../components/About/About";
import AllProducts from "../components/AllProducts/AllProducts";
import Contacts from "../components/Contacts/Contact";
import Dashboard from "../components/Dhasboard/Dashboard";
import PrivateRoute from "./PrivateRoute";
import DashboardLayout from "../components/Layouts/DashboardLayout";
import DashboardAllProducts from "../components/Dhasboard/DashboardAllProducts";
import EditProduct from "../components/Dhasboard/EditProduct";
import AddProduct from "../components/Dhasboard/AddProduct";
import EditProfile from "../components/Dhasboard/EditProfile";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/products",
        element: <AllProducts />,
      },
      {
        path: "/contacts",
        element: <Contacts />,
      },
      {
        path: "/products/:id",
        element: <ProductDetails />,
        loader: ({ params }) =>
          fetch(`https://harry-shop-server.onrender.com/products/${params.id}`),
      },
    ],
  },
  {
    path: "/dashboard",
    element: <DashboardLayout />,
    children: [
      {
        index: 1,
        element: (
          <PrivateRoute>
            <Dashboard />
          </PrivateRoute>
        ),
      },
      {
        path: "profile/edit",
        element: (
          <PrivateRoute>
            <EditProfile />
          </PrivateRoute>
        ),
      },
      {
        path: "all-products",
        element: (
          <PrivateRoute>
            <DashboardAllProducts />
          </PrivateRoute>
        ),
      },
      {
        path: "add-product",
        element: (
          <PrivateRoute>
            <AddProduct />
          </PrivateRoute>
        ),
      },
      {
        path: "all-products/edit/:id",
        element: (
          <PrivateRoute>
            <EditProduct />
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`https://harry-shop-server.onrender.com/products/${params.id}`),
      },
    ],
  },
]);
