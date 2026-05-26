import { Metadata } from "next";
import React from "react";
export const metadata: Metadata = {
  title: "Image Drop Ai | Profile",
  description: "Image Drop Ai | Profile",
};

const layout = ({ children }: { children: React.ReactNode }) => {
  return <>{children}</>;
};
export default layout;
