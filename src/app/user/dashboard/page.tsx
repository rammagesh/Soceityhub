import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <>
      <div className="">
        <h1>dashboard</h1>
        <Link href="/user">back</Link>
      </div>
    </>
  );
};

export default page;
