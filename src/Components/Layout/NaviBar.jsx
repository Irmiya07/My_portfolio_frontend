import { House, X, Sun, Moon, Menu } from "lucide-react";
import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { Link } from "react-scroll";

export const NaviBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const token = localStorage.getItem("token");
  const navigate = useNavigate();
  const [dark, setDark] = useState(() => {
    const stored = localStorage.getItem("theme");
    if (stored) {
      return stored === "dark";
    }
    return true;
  });
  const handleLogout = () => {
    localStorage.removeItem("token");
    setMenuOpen(false);
    navigate("/");
  };

  // Sync theme
  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [dark]);

  return (
<nav className="
fixed top-3 sm:top-4
left-1/2 -translate-x-1/2
w-[94%] sm:w-[95%]
max-w-6xl z-50
backdrop-blur-xl
bg-(--nav-bg)
border border-(--nav-border)
rounded-xl sm:rounded-2xl
shadow-lg
">

  <div className="
  flex items-center justify-between
  px-3 sm:px-6
  py-3 sm:py-4
  relative
  ">

    {/* Home Icon */}
    <Link to="hero" smooth duration={500} offset={-80}>
      <House className="size-5 sm:size-6 text-(--nav-text) cursor-pointer" />
    </Link>

    {/* Center Name */}
    <h1 className="
    absolute left-1/2 -translate-x-1/2
    text-sm sm:text-lg md:text-xl
    font-semibold text-(--nav-text)
    whitespace-nowrap
    ">
      Irmiya Palepogu
    </h1>

    {/* Right Icons */}
    <div className="flex items-center gap-2 sm:gap-4">
      <button onClick={() => setDark(!dark)}>
        {dark ? (
          <Sun className="size-5 sm:size-6 text-(--nav-text)" />
        ) : (
          <Moon className="size-5 sm:size-6 text-(--nav-text)" />
        )}
      </button>

      <button onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? (
          <X className="size-6 sm:size-7 text-(--nav-text)" />
        ) : (
          <Menu className="size-6 sm:size-7 text-(--nav-text)" />
        )}
      </button>
    </div>
  </div>

  {/* Dropdown Menu */}
  {menuOpen && (
    <div className="
    absolute right-2 sm:right-4
    top-full mt-2 sm:mt-3
    w-48 sm:w-56
    bg-(--nav-card)
    backdrop-blur-xl
    border border-(--nav-border)
    rounded-lg sm:rounded-xl
    px-4 sm:px-5 py-3 sm:py-4
    flex flex-col gap-2 sm:gap-3
    text-sm sm:text-base
    text-(--nav-text)
    shadow-lg
    ">

      <Link to="hero" smooth duration={500} offset={-80}
        onClick={() => setMenuOpen(false)} className="cursor-pointer">
        Home
      </Link>

      <Link to="projects" smooth duration={500} offset={-80}
        onClick={() => setMenuOpen(false)} className="cursor-pointer">
        Projects
      </Link>

      <Link to="certificates" smooth duration={500} offset={-80}
        onClick={() => setMenuOpen(false)} className="cursor-pointer">
        Certificates
      </Link>

      <Link to="skills" smooth duration={500} offset={-80}
        onClick={() => setMenuOpen(false)} className="cursor-pointer">
        Skills
      </Link>

      <Link to="contact" smooth duration={500} offset={-80}
        onClick={() => setMenuOpen(false)} className="cursor-pointer">
        Contact
      </Link>

      {!token && (
        <NavLink to="/admin/login" onClick={() => setMenuOpen(false)}>
          Admin
        </NavLink>
      )}

      {token && (
        <>
          <NavLink to="/admin/dashboard" onClick={() => setMenuOpen(false)}>
            Dashboard
          </NavLink>
          <button onClick={handleLogout} className="text-left">
            Logout
          </button>
        </>
      )}

    </div>
  )}
</nav>
  );
};
