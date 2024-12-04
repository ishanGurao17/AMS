import LoginIcon from "@mui/icons-material/Login";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { IconButton, InputAdornment, TextField } from "@mui/material";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

interface iFormData {
  email: string;
  password: string;
}

const LoginPage = () => {
  const [formData, setFormData] = useState<iFormData>({
    email: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const navigate = useNavigate();

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  const handleFormData = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-pink-500 to-purple-600">
      <div className="flex w-4/5 max-w-4xl rounded-lg shadow-lg overflow-hidden">
        <div className="w-1/2 bg-gradient-to-r from-purple-700 to-purple-900 text-white p-10 flex flex-col justify-center items-start">
          <h1 className="text-2xl font-bold mb-4">
            Attendence Management System
          </h1>
          <p className="mt-auto text-sm">www.maxscriptstechnologies.com</p>
        </div>

        <div className="w-1/2 bg-white p-10">
          <h2 className="text-3xl font-bold mb-6 text-gray-700">Sign In</h2>
          <form className="space-y-5">
            <div className="relative">
              <TextField
                type="text"
                name="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={handleFormData}
                sx={{ width: "80%" }}
              />
            </div>

            <div className="relative">
              <TextField
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleFormData}
                sx={{ width: "80%" }}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton onClick={togglePasswordVisibility} edge="end">
                        {showPassword ? (
                          <VisibilityOffIcon />
                        ) : (
                          <VisibilityIcon />
                        )}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />
            </div>
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-pink-500 to-purple-500 text-white font-bold py-3 rounded-lg hover:from-pink-600 hover:to-purple-600 transition-all"
              onClick={() => navigate("/dashboard")}
            >
              Log In <LoginIcon />
            </button>
          </form>
          <p className="text-center text-gray-500 mt-4">Forgot Password?</p>
          <div className="flex space-x-4 mt-4">
            <button className="flex-1 bg-blue-500 text-white py-3 rounded-lg hover:bg-blue-600 transition-all">
              Sign Up <PersonAddIcon />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
