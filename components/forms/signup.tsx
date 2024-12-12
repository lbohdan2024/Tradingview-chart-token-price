"use client";
import Link from "next/link";
import { Button } from "@nextui-org/button";
import React from "react";
import { Eye, EyeOff } from "react-feather";

import FormInput from "./input/input";
import FormButton from "./button/button";
export default function SignUpForm() {
  const [isVisible, setIsVisible] = React.useState(false);
  const [isConfirmVisible, setIsConfirmVisible] = React.useState(false);
  const toggleVisibility = () => setIsVisible(!isVisible);
  const toggleConfrimVisibility = () => setIsConfirmVisible(!isConfirmVisible);

  return (
    <form className="form-vertical auth-form">
      <FormInput
        description="Should be the same as the email provided for payment*"
        label="Your Email"
        labelPlacement="outside"
        placeholder="Username"
        size="sm"
      />
      <FormInput
        description={
          <div>
            <div>Minimum length of 8 characters</div>
            <div>Contains at least one digit</div>
            <div>Contains at least one lowercase letter</div>
            <div>Contains at least one uppercase letter</div>
          </div>
        }
        endContent={
          <FormButton
          isIconOnly
            className="focus:outline-none"
            type="button"
            onClick={toggleVisibility}
          >
            {isVisible ? (
              <EyeOff className="text-2xl text-default-400 pointer-events-none" />
            ) : (
              <Eye className="text-2xl text-default-400 pointer-events-none" />
            )}
          </FormButton>
        }
        label="Password"
        size="sm"
        placeholder="Enter New password"
        type={isVisible ? "text" : "password"}
      />
      <FormInput
        endContent={
          <FormButton
            isIconOnly
            className="focus:outline-none"
            type="button"
            onClick={toggleConfrimVisibility}
            size="sm"
          >
            {isConfirmVisible ? (
              <EyeOff className="text-xl text-default-400 pointer-events-none" />
            ) : (
              <Eye className="text-xl text-default-400 pointer-events-none" />
            )}
          </FormButton>
        }
        label="Confirm Password"
        placeholder="Enter Confirm password"
        type={isConfirmVisible ? "text" : "password"}
      />
      <div>
        <FormButton
          className="button button-primary rounded-5"
          color="primary"
          type="submit"
        >
          Sign Up
        </FormButton>
      </div>
      <p className="text-sm font-light  text-primary-400">
        Do you have an account?{" "}
        <Link className="font-semibold" href="/login">
          Login
        </Link>
      </p>
    </form>
  );
}
