import React from "react";

import SignUpForm from "@/components/forms/signup";

export default function SignUp() {
  return (
    <React.Fragment>
      <h1 className="h1">Create a new account</h1>
      <SignUpForm />
    </React.Fragment>
  );
}
