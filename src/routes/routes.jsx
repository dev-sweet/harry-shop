import { createBrowserRouter } from "react-router-dom";
import Home from "../components/Home/Home/Home";
import ErrorPage from "../components/Shared/NotFound";
import MainLayout from "../components/Layouts/MainLayout";

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
      //   {
      //     path: "/login",
      //     element: <Login />,
      //   },
      //   {
      //     path: "/register",
      //     element: <Register />,
      //   },
      //   {
      //     path: "/about",
      //     element: <About />,
      //   },
      //   {
      //     path: "/products",
      //     element: <Products />,
      //   },
      //   {
      //     path: "/products/:id",
      //     element: <ProductDetails />,
      //     loader: ({ params }) =>
      //       fetch(`http://localhost:3000/products/${params.id}`),
      //   },
    ],
  },
  //   {
  //     path: "/dashboard",
  //     element: <DashboardLaout />,
  //     children: [
  //       {
  //         index: 1,
  //         element: (
  //           <PrivateRoute>
  //             <Dashboard />
  //           </PrivateRoute>
  //         ),
  //       },
  //       {
  //         path: "all-products",
  //         element: (
  //           <PrivateRoute>
  //             <AllProducts />
  //           </PrivateRoute>
  //         ),
  //       },
  //       {
  //         path: "add-product",
  //         element: (
  //           <PrivateRoute>
  //             <AddProduct />
  //           </PrivateRoute>
  //         ),
  //       },
  //       {
  //         path: "all-products/edit/:id",
  //         element: (
  //           <PrivateRoute>
  //             <EditProduct />
  //           </PrivateRoute>
  //         ),
  //         loader: ({ params }) =>
  //           fetch(`http://localhost:3000/products/${params.id}`),
  //       },
  //     ],
  //   },
]);
