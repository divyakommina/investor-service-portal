import type { ReactNode } from "react";

interface AuthLayoutProps {
  children: ReactNode;
}

const AuthLayout = ({ children }: AuthLayoutProps) => {
  return (
    <div className="min-h-screen grid lg:grid-cols-2">
      {/* Left Section */}
      <div className="hidden lg:flex flex-col justify-center bg-gradient-to-br from-blue-700 to-blue-900 px-16 text-white">
        <h1 className="text-5xl font-bold leading-tight">
          Investor Service Request
          <br />
          Management Portal
        </h1>

        <p className="mt-6 text-lg text-blue-100">
          Efficiently manage investor service requests,
          monitor ticket progress and ensure SLA compliance.
        </p>
      </div>

      {/* Right Section */}
      <div className="flex items-center justify-center bg-gray-50 p-6">
        {children}
      </div>
    </div>
  );
};

export default AuthLayout;