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
    <nav className="fixed top-4 left-1/2 -translate-x-1/2 w-[95%] max-w-6xl z-50 backdrop-blur-xl bg-(--nav-bg) border border-(--nav-border) rounded-2xl shadow-lg">
      <div className="flex items-center justify-between px-6 py-4 relative">
        {/* Home */}
        <NavLink to="/">
          <House className="size-6 text-(--nav-text)" />
        </NavLink>

        {/* Center Name */}
        <h1 className="absolute left-1/2 -translate-x-1/2 text-xl font-semibold text-(--nav-text)">
          Irmiya Palepogu
        </h1>

        {/* Right Icons */}
        <div className="flex items-center gap-4">
          <button onClick={() => setDark(!dark)}>
            {dark ? (
              <Sun className="size-6 text-(--nav-text)" />
            ) : (
              <Moon className="size-6 text-(--nav-text)" />
            )}
          </button>

          <button onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? (
              <X className="size-7 text-(--nav-text)" />
            ) : (
              <Menu className="size-7 text-(--nav-text)" />
            )}
          </button>
        </div>
      </div>

      {/* Dropdown Menu */}
      {menuOpen && (
        <div className="absolute right-4 top-full mt-3 bg-(--nav-card) backdrop-blur-xl border border-(--nav-border) rounded-xl px-5 py-4 flex flex-col gap-3 text-(--nav-text) shadow-lg">
          <Link
            to="hero"
            smooth={true}
            duration={500}
            offset={-80}
            onClick={() => setMenuOpen(false)
            }
            className="cursor-pointer"
          >
            Home
          </Link>

          <Link
            to="projects"
            smooth={true}
            duration={500}
            offset={-80}
            onClick={() => setMenuOpen(false)}
            className="cursor-pointer"
          >
            Projects
          </Link>

          <Link
            to="certificates"
            smooth={true}
            duration={500}
            offset={-80}
            onClick={() => setMenuOpen(false)}
            className="cursor-pointer"
          >
            Certificates
          </Link>

          <Link
            to="skills"
            smooth={true}
            duration={500}
            offset={-80}
            onClick={() => setMenuOpen(false)}
            className="cursor-pointer"
          >
            Skills
          </Link>

          <Link
            to="contact"
            smooth={true}
            duration={500}
            offset={-80}
            onClick={() => setMenuOpen(false)}
            className="cursor-pointer"
          >
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

              <button onClick={handleLogout}>Logout</button>
            </>
          )}
        </div>
      )}
    </nav>
  );
};
