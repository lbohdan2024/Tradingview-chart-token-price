import { Button } from "@nextui-org/button";
import React from "react";

export default function ResetPassword() {
  title: "For";

  return (
    <React.Fragment>
      <h1>Forgot Password</h1>
      <div className="block mb-2 text-sm font-medium text-primary-400">
        <p className="mb-3">
          Please enter your registered email address below to receive
          instructions through email for setting a new password.
        </p>

        <br />
        <div className="mt-3">
          <Button
            className="button button-primary rounded-5"
            color="primary"
            type="submit"
          >
            Send Email
          </Button>
        </div>
      </div>
    </React.Fragment>
  );
}
