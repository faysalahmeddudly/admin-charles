export const BREADCRUMB_CONFIG = [
  { path: "/", trail: () => [{ label: "Dashboard" }] },
  { path: "/dashboard", trail: () => [{ label: "Dashboard" }] },
  { path: "/orders", trail: () => [{ label: "Orders" }] },
  { path: "/orders/details", trail: () => [{ label: "Orders" }] },
  { path: "/products", trail: () => [{ label: "Products" }] },
  { path: "/products/categories", trail: () => [{ label: "Products" }] },
  {
    path: "/products/add",
    trail: () => [{ label: "Products", href: "/products" }, { label: "Add product" }],
  },
  {
    path: "/products/edit",
    trail: () => [{ label: "Products", href: "/products" }, { label: "Edit product" }],
  },
  { path: "/studio", trail: () => [{ label: "Design Studio Assets" }] },
  { path: "/studio/embroidery", trail: () => [{ label: "Design Studio Assets" }] },
  { path: "/customers", trail: () => [{ label: "Customers" }] },
  { path: "/coupons", trail: () => [{ label: "Coupons & Discounts" }] },
  { path: "/tickets", trail: () => [{ label: "Support Tickets" }] },
  { path: "/cms", trail: () => [{ label: "Content / CMS" }] },
  { path: "/settings", trail: () => [{ label: "Settings" }] },
];
