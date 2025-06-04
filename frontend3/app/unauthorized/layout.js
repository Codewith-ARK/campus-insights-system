import Sidebar from "@/components/sidebar/Sidebar";
import React from "react";

export const metadata = {
  title: "Unauthorized",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <Sidebar>
      {children}
    </Sidebar>
  );
}
