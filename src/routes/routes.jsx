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
        path: "/products/details/:id",
        element: <ProductDetails />,
        loader: ({ params }) =>
          fetch(`http://localhost:3000/products/${params.id}`),
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
        path: "all-products",
        element: (
          <PrivateRoute>
            <AllProducts />
          </PrivateRoute>
        ),
      },
    ],
  },
]);
