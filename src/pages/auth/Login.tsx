import { useState } from "react";
import { FiEye, FiEyeOff, FiLock, FiMail } from "react-icons/fi";

import AuthLayout from "../../layouts/AuthLayout";
import Button from "../../components/common/Button";
import Input from "../../components/common/Input";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <AuthLayout>
      <div className="w-full max-w-md rounded-2xl bg-white p-8 shadow-xl">

        <div className="mb-8">
          <h2 className="text-3xl font-bold text-gray-800">
            Welcome Back
          </h2>

          <p className="mt-2 text-gray-500">
            Sign in to continue
          </p>
        </div>

        <form className="space-y-6">

          <Input
            label="Email Address"
            placeholder="Enter your email"
            icon={<FiMail />}
          />

          <div className="relative">

            <Input
              label="Password"
              placeholder="Enter password"
              type={showPassword ? "text" : "password"}
              icon={<FiLock />}
            />

            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-4 top-[45px] text-gray-500"
            >
              {showPassword ? <FiEyeOff /> : <FiEye />}
            </button>

          </div>

          <div>

            <label className="mb-2 block text-sm font-medium text-gray-700">
              Role
            </label>

            <select className="w-full rounded-lg border border-gray-300 p-3 outline-none focus:border-blue-600">
              <option>Operations Executive</option>
              <option>Operations Manager</option>
              <option>Administrator</option>
            </select>

          </div>

          <Button type="submit">
            Login
          </Button>

        </form>

      </div>
    </AuthLayout>
  );
};

export default Login;