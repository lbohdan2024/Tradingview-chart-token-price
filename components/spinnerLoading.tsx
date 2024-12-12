"use client";

import React from "react";
import Image from "next/image";

export default function SpinnerLoading(props: any) {
  return (
    <div
      className={`loading-container ${props.pageLoading ? "page-loading" : "section-loading"}`}
    >
      <Image alt="" height={25} src="/images/spinning-dots.svg" width={50} />
    </div>
  );
}
