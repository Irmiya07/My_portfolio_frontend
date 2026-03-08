import { login } from "../../apis/authService";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Logo } from "../../Components/common/Logo";
import { User, Lock, EyeOff, Eye } from "lucide-react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);
    try {
      const response = await login(email, password);
      localStorage.setItem("token", response.token);
      navigate("/admin/dashboard");
    } catch (error) {
      console.error("Login failed:", error);
      setError("Invalid credentials");
    } finally {
      setLoading(false);
    }
  };

return (
  <div className="
    min-h-screen 
    flex items-center justify-center 
    bg-(--page-bg) 
    text-(--page-text)
    px-4 sm:px-6 lg:px-12
    py-8
  ">

    <div className="
      w-full 
      max-w-6xl 
      grid 
      grid-cols-1 
      md:grid-cols-2 
      gap-8 
      items-center
    ">

      {/* LEFT - Logo */}
      <div className="
        hidden md:flex 
        justify-center 
        items-center
      ">
        <Logo />
      </div>

      {/* RIGHT - Form */}
      <div className="flex justify-center items-center">

        <form
          onSubmit={handleLogin}
          className="
            w-full 
            max-w-md
            bg-(--page-card) 
            border border-(--page-border) 
            p-6 sm:p-8
            rounded-2xl 
            shadow-lg
          "
        >

          <h2 className="
            text-3xl sm:text-4xl 
            font-bold 
            mb-6 
            text-center 
            text-(--page-primary)
          ">
            Welcome Back
          </h2>

          {/* Email */}
          <div className="mb-4 relative">
            <User
              className="absolute left-3 top-3 text-(--page-text)"
              size={20}
            />

            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="
                w-full 
                pl-10 pr-4 py-2.5
                bg-(--page-card) 
                border border-(--page-border) 
                rounded-lg 
                focus:outline-none 
                focus:ring-2 
                focus:ring-(--page-accent)
              "
            />
          </div>

          {/* Password */}
          <div className="mb-6 relative">
            <Lock
              className="absolute left-3 top-3 text-(--page-text)"
              size={20}
            />

            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="
                w-full 
                pl-10 pr-10 py-2.5
                bg-(--page-card) 
                border border-(--page-border) 
                rounded-lg 
                focus:outline-none 
                focus:ring-2 
                focus:ring-(--page-accent)
              "
            />

            <div
              className="
                absolute right-3 top-3 
                cursor-pointer 
                text-(--page-text)
              "
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <Eye size={20} /> : <EyeOff size={20} />}
            </div>
          </div>

          {error && (
            <p className="text-red-500 text-sm mb-4 text-center">
              {error}
            </p>
          )}

          <button
            type="submit"
            disabled={loading}
            className="
              w-full 
              py-2.5 
              rounded-lg 
              font-medium 
              bg-(--page-accent) 
              text-(--page-card)
              hover:opacity-90 
              transition
            "
          >
            {loading ? "Logging in..." : "Login"}
          </button>

        </form>
      </div>

    </div>
  </div>
);
};

export default Login;