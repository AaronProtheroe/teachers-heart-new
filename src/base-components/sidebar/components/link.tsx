import type { Icon } from "@tabler/icons-react";
import { Link, useLocation } from "react-router-dom";

interface SidebarLinkProps {
  to: string;
  icon: Icon;
  name: string;
  onNavigate?: () => void;
}

export const CustomLink = ({
  to,
  icon: IconComponent,
  name,
  onNavigate,
}: SidebarLinkProps) => {
  const location = useLocation();
  const isActive = location.pathname === to;

  const handleClick = () => {
    if (onNavigate) {
      onNavigate();
    }
  };

  return (
    <Link
      to={to}
      onClick={handleClick}
      style={{
        padding: "0.75rem 1rem",
        borderRadius: "0.5rem",
        textDecoration: "none",
        backgroundColor: isActive ? "#eab308" : "transparent",
        transition: "background-color 0.2s",
        display: "flex",
        alignItems: "center",
        gap: "0.75rem",
        color: "inherit",
      }}
      onMouseEnter={(e) => {
        if (!isActive) {
          e.currentTarget.style.backgroundColor = "rgba(255, 255, 255, 0.1)";
        }
      }}
      onMouseLeave={(e) => {
        if (!isActive) {
          e.currentTarget.style.backgroundColor = "transparent";
        }
      }}
    >
      <IconComponent size={20} />
      <span>{name}</span>
    </Link>
  );
};
