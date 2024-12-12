import React from "react";
export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
     <section className="">
      <div className="auth-layout">
        <div className="login-container">{children}</div>
      </div>
    </section>    
    </>
  );
}
