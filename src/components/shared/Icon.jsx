import { 
  LayoutDashboard, 
  Lock, 
  Tag, 
  ChevronDown, 
  Image as ImageIcon, 
  UserRound, 
  Ticket, 
  LifeBuoy, 
  Monitor, 
  Settings, 
  ChevronRight, 
  Search, 
  Bell, 
  Menu 
} from "lucide-react";

export const Icon = ({ name, className = "h-4 w-4 shrink-0", ...props }) => {
  const iconMap = {
    "layout-dashboard": LayoutDashboard,
    "lock": Lock,
    "tag": Tag,
    "chevron-down": ChevronDown,
    "image": ImageIcon,
    "user-round": UserRound,
    "ticket": Ticket,
    "life-buoy": LifeBuoy,
    "monitor": Monitor,
    "settings": Settings,
    "chevron-right": ChevronRight,
    "search": Search,
    "bell": Bell,
    "menu": Menu,
  };

  const Component = iconMap[name];
  if (!Component) return null;
  return <Component className={className} {...props} />;
};

export default Icon;
