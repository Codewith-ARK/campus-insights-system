import Sidebar from "@/components/sidebar/Sidebar";
import React from "react";

export const metadata = {
  title: "User Profile - Campus Insights System",
  description: "",
};


export default function RootLayout({ children }) {
  return (
    <Sidebar>
      {children}
    </Sidebar>
  );
}
