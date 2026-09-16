import { Link, matchPath, useLocation } from "react-router";
import Icon from "./Icon";
import { BREADCRUMB_CONFIG } from "../../lib/breadcrumbConfig";

function useBreadcrumbTrail() {
  const location = useLocation();
  const entry = BREADCRUMB_CONFIG.find((candidate) =>
    matchPath({ path: candidate.path, end: true }, location.pathname)
  );
  if (!entry) return [];
  return entry.trail();
}

export default function Topbar() {
  const trail = useBreadcrumbTrail();

  return (
    <header className="p-4 sm:p-6 lg:p-6 flex items-center justify-between gap-3 px-4 sm:px-6 border-b border-[#E2E8F0] bg-white sticky top-0 z-20">
      <div className="flex items-center gap-2 min-w-0">
        <button id="menuBtn" className="lg:hidden inline-flex shrink-0 items-center justify-center w-9 h-9 rounded-md border border-gray-300">
          <Icon name="menu" className="w-5 h-5" />
        </button>
        <div className="flex items-center gap-1 min-w-0">
          <p className="hidden sm:block text-sm text-[#94A3B8] shrink-0">Admin</p>
          {trail.map((crumb, index) => {
            const isLast = index === trail.length - 1;
            return (
              <span key={`${crumb.label}-${index}`} className="flex items-center gap-1 min-w-0">
                <Icon name="chevron-right" className="hidden sm:block w-5 h-5 shrink-0 text-[#94A3B8]" />
                {crumb.href && !isLast ? (
                  <Link to={crumb.href} className="hidden sm:block text-sm text-[#94A3B8] shrink-0 hover:text-[#334155]">
                    {crumb.label}
                  </Link>
                ) : (
                  <p className="font-bold text-sm text-[#334155] truncate">{crumb.label}</p>
                )}
              </span>
            );
          })}
        </div>
      </div>

      <div className="flex items-center gap-2 sm:gap-3 lg:gap-5 shrink-0">
        <div className="hidden md:flex items-center w-[200px] lg:w-[270px] h-9 px-3 gap-2 rounded-lg border border-[#E2E8F0] bg-[#F8FAFC]">
          <Icon name="search" className="w-4 h-4 text-[#94A3B8] shrink-0" />
          <input type="text" placeholder="Search anything..." className="w-full bg-transparent outline-none text-sm text-[#334155] placeholder:text-[#94A3B8] min-w-0" />
        </div>

        <button className="md:hidden relative w-9 h-9 flex items-center justify-center shrink-0">
          <Icon name="search" className="w-5 h-5 text-[#64748B]" />
        </button>

        <button className="relative w-9 h-9 flex items-center justify-center shrink-0">
          <Icon name="bell" className="w-5 h-5 text-[#64748B]" />
          <span className="absolute top-1 right-1 w-2 h-2 bg-[#EA3829] rounded-full"></span>
        </button>
      </div>
    </header>
  );
}
