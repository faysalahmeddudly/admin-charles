import { useState } from "react";
import { NavLink } from "react-router";
import Icon from "./Icon";

const linkClass = ({ isActive }) =>
  `flex items-center gap-2.5 p-3 rounded-[12px] ${
    isActive
      ? "bg-[#EA3829] text-white"
      : "text-[#94A3B8] hover:bg-[#EA3829] hover:text-white"
  }`;

const subLinkClass = ({ isActive }) =>
  `flex items-center gap-2 px-3 py-3 rounded-[8px] ${
    isActive
      ? "bg-[#EA3829] text-white"
      : "text-[#94A3B8] hover:bg-[#EA3829] hover:text-white"
  }`;

export default function Sidebar({ isOpen = false, onClose }) {
  const [isProductsOpen, setIsProductsOpen] = useState(false);

  return (
    <>
      <aside
        id="sidebar"
        className={`fixed inset-y-0 left-0 z-50 w-[260px] sm:w-[280px] lg:w-[302px] ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } bg-[#070D19] border-r border-[#151E30] transition-transform duration-200 ease-in-out lg:static lg:translate-x-0 lg:shrink-0 flex flex-col justify-between overflow-y-auto`}
      >
        <div>
          <div className="flex items-center justify-between p-4 sm:p-6 lg:justify-center">
            <img src="/assets/logo.png" alt="Logo" className="h-9 sm:h-10 lg:h-16 w-auto rounded-lg" />
            <button id="closeSidebarBtn" onClick={onClose} className="lg:hidden inline-flex items-center justify-center w-9 h-9 rounded-md text-[#94A3B8] hover:bg-[#111827]">
              <Icon name="x" className="w-5 h-5" />
            </button>
          </div>

          <nav className="px-4 sm:px-6 lg:px-10 flex flex-col gap-1">
            <NavLink to="/dashboard" className={linkClass} onClick={onClose}>
              <Icon name="layout-dashboard" className="h-4 shrink-0" />
              <p className="text-sm">Dashboard</p>
            </NavLink>
            <NavLink to="/orders" className={linkClass} onClick={onClose}>
              <Icon name="lock" className="h-4 shrink-0" />
              <p className="text-sm">Orders</p>
            </NavLink>
            <div className="group">
              <NavLink
                to="/products"
                className={linkClass}
                onClick={() => {
                  setIsProductsOpen(true);
                  onClose?.();
                }}
              >
                <Icon name="tag" className="h-4 shrink-0" />
                <p className="text-sm">Products</p>
                <button
                  type="button"
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    setIsProductsOpen((open) => !open);
                  }}
                  className="ml-auto p-1 -m-1"
                >
                  <Icon
                    name="chevron-down"
                    className={`h-3 w-3 shrink-0 transition-transform ${isProductsOpen ? "rotate-180" : ""}`}
                  />
                </button>
              </NavLink>

              <div
                className={`${
                  isProductsOpen ? "flex" : "hidden"
                } group-hover:flex flex-col ml-5 mt-1 rounded-[8px] bg-[#111827]`}
              >
                <NavLink to="/products/categories" className={subLinkClass} onClick={onClose}>
                  <Icon name="tag" className="h-3.5 shrink-0" />
                  <p className="text-xs">Categories & Attributes</p>
                </NavLink>
              </div>
            </div>
            <NavLink to="/studio" className={linkClass} onClick={onClose}>
              <Icon name="image" className="h-4 shrink-0" />
              <p className="text-sm">Design Studio Assets</p>
            </NavLink>
            <NavLink to="/customers" className={linkClass} onClick={onClose}>
              <Icon name="user-round" className="h-4 shrink-0" />
              <p className="text-sm">Customers</p>
            </NavLink>
            <NavLink to="/coupons" className={linkClass} onClick={onClose}>
              <Icon name="ticket" className="h-4 shrink-0" />
              <p className="text-sm">Coupons & Discounts</p>
            </NavLink>
            <NavLink to="/tickets" className={linkClass} onClick={onClose}>
              <Icon name="life-buoy" className="h-4 shrink-0" />
              <p className="text-sm">Support Tickets</p>
            </NavLink>
            <NavLink to="/cms" className={linkClass} onClick={onClose}>
              <Icon name="monitor" className="h-4 shrink-0" />
              <p className="text-sm">Content / CMS</p>
            </NavLink>
            <NavLink to="/settings" className={linkClass} onClick={onClose}>
              <Icon name="settings" className="h-4 shrink-0" />
              <p className="text-sm">Settings</p>
            </NavLink>
          </nav>
        </div>

        <div className="bg-[#050913] p-4 sm:p-6 flex gap-3 items-center">
          <div className="h-8 w-8 shrink-0 bg-[#EA3829] flex items-center justify-center rounded-full">
            <span className="font-bold text-[12px] leading-4 tracking-[-0.3px] text-white">SM</span>
          </div>
          <div className="flex flex-col gap-[2px] min-w-0">
            <p className="font-bold text-[13px] leading-4 text-white truncate">Sarah Miller</p>
            <p className="text-[11px] leading-3.5 text-[#94A3B8] truncate">Store Manager</p>
          </div>
        </div>
      </aside>

      {/* Overlay (mobile only) */}
      <div
        id="overlay"
        onClick={onClose}
        className={`fixed inset-0 bg-black/30 z-30 lg:hidden ${isOpen ? "" : "hidden"}`}
      ></div>
    </>
  );
}
