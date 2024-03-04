import React from "react";
import Navbar from "../Navbar";
type AppSheelProps = {
  children: React.ReactNode;
};
export default function AppShell({ children }: AppSheelProps) {
  return (
    <>
      <Navbar />
      {children}
    </>
  );
}
