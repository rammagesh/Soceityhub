import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <>
      <h1>user</h1>
      <Link href="/user/dashboard">Dashbaord</Link>
    </>
  );
};

export default page;
