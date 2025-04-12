import React, { useState } from "react";
import { IoClose } from "react-icons/io5";
import { toast, ToastContainer } from "react-toastify";
import baseURL from "./baseURL/BaseURL";
import { useNavigate } from "react-router-dom";
const LoginPopUp = ({ onClose }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const validateForm = () => {
    const errors = {};
    if (!email) errors.email = "Email is required";
    if (!password) errors.password = "Password is required";
    return errors;
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);

    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      Object.values(validationErrors).forEach((error) => {
        toast.error(error);
      });
      setLoading(false);
      return;
    }

    try {
      const response = await baseURL.post(`/users/sign_in`, {
        user: { email, password },
      });
      if (response.status === 200) {
        // dispatch(authSliceActions.getRole(response.data.user.role));
        const { token } = response.data;
        localStorage.setItem("authToken", token);
        toast.success("Login Successfully");
        setTimeout(() => {
          navigate("/");
          window.location.reload();
        }, 2000);
      }
    } catch (error) {
      const errorMessage =
        error.response?.data?.error || "Something Went Wrong";
      toast.error(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <ToastContainer />
      <div className="fixed font-serif inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
        <div className="bg-white rounded-lg p-8 max-w-md w-full relative">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
          >
            <IoClose size={24} />
          </button>

          <h2 className="text-2xl font-bold mb-6 text-center font-serif">
            Login
          </h2>

          <form onSubmit={handleLogin} className="space-y-4">
            <div className="space-y-2">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md"
                placeholder="Enter your email"
                required
              />
            </div>

            <div className="space-y-2">
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md"
                placeholder="Enter your password"
                required
              />
            </div>

            <div className="flex justify-between items-center pt-4">
              <button
                type="submit"
                className="w-full bg-[#730000] text-white py-2 px-4 rounded-md hover:bg-[#730000] focus:outline-none focus:ring-2 focus:ring-[#730000]"
                disabled={loading}
              >
                {loading ? "Verifying..." : "Login"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default LoginPopUp;
