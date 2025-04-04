import React from "react";

interface AuthLayoutProps {
  children: React.ReactNode;
}

const AuthLayout: React.FC<AuthLayoutProps> = ({ children }) => {
  return (
    <div className="bg-[#ffffff] flex flex-col">
      <main className="">{children}</main>
    </div>
  );
};

export default AuthLayout;
