import { createBrowserRouter } from "react-router";
import Root from "../Root/Root";
import DashboardPage from "../Pages/Dashboard/DashboardPage";
import AddProductPage from "../Pages/Products/AddProductPage";
import CmsPage from "../Pages/Cms/CmsPage";
import CouponsPage from "../Pages/Coupons/CouponsPage";
import CustomersPage from "../Pages/Customers/CustomersPage";
import EditProductPage from "../Pages/Products/EditProductPage";
import LoginPage from "../Pages/Auth/LoginPage";
import OrdersPage from "../Pages/Orders/OrdersPage";
import OrderDetailsPage from "../Pages/Orders/OrderDetailsPage";
import ProductCategoriesPage from "../Pages/Products/ProductCategoriesPage";
import ProductsPage from "../Pages/Products/ProductsPage";
import RegisterPage from "../Pages/Auth/RegisterPage";
import SettingsPage from "../Pages/Settings/SettingsPage";
import StudioPage from "../Pages/Studio/StudioPage";
import StudioEmbroideryPage from "../Pages/Studio/StudioEmbroideryPage";
import TicketsPage from "../Pages/Tickets/TicketsPage";

const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      {
        index: true,
        Component: DashboardPage,
      },
      {
        path: "dashboard",
        Component: DashboardPage,
      },
      {
        path: "products",
        Component: ProductsPage,
      },
      {
        path: "products/add",
        Component: AddProductPage,
      },
      {
        path: "products/edit",
        Component: EditProductPage,
      },
      {
        path: "products/categories",
        Component: ProductCategoriesPage,
      },
      {
        path: "orders",
        Component: OrdersPage,
      },
      {
        path: "orders/details",
        Component: OrderDetailsPage,
      },
      {
        path: "customers",
        Component: CustomersPage,
      },
      {
        path: "coupons",
        Component: CouponsPage,
      },
      {
        path: "cms",
        Component: CmsPage,
      },
      {
        path: "settings",
        Component: SettingsPage,
      },
      {
        path: "tickets",
        Component: TicketsPage,
      },
      {
        path: "studio",
        Component: StudioPage,
      },
      {
        path: "studio/embroidery",
        Component: StudioEmbroideryPage,
      },
      {
        path: "login",
        Component: LoginPage,
      },
      {
        path: "register",
        Component: RegisterPage,
      },
    ],
  },
]);

export default router;
